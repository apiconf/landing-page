/**
 * API Conf Lagos 2026 — Breakout interest (Google Apps Script)
 *
 * SETUP
 * 1. Create a Google Sheet. Rename the first tab to: Interest
 * 2. Row 1 headers (exact):
 *    email | day_number | time_slot | session_id | title | updated_at
 * 3. Extensions → Apps Script → paste this file as Code.gs
 * 4. Deploy → New deployment → Type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. Copy the web app URL into the landing page env:
 *    VITE_BREAKOUT_INTEREST_URL=https://script.google.com/macros/s/.../exec
 * 6. Redeploy after every script change (Manage deployments → Edit → New version).
 *
 * API
 * - GET  ?action=counts           → { ok, counts: { [sessionId]: number } }
 * - POST text/plain JSON body:
 *   { email, dayNumber, timeSlot, sessionId, title }
 *   → upserts by (email, day_number, time_slot), returns { ok, counts }
 */

var SHEET_NAME = 'Interest';
var CACHE_KEY = 'breakout_counts_v1';
var CACHE_SECONDS = 20;
var RATE_LIMIT_SECONDS = 3;

function doGet(e) {
  try {
    var action = (e && e.parameter && e.parameter.action) || 'counts';
    if (action === 'counts') {
      return json_({ ok: true, counts: getCounts_() });
    }
    return json_({ ok: false, error: 'Unknown action' });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  }
}

function doPost(e) {
  try {
    var raw = (e && e.postData && e.postData.contents) || '{}';
    var body = JSON.parse(raw);

    var email = normalizeEmail_(body.email);
    var dayNumber = Number(body.dayNumber);
    var timeSlot = String(body.timeSlot || '').trim();
    var sessionId = String(body.sessionId || '').trim();
    var title = String(body.title || '').trim();

    if (!email || !isValidEmail_(email)) {
      return json_({ ok: false, error: 'Valid email required' });
    }
    if (!dayNumber || !timeSlot || !sessionId) {
      return json_({ ok: false, error: 'dayNumber, timeSlot, and sessionId are required' });
    }

    // Light rate limit per email (directional signal only — not anti-fraud hard gate)
    var cache = CacheService.getScriptCache();
    var rateKey = 'rate_' + email;
    if (cache.get(rateKey)) {
      return json_({ ok: false, error: 'Please wait a moment and try again' });
    }
    cache.put(rateKey, '1', RATE_LIMIT_SECONDS);

    upsertInterest_({
      email: email,
      dayNumber: dayNumber,
      timeSlot: timeSlot,
      sessionId: sessionId,
      title: title,
    });

    cache.remove(CACHE_KEY);
    return json_({ ok: true, counts: getCounts_() });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  }
}

function upsertInterest_(row) {
  var sheet = getSheet_();
  var data = sheet.getDataRange().getValues();
  // data[0] = headers
  var now = new Date().toISOString();

  for (var i = 1; i < data.length; i++) {
    var existingEmail = normalizeEmail_(data[i][0]);
    var existingDay = Number(data[i][1]);
    var existingSlot = String(data[i][2] || '').trim();

    if (
      existingEmail === row.email &&
      existingDay === row.dayNumber &&
      existingSlot === row.timeSlot
    ) {
      // Update session_id, title, updated_at (columns D–F = 4–6)
      sheet.getRange(i + 1, 4, 1, 3).setValues([[row.sessionId, row.title, now]]);
      return;
    }
  }

  sheet.appendRow([
    row.email,
    row.dayNumber,
    row.timeSlot,
    row.sessionId,
    row.title,
    now,
  ]);
}

function getCounts_() {
  var cache = CacheService.getScriptCache();
  var cached = cache.get(CACHE_KEY);
  if (cached) {
    return JSON.parse(cached);
  }

  var sheet = getSheet_();
  var data = sheet.getDataRange().getValues();
  var counts = {};

  for (var i = 1; i < data.length; i++) {
    var sessionId = String(data[i][3] || '').trim();
    if (!sessionId) continue;
    counts[sessionId] = (counts[sessionId] || 0) + 1;
  }

  cache.put(CACHE_KEY, JSON.stringify(counts), CACHE_SECONDS);
  return counts;
}

function getSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow([
      'email',
      'day_number',
      'time_slot',
      'session_id',
      'title',
      'updated_at',
    ]);
  }
  return sheet;
}

function normalizeEmail_(value) {
  return String(value || '')
    .trim()
    .toLowerCase();
}

function isValidEmail_(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}

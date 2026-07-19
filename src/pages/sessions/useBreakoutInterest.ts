import { useCallback, useEffect, useState } from 'react';
import {
  fetchInterestCounts,
  isBreakoutInterestEnabled,
  type InterestCounts,
} from './interestApi';

const POLL_MS = 45_000;

export function useBreakoutInterest() {
  const enabled = isBreakoutInterestEnabled();
  const [counts, setCounts] = useState<InterestCounts>({});
  const [loading, setLoading] = useState(enabled);
  const [error, setError] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    if (!enabled) return;
    try {
      const next = await fetchInterestCounts();
      setCounts(next);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load counts');
    } finally {
      setLoading(false);
    }
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;
    void refresh();
    const id = window.setInterval(() => void refresh(), POLL_MS);
    return () => window.clearInterval(id);
  }, [enabled, refresh]);

  const mergeCounts = useCallback((next: InterestCounts) => {
    setCounts(next);
  }, []);

  return { enabled, counts, loading, error, refresh, mergeCounts };
}

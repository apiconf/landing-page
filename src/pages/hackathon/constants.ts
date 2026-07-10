export const LINKS = {
  monnifyApp: 'https://app.monnify.com',
  monnifyDocs: 'https://developers.monnify.com/',
  monnifyYoutube: 'https://www.youtube.com/@Monnify',
  register: '/register',
} as const;

export const PRIZES = [
  { place: 'Grand Winner', amount: '₦800,000', accent: '#E1EF9A' },
  { place: '2nd Place', amount: '₦500,000', accent: '#90EAF2' },
  { place: '3rd Place', amount: '₦250,000', accent: '#ECC89D' },
] as const;

export const JUDGING_CRITERIA = [
  'Solve a real problem or showcase a useful API workflow using Monnify.',
  'Have a clear structure, be onboarding-friendly, and easy to follow. We value clarity and storytelling.',
  'Include no errors, broken links, or exposed secrets. It is okay if features are not working — we do not expect a perfect solution.',
  'Include a public code repository with a step-by-step guide on how we can set it up locally.',
] as const;

export const RESOURCES = [
  { label: 'Monnify Developer Documentation', href: LINKS.monnifyDocs },
  { label: 'Monnify YouTube Channel', href: LINKS.monnifyYoutube },
  { label: 'Get sandbox keys', href: LINKS.monnifyApp },
] as const;

export const SUBMISSION_DEADLINE = '12pm WAT on the 21st of July, 2026';

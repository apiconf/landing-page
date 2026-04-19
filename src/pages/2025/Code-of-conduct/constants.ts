import { ReportingOption, Value } from './types';

export const values: Value[] = [
  {
    title: "Collaboration",
    description: "We believe in the power of working together to build innovative solutions."
  },
  {
    title: "Respect",
    description: "We treat all participants with dignity and courtesy."
  },
  {
    title: "Learning",
    description: "We foster an environment where knowledge sharing and growth are encouraged."
  },
  {
    title: "Inclusion",
    description: "We welcome people from all backgrounds and experience levels."
  }
];

export const expectedBehaviors: string[] = [
  "Be respectful and considerate in speech and actions",
  "Use welcoming and inclusive language",
  "Respect different viewpoints and experiences",
  "Accept constructive feedback gracefully",
  "Focus on what is best for the community",
  "Show empathy towards other community members",
  "Help create a safe and positive experience for everyone"
];

export const unacceptableBehaviors: string[] = [
  "Offensive comments related to gender, race, religion, disability, or physical appearance",
  "Sexual language, imagery, or advances",
  "Deliberate intimidation, stalking, or following",
  "Harassing photography or recording",
  "Sustained disruption of talks or other events",
  "Inappropriate physical contact",
  "Unwelcome sexual attention",
  "Advocating for, or encouraging, any of the above behavior"
];

export const scopeAreas: string[] = [
  "Conference venue and all session rooms",
  "Networking areas and meal spaces",
  "Social events and after-parties",
  "Online spaces (social media, chat platforms, etc.)",
  "All conference-related communications"
];

export const reportingOptions: ReportingOption[] = [
  {
    method: "Conference organizers",
    description: "(identifiable by special badges/t-shirts)"
  },
  {
    method: "Email",
    description: ": hello@apiconf.net"
  }
];

export const enforcementRights: string[] = [
  "Remove, edit, or reject comments, commits, code, wiki edits, issues, and other contributions that are not aligned with this Code of Conduct",
  "Temporarily or permanently ban any participant for behaviors they deem inappropriate, threatening, offensive, or harmful",
  "Expel participants from the conference without warning or refund"
];

export const consequences: string[] = [
  "Warning the participant",
  "Expelling the participant from the conference with no refund",
  "Banning the participant from future events",
  "Reporting to appropriate authorities if warranted"
];
export type SessionDetails = {
  id: string;
  title: string;
  timeFrame: string;
  timeSlot: string;
  duration: string;
  type: string;
  room: string;
  speaker?: string;
  sessionSpeakers?: {
    name: string;
    role?: string;
    image?: string;
  }[];
  abstract?: string;
  host?: string;
  panelist?: string;
  panelSpeakers?: {
    name: string;
    role: string;
    bio?: string;
    image?: string;
  }[];
  color?: string;
  isFullSpan?: boolean,
  className?: string;
}

export type ScheduleData = {
  title: string;
  days: {
    dayNumber: number;
    label: string;
    date: string;
    sessions: SessionDetails[];
  }[];
}

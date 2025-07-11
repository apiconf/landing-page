export type SessionDetails = {
  id: string;
  title: string;
  timeFrame: string;
  timeSlot: string;
  duration: string;
  type: string;
  room: string;
  speaker?: string;
  host?: string;
  panelist?: string;
  color?: string;
  isFullSpan?: boolean,
  className?: string;
}

export type ScheduleData = {
  title: string;
  days: {
    dayNumber: number;
    date: string;
    sessions: SessionDetails[];
  }[];
}
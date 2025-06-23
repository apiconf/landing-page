export type SessionDetails = {
  id: string;
  title: string;
  timeFrame: string;
  timeSlot: string;
  duration: string;
  type: string;
  room: string;
  speaker?: string;
  color?: string;
}

export type ScheduleData = {
  title: string;
  days: {
    dayNumber: number;
    date: string;
    sessions: SessionDetails[];
  }[];
}
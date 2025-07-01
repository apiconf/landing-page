import { SessionDetails } from '../pages/sessions/types';
import { scheduleData } from '../pages/sessions/scheduleData';
import { useState } from 'react';

export const useSchedule = () => {
  const [selectedSession, setSelectedSession] = useState<SessionDetails | null>(null);
  const [activeDay, setActiveDay] = useState<number>(1);

  const handleSessionClick = (session: SessionDetails) => {
    setSelectedSession(session);
  };

  return {
    scheduleData,
    selectedSession,
    activeDay,
    handleSessionClick,
    setActiveDay,
    setSelectedSession 
  };
}
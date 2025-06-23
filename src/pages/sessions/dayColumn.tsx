import { SessionCard } from './sessionCard'
import { SessionDetails } from './types'

interface DayColumnProps {
    day: {
        dayNumber: number;
        date: string;
        sessions: SessionDetails[];
    };
}

export const DayColumn = ({ day }: DayColumnProps) => {
    const sessionsByTime = day.sessions.reduce((acc, session) => {
        if (!acc[session.timeFrame]) acc[session.timeFrame] = [];
        acc[session.timeFrame].push(session);
        return acc;
    }, {} as Record<string, SessionDetails[]>);

    return (
        <div className="day-column">
            <div className="day-header">
            </div>
            {Object.entries(sessionsByTime).map(([timeFrame, sessions]) => (
                <div key={timeFrame} className="flex flex-col gap-1 mb-4 md:mb-0">
                    <div className="flex gap-8 items-center">
                        <h2 className="font-bold text-base">{timeFrame}</h2>
                        <hr className="flex-1 border-t border-[#D9D9D9] border-0" />
                    </div>
                    <div className="md:ml-16">
                        {sessions.length > 1 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {sessions.map(session => (
                                    <SessionCard key={session.id} session={session} />
                                ))}
                            </div>
                        ) : (
                            <div>
                                {sessions.map(session => (
                                    <SessionCard key={session.id} session={session} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            ))
            }
        </div >
    )
}
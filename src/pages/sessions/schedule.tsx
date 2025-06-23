import { DayColumn } from './dayColumn'
import { ScheduleData } from './types'
import { useState } from 'react';

interface ScheduleProps {
    data: ScheduleData;
}

export const Schedule = ({ data }: ScheduleProps) => {
    const [activeDay, setActiveDay] = useState<number>(1);
    const activeDayData = data.days.find(day => day.dayNumber === activeDay);
    
    const getRoundedClass = (dayNumber: number, isActive: boolean) => {
        const isOddDay = dayNumber % 2 === 1; 
        
        if (isOddDay) {
            return isActive 
                ? 'rounded-l-[3.35rem]  md:rounded-[3.35rem]'
                : 'rounded-l-[3.35rem] md:rounded-[3.35rem]';
        } else {
            return isActive 
                ? 'rounded-r-[3.35rem] md:rounded-[3.35rem]'
                : 'rounded-r-[3.35rem] md:rounded-[3.35rem]';
        }
    };
    
    return (
        <div 
            className="bg-[#FFFFFF] shadow-sm p-8 bg-contain bg-no-repeat"
            style={{
                backgroundImage: `url(/session/session-bg.svg), url(/session/Schedule.svg)`,
                backgroundPosition: 'top, right',
                backgroundRepeat: 'no-repeat, no-repeat',
                backgroundSize: 'contain, contain'
            }}
        >
            <div className="mx-auto max-w-7xl">
                <div className="flex gap-6 md:p-4 flex-col">
                    <h1 className="font-bold text-3xl whitespace-nowrap text-center md:text-left md:text-5xl text-[#1F1F1F]">{data.title}</h1>
                    <div className="flex justify-center md:justify-start md:gap-2">
                        {data.days.map((day) => {
                            const isActive = activeDay === day.dayNumber;
                            const roundedClass = getRoundedClass(day.dayNumber, isActive);
                            
                            return (
                                <button
                                    key={day.dayNumber}
                                    onClick={() => setActiveDay(day.dayNumber)}
                                    className={`
                                        px-6 py-3 font-bold text-sm whitespace-nowrap md:text-xl transition-all duration-200 border-2
                                        ${isActive
                                            ? `bg-dark-purple text-white ${roundedClass}`
                                            : `bg-[#F5F5F5] text-[#000000] ${roundedClass} border-none`
                                        }
                                    `}
                                >
                                    Day {day.dayNumber} - {day.date}
                                </button>
                            );
                        })}
                    </div>
                </div>
                {activeDayData && (
                    <div className="mt-4">
                        <DayColumn
                            day={activeDayData}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}
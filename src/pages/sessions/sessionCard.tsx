import { SessionDetails } from "./types";

interface SessionCardProps {
  session: SessionDetails;
}

export const SessionCard = ({ session }: SessionCardProps) => {
  return (
    <div
      className="flex flex-col gap-[9px] rounded-[.75rem] py-6 px-4"
      style={{ backgroundColor: session.color }}
    >
      <div className="flex w-full items-center justify-between">
        <div className=" flex  gap-3 bg-white rounded-[3.25rem] py-1 px-2">
          <p className="text-[#6E6E6E] text-[.625rem] whitespace-nowrap uppercase md:text-sm">{session.type}</p>
        </div>
        <div className="flex items-center whitespace-nowrap text-[.625rem] lg:text-sm">
          <span className="font-bold">{session.timeSlot}</span>
          <span className="mx-1">•</span>
          <span className="font-bold">{session.duration}</span>
          <span className="mx-1">•</span>
          <span className="font-bold">{session.room}</span>
        </div>
      </div>
      <p className="font-bold text-sm md:text-base">{session.title}</p>
      <p className="font-bold text-sm md:text-base text-gray  ">{session.speaker}</p>
      
    </div>
  )
}


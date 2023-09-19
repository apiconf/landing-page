import { DateTime, Interval } from "luxon";

import ticket from "../assets/ticket-blue-bg.svg";

const calcDiff = () => {
  const currentDateTime = DateTime.local().setZone("UTC+1");
  const eventDateTime = DateTime.fromISO("2023-10-15T12:00:00").setZone(
    "UTC+1",
  );
  if (currentDateTime >= eventDateTime) return "It's Today";
  const interval = Interval.fromDateTimes(currentDateTime, eventDateTime);
  const duration = Math.floor(interval.length("days"));
  return duration === 1 ? "1 Day to Go" : duration + " Days to Go";
};

const DaysToGo = () => {
  const diff = calcDiff();
  return (
    <section className="days-section py-[34px] sm:py-[105px] flex justify-center items-center sm:bg-center">
      <div className="flex flex-col text-[#FFFFFF] items-center gap-[5px]">
        <h2 className="text-[45px] font-bold">{diff}</h2>
        <p className="text-[24px] font-medium">
          14th October, 2023
          <span className="hidden sm:inline"> - Unilag Hall, Lagos***</span>
        </p>
        <button className="h-[52px] py-4 px-6 mt-[30px] flex justify-center items-center gap-x-2 rounded-6xl bg-gradient-to-b from-[#FBF3EA] from-0% via-[rgba(255, 255, 255, 0)] via-100% to-[#E2EF9C] hover:to-[#C8E042]">
          <img className="w-4" src={ticket} alt="ticket" />
          <span className="text-base font-bold text-purple">
            Register to Save your Spot
          </span>
        </button>
      </div>
    </section>
  );
};

export default DaysToGo;

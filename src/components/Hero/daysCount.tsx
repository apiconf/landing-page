import { useState, useEffect } from "react";
import { DateTime, Interval } from "luxon";
import IconTimer from "../../assets/icon-play.svg";

const timeDifference = () => {
  let message = "3 Days to Go";
  const currentDateTime = DateTime.local().setZone("UTC+1");
  const eventDateTime = DateTime.fromISO("2023-10-15T12:00:00").setZone(
    "UTC+1",
  );

  if (currentDateTime.toISODate() === eventDateTime.toISODate()) {
    message = "It's Today!";
  } else if (currentDateTime > eventDateTime) {
    message = "check out the recap";
  } else {
    const interval = Interval.fromDateTimes(currentDateTime, eventDateTime);
    const duration = interval.length("seconds");

    if (interval.length("months") >= 1) {
      // Calculate months
      const months = Math.floor(interval.length("months"));
      message = `${months} month${months !== 1 ? "s" : ""} to Go`;
    } else if (duration >= 86400) {
      // Calculate days
      const days = Math.floor(duration / 86400);
      message = `${days} Day${days !== 1 ? "s" : ""} to Go`;
    } else if (duration >= 3600) {
      // Calculate hours
      const hours = Math.floor(duration / 3600);
      message = `${hours} hour${hours !== 1 ? "s" : ""} to Go`;
    } else if (duration >= 60) {
      // Calculate minutes
      const minutes = Math.floor(duration / 60);
      message = `${minutes} minute${minutes !== 1 ? "s" : ""} to Go`;
    } else if (duration > 0) {
      // Calculate seconds
      message = `${duration} second${duration !== 1 ? "s" : ""} to Go`;
    }
  }
  return message;
};

const DaysCount = () => {
  const [daysNo, setDaysNo] = useState("");

  useEffect(() => {
    setDaysNo(timeDifference());
  }, []);

  return (
    <button className="rounded-3xl py-3 pl-6 pr-4 bg-[#000] flex justify-center items-center gap-x-2 shadow-timerBtn">
      <span className="text-base font-extrabold text-[#F1F1F1]">{daysNo}</span>
      <img src={IconTimer} alt="" />
    </button>
  );
};
export default DaysCount;

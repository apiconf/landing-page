import { useState, useEffect } from "react";
import { DateTime } from "luxon";

const HeaderDateTime = () => {
  const [currentTime, setCurrentTime] = useState("09:28");

  useEffect(() => {
    const updateTime = () => {
      const lagosTime = DateTime.now().setZone("UTC+1").toFormat("HH:mm");
      setCurrentTime(lagosTime);
    };

    const interval = setInterval(updateTime, 1000); // Update the time every second

    updateTime(); // Initialize the time

    return () => {
      clearInterval(interval); // Cleanup the interval when the page is closed (component unmount)
    };
  }, []);

  return (
    <div className="max-w-[221px] w-full hidden md:flex items-center gap-x-1">
      <span className="block w-4 h-4 bg-[#ECC89D] rounded"></span>
      <span>{currentTime} GMT Lagos, Nigeria</span>
    </div>
  );
};
export default HeaderDateTime;

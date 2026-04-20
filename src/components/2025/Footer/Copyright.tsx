import { useEffect, useState } from "react";

const Copyright = () => {
  const [year, setYear] = useState(2024);
  useEffect(() => {
    const todayDate = new Date();
    const currentYear = todayDate.getFullYear();
    setYear(currentYear);
  }, []);

  return (
    <p className="hidden sm:block bg-[#1F1F1F] py-[30px] lg:py-[49px] px-[8%] sm:px-[5%] 2xl:px-[7.4%] text-[#A6A6A6] leading-[22.32px] text:base md:text-lg font-bold md:font-medium">
      {year} API Conference team
    </p>
  );
};
export default Copyright;

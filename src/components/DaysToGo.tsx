import ticket from "../assets/ticket-blue-bg.svg";
import { timeDifference } from "./Hero/daysCount";

const calcDiff = () => {
  return timeDifference();
};

const DaysToGo = () => {
  const diff = calcDiff();
  return (
    <section className="w-full days-section py-[34px] sm:py-[105px] flex justify-center items-center sm:bg-center">
      <div className="flex flex-col text-[#FFFFFF] items-center gap-[5px]">
        <h2 className="text-[45px] font-bold">{diff}</h2>
        <p className="text-[24px] font-medium">
          20th July, 2024
          <span className="hidden sm:inline"> - Lagos***</span>
        </p>
        <a
          href="https://lu.ma/apiconflagos24"
          rel="noopener noreferrer"
          target="_blank"
          className="cursor-pointer h-[52px] py-4 px-6 mt-[30px] flex justify-center items-center gap-x-2 rounded-6xl bg-gradient-to-b from-[#FBF3EA] from-0% via-[rgba(255, 255, 255, 0)] via-100% to-[#E2EF9C] hover:to-[#C8E042]"
        >
          <img className="w-4" src={ticket} alt="ticket" />
          <span className="text-base font-bold text-purple">
            Register to Save your Spot
          </span>
        </a>
      </div>
    </section>
  );
};

export default DaysToGo;

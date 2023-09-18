import IconTicket from "../assets/icon-ticket.svg";

const FloatingBtn = () => {
  return (
    <div className="z-50 fixed inset-x-0 bottom-8 mx-auto hidden md:flex max-w-[384px] h-[68px] w-full flex justify-between items-center pl-8 py-9 pr-2 rounded-[40px] bg-white shadow-bannerBtn text-base">
      <span className="text-primary-black font-extrabold">
        14th, October 2023
      </span>
      <button className="max-w-[179px] w-full px-6 py-4 rounded-6xl flex justify-between items-center border-2 border-solid border-[#7147F6] bg-gradient-to-b from-[#7147F6] from-0% via-[rgba(255, 255, 255, 0)] via-100% to-custom-blue hover:to-[#2F1C81]">
        <span className="w-4 h-[16px] flex justify-center items-center rounded bg-white">
          <img className="w-3 h-[12px]" src={IconTicket} alt="" />
        </span>
        <span className="text-white font-bold">Save your Spot</span>
      </button>
    </div>
  );
};
export default FloatingBtn;

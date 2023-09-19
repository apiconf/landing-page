interface CTACardProps {
  title: string;
  subTitle: string;
  btnIcon: string;
  btnText: string;
}

const CTACard = ({ title, subTitle, btnIcon, btnText }: CTACardProps) => {
  return (
    <div className="relative w-full h-full p-8 z-20 bg-[linear-gradient(184deg,#ECC89D_-12.3%,rgba(236,200,157,0.00)_27.29%)]">
      <div className="max-w-[400px] w-full h-full flex flex-col justify-between z-20">
        <h3 className="text-[25px] leading-normal font-bold text-white">
          {title}
        </h3>
        <h4 className="text-base pt-4 pb-8 leading-[110%] font-medium text-white">
          {subTitle}
        </h4>
        <button className="max-w-fit h-[52px] px-6 flex gap-2 justify-center items-center bg-gradient-to-b from-[#FBF3EA] from-[0%] via-[rgba(255, 255, 255, 0)] via-[100%] to-[#E2EF9C] hover:to-[#C8E042] rounded-6xl">
          <span className="block w-4 h-4 bg-[#4121CF] flex justify-center items-center rounded">
            <img src={btnIcon} alt="" />
          </span>
          <span className="text-[#4121CF] font-extrabold">{btnText}</span>
        </button>
      </div>
    </div>
  );
};
export default CTACard;

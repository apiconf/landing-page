import BgAbout from "../../assets/about-title-bg.svg";

interface AboutCardProps {
  title: string;
  subTitle: string;
  info: string;
}

const AboutCard = ({ title, subTitle, info }: AboutCardProps) => {
  return (
    <div className="bg-transparent max-w-[495px] md:max-w-full p-[6.7%] sm:p-6 md:flex-[1_1_495px] flex flex-col justify-center gap-y-4 text-primary-black rounded-3xl shadow-aboutCard">
      <h3 className="relative max-w-[192px] w-full h-[37px] flex justify-center items-center text-white text-center font-MonumentExtended-extrabold text-[18.414px] md:text-[16px] lg:text-[18.414px] leading-[1]">
        <img
          className="absolute inset-0 margin-auto w-full"
          src={BgAbout}
          alt=""
        />
        <span className="leading-tight z-10">{title}</span>
      </h3>
      <h4 className="text-[25px] font-bold">{subTitle}</h4>
      <p className="text-base font-medium opacity-80 leading-[110%]">{info}</p>
    </div>
  );
};
export default AboutCard;

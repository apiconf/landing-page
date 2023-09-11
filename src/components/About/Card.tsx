/* eslint-disable react-refresh/only-export-components */
import "../../App.css";

interface AboutCardProps {
  title: string;
  subTitle: string;
  info: string;
}

const AboutCard = ({ title, subTitle, info }: AboutCardProps) => {
  return (
    <div className="bg-transparent max-w-[495px] p-[6.7%] sm:p-6 flex flex-col justify-center gap-y-4 text-primary-black rounded-3xl shadow-aboutCard">
      <h3 className="max-w-[192px] w-full h-[37px] bg-aboutTitleBg bg-no-repeat bg-contain flex justify-center items-center text-white font-MonumentExtended-extrabold text-[18.414px] leading-[1]">
        {title}
      </h3>
      <h4 className="text-[25px] font-bold">{subTitle}</h4>
      <p className="text-base font-medium opacity-80 leading-[110%]">{info}</p>
    </div>
  );
};
export default AboutCard;

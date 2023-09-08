import IconTimer from "../../assets/icon-play.svg";
import ImageTicket from "../../assets/image-ticket.png";
import ImageSpeaker from "../../assets/image-speaker.png";
import IconTicket from "../../assets/icon-ticket.svg";
import HeroCards from "./cards";
import {ApplyBtn, VolunteerBtn} from "./heroBtn";

const Hero = () => {
  return (
    <section className="flex justify-center pt-[48px] pb-6xl px-[16px] lg:pt-[47.65px] lg:pb-[64px] lg:px-[64px]">
      <div className="max-w-dsktp w-full flex flex-col gap-y-12">
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-y-6 md:gap-x-6">
          <div className="max-w-[358px] md:max-w-[450px] lg:max-w-[600px] flex flex-col items-center md:items-start gap-y-4">
            <button className="w-[163px] rounded-3xl py-3 bg-black flex justify-center items-center gap-x-2 shadow-timerBtn">
              <span className="text-base font-extrabold text-[#F1F1F1]">X Days to Go</span>
              <img src={IconTimer} alt="" />
            </button>
            <h1 className="font-[720] text-[32px] text-center md:text-3xl md:text-left lg:text-4xl xl:text-5xl text-primary-black">Convening the Driving Force to Shape the Future of APIs</h1>
            <p className="font-medium text-lg text-center md:text-xl md:text-left lg:text-2xl text-gray">
              Promoting API literacy in the developer ecosystem regardless of your
              expertise or skill level.
            </p>
          </div>
          <div className="max-w-[358px] lg:max-w-[664px] w-full flex flex-col lg:flex-row justify-center lg:justify-between gap-y-4 lg:gap-x-6">
            <HeroCards image={ImageTicket} title="Save your Spot!" >
              <ApplyBtn text="Register" extra=" to Attend" />
            </HeroCards>
            <HeroCards image={ImageSpeaker} title="Be a Speaker" >
              <VolunteerBtn text="Volunteer" extra=" to Speak" />
            </HeroCards>
          </div>
        </div>
        <div className="h-[256px] bg-sm-banner sm:h-[400px] sm:bg-lg-banner bg-no-repeat bg-cover bg-center rounded-3xl flex justify-center pt-[220px]">
          <div className="hidden sm:flex max-w-[384px] h-[68px] w-full flex justify-between items-center pl-8 py-2 pr-2 rounded-[40px] bg-primary-white shadow-bannerBtn text-base">
            <span className="text-primary-black font-extrabold">14th, October 2023</span>
            <button className="max-w-[179px] w-full px-6 py-4 rounded-6xl flex justify-between items-center border-2 border-solid border-[#7147F6] hover:border-transparent bg-gradient-to-b from-[#7147F6] from-0% via-[rgba(255, 255, 255, 0)] via-100% to-[#4334D3] hover:to-[#2F1C81]">
              <span className="w-4 h-[16px] flex justify-center items-center rounded bg-primary-white">
              <img className="w-3 h-[12px]" src={IconTicket} alt="" />
              </span>
              <span className="text-primary-white font-bold">Save your Spot</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;

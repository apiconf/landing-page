import ImageTicket from "../../assets/image-ticket.png";
import ImageSpeaker from "../../assets/image-speaker.png";
import HeroCards from "./cards";
import { ApplyBtn, VolunteerBtn } from "./heroBtn";
import DaysCount from "./daysCount";

const Hero = () => {
  return (
    <section className="flex justify-center pt-[48px] pb-[23.68px] px-[5%] sm:px-[4%] lg:pt-[47.65px] lg:pb-[64px]">
      <div className="w-full flex flex-col gap-y-12">
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-y-6 md:gap-x-6">
          <div className="max-w-[358px] md:max-w-[450px] lg:max-w-[600px] flex flex-col items-center md:items-start gap-y-4">
            <DaysCount />
            <h1 className="font-[720] text-[32px] text-center md:text-3xl md:text-left lg:text-4xl xl:text-5xl text-primary-black leading-snug lg:leading-normal">
              Convening the Driving Force to Shape the Future of APIs
            </h1>
            <p className="font-medium text-lg text-center md:text-xl md:text-left lg:text-2xl text-gray leading-snug lg:leading-normal">
              Promoting API literacy in the developer ecosystem regardless of
              your expertise or skill level.
            </p>
          </div>
          <div className="max-w-[358px] lg:max-w-[664px] w-full flex flex-col lg:flex-row justify-center lg:justify-between gap-y-4 lg:gap-x-6">
            <HeroCards image={ImageTicket} title="Save your Spot!">
              <ApplyBtn text="Register" extra=" to Attend" />
            </HeroCards>
            <HeroCards image={ImageSpeaker} title="Be a Speaker">
              <VolunteerBtn text="Volunteer" extra=" to Speak" />
            </HeroCards>
          </div>
        </div>
        <div className="h-[256px] sm:h-[400px] bg-sm-banner sm:bg-lg-banner bg-no-repeat bg-cover bg-center rounded-3xl"></div>
      </div>
    </section>
  );
};
export default Hero;

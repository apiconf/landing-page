import ImageRegister from "../../assets/img-register-attend.svg";
import ImageVolunteer from "../../assets/img-volunteer-speak.svg";
import IconTicket from "../../assets/icon-ticket-white.svg";
import IconSpeaker from "../../assets/icon-speaker-no-bg.svg";
import CTACard from "./card";

const CallToAction = () => {
  return (
    <div className="hidden md:flex items-stretch justify-center gap-8 px-[5%] sm:px-[4%] pt-[32px] pb-[8.5px] sm:py-[64px]">
      <div className="relative w-full bg-custom-blue rounded-3xl overflow-hidden">
        <img
          className="absolute h-full inset-y-0 right-0 z-10"
          src={ImageRegister}
          alt=""
        />
        <div className="absolute w-full h-full inset-0 opacity-[.12] bg-[url('../../src/assets/bg-grains.svg')] bg-contain bg-blend-soft-light z-10"></div>
        <CTACard
          title="Register to Save your Seat!"
          subTitle="Professionals with experience in working with APIs in software systems."
          btnIcon={IconTicket}
          btnText="Register to Attend"
        />
      </div>
      <div className="relative w-full bg-custom-blue rounded-3xl overflow-hidden">
        <img
          className="absolute h-[95%] inset-y-0 my-auto right-0 z-10"
          src={ImageVolunteer}
          alt=""
        />
        <div className="absolute w-full h-full inset-0 opacity-[.12] bg-[url('../../src/assets/bg-grains.svg')] bg-contain bg-blend-soft-light z-10"></div>
        <CTACard
          title="Volunteer to Speak on a Topic!"
          subTitle="Professionals with experience in working with APIs in software systems."
          btnIcon={IconSpeaker}
          btnText="Apply to Speak"
        />
      </div>
    </div>
  );
};

export default CallToAction;

import IconHeart from "../../assets/Icon-heart.svg";
import ImageSponsor from "../../assets/Image-sponsor.svg";
import InquireContact from "./card";

const Sponsor = () => {
  return (
    <section className="w-full px-[5%] sm:px-[4%] pt-[40.5px] pb-[99px] sm:pb-[33px] sm:py-[64px] bg-custom-blue flex flex-col items-center gap-[48px]">
      <div className="flex justify-center md:justify-between w-full gap-8">
        <div className="w-full flex flex-col items-start sm:items-center md:items-start">
          <h2 className="font-[720] text-[25px] text-center md:text-3xl md:text-left lg:text-4xl xl:text-[40px] text-white">
            Sponsor API Conf Lagos
          </h2>
          <p className="text-white opacity-90 pt-2 pb-5 font-medium">
            <span className="hidden md:block text-base">
              Step into the future with us. Be an integral part of API Conf,
              Lagos 2024.
            </span>
            <span className="block md:hidden text-[20px] leading-normal">
              Learn and connect through the major driving force.
            </span>
          </p>
          <a
            href="https://forms.gle/Mt4YqBtmzTEPw3EK7"
            rel="noopener noreferrer"
            target="_blank"
            className="cursor-pointer max-w-full sm:max-w-[358px] md:max-w-fit  w-full h-[52px] px-6 flex gap-2 justify-center items-center bg-gradient-to-b from-[#FBF3EA] from-[0%] via-[rgba(255, 255, 255, 0)] via-[100%] to-[#E2EF9C] hover:to-[#C8E042] rounded-6xl"
          >
            <span className="block w-4 h-4 bg-[#4121CF] flex justify-center items-center rounded">
              <img src={IconHeart} alt="" />
            </span>
            <span className="text-[#4121CF] font-extrabold">Sponsor Us</span>
          </a>
        </div>
        <img className="hidden md:block w-[250px]" src={ImageSponsor} alt="" />
      </div>
      <div className="w-full flex flex-col md:flex-row items-center gap-6 md:items-stretch md:justify-between text-center">
        <h3 className="max-w-full sm:max-w-[467px] md:max-w-full md:flex-[1_1_330px] w-full bg-white p-6 flex flex-col items-center justify-center text-base font-extrabold text-custom-blue font-MonumentExtended-extrabold leading-[110%] rounded-3xl">
          For More Inquiries on Sponsorship
        </h3>
        <InquireContact
          contactName="SODIQ AKINJOBI"
          linkedInUrl="https://www.linkedin.com/in/geektutor/"
          email="sodiq.akinjobi@gmail.com"
        />
        <InquireContact
          contactName="GBADEBO BELLO"
          linkedInUrl="https://www.linkedin.com/in/gbahdeyboh/"
          email="gbahdeybohbello@gmail.com"
        />
      </div>
    </section>
  );
};
export default Sponsor;

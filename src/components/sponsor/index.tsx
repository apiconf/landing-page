import ImageSponsor from "../../assets/Image-sponsor.svg";
import heart from "../../assets/icons/iconamoon_heart-fill.svg";
import InquireContact from "./card";

const Sponsor = () => {
  return (
    <section className="w-full px-[5%] sm:px-[4%] pt-[40.5px] pb-[99px] sm:pb-[33px] sm:py-[64px] bg-custom-blue flex flex-col items-center gap-[48px]">
      <div className="flex justify-center md:justify-between w-full gap-4">
        <div className="flex flex-col items-start justify-around gap-4 col-span-1">
          <h1 className="text-white text-3xl font-semibold">
            Sponsor API Conf Lagos
          </h1>
          <p className="text-[color:#E2EF9C] ">
            <span className="hidden md:block">
              Step into the future with us. Be an integral part of API Conf,
              Lagos 2023.
            </span>
            <span className="block md:hidden">
              Learn and connect through the major driving force.
            </span>
          </p>
          <button className="btn flex items-center justify-center bg-gradient-to-r from-[#ECC89D] to-[#E2EF9C] rounded-full w-full md:w-[200px] text-[#4121CF] font-semibold py-4 gap-2">
            {" "}
            <div className="bg-[#4121CF] p-1 rounded">
              <img src={heart} alt="" />
            </div>{" "}
            Sponsor Us
          </button>
        </div>
        <img className="hidden md:block w-[250px]" src={ImageSponsor} alt="" />
      </div>
      <div className="w-full flex flex-col md:flex-row items-center gap-6 md:items-stretch md:justify-between">
        <h3 className="w-full sm:max-w-[467px] md:max-w-[330px] bg-white p-6 flex flex-col text-center items-center justify-center text-base font-extrabold text-custom-blue font-MonumentExtended-extrabold leading-[110%] rounded-3xl">
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

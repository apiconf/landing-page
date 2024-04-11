import SponsorImage from '../../assets/sponsor.png';
import InquireContact from './card';

const Sponsor = () => {
  return (
    <section className="bg-[#90EAF2] w-screen  overflow-hidden  justify-around  md:grid grid-cols-5 px-[5%] py-12">
      <div className="col-span-3 space-y-16 md:py-32">
        <div className="space-y-2 w-full">
          <h2 className="font-[720] w-full text-[48px] md:text-[25px] md:text-3xl text-left lg:text-4xl xl:text-[40px] text-black">
            Sponsor API Conf Lagos
          </h2>
          <p className="md:max-w-[500px] text-lg text-justify">
            Contribute to organising the biggest Convention of API Enthusiasts
            and Builders in Lagos!
          </p>
        </div>

        <div className="md:flex items-start gap-x-16 space-y-8 md:space-y-0">
          <InquireContact
            contactName="Sodiq Akinjobi"
            linkedInUrl="https://www.linkedin.com/in/geektutor/"
            email="sodiq.akinjobi@gmail.com"
          />
          <InquireContact
            contactName="Gbadebo Bello"
            linkedInUrl="https://www.linkedin.com/in/gbahdeyboh/"
            email="gbahdeybohbello@gmail.com"
          />
        </div>

        <button className="bg-white font-bold rounded-full text-black text-center max-w-[340px] h-[68px] w-full">
          More Details in Deck
        </button>
      </div>
      <div className="hidden md:block col-span-2">
        <img src={SponsorImage} alt="" />
      </div>
    </section>
  );
};
export default Sponsor;

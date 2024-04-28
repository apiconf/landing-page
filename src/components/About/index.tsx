import AboutCard from "./Card";
import AboutLogo from "../../assets/about-logo.svg";

const About = () => {
  return (
    <section className="relative bg-custom-blue">
      <div className="w-full h-full absolute inset-0 z-10 opacity-40 bg-sm-aboutSectionBg bg-no-repeat bg-top bg-contain md:bg-[93.4%_auto] sm:bg-lg-aboutSectionBg"></div>
      <div className="px-[5%] sm:px-[4%] pt-[32px] pb-[8.5px] md:py-[64px] z-20">
        <div className="flex flex-col items-center gap-y-[71px] lg:gap-y-32">
          <p className="max-w-[1184px] text-[#E2EF9C] font-medium text-[18px] md:text-[25px] md:text-3xl lg:text-4xl xl:text-5xl leading-tight md:leading-tight lg:leading-tight xl:leading-tight">
            The goal{" "}
            <span className="hidden sm:inline">
              of <b className="font-extrabold">API Conf Lagos</b>{" "}
            </span>
            is to promote API literacy amongst the different developer
            ecosystems that exist within Lagos, and in the future,
            Nigeria/Africa regardless of your expertise or skill level.
          </p>
          <div className="w-full rounded-3xl bg-white p-6 sm:pt-10 sm:px-8 sm:pb-8">
            <h2 className="w-full pb-6 text-left sm:text-center md:text-left text-purple font-bold text-[25px] md:text-3xl lg:text-4xl xl:text-5xl">
              API Conf Lagos is Tailored For You
            </h2>
            <div className="h-max flex flex-col-reverse md:flex-row justify-center lg:justify-between items-center md:items-stretch gap-6">
              <AboutCard
                title="Experienced"
                subTitle="Seasoned Professionals"
                info="Professionals with experience in working with APIs in software systems."
              />
              <AboutCard
                title="Foundational"
                subTitle="Professionals with Foundational Understanding"
                info="Individuals keen on understanding APIs, with a foundational understanding of coding."
              />
              <img
                className="block md:hidden xl:block max-w-[310px] md:max-w-[210px] w-full md:w-[20%]"
                src={AboutLogo}
                alt="APICONF Logo without the name."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;

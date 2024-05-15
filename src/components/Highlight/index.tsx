import { EmblaOptionsType } from "embla-carousel";
import highlightLogo from "../../assets/highlight-logo.svg";
import Carousel from "./carousel";
import { useGetSlides } from "../../hooks";

const OPTIONS: EmblaOptionsType = { loop: true };

function Higlight() {
  const SLIDES = useGetSlides();
  return (
    <>
      <div className="relative w-full bg-[#90EAF2] pt-16 md:pt-28 flex flex-col justify-center overflow-hidden">
        <img
          className="absolute z-20 top-8 md:top-16 left-[4%] sm:left-[2.5%] 2xl:left-[3.7%] max-w-[182.77px] lg:max-w-[365.53px] w-full"
          src={highlightLogo}
          alt=""
        />

        <div className="hidden md:block bg-[#ECC89D]/40 blur-md  md:h-[128px] md:w-[128px] absolute -right-10 top-0 rounded-full"></div>
        {/* <Carousel /> */}
        <Carousel slides={SLIDES} options={OPTIONS} />

        <div className="flex items-center justify-between py-8 md:py-16 px-[8%] sm:px-[5%] 2xl:px-[7.4%]">
          <a
            className="w-min hsm:w-fit text-black font-bold z-10 text-lg sm:text-xl md:text-2xl leading-[22.32px] sm:leading-[24.8px] md:leading-[29.76px]"
            href="https://photos.app.goo.gl/eCNfTAnKczQfqu9x5"
          >
            2023 Highlights
          </a>
          <a
            className="w-min hsm:w-fit text-black font-bold z-10 text-lg sm:text-xl md:text-2xl leading-[22.32px] sm:leading-[24.8px] md:leading-[29.76px]"
            href="https://lu.ma/apiconflagos24"
          >
            <span className="hidden hsm:inline">The</span> Nest Meetup
          </a>
        </div>
      </div>
    </>
  );
}

export default Higlight;

import { EmblaOptionsType } from "embla-carousel";
import { Link } from "react-router-dom";
import highlightLogo from "../../assets/highlight-logo.svg";
import Carousel from "./carousel";

type Props = {};

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

function Higlight({}: Props) {
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
          <Link
            className="text-black font-bold z-10 text-lg sm:text-xl md:text-2xl leading-[22.32px] sm:leading-[24.8px] md:leading-[29.76px]"
            to="/"
          >
            2023 Highlights
          </Link>
          <Link
            className="text-black font-bold z-10 text-lg sm:text-xl md:text-2xl leading-[22.32px] sm:leading-[24.8px] md:leading-[29.76px]"
            to="/"
          >
            The Next Meetup
          </Link>
        </div>
      </div>
    </>
  );
}

export default Higlight;

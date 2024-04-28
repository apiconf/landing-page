import { EmblaOptionsType } from 'embla-carousel';
import { Link } from 'react-router-dom';
import highlightLogo from '../../assets/highlight-logo.svg';
import Carousel from './carousel';

type Props = {};

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

function Higlight({}: Props) {
  return (
    <>
      <div className="relative md:min-h-screen flex flex-col  justify-center  bg-[#90EAF2] w-screen py-4">
        <img
          className="absolute top-4  md:top-12 left-4 md:left-12 z-20 h-16 md:h-[100px]"
          src={highlightLogo}
          alt=""
        />

        <div className="hidden md:block bg-[#ECC89D]/40 blur-md   md:h-[128px] md:w-[128px] absolute -right-10 top-0 rounded-full"></div>
        {/* <Carousel /> */}
        <Carousel slides={SLIDES} options={OPTIONS} />

        <div className="flex text-black items-center justify-between p-6 md:p-12 font-bold bg-red-400">
          <Link className="z-10" to="/">
            2023 Highlights
          </Link>
          <Link className="z-10" to="/">
            The Next Meetup
          </Link>
        </div>
      </div>
    </>
  );
}

export default Higlight;

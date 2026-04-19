import { EmblaOptionsType } from 'embla-carousel';
import highlightLogo from '@/assets/highlight-logo.svg';
import Carousel from './carousel';
import { useGetSlides } from '@/hooks';

const OPTIONS: EmblaOptionsType = { loop: true };

function Higlight() {
  const SLIDES = useGetSlides();
  return (
    <>
      <div className="relative flex w-full flex-col justify-center overflow-hidden bg-[#90EAF2] pt-16 md:pt-28">
        <img
          className="absolute left-[4%] top-8 z-20 w-full max-w-[182.77px] sm:left-[2.5%] md:top-16 lg:max-w-[365.53px] 2xl:left-[3.7%]"
          src={highlightLogo}
          alt=""
        />

        <div className="absolute -right-10 top-0 hidden rounded-full bg-[#ECC89D]/40 blur-md md:block md:h-[128px] md:w-[128px]"></div>
        {/* <Carousel /> */}
        <Carousel slides={SLIDES} options={OPTIONS} />

        <div className="flex items-center justify-between px-[8%] py-8 sm:px-[5%] md:py-16 2xl:px-[7.4%]">
          <a
            className="text-black z-10 w-min text-lg font-bold leading-[22.32px] hsm:w-fit sm:text-xl sm:leading-[24.8px] md:text-2xl md:leading-[29.76px]"
            href="https://photos.app.goo.gl/eCNfTAnKczQfqu9x5"
          >
            2023 Highlights
          </a>
          <a
            className="text-black z-10 w-min text-lg font-bold leading-[22.32px] hsm:w-fit sm:text-xl sm:leading-[24.8px] md:text-2xl md:leading-[29.76px]"
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

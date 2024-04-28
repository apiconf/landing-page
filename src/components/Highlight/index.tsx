import { Link } from 'react-router-dom';
import highlightLogo from '../../assets/highlight-logo.svg';
import Carousel from './carousel';

type Props = {};

function Higlight({}: Props) {
  return (
    <div className="relative md:min-h-screen flex flex-col  justify-center  bg-[#90EAF2] w-screen">
      <img
        className="absolute top-4  md:top-12 left-4 md:left-12 z-20 h-16 md:h-[100px]"
        src={highlightLogo}
        alt=""
      />

      <div className="hidden md:block bg-[#ECC89D]/40 blur-md   md:h-[128px] md:w-[128px] absolute -right-10 top-0 rounded-full"></div>
      <Carousel />

      <div className="flex text-black items-center justify-between p-6 md:p-12 font-bold bg-red-400">
        <Link className="z-10" to="/">
          2023 Highlights
        </Link>
        <Link className="z-10" to="/">
          The Next Meetup
        </Link>
      </div>

      <div className="embla w-screen h-scre en">
        <div className="embla__viewport">
          33
          <div className="embla__container">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                className="embla__slide bg-black mx-8 h-[200px] md:h-[400px] lg:h-[700px] rounded-3xl"
                key={index}
              >
                <div className="embla__slide__number">
                  <span>{index + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Higlight;

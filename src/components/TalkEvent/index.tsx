import Spaces from "./Spaces";
import Speaker from "./Speaker";
import Mic from "../../assets/mic.svg";
import MicFrequency from "../../assets/mic-frequency.svg";
import ArrowUp from "../../assets/arrow-up.svg";
import BGSpaces from "../../assets/Spaces.png";
import BGSpacesMobile from "../../assets/Spaces-mobile.png";

const TalkEvent = () => {
  return (
    <section className="w-full relative  bg-dark-purple flex justify-center items-center ">
      <img
        src={BGSpacesMobile}
        className="absolute md:hidden block right-0 top-0 z-0"
        data-aos="fade-up"
      />
      <img
        src={BGSpaces}
        className="absolute md:block hidden bottom-0 top-0 z-0"
        data-aos="fade-up"
      />
      <div className=" w-full  md:w-[75%]" data-aos="fade-up">
        <div
          className="md:w-[70%] md:mt-0 mt-28 md:mb-0 mb-32 relative z-50 md:mx-auto flex md:flex-row flex-col justify-center lg:justify-start gap-5"
          data-aos="fade-up"
        >
          <Spaces
            iconOne={Mic}
            iconTwo={MicFrequency}
            title="API Error Handling"
            subTitle="@Anitaihuman • 30th March 2024"
            btnIcon={ArrowUp}
            btnText="Play Recording"
            link="https://lu.ma/apiconflagos24"
          />
          <Spaces
            iconOne={Mic}
            iconTwo={MicFrequency}
            title="API Error Handling"
            subTitle="@Anitaihuman • 30th March 2024"
            btnIcon={ArrowUp}
            btnText="Play Recording"
            link="https://lu.ma/apiconflagos24"
          />
        </div>
        <Speaker />
      </div>
    </section>
  );
};
export default TalkEvent;

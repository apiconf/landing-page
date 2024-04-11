import Spaces from "./Spaces";
import Speaker from "./Speaker";
import Mic from "../../assets/mic.svg";
import MicFrequency from "../../assets/mic-frequency.svg";
import ArrowUp from "../../assets/arrow-up.svg";

const TalkEvent = () => {
  return (
    <section className="w-full bg-dark-purple flex justify-center items-center ">
      <div className=" w-[75%] bg-spaces bg-no-repeat bg-contain bg-top " data-aos="fade-up">
        <div className="flex justify-center items-center flex-wrap gap-5" data-aos="fade-up">
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

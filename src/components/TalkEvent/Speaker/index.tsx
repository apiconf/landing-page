import SpeakImg from "../../../assets/speak-image.png";

const Speaker = () => {
  return (
    <div className="flex md:justify-between w-full my-[50px]">
      <div className="w-[595px] h-[407]flex flex-col items-start sm:items-center md:items-start " data-aos="fade-up">
        <h2 className="font-[720] text-[64px] text-center md:text-3xl md:text-left lg:text-4xl xl:text-[40px] text-white w-[60%] mt-6 mb-4">
          Speak at APIConf Lagos 2024
        </h2>
        <p className="text-white opacity-90 pt-2 pb-5 font-medium w-[50%]">
          Some body of text to accompany visually solid idea per section.
        </p>
        <a
          href="https://forms.gle/Mt4YqBtmzTEPw3EK7"
          rel="noopener noreferrer"
          target="_blank"
          className="cursor-pointer max-w-full sm:max-w-[358px] md:max-w-fit  w-full h-[52px] px-[5.5rem] py-[2rem] flex gap-2 justify-center items-center bg-peach  rounded-6xl " data-aos="fade-up"
        >
          <span className="text-dark font-extrabold">Apply to Speak</span>
        </a>
      </div>
      <div>
        <img className="h-[300px] " data-aos="fade-up" src={SpeakImg} alt="" />
      </div>
    </div>
  );
};
export default Speaker;

import SpeakImg from "../../../assets/speak-image.png";

const Speaker = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full lg:my-[50px] md:my-[50px] ">
      <div
        className="w-[90%] m-auto flex flex-col lg:items-start justify-center"
        data-aos="fade-up"
      >
        <h2 className="text-[48px] xl:text-[40px] font-[720] text-white lg:w-[90%] xl:w-[70%] lg:text-left lg:mt-5 mb-4">
          Speak at APIConf Lagos 2024
        </h2>
        <p className="text-white opacity-90 pt-2 pb-5 font-medium md:w-[55%] w-full lg:text-left">
          Some body of text to accompany visually solid idea per section.
        </p>
        <a
          href="https://forms.gle/Mt4YqBtmzTEPw3EK7"
          rel="noopener noreferrer"
          target="_blank"
          className="cursor-pointer sm:px-[5.5rem] sm:py-[1rem] px-[1rem] py-[1rem] flex gap-2 justify-center items-center bg-peach  rounded-6xl mb-8"
          data-aos="fade-up"
        >
          <span className="text-dark font-extrabold">Apply to Speak</span>
        </a>
      </div>
      <div>
        <img
          className="h-[300px] sm:w-full m-auto"
          data-aos="fade-up"
          src={SpeakImg}
          alt=""
        />
      </div>
    </div>
  );
};
export default Speaker;

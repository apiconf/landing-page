/* eslint-disable react-refresh/only-export-components */
import "../../App.css";
import { imageText, rectangle, imageAbstract } from "../../assets";

const Body = () => {
  return (
    <>
      <body className="bg-custom-blue">
        <div className="relative">
          <p className="absolute text-[color:#E2EF9C] text-lg font-medium py-10 px-10 sm:text-lg md:text-lg lg:text-xl xl:text-4xl 2xl:text-4xl lg:px-28 lg:py-24">
            The goal of <b>API Conf Lagos</b> is to promote API literacy amongst
            the different developer ecosystems that exist within Lagos, and in
            the future, Nigeria/Africa regardless of your expertise or skill
            level.
          </p>
          <img src={imageText} alt="Trademarks" className="px-4" />
        </div>
      </body>
      <Card />
    </>
  );
};
const Card = () => {
  return (
    <body className="bg-custom-blue">
        <div className="px-10 pt-[160px] lg:pt-10 pb-8">
        <div className="bg-[color:white] rounded-2xl flex lg:flex-col justify-end items-start self-stretch gap-2 lg:gap-4 p-6">
            <h1 className=" text-[color:#4334D3] text-2xl lg:text-3xl font-bold">
            API Conf Lagos is Tailored For You
            </h1>
            <div className=" flex items-start max-[450px]:flex-col gap-6 self-stretch">
                <div className="flex p-6 rounded-2xl shadow-lg self-stretch gap-4 flex-1 flex-col">
                    <div className="relative pt-4">
                    <h1 className="absolute text-[color:white] text-2xl font-extrabold px-4 py-5 right-0 bottom-0 left-0 top-0">Experienced</h1>
                    <img src={rectangle} className="shrink-0" />
                    </div>
                    <p className="text-2xl font-medium "> Seasoned Professionals</p>
                    <p className="">Professionals with experience in working with APIs in software systems.</p>
                </div>
                <div className="flex p-6 rounded-2xl shadow-2xl self-stretch gap-4 flex-1 flex-col">
                <div className="relative pt-4">
                    <h1 className="absolute text-[color:white] text-2xl font-extrabold pl-2 py-5 right-0 bottom-0 left-0 top-0">Foundational</h1>
                    <img src={rectangle} className="shrink-0" />
                    </div>
                    <p className="text-2xl font-medium "> Professionals with Foundational Understanding</p>
                    <p className="">Individuals keen on understanding APIs, with a foundational understanding of coding.</p>
                </div>
                <img className="shrink-0 gap-4 pt-6" src={imageAbstract} alt="Trademarks" />
        </div>
        </div>
        </div>
    </body>
  );
};

export default Body;

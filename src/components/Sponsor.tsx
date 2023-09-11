// icons
import heart from "../assets/icons/iconamoon_heart-fill.svg";
import rectangle from "../assets/icons/Frame30.png";

const Sponsor = () => {
  return (
    <div className="w-full h-max mb-5 bg-[#4121CF] lg:p-12 py-8 px-[5%] sm:px-[4%] flex flex-col items-start gap-5 ">
      <div className="flex lg:flex-row items-start justify-between flex-col  w-full gap-4">
        <div className="flex flex-col items-start justify-around gap-4 col-span-1">
          <h1 className="text-primary-white text-3xl font-semibold">
            Sponsor API Conf Lagos
          </h1>
          <p className="text-[color:#E2EF9C] ">
            Step into the future with us. Be an integral part of API Conf, Lagos
            2023.
          </p>
          <button className="btn flex items-center justify-center bg-gradient-to-r from-[#ECC89D] to-[#E2EF9C] rounded-full w-[200px] text-[#4121CF] font-semibold py-4 gap-2">
            {" "}
            <div className="bg-[#4121CF] p-1 rounded">
              <img src={heart} alt="" />
            </div>{" "}
            Sponsor Us
          </button>
        </div>
        {/* replace image here */}
        <div className="flex items-end justify-end">
          <img className="h-[200px] w-[300px]" src={rectangle} alt="" />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-4 w-full">
        <div className="items-center text-center flex justify-center flex-col rounded-3xl bg-white h-[120px] p-8">
          <h1 className="text-2xl font-bold text-[#4121CF]">
            For More Inquiries on Sponsorship
          </h1>
        </div>
        <div className="items-center text-center flex justify-center flex-col gap-2 rounded-3xl bg-gradient-to-r from-[#ECC89D] to-[#E2EF9C] h-[120px]">
          <div
            className={`w-[200px]  rounded-full text-xl p-2 text-[#4121CF] font-bold name-bg`}
          >
            SODIQ AKINJOBI
          </div>
          <p className="text-sm font-semibold">sodiq.akinjobi@gmail.com</p>
        </div>
        <div className="items-center text-center flex justify-center flex-col gap-2 rounded-3xl bg-gradient-to-r from-[#ECC89D] to-[#E2EF9C] h-[120px]">
          <div
            className={`w-[200px]  rounded-full text-xl p-2 text-[#4121CF] font-bold name-bg`}
          >
            GBADEBO BELLO
          </div>
          <p className="text-sm font-semibold">gbahdeybohbello@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;

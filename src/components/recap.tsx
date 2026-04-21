import Marquee from 'react-fast-marquee';
// import bannerImg from '../assets/recap.png';

export default function Recap() {
  return (
    <section className="w-full bg-[#000000] bg-[linear-gradient(to_top,_rgba(144,234,242,.3)_0%,_rgba(0,0,0,0)_9%)] leading-none text-white">
      <div className="flex w-full flex-col items-center gap-y-8 px-[5.9701%] py-16 md:px-[7.4074%]">
        <h2 className="fluid-h2-48-32">2025 Recap</h2>
        <div className="vid-h-fluid relative w-full overflow-hidden rounded-[3rem] border-2 border-solid border-custom-blue">
          {/* <img
            src={bannerImg}
            alt="2024 API Conference Recap"
            className="w-full h-full object-cover bg-[radial-gradient(circle,_transparent_0%,_#90EAF2_100%)]"
          /> */}
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/n27XIo2J9tA?si=tDrOnm2oYFG9cwk_"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          {/* <a
            className="w-[133px] h-[62px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] no-underline bg-[#E1EF9A] rounded-[2rem] cursor-pointer flex justify-center items-center text-2xl font-bold text-[#000000]"
            href="#"
            aria-label="Watch 2024 recap video"
            role="button"
          >
            Watch
          </a> */}
        </div>
      </div>
      <div className="flex w-full flex-col gap-y-8 py-16">
        <div className="flex flex-col gap-y-8 px-[5.9701%] md:px-[8.7963%]">
          <h3 className="flex h-[28px] w-[93px] items-center justify-center rounded-2xl border border-solid border-[#ECC89D] bg-[#FFF] text-lg font-bold text-[#000000] shadow-[inset_0_0_12px_0_#E1EF9A]">
            THEMES
          </h3>
          <h4 className="recap-fluid-heading font-bold">2026 Topics in Focus</h4>
        </div>
        <Marquee autoFill={true} className="flex w-full items-center overflow-x-hidden">
          <p className="glowing-text ml-[-6%] flex w-full items-center justify-center overflow-x-hidden text-[5.50rem]">
            <span>Artificial Intelligence</span>
            <span className="mx-9 mb-[16px] block">→</span>
            <span>Security</span>
            <span className="mx-9 mb-[16px] block">→</span>
            <span>Governance</span>
            <span className="mx-9 mb-[16px] block">→</span>
          </p>
        </Marquee>
        <Marquee autoFill={true} className="flex w-full items-center overflow-x-hidden">
          <p className="glowing-text ml-[-6%] flex w-full items-center justify-center overflow-x-hidden text-[5.50rem]">
            <span>Security</span>
            <span className="mx-9 mb-[16px] block">→</span>
            <span>Governance</span>
            <span className="mx-9 mb-[16px] block">→</span>
            <span className="">Artificial Intelligence</span>
            <span className="mx-9 mb-[16px] block">→</span>
          </p>
        </Marquee>
      </div>
    </section>
  );
}

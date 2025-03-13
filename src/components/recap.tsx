import Marquee from "react-fast-marquee";
import bannerImg from "../assets/recap.png";

export default function Recap() {
    return (
        <section className="w-full bg-[#000000] bg-[linear-gradient(to_top,_rgba(144,234,242,.3)_0%,_rgba(0,0,0,0)_9%)] text-white leading-none">
            <div className="w-full py-16 px-[5.9701%] md:px-[7.4074%] flex flex-col items-center gap-y-8">
                <h2 className="font-bold recap-fluid-heading">2024 Recap</h2>
                <div className="relative w-full vid-h-fluid overflow-hidden border-2 border-solid border-custom-blue rounded-[3rem]">
                <img src={bannerImg} alt="" className="w-full h-full object-cover bg-[radial-gradient(circle,_transparent_0%,_#90EAF2_100%)]" />
                <a className="w-[133px] h-[62px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] no-underline bg-[#E1EF9A] rounded-[2rem] cursor-pointer flex justify-center items-center text-2xl font-bold text-[#000000]" href="">Watch</a>
                </div>
            </div>
            <div className="w-full py-16 flex flex-col gap-y-8">
                <div className="px-[5.9701%] md:px-[8.7963%] flex flex-col gap-y-8">
                <h4 className="w-[93px] h-[28px] bg-[#FFF] border border-solid border-[#ECC89D] shadow-[inset_0_0_12px_0_#E1EF9A] rounded-2xl flex justify-center items-center text-lg text-[#000000] font-bold">THEMES</h4>
                <h3 className="font-bold recap-fluid-heading">2025 Topics in Focus</h3>
                </div>
                <Marquee
                    autoFill={true}
                    className="w-full flex items-center overflow-x-hidden"
                >
                    <p className="ml-[-6%] w-full flex justify-center items-center overflow-x-hidden text-[5.50rem] glowing-text">
                        <span>Artificial Intelligence</span>
                        <span className="block  mb-[16px] mx-9">→</span>
                        <span>Security</span>
                        <span className="block  mb-[16px] mx-9">→</span>
                        <span>Governance</span>
                        <span className="block  mb-[16px] mx-9">→</span>
                    </p>
                </Marquee>
                <Marquee
                    autoFill={true}
                    className="w-full flex items-center overflow-x-hidden"
                >
                    <p className="ml-[-6%] w-full flex justify-center items-center overflow-x-hidden text-[5.50rem] glowing-text">
                        <span>Security</span>
                        <span className="block  mb-[16px] mx-9">→</span>
                        <span>Governance</span>
                        <span className="block  mb-[16px] mx-9">→</span>
                        <span className="">Artificial Intelligence</span>
                        <span className="block  mb-[16px] mx-9">→</span>
                    </p>
                </Marquee>
            </div>
        </section>
    )
}
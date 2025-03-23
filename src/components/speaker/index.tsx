import Carousel from "../../pages/speakers/carousel";
import { motion } from "framer-motion";
import { useIsVisible } from "../../hooks";
import { useRef } from "react";

export default function SpeakersInHome() {
  return (
    <>
      <Main />
    </>
  );
}

export type speakers = {
  index: number;
  name: string;
  jobTitle: string;
  employer: string;
  image: string;
  checked?: boolean;
};

function Main() {
  const speakers: speakers[] = [

    {
      index: 0,
      name: "Mehdi Medjaoui​",
      jobTitle: "Founder & Chairman",
      employer: "Apidays",
      image: "/Mehdi-Medjaoui.webp",
    },
    {
      index: 1,
      name: 'Echezona Agubata',
      jobTitle: 'CTO',
      employer: 'Coronation Merchant Bank of Nigeria.',
      image: '/echezona-agubata.jpg',
    },
    {
      index: 2,
      name: "Pratham Kumar",
      jobTitle: "Developer Relations Manager",
      employer: "APILayer",
      image: "/pratham-kumar.jpg",
    },
    {
      index: 3,
      name: "Abimbola Bajomo",
      jobTitle: "Lead Product Manager",
      employer: "Remita",
      image: "/abimbola-bajomo.jpg",
    },
    {
      index: 4,
      name: "Michael Owolabi",
      jobTitle: "CTO",
      employer: "Spleet",
      image: "/michael-owolabi.png",
    },
    {
      index: 5,
      name: "Favour Onuoha",
      jobTitle: "Co Founder",
      employer: "APItoolkit",
      image: "/favour-onuoha.png",
    },
    {
      index: 6,
      name: "Anthony Alaribe",
      jobTitle: "Co Founder",
      employer: "APItoolkit",
      image: "/tony.jpeg",
    },
  ];

  const buttonRef = useRef(null);
  const isButtonVisible = useIsVisible(buttonRef, 0.75);
  const buttonVariant = {
    visible: {
      y: isButtonVisible ? 0 : 32,
      opacity: isButtonVisible ? 1 : 0,
      transition: {
        ease: [0, 0, 0.58, 1],
        delay: 0.3,
        y: { duration: 0.75 },
        opacity: { duration: 1 },
      },
    },
    hidden: {
      y: 32,
      opacity: 0,
    },
  };

  return (
    <main className="relative z-20 bg-[#2F20BF] lg:min-h-screen px-8 sm:px-12 xl:px-32 pt-24 pb-24 xl:pt-64 xl:pb-32">
      <section className="max-w-7xl  mx-auto w-full">
        <Carousel slides={speakers} />
      </section>

      <motion.a
        href="/speakers"
        rel="noopener noreferrer"
        target="_blank"
        ref={buttonRef}
        initial="hidden"
        animate="visible"
        variants={buttonVariant}
        className="w-full max-w-[330px] lg:max-w-[466px] lg:w-[70.01%] max-h-[126px] h-full mt-4 mx-auto py-8 px-8 lg:py-12 cursor-pointer bg-[#E1EF9A] flex justify-center items-center rounded-[320px]"
      >
        <span className="text-black font-bold text-2xl leading-[29.76px]">
          SEE ALL SPEAKERS
        </span>
      </motion.a>
    </main>
  );
}

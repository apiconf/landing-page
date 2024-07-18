import { useEffect, useRef, useState } from "react";

import ColonIcon from "../../assets/colon.svg";
import Footer from "../../components/Footer";
// import { motion } from "framer-motion";
import Header from "../../components/Header";
import { motion } from "framer-motion";
import styles from "./sessions.module.css";
import { useIsVisible } from "../../hooks";

type sessions = {
  no?: number | null;
  id?: number;
  speaker: string;
  job: string;
  employer: string;
  sessionType:
    | "WORKSHOP"
    | "SESSION"
    | "PANEL SESSION"
    | "SESSION BREAKOUT"
    | "LIGHTNING TALK";
  talkTitle: string;
  image: string;
};

const cardData: sessions[] = [
  {
    id: 0,
    speaker: "Cornelius Ashley-Osuzoka",
    job: "Engineering Manager, Developer Experience",
    employer: "Flutterwave Inc",
    sessionType: "SESSION BREAKOUT",
    talkTitle: "Plug in and play: How to design SDKs to extend your APIs",
    image: "/Cornelius-Ashley-Osuzoka.jpeg",
  },
  {
    id: 1,
    speaker: "Adeyeye Adedoyinsolami",
    job: "Product Manager",
    employer: "Revent Technologies",
    sessionType: "SESSION BREAKOUT",
    talkTitle: "How Product Management Principles Drive API Strategy",
    image: "/Adeyeye-Adedoyinsolami.jpg",
  },
  {
    id: 2,
    speaker: "Funke Olasupo",
    job: "Technical Writer",
    employer: "",
    sessionType: "WORKSHOP",
    talkTitle:
      "From Design to Documentation: Building Interactive OpenAPI Specification",
    image: "/Funke-Olasupo.jpg",
  },
  {
    id: 3,
    speaker: "David Ijaola",
    job: "Product Manager",
    employer: "Norebase",
    sessionType: "SESSION",
    talkTitle: "Pivoting Internal APIs to Revenue-Generating Products",
    image: "/David-Ijaola.jpeg",
  },
  {
    id: 4,
    speaker: "Ridwan Kasim",
    job: "Senior Backend Engineer",
    employer: "SeamlessHR",
    sessionType: "SESSION",
    talkTitle: "Ensuring API Compliance: Best Practices and Strategies",
    image: "/Ridwan-Kasim.jpg",
  },
  {
    id: 5,
    speaker: "Fawaz Haroun",
    job: "Software Engineer",
    employer: "Paystack",
    sessionType: "WORKSHOP",
    talkTitle: "API Performance Monitoring with Prometheus and Grafana",
    image: "/Fawaz-Haroun.jpg",
  },
  {
    id: 6,
    speaker: "Uchechukwu Azubuko",
    job: "Lead Frontend Engineer",
    employer: "OneLiquidity",
    sessionType: "LIGHTNING TALK",
    talkTitle: "Patterns for a Clean Frontend Application With Valid Data",
    image: "/Uchechukwu-Azubuko.jpeg",
  },
  {
    id: 7,
    speaker: "Motunrayo Koyejo",
    job: "Software Engineer",
    employer: "Brass",
    sessionType: "SESSION BREAKOUT",
    talkTitle: "API Versioning: Building for Longevity and Adaptability",
    image: "/Motunrayo-Koyejo.jpg",
  },
  {
    id: 8,
    speaker: "Esther Okafor",
    job: "Quality assurance engineer",
    employer: "Storyblok GMBH",
    sessionType: "SESSION BREAKOUT",
    talkTitle: "Beyond the Code: A QA Tester's Perspective on API Design",
    image: "/Esther-Okafor.jpg",
  },
  {
    id: 9,
    speaker: "Rufai Mustapha",
    job: "Technical Instructor",
    employer: "Pluralsight",
    sessionType: "SESSION BREAKOUT",
    talkTitle: "Leveraging Open Banking APIs for Innovation",
    image: "/Rufai-Mustapha.jpg",
  },
  {
    id: 10,
    speaker: "Tobiloba Adedeji",
    job: "DevRel Engineer",
    employer: "Fleek",
    sessionType: "WORKSHOP",
    talkTitle: "Browser APIs: Things You Need To Know",
    image: "/Tobiloba-Adedeji.jpeg",
  },
  {
    id: 11,
    speaker: "Terhile ikyo",
    job: "Senior Project Manager",
    employer: "FCMB Group",
    sessionType: "SESSION",
    talkTitle:
      "Metrics that Matter: Measuring the Success of Your API Strategy",
    image: "/Terhile-ikyo.jpg",
  },
  {
    id: 12,
    speaker: "Okunoye David",
    job: "Software Engineer",
    employer: "TWEN",
    sessionType: "WORKSHOP",
    talkTitle: "Browser APIs: Things You Need To Know",
    image: "/Okunoye-David.jpg",
  },
  {
    id: 13,
    speaker: "Bolaji Olajide",
    job: "Software Engineer",
    employer: "Sourcegraph",
    sessionType: "SESSION BREAKOUT",
    talkTitle: "Rethinking API Security",
    image: "/Bolaji-Olajide.jpg",
  },
  {
    id: 14,
    speaker: "Emmanuel Odianosen",
    job: "Developer Support Engineer",
    employer: "Fuse Blockchain",
    sessionType: "WORKSHOP",
    talkTitle:
      "Building Blockchain Applications using APIs: A Practical Guide to Fuse Blockchain REST APIs",
    image: "/Emmanuel-Odianosen.png",
  },
  {
    id: 15,
    speaker: "Kenechukwu Nwankwo",
    job: "Senior Product Manager",
    employer: "",
    sessionType: "LIGHTNING TALK",
    talkTitle:
      "Navigating the Fog: Effective Product Discovery for API Products",
    image: "/Kenechukwu-Nwankwo.jpg",
  },
  {
    id: 16,
    speaker: "Enoch Osarenren",
    job: "Senior Software Engineer",
    employer: "SeamlessHR",
    sessionType: "PANEL SESSION",
    talkTitle:
      "Navigating the complexities of regulatory frameworks with APls to ensure compliance and protect consumer data",
    image: "/Enoch-Osarenren.webp",
  },
  {
    id: 17,
    speaker: "Sule-balogun Olanrewaju",
    job: "Software Engineer",
    employer: "Tillo",
    sessionType: "PANEL SESSION",
    talkTitle:
      "Navigating the complexities of regulatory frameworks with APls to ensure compliance and protect consumer data",
    image: "/Sule-balogun-Olanrewaju.webp",
  },
  {
    id: 18,
    speaker: "Wale Adeniji",
    job: "Head of Engineering",
    employer: "Fincra",
    sessionType: "PANEL SESSION",
    talkTitle:
      "Navigating the complexities of regulatory frameworks with APls to ensure compliance and protect consumer data",
    image: "/Wale-Adeniji.jpg",
  },
  {
    id: 19,
    speaker: "Ernest Nnamdi",
    job: "Software/Developer relations engineer",
    employer: "Morph",
    sessionType: "PANEL SESSION",
    talkTitle:
      "Navigating the complexities of regulatory frameworks with APls to ensure compliance and protect consumer data",
    image: "/Ernest-Nnamdi.png",
  },
  {
    id: 20,
    speaker: "Amaka Ekeh",
    job: "Software Developer",
    employer: "Fincra",
    sessionType: "PANEL SESSION",
    talkTitle:
      "Navigating the complexities of regulatory frameworks with APls to ensure compliance and protect consumer data",
    image: "/Amaka-Ekeh.jpeg",
  },
];

export default function Sessions() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

function Main() {
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
    <main className={styles.Main}>
      <Grids />
      <motion.a
        href="https://drive.google.com/file/d/1YhVJDJywO4spLbkva326k5440hLDKOBD/view"
        rel="noopener noreferrer"
        target="_blank"
        ref={buttonRef}
        initial="hidden"
        animate="visible"
        variants={buttonVariant}
        className="w-full max-w-[330px] lg:max-w-[466px] lg:w-[70.01%] max-h-[126px] h-full mt-6 mx-auto py-8 px-8 lg:py-12 cursor-pointer bg-[#E1EF9A] flex justify-center items-center rounded-[320px]"
      >
        <span className="text-black font-bold text-2xl leading-[29.76px]">
          SEE FULL SCHEDULE
        </span>
      </motion.a>
    </main>
  );
}

function Grids({ no = null }: { no?: number | null }) {
  const [cardDataList, setCardDataList] = useState(cardData);
  useEffect(() => {
    if (no)
      setCardDataList(
        cardData
          .filter((data) => {
            return data.sessionType === "PANEL SESSION";
          })
          .slice(0, no)
      );
  }, []);
  return (
    <>
      <h1 className="text-[#F1F1F1] font-sans text-5xl font-bold mb-4">
        Sessions
      </h1>
      <div className="grid grid-cols-1 min-[800px]:grid-cols-2">
        <GridContainer>
          <SubTitle title="Key" />
          <div className="min-[800px]:ml-10 xl:ml-16">
            <SubTitle title="Value" />
          </div>
        </GridContainer>
        {cardDataList.map((card, index) => (
          <GridCard {...card} key={card.id} no={no} id={index} />
        ))}
      </div>
    </>
  );
}

function GridCard({
  no,
  id,
  speaker,
  job,
  employer,
  sessionType,
  talkTitle,
  image,
}: sessions) {
  return (
    <GridContainer id={id! + 1} no={no}>
      <div className="flex justify-center min-[800px]:justify-between min-[800px]:gap-x-10 xl:gap-x-16">
        <div className="w-full flex flex-col lg:flex-row items-center gap-8">
          <div className="w-40 h-[12.5rem] shrink-0 rounded-2xl bg-[#4536DD]">
            <img
              src={image}
              alt={speaker}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div className="text-[#F1F1F1] w-full text-center lg:text-left font-sans">
            <p className="text-2xl font-bold mb-2">{speaker}</p>
            <p className="text-lg font-medium">
              {job}
              {employer.trim() === "" ? "" : ` • ${employer}`}
            </p>
          </div>
        </div>
        <img
          src={ColonIcon}
          className="hidden lg:block"
          alt="Colon Icon"
          width="11.805"
          height="43.847"
        />
      </div>
      <div className="flex flex-col items-center min-[800px]:items-start min-[800px]:ml-10 xl:ml-16">
        <div className="my-4 rounded-[2rem] px-4 py-1 w-max bg-[#E1EF9A]">
          <span className="text-[#0A0A0A] font-sans text-lg font-bold">
            {sessionType}
          </span>
        </div>
        <p className="text-[#F1F1F1] text-center min-[800px]:text-left break-words font-sans text-4xl xl:text-5xl font-bold">
          {talkTitle}
        </p>
      </div>
    </GridContainer>
  );
}

function GridContainer({
  children,
  no = null,
  id = null,
}: {
  children: React.ReactNode;
  no?: number | null;
  id?: number | null;
}) {
  return (
    <div
      className={`${styles.GridContainer} ${
        no && id && id === no ? styles.noborder : null
      }`}
    >
      {children}
    </div>
  );
}

function SubTitle({ title }: { title: string }) {
  return <p className={styles.Subtitle}>{title}</p>;
}

export const SessionGridForOutdoorUse = Grids;

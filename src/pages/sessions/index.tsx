import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ScrollToAnchor from "../../components/ScrollToAnchor";
// import { motion } from "framer-motion";
import ColonIcon from "../../assets/colon.svg";
import styles from "./sessions.module.css";

export default function Sessions() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <ScrollToAnchor />
    </>
  );
}

type sessions = {
  key?: number;
  speaker: string;
  job: string;
  employer: string;
  sessionType: "WORKSHOP" | "PANEL SESSION" | "TALK";
  talkTitle: string;
};

const cardData: sessions[] = [
  {
    key: 0,
    speaker: "Ojonemi Joshua-Tamunoebiye",
    job: "Developer Ecosystem Manager",
    employer: "Microsoft",
    sessionType: "WORKSHOP",
    talkTitle: 'API Security: What does "data.data.data.value" mean??',
  },
  {
    key: 1,
    speaker: "Ojonemi Joshua-Tamunoebiye",
    job: "Developer Ecosystem Manager",
    employer: "Microsoft",
    sessionType: "PANEL SESSION",
    talkTitle: 'API Security: What does "data.data.data.value" mean??',
  },
  {
    key: 2,
    speaker: "Ojonemi Joshua-Tamunoebiye",
    job: "Developer Ecosystem Manager",
    employer: "Microsoft",
    sessionType: "TALK",
    talkTitle: 'API Security: What does "data.data.data.value" mean??',
  },
];

function Main() {
  return (
    <main className={styles.Main}>
      <h1 className="text-[#F1F1F1] font-sans text-5xl font-bold mb-4">
        Sessions
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <GridContainer>
          <SubTitle title="Key" />
          <div className="md:ml-10 xl:ml-16">
            <SubTitle title="Value" />
          </div>
        </GridContainer>
        {cardData.map((card) => (
          <GridCard {...card} key={card.key} />
        ))}
      </div>
    </main>
  );
}

function GridCard({
  speaker,
  job,
  employer,
  sessionType,
  talkTitle,
}: sessions) {
  return (
    <GridContainer>
      <div className="flex justify-between md:gap-x-10 xl:gap-x-16">
        <div className="flex items-center gap-x-8">
          <div className="w-40 min-h-[12.5rem] shrink-0 rounded-2xl bg-[#4536DD]">
            {/* Image Container */}
          </div>
          <div className="text-[#F1F1F1] font-sans">
            <p className="text-2xl font-bold mb-2">{speaker}</p>
            <p className="text-lg font-medium">
              {job} • {employer}
            </p>
          </div>
        </div>
        <img
          src={ColonIcon}
          className="hidden md:block"
          alt="Colon Icon"
          width="11.805"
          height="43.847"
        />
      </div>
      <div className="md:ml-10 xl:ml-16">
        <div className="my-4 rounded-[2rem] px-4 py-1 w-max bg-[#E1EF9A]">
          <span className="text-[#0A0A0A] font-sans text-lg font-bold">
            {sessionType}
          </span>
        </div>
        <p className="text-[#F1F1F1] font-sans text-4xl xl:text-5xl font-bold">
          {talkTitle}
        </p>
      </div>
    </GridContainer>
  );
}

function GridContainer({ children }: { children: React.ReactNode }) {
  return <div className={styles.GridContainer}>{children}</div>;
}

function SubTitle({ title }: { title: string }) {
  return <p className={styles.Subtitle}>{title}</p>;
}

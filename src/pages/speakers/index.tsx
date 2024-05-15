import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ScrollToAnchor from "../../components/ScrollToAnchor";
import { motion } from "framer-motion";

export default function Speakers() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <ScrollToAnchor />
    </>
  );
}

type speakers = {
  index: number;
  name: string;
  jobTitle: string;
  employer: string;
  checked?: boolean;
};

function Main() {
  const speakers: speakers[] = [
    {
      index: 0,
      name: "C",
      jobTitle: "Frontend Developer",
      employer: "Hire me please",
    },
    {
      index: 1,
      name: "J",
      jobTitle: "UI Designer",
      employer: "Jobless boy",
    },
    {
      index: 2,
      name: "E",
      jobTitle: "UX Researcher",
      employer: "Myself",
    },
    {
      index: 3,
      name: "Ojonemi Joshua-Tamunoebiye",
      jobTitle: "Developer Ecosystem Manager",
      employer: "Microsoft",
      checked: true,
    },
    {
      index: 4,
      name: "Chinonso",
      jobTitle: "Game Developer",
      employer: "Unemployed",
    },
    {
      index: 5,
      name: "Jemeni",
      jobTitle: "Backend Engineer",
      employer: "The back of the non-existent company",
    },
    {
      index: 6,
      name: "Emmanuel",
      jobTitle: "Software Engineer",
      employer: "Sapa Inc.",
    },
  ];

  const [checkedIndex, setCheckedIndex] = React.useState<number>(3);

  const handleCardClick = (index: number) => {
    setCheckedIndex(index);
  };

  return (
    <main className="bg-[#2F20BF] min-h-screen px-12 md:px-24 xl:px-32 pt-24 md:pt-40 xl:pt-64">
      <h1 className="mb-8 text-[#F1F1F1] text-5xl font-sans font-bold">
        The Incredible Speakers
      </h1>
      <div className="flex gap-x-8 w-full pb-24 md:pb-36 xl:pb-44">
        {speakers.map((speaker) => (
          <Card
            key={speaker.index}
            index={speaker.index}
            name={speaker.name}
            jobTitle={speaker.jobTitle}
            employer={speaker.employer}
            checked={speaker.index === checkedIndex}
            onClick={handleCardClick}
          />
        ))}
      </div>
    </main>
  );
}

function Card({
  index,
  name,
  jobTitle,
  employer,
  onClick,
  checked = false,
}: speakers & { onClick: (index: number) => void }) {
  return (
    <motion.div
      className={`${
        checked ? "flex-[2_2_0] w-[200%]" : "flex-1 w-full"
      } flex flex-col rounded-t-2xl`}
      animate={{ flex: checked ? "2 2 0" : "1 1 0" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <input
        className="hidden"
        type="radio"
        name="card"
        id={`input-${index}`}
        value={`input-${index}`}
        checked={checked}
        onChange={() => onClick(index)}
      />
      <label
        htmlFor={`input-${index}`}
        className={`min-h-[25rem] rounded-2xl bg-[#4536DD] cursor-pointer`}
      />
      <motion.div
        className={`${checked ? "block" : "hidden"}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: checked ? 1 : 0, y: checked ? 0 : 20 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mt-8">
          <p className="text-[#F1F1F1] font-sans mb-2 text-2xl font-bold">
            {name}
          </p>
          <p className="text-[#F1F1F1] font-sans text-lg font-medium">
            {jobTitle} • {employer}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

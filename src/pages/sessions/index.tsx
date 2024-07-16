// import { motion } from "framer-motion";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ColonIcon from "../../assets/colon.svg";
import styles from "./sessions.module.css";

type sessions = {
  key?: number;
  speaker: string;
  job: string;
  employer: string;
  sessionType: "WORKSHOP" | "SESSION" | "SESSION BREAKOUT" | "LIGHTNING TALK";
  talkTitle: string;
  image: string;
};

const cardData: sessions[] = [
  {
    key: 0,
    speaker: "Cornelius Ashley-Osuzoka",
    job: "Engineering Manager, Developer Experience",
    employer: "Flutterwave Inc",
    sessionType: "SESSION BREAKOUT",
    talkTitle: "Plug in and play: How to design SDKs to extend your APIs",
    image: "/Cornelius-Ashley-Osuzoka.jpeg",
  },
  {
    key: 1,
    speaker: "Adeyeye Adedoyinsolami",
    job: "Product Manager",
    employer: "Revent Technologies",
    sessionType: "SESSION BREAKOUT",
    talkTitle: "How Product Management Principles Drive API Strategy",
    image: "/Adeyeye-Adedoyinsolami.jpg",
  },
  {
    key: 2,
    speaker: "Funke Olasupo",
    job: "Technical Writer",
    employer: "",
    sessionType: "WORKSHOP",
    talkTitle:
      "From Design to Documentation: Building Interactive OpenAPI Specification",
    image: "/Funke-Olasupo.jpg",
  },
  {
    key: 3,
    speaker: "David Ijaola",
    job: "Product Manager",
    employer: "Norebase",
    sessionType: "SESSION",
    talkTitle: "Pivoting Internal APIs to Revenue-Generating Products",
    image: "/David-Ijaola.jpeg",
  },
  {
    key: 4,
    speaker: "Ridwan Kasim",
    job: "Senior Backend Engineer",
    employer: "SeamlessHR",
    sessionType: "SESSION",
    talkTitle: "Ensuring API Compliance: Best Practices and Strategies",
    image: "/Ridwan-Kasim.jpg",
  },
  {
    key: 5,
    speaker: "Fawaz Haroun",
    job: "Software Engineer",
    employer: "Paystack",
    sessionType: "WORKSHOP",
    talkTitle: "API Performance Monitoring with Prometheus and Grafana",
    image: "/Fawaz-Haroun.jpg",
  },
  {
    key: 6,
    speaker: "Uchechukwu Azubuko",
    job: "Lead Frontend Engineer",
    employer: "OneLiquidity",
    sessionType: "LIGHTNING TALK",
    talkTitle: "Patterns for a Clean Frontend Application With Valid Data",
    image: "/Uchechukwu-Azubuko.jpeg",
  },
  {
    key: 7,
    speaker: "Motunrayo Koyejo",
    job: "Software Engineer",
    employer: "Brass",
    sessionType: "SESSION BREAKOUT",
    talkTitle: "API Versioning: Building for Longevity and Adaptability",
    image: "/Motunrayo-Koyejo.jpg",
  },
  {
    key: 8,
    speaker: "Esther Okafor",
    job: "Quality assurance engineer",
    employer: "Storyblok GMBH",
    sessionType: "SESSION BREAKOUT",
    talkTitle: "Beyond the Code: A QA Tester's Perspective on API Design",
    image: "/Esther-Okafor.jpg",
  },
  {
    key: 9,
    speaker: "Rufai Mustapha",
    job: "Technical Instructor",
    employer: "Pluralsight",
    sessionType: "SESSION BREAKOUT",
    talkTitle: "Leveraging Open Banking APIs for Innovation",
    image: "/Rufai-Mustapha.jpg",
  },
  {
    key: 10,
    speaker: "Tobiloba Adedeji",
    job: "DevRel Engineer",
    employer: "Fleek",
    sessionType: "WORKSHOP",
    talkTitle: "Browser APIs: Things You Need To Know",
    image: "/Tobiloba-Adedeji.jpeg",
  },
  {
    key: 11,
    speaker: "Terhile ikyo",
    job: "Senior Project Manager",
    employer: "FCMB Group",
    sessionType: "SESSION",
    talkTitle:
      "Metrics that Matter: Measuring the Success of Your API Strategy",
    image: "/Terhile-ikyo.jpg",
  },
  {
    key: 12,
    speaker: "Okunoye David",
    job: "Software Engineer",
    employer: "TWEN",
    sessionType: "WORKSHOP",
    talkTitle: "Browser APIs: Things You Need To Know",
    image: "/Okunoye-David.jpg",
  },
  {
    key: 13,
    speaker: "Bolaji Olajide",
    job: "Software Engineer",
    employer: "Sourcegraph",
    sessionType: "SESSION BREAKOUT",
    talkTitle: "Rethinking API Security",
    image: "/Bolaji-Olajide.jpg",
  },
  {
    key: 14,
    speaker: "Emmanuel Odianosen",
    job: "Developer Support Engineer",
    employer: "Fuse Blockchain",
    sessionType: "WORKSHOP",
    talkTitle:
      "Building Blockchain Applications using APIs: A Practical Guide to Fuse Blockchain REST APIs",
    image: "/Emmanuel-Odianosen.png",
  },
  {
    key: 15,
    speaker: "Kenechukwu Nwankwo",
    job: "Senior Product Manager",
    employer: "",
    sessionType: "LIGHTNING TALK",
    talkTitle:
      "Navigating the Fog: Effective Product Discovery for API Products",
    image: "/Kenechukwu-Nwankwo.jpg",
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
  image,
}: sessions) {
  return (
    <GridContainer>
      <div className="flex justify-center md:justify-between md:gap-x-10 xl:gap-x-16">
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
      <div className="flex flex-col items-center md:items-start md:ml-10 xl:ml-16">
        <div className="my-4 rounded-[2rem] px-4 py-1 w-max bg-[#E1EF9A]">
          <span className="text-[#0A0A0A] font-sans text-lg font-bold">
            {sessionType}
          </span>
        </div>
        <p className="text-[#F1F1F1] text-center md:text-left break-words font-sans text-4xl xl:text-5xl font-bold">
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

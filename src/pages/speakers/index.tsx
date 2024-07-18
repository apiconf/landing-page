import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ScrollToAnchor from "../../components/ScrollToAnchor";
import Carousel from "./carousel";

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
      name: "Gbadebo Bello",
      jobTitle: "Developer Advocate",
      employer: "Postman",
      image: "/Gbadebo-Bello.png",
    },
    {
      index: 1,
      name: "Celestine Omin",
      jobTitle: "Co-Founder, CEO & CTO",
      employer: "Klump",
      image: "/Celestine-Omin.png",
    },
    {
      index: 2,
      name: "Femi Taiwo",
      jobTitle: "Chief Technology Officer",
      employer: "INITS Limited",
      image: "/Femi-Taiwo.png",
    },
    {
      index: 3,
      name: "Teniola Makinde",
      jobTitle: "CTO",
      employer: "Fincra",
      image: "/Teniola-Makinde.png",
    },
    {
      index: 4,
      name: "Abibat Ajibola Sanni",
      jobTitle: "Key Account Manager",
      employer: "Interswitch Nigeria",
      image: "/Abibat-Ajibola.png",
    },
    {
      index: 5,
      name: "Bolaji Ayodeji",
      jobTitle: "Head of Content and Developer Relations",
      employer: "APItoolkit",
      image: "/Bolaji-Ayodeji.png",
    },
    {
      index: 6,
      name: "Uchechukwu Azubuko",
      jobTitle: "Lead Frontend Engineer",
      employer: "OneLiquidity",
      image: "/Uchechukwu-Azubuko.jpeg",
    },
    {
      index: 7,
      name: "Motunrayo Koyejo",
      jobTitle: "Software Engineer",
      employer: "Brass",
      image: "/Motunrayo-Koyejo.jpg",
    },
    {
      index: 8,
      name: "Esther Okafor",
      jobTitle: "Quality assurance engineer",
      employer: "Storyblok GMBH",
      image: "/Esther-Okafor.jpg",
    },
    {
      index: 9,
      name: "Rufai Mustapha",
      jobTitle: "Technical Instructor",
      employer: "Pluralsight",
      image: "/Rufai-Mustapha.jpg",
    },
    {
      index: 10,
      name: "Tobiloba Adedeji",
      jobTitle: "DevRel Engineer",
      employer: "Fleek",
      image: "/Tobiloba-Adedeji.jpeg",
    },
    {
      index: 11,
      name: "Terhile ikyo",
      jobTitle: "Senior Project Manager",
      employer: "FCMB Group",
      image: "/Terhile-ikyo.jpg",
    },
    {
      index: 12,
      name: "Okunoye David",
      jobTitle: "Software Engineer",
      employer: "TWEN",
      image: "/Okunoye-David.jpg",
    },
    {
      index: 13,
      name: "Bolaji Olajide",
      jobTitle: "Software Engineer",
      employer: "Sourcegraph",
      image: "/Bolaji-Olajide.jpg",
    },
    {
      index: 14,
      name: "Emmanuel Odianosen",
      jobTitle: "Developer Support Engineer",
      employer: "Fuse Blockchain",
      image: "/Emmanuel-Odianosen.png",
    },
    {
      index: 15,
      name: "Kenechukwu Nwankwo",
      jobTitle: "Senior Product Manager",
      employer: "",
      image: "/Kenechukwu-Nwankwo.jpg",
    },
    {
      index: 16,
      name: "Enoch Osarenren",
      jobTitle: "Senior Software Engineer",
      employer: "SeamlessHR",
      image: "/Enoch-Osarenren.webp",
    },
    {
      index: 17,
      name: "Sule-balogun Olanrewaju",
      jobTitle: "Software Engineer",
      employer: "Tillo",
      image: "/Sule-balogun-Olanrewaju.webp",
    },
    {
      index: 18,
      name: "Wale Adeniji",
      jobTitle: "Head of Engineering",
      employer: "Fincra",
      image: "/Wale-Adeniji.jpg",
    },
    {
      index: 19,
      name: "Ernest Nnamdi",
      jobTitle: "Software/Developer relations engineer",
      employer: "Morph",
      image: "/Ernest-Nnamdi.png",
    },
    {
      index: 20,
      name: "Amaka Ekeh",
      jobTitle: "Software Developer",
      employer: "Fincra",
      image: "/Amaka-Ekeh.jpeg",
    },
    {
      index: 21,
      name: "Adeyeye Adedoyinsolami",
      jobTitle: "Product Manager",
      employer: "Revent Technologies",
      image: "/Adeyeye-Adedoyinsolami.jpg",
    },
    {
      index: 22,
      name: "Funke Olasupo",
      jobTitle: "Technical Writer",
      employer: "",
      image: "/Funke-Olasupo.jpg",
    },
    {
      index: 23,
      name: "David Ijaola",
      jobTitle: "Product Manager",
      employer: "Norebase",
      image: "/David-Ijaola.jpeg",
    },
    {
      index: 24,
      name: "Ridwan Kasim",
      jobTitle: "Senior Backend Engineer",
      employer: "SeamlessHR",
      image: "/Ridwan-Kasim.jpg",
    },
    {
      index: 25,
      name: "Fawaz Haroun",
      jobTitle: "Software Engineer",
      employer: "Paystack",
      image: "/Fawaz-Haroun.jpg",
    },
    {
      index: 26,
      name: "Cornelius Ashley-Osuzoka",
      jobTitle: "Engineering Manager, Developer Experience",
      employer: "Flutterwave Inc",
      image: "/Cornelius-Ashley-Osuzoka.jpeg",
    },
  ];

  return (
    <main className="bg-[#2F20BF] min-h-screen px-8 sm:px-12 md:px-24 xl:px-32 pt-24 md:pt-40 xl:pt-64">
      <section className="max-w-7xl mx-auto w-full">
        <Carousel slides={speakers} />
      </section>
    </main>
  );
}

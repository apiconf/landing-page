import Carousel from './carousel';
import Footer from '../../components/Footer/index';
import NavBar from '../../components/NavBar';
import ScrollToAnchor from '../../components/ScrollToAnchor';

export default function Speakers() {
  return (
    <div className="bg-dark-purple w-full min-h-[100svh] flex flex-col">
      <header role="banner">
        <NavBar />
      </header>
      <Main />
      <Footer />
      <ScrollToAnchor />
    </div>
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
      jobTitle: "Senior Developer Relations Engineer",
      employer: "Swing Finance",
      image: "/tony.jpeg",
    },
    {
      index: 6,
      name: "Anthony Alaribe",
      jobTitle: "Co Founder",
      employer: "APItoolkit",
      image: "/tony.jpeg",
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

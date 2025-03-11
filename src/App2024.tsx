import "./App.css";

import About from "./components/About";
import FAQs from "./components/FAQs";
import FloatingBtn from "./components/floatingBtn";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Higlight from "./components/Highlight";
import ScrollToAnchor from "./components/ScrollToAnchor";
import SessionsInHome from "./components/session";
import SpeakersInHome from "./components/speaker";
import Sponsor from "./components/sponsor";
import Talks from "./components/Talks";

export default function App2024() {
  return (
    <div className="w-full bg-white">
      <Header />
      <Hero />
      <FloatingBtn />
      <main>
        <About />
        <SpeakersInHome />
        <SessionsInHome />
        <Talks />
        <Higlight />
        <Sponsor />
        <FAQs />
      </main>
      <Footer />
      <ScrollToAnchor />
    </div>
  );
}

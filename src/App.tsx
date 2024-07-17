import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FloatingBtn from "./components/floatingBtn";
import About from "./components/About";
import Talks from "./components/Talks";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";
import Higlight from "./components/Highlight";
import Sponsor from "./components/sponsor";
import ScrollToAnchor from "./components/ScrollToAnchor";
import SpeakersInHome from "./components/speaker";
import SessionsInHome from "./components/session";

function App() {
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

export default App;

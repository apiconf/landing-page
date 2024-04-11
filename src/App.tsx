import "./App.css";
import { useEffect } from "react";
import AOS from "aos";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import TalkEvent from "./components/TalkEvent";
import DaysToGo from "./components/DaysToGo";
import Footer from "./components/Footer";
import FloatingBtn from "./components/floatingBtn";
import FAQs from "./components/FAQs";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="w-full bg-white">
      <Header />
      <Hero />
      <FloatingBtn />
      <main>
        <About />
        <FAQs />
        <TalkEvent />
        <aside>
          <DaysToGo />
        </aside>
      </main>
      <Footer />
    </div>
  );
}

export default App;

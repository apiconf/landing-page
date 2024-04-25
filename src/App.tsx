import "./App.css";
import { useEffect } from "react";
import AOS from "aos";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import TalkEvent from "./components/TalkEvent";
import Footer from "./components/Footer";
import FloatingBtn from "./components/floatingBtn";
import FAQs from "./components/FAQs";
import Copyright from "./components/Copyright";

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
      </main>
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;

import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import CallToAction from "./components/CallToAction";
import Sponsor from "./components/sponsor";
import DaysToGo from "./components/DaysToGo";
import Footer from "./components/Footer";
import FloatingBtn from "./components/floatingBtn";
import FAQs from "./components/FAQs";

function App() {
  return (
    <div className="w-full bg-white">
      <Header />
      <Hero />
      <FloatingBtn />
      <main>
        <About />
        <FAQs />
        <CallToAction />
        <Sponsor />
        <aside>
          <DaysToGo />
        </aside>
      </main>
      <Footer />
    </div>
  );
}

export default App;

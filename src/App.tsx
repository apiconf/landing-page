import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FloatingBtn from "./components/floatingBtn";
import About from "./components/About";
import Talks from "./components/Talks";
import Higlight from "./components/Highlight";
import Sponsor from "./components/sponsor";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full bg-white">
      <Header />
      <Hero />
      <FloatingBtn />
      <main>
        <About />
        <Talks />
        <Higlight />
        <Sponsor />
        <FAQs />
      </main>
      <Footer />
    </div>
  );
}

export default App;

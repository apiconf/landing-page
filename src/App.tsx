import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Talks from "./components/Talks";
import Footer from "./components/Footer";
import FloatingBtn from "./components/floatingBtn";
import FAQs from "./components/FAQs";
import Copyright from "./components/Copyright";

function App() {
  return (
    <div className="w-full bg-white">
      <Header />
      <Hero />
      <FloatingBtn />
      <main>
        <About />
        <Talks />
        <FAQs />
      </main>
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;

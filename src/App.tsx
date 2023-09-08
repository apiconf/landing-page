import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Register from "./components/Cards";
import Sponsor from "./components/Sponsor";


function App() {
  return (
    <div className="w-full bg-white">
      <Header />
      <Hero />
      <Register />
      <Sponsor />
      <main></main>
      <Footer />
    </div>
  );
}

export default App;

import "./App.css";
import DaysToGo from "./components/DaysToGo";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Register from "./components/Register";
import Sponsor from "./components/Sponsor";
import Body from "./components/About/Card";

function App() {
  return (
    <div className="w-full bg-white">
      <Header />
      <Hero />
      <Body />
      <Register />
      <Sponsor />
      <DaysToGo />
      <Footer />
    </div>
  );
}

export default App;

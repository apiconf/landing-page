import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Body from "./components/About/Card";

function App() {
  return (
    <div className="w-full bg-white">
      <Header />
      <Hero />
      <main></main>
      <Footer />
    </div>
  );
}

export default App;

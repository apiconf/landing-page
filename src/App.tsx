import "./App.css";
import Footer from "./components/2025/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WhyAttend from "./components/WhyAttend";

export default function App() {
  return (
    <div className="bg-dark-purple w-full min-h-[100svh] flex flex-col">
      <Header />
      <Hero />
      <WhyAttend/>
      <Footer />
    </div>
  );
}

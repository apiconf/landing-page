import "./App.css";

import Footer from "./components/Footer";
import Header from "./components/2025/Header";
import Main from "./components/2025/Main";
import Sponsor from "./components/sponsor_cfp/index"

export default function App() {
  return (
    <div className="bg-dark-purple w-full min-h-[100svh] flex flex-col">
      <Header />
      <Main />
      <Sponsor />
      <Footer />
    </div>
  );
}

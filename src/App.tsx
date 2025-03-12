import "./App.css";
import Header from "./components/2025/Header";
import Main from "./components/2025/Main";
import Footer from "./components/2025/Footer";
import Recap from "./components/2025/recap";

export default function App() {
  return (
    <div className="bg-dark-purple w-full min-h-[100svh] flex flex-col">
      <Header />
      <Main />
      <main>
        <Recap />
      </main>
      <Footer />
    </div>
  );
}

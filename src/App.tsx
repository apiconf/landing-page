import './App.css';
import About from './components/About';
import Copyright from './components/Copyright';
import FAQs from './components/FAQs';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Higlight from './components/Highlight';
import TalkEvent from './components/TalkEvent';
import FloatingBtn from './components/floatingBtn';
import Sponsor from './components/sponsor';

function App() {
  return (
    <div className="w-full bg-white">
      <Header />
      <Hero />
      <FloatingBtn />
      <main>
        <About />
        <TalkEvent />
        <FAQs />
        <Higlight />
        <Sponsor />
      </main>
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;

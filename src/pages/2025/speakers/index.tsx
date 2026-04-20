import Carousel from './carousel';
import Footer from '@/components/2025/Footer/index';
import NavBar from '@/components/2025/NavBar';
import ScrollToAnchor from '@/components/2025/ScrollToAnchor';
import { speakers } from './speaker';

export default function Speakers() {
  return (
    <div className="flex min-h-[100svh] w-full flex-col bg-dark-purple">
      <header role="banner">
        <NavBar />
      </header>
      <Main />
      <Footer />
      <ScrollToAnchor />
    </div>
  );
}

function Main() {
  return (
    <main className="min-h-screen bg-[#2F20BF] bg-[url(/speakers/speaker-bg.png)] bg-contain bg-top bg-no-repeat pt-16 md:pt-24 xl:pt-32">
      <section className="bg-[url(/speakers/speakers.png)] bg-contain bg-right bg-no-repeat">
        <Carousel slides={speakers} />
      </section>
    </main>
  );
}

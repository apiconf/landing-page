import Footer from '../../components/Footer/index';
import NavBar from '../../components/NavBar';
import ScrollToAnchor from '../../components/ScrollToAnchor';
import Carousel from '../speakers/carousel';
import { teams } from './teams';

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
  const sortedTeams = [...teams].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <main className="min-h-screen bg-[#2F20BF] bg-[url(/speakers/speaker-bg.png)] bg-contain bg-top bg-no-repeat pt-16 md:pt-24 xl:pt-32">
      <Carousel slides={sortedTeams} heading="Team Members" />
    </main>
  );
}

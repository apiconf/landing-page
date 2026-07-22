import './App.css';

import Events from './components/Events';
import Footer from './components/Footer/index';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Recap from './components/recap';
import { SpaceItem } from './types';
import Spaces from './components/Talks/spaces';
import Sponsor from './components/sponsor_cfp/index';
import SponsorList from './components/SponsorList';
import WhyAttend from './components/WhyAttend';
import { HackathonSpotlight, WorkshopSpotlight } from './components/ProgramHighlights';

import SpeakersInHome from './components/speaker';





const spaceItems: SpaceItem[] = [
  {
    key: 'Ask_Us_Anything_Speakers_Schedule_Whats_Coming_at_API_Conf_2025',
    title: 'Ask Us Anything: Speakers, Schedule & What’s Coming at API Conf 2025',
    subTitle: '@apiconflagos • 28th June 2025',
    link: 'https://x.com/i/spaces/1vAxRDBEAAXGl',
  },
  {
    key: 'Going_Beyond_MCP_Introducing_A2A',
    title: 'Going Beyond MCP: Introducing A2A',
    subTitle: '@vicradon • 24th May 2025',
    link: 'https://x.com/i/spaces/1kvJpykNaBLxE',
  },
  {
    key: 'Securing_Mobile_APIs_in_Flutter_Common_Vulnerabilities_&_Best_Practices',
    title: 'Securing Mobile APIs in Flutter: Common Vulnerabilities & Best Practices',
    subTitle: '@AtuohaA • 3rd May 2025',
    link: 'https://x.com/i/spaces/1dRKZYXRpjrxB',
  },
  {
    key: 'Caching_Strategies_for_High_Traffic_APIs',
    title: 'Caching Strategies for High Traffic APIs',
    subTitle: '@nelson_isioma • 12th April 2025',
    link: 'https://x.com/i/spaces/1mnxegneNBRGX',
  },
  {
    key: 'Building_Resilient_API_Contracts',
    title: 'Building Resilient API Contracts',
    subTitle: '@Olatunji_Immam • 5th April 2025',
    link: 'https://x.com/i/spaces/1yNGaLwyvDDKj',
  },
  {
    key: 'API_SECURITY_WITH_GITHUB_CODEQL',
    title: 'API Security with GitHub CodeQL',
    subTitle: '@pentester__ • 22nd March 2025',
    link: 'https://x.com/i/spaces/1nAJEgjyPDyKL',
  },
  {
    key: 'SERVERLESS_APIS_CLOUD_FUNCTIONS',
    title: 'Serverless APIs: Leveraging cloud functions for efficient API development',
    subTitle: '@ejirocodes • 8th March 2025',
    link: 'https://x.com/i/spaces/1gqxvjmmMqkxB',
  },
  {
    key: 'OPTIMIZE_API_PERFORMANCE',
    title: 'How to Optimize API Performance',
    subTitle: '@Motushbae • 22nd February 2025',
    link: 'https://x.com/i/spaces/1gqGvjedEqaGB',
  },
  {
    key: 'FINOPS_MAXIMIZING_CLOUD_COST_EFFICIENCY',
    title: 'Finops: Maximizing Cloud Cost Efficiency Without Compromising Performance',
    subTitle: '@CedarDaniel2 • 8th February 2025',
    link: 'https://x.com/i/spaces/1zqKVYdjyNLxB/',
  },
  {
    key: 'APICONF_WELCOME_BACK_CHAT',
    title: 'APIConf Welcome Back Chat 🗨️',
    subTitle: '@jastrup7 • 1st February 2025',
    link: 'https://x.com/i/spaces/1MnGnDPRwoXxO/',
  },
];

export default function App() {
  return (
    <div className="flex min-h-[100svh] w-full flex-col bg-dark-purple">
      <header role="banner">
        <NavBar />
        <Hero />
      </header>
      <WorkshopSpotlight />
      <HackathonSpotlight />
      <WhyAttend />
      <Recap />
      <Spaces spaces={spaceItems} />
      <SponsorList />
      <Events />
      <SpeakersInHome />
      <Sponsor />
      <Footer />
    </div>
  );
}

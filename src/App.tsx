import './App.css';

import Events from './components/Events';
import Footer from './components/Footer/index';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Recap from './components/recap';
import { SpaceItem } from './types';
import Spaces from './components/Talks/spaces';
import SpeakersInHome from './components/speaker';
import Sponsor from './components/sponsor_cfp/index';
import WhyAttend from './components/WhyAttend';

const spaceItems: SpaceItem[] = [
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
    <div className="bg-dark-purple w-full min-h-[100svh] flex flex-col">
      <header role="banner">
        <NavBar />
        <Hero />
      </header>
      <main></main>
      <WhyAttend />
      <Recap />
      <Spaces spaces={spaceItems} />
      <Events />
      <SpeakersInHome />
      <Sponsor />
      <Footer />
    </div>
  );
}

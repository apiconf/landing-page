import Events from '@/components/2025/Events';
import Footer from '@/components/2025/Footer/index';
import Hero from '@/components/2025/Hero';
import NavBar from '@/components/2025/NavBar';
import Recap from '@/components/2025/recap';
import { SpaceItem } from '@/types';
import Spaces from '@/components/2025/Talks/spaces';
import Sponsor from '@/components/2025/sponsor_cfp/index';
import SponsorList from '@/components/2025/SponsorList';
import WhyAttend from '@/components/2025/WhyAttend';

import CodeOfConduct from './Code-of-conduct/index.tsx';
import Confirmation from '@/components/2025/Confirmation';
import NotFound from '@/NotFound.tsx';
import QR from './Qr/index.tsx';
import Redirect from '@/Redirect.tsx';
import Sessions from './sessions/index.tsx';
import Speakers from './speakers/index.tsx';
import Sponsors from './sponsors/index.tsx';
import Teams from './team/index.tsx';

// import SpeakersInHome from './components/speaker';

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

function App() {
  return (
    <div className="flex min-h-[100svh] w-full flex-col bg-dark-purple">
      <header role="banner">
        <NavBar />
        <Hero />
      </header>
      <WhyAttend />
      <Recap />
      <Spaces spaces={spaceItems} />
      <SponsorList />
      <Events />
      {/* <SpeakersInHome /> */}
      <Sponsor />
      <Footer />
    </div>
  );
}

const App2025 = [
  {
    index: true,
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: 'sponsors',
    element: <Sponsors />,
    errorElement: <NotFound />,
  },
  {
    path: 'sponsors/form',
    element: <Redirect to="https://tinyurl.com/sponsor-apiconf-form" />,
    errorElement: <NotFound />,
  },
  {
    path: 'sponsor',
    element: (
      <Redirect to="https://docs.google.com/presentation/d/1DtU1WKhuVRtVoCCc0FD7l3PYzHHEZ6alI_a1HboUdyo/edit" />
    ),
    errorElement: <NotFound />,
  },
  {
    path: 'register',
    element: <Redirect to="https://lu.ma/ltp8u2bb" />,
    errorElement: <NotFound />,
  },
  {
    path: 'cfp',
    element: <Redirect to="https://sessionize.com/api-conf-lagos-2025/" />,
    errorElement: <NotFound />,
  },
  {
    path: '2024',
    element: <NotFound />,
    errorElement: <NotFound />,
  },
  {
    path: 'speakers',
    element: <Speakers />,
    errorElement: <NotFound />,
  },
  {
    path: 'teams',
    element: <Teams />,
    errorElement: <NotFound />,
  },
  {
    path: 'schedule',
    element: <Sessions />,
    errorElement: <NotFound />,
  },
  {
    path: 'code-of-conduct',
    element: <CodeOfConduct />,
    errorElement: <NotFound />,
  },
  {
    path: '2025qr',
    element: <QR />,
    errorElement: <NotFound />,
  },
  {
    path: '2024/dp',
    element: <Confirmation />,
    errorElement: <NotFound />,
  },
];

export default App2025;

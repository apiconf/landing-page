import "./App.css";
import Header from "./components/2025/Header";
import Main from "./components/2025/Main";
import Footer from "./components/2025/Footer";
import Events from "./components/2025/Events";
import Spaces from "./components/Talks/spaces";
import { SpaceItem } from "./types";

const spaceItems: SpaceItem[] = [
  {
    key: "SERVERLESS_APIS_CLOUD_FUNCTIONS",
    title:
      "Serverless APIs: Leveraging cloud functions for efficient API development",
    subTitle: "@ejirocodes • 8th March 2025",
    link: "https://x.com/i/spaces/1gqxvjmmMqkxB",
  },
  {
    key: "OPTIMIZE_API_PERFORMANCE",
    title: "How to Optimize API Performance",
    subTitle: "@Motushbae • 22nd February 2025",
    link: "https://x.com/i/spaces/1gqGvjedEqaGB",
  },
  {
    key: "FINOPS_MAXIMIZING_CLOUD_COST_EFFICIENCY",
    title:
      "Finops: Maximizing Cloud Cost Efficiency Without Compromising Performance",
    subTitle: "@CedarDaniel2 • 8th February 2025",
    link: "https://x.com/i/spaces/1zqKVYdjyNLxB/",
  },
  {
    key: "APICONF_WELCOME_BACK_CHAT",
    title: "APIConf Welcome Back Chat 🗨️",
    subTitle: "@jastrup7 • 1st February 2025",
    link: "https://x.com/i/spaces/1MnGnDPRwoXxO/",
  },
];

export default function App() {
  return (
    <div className="bg-dark-purple w-full min-h-[100svh] flex flex-col">
      <Header />
      <Main />
      <Spaces spaces={spaceItems} />
      <Events />
      <Footer />
    </div>
  );
}

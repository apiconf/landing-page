import Spaces from "./spaces";
import Speaker from "./speakers";
import { SpaceItem } from "../../types";

const spaceItems: SpaceItem[] = [
  {
    key: "Integrating_Fintech_SDKs_using_Fincra_as_a_case_study",
    title: "Integrating Fintech SDKs, using Fincra as a case study",
    subTitle: "@xandychris • 6th July 2024",
    link: "https://x.com/i/spaces/1LyGBnXpelMGN",
  },
  {
    key: "Scalable_API_Testing_for_Optimal_Performance",
    title: "Scalable API Testing for Optimal Performance",
    subTitle: "@OmoladeEkpeni • 29th June 2024",
    link: "https://x.com/i/spaces/1mrGmyPDZovGy",
  },
  {
    key: "Building_API_based_products_that_scale",
    title: "Building API based products that scale",
    subTitle: "@goodnesskayode • 15th June 2024",
    link: "https://x.com/i/spaces/1rmxPMkvyknKN",
  },
  {
    key: "Leveraging_APIs_for_Microservices_Architecture",
    title: "Leveraging APIs for Microservices Architecture",
    subTitle: "@hybeecodes • 1st June 2024",
    link: "https://x.com/i/spaces/1vAxRvwpWOvxl",
  },
  {
    key: "API_Versioning_and_Backward_Compatibility",
    title: "API Versioning and Backward Compatibility.",
    subTitle: "@horlaarsco • 25th May 2024",
    link: "https://x.com/i/spaces/1BRKjPYNjbRJw",
  },
  {
    key: "API_Security_Strategies_for_Protecting_Sensitive_Data",
    title: "API Security: Strategies for Protecting Sensitive Data",
    subTitle: "@PaschalDev • 18th May 2024",
    link: "https://x.com/i/spaces/1lPKqbVRmqAGb",
  },
  {
    key: "Best_Practices_for_Integrating_APIs_with_Mobile_Applications",
    title: "Best Practices for Integrating APIs with Mobile Applications",
    subTitle: "@MajorE_1 • 11th May 2024",
    link: "https://x.com/i/spaces/1OyJAWpymdwKb",
  },
  {
    key: "API_and_Webhooks",
    title: "API & Webhooks",
    subTitle: "@subomiOluwalana • 4th May 2024",
    link: "https://x.com/i/spaces/1jMJgmOdMOmKL",
  },
  {
    key: "API_Monitoring_and_Observability",
    title: "API Monitoring and Observability",
    subTitle: "@tonialaribe • 27th April 2024",
    link: "https://x.com/i/spaces/1eaKbgVgblQGX",
  },
  {
    key: "Web_API_Security_Risks",
    title: "Web API Security Risks",
    subTitle: "@bigdevlarry • 20th April 2024",
    link: "https://x.com/i/spaces/1gqxvQploXOJB",
  },
  {
    key: "Best_Practices_for_Testing_APIs_Effectively",
    title: "Best Practices for Testing APls Effectively",
    subTitle: "@chidi_godwn • 13th April 2024",
    link: "https://x.com/i/spaces/1MYxNojoXkyKw",
  },
  {
    key: "AMA_Session_With_The_Team",
    title: "AMA Session With The Team",
    subTitle: "@oluwabamikemi • 6th April 2024",
    link: "https://x.com/i/spaces/1lPKqbwmnNNGb",
  },
  {
    key: "Best_Practices_for_API_Error_Handling",
    title: "Best Practices for API Error Handling",
    subTitle: "@lucciddev • 30th March 2024",
    link: "https://x.com/i/spaces/1vOxwjvoOvmJB",
  },
  {
    key: "Best_Practices_for_writing_good_API_Documentation",
    title: "Best Practices for writing good API Documentation",
    subTitle: "@Anita_ihuman • 23th March 2024",
    link: "https://x.com/i/spaces/1vAxRvggRrPxl",
  },
  {
    key: "API_Literacy_101_What_should_developers_know_about_APIs_that_they_don't",
    title:
      "API Literacy 101: What should developers know about APIs that they don't?",
    subTitle: "@theshalvah & @chukwurah__ • 27th January 2024",
    link: "https://x.com/i/spaces/1RDxllOoRPMxL",
  },
];

const Talks = () => {
  return (
    <section id="spaces" className="relative z-20 w-full bg-[#2F20BF]">
      <Spaces spaces={spaceItems} />
      <Speaker />
    </section>
  );
};
export default Talks;

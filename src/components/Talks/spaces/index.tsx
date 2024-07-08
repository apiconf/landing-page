import Space from "./space";
import Mic from "../../../assets/mic.svg";
import MicFrequency from "../../../assets/mic-frequency.svg";
import ArrowUp from "../../../assets/arrow-up.svg";
import BGSpaces from "../../../assets/Spaces.png";
import BGSpacesMobile from "../../../assets/Spaces-mobile.png";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useIsVisible } from "../../../hooks";
import SpacesCarousel from "./spaces-carousel";

type SpaceItem = {
  key: string;
  title: string;
  subTitle: string;
  link: string;
  iconOne?: string;
  iconTwo?: string;
  btnIcon?: string;
  btnText?: string;
};

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

const Spaces = () => {
  const bgSpacesMobileRef = useRef(null);
  const bgSpacesRef = useRef(null);
  const spacesInnerContainerRef = useRef(null);
  const isBgSpacesMobile = useIsVisible(bgSpacesMobileRef);
  const isBgSpaces = useIsVisible(bgSpacesRef);
  const isSpacesInnerContainer = useIsVisible(spacesInnerContainerRef);

  return (
    <section className="w-full relative bg-dark-purple flex justify-center items-center">
      <motion.img
        initial={{ y: 32, opacity: 0 }}
        animate={{
          y: isBgSpacesMobile ? 0 : 32,
          opacity: isBgSpacesMobile ? 1 : 0,
        }}
        transition={{
          duration: 1,
          ease: [0, 0, 0.58, 1],
        }}
        ref={bgSpacesMobileRef}
        src={BGSpacesMobile}
        alt=""
        className="absolute md:hidden block right-0 top-0 z-0"
      />
      <motion.img
        initial={{ y: 32, opacity: 0 }}
        animate={{ y: isBgSpaces ? 0 : 32, opacity: isBgSpaces ? 1 : 0 }}
        transition={{
          duration: 1,
          ease: [0, 0, 0.58, 1],
        }}
        ref={bgSpacesRef}
        src={BGSpaces}
        alt=""
        className="absolute md:block hidden bottom-0 top-0 z-0 w-full sm:px-[5%] 2xl:px-[7.4%]"
      />
      <motion.div
        initial={{ y: 32, opacity: 0 }}
        animate={{
          y: isSpacesInnerContainer ? 0 : 32,
          opacity: isSpacesInnerContainer ? 1 : 0,
        }}
        transition={{
          duration: 0.75,
          ease: [0, 0, 0.58, 1],
          delay: 0.1,
        }}
        ref={spacesInnerContainerRef}
        className="w-full py-32 md:pt-[12.091%] md:pb-[9.8154%] 3xl:pt-[178px] 3xl:pb-[144.5px] relative z-50 flex md:flex-row flex-col justify-center gap-8"
      >
        <SpacesCarousel>
          {spaceItems.map((item) => (
            <Space
              key={item.key}
              title={item.title}
              subTitle={item.subTitle}
              link={item.link}
              iconOne={item.iconOne ?? Mic}
              iconTwo={item.iconTwo ?? MicFrequency}
              btnIcon={item.btnIcon ?? ArrowUp}
              btnText={item.btnText ?? "Play Recording"}
            />
          ))}
        </SpacesCarousel>
      </motion.div>
    </section>
  );
};
export default Spaces;

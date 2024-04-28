import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useIsVisible } from "../../hooks";
import FaqItem from "./FAQs";
import AnyQuestionLG from "../../assets/any-questions-lg.png";
import AnyQuestionSM from "../../assets/any-questions-sm.png";

const faqs = [
  {
    faqQuestion: "What is API Conf Lagos?",
    faqResponse:
      "API Conf Lagos is a dynamic one-day event dedicated to promoting API literacy, gathering API enthusiasts, developers, and industry leaders in Lagos, Nigeria.",
  },
  {
    faqQuestion: "Who should attend API Conf Lagos?",
    faqResponse:
      "Anyone interested in APIs, whether you're an experienced developer, a beginner, or simply curious about APIs, is welcome. The event caters to both experts and newcomers.",
  },
  {
    faqQuestion: "What is the cost of attending?",
    faqResponse:
      "The event is absolutely free. Registration is now open. Be sure to sign up!",
  },
  {
    faqQuestion: "What topics will be covered at the conference?",
    faqResponse:
      "The conference will cover a wide range of topics related to APIs, their significance, use-cases, advancements, and the difference between various types like REST and GraphQL, among others.",
  },
  {
    faqQuestion:
      "Are there any accommodation recommendations for attendees from outside Lagos?",
    faqResponse:
      "We will provide a list of recommended hotels and accommodations closer to the event date. Attendees are encouraged to make their bookings in advance.",
  },
  {
    faqQuestion: "How can I register for the event?",
    faqResponse:
      "You can register for the event through the provided link on our social media pages and official website. Registration is now open, so go ahead and secure your spot! An official registration link is available for immediate sign-up.",
  },
  {
    faqQuestion: "Are there sponsorship opportunities available?",
    faqResponse:
      "Yes, we offer various sponsorship tiers. Interested sponsors can review our sponsorship deck for details or contact us directly.",
  },
  {
    faqQuestion: "Can I be a speaker at the event?",
    faqResponse:
      "We're always on the lookout for insightful speakers. If you're interested, please reach out to our team with your topic and a brief overview.",
  },
  {
    faqQuestion:
      "Where can I find updates and more information about the conference?",
    faqResponse:
      "Follow our official Twitter page (@apiconflagos) and other social media channels for real-time updates, announcements, and more details about the conference.",
  },
];

const Faq = () => {
  const [activeQues, setActiveQues] = useState(-1);
  const faqsRef = useRef(null);
  const isFaqVisible = useIsVisible(faqsRef);

  return (
    <div
      ref={faqsRef}
      className="relative w-full py-16 md:pt-[9.144%] md:pb-[9.086%] 3xl:pt-[158px] 3xl:pb-[157px] px-[8%] sm:px-[5%] 2xl:px-[7.4%] bg-[#FFFFFF]"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isFaqVisible ? 1 : 0 }}
        transition={{
          duration: 1,
          ease: [0, 0, 0.75, 1],
        }}
        className="relative z-20 bg-[#F7F7F7] p-4 md:p-8 rounded-2xl flex flex-col gap-4 md:gap-8"
      >
        {faqs.map((faq, idx) => (
          <FaqItem
            setActiveQues={setActiveQues}
            activeQues={activeQues}
            index={idx}
            key={idx}
            {...faq}
          />
        ))}
      </motion.div>
      <img
        src={AnyQuestionSM}
        alt=""
        className="block md:hidden absolute z-10 top-0 right-0 h-full"
      />
      <img
        src={AnyQuestionLG}
        alt=""
        className="hidden md:block absolute z-10 w-full right-0 left-0 bottom-[25px] px-[5%] 2xl:px-[7.4%]"
      />
    </div>
  );
};
export default Faq;

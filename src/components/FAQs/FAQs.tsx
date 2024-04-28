import chevron from "../../assets/chevron-icon.svg";
import { motion } from "framer-motion";

interface faqItemProps {
  faqQuestion: string;
  faqResponse: string;
  activeQues: number;
  index: number;
  setActiveQues: React.Dispatch<React.SetStateAction<number>>;
}

const FaqItem = ({
  faqQuestion = "test question",
  faqResponse = "test answer",
  activeQues,
  setActiveQues,
  index,
}: faqItemProps) => {
  const itemOpen = index === activeQues;

  return (
    <motion.div
      layout
      className="cursor-pointer bg-white p-[8.054%] sm:p-6 rounded-2xl select-none"
      onClick={() => {
        if (itemOpen) {
          setActiveQues(-1);
          return;
        }
        setActiveQues(index);
      }}
    >
      <div className="flex items-center justify-between gap-4">
        <p className="font-bold text-lg md:text-xl lg:text-2xl leading-none">
          {faqQuestion}
        </p>
        <motion.img
          initial={{ rotate: itemOpen ? "0" : "90deg" }}
          animate={{ rotate: itemOpen ? "90deg" : "0" }}
          transition={{ type: "tween" }}
          src={chevron}
          alt="chevron"
        />
      </div>
      <motion.p
        initial={{
          height: itemOpen ? "0" : "auto",
          marginTop: itemOpen ? "8px" : "0",
        }}
        animate={{
          height: itemOpen ? "auto" : "0",
          marginTop: itemOpen ? "8px" : "0",
        }}
        className="text-lg md:text-xl lg:text-2xl leading-[22.32px] md:leading-[24.8px] lg:leading-[29.76px] overflow-hidden"
      >
        {faqResponse}
      </motion.p>
    </motion.div>
  );
};
export default FaqItem;

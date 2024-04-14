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
      className="cursor-pointer mb-4 last:mb-0 bg-white p-4 rounded-3xl select-none"
      onClick={() => {
        if (itemOpen) {
          setActiveQues(-1);
          return;
        }
        setActiveQues(index);
      }}
    >
      <div className="flex items-center justify-between mb-2 gap-4">
        <p className="font-bold text-lg">{faqQuestion}</p>
        <motion.img
          initial={{ rotate: itemOpen ? "0" : "180deg" }}
          animate={{ rotate: itemOpen ? "180deg" : "0" }}
          transition={{ type: "tween" }}
          src={chevron}
          alt="chevron"
        />
      </div>
      <motion.p
        initial={{ height: itemOpen ? "0" : "auto" }}
        animate={{ height: itemOpen ? "auto" : "0" }}
        className="text-lg overflow-hidden"
      >
        {faqResponse}
      </motion.p>
    </motion.div>
  );
};
export default FaqItem;

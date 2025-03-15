import { motion } from "framer-motion";

interface SponsorProps {
  title: string;
  description: string;
  buttonText: string;
  additionalButtonClassName: string;
  link: string; 
}

export default function Card({
  title,
  description,
  buttonText,
  additionalButtonClassName,
  link,
}: SponsorProps) {
  return (
    <motion.div
      className="flex flex-col gap-12 opacity-0"
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      role="group"
      aria-label={`${title} card`}
    >
      <div className="flex flex-col gap-4">
        <motion.h2
          className="text-[2.25rem] text-sans md:whitespace-nowrap font-bold text-[#1F1F1F]"
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.h2>
        <motion.p
          className="text-[1.125rem] max-w-prose sm:w-3/4 text-medium text-[#1F1F1F]"
          transition={{ duration: 0.3 }}
        >
          {description}
        </motion.p>
      </div>

      <a href={link} target="_blank" rel="noopener noreferrer">
        <motion.button
          className={`rounded-[320px] w-auto self-start cursor-pointer py-4 px-4 lg:px-8 font-bold text-center whitespace-nowrap text-xl xl:text-2xl font-sans flex items-center justify-center ${additionalButtonClassName}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          {buttonText}
        </motion.button>
      </a>
    </motion.div>
  );
}

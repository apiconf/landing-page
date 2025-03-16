import { motion } from 'framer-motion';

interface SponsorProps {
  title: string;
  description: string;
  buttonText: string;
  buttonTextsm: string;
  additionalButtonClassName: string;
  link: string;
}

export default function Card({
  title,
  description,
  buttonText,
  additionalButtonClassName,
  link,
  buttonTextsm,
}: SponsorProps) {
  return (
    <motion.div
      className="flex flex-col gap-8 md:gap-12 opacity-0 md:transform md:flex-[0_0_46.2963%]"
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }}
      role="group"
      aria-label={`${title} card`}
    >
      <div className="flex flex-col gap-4">
        <motion.h2 className="fluid-h2-48-32 text-[#1F1F1F]" transition={{ duration: 0.3 }}>
          {title}
        </motion.h2>
        <motion.p
          className="w-full max-w-[469px] text-2xl font-medium text-[#1F1F1F]"
          transition={{ duration: 0.3 }}
        >
          {description}
        </motion.p>
      </div>

      <a href={link} target="_blank" rel="noopener noreferrer">
        <motion.button
          className={`rounded-[320px] w-auto self-start cursor-pointer py-4 lspXS:py-8 px-[10%] lspXS:px-16 font-bold text-center whitespace-normal sm:whitespace-nowrap text-xl xl:text-2xl leading-none font-sans flex items-center justify-center ${additionalButtonClassName}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <span className="inline lspXS:hidden">{buttonTextsm}</span>
          <span className="hidden lspXS:inline">{buttonText}</span>
        </motion.button>
      </a>
    </motion.div>
  );
}

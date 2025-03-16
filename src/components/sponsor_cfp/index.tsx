import Card from './card';
import { motion } from 'framer-motion';

export default function Sponsor() {
  return (
    <motion.section
      className="w-full bg-white px-[5.9701%] md:px-[7.4074%] py-[123px] md:pt-[141px] md:pb-[139.5px] flex flex-col md:flex-row justify-center md:justify-start gap-16 md:gap-[7.407%]"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <Card
        title="Sponsor APIConf Lagos 2025"
        description="Learn more details to sponsor API Conference"
        buttonText="View Sponsorship Deck"
        buttonTextsm="Sponsor"
        additionalButtonClassName="bg-[#2F20BF] text-white"
        link="https://tinyurl.com/sponsor-apiconf-form"
      />
      <Card
        title="Speak at the 2025 Edition"
        description="Speak at the 2025 edition of API conference Lagos!"
        buttonText="Apply to Speak"
        buttonTextsm="Speak"
        additionalButtonClassName="bg-[#ECC89D]"
        link="https://sessionize.com/api-conf-lagos-2025/"
      />
    </motion.section>
  );
}

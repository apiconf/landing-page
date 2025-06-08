import Card from "./card";
import { motion } from "framer-motion";

export default function Sponsor() {
  return (
    <motion.section
      className="flex w-full flex-col justify-center gap-16 bg-white px-[5.9701%] py-[123px] md:flex-row md:justify-start md:gap-[7.407%] md:px-[7.4074%] md:pb-[139.5px] md:pt-[141px]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {[
        {
          title: 'Sponsor APIConf Lagos 2025',
          description: 'Learn more details to sponsor API Conference',
          buttonText: 'View Sponsorship Deck',
          buttonTextsm: 'Sponsor',
          additionalButtonClassName: 'bg-[#2F20BF] text-white',
          link: '/sponsor',
        },
        // {
        //   title: "Speak at the 2025 Edition",
        //   description: "Speak at the 2025 edition of API conference Lagos!",
        //   buttonText: "Apply to Speak",
        //   buttonTextsm: "Speak",
        //   additionalButtonClassName: "bg-[#ECC89D]",
        //   link: "/cfp",
        // },
      ].map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.2, ease: 'easeOut' }}
        >
          <Card {...item} />
        </motion.div>
      ))}
    </motion.section>
  );
}

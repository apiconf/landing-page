import Card from "./card";
import { motion } from "framer-motion";

export default function Sponsor() {
  const containerVariant = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cards = [
    {
      title: "Sponsor APIConf Lagos 2025",
      description: "Learn more details to sponsor API Conference",
      buttonText: "View Sponsorship Deck",
      buttonTextsm: "Sponsor",
      additionalButtonClassName: "bg-[#2F20BF] text-white",
      link: "/sponsor",
    },
    {
      title: "Speak at the 2025 Edition",
      description: "Speak at the 2025 edition of API conference Lagos!",
      buttonText: "Apply to Speak",
      buttonTextsm: "Speak",
      additionalButtonClassName: "bg-[#ECC89D]",
      link: "/cfp",
    },
  ];

  return (
    <motion.section
      className="w-full bg-white px-[5.9701%] md:px-[7.4074%] py-[123px] md:pt-[141px] md:pb-[139.5px] flex flex-col gap-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex flex-col md:flex-row justify-center md:justify-start gap-16 md:gap-[7.407%]">
        {cards.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
          >
            <Card {...item} />
          </motion.div>
        ))}
      </div>

      <hr className="border-[#F1F1F1] border-2" />

      <div className="flex flex-col gap-16">
        <motion.div
          className="flex flex-col gap-2"
          variants={containerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h3
            className="font-bold text-2xl lg:text-4xl text-[#1F1F1F]"
            variants={fadeUp}
          >
            Talk to us
          </motion.h3>
          <motion.p
            className="font-normal lg:text-xl"
            variants={fadeUp}
          >
            Need to speak to the team? Kindly reach out
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row gap-8 md:gap-16"
          variants={containerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {[{
            name: "Gbadebo Bello",
            email: "gbahdeybohbello@gmail.com"
          }, {
            name: "Sodiq Akinjobi",
            email: "sodiq.akinjobi@gmail.com"
          }].map(({ name, email }, index) => (
            <motion.div key={index} className="flex flex-col gap-2" variants={fadeUp}>
              <h3 className="font-bold text-2xl lg:text-4xl text-[#1F1F1F]">{name}</h3>
              <a
                href={`mailto:${email}`}
                className="font-normal  lg:text-xl text-blue-600 hover:underline"
              >
                {email}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

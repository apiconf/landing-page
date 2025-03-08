import Card from './card';
import { motion } from 'framer-motion';

export default function Sponsor() {
  return (
    <section className="bg-white w-full mx-auto max-w-7xl justify-center flex py-20">
      <motion.div
        className="flex flex-col md:flex-row px-8 justify-center gap-[8rem]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Card
            title="Sponsor APIConf Lagos 2025"
            description="Learn more details to sponsor API Conference"
            buttonText="View Sponsorship Deck"
            additionalButtonClassName="bg-[#2F20BF] text-white"
          />
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Card
            title="Speak at the 2025 Edition"
            description="Speak at the 2025 edition of API conference Lagos!"
            buttonText="Apply to Speak"
            additionalButtonClassName="bg-[#ECC89D]"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

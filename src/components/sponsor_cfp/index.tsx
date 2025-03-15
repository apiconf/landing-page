import Card from './card';
import { motion } from 'framer-motion';

export default function Sponsor() {
  return (
    <section className="bg-white w-full justify-center flex py-40">
      <motion.div
        className="flex flex-col md:flex-row px-8 justify-center gap-[8rem]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.div >
          <Card
            title="Sponsor APIConf Lagos 2025"
            description="Learn more details to sponsor API Conference"
            buttonText="View Sponsorship Deck"
            additionalButtonClassName="bg-[#2F20BF] text-white"
            link="https://tinyurl.com/sponsor-apiconf-form"
          />
        </motion.div>
        <motion.div>
          <Card
            title="Speak at the 2025 Edition"
            description="Speak at the 2025 edition of API conference Lagos!"
            buttonText="Apply to Speak"
            additionalButtonClassName="bg-[#ECC89D]"
            link="https://sessionize.com/api-conf-lagos-2025/"

          />
        </motion.div>
      </motion.div>
    </section>
  );
}

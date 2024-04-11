import { motion } from 'framer-motion';
import { SPRING_OPTIONS, mockArray } from './carousel';

type Props = {
  index: number;
};

function HiglightCards({ index }: Props) {
  return (
    <>
      {mockArray.map((_, idx) => {
        return (
          <motion.div
            key={idx}
            animate={{
              scale: index === idx ? 0.95 : 0.85,
              rotateY: -2,
            }}
            transition={SPRING_OPTIONS}
            className="h-[200px] md:h-[400px] lg:h-[700px] w-screen transform  -rotate-2 shrink-0 rounded-3xl bg-black object-cover"
          />
        );
      })}
    </>
  );
}

export default HiglightCards;

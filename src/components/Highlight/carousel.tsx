import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import React, { useCallback, useEffect } from "react";
import HiglightCard from "./card";
import styles from "./css/style.module.css";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const Carousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: false, delay: 3000 }),
  ]);

  const toggleAutoplay = useCallback(() => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const playOrStop = autoplay.play as any;
    playOrStop();
  }, [emblaApi]);

  useEffect(() => {
    toggleAutoplay();
  }, []);

  return (
    <div className={styles.embla}>
      <div className={styles["embla__viewport"]} ref={emblaRef}>
        <div className={styles["embla__container"]}>
          {slides.map((index) => (
            <HiglightCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;

import { EmblaOptionsType } from "embla-carousel";
//import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import React, { useRef, useCallback, useEffect } from "react";
import HiglightCard from "./card";
import styles from "./css/style.module.css";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const Carousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  // const [emblaRef, emblaApi] = useEmblaCarousel(options, [
  //   Autoplay({ playOnInit: false, delay: 3000 }),
  // ]);

  // const toggleAutoplay = useCallback(() => {
  //   const autoplay = emblaApi?.plugins()?.autoplay;
  //   if (!autoplay) return;

  //   const playOrStop = autoplay.play as any;
  //   playOrStop();
  // }, [emblaApi]);

  // useEffect(() => {
  //   toggleAutoplay();
  // }, []);

  const emblaRef = useRef(null);
  const [emblaViewportRef, emblaApi] = useEmblaCarousel(options);

  // const scrollPrev = useCallback(() => {
  //   if (emblaApi) emblaApi.scrollPrev()
  // }, [emblaApi])

  // const scrollNext = useCallback(() => {
  //   if (emblaApi) emblaApi.scrollNext()
  // }, [emblaApi])

  const swipeHandler = useCallback(
    (e: WheelEvent) => {
      if (!emblaApi) return;
      const isHorizontal = Math.abs(e.deltaX) > Math.abs(e.deltaY);
      if (isHorizontal) {
        if (e.deltaX > 0) {
          emblaApi.scrollPrev();
        } else {
          emblaApi.scrollNext();
        }
      }
    },
    [emblaApi]
  );

  const keyHandler = useCallback(
    (e: KeyboardEvent) => {
      if (!emblaApi) return;
      if (e.key === "ArrowLeft") {
        emblaApi.scrollPrev();
      } else if (e.key === "ArrowRight") {
        emblaApi.scrollNext();
      }
    },
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;

    const containerNode = emblaApi.containerNode();
    if (!containerNode) return;

    containerNode.addEventListener("wheel", swipeHandler as EventListener);
    window.addEventListener("keydown", keyHandler);

    return () => {
      containerNode.removeEventListener("wheel", swipeHandler as EventListener);
      window.removeEventListener("keydown", keyHandler);
    };
  }, [emblaApi, swipeHandler, keyHandler]);

  return (
    <div className={styles.embla}>
      <div className={styles["embla__viewport"]} ref={emblaViewportRef}>
        <div className={styles["embla__container"]} ref={emblaRef}>
          {slides.map((index) => (
            <HiglightCard key={index} num={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;

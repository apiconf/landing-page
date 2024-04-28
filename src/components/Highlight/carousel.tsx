import { EmblaOptionsType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import React, { useCallback, useEffect, useState } from 'react';
import HiglightCard from './card';

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const Carousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: false, delay: 3000 }),
  ]);
  const [isPlaying, setIsPlaying] = useState(false);

  const onButtonAutoplayClick = useCallback(
    (callback: () => void) => {
      const autoplay = emblaApi?.plugins()?.autoplay;
      if (!autoplay) return;

      const resetOrStop =
        autoplay.options.stopOnInteraction === false
          ? autoplay.reset
          : autoplay.stop;

      resetOrStop();
      callback();
    },
    [emblaApi]
  );

  const toggleAutoplay = useCallback(() => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const playOrStop = autoplay.play;
    playOrStop();
  }, [emblaApi]);

  useEffect(() => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    setIsPlaying(autoplay.isPlaying());
    emblaApi
      .on('autoplay:play', () => setIsPlaying(true))
      .on('autoplay:stop', () => setIsPlaying(false))
      .on('reInit', () => setIsPlaying(autoplay.isPlaying()));
  }, [emblaApi]);

  useEffect(() => {
    toggleAutoplay();
  }, []);

  return (
    <div className="embla py-10 w-full">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <HiglightCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;

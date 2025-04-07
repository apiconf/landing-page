import { useState, useEffect, useCallback, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaCarouselType } from 'embla-carousel';

type Tab = {
  id: string;
  label: string;
};

type TabsProps = {
  tabs: Tab[];
  defaultTab: string;
  children: (activeTab: string) => React.ReactNode;
  className?: string;
};

export default function Tabs({ tabs, defaultTab, className, children }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'keepSnaps',
    dragFree: true,
  });

  // Track if we need to show prev/next buttons
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  // Check if we need the carousel based on container width vs content width
  const [needsCarousel, setNeedsCarousel] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle scrolling
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  // Update button states when carousel position changes
  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  // Setup Embla event listeners
  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);

    return () => {
      emblaApi.off('reInit', onSelect);
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  // Check if tabs overflow their container
  useEffect(() => {
    if (!containerRef.current || !emblaApi) return;

    const checkOverflow = () => {
      if (!containerRef.current) return;

      const tabsContainer = containerRef.current.querySelector('.tabs-container');
      const tabsList = containerRef.current.querySelector('.tabs-list');

      if (tabsContainer && tabsList) {
        // Check if tabs actually need a carousel to scroll
        const fitsCompletely = tabsList.scrollWidth <= tabsContainer.clientWidth;
        setNeedsCarousel(!fitsCompletely);

        // Always reinitialize Embla when size changes
        emblaApi.reInit();
      }
    };

    // Initial check
    checkOverflow();

    // Check on window resize
    const handleResize = () => {
      checkOverflow();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [containerRef, emblaApi]);

  // Scroll to active tab when it changes
  useEffect(() => {
    if (!emblaApi) return;

    // Find the active tab's index
    const activeTabIndex = tabs.findIndex((tab) => tab.id === activeTab);
    if (activeTabIndex !== -1) {
      emblaApi.scrollTo(activeTabIndex);
    }
  }, [activeTab, emblaApi, tabs]);

  return (
    <div className="w-full" ref={containerRef}>
      <div className="relative mb-6">
        {/* Prev button - only show when carousel is needed and we can scroll prev */}
        {needsCarousel && !prevBtnDisabled && (
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 z-10 flex h-8 w-8 -translate-x-4 -translate-y-1/2 items-center justify-center rounded-full bg-[#1F1F1F] text-white"
            aria-label="Previous tabs"
          >
            <svg viewBox="0 0 24 24" width="16" height="16">
              <path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>
        )}

        <div className="tabs-container overflow-hidden px-2">
          <div ref={emblaRef}>
            <div className="tabs-list flex gap-3">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`whitespace-nowrap rounded-full px-8 py-3 text-2xl font-bold transition-colors ${
                    tab.id === activeTab ? 'text-black bg-[#90EAF2]' : 'bg-[#1F1F1F] text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Next button - only show when carousel is needed and we can scroll next */}
        {needsCarousel && !nextBtnDisabled && (
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 translate-x-4 items-center justify-center rounded-full bg-[#1F1F1F] text-white"
            aria-label="Next tabs"
          >
            <svg viewBox="0 0 24 24" width="16" height="16">
              <path fill="currentColor" d="M10.59 7.41L12 6l6 6-6 6-1.41-1.41L15.17 12z" />
            </svg>
          </button>
        )}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className={className}
        >
          {children(activeTab)}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

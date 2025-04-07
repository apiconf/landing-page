import SpacesCarousel from '@/components/Talks/spaces/spaces-carousel';

export default function TargetAudience() {
  const slides = [
    {
      id: 1,
      image: '/events/event-1.jpg',
      alt: `Slide 1`,
    },
    {
      id: 2,
      image: '/events/event-2.jpg',
      alt: `Slide 2`,
    },
    {
      id: 3,
      image: '/events/event-3.jpg',
      alt: `Slide 3`,
    },
    {
      id: 4,
      image: '/events/event-4.jpg',
      alt: `Slide 4`,
    },
    {
      id: 5,
      image: '/events/event-5.jpg',
      alt: `Slide 5`,
    },
    {
      id: 6,
      image: '/events/event-6.jpg',
      alt: `Slide 6`,
    },
    {
      id: 7,
      image: '/events/event-7.jpg',
      alt: `Slide 7`,
    },
    {
      id: 8,
      image: '/events/event-8.jpg',
      alt: `Slide 8`,
    },
    {
      id: 9,
      image: '/events/event-9.jpg',
      alt: `Slide 9`,
    },
    {
      id: 10,
      image: '/events/event-10.jpg',
      alt: `Slide 10`,
    },
  ];

  return (
    <section className="flex w-full flex-col bg-[#000] px-4 py-12 md:px-24 md:py-32 lg:px-32">
      <h2 className="mb-6 text-4xl font-bold text-white md:text-[4rem]">Who you will reach</h2>
      <p className="mb-12 max-w-[37.1875rem] text-base text-[#F1F1F1] md:mb-16 md:text-lg">
        Some body of text to accompany visually solid idea per section. This text if fully generated
        by NOT an LLM and serves only the purpose of content. We need Content. Content is not just
        content. It is voice, it is king.
      </p>
      <div className="flex w-full gap-16">
        <SpacesCarousel>
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="mr-[5.9701%] h-[400px] w-full max-w-[428px] flex-[0_0_100%] transform overflow-hidden rounded-6xl first:mr-[5.9701%] md:mr-[7.4074%] first:md:mr-[7.4074%] lg:h-[500px] lg:max-w-[784px]"
            >
              <img src={slide.image} alt={slide.alt} className="h-full w-full object-cover" />
            </div>
          ))}
        </SpacesCarousel>
      </div>
    </section>
  );
}

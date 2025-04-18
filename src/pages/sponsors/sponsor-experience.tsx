import SpacesCarousel from '@/components/Talks/spaces/spaces-carousel';

export default function SponsorExperience() {
  const slides = [
    {
      id: 1,
      image: '/sponsors/experience/slide_1.jpg',
      alt: `Slide 1`,
    },
    {
      id: 2,
      image: '/sponsors/experience/slide_2.jpg',
      alt: `Slide 2`,
    },
    {
      id: 3,
      image: '/sponsors/experience/slide_3.jpg',
      alt: `Slide 3`,
    },
    {
      id: 4,
      image: '/sponsors/experience/slide_4.jpg',
      alt: `Slide 4`,
    },
    {
      id: 5,
      image: '/sponsors/experience/slide_5.jpg',
      alt: `Slide 5`,
    },
    {
      id: 6,
      image: '/sponsors/experience/slide_6.jpg',
      alt: `Slide 6`,
    },
    {
      id: 7,
      image: '/sponsors/experience/slide_7.jpg',
      alt: `Slide 7`,
    },
    {
      id: 8,
      image: '/sponsors/experience/slide_8.jpg',
      alt: `Slide 8`,
    },
    {
      id: 9,
      image: '/sponsors/experience/slide_9.jpg',
      alt: `Slide 9`,
    },
    {
      id: 10,
      image: '/sponsors/experience/slide_10.jpg',
      alt: `Slide 10`,
    },
  ];

  return (
    <>
      <section className="bg-white px-8 py-20 text-[#000] md:p-32">
        <h2 className="mb-6 text-4xl font-bold md:text-[4rem]">Sponsor Experience</h2>
        <p className="mb-16 max-w-[37.1875rem] text-lg text-[#6E6E6E]">
          Our goal is to connect you with an engaged API community in a flexible, impactful way.
          Whether you need a simple, plug-and-play package or a fully customized plan, we’re here to
          ensure your brand resonates with the right people.
        </p>
        <div className="flex flex-col justify-between gap-x-8 gap-y-10 md:flex-row">
          <div className="md:max-w-[30%] 2xl:max-w-[25rem]">
            <span className="mb-4 text-balance text-4xl font-bold text-[#1F1F1F] md:text-5xl">
              Turnkey
            </span>
            <p className="text-pretty text-lg text-[#6E6E6E]">
              Bring your vision, and let us handle setup and logistics. From branding to booth
              design, we’ll make sure you stand out and connect with the audience you care about.
            </p>
          </div>
          <div className="md:max-w-[30%] 2xl:max-w-[25rem]">
            <span className="mb-4 text-balance text-4xl font-bold text-[#1F1F1F] md:text-5xl">
              Bespoke
            </span>
            <p className="text-pretty text-lg text-[#6E6E6E]">
              No two sponsors have the same story. We’ll collaborate to build a sponsorship strategy
              that aligns perfectly with your goals—whether it’s generating leads, boosting brand
              awareness, or showcasing a new product.
            </p>
          </div>
          <div className="md:max-w-[30%] 2xl:max-w-[25rem]">
            <span className="mb-4 text-balance text-4xl font-bold text-[#1F1F1F] md:text-5xl">
              Beyond the booth
            </span>
            <p className="text-pretty text-lg text-[#6E6E6E]">
              Go beyond standard booths and logos. We offer curated networking, interactive on-site
              experiences, and other creative touchpoints to spark meaningful conversations and
              lasting connections.
            </p>
          </div>
        </div>
      </section>
      <div className="py-8 pl-8 md:pb-32 md:pl-32 2xl:pt-32">
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
      </div>
    </>
  );
}

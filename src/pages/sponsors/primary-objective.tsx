import { useEffect, useMemo } from 'react';
import Tabs from './tabs';

function ChartCreator({ activeTab }: { activeTab: string }) {
  const allImages = useMemo(
    () => ({
      awareness: {
        path: '/sponsors/brand-awareness.png',
        caption: 'Brand Awareness',
      },
      conversations: {
        path: '/sponsors/in-person-conversations.png',
        caption: 'In-Person Conversations',
      },
      demos: {
        path: '/sponsors/product-demos-and-showcase.png',
        caption: 'Product Demos and Showcase',
      },
      leads: {
        path: '/sponsors/lead-generation.png',
        caption: 'Lead Generation',
      },
      keynotes: {
        path: '/sponsors/keynote-and-speaking-sessions.png',
        caption: 'Keynote and Speaking Sessions',
      },
      default: {
        path: '/sponsors/default-chart.png',
        caption: 'Default Text',
      },
    }),
    []
  );

  // Preload all images when component mounts
  useEffect(() => {
    Object.values(allImages).forEach((img) => {
      const preloadImage = new Image();
      preloadImage.src = img.path;
    });
  }, [allImages]);

  // Get current image data
  const imageData = allImages[activeTab as keyof typeof allImages] || allImages.default;

  return (
    <div className="mt-[4.5rem] w-full md:mt-32">
      <img src={imageData.path} alt={imageData.caption} className="w-full md:mx-auto md:w-fit" />
      <figcaption className="mt-2 text-center text-base font-medium text-[#A6A6A6] md:mt-8 md:text-[2rem]">
        {imageData.caption}
      </figcaption>
    </div>
  );
}

function SponsorshipObjectives() {
  return (
    <>
      <div className="sponsor-radial-bg mb-8 w-full lg:aspect-[736/239]">
        <div className="flex h-full flex-col items-center gap-x-[clamp(2rem,10%,8rem)] gap-y-16 py-16 md:mx-auto md:my-24 md:w-2/3 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-x-[clamp(1rem,4%,4rem)] gap-y-12 md:flex-row md:items-start">
            <div className="flex flex-col items-center">
              <div className="flex aspect-square size-[5.625rem] items-center justify-center rounded-full border-none bg-[#90EAF2]">
                <span className="text-center text-base font-bold text-[#1F1F1F]">100%</span>
              </div>
              <p className="max-w-40 text-center text-base font-bold text-[#1F1F1F]">
                Did we meet your sponsorship objectives?
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex aspect-square size-[5.625rem] items-center justify-center rounded-full border-none bg-[#90EAF2]">
                <span className="text-center text-base font-bold text-[#1F1F1F]">100%</span>
              </div>
              <p className="max-w-40 text-center text-base font-bold text-[#1F1F1F]">
                How satisfied were you with the attendee engagement?
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex aspect-square size-[5.625rem] items-center justify-center rounded-full border-none bg-[#90EAF2]">
                <span className="text-center text-base font-bold text-[#1F1F1F]">100%</span>
              </div>
              <p className="max-w-40 text-center text-base font-bold text-[#1F1F1F]">
                How satisfied were you with the Exhibition space?
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <p className="inline-flex gap-x-2">
              <span className="size-6 rounded-full border-none bg-[#E1EF9A]"></span>
              <span className="whitespace-nowrap text-base font-bold text-[#1F1F1F]">
                Strongly Agree
              </span>
            </p>
            <p className="inline-flex gap-x-2">
              <span className="size-6 rounded-full border-none bg-[#90EAF2]"></span>
              <span className="whitespace-nowrap text-base font-bold text-[#1F1F1F]">Agree</span>
            </p>
            <p className="inline-flex gap-x-2">
              <span className="size-6 rounded-full border-none bg-[#2F20BF]"></span>
              <span className="whitespace-nowrap text-base font-bold text-[#1F1F1F]">Neutral</span>
            </p>
            <p className="inline-flex gap-x-2">
              <span className="size-6 rounded-full border-none bg-[#ECC89D]"></span>
              <span className="whitespace-nowrap text-base font-bold text-[#1F1F1F]">Disagree</span>
            </p>
            <p className="inline-flex gap-x-2">
              <span className="size-6 rounded-full border-none bg-[#C97F27]"></span>
              <span className="whitespace-nowrap text-base font-bold text-[#1F1F1F]">
                Strongly Disagree
              </span>
            </p>
          </div>
        </div>
      </div>
      <p className="w-full text-center text-[2rem] font-medium text-[#A6A6A6]">
        Sponsorship Objectives
      </p>
    </>
  );
}

function FutureSponsorshipIntent() {
  return (
    <>
      <div className="sponsor-radial-bg mb-8 w-full text-3xl text-white">
        <div className="flex w-full flex-col items-center justify-between gap-16 py-20 md:mx-auto md:w-fit md:flex-row md:px-[5.5rem]">
          <div className="flex aspect-square size-60 items-center justify-center rounded-full border-none bg-[#4536DD] md:size-[19.75rem]">
            <span className="text-center text-base font-bold text-white">100%</span>
          </div>
          <div className="flex flex-col gap-y-4">
            <p className="inline-flex gap-x-2">
              <span className="size-6 rounded-full border-none bg-[#E1EF9A]"></span>
              <span className="whitespace-nowrap text-base font-bold text-[#1F1F1F]">Yes</span>
            </p>
            <p className="inline-flex gap-x-2">
              <span className="size-6 rounded-full border-none bg-[#2F20BF]"></span>
              <span className="whitespace-nowrap text-base font-bold text-[#1F1F1F]">Maybe</span>
            </p>
            <p className="inline-flex gap-x-2">
              <span className="size-6 rounded-full border-none bg-[#ECC89D]"></span>
              <span className="whitespace-nowrap text-base font-bold text-[#1F1F1F]">No</span>
            </p>
          </div>
        </div>
      </div>
      <p className="w-full text-center text-[2rem] font-medium text-[#A6A6A6]">
        Future Sponsorship Intent
      </p>
    </>
  );
}

function SponsorshipParticipationLevel() {
  return (
    <>
      <div className="sponsor-radial-bg mb-8 w-full text-3xl text-white">
        <div className="flex w-full flex-col items-center justify-between gap-16 py-20 md:mx-auto md:w-fit md:flex-row md:px-[5.5rem]">
          <div className="flex aspect-square size-60 items-center justify-center rounded-full border-none bg-[#E1EF9A] md:size-[19.75rem]">
            <span className="text-center text-base font-bold text-dark">100%</span>
          </div>
          <div className="flex flex-col gap-y-4">
            <p className="inline-flex gap-x-2">
              <span className="size-6 rounded-full border-none bg-[#E1EF9A]"></span>
              <span className="whitespace-nowrap text-base font-bold text-[#1F1F1F]">
                Participate at same level
              </span>
            </p>
            <p className="inline-flex gap-x-2">
              <span className="size-6 rounded-full border-none bg-[#2F20BF]"></span>
              <span className="whitespace-nowrap text-base font-bold text-[#1F1F1F]">
                Consider higher level
              </span>
            </p>
            <p className="inline-flex gap-x-2">
              <span className="size-6 rounded-full border-none bg-[#ECC89D]"></span>
              <span className="whitespace-nowrap text-base font-bold text-[#1F1F1F]">
                Lower level
              </span>
            </p>
          </div>
        </div>
      </div>
      <p className="w-full text-center text-[2rem] font-medium text-[#A6A6A6]">
        Sponsorship Participation Level
      </p>
    </>
  );
}

export default function PrimaryObjective() {
  return (
    <section className="w-full bg-[#000] px-6 py-16 md:px-24 md:py-32 lg:px-32">
      <span className="mb-6 text-2xl font-bold text-[#A6A6A6] md:text-5xl">Primary Objective</span>
      <h2 className="mb-6 text-[2rem] font-bold text-white md:text-[4rem]">
        Brand Engagement and Interaction
      </h2>
      <small className="text-lg text-[#F1F1F1]">Lorem ipsum test</small>
      <div className="mb-16 mt-12 md:mb-32 md:mt-16">
        <Tabs
          tabs={[
            { id: 'awareness', label: 'Brand Awareness' },
            { id: 'conversations', label: 'In-Person Conversations' },
            { id: 'demos', label: 'Product Demos and Showcase' },
            { id: 'leads', label: 'Lead Generation' },
            { id: 'keynotes', label: 'Keynote and Speaking Sessions' },
          ]}
          defaultTab="awareness"
        >
          {(activeTab) => <ChartCreator activeTab={activeTab} />}
        </Tabs>
      </div>
      <h2 className="mb-6 mt-16 max-w-[37.1875rem] text-[2rem] font-bold text-white md:mt-32 md:text-[4rem]">
        Brand Objectives and Presentation
      </h2>
      <small className="text-lg text-[#F1F1F1]">Lorem ipsum test</small>
      <div className="mt-12 md:mt-16">
        <Tabs
          tabs={[
            { id: 'sponsorship-objectives', label: 'Sponsorship Objectives' },
            { id: 'future-sponsorship-intent', label: 'Future Sponsorship Intent' },
            { id: 'sponsorship-participation-level', label: 'Sponsorship Participation Level' },
          ]}
          defaultTab="sponsorship-objectives"
          className="my-[4.5rem] md:my-32"
        >
          {(activeTab) => {
            switch (activeTab) {
              case 'sponsorship-objectives':
                return <SponsorshipObjectives />;
              case 'future-sponsorship-intent':
                return <FutureSponsorshipIntent />;
              case 'sponsorship-participation-level':
                return <SponsorshipParticipationLevel />;
              default:
                return null;
            }
          }}
        </Tabs>
      </div>
      <div className="text-white">
        <span className="text-4xl font-bold md:text-5xl">Sponsor APIConf Lagos 2025</span>
        <p className="mb-12 mt-4 max-w-[29.3125rem] text-2xl font-medium">
          Learn more details to sponsor API Conference
        </p>
        <div className="flex flex-col gap-x-8 gap-y-12 md:flex-row">
          <a
            href="https://drive.google.com/file/d/1TYEN5HVH8_7ofGNpq2FoVniPskh6wXXe/view"
            rel="noopener noreferrer"
            target="_blank"
            className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-[20rem] bg-[#2F20BF] p-6 sm:px-4 sm:py-8 md:w-fit md:px-16 lg:py-8"
          >
            <span className="text-2xl font-bold text-white">View Sponsorship Deck</span>
          </a>
          <a
            href="https://drive.google.com/file/d/1TYEN5HVH8_7ofGNpq2FoVniPskh6wXXe/view"
            rel="noopener noreferrer"
            target="_blank"
            className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-[20rem] bg-[#90EAF2] p-6 sm:px-4 sm:py-8 md:w-fit md:px-16 lg:py-8"
          >
            <span className="text-2xl font-bold text-[#000]">Contact Us</span>
          </a>
        </div>
      </div>
    </section>
  );
}

import Tabs from './tabs';

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
          {(activeTab) => {
            switch (activeTab) {
              case 'awareness':
                return <>AwarenessChart</>;
              case 'conversations':
                return <>ConversationsChart</>;
              case 'demos':
                return <>DEMOS</>;
              case 'leads':
                return <>LEADS</>;
              case 'keynotes':
                return <>KEYNOTES</>;
              default:
                return null;
            }
          }}
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
        >
          {(activeTab) => {
            switch (activeTab) {
              case 'sponsorship-objectives':
                return <>AwarenessChart</>;
              case 'future-sponsorship-intent':
                return <>ConversationsChart</>;
              case 'sponsorship-participation-level':
                return <>DEMOS</>;
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

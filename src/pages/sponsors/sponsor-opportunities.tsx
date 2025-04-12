interface SponsorTierProps {
  level: string;
  color: string;
  details: string;
  additionalBenefits?: string;
}

const SponsorTier: React.FC<SponsorTierProps> = ({ level, additionalBenefits, details, color }) => {
  return (
    <div className="flex h-full flex-col gap-y-1">
      <div className={`p-6 ${color} rounded-t-lg`}>
        <h2 className="text-2xl font-bold">{level} Sponsor</h2>
        <p className={`mt-2 ${!additionalBenefits ? 'invisible' : ''}`}>
          {additionalBenefits ? `+ ${additionalBenefits}` : 'No Benefits'}
        </p>
      </div>
      <div className="flex-grow rounded-b-lg bg-[#F5F5F5] p-6 text-primary-black">
        <p className="text-pretty">{details}</p>
      </div>
    </div>
  );
};

const SponsorshipTiers: React.FC = () => {
  const tiers = [
    {
      level: 'Bronze',
      color: 'bg-[#ECC89D]',
      additionalBenefits: '',
      details:
        'Perfect for newer brands or those seeking a cost-effective entry point. Get your name in front of a vibrant developer audience, access basic branding touchpoints, and start building meaningful connections within the API ecosystem.',
    },
    {
      level: 'Silver',
      color: 'bg-[#E1EF9A]',
      additionalBenefits: 'Bronze Benefits',
      details:
        'Ideal if you want to balance visibility with flexibility. This tier provides a dedicated booth and moderate brand highlights, enabling you to engage attendees in genuine conversations without oversaturating your presence.',
    },
    {
      level: 'Gold',
      color: 'bg-[#3819CB] text-white',
      additionalBenefits: 'Silver Benefits',
      details:
        'Amplify your reach through a keynote slot, a prime booth location, and event-round brand mentions. If you’re aiming to position yourself as a thought leader in the region, this level offers the audience and platform to make it happen.',
    },
    {
      level: 'Platinum',
      color: 'bg-[#90EAF2]',
      additionalBenefits: 'Gold Benefits',
      details:
        'Enjoy the highest level of exposure with exclusive benefits, custom integrations, and direct access to VIP experiences. Dominate the conference narrative and cement your brand as a premier force driving API innovation.',
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Responsive grid that changes from 1 column on mobile to 4 columns on larger screens */}
        {tiers.map((tier) => (
          <SponsorTier
            key={tier.level}
            level={tier.level}
            additionalBenefits={tier.additionalBenefits}
            color={tier.color}
            details={tier.details}
          />
        ))}
      </div>
    </>
  );
};

export default function SponsorOpportunities() {
  return (
    <>
      <section className="mt-20 px-6 md:px-32 md:pt-32">
        <h2 className="mb-6 text-4xl font-bold text-[#000] md:text-[4rem] xl:pl-[5.63rem]">
          Sponsor Opportunities
        </h2>
        <p className="max-w-[43.75rem] text-lg text-[#6E6E6E] xl:pl-[5.63rem]">
          Our sponsorship tiers are thoughtfully designed to match your goals— either building brand
          visibility or forging direct connections with innovators. Simply choose the level of
          exposure you need, and we’ll help you engage our community of developers, architects, and
          decision-makers.
        </p>
      </section>

      <div className="mx-auto mb-20 mt-[3.88rem] grid w-full gap-[1.38rem] px-6 md:mb-32 md:mt-[4.5rem] md:px-32 xl:grid-cols-[4.25rem_1fr]">
        <div className="hidden w-full flex-col gap-y-1 xl:flex">
          <div className="flex w-[4.25rem] flex-col items-center justify-center gap-2 rounded-t-2xl bg-none p-6">
            <h2 className="invisible text-2xl font-bold">#</h2>
            <p className="invisible">#</p>
          </div>
          <div className="flex min-h-60 w-[4.25rem] flex-1 items-center justify-center gap-2 rounded-bl-2xl rounded-tl-2xl bg-[#210C4B] px-6 py-10">
            <span className="-rotate-90 text-white">Details</span>
          </div>
        </div>
        <SponsorshipTiers />
      </div>

      <div className="w-full bg-[#000] px-6 py-16 md:py-32">
        <div className="w-full md:mx-auto md:max-w-[60%]">
          <p className="mb-4 text-center text-4xl font-bold text-[#F1F1F1] md:text-5xl">
            Together, we can shape the future of APIs in Africa, foster collaboration, and support
            the growth of a thriving API ecosystem.
          </p>
          <p className="mx-auto mb-12 max-w-[29.3125rem] text-center text-2xl font-medium text-[#F1F1F1]">
            Learn more details to sponsor API Conference
          </p>
          <div className="flex w-full flex-col gap-x-8 gap-y-12 md:mx-auto md:w-fit md:flex-row">
            <a
              href="https://drive.google.com/file/d/1TYEN5HVH8_7ofGNpq2FoVniPskh6wXXe/view"
              rel="noopener noreferrer"
              target="_blank"
              className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-[20rem] bg-[#E1EF9A] p-6 sm:px-4 sm:py-8 md:w-fit md:px-16 lg:py-8"
            >
              <span className="text-center text-2xl font-bold text-[#1F1F1F]">
                View Sponsorship Deck
              </span>
            </a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeX_vB-R7Dw5wlmnz0jgpD8b14bsB0f6cbLhoHRYnFMxaNmLA/viewform"
              rel="noopener noreferrer"
              target="_blank"
              className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-[20rem] bg-[#1F1F1F] p-6 sm:px-4 sm:py-8 md:w-fit md:px-16 lg:py-8"
            >
              <span className="text-center text-2xl font-bold text-white">Contact Us</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

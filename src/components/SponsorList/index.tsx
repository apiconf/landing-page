type sponsorTier = 'Platinum' | 'Gold' | 'Silver' | 'Bronze';

type Sponsors = {
  name: string;
  logo: string;
  tier: sponsorTier;
}[];

const sponsors: Sponsors = [
  // { name: 'ALATPay', logo: '/sponsors/', tier: 'Gold' },
  // { name: 'Google for Developers', logo: '/sponsors/', tier: 'Silver' },
  // { name: 'MyCover AI', logo: '/sponsors/', tier: 'Silver' },
  // { name: 'Interswitch', logo: '/sponsors/', tier: 'Bronze' },
  { name: 'APItoolkit', logo: '/sponsors/APItoolkit-Logo.png', tier: 'Bronze' },
  // { name: 'Yamify', logo: '/sponsors/', tier: 'Bronze' },
  // { name: 'APIlayer', logo: '/sponsors/', tier: 'TBD' },
];

const order: sponsorTier[] = ['Platinum', 'Gold', 'Silver', 'Bronze'];

const sortedSponsors = [...sponsors].sort((a, b) => {
  return order.indexOf(a.tier) - order.indexOf(b.tier);
});

const sponsorPillStyles: Record<sponsorTier, string> = {
  Platinum: 'text-[#F1F1F1] bg-[#1F1F1F]',
  Gold: 'text-[#1F1F1F] bg-[#ECC89D]',
  Silver: 'text-[#1F1F1F] bg-[#F5F5F5]',
  Bronze: 'text-[#1F1F1F] bg-[#90EAF2]',
};

export default function SponsorList() {
  return (
    <section className="relative flex w-full flex-col gap-16 bg-white px-[5.9701%] py-[123px] md:px-[7.4074%] md:py-[174px]">
      <div className="mb-16 w-full text-center">
        <h2 className="mb-2 text-4xl font-bold md:text-[64px] md:leading-[100%]">
          API Conference Lagos 2025 Sponsors
        </h2>
        <p>
          <span className="mx-auto block max-w-[594px] font-medium md:text-2xl">
            Sponsors of the biggest Convention of API Enthusiasts and Builders in Lagos!
          </span>
        </p>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {sortedSponsors.map((sponsor) => (
          <div
            key={sponsor.name}
            className={`flex size-full justify-center rounded-3xl border-2 border-solid border-[#A6A6A6] px-10 py-12 last-of-type:[&[data-tier='Bronze']]:col-span-3 first-of-type:[&[data-tier='Platinum']]:col-span-3`}
            data-tier={sponsor.tier}
          >
            <div
              data-tier={sponsor.tier}
              className="flex flex-col gap-4 last-of-type:[&[data-tier='Bronze']]:flex-row-reverse last-of-type:[&[data-tier='Bronze']]:items-center first-of-type:[&[data-tier='Platinum']]:flex-row-reverse first-of-type:[&[data-tier='Platinum']]:items-center"
            >
              <span
                className={`h-min w-min rounded-3xl px-3 py-0.5 text-sm font-bold ${sponsorPillStyles[sponsor.tier]}`}
              >
                {sponsor.tier}
              </span>
              <img src={sponsor.logo} alt={sponsor.name} className="size-full max-h-14" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

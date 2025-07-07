import { motion } from 'framer-motion';
import { useIsVisible } from '@/hooks';
import { useRef } from 'react';

type sponsorTier = 'Platinum' | 'Gold' | 'Silver' | 'Bronze';

type Sponsors = {
  name: string;
  logo: string;
  tier: sponsorTier;
}[];

const sponsors: Sponsors = [
  // { name: 'ALATPay', logo: '/sponsors/alat-pay.png', tier: 'Gold' },
  // { name: 'Google for Developers', logo: '/sponsors/Google-for-Developers.svg', tier: 'Silver' },
  { name: 'MyCover AI', logo: '/sponsors/mycover-ai.png', tier: 'Silver' },
  // { name: 'Interswitch', logo: '/sponsors/Interswitch.png', tier: 'Bronze' },
  { name: 'APItoolkit', logo: '/sponsors/APItoolkit-Logo.png', tier: 'Bronze' },
  // { name: 'Yamify', logo: '/sponsors/yamify-black.png', tier: 'Bronze' },
  // { name: 'APIlayer', logo: '/sponsors/APILayer.svg', tier: 'TBD' },
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
  const sponsorListRef = useRef(null);
  const sponsorRef = useRef(null);
  const isSponsorList = useIsVisible(sponsorListRef);
  const isSponsorRef = useIsVisible(sponsorRef);

  return (
    <section className="relative flex w-full flex-col gap-16 bg-white px-[5.9701%] py-[123px] md:px-[7.4074%] md:py-[174px]">
      <motion.div
        initial={{ y: 32, opacity: 0 }}
        animate={{
          y: isSponsorList ? 0 : 32,
          opacity: isSponsorList ? 1 : 0,
        }}
        transition={{
          duration: 1,
          ease: [0, 0, 0.58, 1],
        }}
        ref={sponsorListRef}
        className="mb-16 w-full text-center"
      >
        <h2 className="mb-2 text-4xl font-bold md:text-[64px] md:leading-[100%]">
          API Conference Lagos 2025 Sponsors
        </h2>
        <p>
          <span className="mx-auto block max-w-[594px] font-medium md:text-2xl">
            Sponsors of the biggest Convention of API Enthusiasts and Builders in Lagos!
          </span>
        </p>
      </motion.div>
      <motion.div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {sortedSponsors.map((sponsor) => (
          <div
            key={sponsor.name}
            className="sponsor-item flex size-full justify-center rounded-3xl border-2 border-solid border-[#A6A6A6] px-10 py-12"
            data-tier={sponsor.tier}
          >
            <div data-tier={sponsor.tier} className="flex flex-col gap-4">
              <span
                className={`h-min w-min rounded-3xl px-3 py-0.5 text-sm font-bold ${sponsorPillStyles[sponsor.tier]}`}
              >
                {sponsor.tier}
              </span>
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="size-full max-h-14 max-w-48 md:max-w-52"
              />
            </div>
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ y: 8, opacity: 0 }}
        animate={{
          y: isSponsorRef ? 0 : 8,
          opacity: isSponsorRef ? 1 : 0,
        }}
        transition={{
          duration: 0.75,
          ease: [0, 0, 0.58, 1],
          delay: 0.1,
        }}
        ref={sponsorRef}
        className="my-16"
      >
        <h3 className="mb-16 text-center text-3xl font-bold md:text-5xl">Community Sponsors</h3>
        <div className="flex w-full flex-col gap-6 md:flex-row">
          <div className="flex size-full justify-center rounded-3xl border-2 border-solid border-[#A6A6A6] px-10 py-12">
            <img
              src="/sponsors/asyncapi-logo--primary-dark.svg"
              alt="AsyncAPI"
              className="size-full h-14 max-w-64 md:max-w-52"
            />
          </div>
          <div className="flex size-full justify-center rounded-3xl border-2 border-solid border-[#A6A6A6] px-10 py-12">
            <img
              src="/sponsors/apidays-2025_Logo-min.png"
              alt="APIdays"
              className="size-full h-14 max-w-64 md:max-w-52"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

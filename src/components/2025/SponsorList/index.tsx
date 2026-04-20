import { motion } from 'framer-motion';
import { useIsVisible } from '@/hooks';
import { useRef } from 'react';

type sponsorTier = 'Platinum' | 'Gold' | 'Silver' | 'Bronze';

type Sponsors = {
  name: string;
  logo: string;
  tier: sponsorTier;
  link: string;
};

const sponsors: Sponsors[] = [
  { name: 'ALATPay', logo: '/sponsors/alat-pay.png', tier: 'Gold', link: 'https://alatpay.ng/' },
  {
    name: 'Google for Developers',
    logo: '/sponsors/Google-for-Developers.svg',
    tier: 'Silver',
    link: 'https://developers.google.com/',
  },
  {
    name: 'MyCover AI',
    logo: '/sponsors/mycover-ai.png',
    tier: 'Silver',
    link: 'https://mycover.ai/',
  },
  {
    name: 'Interswitch',
    logo: '/sponsors/Interswitch.png',
    tier: 'Silver',
    link: 'https://docs.interswitchgroup.com/docs/home',
  },
  {
    name: 'APItoolkit',
    logo: '/sponsors/monoscope.svg',
    tier: 'Bronze',
    link: 'https://apitoolkit.io/',
  },
  {
    name: 'Yamify',
    logo: '/sponsors/yamify.svg',
    tier: 'Bronze',
    link: 'https://www.yamify.co/',
  },
  {
    name: 'Globarman',
    logo: '/sponsors/globarman-logo-new.png',
    tier: 'Bronze',
    link: 'https://www.globarman.com/',
  },
];

const communityPartners: Array<Omit<Sponsors, 'tier'>> = [
  { name: 'APIlayer', logo: '/sponsors/APILayer.svg', link: 'https://apilayer.com/' },
  { name: 'CloudPlexo', logo: '/sponsors/Cloudplexo-Logo.png', link: 'https://cloudplexo.com/' },
  {
    name: 'AsyncAPI',
    logo: '/sponsors/asyncapi-logo--primary-dark.svg',
    link: 'https://www.asyncapi.com/',
  },
  {
    name: 'APIdays',
    logo: '/sponsors/apidays-2025_Logo-min.png',
    link: 'https://www.apidays.global/',
  },
  { name: 'Bump.sh', logo: '/sponsors/bumpsh.svg', link: 'https://bump.sh/' },
  { name: 'Postman', logo: '/sponsors/Postman-Logo.png', link: 'https://www.postman.com/' },
  {
    name: 'GithubCampusExpert',
    logo: '/sponsors/GitHubCampusExperts-Logo.png',
    link: 'https://github.com/campus-experts',
  },
  {
    name: 'WriteTheDocs NG',
    logo: '/sponsors/WTD-LOGO.png',
    link: 'https://www.meetup.com/Write-the-Docs-Nigeria/',
  },
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
      <div className="grid grid-cols-1 gap-6 md:grid-cols-6">
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
              <a href={sponsor.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="size-full max-h-14 max-w-48 md:max-w-52"
                />
              </a>
            </div>
          </div>
        ))}
      </div>

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
        <h3 className="mb-16 text-center text-3xl font-bold md:text-5xl">Community Partners</h3>
        <div className="flex w-full flex-col gap-6 md:flex-row md:flex-wrap md:items-center md:gap-11 md:px-10 xl:justify-between xl:gap-x-16">
          {communityPartners.map((partner) => (
            <div
              key={partner.name}
              className="flex size-full flex-1 justify-center rounded-3xl border-2 border-solid border-[#A6A6A6] px-10 py-12 md:border-none md:p-0"
            >
              <a href={partner.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="aspect-auto h-full max-h-14 min-h-8 max-w-64 md:max-w-36"
                />
              </a>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

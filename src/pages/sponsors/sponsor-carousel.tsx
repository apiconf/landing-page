import Marquee from 'react-fast-marquee';

interface Company {
  name: string;
  logo: string;
}

const Companies: Company[] = [
  { name: 'Fincra', logo: '/sponsors/Fincra-Logo.png' },
  { name: 'Postman', logo: '/sponsors/Postman-Logo.png' },
  { name: 'APIToolkit', logo: '/sponsors/APItoolkit-Logo.png' },
  { name: 'Globarman', logo: '/sponsors/Globarman-Logo.png' },
  { name: 'GitHub Campus Experts', logo: '/sponsors/GitHubCampusExperts-Logo.png' },
  { name: 'CloudPlexo', logo: '/sponsors/Cloudplexo-Logo.png' },
  { name: 'Nexascale', logo: '/sponsors/Nexascale-Logo.png' },
  { name: 'She Code Africa', logo: '/sponsors/SheCodeAfrica-Logo.png' },
  { name: 'DSC', logo: '/sponsors/DSC-Logo.png' },
  { name: 'AsyncAPI', logo: '/sponsors/AsyncAPI-Logo.png' },
  { name: 'Postman Student Expert', logo: '/sponsors/PostmanStudentExpert-Logo.png' },
];

export default function SponsorCarousel() {
  return (
    <Marquee autoFill={true} className="flex w-full items-center overflow-x-hidden">
      <div className="ml-[-6%] flex w-full items-center justify-center overflow-x-hidden py-8 text-[5.5rem]">
        {Companies.map((company) => (
          <div key={company.name} className="mx-4 md:mx-8">
            <img
              src={company.logo}
              alt={`Logo of ${company.name}`}
              className="h-auto max-h-10 w-auto object-contain md:max-h-16"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </Marquee>
  );
}

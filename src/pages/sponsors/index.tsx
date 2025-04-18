import { ScrollingShowcase } from '@/components/ScrollingShowcase';
import Header from './header';
import Main from './main';
import SponsorCarousel from './sponsor-carousel';
import About from './about';
import Stats from './stats';
import TargetAudience from './target-audience';
// import Chart from './chart';
import SponsorSection from './sponsor-section';
import PrimaryObjective from './primary-objective';
import SponsorExperience from './sponsor-experience';
import SponsorOpportunities from './sponsor-opportunities';
import PreFooterCta from './pre-footer-cta';
import Footer from '@/components/Footer/index';

export default function Sponsors() {
  return (
    <>
      <div className="flex min-h-fit flex-col bg-[url(/sponsors/sponsor-hero-mobile.jpg)] bg-top bg-no-repeat sm:bg-[url(/sponsors/sponsor-hero.jpg)] md:min-h-screen md:bg-cover">
        <Header />
        <Main />
      </div>
      <SponsorCarousel />
      <About />
      <Stats />
      <TargetAudience />
      {/* <Chart /> */}
      <ScrollingShowcase
        title="Companies"
        rows={[
          ['Microsoft', 'Google', 'Fincra', 'Paystack'],
          ['Oracle', 'MTN NG', 'GTCO', 'Others'],
        ]}
        separator={<span className="mx-5 md:mx-9">✹</span>}
      />
      <SponsorSection />
      <PrimaryObjective />
      <SponsorExperience />
      <SponsorOpportunities />
      <ScrollingShowcase
        title="Last year’s themes"
        rows={[
          ['Artificial Intelligence', 'Security', 'Governance'],
          ['Security', 'Governance', 'Artificial Intelligence'],
        ]}
        separator={<span className="mx-5 md:mx-9">→</span>}
      />
      <PreFooterCta />
      <Footer />
    </>
  );
}

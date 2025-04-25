import About from './about';
import Footer from '@/components/Footer/index';
import Header from './header';
import Main from './main';
import PreFooterCta from './pre-footer-cta';
import PrimaryObjective from './primary-objective';
import { ScrollingShowcase } from '@/components/ScrollingShowcase';
import SponsorCarousel from './sponsor-carousel';
import SponsorExperience from './sponsor-experience';
import SponsorOpportunities from './sponsor-opportunities';
import SponsorSection from './sponsor-section';
import Stats from './stats';
import TargetAudience from './target-audience';
import { useEffect } from 'react';

// import Chart from './chart';

export default function Sponsors() {

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
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

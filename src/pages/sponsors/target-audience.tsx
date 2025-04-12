export default function TargetAudience() {
  return (
    <section className="flex w-full flex-col bg-[#000] px-4 py-12 md:px-24 md:py-32 lg:px-32">
      <h2 className="mb-6 text-4xl font-bold text-white md:text-[4rem]">Who you will reach</h2>
      <p className="mb-12 max-w-[37.1875rem] text-base text-[#F1F1F1] md:mb-16 md:text-lg">
        Our attendees comprise senior engineers, product managers, founders, etc from Nigeria’s
        thriving tech ecosystem. They bring expertise from fintech, cloud, AI, and other rapidly
        growing fields—all converging around the power and potential of APIs.
        <br />
        <br />
        Our attendees work at a diverse range of companies and industries.
      </p>
      <div className="flex w-full gap-16">
        <img
          src="/sponsors/who-you-will-reach.png"
          alt="Companies and industries our attendees work at"
        />
      </div>
    </section>
  );
}

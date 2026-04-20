type StatsChild = {
  title: string;
  value: string;
};

function StatsChild({ title, value }: StatsChild) {
  return (
    <div className="flex flex-col items-center gap-8 font-sans">
      <span className="text-4xl font-bold text-[#E1EF9A] md:text-5xl">{value}</span>
      <span className="max-w-[15rem] text-center text-base font-medium uppercase text-[#A6A6A6] md:text-2xl">
        {title}
      </span>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="flex w-full flex-col bg-[#000] px-4 py-12 md:px-24 md:py-24 lg:px-32">
      <span className="mb-6 text-center text-4xl font-bold text-[#A6A6A6] md:text-left md:text-5xl">
        In 2024 we had
      </span>
      <span className="mb-20 text-center text-[5rem] font-bold text-white md:text-left md:text-9xl">
        600+ Attendees
      </span>
      <div className="flex flex-col gap-32 md:flex-row">
        <StatsChild title="SPEAKERS FROM TOP ORGANIZATIONS" value="16+" />
        <StatsChild title="COMMUNITY MEMBERS" value="2000+" />
        <StatsChild title="COMPANIES" value="100+" />
      </div>
    </section>
  );
}

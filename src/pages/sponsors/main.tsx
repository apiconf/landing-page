export default function Main() {
  return (
    <main className="flex w-full flex-1">
      <div className="min-h-full w-full flex-1">
        <div className="relative mx-auto flex w-full flex-col justify-between gap-12 px-4 pb-8 pt-52 md:top-[2%] md:w-[85%] md:flex-row md:gap-0 md:gap-x-[clamp(1rem,7%,3rem)] md:px-0 lg:top-[6%] lg:pt-60 xl:top-[10%]">
          <div className="flex-1 md:max-w-[640px]">
            <h1 className="text-balance font-sans text-4xl font-bold leading-[100%] tracking-[-0.045rem] text-primary-black sm:text-5xl md:text-[3.5rem] md:tracking-[-0.08rem] lg:text-[4rem]">
              API Conference 2025 Sponsorship.
            </h1>
            <p className="mt-4 font-sans text-base text-primary-black md:mt-8 md:text-lg">
              The goal of API Conf is to promote API literacy amongst the different developer
              ecosystems that exist within Lagos, and in the future, Nigeria/Africa regardless of
              your expertise or skill level.
            </p>
          </div>
          <div className="flex max-w-fit flex-1 flex-col items-end justify-end">
            <span className="mb-4 w-full text-base">Date</span>
            <p className="font-sans text-4xl font-bold leading-[100%] tracking-[-0.045rem] text-primary-black md:text-5xl md:tracking-[-0.08rem] lg:text-[4rem]">
              July
              <time dateTime="2025-07-18"> 18th</time> - <time dateTime="2025-07-19">19th</time>,
              2025
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

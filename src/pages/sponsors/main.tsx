export default function Main() {
  return (
    <main className="flex w-full flex-1">
      <div className="min-h-full w-full flex-1">
        <div className="relative mx-auto flex w-full flex-col justify-between gap-12 px-4 pb-8 pt-48 md:top-[2%] md:w-[85%] md:flex-row md:gap-0 md:gap-x-[clamp(1rem,7%,3rem)] md:px-0 lg:top-[6%] lg:pt-52 xl:top-[10%]">
          <div className="flex-1 md:max-w-[640px]">
            <h1 className="text-balance font-sans text-4xl font-bold leading-[100%] tracking-[-0.045rem] text-primary-black sm:text-5xl md:text-[3.5rem] md:tracking-[-0.08rem] lg:text-[4rem]">
              API Conference Lagos,
              <br />
              2026 Sponsorship.
            </h1>
            <div className="mt-4 flex max-w-fit flex-1 flex-col items-end justify-end md:mt-8">
              <p className="font-base font-sans text-3xl text-primary-black md:text-4xl lg:text-5xl">
                July
                {/* <time dateTime="2025-07-18"> 18th</time> - <time dateTime="2025-07-19">19th</time>, */}
                <time dateTime="2026-07-25"> 25th</time>, 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

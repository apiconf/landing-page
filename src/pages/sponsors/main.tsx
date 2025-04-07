export default function Main() {
  return (
    <main className="flex w-full flex-1">
      <div className="min-h-full w-full flex-1">
        <div className="relative top-1/3 mx-auto flex w-full flex-col justify-between gap-12 px-4 md:top-1/2 md:w-[85%] md:flex-row md:gap-0 md:px-0">
          <div className="flex-1 md:max-w-[640px]">
            <h1 className="font-sans text-4xl font-bold leading-[100%] tracking-[-0.045rem] text-primary-black md:text-[4rem] md:tracking-[-0.08rem]">
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
            <time
              dateTime="2025-07-18"
              className="font-sans text-4xl font-bold leading-[100%] tracking-[-0.045rem] text-primary-black md:text-[4rem] md:tracking-[-0.08rem]"
            >
              18 July 2025
            </time>
          </div>
        </div>
      </div>
    </main>
  );
}

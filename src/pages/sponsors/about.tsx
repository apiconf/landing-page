export default function About() {
  return (
    <section>
      <div className="mx-auto my-12 flex flex-col gap-y-12 px-4 md:my-24 md:w-[85%] md:flex-row md:gap-x-[clamp(1rem,7%,8rem)] md:px-0 lg:my-32">
        <div className="flex flex-1 items-center">
          <div className="max-w-[37.5rem] text-primary-black">
            <h2 className="mb-4 text-[1.75rem] font-bold tracking-[-0.035rem] md:mb-8 md:text-5xl md:tracking-normal">
              Become a Partner in Shaping the Future of APIs in Africa
            </h2>
            <p className="font-sans text-base md:text-lg text-pretty">
              API Conference Lagos is Africa’s leading API-focused conference, bringing together
              developers, API architects, product managers, CTOs, and thought leaders to explore the
              latest innovations in the API ecosystem. This year, we’re leveling up API Conference
              Lagos experience to bring new ways to learn, connect and build.
              <br />
              <br />
              We’ve joined forces with APIdays global to further expand our reach. We’ll also be
              hosting the AsyncAPI team for AsyncAPI Conference on Tour.
            </p>
          </div>
        </div>
        <div className="flex-1">
          <div className="md:vid-h-fluid-sponsors relative h-[14.15331rem] w-full overflow-hidden rounded-[1.42125rem] border-2 border-solid border-custom-blue md:rounded-[3rem]">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/bP8TQ9_xjR8?si=BFmjYpSytIvNzdij"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

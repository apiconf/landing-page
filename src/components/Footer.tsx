export default function NewFooter() {
  return (
    <footer className="w-full bg-[#1F1F1F]">
      <div className="mx-auto flex w-full max-w-7xl flex-col-reverse items-center justify-between px-[8%] py-8 text-white sm:px-[5%] md:flex-row md:py-0 2xl:px-[7.4%]">
        <p className="text:base py-[30px] font-bold leading-[22.32px] md:text-lg md:font-medium">
          API Conference Team &copy; 2026
        </p>
        <div className="flex items-center gap-6 text-white">
          <span className="font-bold">Connect:</span>
          <div className="inline-flex items-center justify-between gap-4">
            <a
              href="https://www.linkedin.com/company/api-conf-lagos/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a href="https://x.com/apiconflagos" target="_blank" rel="noopener noreferrer">
              X/Twitter
            </a>
            <a
              href="https://www.youtube.com/@APIConferenceLagos"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

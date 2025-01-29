export default function Footer() {
  return (
    <footer className="w-full bg-[#1F1F1F]">
      <div className="w-full max-w-7xl mx-auto flex flex-col-reverse md:flex-row justify-between items-center text-white px-[8%] sm:px-[5%] 2xl:px-[7.4%] py-8 md:py-0">
        <p className="py-[30px] leading-[22.32px] text:base md:text-lg font-bold md:font-medium">
          API Conference team &copy; 2025
        </p>
        <div className="flex gap-6 items-center text-white">
          <span className="font-bold">Connect:</span>
          <div className="inline-flex justify-between items-center gap-4">
            <a
              href="https://www.linkedin.com/company/api-conf-lagos/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/apiconflagos"
              target="_blank"
              rel="noopener noreferrer"
            >
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

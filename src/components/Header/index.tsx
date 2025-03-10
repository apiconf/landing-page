import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useIsVisible } from "../../hooks";
import { useRef } from "react";

const Header = () => {
  const headerRef = useRef(null);
  const isHeaderVisible = useIsVisible(headerRef, -1);

  return (
    <header ref={headerRef} className="">
      <motion.nav
        initial={{ y: "-100%" }}
        animate={{ y: isHeaderVisible ? "-100%" : 0 }}
        transition={{
          duration: 1,
          ease: [0, 0, 0.25, 1],
          delay: 0.5,
        }}
        className="flex items-center gap-x-16 sm:gap-x-20 justify-between py-5 lg:py-4 px-10 sm:px-20 2xl:px-32 shadow-md drop-shadow-sm bg-dark-purple"
      >
        <Link to="/" rel="noopener noreferrer">
          <img className="w-[155px]" src="/logo2025.svg" alt="apiconf logo" />
        </Link>

        <ul className="flex gap-x-4 md:gap-x-8 items-center text-white font-bold text-lg lg:text-2xl">
          <li>
            {" "}
            <a
              href="#spaces"
              rel="noopener noreferrer"
              target="_blank"
              className=""
            >
              Spaces
            </a>
          </li>
          <li>
            {" "}
            <a
              href="#faqs"
              rel="noopener noreferrer"
              target="_blank"
              className=""
            >
              FAQs
            </a>
          </li>
        </ul>
      </motion.nav>
    </header>
  );
};
export default Header;

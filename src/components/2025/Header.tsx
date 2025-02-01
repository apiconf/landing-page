import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useIsVisible } from "../../hooks";
import { useRef } from "react";

export default function Header() {
  const headerRef = useRef(null);
  const isHeaderVisible = useIsVisible(headerRef, -1);

  return (
    <header
      ref={headerRef}
      className="bg-dark-purple w-full py-8 mx-auto max-w-7xl"
    >
      <motion.nav
        initial={{ y: "-100%" }}
        animate={{ y: isHeaderVisible ? "-100%" : 0 }}
        transition={{
          duration: 1,
          ease: [0, 0, 0.25, 1],
        }}
        className="w-full flex items-center sm:gap-x-20 justify-between py-4 px-[8%] sm:px-[5%] 2xl:px-[7.4%]"
      >
        <Link to="/" rel="noopener noreferrer">
          <img
            className="w-[100px] md:w-[155px]"
            src="/logo2025.svg"
            alt="apiconf logo"
          />
        </Link>
        <ul className="text-white flex justify-between gap-x-4 md:gap-x-8 items-center">
          <li className="">
            <Link
              to=""
              className="md:bg-[#E1EF9A] whitespace-nowrap text-white md:text-primary-black py-0 md:py-4 px-0 md:px-8 rounded-[320px] font-bold text-base lg:text-lg xl:text-xl 2xl:text-2xl"
            >
              Register
            </Link>
          </li>
          <li className="">
            <Link
              to="/2024"
              className="md:bg-[#E1EF9A] whitespace-nowrap text-white md:text-primary-black py-0 md:py-4 px-0 md:px-8 rounded-[320px] font-bold text-base lg:text-lg xl:text-xl 2xl:text-2xl"
            >
              Past Events
            </Link>
          </li>
        </ul>
      </motion.nav>
    </header>
  );
}

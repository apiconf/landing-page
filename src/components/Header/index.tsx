import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { motion } from "framer-motion";
import { useIsVisible } from "../../hooks";
import { useRef } from "react";

const Header = () => {
  const headerRef = useRef(null);
  const isHeaderVisible = useIsVisible(headerRef, -1);

  return (
    <header ref={headerRef} className="w-full">
      <motion.nav
        initial={{ y: "-100%" }}
        animate={{ y: isHeaderVisible ? "-100%" : 0 }}
        transition={{
          duration: 1,
          ease: [0, 0, 0.25, 1],
          delay: 0.5,
        }}
        className="w-full flex items-center gap-x-16 sm:gap-x-20 justify-between py-4 px-[8%] sm:px-[5%] 2xl:px-[7.4%]"
      >
        <Link to="/" rel="noopener noreferrer">
          <img className="w-[155px] w-full" src={logo} alt="apiconf logo" />
        </Link>
        <ul className="max-w-[133px] sm:max-w-[400px] lg:max-w-[520px] xl:max-w-[775px] 2xl:max-w-[894px] w-full flex justify-between xl:gap-x-6 2xl:gap-x-8 items-center">
          <li>
            <Link to="/2024/#spaces">
              <dl className="flex flex-col gap-1">
                <dt className="font-bold text-lg sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                  Spaces
                </dt>
                <dd className="hidden xl:inline font-normal text-base 2xl:text-lg">
                  Catch up on Twitter Spaces
                </dd>
              </dl>
            </Link>
          </li>
          <li>
            <Link to="/2024/#FAQ">
              <dl className="flex flex-col gap-1">
                <dt className="font-bold text-lg sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                  FAQs
                </dt>
                <dd className="hidden xl:inline font-normal text-base 2xl:text-lg">
                  Questions, Questions
                </dd>
              </dl>
            </Link>
          </li>
          <li className="hidden sm:inline">
            <a
              href="https://lu.ma/apiconflagos24"
              rel="noopener noreferrer"
              target="_blank"
              className="bg-[#E1EF9A] py-4 px-8 rounded-[320px] font-bold lg:text-lg xl:text-xl 2xl:text-2xl"
            >
              Register
            </a>
          </li>
          <li className="hidden sm:inline">
            <Link
              to="/2024/#become-a-sponsor"
              className="bg-[#E1EF9A] py-4 px-8 rounded-[320px] font-bold lg:text-lg xl:text-xl 2xl:text-2xl"
            >
              <span className="hidden lg:inline">Our</span> Sponsors
            </Link>
          </li>
        </ul>
      </motion.nav>
    </header>
  );
};
export default Header;

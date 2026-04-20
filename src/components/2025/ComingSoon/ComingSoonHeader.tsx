import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useIsVisible } from '@/hooks';
import { useRef } from 'react';

export default function ComingSoonHeader() {
  const headerRef = useRef(null);
  const isHeaderVisible = useIsVisible(headerRef, -1);

  return (
    <header ref={headerRef} className="mx-auto w-full max-w-7xl bg-dark-purple py-8">
      <motion.nav
        initial={{ y: '-100%' }}
        animate={{ y: isHeaderVisible ? '-100%' : 0 }}
        transition={{
          duration: 1,
          ease: [0, 0, 0.25, 1],
        }}
        className="flex w-full items-center justify-between px-[8%] py-4 sm:gap-x-20 sm:px-[5%] 2xl:px-[7.4%]"
      >
        <Link to="/2025" rel="noopener noreferrer">
          <img className="w-[100px] md:w-[155px]" src="/logo2025.svg" alt="apiconf logo" />
        </Link>
        <ul className="flex items-center justify-between gap-x-4 text-white md:gap-x-8">
          <li className="">
            <Link
              to=""
              className="whitespace-nowrap rounded-[320px] px-0 py-0 text-base font-bold text-white md:bg-[#E1EF9A] md:px-8 md:py-4 md:text-primary-black lg:text-lg xl:text-xl 2xl:text-2xl"
            >
              Register
            </Link>
          </li>
          <li className="">
            <Link
              to="/2024"
              className="whitespace-nowrap rounded-[320px] px-0 py-0 text-base font-bold text-white md:bg-[#E1EF9A] md:px-8 md:py-4 md:text-primary-black lg:text-lg xl:text-xl 2xl:text-2xl"
            >
              Past Events
            </Link>
          </li>
        </ul>
      </motion.nav>
    </header>
  );
}

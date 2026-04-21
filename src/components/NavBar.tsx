import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useIsVisible } from '../hooks';
import { useRef } from 'react';

export default function NavBar() {
  const headerRef = useRef(null);
  const isHeaderVisible = useIsVisible(headerRef, -1);

  return (
    <div ref={headerRef}>
      <motion.nav
        initial={{ y: '-100%' }}
        animate={{ y: isHeaderVisible ? '-100%' : 0 }}
        transition={{
          duration: 1,
          ease: [0, 0, 0.25, 1],
          delay: 0.5,
        }}
        className="flex items-center justify-between gap-x-10 border-b border-solid border-[#251377] px-[3.98%] py-4 sm:gap-x-20 md:px-[7.4074%]"
      >
        <Link to="/" rel="noopener noreferrer">
          <img className="h-auto w-full max-w-[155.36px]" src="/logo2026.svg" alt="apiconf logo" />
        </Link>

        <ul className="flex items-center gap-x-4 text-lg font-bold leading-none text-white sm:gap-x-8 lg:text-2xl">
          <li>
            {' '}
            <a href="/#spaces" rel="noopener noreferrer" className="">
              Spaces
            </a>
          </li>
          <li>
            {' '}
            <a href="#faqs" rel="noopener noreferrer" className="">
              FAQs
            </a>
          </li>
          <li className="hidden sm:block">
            {' '}
            <a href="/teams" rel="noopener noreferrer" className="whitespace-nowrap">
              Meet the team
            </a>
          </li>
        </ul>
      </motion.nav>
    </div>
  );
}

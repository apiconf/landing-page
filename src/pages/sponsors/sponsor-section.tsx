import { motion } from 'framer-motion';
import { useIsVisible } from '../../hooks';
import { useRef } from 'react';
import APItoolkitLogo from '../../assets/APItoolkit-Logo.svg';
import FincraLogo from '../../assets/fincra-logo.svg';
import PostmanLogo from '../../assets/Postman.svg';

export default function SponsorSection() {
  const headerRef = useRef(null);
  const bannerRef = useRef(null);
  const isHeaderVisible = useIsVisible(headerRef, 0.75);
  const isBannerVisible = useIsVisible(bannerRef, 0.75);

  const childVariant = {
    visible: {
      y: isHeaderVisible ? 0 : 32,
      opacity: isHeaderVisible ? 1 : 0,
      transition: {
        ease: [0, 0, 0.75, 1],
        duration: 1,
      },
    },
    hidden: {
      y: 32,
      opacity: 0,
    },
  };
  const bannerVariant = {
    visible: {
      y: isBannerVisible ? 0 : 32,
      opacity: isBannerVisible ? 1 : 0,
      transition: {
        ...childVariant.visible.transition,
        delay: 0.1,
      },
    },
    hidden: {
      opacity: 0,
    },
  };

  return (
    <section className="flex w-full flex-col items-center bg-[#fff] bg-sponsor px-6 py-16 sm:items-start sm:px-[5%] md:gap-16 md:p-32 lg:flex-row lg:items-stretch lg:justify-between 2xl:px-[7.4%]">
      <div className="w-full flex-col justify-center space-y-8 pb-8 sm:space-y-16 sm:px-0 md:px-[8%] lg:mb-[3.18%] lg:flex">
        <motion.div
          ref={headerRef}
          initial="hidden"
          animate="visible"
          variants={childVariant}
          className="w-full space-y-2 md:text-center"
        >
          <h2 className="text-black w-full max-w-[720px] text-4xl font-bold md:mx-auto md:text-5xl md:leading-[59.52px] lg:text-6xl lg:leading-[74.4px] 3xl:text-[64px] 3xl:leading-[79.36px]">
            API Conference Lagos 2024 Sponsors
          </h2>
          <p className="max-w-[330px] text-2xl font-medium opacity-80 sm:max-w-[500px] sm:text-xl sm:leading-[24.8px] md:mx-auto md:max-w-[594px] md:text-2xl md:leading-[29.76px]">
            Sponsors of the biggest Convention of API Enthusiasts and Builders in Lagos!
          </p>
        </motion.div>

        <motion.div
          ref={bannerRef}
          initial="hidden"
          animate="visible"
          variants={bannerVariant}
          className="!mb-16 !mt-32 flex w-full flex-col items-center gap-16 sm:!my-10 md:!my-32 md:flex-row md:flex-wrap md:items-start md:justify-center"
        >
          <div>
            <p className="mb-8 w-full text-center text-2xl font-bold leading-[29.76px] text-[#1F1F1F] sm:text-left md:text-center md:font-medium">
              Platinum Sponsor
            </p>
            <img src={FincraLogo} alt="Fincra Logo" className="w-full max-w-[256px]" />
          </div>
          <div>
            <p className="mb-8 w-full text-center text-2xl font-bold leading-[29.76px] text-[#1F1F1F] sm:text-left md:text-center md:font-medium">
              Gold Sponsor
            </p>
            <img src={PostmanLogo} alt="Postman Logo" className="w-full max-w-[256px]" />
          </div>
          <div>
            <p className="mb-8 w-full text-center text-2xl font-bold leading-[29.76px] text-[#1F1F1F] sm:text-left md:text-center md:font-medium">
              Bronze Sponsors
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:flex-nowrap md:justify-normal">
              <img src={APItoolkitLogo} alt="APItoolkit Logo" className="w-full max-w-[251px]" />
              <img
                src="/sponsor-component/globarman.png"
                alt="Globarman Logo"
                className="w-full max-w-[218.57px]"
              />
            </div>
          </div>
          <div className="w-full">
            <p className="mb-8 w-full text-center text-2xl font-bold leading-[29.76px] text-[#1F1F1F] sm:text-left md:text-center md:font-medium">
              Community Partners
            </p>
            <div className="flex flex-col flex-wrap items-center gap-12 md:flex-row md:justify-center md:gap-12 xl:justify-between xl:gap-8">
              <img
                src="/sponsor-component/github-student.png"
                alt="Github Student Logo"
                className="w-full max-w-[83.14px]"
              />
              <img
                src="/sponsor-component/cloudplexo.png"
                alt="CloudPlexo Logo"
                className="w-full max-w-[141.22px]"
              />
              <img
                src="/sponsor-component/nexascale.png"
                alt="NexaScale Logo"
                className="w-full max-w-[188.52px]"
              />
              <img
                src="/sponsor-component/sca.png"
                alt="She Codes Africa Logo"
                className="w-full max-w-[56.55px]"
              />
              <img
                src="/sponsor-component/gdsc.png"
                alt="Google Developer Students Club Logo"
                className="w-full max-w-[104.08px]"
              />
              <img
                src="/sponsor-component/async-api.png"
                alt="AsyncAPI Logo"
                className="w-full max-w-[115.09px]"
              />
              <img
                src="/sponsor-component/postman.png"
                alt="Postman Logo"
                className="w-full max-w-[52.55px]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

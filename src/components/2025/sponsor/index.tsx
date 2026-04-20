import APItoolkitLogo from '@/assets/APItoolkit-Logo.svg';
import FincraLogo from '@/assets/fincra-logo.svg';
import PostmanLogo from '@/assets/Postman.svg';
import { motion } from 'framer-motion';
import { useIsVisible } from '@/hooks';
import { useRef } from 'react';

const Sponsor = () => {
  const headerRef = useRef(null);
  // const contactRef = useRef(null);
  // const buttonRef = useRef(null);
  const bannerRef = useRef(null);
  const isHeaderVisible = useIsVisible(headerRef, 0.75);
  // const isContactVisible = useIsVisible(contactRef, 0.75);
  // const isButtonVisible = useIsVisible(buttonRef, 0.75);
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
  // const contactVariant = {
  //   visible: {
  //     y: isContactVisible ? 0 : 32,
  //     opacity: isContactVisible ? 1 : 0,
  //     transition: {
  //       ...childVariant.visible.transition,
  //       delay: 0.2,
  //     },
  //   },
  //   hidden: {
  //     ...childVariant.hidden,
  //   },
  // };
  // const buttonVariant = {
  //   visible: {
  //     y: isButtonVisible ? 0 : 32,
  //     opacity: isButtonVisible ? 1 : 0,
  //     transition: {
  //       ease: [0, 0, 0.58, 1],
  //       delay: 0.3,
  //       y: { duration: 0.75 },
  //       opacity: { duration: 1 },
  //     },
  //   },
  //   hidden: {
  //     ...childVariant.hidden,
  //   },
  // };
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
    <section
      id="become-a-sponsor"
      className="flex w-full flex-col items-center gap-16 bg-[#fff] bg-sponsor pt-16 sm:items-start sm:px-[5%] sm:py-12 lg:flex-row lg:items-stretch lg:justify-between 2xl:px-[7.4%]"
    >
      <div className="w-full flex-col justify-center space-y-8 px-[8%] pb-8 sm:space-y-16 sm:px-0 lg:mb-[3.18%] lg:flex">
        <motion.div
          ref={headerRef}
          initial="hidden"
          animate="visible"
          variants={childVariant}
          className="w-full space-y-2"
        >
          <h2 className="text-black w-full max-w-[720px] text-5xl font-bold leading-[59.52px] lg:text-6xl lg:leading-[74.4px] 3xl:text-[64px] 3xl:leading-[79.36px]">
            API Conference Lagos 2024 Sponsors
          </h2>
          <p className="max-w-[330px] text-left text-lg font-medium leading-[22.32px] opacity-80 sm:max-w-[500px] sm:text-xl sm:leading-[24.8px] md:max-w-[594px] md:text-2xl md:leading-[29.76px]">
            Sponsors of the biggest Convention of API Enthusiasts and Builders in Lagos!
          </p>
        </motion.div>

        <motion.div
          ref={bannerRef}
          initial="hidden"
          animate="visible"
          variants={bannerVariant}
          className="!my-10 flex w-full flex-col gap-16 md:!my-32 md:flex-row md:flex-wrap md:justify-center"
        >
          <div>
            <p className="mb-8 w-full text-2xl font-medium leading-[29.76px] text-[#1F1F1F] md:text-center">
              Platinum Sponsor
            </p>
            <img src={FincraLogo} alt="Fincra Logo" className="w-full max-w-[256px]" />
          </div>
          <div>
            <p className="mb-8 w-full text-2xl font-medium leading-[29.76px] text-[#1F1F1F] md:text-center">
              Gold Sponsor
            </p>
            <img src={PostmanLogo} alt="Postman Logo" className="w-full max-w-[256px]" />
          </div>
          <div>
            <p className="mb-8 w-full text-2xl font-medium leading-[29.76px] text-[#1F1F1F] md:text-center">
              Bronze Sponsors
            </p>
            <div className="flex flex-wrap items-center gap-8 md:flex-nowrap">
              <img src={APItoolkitLogo} alt="APItoolkit Logo" className="w-full max-w-[251px]" />
              <img
                src="/sponsors/globarman-logo-new.png"
                alt="Globarman Logo"
                className="w-full max-w-[218.57px]"
              />
            </div>
          </div>
          <div className="w-full">
            <p className="mb-8 w-full text-2xl font-medium leading-[29.76px] text-[#1F1F1F] md:text-center">
              Community Partners
            </p>
            <div className="flex flex-wrap items-center gap-12 md:justify-center md:gap-12 xl:justify-between xl:gap-8">
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

        {/* <motion.div
          ref={contactRef}
          initial="hidden"
          animate="visible"
          variants={contactVariant}
          className="flex flex-col sm:flex-row lg:flex-wrap items-start gap-x-16 gap-y-8"
        >
          <InquireContact
            contactName="Sodiq Akinjobi"
            linkedInUrl="https://www.linkedin.com/in/geektutor/"
            email="sodiq.akinjobi@gmail.com"
          />
          <InquireContact
            contactName="Gbadebo Bello"
            linkedInUrl="https://www.linkedin.com/in/gbahdeyboh/"
            email="gbahdeybohbello@gmail.com"
          />
        </motion.div>

        <motion.a
          href="https://forms.gle/Mt4YqBtmzTEPw3EK7"
          rel="noopener noreferrer"
          target="_blank"
          ref={buttonRef}
          initial="hidden"
          animate="visible"
          variants={buttonVariant}
          className="w-full max-w-[330px] lg:max-w-[467px] lg:w-[70.01%] p-6 sm:px-4 sm:py-8 md:px-8 lg:py-12 cursor-pointer bg-white flex gap-2 justify-center items-center rounded-[320px]"
        >
          <span className="text-black font-extrabold text-2xl leading-[29.76px]">
            More Details in Deck
          </span>
        </motion.a> */}
      </div>
    </section>
  );
};
export default Sponsor;

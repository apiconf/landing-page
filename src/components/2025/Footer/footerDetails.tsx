import { useIsVisible, useScreenWidth } from "../../../hooks";

import { Link } from "react-router-dom";
import arrow from "../../../assets/arrow-icon.svg";
import conf2024 from "../../../assets/conf-2024.png";
import footerDetailStyle from "./css/footer-details.module.css";
import image3D from "../../../assets/3D-Image.png";
import { motion } from "framer-motion";
import { useRef } from "react";

const FooterDetails = ({ newYear }: { newYear?: boolean }) => {
  const headerTextRef = useRef(null);
  const footerNavRef = useRef(null);
  const footerSaluteRef = useRef(null);
  const image3DRef = useRef(null);
  const image3DMbRef = useRef(null);

  const isFooterNavVisible = useIsVisible(footerNavRef);
  const isFooterSaluteVisible = useIsVisible(footerSaluteRef);
  const isHeaderTextVisible = useIsVisible(headerTextRef);
  const isImage3DVisible = useIsVisible(image3DRef);
  const isImage3DMbVisible = useIsVisible(image3DMbRef, 1);

  const { isLaptop } = useScreenWidth();

  const isVisibleOnLaptop = (falseVal: boolean) =>
    isLaptop ? isHeaderTextVisible : falseVal;

  const currentYear = new Date().getFullYear();

  return (
    <div className={footerDetailStyle.container}>
      <h2 ref={headerTextRef} className={footerDetailStyle.headerText}>
        <motion.span
          initial={{ y: "116%" }}
          animate={{ y: isHeaderTextVisible ? "0%" : "116%" }}
          transition={{
            duration: 1,
            ease: [0.35, 0, 0.25, 1],
          }}
          className="hidden sm:block relative sm:absolute bottom-0"
        >
          API Conference
        </motion.span>
        <motion.span
          initial={{ x: "-100%", y: 0 }}
          animate={{
            x: isHeaderTextVisible ? "0%" : "-100%",
            y: "100%",
          }}
          transition={{
            duration: 1,
            ease: [0.35, 0, 0.25, 1],
          }}
          className="block sm:hidden !rotate-90 relative bottom-0 right-0"
        >
          API Conference
        </motion.span>
      </h2>
      <div className={footerDetailStyle.content}>
        <motion.ul
          ref={footerNavRef}
          initial={{ y: 32, opacity: 1 }}
          animate={{
            y: isFooterNavVisible ? 0 : 32,
            opacity: isVisibleOnLaptop(isFooterNavVisible) ? 1 : 1,
          }}
          transition={{
            y: { duration: 0.5, ease: [0, 0, 0.75, 1], delay: 0.2 },
            opacity: { duration: 1, ease: [0, 0, 0.75, 1], delay: 0.2 },
          }}
          className={footerDetailStyle.footerNav}
        >
          <li className={footerDetailStyle.link}>
            <Link to="/2024/#about" className={footerDetailStyle.linkText}>
              about API conference
            </Link>
            <img
              className={footerDetailStyle.linkIcon}
              src={arrow}
              alt="arrow-icon"
            />
          </li>
          <li className={footerDetailStyle.link}>
            <Link
              to="/2024/#become-a-sponsor"
              className={footerDetailStyle.linkText}
            >
              Our Sponsors
            </Link>
            <img
              className={footerDetailStyle.linkIcon}
              src={arrow}
              alt="arrow-icon"
            />
          </li>
          <li className={footerDetailStyle.link}>
            <Link to="/2024/sessions" className={footerDetailStyle.linkText}>
              Sessions
            </Link>
            <img
              className={footerDetailStyle.linkIcon}
              src={arrow}
              alt="arrow-icon"
            />
          </li>
          <li className={footerDetailStyle.link}>
            <a href="/2024/speakers" className={footerDetailStyle.linkText}>
              speakers
            </a>
            <img
              className={footerDetailStyle.linkIcon}
              src={arrow}
              alt="arrow-icon"
            />
          </li>
        </motion.ul>
        <motion.div
          ref={footerSaluteRef}
          initial={{ y: 32, opacity: 1 }}
          animate={{
            y: isFooterSaluteVisible ? 0 : 32,
            opacity: isVisibleOnLaptop(isFooterNavVisible) ? 1 : 1,
          }}
          transition={{
            duration: 0.5,
            ease: [0, 0, 0.75, 1],
          }}
          className={footerDetailStyle.footerSalute}
        >
          <img
            src={newYear ? "/logo2025.svg" : conf2024}
            alt="api_conference_logo"
          />
          <div className={footerDetailStyle.salutation}>
            <p>made with love,</p>
            <p>{newYear ? currentYear : "2024"} API conference team</p>
          </div>
        </motion.div>
      </div>
      <motion.img
        src={image3D}
        ref={image3DMbRef}
        initial={{ y: 32, opacity: 1 }}
        animate={{
          y: isImage3DMbVisible ? 0 : 32,
          opacity: isImage3DMbVisible ? 1 : 1,
        }}
        transition={{
          y: { duration: 0.5, ease: [0, 0, 0.75, 1], delay: 0.4 },
          opacity: { duration: 1, ease: [0, 0, 0.75, 1], delay: 0.4 },
        }}
        className={`block sm:hidden ${footerDetailStyle.image3D}`}
        alt="api-conf"
      />
      <motion.img
        id="elevate"
        src={image3D}
        ref={image3DRef}
        initial={{ y: 32, opacity: 1 }}
        animate={{
          y: isImage3DVisible ? 0 : 32,
          opacity: isVisibleOnLaptop(isFooterNavVisible) ? 1 : 1,
        }}
        transition={{
          y: { duration: 0.5, ease: [0, 0, 0.75, 1], delay: 0.4 },
          opacity: { duration: 1, ease: [0, 0, 0.75, 1], delay: 0.4 },
        }}
        className={`hidden sm:block ${footerDetailStyle.image3D}`}
        alt="api-conf"
      />
    </div>
  );
};

export default FooterDetails;

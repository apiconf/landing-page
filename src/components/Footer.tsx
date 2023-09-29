import email from "../assets/mail-icon.svg";
import emailMobile from "../assets/email-blue-bg.svg";
import linkedIn from "../assets/linkedIn-icon.svg";
import linkedInMobile from "../assets/linkedIn-blue-bg.svg";
import logo from "../assets/logo-white.svg";
import play from "../assets/icon-play.svg";
import x from "../assets/x-icon.svg";
import xMobile from "../assets/x-blue-bg.svg";

const Footer = () => {
  return (
    <footer className="pt-[64px] px-[5%] sm:px-[4%] text-[#FFFFFF]">
      <div className="bg-[#2F1C81] rounded-t-[24px] pt-[42px] pb-[42px] sm:pt-[82px] sm:pb-[4%] sm:px-[4%]">
        {/* desktop / tab */}
        <div className="hidden sm:flex items-start justify-between">
          <div className="flex flex-col gap-[28px]">
            <span className="flex gap-[14px] items-center">
              <img src={email} alt="email" loading="lazy" />
              <a
                href="mailto:info@apiconf.io"
                rel="noopener noreferrer"
                target="_blank"
              >
                info@apiconf.io
              </a>
            </span>
            <span className="flex gap-[14px] items-center">
              <img src={x} alt="x" loading="lazy" />
              <a
                href="https://x.com/apiconflagos/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Twitter
              </a>
            </span>
            <span className="flex gap-[14px] items-center">
              <img src={linkedIn} alt="linkedIn" loading="lazy" />
              <a
                href="https:www.linkedin.com/company/api-conf-lagos"
                rel="noopener noreferrer"
                target="_blank"
              >
                linkedIn
              </a>
            </span>
          </div>

          <div className="flex flex-col w-[35%]">
            <img src={logo} alt="apiconf" />
            <p className="text-center mt-[64px]">2023 API Conf</p>
          </div>

          <div className="flex flex-col gap-[24px] items-end">
            <img src={play} alt="play" width="57" height="57" />
          </div>
        </div>

        {/* mobile */}
        <div className="flex sm:hidden flex-col items-center justify-center gap-[40px]">
          <div className="w-[60%]">
            <img src={logo} alt="apiconf" />
          </div>

          <div className="flex flex-col gap-[20px]">
            <span className="flex gap-[10px] items-center">
              <img src={emailMobile} alt="email" loading="lazy" />
              <a
                href="mailto:info@apiconf.io"
                rel="noopener noreferrer"
                target="_blank"
              >
                info@apiconf.io
              </a>
            </span>
            <span className="flex gap-[10px] items-center">
              <img src={xMobile} alt="x" loading="lazy" />
              <a
                href="https://x.com/apiconflagos/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Twitter
              </a>
            </span>
            <span className="flex gap-[10px] items-center">
              <img src={linkedInMobile} alt="linkedIn" loading="lazy" />
              <a
                href="https:www.linkedin.com/company/api-conf-lagos"
                rel="noopener noreferrer"
                target="_blank"
              >
                linkedIn
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

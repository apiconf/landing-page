import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import HeaderDateTime from "./dateTime";

const Header = () => {
  return (
    <header className="w-full flex justify-center pt-[22px] pb-[21.31px] px-[5%] sm:px-[4%] lg:pt-[25px] lg:pb-[27px]">
      <div className="relative w-full flex justify-between font-bold text-base text-[#666]">
        <HeaderDateTime />
        <nav className="w-full flex justify-between">
          <Link to="/" rel="noopener noreferrer">
            <img
              className="max-w-[103px] sm:max-w-[172.48px] w-full md:absolute md:inset-0 md:mx-auto"
              src={logo}
              alt="apiconf logo"
            />
          </Link>
          <ul className="max-w-[148px] md:max-w-[217px] w-full flex gap-x-6 items-center">
            <li>
              About <span className="hidden md:inline">APICONF</span>
            </li>
            <Link to="https://forms.gle/Mt4YqBtmzTEPw3EK7">
            <li>Support Us</li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;

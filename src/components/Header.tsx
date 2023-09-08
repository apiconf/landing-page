import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full flex justify-center pt-[22px] pb-[21.31px] px-[16px] lg:pt-[25px] lg:pb-[27px] lg:px-[64px]">
      <div className="relative max-w-dsktp w-full flex justify-between font-bold text-base text-[#666]">
        <div className="max-w-[221px] w-full hidden md:flex items-center gap-x-1">
          <span className="block w-4 h-4 bg-[#ECC89D] rounded"></span>
          <span>09:28 GMT Lagos, Nigeria</span>
        </div>
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
            <li>Support Us</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;

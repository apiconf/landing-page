import { Link } from "react-router-dom";
import BgSponsor from "../../assets/sponsor-title-bg.svg";
interface inquireContactProps {
  contactName: string;
  linkedInUrl: string;
  email: string;
}
const InquireContact = ({
  contactName,
  linkedInUrl,
  email,
}: inquireContactProps) => {
  return (
    <div className="max-w-full sm:max-w-[467px] md:max-w-full w-full p-6 md:flex-[1_1_467px] flex flex-col gap-2 items-center rounded-3xl bg-gradient-to-r from-[#ECC89D] to-[#E2EF9C] break-all">
      <h4 className="relative w-full max-w-[231px] w-full h-[37px] flex justify-center items-center text-custom-blue font-MonumentExtended-extrabold text-[18.414px] md:text-[16px] lg:text-[18.414px] leading-[1]">
        <img
          className="absolute inset-0 margin-auto w-full"
          src={BgSponsor}
          alt=""
        />
        <Link
          className="z-10"
          to={linkedInUrl}
          rel="noreferrer noopener"
          target="_blank"
        >
          {contactName}
        </Link>
      </h4>
      <Link
        className="text-base font-bold text-primary-black leading-[110%]"
        to={`mailto:${email}`}
        rel="noreferrer noopener"
        target="_blank"
      >
        {email}
      </Link>
    </div>
  );
};
export default InquireContact;

import { Link } from "react-router-dom";

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
    <div className="max-w-[467px] w-full p-6 flex flex-col gap-2 items-center rounded-3xl bg-gradient-to-r from-[#ECC89D] to-[#E2EF9C]">
      <h4 className="w-full max-w-[231px] w-full h-[37px] bg-sponsorTitleBg bg-no-repeat bg-contain flex justify-center items-center text-custom-blue text-center font-MonumentExtended-extrabold text-[18.414px] leading-[1]">
        <Link to={linkedInUrl} rel="noreferrer noopener" target="_blank">
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

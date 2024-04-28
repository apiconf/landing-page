import { Link } from 'react-router-dom';
interface inquireContactProps {
  contactName: string;
  linkedInUrl?: string;
  email: string;
}
const InquireContact = ({ contactName, email }: inquireContactProps) => {
  return (
    <div className="text-xl space-y-2">
      <h4 className="font-bold tetx-[18px] md:text-[25px]">{contactName}</h4>
      <Link
        className="text-primary-black inline-block text-[18px] md:text-[25px] leading-[110%]"
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

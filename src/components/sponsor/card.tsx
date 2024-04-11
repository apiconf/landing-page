import { Link } from 'react-router-dom';
interface inquireContactProps {
  contactName: string;
  linkedInUrl?: string;
  email: string;
}
const InquireContact = ({ contactName, email }: inquireContactProps) => {
  return (
    <div className="text-xl">
      <h4 className="font-bold">{contactName}</h4>
      <Link
        className="text-primary-black leading-[110%]"
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

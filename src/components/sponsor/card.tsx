interface InquireContactProps {
  contactName: string;
  linkedInUrl?: string;
  email: string;
}
const InquireContact = ({ contactName, email }: InquireContactProps) => {
  return (
    <div>
      <h4 className="text-black font-bold text-lg sm:text-xl md:text-2xl leading-[22.32px] sm:leading-[24.8px] md:leading-[29.76px]">
        {contactName}
      </h4>
      <a
        className="text-black inline-block font-medium text-lg sm:text-xl md:text-2xl leading-[22.32px] sm:leading-[24.8px] md:leading-[29.76px] opacity-80"
        href={`mailto:${email}`}
        rel="noreferrer noopener"
        target="_blank"
      >
        {email}
      </a>
    </div>
  );
};
export default InquireContact;

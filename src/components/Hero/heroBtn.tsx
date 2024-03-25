import IconSpeaker from "../../assets/icon-speaker.svg";
import IconTicket from "../../assets/icon-ticket.svg";

interface props {
  text: string;
  extra: string;
}
export const ApplyBtn = ({ text, extra }: props) => {
  return (
    <a
      href="https://lu.ma/apiconflagos24"
      rel="noopener noreferrer"
      target="_blank"
      className="cursor-pointer w-full h-[52px] p-4 flex justify-center items-center gap-x-2 rounded-6xl border-2 border-solid border-[#7147F6] bg-gradient-to-b from-[#7147F6] from-[0%] via-[rgba(255, 255, 255, 0)] via-[100%] to-custom-blue hover:to-[#2F1C81]"
    >
      <span className="flex w-4 h-4 bg-white justify-center items-center rounded">
        <img className="w-3" src={IconTicket} alt="" />
      </span>
      <span className="text-base font-bold text-white">
        {text} <span className="inline lg:hidden xl:inline">{extra}</span>
      </span>
    </a>
  );
};

export const VolunteerBtn = ({ text, extra }: props) => {
  return (
    <a
      href="https://sessionize.com/api-conf-lagos-2024/"
      rel="noopener noreferrer"
      target="_blank"
      className="cursor-pointer w-full h-[52px] p-4 flex justify-center items-center gap-x-2 rounded-6xl border-2 border-solid border-[#eef6c6] bg-gradient-to-b from-[#FBF3EA] from-[0%] via-[rgba(255, 255, 255, 0)] via-[100%] to-[#E2EF9C] hover:to-[#C8E042]"
    >
      <img className="w-4" src={IconSpeaker} alt="" />
      <span className="text-base font-bold text-purple">
        {text} <span className="inline lg:hidden xl:inline">{extra}</span>
      </span>
    </a>
  );
};

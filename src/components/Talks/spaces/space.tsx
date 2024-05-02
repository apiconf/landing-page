interface SpaceProps {
  iconOne: string;
  iconTwo: string;
  title: string;
  subTitle: string;
  btnIcon: string;
  btnText: string;
  link: string;
}
const Space = ({
  iconOne,
  iconTwo,
  title,
  subTitle,
  btnIcon,
  btnText,
  link,
}: SpaceProps) => {
  return (
    <div className="bg-white p-8 rounded-[30px] max-w-[469px] w-full flex flex-col gap-8">
      <div className="w-[112px] flex gap-4">
        <img src={iconOne} />
        <img className="hidden sm:block" src={iconTwo} />
      </div>
      <div className="text-primary-black flex flex-col gap-3">
        <h3 className="text-2xl leading-none font-bold text-inherit">
          {title}
        </h3>
        <h4 className="text-lg leading-none font-medium text-inherit">
          {subTitle}
        </h4>
      </div>
      <a
        href={link}
        rel="noopener noreferrer"
        target="_blank"
        className="cursor-pointer flex gap-2 items-center"
      >
        <span className="text-[#4121CF] text-lg leading-none font-extrabold">
          {btnText}
        </span>
        <span className=" w-4 h-4  flex justify-center items-center rounded">
          <img src={btnIcon} alt="" />
        </span>
      </a>
    </div>
  );
};
export default Space;

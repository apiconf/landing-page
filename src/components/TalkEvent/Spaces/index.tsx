interface SpacesProps {
  iconOne: string;
  iconTwo: string;
  title: string;
  subTitle: string;
  btnIcon: string;
  btnText: string;
  link: string;
}
const Spaces = ({
  iconOne,
  iconTwo,
  title,
  subTitle,
  btnIcon,
  btnText,
  link,
}: SpacesProps) => {
  return (
    <div className="bg-white p-5 rounded-[30px] my-8 lg:my-[150px] md:w-[500px] md:max-w-[500px] max-w-[300px] mx-auto lg:flex lg:items-center">
      <div className="max-w-[400px] w-full h-full flex flex-col justify-between z-20">
        <div className="flex gap-4 p-4">
          <img src={iconOne} />
          <img src={iconTwo} />
        </div>
        <h3 className="text-[25px] leading-normal font-bold text-primary-black">
          {title}
        </h3>
        <h4 className="text-base pb-4 leading-[110%] font-medium text-primary-black">
          {subTitle}
        </h4>
        <a
          href={link}
          rel="noopener noreferrer"
          target="_blank"
          className="cursor-pointer flex gap-2 items-center"
        >
          <span className="text-[#4121CF] font-extrabold">{btnText}</span>
          <span className=" w-4 h-4  flex justify-center items-center rounded">
            <img src={btnIcon} alt="" />
          </span>
        </a>
      </div>
    </div>
  );
};
export default Spaces;

import { ReactNode } from "react";

interface ctaActionObj {
  image: string;
  title: string;
  children: ReactNode;
}
const HeroCards = ({ image, title, children }: ctaActionObj) => {
  return (
    <div className="max-w-[358px] lg:max-w-[308px] w-full lg:h-[280px] lg:flex lg:flex-col justify-between lg:p-5 lg:p-6 xl:p-8 lg:bg-white lg:rounded-3xl lg:shadow-heroCard">
      <img
        className="hidden lg:block max-w-[88px] w-full"
        src={image}
        alt={title}
      />
      <div className="w-full lg:flex lg:flex-col lg:gap-y-4">
        <h2 className="hidden lg:block text-base lg:text-[21px] xl:text-[25px] font-bold text-primary-black">
          {title}
        </h2>
        {children}
      </div>
    </div>
  );
};
export default HeroCards;

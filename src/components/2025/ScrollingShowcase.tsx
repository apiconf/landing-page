import Marquee from 'react-fast-marquee';
import { ReactNode } from 'react';

interface ScrollingItemProps {
  name: string;
  separator: ReactNode;
}

const ScrollingItem: React.FC<ScrollingItemProps> = ({ name, separator }) => (
  <>
    <span>{name}</span>
    <span className="mx-9">{separator}</span>
  </>
);

interface ScrollingRowProps {
  items: string[];
  separator?: ReactNode;
}

const ScrollingRow: React.FC<ScrollingRowProps> = ({ items, separator = '✹' }) => (
  <Marquee autoFill={true} className="flex w-full items-center overflow-x-hidden">
    <p className="glowing-text-sponsors ml-[-6%] flex w-full items-center justify-center overflow-x-hidden text-[5.50rem]">
      {items.map((name, i) => (
        <ScrollingItem key={i} name={name} separator={separator} />
      ))}
    </p>
  </Marquee>
);

interface ScrollingShowcaseProps {
  title?: string;
  rows: string[][];
  separator?: ReactNode;
}

export const ScrollingShowcase: React.FC<ScrollingShowcaseProps> = ({
  title = 'Showcase',
  rows,
  separator,
}) => {
  return (
    <section className="w-full bg-[#000] pb-[4.25rem]">
      <h2 className="mb-8 px-4 text-4xl font-bold text-white md:mb-20 md:px-24 md:text-5xl lg:px-32">
        {title}
      </h2>
      <div className="flex flex-col gap-8 md:gap-16">
        {rows.map((items, i) => (
          <ScrollingRow key={i} items={items} separator={separator} />
        ))}
      </div>
    </section>
  );
};

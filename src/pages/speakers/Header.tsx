export default function Header({
  carouselRef,
}: {
  carouselRef: React.RefObject<HTMLDivElement>;
}) {
  const onPrevButtonClick = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: carouselRef.current.scrollLeft - 200,
        behavior: "smooth",
      });
    }
  };

  const onNextButtonClick = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: carouselRef.current.scrollLeft + 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="mb-8 flex items-center justify-between">
      <h1 className="ml-24 mb-6 font-sans text-2xl font-bold capitalize text-[#F1F1F1] md:text-4xl lg:mb-8 lg:text-5xl">
        A Lineup of Amazing Speakers
      </h1>
      <div className="hidden items-center gap-x-4">
        <button
          type="button"
          onClick={onPrevButtonClick}
          className="text-black rounded-[320px] bg-[#E1EF9A] px-8 py-4 font-sans text-2xl font-bold"
        >
          Prev
        </button>
        <button
          type="button"
          onClick={onNextButtonClick}
          className="text-black rounded-[320px] bg-[#E1EF9A] px-8 py-4 font-sans text-2xl font-bold"
        >
          Next
        </button>
      </div>
    </div>
  );
}

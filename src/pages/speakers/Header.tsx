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
    <div className="flex items-center justify-between mb-8">
      <h1 className="mb-6 lg:mb-8 text-[#F1F1F1] text-2xl md:text-4xl lg:text-5xl font-sans font-bold">
        The Incredible Speakers
      </h1>
      <div className="gap-x-4 items-center hidden lg:flex">
        <button
          type="button"
          onClick={onPrevButtonClick}
          className="bg-[#E1EF9A] rounded-[320px] py-4 px-8 text-black font-bold text-2xl font-sans"
        >
          Prev
        </button>
        <button
          type="button"
          onClick={onNextButtonClick}
          className="bg-[#E1EF9A] rounded-[320px] py-4 px-8 text-black font-bold text-2xl font-sans"
        >
          Next
        </button>
      </div>
    </div>
  );
}

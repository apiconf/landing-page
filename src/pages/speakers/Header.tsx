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

  const prevBtnDisabled = carouselRef.current?.scrollLeft === 0;

  const nextBtnDisabled = (() => {
    const current = carouselRef.current;
    if (!current) return false;

    return current.scrollLeft === current.scrollWidth - current.clientWidth;
  })();

  return (
    <div className="flex items-center justify-between mb-8">
      <h1 className="mb-8 text-[#F1F1F1] text-5xl font-sans font-bold">
        The Incredible Speakers
      </h1>
      <div className="flex gap-x-4 items-center">
        <button
          type="button"
          disabled={prevBtnDisabled}
          onClick={onPrevButtonClick}
          className="bg-[#E1EF9A] rounded-[320px] py-4 px-8 text-black font-bold text-2xl font-sans"
        >
          Prev
        </button>
        <button
          type="button"
          disabled={nextBtnDisabled}
          onClick={onNextButtonClick}
          className="bg-[#E1EF9A] rounded-[320px] py-4 px-8 text-black font-bold text-2xl font-sans"
        >
          Next
        </button>
      </div>
    </div>
  );
}

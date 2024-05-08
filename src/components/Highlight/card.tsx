import styles from "./css/style.module.css";

function HiglightCard({ num }: { num: number }) {
  return (
    <div className={styles["embla__slide"]}>
      {/* Use an Image instead */}
      <div className="h-[95%] w-full bg-[#000000] rounded-[64px] -rotate-2 relative">
        <h1 className="text-white text-8xl absolute inset-0 m-auto inline">
          {num}
        </h1>
      </div>
    </div>
  );
}

export default HiglightCard;

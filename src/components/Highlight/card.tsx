import styles from "./css/style.module.css";

function HiglightCard() {
  return (
    <div className={styles["embla__slide"]}>
      {/* Use an Image instead */}
      <div className="h-[95%] w-full bg-[#000000] rounded-[64px] -rotate-2"></div>
    </div>
  );
}

export default HiglightCard;

import styles from "./css/style.module.css";

function HiglightCard() {
  return (
    <div className={styles["embla__slide"]}>
      {/* Use an Image instead */}
      <div className="h-[95%] w-full bg-[#111313] rounded-3xl -rotate-2"></div>
    </div>
  );
}

export default HiglightCard;

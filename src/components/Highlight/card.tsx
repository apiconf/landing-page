import styles from "./css/style.module.css";
import sampleImg from "../../assets/lg-about-section-bg.svg";

interface HighlightPicsProps {
  id?: number;
  url: string;
  alt: string;
}

function HiglightCard({ id, url, alt }: HighlightPicsProps) {
  return (
    <div className={styles["embla__slide"]}>
      {/* Use an Image instead */}
      <div className="h-[95%] w-full bg-[#000000] rounded-[64px] -rotate-2 relative">
        <img
          src={url ? url : sampleImg}
          alt={alt ? alt : ""}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default HiglightCard;

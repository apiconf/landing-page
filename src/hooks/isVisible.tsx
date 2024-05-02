import { useEffect, useState } from "react";

export type RefType = React.RefObject<HTMLDivElement | null>;

export const useIsVisible = (ref: RefType) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    if (currentRef) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting);
        },
        { threshold: 0.3 }
      );

      observer.observe(currentRef);

      return () => {
        observer.unobserve(currentRef);
      };
    }
  }, [ref]);

  return isVisible;
};

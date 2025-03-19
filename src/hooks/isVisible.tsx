// import { useEffect, useState } from "react";

// export type RefType = React.RefObject<HTMLDivElement | null>;

// export const useIsVisible = (
//   ref: RefType,
//   threshold = 0.6,
//   extra = 0,
//   minus = 0
// ) => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentRef = ref.current;

//       if (currentRef) {
//         const currentRefTop = currentRef.getBoundingClientRect().top;
//         const windowHeight = window.innerHeight;

//         if (currentRefTop < windowHeight * threshold + extra - minus) {
//           setIsVisible(true);
//         } else {
//           setIsVisible(false);
//         }
//       }
//     };
//     handleScroll();

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return isVisible;
// };


import { useEffect, useState } from "react";

export type RefType = React.RefObject<HTMLDivElement | null>;

export const useIsVisible = (
  ref: RefType,
  threshold = 0.6,
  extra = 0,
  minus = 0
) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const currentRefTop = ref.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      setIsVisible(currentRefTop < windowHeight * threshold + extra - minus);
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ref, threshold, extra, minus]); // Add ref to dependencies

  return isVisible;
};

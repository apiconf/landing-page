import { useState, useEffect } from "react";

export const useScreenWidth = () => {
  const [screenWidth, setScreenWidth] = useState(getWindowWidth());
  const [isMobile, setIsMobile] = useState(false);
  const [isPad, setIsPad] = useState(false);
  const [isLaptop, setIsLaptop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(getWindowWidth());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const isMobileWidth = screenWidth < 425;
    const isPadWidth = screenWidth >= 425 && screenWidth < 1024;
    const isLaptopWidth = screenWidth >= 1024;

    setIsMobile(isMobileWidth);
    setIsPad(isPadWidth);
    setIsLaptop(isLaptopWidth);
  }, [screenWidth]);

  return { screenWidth, isMobile, isPad, isLaptop };
};

const getWindowWidth = () => {
  return typeof window !== "undefined" ? window.innerWidth : 0;
};

import { useState, useEffect } from "react";
import { CAROUSEL_CARDS, CAROUSEL_AUTO_PLAY, CAROUSEL_INTERVAL } from "../constants/carousel";

const useCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (CAROUSEL_AUTO_PLAY) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const numVisibleCards = isLargeScreen ? 2 : 1;
          return (prevIndex + 1) % Math.ceil(CAROUSEL_CARDS.length / numVisibleCards);
        });
      }, CAROUSEL_INTERVAL);

      return () => clearInterval(timer);
    }
  }, [isLargeScreen]);

  return { currentIndex, setCurrentIndex, isLargeScreen };
};

export default useCarousel;

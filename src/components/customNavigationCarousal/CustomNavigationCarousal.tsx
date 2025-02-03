import React from "react";
import { IMAGES } from "../../constants/images";
import { CAROUSEL_CARDS } from "../../constants/carousel";
import useCarousel from "../../hooks/useCarousel";

const CustomNavigationCarousal: React.FC = () => {
  const { currentIndex, setCurrentIndex, isLargeScreen } = useCarousel();

  const transformValue = isLargeScreen
    ? `translateX(-${currentIndex * 50}%)`
    : `translateX(-${currentIndex * 100}%)`;

  return (
    <div className="carousel-container relative w-full max-w-[1300px] mx-auto overflow-hidden lg:h-[270px] h-auto">
      <div className="absolute top-3 left-4 sm:top-2 sm:left-10 md:top-4 md:left-6 lg:top-3 lg:left-3 flex items-center gap-2 z-10">
        <h1 className="text-[18px] font-semibold font-Poppins">Editor’s Picks</h1>
        <img src={IMAGES.STAR_ICON} alt="Star Icon" />
      </div>

      <div
        className="carousel-images flex transition-transform duration-500"
        style={{ transform: transformValue }}
      >
        {CAROUSEL_CARDS.map((card, index) => (
          <div key={index} className="w-full lg:w-1/2 flex-shrink-0 p-4">
            <div className="card flex flex-col lg:flex-row justify-center items-center gap-[15px] mt-14 sm:mt-8 md:mt-4">
              <img
                src={card.image}
                alt={`Card ${index}`}
                className="w-full sm:w-full lg:max-w-[272px] lg:max-h-[170px] h-auto object-cover"
              />
              <div className="py-[30px] flex flex-col justify-center items-center gap-2">
                <h2 className="text-[18px] font-ibm-plex text-gray-900 font-bold">
                  {card.title}
                </h2>
                <p className="text-justify font-NunitoSans text-secondary text-[16px] font-normal">
                  {card.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="carousel-indicators absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {Array.from({
          length: Math.ceil(CAROUSEL_CARDS.length / (isLargeScreen ? 2 : 1)),
        }).map((_, index) => (
          <span
            key={index}
            className={`w-[25px] h-[4px] rounded-[3px] cursor-pointer ${
              index === currentIndex ? "bg-light" : "bg-primary"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomNavigationCarousal;

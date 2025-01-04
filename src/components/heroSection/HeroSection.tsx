import { IMAGES } from "../../constants/images";
import CoronavirusCard from "../coronavirusCard/CoronavirusCard";

const HeroSection = () => {
  return (
    <div className="flex flex-wrap justify-center gap-[100px] max-w-[1366px] items-center w-full ">
      <div className="relative">
        <img
          src={IMAGES.NEWS_LOGO}
          alt="newsimg"
          className="max-w-[750px] max:h-[500px] w-full h-full"
        />

        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-b from-transparent to-black">
          <h2 className="block sm:hidden text-[20px] font-semibold text-white leading-snug p-4 left-8 font-ibm-plex">
            Cake meme reflects coronavirus <br /> absurdity in a world where{" "}
            <br /> nothing is what it seems
          </h2>
        </div>
      </div>

      <div className="hidden sm:block">
        <CoronavirusCard />
      </div>
    </div>
  );
};

export default HeroSection;

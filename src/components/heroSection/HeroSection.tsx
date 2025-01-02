import { Newsimg } from "../../assets/images/index";
import CoronavirusCard from "../coronavirusCard/CoronavirusCard";

const HeroSection = () => {
  return (
    <div
      className="flex flex-wrap items-center justify-center lg:space-x-[86px] space-y-6 lg:space-y-0 w-full"
      style={{ top: "32px" }}
    >
      <div className="relative">
        <img
          src={Newsimg}
          alt="newsimg"
          className="w-full max-w-[700px] h-auto lg:w-[700px] lg:h-[500px] object-cover"
        />

        <div
          className="absolute bottom-0 left-0 w-full"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0) -10.95%, #000000 110.66%)",
          }}
        >
          <h2
            className="block lg:hidden text-[20px] md:text-[24px] font-semibold text-white leading-snug p-4 left-8"
            style={{ fontFamily: "IBMPlexSerif-Regular" }}
          >
            Cake meme reflects coronavirus <br /> absurdity in a world where{" "}
            <br /> nothing is what it seems
          </h2>
        </div>
      </div>

      <div>
        <CoronavirusCard />
      </div>
    </div>
  );
};

export default HeroSection;

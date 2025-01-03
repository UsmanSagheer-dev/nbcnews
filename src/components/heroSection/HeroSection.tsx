import { Newsimg } from "../../assets/images/index";
import CoronavirusCard from "../coronavirusCard/CoronavirusCard";

const HeroSection = () => {
  return (
    <div className="flex flex-wrap items-center justify-between  w-full">
      <div className="relative">
        <img
          src={Newsimg}
          alt="newsimg"
          className="w-full max-w-[750px] max-h-[500px] h-auto "
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

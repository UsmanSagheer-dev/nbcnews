import CardHeaderIcon from "../cardHeaderIcon/CardHeaderIcon";
import InfoBar from "../infoBar/InfoBar";

const CoronavirusCard = () => {
  return (
    <div className="hidden xl:block w-full max-w-[90%] lg:max-w-[600px]">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-[#C31815] text-sm lg:text-base">
          Trending
        </p>
        <div>
          <CardHeaderIcon />
        </div>
      </div>

      <div className="mt-4">
        <h2
          className="text-[20px] md:text-[24px] lg:text-[30px] font-semibold text-[#2A2A2A] leading-snug"
          style={{ fontFamily: "IBMPlexSerif-Regular" }}
        >
          Cake meme reflects coronavirus <br /> absurdity in a world where{" "}
          <br /> nothing is what it seems
        </h2>
      </div>

      <div className="mt-4">
        <p className="text-sm md:text-base leading-relaxed text-gray-700">
          Earlier this month, a viral video depicting hyper-realistic cakes as{" "}
          <br /> everyday items had folks on social media double-guessing every{" "}
          <br /> other post, and sometimes even their own realities, effectively{" "}
          <br /> launching the next meme: "Is this real or is this cake?"
        </p>
      </div>

      <div className="mt-4">
        <InfoBar />
      </div>
    </div>
  );
};

export default CoronavirusCard;

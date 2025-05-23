import CardHeaderIcon from "../cardHeaderIcon/CardHeaderIcon";
import InfoBar from "../infoBar/InfoBar";
const CoronavirusCard = () => {
  const author = "John Doe";
  const time = "2 hours ago";
  const readTime = "5 min read";
  return (
    <div className="max-w-[540px] max-h-[320px] w-full h-full">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-primary text-sm lg:text-base">
          Trending
        </p>
        <div>
          <CardHeaderIcon showCount={false} />
        </div>
      </div>
      <div className="mt-4">
        <h2
          className="text-[20px] md:text-[24px] lg:text-[30px] font-semibold text-secondary leading-snug"
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
        <InfoBar author={author} time={time} readTime={readTime} />
      </div>
    </div>
  );
};

export default CoronavirusCard;

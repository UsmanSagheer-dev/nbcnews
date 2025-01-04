import React from "react";
import InfoBar from "../infoBar/InfoBar";
import CardHeaderIcon from "../cardHeaderIcon/CardHeaderIcon";

interface CardProps {
  cardimg: string;
  title: string;
  description: string;
  showLikeCount?: boolean;
}

const Card: React.FC<CardProps> = ({
  cardimg,
  title,
  description,
  showLikeCount = true,
}) => {
  return (
    <div
      className="w-auto mx-auto bg-white border border-gray-200 rounded-lg-[3px] shadow-md overflow-hidden max-w-[432px] h-auto 
      transform transition-transform duration-300 hover:scale-105 flex flex-col justify-between"
    >
      {/* Card Image */}
      <img className="w-full h-48 object-cover" src={cardimg} alt={title} />

      {/* Card Content */}
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800 mb-2 font-ibm-plex">
          {title}
        </h2>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>

      {/* Card Footer */}
      <div className="mt-auto">
        <div className="flex items-center justify-between p-4">
          <InfoBar />
        </div>
        <hr />
        <div className="p-4">
          <CardHeaderIcon showCount={showLikeCount} />
        </div>
      </div>
    </div>
  );
};

export default Card;

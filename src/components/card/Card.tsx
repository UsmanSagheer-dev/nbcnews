import React from "react";
import InfoBar from "../infoBar/InfoBar";
import CardHeaderIcon from "../cardHeaderIcon/CardHeaderIcon";

// Define the props interface
interface CardProps {
  cardimg: string; // Image URL
  title: string; // Card title
  description: string; // Card description
  showLikeCount?: boolean; // Optional prop to control the like count visibility
}

const Card: React.FC<CardProps> = ({ cardimg, title, description, showLikeCount = true }) => {
  return (
    <div
      className="w-auto mx-auto bg-white border border-gray-200 rounded-lg-[3px] shadow-md overflow-hidden max-w-[432px] h-auto 
      transform transition-transform duration-300 hover:scale-105"
    >
      <img className="w-full h-48 object-cover" src={cardimg} alt={title} />
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800 mb-2 font-ibm-plex">{title}</h2>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
      <div className="flex items-center justify-between p-4">
        <InfoBar />
      </div>
      <hr />
      <div className="p-4">
        <CardHeaderIcon showCount={showLikeCount} />
      </div>
    </div>
  );
};

export default Card;

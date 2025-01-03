import React from "react";
import Card from "../card/Card"; // Import the Card component
import { IMAGES } from "../../constants/images";

// Data array for cards
const cardData = [
  {
    cardimg: IMAGES.CARD_IMAGE,
    title: "John Lewis to make final journey across Edmund Pettus Bridge in procession",
    description:
      "The body of the late US Rep. John Lewis on Sunday will make the final journey across the famous bridge in Selma, Alabama, where he helped lead a march for voting rights in 1965.",
   
  },
  {
    cardimg: IMAGES.CARD_IMAGE,
    title: "Another inspiring story",
    description:
      "A brief description of another inspiring story that captures attention and delivers value.",
   
  },
  {
    cardimg: IMAGES.CARD_IMAGE,
    title: "Breaking news update",
    description:
      "A quick update on the latest breaking news, keeping you informed and up to date.",
    
  },
  {
    cardimg: IMAGES.CARD_IMAGE,
    title: "John Lewis to make final journey across Edmund Pettus Bridge in procession",
    description:
      "The body of the late US Rep. John Lewis on Sunday will make the final journey across the famous bridge in Selma, Alabama, where he helped lead a march for voting rights in 1965.",
   
  },
  {
    cardimg: IMAGES.CARD_IMAGE,
    title: "Another inspiring story",
    description:
      "A brief description of another inspiring story that captures attention and delivers value.",
   
  },
  {
    cardimg: IMAGES.CARD_IMAGE,
    title: "Breaking news update",
    description:
      "A quick update on the latest breaking news, keeping you informed and up to date.",
    
  },
];

const CardSection: React.FC = () => {
  return (
   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[26px] max-w-[1366px] px-2 sm:px-9 p-4">

      {cardData.map((card, index) => (
        <Card
          key={index} 
          cardimg={card.cardimg}
          title={card.title}
          description={card.description}
          showLikeCount={true}
        />
      ))}
    </div>
  );
};

export default CardSection;

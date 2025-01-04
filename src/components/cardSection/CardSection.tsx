import React, { useState } from "react";
import Card from "../card/Card";
import { IMAGES } from "../../constants/images";

const cardData = [
  {
    cardimg: IMAGES.CARD_IMAGE,
    title:
      "John Lewis to make final journey across Edmund Pettus Bridge in procession",
    description:
      "The body of the late US Rep. John Lewis on Sunday will make the final journey across the famous bridge in Selma, Alabama, where he helped lead a march for voting rights in 1965.",
    author: "John Lewis",
    time: "12:45 PM",
    readTime: "5 min read",
  },
  {
    cardimg: IMAGES.CARD_IMAGE,
    title: "Another inspiring story",
    description:
      "A brief description of another inspiring story that captures attention and delivers value.",
    author: "Jane Doe",
    time: "1:30 PM",
    readTime: "3 min read",
  },
  {
    cardimg: IMAGES.CARD_IMAGE,
    title: "Breaking news update",
    description:
      "A quick update on the latest breaking news, keeping you informed and up to date.",
    author: "Mark Smith",
    time: "2:00 PM",
    readTime: "2 min read",
  },
  {
    cardimg: IMAGES.CARD_IMAGE,
    title:
      "John Lewis to make final journey across Edmund Pettus Bridge in procession",
    description:
      "The body of the late US Rep. John Lewis on Sunday will make the final journey across the famous bridge in Selma, Alabama, where he helped lead a march for voting rights in 1965.",
    author: "John Lewis",
    time: "12:45 PM",
    readTime: "5 min read",
  },
  {
    cardimg: IMAGES.CARD_IMAGE,
    title: "Another inspiring story",
    description:
      "A brief description of another inspiring story that captures attention and delivers value.",
    author: "Jane Doe",
    time: "1:30 PM",
    readTime: "3 min read",
  },
  {
    cardimg: IMAGES.CARD_IMAGE,
    title: "Breaking news update",
    description:
      "A quick update on the latest breaking news, keeping you informed and up to date.",
    author: "Mark Smith",
    time: "2:00 PM",
    readTime: "2 min read",
  },
  {
    cardimg: IMAGES.CARD_IMAGE,
    title:
      "John Lewis to make final journey across Edmund Pettus Bridge in procession",
    description:
      "The body of the late US Rep. John Lewis on Sunday will make the final journey across the famous bridge in Selma, Alabama, where he helped lead a march for voting rights in 1965.",
    author: "John Lewis",
    time: "12:45 PM",
    readTime: "5 min read",
  },
  {
    cardimg: IMAGES.CARD_IMAGE,
    title: "Another inspiring story",
    description:
      "A brief description of another inspiring story that captures attention and delivers value.",
    author: "Jane Doe",
    time: "1:30 PM",
    readTime: "3 min read",
  },
  {
    cardimg: IMAGES.CARD_IMAGE,
    title: "Breaking news update",
    description:
      "A quick update on the latest breaking news, keeping you informed and up to date.",
    author: "Mark Smith",
    time: "2:00 PM",
    readTime: "2 min read",
  },
];

const CardSection: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState(6);
  const [isAllCardsVisible, setIsAllCardsVisible] = useState(false);

  const handleViewMore = () => {
    if (visibleCards + 3 >= cardData.length) {
      setIsAllCardsVisible(true);
      setVisibleCards(cardData.length);
    } else {
      setVisibleCards(visibleCards + 6);
    }
  };

  const handleShowLess = () => {
    setVisibleCards(6);
    setIsAllCardsVisible(false);
  };

  return (
    <div className="max-w-[1366px] px-4 sm:px-9 py-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[26px]">
        {cardData.slice(0, visibleCards).map((card, index) => (
          <Card
            key={index}
            cardimg={card.cardimg}
            title={card.title}
            description={card.description}
            author={card.author}
            time={card.time}
            readTime={card.readTime}
            showLikeCount={true}
          />
        ))}
      </div>

      {/* Button for showing more or less */}
      <div className="mt-6 flex justify-center">
        {!isAllCardsVisible ? (
          <button
            onClick={handleViewMore}
            className="bg-[transparent] text-[#C31815] px-6 py-2 border-[#C31815] border-[2px] transition-all duration-200"
          >
            View More
          </button>
        ) : (
          <button
            onClick={handleShowLess}
            className="bg-[transparent] text-[#C31815] px-6 py-2 border-[#C31815] border-[2px] transition-all duration-200"
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  );
};

export default CardSection;

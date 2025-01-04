import React, { useState } from "react";
import InfoBar from "../infoBar/InfoBar";
import CardHeaderIcon from "../cardHeaderIcon/CardHeaderIcon";
import ArticleModal from "../modal/ArticleModal";

interface CardProps {
  cardimg: string;
  title: string;
  description: string;
  author: string; // Added author prop
  time: string; // Added time prop
  readTime: string; // Added readTime prop
  showLikeCount?: boolean;
}

const Card: React.FC<CardProps> = ({
  cardimg,
  title,
  description,
  author, // Added author prop to Card component
  time, // Added time prop
  readTime, // Added readTime prop
  showLikeCount = true,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({
    cardimg: "",
    title: "",
    description: "",
    author: "",
    time: "",
    readTime: "",
  });

  const handleCardClick = () => {
    setModalData({
      cardimg,
      title,
      description,
      author,
      time,
      readTime,
    });
    setShowModal(true);
  };

  return (
    <>
      <div
        className="w-auto mx-auto bg-white border border-gray-200 rounded-lg-[3px] shadow-md overflow-hidden max-w-[432px] h-auto transform transition-transform  flex flex-col justify-between"
        onClick={handleCardClick}
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
            <InfoBar author={author} time={time} readTime={readTime} />
          </div>
          <hr />
          <div className="p-4">
            <CardHeaderIcon showCount={showLikeCount} />
          </div>
        </div>
      </div>

      {/* Modal */}
      <ArticleModal
        showModal={showModal}
        setShowModal={setShowModal}
        modalData={modalData} // Pass modalData here
      />
    </>
  );
};

export default Card;

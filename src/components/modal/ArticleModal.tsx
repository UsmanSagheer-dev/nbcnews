import React from "react";
import CardHeaderIcon from "../cardHeaderIcon/CardHeaderIcon";

interface ModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  modalData: {
    cardimg: string;
    title: string;
    description: string;
    author: string;
    time: string;
    readTime: string;
  };
}

const ArticleModal: React.FC<ModalProps> = ({
  showModal,
  setShowModal,
  modalData,
}) => {
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <>
          {/* Fullscreen Overlay */}
          <div
            className="fixed inset-0 bg-black opacity-50 z-40"
            onClick={handleCloseModal}
          ></div>

          {/* Modal Container */}
          <div
            className="fixed inset-0 flex lg:flex-row sm:flex-col justify-center items-center z-50 px-4"
            onClick={handleCloseModal}
          >
            <div
              className="w-full lg:max-w-[1000px] flex-wrap bg-white rounded-lg overflow-hidden shadow-lg flex lg:flex-row sm:flex-col items-center justify-center relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Icon */}
              <button
                className="absolute top-4 sm:top-1 right-4 text-gray-700 hover:text-black text-[25px] "
                onClick={handleCloseModal}
              >
                ✕
              </button>

              {/* Left Section: Circular Image */}
              <div className="lg:w-1/2 sm:w-full flex items-center justify-center lg:p-6 p-4">
                <div className="w-full lg:max-h-[500px] h-full overflow-hidden mt-8 lg:mt-0">
                  <img
                    src={modalData.cardimg}
                    alt={modalData.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Right Section: Title and Description */}
              <div className="lg:w-1/2 sm:w-full sm:p-4 lg:p-6 p-4">
                <div className="flex justify-between items-center text-[#C31815]">
                  <h1>Trending</h1>
                  <CardHeaderIcon showCount={false} />
                </div>
                <h1 className="text-2xl font-semibold mb-4">
                  {modalData.title}
                </h1>
                <p className="text-gray-600 mb-6">{modalData.description}</p>

                {/* Footer Info */}
                <div className="flex justify-between text-sm text-gray-500">
                  <p>{modalData.time}</p>
                  <p>
                    By {modalData.author} | {modalData.readTime}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ArticleModal;

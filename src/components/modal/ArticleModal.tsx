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
          <div
            className="fixed inset-0 bg-black opacity-50 z-40"
            onClick={handleCloseModal}
          ></div>

          <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            onClick={handleCloseModal}
          >
            <div
              className="relative w-full max-w-[95%] sm:max-w-[85%] lg:max-w-[1000px] bg-white rounded-lg shadow-xl overflow-hidden transform transition-all"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute right-1 top-1  z-50">
                <button
                  className="bg-white w-8 h-8 rounded-full flex items-center justify-center shadow-md hover:bg-gray-100"
                  onClick={handleCloseModal}
                >
                  <span className="text-gray-600 text-xl">×</span>
                </button>
              </div>

              <div className="flex flex-col lg:flex-row w-full justify-center items-center">
                <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
                  <div className="relative h-[200px] sm:h-[300px] lg:h-[400px] p-4 overflow-hidden">
                    <img
                      src={modalData.cardimg}
                      alt={modalData.title}
                      className="w-full h-full object-cover rounded-[5px]"
                    />
                  </div>
                </div>

                <div className="w-full lg:w-1/2 p-4 sm:p-6">
                  <div className="flex justify-between items-center text-[#C31815]">
                    <h1>Trending</h1>
                    <CardHeaderIcon showCount={false} />
                  </div>

                  <h1 className="text-xl sm:text-2xl font-semibold my-4 font-ibm-plex">
                    {modalData.title}
                  </h1>

                  <p className="text-gray-600 text-sm sm:text-base mb-6 font-Poppins">
                    {modalData.description}
                  </p>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm text-gray-500 gap-2 sm:gap-0">
                    <p>{modalData.time}</p>
                    <p>
                      {modalData.author} | {modalData.readTime}
                    </p>
                  </div>
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

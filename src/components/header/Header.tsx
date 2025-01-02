import { useState } from "react";
import {
  Arrow,
  Modelicon,
  Newslogo,
  Profilelogo,
  SearchIcon,
} from "../../assets/images/index";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <header style={{ backgroundColor: "#FFFFFFD9" }}>
      {/* Desktop Header */}
      <div className="container mx-auto px-[30px] lg:px-[248px] py-2 hidden items-center justify-between md:flex">
        <div className="flex items-center space-x-2">
          <img src={Newslogo} alt="Logo" className="w-[62px] h-[52px]" />
        </div>

        <nav className="flex flex-nowrap md:flex-wrap space-x-8 w-full justify-center items-center">
          <a href="#" className="text-gray-700 hover:text-blue-500 text-base font-semibold">Corona Updates</a>
          <a href="#" className="text-gray-700 hover:text-blue-500 text-base font-semibold">Politics</a>
          <a href="#" className="text-gray-700 hover:text-blue-500 text-base font-semibold">Business</a>
          <a href="#" className="text-gray-700 hover:text-blue-500 text-base font-semibold">Sports</a>
          <a href="#" className="text-gray-700 hover:text-blue-500 text-base font-semibold">World</a>
          <a href="#" className="text-gray-700 hover:text-blue-500 text-base font-semibold">Travel</a>
          <a>
            <div className="flex items-center space-x-5 justify-center">
              <span className="text-gray-700 text-base font-semibold">Products</span>
              <img className="w-[12px] h-[12px]" src={Arrow} alt="Arrow" />
            </div>
          </a>
        </nav>

        <div className="flex items-center space-x-[20px]">
          <img src={Profilelogo} alt="Profile Icon" className="w-[19.2px] h-[24px]" />
          <img src={SearchIcon} alt="Search Icon" className="w-[24px] h-[24px]" />
          <img src={Modelicon} alt="Model Icon" className="w-[23px] h-[22px]" />
        </div>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between px-4 py-2">
        <img src={Newslogo} alt="Logo" className="w-[40px] h-[40px]" />
        <div className="flex items-center space-x-[15px]">
          <img src={Profilelogo} alt="Profile Icon" className="w-[19.2px] h-[24px]" />
          <img src={SearchIcon} alt="Search Icon" className="w-[24px] h-[24px]" />
          <img
            src={Modelicon}
            alt="Model Icon"
            className="w-[23px] h-[22px]"
            onClick={toggleModal}
          />
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={toggleModal}
        >
          <div
            className="bg-white w-[90%] max-w-md p-4 rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-blue-500 text-base font-semibold">Corona Updates</a>
              <a href="#" className="text-gray-700 hover:text-blue-500 text-base font-semibold">Politics</a>
              <a href="#" className="text-gray-700 hover:text-blue-500 text-base font-semibold">Business</a>
              <a href="#" className="text-gray-700 hover:text-blue-500 text-base font-semibold">Sports</a>
              <a href="#" className="text-gray-700 hover:text-blue-500 text-base font-semibold">World</a>
              <a href="#" className="text-gray-700 hover:text-blue-500 text-base font-semibold">Travel</a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

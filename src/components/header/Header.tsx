import { useState } from "react";
import NavbarTabs from "../navbarTabs/NavbarTabs"; // Import Tab component
import Icons from "../icons/Icons"; // Import Icon component
import { IMAGES } from "../../constants/images";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<number | null>(null);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const navLinks = [
    "Corona Updates",
    "Politics",
    "Business",
    "Sports",
    "World",
    "Travel",
    "Products",
  ];

  const icons = [
    {
      src: IMAGES.PROFILE_LOGO,
      alt: "Profile Icon",
      width: "w-[19.2px]",
      height: "h-[24px]",
    },
    {
      src: IMAGES.SEARCH_ICON,
      alt: "Search Icon",
      width: "w-[24px]",
      height: "h-[24px]",
    },
    {
      src: IMAGES.MODEL_ICON,
      alt: "Model Icon",
      width: "w-[23px]",
      height: "h-[22px]",
    },
  ];

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <header className="sticky  shadow-md z-50">
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-between w-full max-w-[1366px] mx-auto max:h-[80px] h-auto px-7 py-5 ">
        <div className="flex items-center space-x-2">
          <img src={IMAGES.LOGO_NEWS} alt="Logo" className="w-[62px] h-[52px]" />
        </div>

        <nav className="flex flex-wrap justify-center items-center space-x-4 sm:space-x-8 lg:space-x-14">
          {navLinks.map((link, index) => (
            <NavbarTabs
              key={index}
              label={link}
              isActive={activeTab === index}
              onClick={() => handleTabClick(index)}
            />
          ))}
          <a>
            <div className="flex items-center space-x-5 justify-center">
              <img className="w-[12px] h-[12px]" src={IMAGES.ARROW} alt="Arrow" />
            </div>
          </a>
        </nav>

        <div className="flex items-center space-x-[20px] cursor-pointer">
          {icons.map((icon, index) => (
            <Icons
              key={index}
              src={icon.src}
              alt={icon.alt}
              width={icon.width}
              height={icon.height}
              onClick={index === 2 ? toggleModal : undefined}
            />
          ))}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center justify-between px-4 py-2 bg-white shadow-md">
        <img src={IMAGES.LOGO_NEWS} alt="Logo" className="w-[40px] h-[40px]" />
        <div className="flex items-center space-x-[15px]">
          {icons.map((icon, index) => (
            <Icons
              key={index}
              src={icon.src}
              alt={icon.alt}
              width={icon.width}
              height={icon.height}
              onClick={index === 2 ? toggleModal : undefined}
            />
          ))}
        </div>
      </div>

      {/* Modal for Mobile */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start z-50"
          onClick={toggleModal}
        >
          <div
            className="bg-white w-full max-w-md p-4 rounded-lg shadow-lg mt-10 animate-slide-down"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <NavbarTabs
                  key={index}
                  label={link}
                  isActive={activeTab === index}
                  onClick={() => handleTabClick(index)}
                />
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

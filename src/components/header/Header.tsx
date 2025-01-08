// Header.tsx
import { useState } from "react";
import { Link } from "react-router-dom";
import NavbarTabs from "../navbarTabs/NavbarTabs";
import Icons from "../icons/Icons";
import { IMAGES } from "../../constants/images";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<number | null>(null);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const navLinks = [
    { label: "Corona Updates", path: "/corona" },
    { label: "Politics", path: "/politics" },
    { label: "Business", path: "/business" },
    { label: "Sports", path: "/sports" },
    { label: "World", path: "/world" },
    { label: "Travel", path: "/travel" },
    { label: "Products", path: "/products" },
  ];
  const icons = [
    {
      src: IMAGES.PROFILE_LOGO,
      alt: "Profile Icon",
      width: "w-[19.2px]",
      height: "h-[24px]",
      path: "/profile",
    },
    {
      src: IMAGES.SEARCH_ICON,
      alt: "Search Icon",
      width: "w-[24px]",
      height: "h-[24px]",
      path: "/corona",
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
    <header className="sticky shadow-md z-50">
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-between w-full max-w-[1366px] mx-auto max:h-[80px] h-auto px-7 py-5">
        <Link to="/" className="flex items-center space-x-2">
          <img
            src={IMAGES.HEADER_LOGO}
            alt="Logo"
            className="w-[62px] h-[52px]"
          />
        </Link>
        <nav className="flex flex-wrap justify-center items-center space-x-4 sm:space-x-8 lg:space-x-14">
          {navLinks.map((link, index) => (
            <Link key={index} to={link.path}>
              <NavbarTabs
                label={link.label}
                isActive={activeTab === index}
                onClick={() => handleTabClick(index)}
              />
            </Link>
          ))}
          <div className="flex items-center space-x-5 justify-center">
            <img className="w-[12px] h-[12px]" src={IMAGES.ARROW} alt="Arrow" />
          </div>
        </nav>
        <div className="flex items-center space-x-[20px] cursor-pointer">
          {icons.map((icon, index) =>
            icon.path ? (
              <Link key={index} to={icon.path}>
                <Icons
                  src={icon.src}
                  alt={icon.alt}
                  width={icon.width}
                  height={icon.height}
                />
              </Link>
            ) : (
              <Icons
                key={index}
                src={icon.src}
                alt={icon.alt}
                width={icon.width}
                height={icon.height}
                onClick={index === 2 ? toggleModal : undefined}
              />
            )
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center justify-between px-4 py-2 bg-white shadow-md">
        <Link to="/">
          <img
            src={IMAGES.HEADER_LOGO}
            alt="Logo"
            className="w-[40px] h-[40px]"
          />
        </Link>
        <div className="flex items-center space-x-[15px]">
          {icons.map((icon, index) =>
            icon.path ? (
              <Link key={index} to={icon.path}>
                <Icons
                  src={icon.src}
                  alt={icon.alt}
                  width={icon.width}
                  height={icon.height}
                />
              </Link>
            ) : (
              <Icons
                key={index}
                src={icon.src}
                alt={icon.alt}
                width={icon.width}
                height={icon.height}
                onClick={index === 2 ? toggleModal : undefined}
              />
            )
          )}
        </div>
      </div>

      {/* Mobile Modal */}
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
                <Link key={index} to={link.path}>
                  <NavbarTabs
                    label={link.label}
                    isActive={activeTab === index}
                    onClick={() => {
                      handleTabClick(index);
                      toggleModal();
                    }}
                  />
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};
export default Header;

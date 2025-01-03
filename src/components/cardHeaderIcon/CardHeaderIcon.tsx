import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa"; // Importing icons
import { PiExportBold } from "react-icons/pi";
import { CiBookmark } from "react-icons/ci";

// Define the interface for props
interface CardHeaderIconProps {
  showCount: boolean; // Prop to control if count is shown or not
}

interface IconData {
  icon: JSX.Element; // Using React Icons component directly
  count: number; // Like count
  showCount: boolean; // Whether to display count or not
  isActive: boolean; // Whether the icon is active (changes color)
}

export const ICONS = {
  Like_icon: <FaRegHeart />,
  Export_icon: <PiExportBold />,
  Favourite_icon: <CiBookmark />,
};

const CardHeaderIcon: React.FC<CardHeaderIconProps> = ({ showCount }) => {
  // Initial icon data with isActive property
  const [icons, setIcons] = useState<IconData[]>([
    { icon: ICONS.Like_icon, count: 28, showCount, isActive: false },
    { icon: ICONS.Export_icon, count: 0, showCount, isActive: false },
    { icon: ICONS.Favourite_icon, count: 72, showCount, isActive: false },
  ]);

  // Handle click event to toggle color and update count
  const handleIconClick = (index: number) => {
    setIcons((prevIcons) =>
      prevIcons.map((icon, i) =>
        i === index
          ? {
              ...icon,
              isActive: !icon.isActive, // Toggle active state
              count: icon.count + (icon.showCount && !icon.isActive ? 1 : 0), // Increment count only if showCount is true and not active
            }
          : icon
      )
    );
  };

  return (
    <div className="flex items-center justify-center p-4 gap-6">
      {icons.map((icon, index) => (
        <div
          key={index}
          className="flex items-center cursor-pointer"
          onClick={() => handleIconClick(index)}
        >
          <div
            className={`w-6 h-6 transition-transform duration-300 hover:scale-110 ${
              icon.isActive ? "text-red-500" : "text-gray-500"
            }`}
          >
            {icon.icon}
          </div>
          {icon.showCount && ( // Only show count if showCount is true
            <span
              className={`ml-2 text-sm font-medium ${
                icon.isActive ? "text-red-500" : "text-gray-700"
              }`}
            >
              {icon.count}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default CardHeaderIcon;

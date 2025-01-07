import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { PiExportBold } from "react-icons/pi";
import { CiBookmark } from "react-icons/ci";
interface CardHeaderIconProps {
  showCount: boolean;
}
interface IconData {
  icon: JSX.Element;
  count: number;
  showCount: boolean;
  isActive: boolean;
}
export const ICONS = {
  Like_icon: <FaRegHeart />,
  Export_icon: <PiExportBold />,
  Favourite_icon: <CiBookmark />,
};
const CardHeaderIcon: React.FC<CardHeaderIconProps> = ({ showCount }) => {
  const [icons, setIcons] = useState<IconData[]>([
    { icon: ICONS.Like_icon, count: 28, showCount, isActive: false },
    { icon: ICONS.Export_icon, count: 0, showCount, isActive: false },
    { icon: ICONS.Favourite_icon, count: 72, showCount, isActive: false },
  ]);
  const handleIconClick = (index: number) => {
    setIcons((prevIcons) =>
      prevIcons.map((icon, i) =>
        i === index
          ? {
              ...icon,
              isActive: !icon.isActive,
              count: icon.count + (icon.showCount && !icon.isActive ? 1 : 0),
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
          className="flex items-center cursor-pointer gap-2"
          onClick={() => handleIconClick(index)}
        >
          <div
            className={`w-6 h-6 transition-transform duration-300 hover:scale-110 ${
              icon.isActive ? "text-red-500" : "text-gray-500"
            }`}
          >
            {icon.icon}
          </div>
          {icon.showCount && (
            <span
              className={`text-sm mb-3 font-medium ${
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

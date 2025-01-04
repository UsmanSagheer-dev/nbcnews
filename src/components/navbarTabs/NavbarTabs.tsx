import React from "react";
interface TabComponentProps {
  label: string;
  isActive: boolean;
  onClick: () => any;
}

const NavbarTabs: React.FC<TabComponentProps> = ({
  label,
  isActive,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer text-gray-700 hover:text-blue-500 font-semibold relative ${
        isActive ? "text-blue-500" : ""
      }`}
    >
      {label}
      {isActive && (
        <span className="absolute left-[-15px] top-[13px] transform -translate-y-1/2 w-2 h-2 rounded-full bg-red-500"></span>
      )}
    </div>
  );
};

export default NavbarTabs;

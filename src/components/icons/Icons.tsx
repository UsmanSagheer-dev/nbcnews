import React from "react";
interface IconProps {
  src: string;
  alt: string;
  width: string;
  height: string;
  onClick?: () => void;
}
const Icons: React.FC<IconProps> = ({ src, alt, width, height, onClick }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`${width} ${height}`}
      onClick={onClick}
    />
  );
};
export default Icons;

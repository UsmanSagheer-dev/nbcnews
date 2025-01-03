import { IMAGES } from "../../constants/images";

function CardHeaderIcon() {
  // Images ka array
  const images = [
    IMAGES.LIKE_ICON,
    IMAGES.EXPORT_ICON,
    IMAGES.FAVOURITE_ICON,
  ];

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {/* Dynamically render images */}
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Icon ${index + 1}`} />
      ))}
    </div>
  );
}

export default CardHeaderIcon;

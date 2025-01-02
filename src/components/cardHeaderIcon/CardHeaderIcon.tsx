import { Exporticon, FavouriteIcon, Likdeicon } from "../../assets/images/index";

function CardHeaderIcon() {
  // Images ka array
  const images = [
    Likdeicon,
    Exporticon,
    FavouriteIcon,
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

import { IMAGES } from "../../constants/images";
import { FOOTER_TEXT, FOOTER_TABS, SOCIAL_ICONS } from "../../constants/footer";

function Footer() {
  return (
    <div className="w-full max-w-[1133px]  mx-auto flex flex-wrap flex-col sm:flex-row justify-between items-center gap-8 py-8 px-4 sm:px-0">
      <div className="flex flex-col justify-between items-center gap-4 sm:gap-[41px] text-center sm:text-left">
        <div>
          <img src={IMAGES.FOOTER_LOGO} alt="Footer Logo" />
        </div>
        <div>
          <p className="text-white">copyright 2020 | NBC NEWS</p>
        </div>
      </div>
      <div className="mt-6 sm:mt-0 text-center sm:text-left">
        {FOOTER_TEXT?.map((paragraph, index) => (
          <p key={index} className="text-white mb-4">
            {paragraph}
          </p>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center gap-8">
        <ul className="flex flex-wrap justify-center sm:justify-start space-x-6 sm:space-x-[51px] text-white">
          {FOOTER_TABS?.map((tab, index) => (
            <li key={index} className="cursor-pointer hover:underline">
              {tab}
            </li>
          ))}
        </ul>
        <div className="flex justify-center items-center gap-6 sm:gap-[51px] ">
          {SOCIAL_ICONS?.map((icon, index) => (
            <img
              key={index}
              src={icon.src}
              alt={icon.alt}
              style={{ width: icon.width, height: icon.height }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;

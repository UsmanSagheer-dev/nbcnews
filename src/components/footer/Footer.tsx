import { IMAGES } from "../../constants/images";

function Footer() {
  const text = [
    "Privacy Policy",
    "Do not sell my personal info",
    "Terms of Service",
    "nbcnews.com Site Map",
  ];

  const tabs = ["About", "Contact", "Careers", "Coupons"];

  const socialIcons = [
    { src: IMAGES.WIFI_LOGO, alt: "Wifi Logo", width: "28px", height: "28px" },
    {
      src: IMAGES.TWITTER_LOGO,
      alt: "Twitter Logo",
      width: "29px",
      height: "24px",
    },
    { src: IMAGES.YANGO, alt: "Yango Logo", width: "27px", height: "24px" },
    {
      src: IMAGES.FACEBOOK_LOGO,
      alt: "Facebook Logo",
      width: "27px",
      height: "27px",
    },
  ];

  return (
    <div className="w-full max-w-[1133px] mx-auto flex flex-wrap flex-col sm:flex-row justify-between items-center gap-8 py-8 px-4 sm:px-0">
      <div className="flex flex-col justify-between items-center gap-4 sm:gap-[41px] text-center sm:text-left">
        <div>
          <img src={IMAGES.FOOTER_LOGO} alt="Footer Logo" />
        </div>
        <div>
          <p className="text-[#FFFFFF]">copyright 2020 | NBC NEWS</p>
        </div>
      </div>

      <div className="mt-6 sm:mt-0 text-center sm:text-left">
        {text.map((paragraph, index) => (
          <p key={index} className="text-[#FFFFFF] mb-4">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Tabs and social icons */}
      <div className="flex flex-col items-center gap-8">
        <ul className="flex flex-wrap justify-center sm:justify-start space-x-6 sm:space-x-[51px] text-[#FFFFFF]">
          {tabs.map((tab, index) => (
            <li key={index} className="cursor-pointer hover:underline">
              {tab}
            </li>
          ))}
        </ul>
        <div className="flex justify-center items-center gap-6 sm:gap-[51px]">
          {socialIcons.map((icon, index) => (
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

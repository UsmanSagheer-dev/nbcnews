import { useState } from "react";
import { IMAGES } from "../../constants/images";
import CardSection from "../cardSection/CardSection";
import SportCardSection from "../sportCardSection/SportCardSection";
const Tabs = () => { 
  const [activeTab, setActiveTab] = useState("Latest Stories");
  const tabs = ["Latest Stories", "Opinion", "Health", "Sports"];
  return (
    <div className=" max-w-[1300px] w-full">
      <div className="flex flex-col sm:flex-row justify-between items-center bg-[whiteD9] lg:px-4  py-2 w-full rounded-[5px]">
        <div className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-start space-x-6 items-center w-full sm:w-auto">
          {tabs?.map((tab) => (
            <div
              key={tab}
              className={`cursor-pointer pb-2 text-[18px] ${
                activeTab === tab
                  ? "text-black font-semibold border-b-2 border-red-500"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </div>
          ))}
        </div>

        {/* Icons Section */}
        <div className="hidden sm:flex space-x-4">
          <img
            src={IMAGES.SCREEN_TABS}
            alt="Screen Tabs"
            className="w-[27px] h-[24px]"
          />
        </div>
      </div>
      {activeTab === "Latest Stories" && <CardSection />}
      {activeTab === "Opinion" && <CardSection />}
      {activeTab === "Sports" && <SportCardSection />}
    </div>
  );
};

export default Tabs;

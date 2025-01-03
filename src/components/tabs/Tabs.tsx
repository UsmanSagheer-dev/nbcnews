import { useState } from "react";
import { ScreenTabs } from "../../assets/images/index";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Latest Stories");

  const tabs = ["Latest Stories", "Opinion", "Health"];

  return (
    <div className="flex justify-center items-center w-full">
      <div className="flex justify-between items-center border-b border-gray-300 bg-white px-4 py-2 w-full sm:w-[80.5%] rounded-[5px]">
        {/* Tabs Section */}
        <div className="flex flex-row space-x-6 items-center">
          {tabs.map((tab) => (
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
          <img src={ScreenTabs} alt="Screen Tabs" className="w-[27px] h-[24px]" />
        </div>
      </div>
    </div>
  );
};

export default Tabs;

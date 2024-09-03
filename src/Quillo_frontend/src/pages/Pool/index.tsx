import  { useState } from "react";
import Explore from "./MainTabs/Explore";
import YourPool from "./MainTabs/YourPool";

function Pool() {
  const [activeTab, setActiveTab] = useState<string>("explore");

  const renderContent = () => {
    switch (activeTab) {
      case "explore":
        return <Explore />;
      case "yourPool":
        return <YourPool />;
      default:
        return null;
    }
  };

  return (
    <div className=" md:px-8 px-1 mb-12 flex items-center justify-center flex-col mx-auto w-full">
    <div className="mb-8 flex flex-col items-center justify-center w-full">
      {/* Main tabs for pool */}
      <div className="  mt-8 flex items-center bg-[#1418] justify-between md:space-x-24 space-x-6 p-2 border-transparent rounded-md">
        <button
          className={`rounded-md inline-block py-2 md:px-12 px-8 cursor-pointer text-white relative font-semibold whitespace-nowrap text-center transition-all duration-200 ease-[cubic-bezier(0.645,0.045,0.355,1)] select-none ${
            activeTab === "explore"
              ? "bg-gradientBackgroundColor border-blue-200 ring-[2px] ring-blue-200 ring-opacity-50"
              : "bg-transparent"
          }`}
          onClick={() => setActiveTab("explore")}
        >
          <span>Explore</span>
        </button>

        <button
          className={`rounded-md inline-block py-2 md:px-8 px-4 cursor-pointer text-white relative font-semibold whitespace-nowrap text-center transition-all duration-200 ease-[cubic-bezier(0.645,0.045,0.355,1)] select-none ${
            activeTab === "yourPool"
              ? "bg-gradientBackgroundColor border-blue-200 ring-[2px] ring-blue-200 ring-opacity-50"
              : "bg-transparent"
          }`}
          onClick={() => setActiveTab("yourPool")}
        >
          <span>Your Liquidity</span>
        </button>
      </div>

      {/* Render the active tab's content */}
      <div className="transition-all duration-300 mt-6 w-full md:px-12">{renderContent()}</div>
    </div>
    </div>
  );
}

export default Pool;

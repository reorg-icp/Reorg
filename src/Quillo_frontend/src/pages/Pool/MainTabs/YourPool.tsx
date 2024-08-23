import React, { useState } from "react";
import Card from "../instances/card";
import { YourLoopCard } from "../types";

const YourPool: React.FC = () => {
  const [showCard, setShowCard] = useState(true);

  const handleCardClose = () => {
    setShowCard(false);
  };

  return (
    <div className="md:w-[800px] w-[400px] ">
    <div className="    flex flex-col items-center justify-center  max-w-2xl mx-auto bg-[#1A2240] rounded-md">
      <div className="mt-8 mb-8 w-full px-6 md:px-8 "> 
        {showCard && (
          <Card
            title={YourLoopCard.title}
            description={YourLoopCard.description}
            onClose={handleCardClose}
          />
        )}
        
 
        {/* Image and placeholder text */}
        <div className="flex flex-col items-center mb-10">
          <div className="mb-4">
            <img
              src="/images/box.png"
              alt="Empty Liquidity"
              className="w-24 h-24 md:w-32 md:h-32"
            />
          </div>
          <p className=" font-leagueSpartan text-gray-400 text-sm md:text-base text-center">
            Your liquidity positions will appear here
          </p>
        </div>
        
        {/* Connect button */}
        <div className="flex justify-center px-2">
          <button className="bg-gradient-to-r w-full from-[#8572ff] to-[#5d52de] text-white text-base md:text-lg font-semibold py-3 px-12 rounded-lg focus:outline-none hover:opacity-90 transition-opacity duration-200">
            Connect
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default YourPool;
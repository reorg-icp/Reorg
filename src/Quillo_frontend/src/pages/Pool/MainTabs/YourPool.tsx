import React, { useState } from "react";
import Card from "../instances/card";
import { YourLoopCard } from "../types";

const YourPool: React.FC = () => {
  const [showCard, setShowCard] = useState(true);

  const handleCardClose = () => {
    setShowCard(false);
  };

  return (
    <div className="w-full md:px-12 px-1 ">
    <div className="    flex flex-col items-center justify-center  mx-auto bg-[#1414] rounded-md">
      <div className="mt-8 mb-8 w-full px-2 md:px-8 "> 
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
          <button className="w-full text-white text-base md:text-lg font-semibold py-3 px-12 rounded-lg focus:outline-none bg-gradient-to-r from-blue-600 to-green-600 rounded-full shadow-lg hover:from-blue-700 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-300 ease-in-out transform hover:-translate-y-1">
            Connect
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};


export default YourPool;
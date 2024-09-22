import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../../public/animation.json'; // Replace with your Lottie animation file path

const Animation: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="relative w-64 h-64 overflow-hidden rounded-lg flex justify-center items-center"> {/* Use rounded-lg for soft edges */}
        <Lottie 
          animationData={animationData} 
          loop 
          autoplay 
          style={{ width: '100%', height: '100%' }} // Responsive styles
        />
      </div>
    </div>
  );
};

export default Animation;

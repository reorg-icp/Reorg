import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../../public/animation.json'; // Replace with your Lottie animation file path

const Animation: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="relative w-80 h-80 overflow-hidden rounded-lg flex justify-center items-center"> {/* Use rounded-lg for soft edges */}
        <Lottie 
          animationData={animationData} 
          loop 
          autoplay 
          style={{ width: '70vw', height: '100vw' }} // Responsive styles
        />
      </div>
    </div>
  );
};

export default Animation;

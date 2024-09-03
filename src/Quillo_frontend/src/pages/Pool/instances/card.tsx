import React from 'react';
interface CardProp{
    title:string, description:string ,onClose:()=>void
}
const Card:React.FC<CardProp> = ({title,description,onClose}) => {



  return (
    <div className="border border-gray-300 text-[#8b9ac9] rounded-lg px-4 py-4 w-full bg-[#1418] mx-auto">
      <div className="flex justify-center items-center mb-6">
        <h2 className=" text-xl flex-grow text-center md:text-2xl font-semibold text-gray-200  ">{title}</h2>
        <button
          aria-label="Close"
          className="flex justify-end hover:text-gray-200 focus:outline-none"
          onClick={onClose}
        >
          <i className="fas fa-times"></i>
        </button>
      </div>

      <p className="font-leagueSpartan text-center  text-sm md:text-base mb-8">
        {description}
      </p>
    </div>
  );
};

export default Card;
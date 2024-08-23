import React, { useState } from 'react'

function ByType(): React.JSX.Element {
    const [activeFilter, setActiveFilter] = useState("All Pools");
    const filters = ["All Pools", "Public Pool", "Private Pool", "Anchored Pool"];
  
    const handleFilterClick = (filter: string) => {
      setActiveFilter(filter);
    };
  return (
    <div className="md:px-4 px-2 mb-8 flex items-center justify-between">
    <div className="flex md:space-x-6 space-x-4">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => handleFilterClick(filter)}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
            activeFilter === filter
              ? "bg-[#7364F0] text-white"
              : "bg-[#1F2946] text-gray-300 hover:bg-gray-700"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
    <button
  type="button"
  className="
    justify-end px-6 py-2 rounded-md 
    bg-[#7364F0] text-white text-sm font-medium
    transition-all duration-300 ease-in-out
    hover:bg-[#5B4ED1] hover:shadow-lg
    active:bg-[#4A3FB0] active:shadow-inner active:transform active:translate-y-0.5
    focus:outline-none focus:ring-2 focus:ring-[#7364F0] focus:ring-opacity-50
  "
>
  Create Pools
</button>
  </div>

  )
}

export default ByType
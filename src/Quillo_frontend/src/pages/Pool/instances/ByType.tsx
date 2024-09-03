import React, { useState } from 'react'

function ByType(): React.JSX.Element {
    const [activeFilter, setActiveFilter] = useState("All Pools");
    const filters = ["All Pools", "Public Pool", "Private Pool", "Anchored Pool"];
  
    const handleFilterClick = (filter: string) => {
      setActiveFilter(filter);
    };
  return (
<div className="px-2 md:px-4 mb-8 flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
  <div className="flex flex-wrap md:flex-nowrap md:space-x-6 space-x-2 space-y-2 md:space-y-0">
    {filters.map((filter) => (
      <button
        key={filter}
        onClick={() => handleFilterClick(filter)}
        className={`px-3 md:px-4 py-2 rounded-md text-xs md:text-sm font-medium transition-colors duration-200 ${
          activeFilter === filter
            ? "bg-[#7364F0] text-white"
            : "bg-[#1418] text-gray-300 hover:bg-gray-700"
        }`}
      >
        {filter}
      </button>
    ))}
  </div>
  <button
    type="button"
    className="
      w-full md:w-auto justify-end px-4 md:px-6 py-2 rounded-md 
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
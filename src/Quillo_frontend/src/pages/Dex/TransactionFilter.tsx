import React from "react";
import { useState } from "react";



const TransactionFilter: React.FC= () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const filters = ['All', 'Swaps', 'Adds', 'Removes'];

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
    // You can handle further actions here after a filter is selected
    console.log(`Selected filter: ${filter}`);
  };

  const headings: string[] = [
    "Action",
    "Total Value",
    "Token Amount",
    "Token Amount B",
    "Time (UTC)",
  ];
  return (
    <div className="w-full bg-[#1A2240] rounded-lg shadow-lg flex flex-col  gap-6">
      <div className="">
        
        {/* Header with Filter Options */}
        <div className="bg-[#1F2946] border border-gray-700 text-[#8B9ABD] rounded-t-md p-6 flex flex-col md:flex-row justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-300 mb-4 md:mb-0">Transactions</h2>
        <div className="flex flex-wrap gap-2 md:space-x-4">
          {filters.map((filter, index) => (
            <label key={index} className="text-gray-300 flex items-center">
              <input
                type="radio"
                name="transactionType"
                value={filter}
                checked={selectedFilter === filter}
                onChange={() => handleFilterChange(filter)}
                className="mr-2 cursor-pointer text-blue-500"
              />
              <span
                className={`cursor-pointer ${
                  selectedFilter === filter
                    ? 'text-blue-400 font-bold'
                    : 'hover:text-blue-300'
                }`}
              >
                {filter}
              </span>
            </label>
          ))}
        </div>
      </div>

        <div className="  relative overflow-x-auto  ">
          <table className="w-full text-sm text-left border-b border-gray-700   rtl:text-right text-gray-400">
            <thead className="text-xs   ">
              {headings.map((header, index) => (
                <th scope="col" key={index} className="px-6 py-6">
                  {header}
                </th>
              ))}
            </thead>
            <tbody>


            </tbody>
          </table>
        </div>
      </div>

      {/* Placeholder for transaction list */}
      <div className="mb-8 font-leagueSpartan  mt-6 flex items-center justify-center h-32  rounded-lg">
        <div className="flex flex-col gap-4 text-gray-500 mb-4">
        <img
              src="/images/box.png"
              alt="Empty Liquidity"
              className="w-24 h-24 md:w-32 md:h-32"
            />
       
          <p>No transactions to display.</p>
        </div>
      </div>
    </div>
  );
};

export default TransactionFilter;

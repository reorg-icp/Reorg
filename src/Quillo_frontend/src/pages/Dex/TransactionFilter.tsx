import React from 'react';
import  { useState } from 'react';

interface TransactionFilterProps {
  onFilterChange: (filter: string) => void;
}

const TransactionFilter: React.FC<TransactionFilterProps> = ({ onFilterChange }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Swaps', 'Adds', 'Removes'];

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    onFilterChange(filter);
  };

  return (
    <div className="bg-gray-900 p-4 rounded-lg shadow-lg">
      <h2 className="text-white text-xl mb-4">Transactions</h2>
      <div className="flex space-x-2">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => handleFilterClick(filter)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
              activeFilter === filter
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
      {/* Placeholder for transaction list */}
      <div className="mt-6 flex items-center justify-center h-32 bg-gray-800 rounded-lg">
        <div className="text-gray-500">
          <svg
            className="w-16 h-16 mx-auto mb-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
            />
          </svg>
          <p>No transactions to display</p>
        </div>
      </div>
    </div>
  );
};

export default TransactionFilter;
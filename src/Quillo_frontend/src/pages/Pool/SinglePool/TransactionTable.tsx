import { useState } from "react";
import dammyTransaction from "../../../../dummyTransactions.json";
import { formatId } from "../types";
function TransactionTable() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const filters = ["All", "Swaps", "Adds", "Removes"];

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
    // You can handle further actions here after a filter is selected
    console.log(`Selected filter: ${filter}`);
  };

  const headings: string[] = [
    "Total Value",
    "Token Amount",
    "Token Amount B",
    "Principal ID",
    "Time (UTC)",
  ];
  return (
    <div className="w-full bg-[#1414] rounded-lg shadow-lg flex flex-col  gap-6">
      <div className="">
        {/* Header with Filter Options */}
        <div className="bg-[#1418] border border-gray-700 text-[#8B9ABD] rounded-t-md p-6 flex flex-col md:flex-row justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-300 mb-4 md:mb-0">
            Transactions
          </h2>
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
                      ? "text-blue-400 font-bold"
                      : "hover:text-blue-300"
                  }`}
                >
                  {filter}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="  relative overflow-x-auto  ">
          <table className="w-full text-sm text-left    rtl:text-right text-gray-400">
            <thead className="text-xs border-b border-gray-700  ">
              <tr>
                <th scope="col" className="px-6 py-6">
                  Action
                </th>
                {headings.map((header, index) => (
                  <th key={index} scope="col" className="px-4 py-6 cursor-pointer">
                    <div   className="flex items-center">
                      {header}
                      <a href="#">
                        <svg
                          className="w-3 h-3 ms-1.5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                        </svg>
                      </a>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
           {
            dammyTransaction &&
            (
                <tbody className="text-base font-leagueSpartan text-[#8b9ac9] md:font-light font-normal">
                {dammyTransaction.map((data, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-700 hover:bg-[#1418]"
                  >
                    <td className="px-4 py-6 text-center  whitespace-nowrap ">
                      {data.Action}
                    </td>
                    <td className="px-4 py-6">
                      {data.TotalValue}
                  </td>
                    <td className="px-4 py-6">
                      {data.TokenAmountA}
                  </td>
                    <td className="px-4 py-6">
                      {data.TokenAmountB}
                  </td>
                    <td className="px-4 py-6 text-[#8572ff]">
                   {  formatId(data.PrincipalID)}
                  </td>
                    <td className="px-4 py-6">
                      {data.TimeUTC}
                  </td>
                  </tr>
                ))}
              </tbody>
            )

           }
            </table>

        </div>
        <nav
          className="w-full flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
          aria-label="Table navigation"
        >
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
            Showing
            <span className="font-semibold text-gray-900 dark:text-white">
              1-10
            </span>
            of
            <span className="font-semibold text-gray-900 dark:text-white">
              101
            </span>
          </span>
          <ul className="   inline-flex items-stretch -space-x-px">
            <li>
              <a
                href="#"
                className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500  rounded-l-lg border border-gray-300  hover:text-gray-700 bg-[#1410] dark:border-gray-700 dark:text-gray-400 dark:hover:bg-[#1418] dark:hover:text-white"
              >
                <span className="sr-only">Previous</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                     fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500  border border-gray-300  hover:text-gray-700 bg-[#1411]  dark:border-gray-700 dark:text-gray-400 hover:bg-[#1418] dark:hover:text-white"
              >
                1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500  border border-gray-300  hover:text-gray-700 bg-[#1411]  dark:border-gray-700 dark:text-gray-400 hover:bg-[#1418] dark:hover:text-white"
              >
                2
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-current="page"
                className="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
              >
                3
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500  border border-gray-300  hover:text-gray-700 bg-[#1411]  dark:border-gray-700 dark:text-gray-400 hover:bg-[#1418] dark:hover:text-white"
              >
                ...
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500  border border-gray-300  hover:text-gray-700 bg-[#1411]  dark:border-gray-700 dark:text-gray-400 hover:bg-[#1418] dark:hover:text-white"
              >
                100
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500  rounded-r-lg border border-gray-300  hover:text-gray-700 bg-[#1411]  dark:border-gray-700 dark:text-gray-400 hover:bg-[#1418] dark:hover:text-white"
              >
                <span className="sr-only">Next</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                     fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Placeholder for transaction list */}
   {
    !dammyTransaction &&(
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
    )
   }
    </div>
  );
}

export default TransactionTable;

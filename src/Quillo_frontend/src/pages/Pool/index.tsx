import React, { useState } from "react";
import { formatId, headers, poolData } from "./types";

function Pool() {
  const [activeFilter, setActiveFilter] = useState("All Pools");
  const filters = ["All Pools", "Public Pool", "Private Pool", "Anchored Pool"];

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };
  return (
    <div className=" px-8 mb-12 flex items-center justify-center flex-col mx-auto ">

<div className="mt-8  flex items-center bg-[#121935] justify-between md:space-x-24 space-x-6  p-2 border-transparent rounded-md">
        <button className="rounded-md inline-block py-2 px-8 bg-gradientBackgroundColor cursor-pointer text-white relative font-semibold whitespace-nowrap text-center border-transparent transition-all duration-200 ease-[cubic-bezier(0.645,0.045,0.355,1)] select-none active:border-[2px] active:border-blue-200 active:ring-[2px] active:ring-blue-200 active:ring-opacity-50">
          <span>Swap</span>
        </button>

        <button className="rounded-md inline-block py-2 px-6  cursor-pointer text-white relative font-semibold whitespace-nowrap text-center border-transparent transition-all duration-200 ease-[cubic-bezier(0.645,0.045,0.355,1)] select-none">
          <span>Transactions</span>
        </button>
      </div>

      <div className="mt-6  bg-[#121935] rounded-md ">
        <div className="mb-6">
          <div className=" bg-[#1F2946]  border rounded-t-md font-medium flex items-center justify-center md:text-2xl text-lg text-center text-gray-500 border-b text-gray-400 border-gray-700">
            <ul className="flex flex-wrap md:space-x-12 mt-2 ">
              <li className="me-2 ">
                <span className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">
                  By Type
                </span>
              </li>
              <li className="me-2">
                <span className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500">
                  By Tokens
                </span>
              </li>
              <li className="me-2">
                <span className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">
                  By Address
                </span>
              </li>
            </ul>
          </div>
        </div>
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
          <button type="button" className="px-6 py-2 rounded-md bg-[#7364F0] text-white text-sm font-medum">
            Create Pools
          </button>
        </div>
        <div className=" relative overflow-x-auto  ">
          <table className="w-full text-sm text-left  rtl:text-right text-gray-400">
            <thead className="text-xs  uppercase  bg-[#1F2946] border border-gray-700 text-[#8B9ABD]">
              {headers.map((header, index) => (
                <th scope="col" key={index} className="px-6 py-6">
                  {header}
                </th>
              ))}
            </thead>
            <tbody>
              {poolData.map((pool) => (
                <tr
                  key={pool.id}
                  className="border-b border-gray-700 hover:bg-[#1F2946]"
                >
                  <td className="px-8 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <div className="px-0 flex  flex-col gap-2 ">
                      <span className="flex  flex-row gap-2">
                        <a
                          href={pool.poolLink}
                          className="text-blue-400 hover:underline mr-2"
                        >
                          {formatId(pool.id)}
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                          <img src="/images/share.png" />
                        </a>
                        <img
                          src="/images/copy.png"
                          className="cursor-pointer"
                        />
                      </span>
                      <span className="  bg-[#1F2946] w-1/2 text-center py-2 rounded text-xs text-gray-500">
                        {pool.type}
                      </span>
                    </div>
                  </td>
                  <td className="px-2 py-4">
                    <div className="flex items-center gap-2">
                      {pool.tokenImages.map((img, idx) => (
                        <img
                          key={idx}
                          src={img}
                          alt="token logo"
                          className="h-6 w-6"
                        />
                      ))}
                      <span>{pool.tradingPair}</span>
                    </div>
                  </td>
                  <td className="px-2 py-4">{pool.tradingFeeRate}</td>
                  <td className="px-6 py-4">
                    <div>
                      <span className="text-[#5B4994] flex items-center flex-row gap-1">
                        {" "}
                        <i className="fas fa-circle text-[4px] "></i>{" "}
                        <span> {pool.tokenAmount.coinA}</span>
                      </span>
                      <div>{pool.tokenAmount.coinB}</div>
                    </div>
                  </td>
                  <td className="px-2 py-4">{pool.volume24H}</td>
                </tr>
              ))}
            </tbody>
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
          <ul className="inline-flex items-stretch -space-x-px">
            <li>
              <a
                href="#"
                className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
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
                    fill-rule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
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
                className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                ...
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                100
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
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
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>

     
    </div>
  );
}

export default Pool;

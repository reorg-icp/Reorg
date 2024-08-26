import { useCallback, useState } from "react";
import { formatId, headers, poolData } from "../types";

import ByTokens from "../instances/ByTokens";
import ByAdress from "../instances/ByAdress";
import ByType from "../instances/ByType";
import Modal from "../../Dex/Modal";

function Explore() {
  const [activeTab, setActiveTab] = useState<string>("byType");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = useCallback(() => {
    console.log("Opening modal"); // Debugging log
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    console.log("Closing modal"); // Debugging log
    setIsModalOpen(false);
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case "byTokens":
        return <ByTokens openModal={openModal} />;
      case "byType":
        return <ByType />;
      case "byAddress":
        return <ByAdress />;
      default:
        return null;
    }
  };
 
  return (
    <>
      {/* contains table and some components */}
      <div className="mt-6  bg-[#1A2240] rounded-md ">
        {/* Switchable Tabs */}
        <div className="mb-6">
          <div className="bg-[#1F2946] border rounded-t-md font-medium flex items-center justify-center md:text-2xl text-lg text-center text-gray-500 border-b text-gray-400 border-gray-700">
            <ul className="flex flex-wrap md:space-x-12 mt-2">
              <li className="me-2">
                <span
                  className={`inline-block p-4 border-b-2 rounded-t-lg cursor-pointer ${
                    activeTab === "byType"
                      ? "bg-[#1A2240] text-white border-blue-600"
                      : "border-transparent hover:text-gray-600 hover:border-gray-300"
                  }`}
                  onClick={() => setActiveTab("byType")}
                >
                  By Type
                </span>
              </li>
              <li className="me-2">
                <span
                  className={`inline-block p-4 border-b-2 rounded-t-lg cursor-pointer ${
                    activeTab === "byTokens"
                      ? "text-blue-500 border-blue-600 border-blue-600"
                      : "border-transparent hover:text-gray-600 hover:border-gray-300"
                  }`}
                  onClick={() => setActiveTab("byTokens")}
                >
                  By Tokens
                </span>
              </li>
              <li className="me-2">
                <span
                  className={`inline-block p-4 border-b-2 rounded-t-lg cursor-pointer ${
                    activeTab === "byAddress"
                      ? "text-blue-500 border-blue-600"
                      : "border-transparent hover:text-gray-600 hover:border-gray-300"
                  }`}
                  onClick={() => setActiveTab("byAddress")}
                >
                  By Address
                </span>
              </li>
            </ul>
          </div>
        </div>
        {/* Render the active tab's content */}
        <div className="transition-all duration-300">{renderContent()}</div>

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
                      <span className="flex  items-center  flex-row gap-2">
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
                      <span className="  bg-[#1F2946]  text-center w-2/3 py-2  rounded text-xs text-gray-500">
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
                  <td className="px-2 py-4 text-center">{pool.tradingFeeRate}</td>
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
                  <td className="px-2 py-4  text-center">{pool.volume24H}</td>
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
        {isModalOpen && <Modal onClose={closeModal} />}
      </div>
    </>
  );
}

export default Explore;

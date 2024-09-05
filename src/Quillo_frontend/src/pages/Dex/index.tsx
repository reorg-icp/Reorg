import { useCallback, useState } from "react";
import Modal from "./Modal";
import TransactionFilter from "./TransactionFilter";
import Swap from "./MainTabs/Swap";

function Dex() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = useCallback(() => {
    console.log("Opening modal"); // Debugging log
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    console.log("Closing modal"); // Debugging log
    setIsModalOpen(false);
  }, []);

  const [activeTab, setActiveTab] = useState<string>("swap");

  const renderContent = () => {
    switch (activeTab) {
      case "swap":
        return <Swap openModal={openModal} />;
      case "transactions":
        return <TransactionFilter  />;
      default:
        return null;
    }
  };

  return (
    <>
      <div  className=" w-full md:px-8 mb-12 flex items-center justify-center flex-col mx-auto">
        <div className=" md:w-2/3 w-full   flex flex-col items-center justify-center ">
          {/* Main tabs for pool */}
          <div className="  mt-8 flex items-center bg-[#1414] justify-between md:space-x-24 space-x-6 p-2 border-transparent rounded-md">
            <button
              className={`rounded-md inline-block py-2 md:px-12 px-8 cursor-pointer text-white relative font-semibold whitespace-nowrap text-center transition-all duration-200 ease-[cubic-bezier(0.645,0.045,0.355,1)] select-none ${
                activeTab === "swap"
                  ? "bg-gradientBackgroundColor border-blue-200 ring-[2px] ring-blue-200 ring-opacity-50"
                  : "bg-transparent"
              }`}
              onClick={() => setActiveTab("swap")}
            >
              <span>Swap</span>
            </button>

            <button
              className={`rounded-md inline-block py-2 md:px-8 px-4 cursor-pointer text-white relative font-semibold whitespace-nowrap text-center transition-all duration-200 ease-[cubic-bezier(0.645,0.045,0.355,1)] select-none ${
                activeTab === "transactions"
                  ? "bg-gradientBackgroundColor border-blue-200 ring-[2px] ring-blue-200 ring-opacity-50"
                  : "bg-transparent"
              }`}
              onClick={() => setActiveTab("transactions")}
            >
              <span>Transactions</span>
            </button>
          </div>
        </div>
           {/* Render the active tab's content */}
      <div className="md:w-3/4 w-full transition-all duration-300 mt-2 mx-auto md:p-4 p-2 ">{renderContent()}</div>
     
      {isModalOpen && <Modal onClose={closeModal} />}
      </div>

    </>
  );
}

export default Dex;

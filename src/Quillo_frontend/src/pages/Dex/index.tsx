import { useCallback, useState } from "react";
import Modal from "./Modal";
import TransactionFilter from "./TransactionFilter";

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
  const handleFilterChange = (filter: string) => {
    console.log(`Filter changed to: ${filter}`);
    // Add your logic here to update the transaction list based on the filter
  };
  return (
<>

    <div className="flex items-center flex-col gap-6 justify-center max-w-lg  font-jost  mx-auto " >
    
      <div className="mt-8 flex items-center bg-[#121935] justify-between w-3/4 p-2 border-transparent rounded-md">
        <button className="rounded-md inline-block py-2 px-8 bg-gradientBackgroundColor cursor-pointer text-white relative font-semibold whitespace-nowrap text-center border-transparent transition-all duration-200 ease-[cubic-bezier(0.645,0.045,0.355,1)] select-none active:border-[2px] active:border-blue-200 active:ring-[2px] active:ring-blue-200 active:ring-opacity-50">
          <span>Swap</span>
        </button>

        <button className="rounded-md inline-block py-2 px-6 bg-gradientBackgroundColor cursor-pointer text-white relative font-semibold whitespace-nowrap text-center border-transparent transition-all duration-200 ease-[cubic-bezier(0.645,0.045,0.355,1)] select-none">
          <span>Transactions</span>
        </button>
      </div>

      <div className="w-full mx-auto bg-[#121935] text-white rounded-lg shadow-lg">
        {/* Swap Header */}
        <div
          className="flex items-center justify-between mb-4 bg-cover bg-center bg-no-repeat w-full p-3 rounded-t-md"
          style={{
            backgroundImage:
              "url('https://icpex.org/b075f951952fbe9211f3.png')",
          }}
        >
          <h2 className="text-lg font-semibold">Swap</h2>
          <div className="flex  items-center space-x-3">
            <span role="img">
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="setting"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M924.8 625.7l-65.5-56c3.1-19 4.7-38.4 4.7-57.8s-1.6-38.8-4.7-57.8l65.5-56a32.03 32.03 0 009.3-35.2l-.9-2.6a443.74 443.74 0 00-79.7-137.9l-1.8-2.1a32.12 32.12 0 00-35.1-9.5l-81.3 28.9c-30-24.6-63.5-44-99.7-57.6l-15.7-85a32.05 32.05 0 00-25.8-25.7l-2.7-.5c-52.1-9.4-106.9-9.4-159 0l-2.7.5a32.05 32.05 0 00-25.8 25.7l-15.8 85.4a351.86 351.86 0 00-99 57.4l-81.9-29.1a32 32 0 00-35.1 9.5l-1.8 2.1a446.02 446.02 0 00-79.7 137.9l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.3 56.6c-3.1 18.8-4.6 38-4.6 57.1 0 19.2 1.5 38.4 4.6 57.1L99 625.5a32.03 32.03 0 00-9.3 35.2l.9 2.6c18.1 50.4 44.9 96.9 79.7 137.9l1.8 2.1a32.12 32.12 0 0035.1 9.5l81.9-29.1c29.8 24.5 63.1 43.9 99 57.4l15.8 85.4a32.05 32.05 0 0025.8 25.7l2.7.5a449.4 449.4 0 00159 0l2.7-.5a32.05 32.05 0 0025.8-25.7l15.7-85a350 350 0 0099.7-57.6l81.3 28.9a32 32 0 0035.1-9.5l1.8-2.1c34.8-41.1 61.6-87.5 79.7-137.9l.9-2.6c4.5-12.3.8-26.3-9.3-35zM788.3 465.9c2.5 15.1 3.8 30.6 3.8 46.1s-1.3 31-3.8 46.1l-6.6 40.1 74.7 63.9a370.03 370.03 0 01-42.6 73.6L721 702.8l-31.4 25.8c-23.9 19.6-50.5 35-79.3 45.8l-38.1 14.3-17.9 97a377.5 377.5 0 01-85 0l-17.9-97.2-37.8-14.5c-28.5-10.8-55-26.2-78.7-45.7l-31.4-25.9-93.4 33.2c-17-22.9-31.2-47.6-42.6-73.6l75.5-64.5-6.5-40c-2.4-14.9-3.7-30.3-3.7-45.5 0-15.3 1.2-30.6 3.7-45.5l6.5-40-75.5-64.5c11.3-26.1 25.6-50.7 42.6-73.6l93.4 33.2 31.4-25.9c23.7-19.5 50.2-34.9 78.7-45.7l37.9-14.3 17.9-97.2c28.1-3.2 56.8-3.2 85 0l17.9 97 38.1 14.3c28.7 10.8 55.4 26.2 79.3 45.8l31.4 25.8 92.8-32.9c17 22.9 31.2 47.6 42.6 73.6L781.8 426l6.5 39.9zM512 326c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 01512 614c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 01400 502c0-29.9 11.7-58 32.8-79.2C454 401.6 482.1 390 512 390c29.9 0 58 11.6 79.2 32.8A111.6 111.6 0 01624 502c0 29.9-11.7 58-32.8 79.2z"></path>
              </svg>
            </span>
            <span role="img">
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="reload"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 00-10.1 4.8c-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 01655.9 829c-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 01279 755.2a342.16 342.16 0 01-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 01109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z"></path>
              </svg>
            </span>
          </div>
        </div>

        {/* Pay Section */}
        <div className="px-8 mb-4 flex items-center justify-between">
            <span className="text-md">Pay</span>
            <span className="text-md text-gray-400">
              Balance: 0 <button className="text-blue-500">MAX</button>
            </span>
          </div>

        <div className=" px-8 mb-4">
      
          <div className=" p-4 bg-[#1F2946] rounded-lg flex items-center justify-between mt-2">
            <div className="flex items-center space-x-2 cursor-pointer"
             onClick={openModal}
            >
              <div className="mr-4 ">Select Token</div>
              <span
                role="img"
                aria-label="caret-down"
                className=""
              >
                <svg
                  viewBox="0 0 1024 1024"
                  focusable="false"
                  data-icon="caret-down"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center  justify-center mb-4 ">
          <i className=" outline-none cursor-pointer fas fa-arrow-down bg-[#1F2946] text-gray-500 border border-transparent rounded-full w-8 h-8 flex items-center justify-center  transform transition-transform duration-300 hover:rotate-180  "></i>
        </div>

       
        <div className=" flex flex-col gap-6 px-8 ">
          <div className="flex items-center justify-between">
            <span className="text-md">Receive (Estimated)</span>
            <span className="text-md text-gray-400">Balance: 0</span>
          </div>
          < div className=" cursor-pointer bg-[#1F2946] rounded-lg  p-4 flex items-center  mt-2">
           <div className="mr-4 ">Select Token</div>
              <span
                role="img"
                aria-label="caret-down"
                className=" cursor-pointer"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  focusable="false"
                  data-icon="caret-down"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path>
                </svg>
              </span>
{/*             
            <span className="text-gray-400">0.0</span> */}
          </div>
            {/* Connect Button */}

          <button className=" px-4 w-full py-3 bg-[#8f5fff] hover:bg-[#724eff] text-white rounded-lg transition duration-200">
          Connect
        </button>
         {/* Price Details */}
         <div className=" text-sm space-y-1 mb-4 ">
          <div className="flex justify-between">
            <span className="text-gray-400 flex justify-center items-center">Price Deviation <span role="img" aria-label="question-circle" className="anticon anticon-question-circle" style={{marginLeft: "5px"}}><svg viewBox="64 64 896 896" focusable="false" data-icon="question-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 708c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm62.9-219.5a48.3 48.3 0 00-30.9 44.8V620c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-21.5c0-23.1 6.7-45.9 19.9-64.9 12.9-18.6 30.9-32.8 52.1-40.9 34-13.1 56-41.6 56-72.7 0-44.1-43.1-80-96-80s-96 35.9-96 80v7.6c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V420c0-39.3 17.2-76 48.4-103.3C430.4 290.4 470 276 512 276s81.6 14.5 111.6 40.7C654.8 344 672 380.7 672 420c0 57.8-38.1 109.8-97.1 132.5z"></path></svg></span> </span>
            <span>0%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400 flex justify-center items-center">Slippage Tolerance<span role="img" aria-label="question-circle" className="anticon anticon-question-circle" style={{marginLeft: "5px"}}><svg viewBox="64 64 896 896" focusable="false" data-icon="question-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 708c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm62.9-219.5a48.3 48.3 0 00-30.9 44.8V620c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-21.5c0-23.1 6.7-45.9 19.9-64.9 12.9-18.6 30.9-32.8 52.1-40.9 34-13.1 56-41.6 56-72.7 0-44.1-43.1-80-96-80s-96 35.9-96 80v7.6c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V420c0-39.3 17.2-76 48.4-103.3C430.4 290.4 470 276 512 276s81.6 14.5 111.6 40.7C654.8 344 672 380.7 672 420c0 57.8-38.1 109.8-97.1 132.5z"></path></svg></span></span>
            <span>0.5%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400 flex justify-center items-center">Minimum Received<span role="img" aria-label="question-circle" className="anticon anticon-question-circle" style={{marginLeft: "5px"}}><svg viewBox="64 64 896 896" focusable="false" data-icon="question-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 708c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm62.9-219.5a48.3 48.3 0 00-30.9 44.8V620c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-21.5c0-23.1 6.7-45.9 19.9-64.9 12.9-18.6 30.9-32.8 52.1-40.9 34-13.1 56-41.6 56-72.7 0-44.1-43.1-80-96-80s-96 35.9-96 80v7.6c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V420c0-39.3 17.2-76 48.4-103.3C430.4 290.4 470 276 512 276s81.6 14.5 111.6 40.7C654.8 344 672 380.7 672 420c0 57.8-38.1 109.8-97.1 132.5z"></path></svg></span></span>
            <span>--</span>
          </div>
        </div>

        </div>

      
       

       
       
      </div>
       {/* Footer */}
       <div className="w-full p-4 rounded-md mb-8 bg-[#121935]  text-center text-sm text-gray-400 flex flex-row justify-center items-center">
       <span>Issues with tokens after the swap? Check your sub-wallet here.</span><span role="img" aria-label="question-circle" className="anticon anticon-question-circle" style={{marginLeft: "5px"}}><svg viewBox="64 64 896 896" focusable="false" data-icon="question-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 708c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm62.9-219.5a48.3 48.3 0 00-30.9 44.8V620c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-21.5c0-23.1 6.7-45.9 19.9-64.9 12.9-18.6 30.9-32.8 52.1-40.9 34-13.1 56-41.6 56-72.7 0-44.1-43.1-80-96-80s-96 35.9-96 80v7.6c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V420c0-39.3 17.2-76 48.4-103.3C430.4 290.4 470 276 512 276s81.6 14.5 111.6 40.7C654.8 344 672 380.7 672 420c0 57.8-38.1 109.8-97.1 132.5z"></path></svg></span>
       </div>
    </div>
    <div className="container mx-auto p-4">
      <TransactionFilter onFilterChange={handleFilterChange} />
    </div>
       {isModalOpen && <Modal onClose={closeModal} />}
    </>
  );
}

export default Dex;

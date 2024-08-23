import React from 'react'

function ByTokens() {
  return (
    <div className="flex items-center justify-between p-4 text-gray-300">
    {/* <!-- Center section with Select Token and plus icon --> */}
    <div className="flex-grow flex justify-center items-center space-x-4">
      <div className="bg-[#1F2946] py-2 rounded-md px-6 flex items-center space-x-4 cursor-pointer">
        <div className="mr-4">Select Token</div>
        <span role="img" aria-label="caret-down">
          <svg
            viewBox="0 0 1024 1024"
            width="1em"
            height="1em"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path>
          </svg>
        </span>
      </div>

      <i className="fas fa-plus text-2xl"></i>

      <div className="bg-[#1F2946] py-2 rounded-md px-6 flex items-center space-x-4 cursor-pointer">
        <div>Select Token</div>
        <span role="img" aria-label="caret-down">
          <svg
            viewBox="0 0 1024 1024"
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
    <div>
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
  </div>

  )
}

export default ByTokens
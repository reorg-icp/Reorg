
const  ByAdress=() =>{
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mx-auto px-4 mb-2 py-2">
    <div className="relative flex-grow w-full md:max-w-md md:mx-auto">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              strokeLinejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"

          className=" outline-noone block w-full p-4 ps-10 text-sm border rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-[#1418] border-gray-600 placeholder-gray-400 text-white"
          placeholder="Search ..."
        />
        <button
          type="button"
          className="text-white absolute end-2.5 bottom-2.5 focus:ring-1 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 hover:bg-gray-500 focus:ring-gray-400"
        >
          <i className="fas fa-times"></i>
        </button>
      </div>
    </div>
    <div className="mt-4 md:mt-0">
      <button
        type="button"
        className="w-full md:w-auto justify-end px-6 py-2 rounded-md 
          bg-[#7364F0] text-white text-sm font-medium
          transition-all duration-300 ease-in-out
          hover:bg-[#5B4ED1] hover:shadow-lg
          active:bg-[#4A3FB0] active:shadow-inner active:transform active:translate-y-0.5
          focus:outline-none focus:ring-2 focus:ring-[#7364F0] focus:ring-opacity-50"
      >
        Create Pools
      </button>
    </div>
  </div>
  )
}

export default ByAdress
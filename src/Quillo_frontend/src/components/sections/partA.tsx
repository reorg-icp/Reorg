import "../../styles/components/PartA.scss"; // Import the SCSS file

const PartA = () => {
  return (
    <div className=" md:mt-16 md:mt-12 mt-28 md:mb-12  flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="w-full lg:w-1/2 order-2 lg:order-1">
          <img
            src="https://img.freepik.com/free-vector/gradient-colored-cardano-illustration_52683-78514.jpg?t=st=1722094319~exp=1722097919~hmac=40ae8b753a9585b61e3ac6283c45b081d47441a5968a0e305470fb3abe426528&w=740"
            alt="Multichain Token Illustration"
            className="w-full h-auto md:h-[ 300px] rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="w-full lg:w-1/2 text-center lg:text-left order-1 lg:order-2">
          <h5 className="text-xl sm:text-xl lg:text-4xl font-extrabold text-white mb-6 leading-tight">
            An elite delegate of industry-leading decision makers
          </h5>
          <p className="text-lg font-leagueSpartan sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
            Our delegate and internal team of analysts and tokenomics vet
            projects via a strict due diligence process.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-green-600 rounded-full shadow-lg hover:from-blue-700 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-300 ease-in-out transform hover:-translate-y-1 text-white font-bold py-3 px-8 rounded-full text-lg ">
            Meet the delegate
          </button>
        </div>
      </div>
    </div>
  );
};

export default PartA;

import { Feature } from "../../assets/icons";
import { featuresType } from "../../utils/howItworksFeatures";

type Prop = {
  features: featuresType[];
  colors: {
    primary: string;
    bluee: string;
  };
};

const FeatureCards = ({ features, colors }: Prop) => {
  return (
    <div className="mx-auto px-4 py-0 ">
      <h1 className="mb-6 font-jost text-3xl text-center font-extrabold text-white tracking-tight leading-tight">
        How it works
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {features.slice(0, 3).map((feature, index) => (
          <div
            key={feature.title + index}
            className={`bg-[#1414] outline-none  mt-10 bg-opacity-30 backdrop-filter backdrop-blur-md rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 border border-opacity-20 border-white ${
              index === 1 ? "mt-0  lg:col-span-1   lg:row-span-3" : ""
            }`}
          >
            <div className="p-8 h-full flex flex-col justify-center ">
              <div className=" features-icon absolute top-4 left-4">
                <Feature
                  color={feature.complete ? colors.primary : colors.bluee}
                />
              </div>
              <div className=" flex flex-col flex-start ">
                <h3 className="mt-4 text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="font-leagueSpartan  text-gray-300 text-lg">
                  {feature.content}
                </p>
              </div>
              <div className=" mt-6 flex justify-center">
                {feature.complete ? (
                  <span className="px-4 py-2 border border-green-500 text-white text-sm font-semibold rounded-full inline-block">
                    Available Now
                  </span>
                ) : (
                  <span className="px-4 py-2 border border-blue-500 text-blue-500 text-sm font-semibold rounded-full inline-block">
                    Coming Soon
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {features.length > 3 && (
        <div className="mt-4 lg:mt-4 flex justify-center">
          <div className="relative  bg-[#1414] bg-opacity-30 backdrop-filter backdrop-blur-md rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 border border-opacity-20 border-white">
            <div className=" p-8">
              <div className=" absolute top-4 left-4">
                <Feature
                  color={features[3].complete ? colors.primary : colors.bluee}
                />
              </div>
              <div className="mt-2 flex flex-col text-center">
                <h3 className="mb-2 text-2xl font-bold text-white mb-4">
                  {features[3].title}
                </h3>
                <p className=" font-leagueSpartan text-gray-200 text-lg">
                  {features[3].content}
                </p>
              </div>
              <div className="flex justify-center mt-6 ">
                {features[3].complete ? (
                  <span className="px-4 py-2 border border-green-500 text-white text-sm font-semibold rounded-full inline-block">
                    Available Now
                  </span>
                ) : (
                  <span className="px-4 py-2 border border-blue-500 text-blue-500 text-sm font-semibold rounded-full inline-block">
                    Coming Soon
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeatureCards;

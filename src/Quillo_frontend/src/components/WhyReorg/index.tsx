import { Splide, SplideSlide } from "@splidejs/react-splide";

// Don't forget to import the CSS
import "@splidejs/react-splide/css";
import { AutoAwesome } from "../../assets/icons";

const cards = [
  {
    title: "Tokenomics support",
    description:
      "Backed by top tokenomics experts and leveraging AI, we have helped projects design tokenomics models that are feasible and sustainable",
    icon: <AutoAwesome />,
  },
  {
    title: "Secure platform for investment",
    description:
      "Our delegate vets projects via a strict due diligence process",
    icon: <AutoAwesome />,
  },
  {
    title: "Raise capital",
    description: "Get funding for your project through our launchpad.",
    icon: <AutoAwesome />,
  },
];

const WhyReorg = () => {
  const splideOptions = {
    type: "loop",
    perPage: 3,
    perMove: 1,
    gap: "1rem",
    autoplay: true,
    interval: 3000,
    pauseOnHover: true,
    pauseOnFocus: true,
    arrows: false,
    pagination: false,
    drag: "free",
    snap: true,
    breakpoints: {
      1024: {
        perPage: 3,
      },
      768: {
        perPage: 2,
      },
    },
  };

  return (
    <div className="mt-4 md:mt-6 md:mb-12">
      <h1 className="font-jost text-3xl text-center font-extrabold text-white tracking-tight leading-tight mb-8">
        Why Reorg?
      </h1>
      <Splide options={splideOptions}>
        {cards.map((card, index) => (
          <SplideSlide key={index}>
            <div className="bg-[#1414] border border-opacity-20 border-white  rounded-lg shadow-md p-4 h-full transition-all duration-300 hover:shadow-2xl hover:scale-105">
              <div className="flex items-center space-x-2 mb-2">
                <p className="font-bold text-white">{card.title}</p>
                {card.icon}
              </div>
              <p className="font-leagueSpartan text-gray-400 text-md">
                {card.description}
              </p>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default WhyReorg;

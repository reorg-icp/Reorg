import { Splide, SplideSlide } from "@splidejs/react-splide";

// Don't forget to import the CSS
import "@splidejs/react-splide/css";


const cards = [
  {
    title: "Multichain flexibility",
    description:
      "Launch and manage tokens across multiple chains.",
 
  },
  {
    title: "No code simplicity",
    description:
      "Launch  tokens without writing a single line of code",

  },
  {
    title: "Expert backed assurance",
    description: "Reorg is backed by key opinion leaders in web3 and we ensure your token is market ready",
    
  },
    {
    title: "Integrated multichain DEX and Liquidity pools",
    description: "Easily manage token liquidity and facilitate trading across multiple blockchains through our integrated DEX and liquidity services",
 
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

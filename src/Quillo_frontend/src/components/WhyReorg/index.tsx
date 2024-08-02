import { Splide, SplideSlide } from '@splidejs/react-splide';

// Don't forget to import the CSS
import '@splidejs/react-splide/css';
import { AutoAwesome, Investor } from '../../assets/icons';

const cards = [
  {
    title: 'Launch multichain tokens',
    description: 'Launch ICRC and EVM based tokens',
    icon: <AutoAwesome />,
  },
  {
    title: 'Trading & Liquidity',
    description: 'Create liquidity pools',
    icon: <AutoAwesome />,
  },
  {
    title: 'Funding Potential',
    description: 'Get funding for your project through our launchpad.',
    icon: <AutoAwesome />,
  },
  {
    title: 'For Investors',
    description: 'Invest in innovative projects',
    icon: <Investor />,
  },
];

const WhyReorg = () => {
  const splideOptions = {
    type: 'loop',
    perPage: 4,
    perMove: 1,
    gap: '1rem',
    autoplay: true,
    interval: 3000,
    pauseOnHover: true,
    pauseOnFocus: true,
    arrows: false,
    pagination: false,
    drag: 'free',
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
              <p className="font-leagueSpartan text-gray-400 text-md">{card.description}</p>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default WhyReorg;
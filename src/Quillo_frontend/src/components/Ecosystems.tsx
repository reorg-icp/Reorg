import React from 'react';
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';

// External blockchain SVG URLs
const blockchainIcons = [
  { url: "https://cryptologos.cc/logos/internet-computer-icp-logo.svg?v=025", alt: "ICP" },
  { url: "https://cryptologos.cc/logos/versions/ethereum-eth-logo-diamond.svg?v=035", alt: 'Ethereum' },
  { url: "https://cryptologos.cc/logos/lisk-lsk-logo.svg?v=025", alt: 'Lisk' },
  { url: "https://altcoinsbox.com/wp-content/uploads/2023/02/base-logo-in-blue.svg", alt: 'Base' },
  { url: "https://cryptologos.cc/logos/hedera-hashgraph-hbar-logo.svg?v=025", alt: "Hedera" },
  { url: "https://cryptologos.cc/logos/tezos-xtz-logo.svg?v=025", alt: "Tezos" },
  { url: "https://cryptologos.cc/logos/sui-sui-logo.svg?v=025", alt: "Sui" },
  { url: "https://cryptologos.cc/logos/velas-vlx-logo.svg?v=025", alt: 'Velas' },
  { url: "https://cryptologos.cc/logos/sora-xor-logo.svg?v=025", alt: "Sora" },
];

const Ecosystems: React.FC = () => {
  return (
    <div className="w-full py-10 mb-12">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white">Ecosystem</h2>
        <p className="text-gray-400 text-lg mt-2">
          Explore the supported blockchains in our ecosystem.
        </p>
      </div>

      {/* Carousel Section */}
      <Splide
        options={{
          type: 'loop',
          perPage: 4,
          perMove: 2,
          autoplay: true,
          breakpoints: {
            1024: { perPage: 4 },
            768: { perPage: 2 },
            640: { perPage: 1 },
          },
        }}
        className="carousel"
      >
        {blockchainIcons.map((icon, index) => (
          <SplideSlide key={index}>
            <div className="flex flex-col items-center justify-center space-y-4">
              <img src={icon.url} alt={icon.alt} className="h-24 w-24" />
              <div className="text-white text-sm font-semibold">{icon.alt}</div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Ecosystems;

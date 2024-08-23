export type featuresType = {
  title: string;
  complete: boolean;
  content: string;
};

// type howstepstype = {
//   title: string;
//   text: string;
//   image: string;
// };

export const features: featuresType[] = [
  {
    title: "No-code token creation",
    complete: true,
    content:
      "Easily create and deploy tokens across multiple chains without any coding knowledge.",
  },
  {
    title: "Multichain DEX",
    complete: false,
    content: "A DEX that supports multiple blockchain networks ensuring liquidity and reach",
  },
  {
    title: "Multichain launchpad",
    complete: false,
    content: "Get access to a wide range of investors across different blockchains",
  },
  {
    title: "Liquidity pool management",
    complete: false,
    content: "Seamlessly create and manage liquidity pools to ensure your token has the necessary depth and trading stability",
  },
    {
    title: "Expert tokenomics consultation",
    complete: false,
    content: "Partner with our vetted tokenomics experts to design and optimize your economic model for long term success",
  },
     {
    title: "Comprehensive project vetting",
    complete: false,
    content: "Our delegate vets projects before they are available in the launchpad ensuring only trustworthy projects make it to the market",
  },
];

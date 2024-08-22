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
    title: "Token engineering",
    complete: true,
    content:
      "Vesting schedule, token utility, staking programs, liquidity, mining, and more.",
  },
  {
    title: "Liquidity and token management",
    complete: false,
    content: "Liquidity pools, airdrop mechanisms and dashboards",
  },
  {
    title: "Access to funding",
    complete: false,
    content: "Get funding through our launchpad.",
  },
  {
    title: "AI powered tokenomics",
    complete: false,
    content: "AI powered economic engineering.",
  },
];

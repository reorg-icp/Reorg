export type featuresType = {
  title: string;
  complete: boolean;
  content: string;
};

export const features: featuresType[] = [
  {
    title: "Game Assets Tokenization",
    complete: true,
    content: "Easily convert in-game assets into tradable tokens for real-world value.",
  },
  {
    title: "Marketplace",
    complete: false,
    content: "A seamless marketplace to buy, sell, and trade tokenized game assets across multiple blockchains.",
  },
  {
    title: "APIs and SDKs",
    complete: false,
    content: "Powerful tools and integrations for developers to tokenize assets and integrate seamlessly with your games.",
  }

];

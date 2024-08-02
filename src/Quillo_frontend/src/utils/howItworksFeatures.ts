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
  
 export  const features: featuresType[] = [
  
    {
      title: "Liquidity pools",
      complete: false,
      content: "Create liquidity pools by locking a token pair.",
    },
    {
        title: "Token Creation",
        complete: true,
        content: "Create ICRC and ERC compatible tokens powered by chainfusion.",
      },
    {
      title: "Launchpad",
      complete: false,
      content: "Get funding through our launchpad.",
    },
    {
      title: "AI powered tokenomics",
      complete: false,
      content: "AI powered economic engineering.",
    },
    
  ];
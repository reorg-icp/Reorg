import { create } from "zustand";
import { Principal } from "@dfinity/principal";

interface Auth {
  principal: string;
  accountId: string;
  setPrincipal: (newPrincipal: string) => void;
  setAccountId: (newId: string) => void;
}

/** 
enum Platform {
  Web = "Web",
  Mobile = "Mobile",
  Desktop = "Desktop",
}
*/

/**
 enum ProjectCategory {
  Tokenization = "Tokenization",
  Defi = "Defi",
  NFT = "NFT",
  Dapp = "Dapp",
  Gaming = "Gaming",
  }
  */

export type Platform = { Web: null } | { Desktop: null } | { Mobile: null };

interface Socials {
  website: [string];
  github: [string];
}

interface Tokenomics {
  token_name: string;
  token_symbol: string;
  total_supply: bigint;
  transfer_fee: bigint;
  token_image: string;
}

const useProjectInfo = create<any>((set: any) => ({
  project_name: "",
  project_description: "",

  platform: null,

  legal: [],
  project_principal: [],
  socials: { website: "", github: "https://github.com/reorg-icp" },

  tokenomics: null,
  setProjectName: (name: string) => set(() => ({ project_name: name })),
  setProjectDescription: (description: string) =>
    set(() => ({ project_description: description })),
  setPlatform: (platform: Platform) => set(() => ({ platform: platform })),

  setProjectPrincipal: (principal: Principal) =>
    set(() => ({ project_principal: [principal] })),
  setSocials: (socials: Socials) => set(() => ({ socials: socials })),

  setTokenomics: (tokenomics: Tokenomics) =>
    set(() => ({ tokenomics: tokenomics })),
}));

const usePlugWallet = create<any>((set: any) => ({
  plug: null,
  setPlug: (plug: any) => set({ plug: plug }),
}));
const useArticles = create<any>((set:any)=>({
  articles:null,
  setArticles:(articles:any)=>set({articles:articles})
}));

export { useProjectInfo, usePlugWallet ,useArticles};
export type { Auth };

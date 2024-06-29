import { create } from "zustand";
import {
  Legal,
  Member,
  Technical,
} from "../../../declarations/Quillo_backend/Quillo_backend.did";
import { Principal } from "@dfinity/principal";
interface Auth {
  principal: string;
  accountId: string;
  setPrincipal: (newPrincipal: string) => void;
  setAccountId: (newId: string) => void;
}
enum Platform {
  Web = "Web",
  Mobile = "Mobile",
  Desktop = "Desktop",
}
enum ProjectCategory {
  Tokenization = "Tokenization",
  Defi = "Defi",
  NFT = "NFT",
  Dapp = "Dapp",
  Gaming = "Gaming",
}
interface Socials {
  x: string;
  website: string;
  linkedin: string;
  discord: string;
}

// pub struct Tokenomics{
//     pub token_name:String,
//     pub token_symbol:String,
//     pub total_supply:Nat,
// pub transfer_fee:Nat,
// pub token_image:String

// }
interface Tokenomics {
  token_name: string;
  token_symbol: string;
  total_supply: number;
  transfer_fee: number;
  token_image: string;
}

const useAuthStore = create<Auth>((set) => ({
  principal: "",
  accountId: "",
  setPrincipal: (newPrincipal: string) =>
    set(() => ({ principal: newPrincipal })),
  setAccountId: (newId: string) => set(() => ({ accountId: newId })),
}));

const useProjectInfo = create<any>((set: any) => ({
  project_name: "",
  project_description: "",

  platform: null,
  project_category: null,
  legal: [],
  project_principal: [],
  socials: { x: "", website: "", linkedin: "", discord: "" },

  tokenomics: null,
  setProjectName: (name: string) => set(() => ({ project_name: name })),
  setProjectDescription: (description: string) =>
    set(() => ({ project_description: description })),
  setPlatform: (platform: Platform) => set(() => ({ platform: platform })),
  setProjectCategory: (category: ProjectCategory) =>
    set(() => ({ project_category: category })),
  setLegal: (legal: Legal) => set(() => ({ legal: [legal] })),
  setProjectPrincipal: (principal: Principal) =>
    set(() => ({ project_principal: [principal] })),
  setSocials: (socials: Socials) => set(() => ({ socials: socials })),
  setTeam: (team: [Member]) => set(() => ({ team: [team] })),
  setTechnical: (technical: Technical) =>
    set(() => ({ technical: [technical] })),
  setTokenomics: (tokenomics: Tokenomics) =>
    set(() => ({ tokenomics: tokenomics })),
}));

export { useAuthStore, useProjectInfo };
export type { Auth };

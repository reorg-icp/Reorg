import { create } from "zustand";

interface Auth {
  principal: string;
  accountId: string;
  setPrincipal: (newPrincipal: string) => void;
  setAccountId: (newId: string) => void;
}

const useAuthStore = create<Auth>((set) => ({
  principal: "",
  accountId: "",
  setPrincipal: (newPrincipal: string) =>
    set(() => ({ principal: newPrincipal })),
  setAccountId: (newId: string) => set(() => ({ accountId: newId })),
}));

export { useAuthStore };
export type { Auth };

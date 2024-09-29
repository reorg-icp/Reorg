import { create } from "zustand";

// Define the structure of an item in the cart
interface CartItem {
  id: number;
  name: string;
  price: number;
  // Add other relevant properties
}

// Define the structure of the store
interface MarketPlaceStore {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}

const useMarketPlaceStore = create<MarketPlaceStore>((set) => ({
  cart: [],
  addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
  removeFromCart: (id) => set((state) => ({ cart: state.cart.filter(item => item.id !== id) })),
  clearCart: () => set({ cart: [] }),
}));

export default useMarketPlaceStore;
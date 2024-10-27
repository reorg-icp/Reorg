import { motion } from "framer-motion";
import useMarketPlaceStore from "../../../store/UserMarketPlaceStore";
import { FaShoppingCart } from "react-icons/fa";

export function ShopingCartBucket() {
  const { cart, showCart, setShowCart } = useMarketPlaceStore();

  return (
    <div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowCart(!showCart)}
        className="bg-emerald-600 text-white px-3 py-1.5 sm:px-3 sm:py-2 w-full sm:w-auto rounded-lg flex items-center justify-center space-x-2 hover:bg-green-400 transition-all"
      >
        <FaShoppingCart />
        <span className="text-sm sm:text-base">{cart.length}</span>
      </motion.button>
    </div>
  );
}

export default ShopingCartBucket;

import {  FaTimesCircle, FaTrash } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import useMarketPlaceStore from '../../../store/UserMarketPlaceStore';
import { useMediaQuery } from 'react-responsive';

import { Link } from "react-router-dom";


function Cart(ref) {
    const isMobile = useMediaQuery({ maxWidth: 640 });
    const { cart,  removeFromCart, showCart, setShowCart } =
      useMarketPlaceStore();
    
  return (
    <div>  {/* Shopping Cart */}

    <AnimatePresence>
      {showCart && (
        <motion.div
          ref={ref}
          initial={{
            opacity: 0,
            x: isMobile ? 0 : 300, // For mobile, slide from bottom (y), for desktop, slide from right (x)
            y: isMobile ? 300 : 0, // Use y-axis for mobile screens
          }}
          animate={{
            opacity: 1,
            x: 0, // For desktop, move horizontally (from the right)
            y: 0, // For mobile, move vertically (from the bottom)
          }}
          exit={{
            opacity: 0,
            x: isMobile ? 0 : 300, // Exit to right on desktop
            y: isMobile ? 300 : 0, // Exit to bottom on mobile
          }}
          className={`fixed ${
            isMobile
              ? "bottom-0 left-0 right-0 h-1/2 z-20"
              : "top-0 right-0 h-full w-80"
          } bg-[#002D1B] shadow-lg p-6 overflow-y-auto `}
        >
          <div className="flex justify-between items-center mb-2 md:mt-60 mt-24 ">
            <h2 className="text-2xl font-bold text-green-400">
              Shopping Cart
            </h2>
            <button
              onClick={() => setShowCart(false)}
              className="text-gray-400 hover:text-white"
            >
              <FaTimesCircle size={24} />
            </button>
          </div>

          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center mb-4 mt-4"
            >
              <span>{item.name}</span>
              <span>{item.price} </span>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-600"
              >
                <FaTrash className="text-red-500 hover:text-red-600 cursor-pointer" />
              </button>
            </div>
          ))}

          <div className="mt-8">
            <p className="text-xl font-bold">
              Total:{" "}
              {cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}{" "}
              ETH
            </p>
            <Link to={"/checkout"}>
              <button className="w-full bg-green-400 text-black px-4 py-2 rounded-lg mt-4 hover:bg-green-500">
                Checkout
              </button>
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence></div>
  )
}

export default Cart
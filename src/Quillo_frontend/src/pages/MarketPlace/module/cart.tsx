import {  FaTimesCircle, FaTrash } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import useMarketPlaceStore from '../../../store/UserMarketPlaceStore';
import { useMediaQuery } from 'react-responsive';

import { Link } from "react-router-dom";


function Cart(ref) {
  const isMobile = useMediaQuery({ maxWidth: 640 });
  const { cart, removeFromCart, showCart, setShowCart } = useMarketPlaceStore();

  // Group items by tokenSymbol
  const groupedByToken = cart.reduce((acc, item) => {
      if (!acc[item.tokenSymbol]) {
          acc[item.tokenSymbol] = [];
      }
      acc[item.tokenSymbol].push(item);
      return acc;
  }, {});

  return (
      <div>
          <AnimatePresence>
              {showCart && (
                  <motion.div
                      ref={ref}
                      initial={{
                          opacity: 0,
                          x: isMobile ? 0 : 300,
                          y: isMobile ? 300 : 0,
                      }}
                      animate={{
                          opacity: 1,
                          x: 0,
                          y: 0,
                      }}
                      exit={{
                          opacity: 0,
                          x: isMobile ? 0 : 300,
                          y: isMobile ? 300 : 0,
                      }}
                      className={`fixed ${isMobile ? "bottom-0 left-0 right-0 h-1/2 z-20" : "top-0 right-0 h-full w-80"} bg-[#002D1B] shadow-lg p-6 overflow-y-auto`}
                  >
                      <div className="flex justify-between items-center mb-2 md:mt-60 mt-24">
                          <h2 className="text-2xl font-bold text-green-400">
                              Shopping Cart
                          </h2>
                          <button onClick={() => setShowCart(false)} className="text-gray-400 hover:text-white">
                              <FaTimesCircle size={24} />
                          </button>
                      </div>

                      {cart.map((item) => (
                          <div key={item.id} className="flex justify-between items-center mb-4 mt-4">
                              <span>{item.name}</span>
                              <span>{item.price} {item.tokenSymbol}</span>
                              <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-600">
                                  <FaTrash className="text-red-500 hover:text-red-600 cursor-pointer" />
                              </button>
                          </div>
                      ))}

                      <div className="mt-8">
                          {/* Display totals for each token group */}
                          {Object.keys(groupedByToken).map((token) => {
                              const total = groupedByToken[token].reduce((sum, item) => sum + item.price, 0).toFixed(2);
                              return (
                                  <p className="text-xl font-bold" key={token}>
                                      Total ({token}): {total} {token}
                                  </p>
                              );
                          })}

                          <Link to={"/checkout"}>
                              <button className="w-full bg-green-400 text-black px-4 py-2 rounded-lg mt-4 hover:bg-green-500">
                                  Checkout
                              </button>
                          </Link>
                      </div>
                  </motion.div>
              )}
          </AnimatePresence>
      </div>
  );
}

export default Cart;

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Sparkles, Coins, ArrowRight, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';
import gamesData from './games.json';

const Allgames = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    setGames(gamesData);
  }, []);

  return (
    <div className="min-h-screen p-4 sm:p-6">
      <h1 className="text-center text-primary text-3xl sm:text-4xl font-bold mb-8 sm:mb-12">Explore All Games</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
        {games.map((game, index) => (
          <div key={index} className="bg-gradient-to-br from-[#1414] to-[#141] rounded-xl p-4 sm:p-6 shadow-xl border border-gray-700 transition-all duration-300 hover:shadow-2xl hover:border-primary">
            <div className="flex flex-col sm:flex-row items-center mb-4 sm:mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-4 border-primary shadow-lg mb-3 sm:mb-0 sm:mr-4">
                <img
                  src={`${game[1].system_params.project_details[0].tokenomics[0].token_image}`}
                  alt="Token"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center sm:text-left">
                <h2 className="text-primary text-xl sm:text-2xl font-bold mb-1">
                  {game[1].system_params.project_details[0].project_name}
                </h2>
                <div className="flex items-center justify-center sm:justify-start text-gray-300">
                  <Sparkles size={16} className="mr-1" />
                  <span className="text-sm font-medium">
                    {game[1].system_params.project_details[0].tokenomics[0].token_name} (
                    {game[1].system_params.project_details[0].tokenomics[0].token_symbol})
                  </span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4 mb-4 sm:mb-6">
              <h3 className="text-gray-300 text-lg font-semibold flex items-center justify-center sm:justify-start">
                <Coins size={20} className="mr-2" />
                Tokenomics
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-text_secondary">
                <div className="bg-[#002D1B] rounded-lg p-3 text-gray-400">
                  <p className="text-xs mb-1">Total Supply</p>
                  <p className="font-semibold text-sm sm:text-base">
                    {Number(game[1].system_params.project_details[0].tokenomics[0].total_supply).toLocaleString()}
                  </p>
                </div>
                <div className="bg-[#1418] rounded-lg p-3 text-gray-300">
                  <p className="text-xs mb-1">Transfer Fee</p>
                  <p className="font-semibold text-sm sm:text-base">
                    {Number(game[1].system_params.project_details[0].tokenomics[0].transfer_fee)}%
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 mt-4">
           <motion.button
           
        whileHover={{ x: 10 }}
        whileTap={{ scale: 0.9 }}

        >
           <Link to={`/assets/${game[1].system_params.project_details[0].tokenomics[0].token_symbol}`} className="w-full sm:w-auto">
                <button className="w-full sm:w-auto flex items-center justify-center text-primary hover:text-gray-400 transition-colors duration-300 px-4 py-2">
                 
                  <span className="align-middle">View Market</span>
                  <ArrowRight size={18} className="mr-2" />
                </button>
              </Link>
           </motion.button>
              <Link to={`/BuyCurrency/${game[1].system_params.project_details[0].tokenomics[0].token_symbol}`} className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-[#141] border border-primary text-primary hover:bg-secondary hover:text-gray-300 transition-colors duration-300 flex items-center justify-center p-2 rounded">
                  <ShoppingCart size={18} className="mr-2" />
                  <span className="align-middle">{`Buy ${game[1].system_params.project_details[0].tokenomics[0].token_symbol} Tokens`}</span>
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Allgames;
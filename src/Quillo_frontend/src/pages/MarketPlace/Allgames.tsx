
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Sparkles, Coins, ArrowRight } from 'lucide-react';
import gamesData from './games.json';

const Allgames = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    setGames(gamesData);
  }, []);

  return (
    <div className="min-h-screen p-6 ">
      <h1 className="text-center text-primary text-4xl font-bold mb-12">Explore All Games</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {games.map((game, index) => (
          <Link key={index} to={`/assets/${game[1].system_params.project_details[0].project_name}`}className="group">
            <div className="bg-gradient-to-br from-[#1414] to-[#141] rounded-xl p-6 shadow-xl border border-gray-700 transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-2xl group-hover:border-primary">
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-primary shadow-lg mr-4">
                  <img
                    src={`${game[1].system_params.project_details[0].tokenomics[0].token_image}`}
                    alt="Token"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-primary text-2xl font-bold mb-1">
                    {game[1].system_params.project_details[0].project_name}
                  </h2>
                  <div className="flex items-center text-gray-300">
                    <Sparkles size={16} className="mr-1" />
                    <span className="text-sm font-medium">
                      {game[1].system_params.project_details[0].tokenomics[0].token_name} (
                      {game[1].system_params.project_details[0].tokenomics[0].token_symbol})
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <h3 className="text-gray-300 text-lg font-semibold flex items-center">
                  <Coins size={20} className="mr-2" />
                  Tokenomics
                </h3>
                <div className="grid grid-cols-2 gap-4 text-text_secondary">
                  <div className="bg-[#002D1B] rounded-lg p-3 text-gray-400">
                    <p className="text-xs mb-1">Total Supply</p>
                    <p className="font-semibold">
                      {Number(game[1].system_params.project_details[0].tokenomics[0].total_supply).toLocaleString()}
                    </p>
                  </div>
                  <div className="bg-[#1418] rounded-lg p-3 text-gray-300">
                    <p className="text-xs mb-1">Transfer Fee</p>
                    <p className="font-semibold">
                      {Number(game[1].system_params.project_details[0].tokenomics[0].transfer_fee)}%
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="text-primary font-medium flex items-center justify-end group-hover:text-secondary transition-colors duration-300">
                Check Market Assets
                <ArrowRight size={18} className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Allgames;
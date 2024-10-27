import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Coins, Wallet, ArrowRight, Info, AlertCircle, ChevronLeft } from 'lucide-react';
import { useAuthDrawer } from '../../context/authdrawerctx';
import { motion } from 'framer-motion';
declare global {
  interface Window {
    ic: any;
    plug: any;
  }
}

const TokenPurchase = () => {
  const { tokenSymbol } = useParams();
  const [amount, setAmount] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [plugAddress, setPlugAddress] = useState('');
  const [tokenPrice, setTokenPrice] = useState(0.1); // Mock price, replace with actual price fetch
  const [totalCost, setTotalCost] = useState(0);
  const [balance, setBalance] = useState(1000); // Mock balance, replace with actual balance fetch

  const { openAuthDrawer } = useAuthDrawer();

  const connectPlug = async () => {
    openAuthDrawer("signin");
  };

  const plug = JSON.parse(localStorage.getItem("plug"));
  const agent = plug?.sessionManager?.sessionData?.principalId;

  useEffect(() => {
    if (agent) {
      setIsConnected(true);
      setPlugAddress(agent);
    }
  }, [agent]);

  useEffect(() => {
    setTotalCost(Number(amount) * tokenPrice);
  }, [amount, tokenPrice]);

  const handlePurchase = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || isNaN(Number(amount))) {
      alert('Please enter a valid amount');
      return;
    }
    // Implement actual purchase logic here
    console.log(`Purchasing ${amount} ${tokenSymbol} tokens`);
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); 
  };
  return (
    <div className="min-h-screen  text-gray-100 p-4 sm:p-6 md:p-8">
       <div
  className='flex items-center justify-start'
  >
  <motion.button
        whileHover={{ x: -5 }}
        onClick={goBack}
        className="mb-6 flex items-center text-green-400 hover:text-green-300 "
      >
        <ChevronLeft size={20} />
        <span className="ml-1">Back to Games</span>
      </motion.button>
      </div>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          Purchase {tokenSymbol} Tokens
        </h1>
        
        <div className="bg-gradient-to-br from-gray-800 to-[#1418] border border-gray-700 rounded-lg shadow-xl p-6">
          <h2 className="text-2xl font-semibold mb-2">Token Purchase</h2>
          <p className="text-gray-300 mb-6 font-leagueSpartan">Enter the amount of {tokenSymbol} tokens you want to buy.</p>
          
          {!isConnected ? (
            <div className="text-center">
              <p className="mb-4">Please connect your Plug wallet to continue</p>
              <button
                onClick={connectPlug}
                className="w-full bg-[#1414] hover:bg-[#1418] text-white font-bold py-2 px-4 rounded transition duration-300"
              >
                Connect Plug Wallet
              </button>
            </div>
          ) : (
            <form onSubmit={handlePurchase} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="amount" className="block text-sm font-medium text-gray-300">
                  Amount of tokens to purchase
                </label>
                <div className="relative rounded-md shadow-sm">
                  <input
                    type="number"
                    name="amount"
                    id="amount"
                    className="block w-full py-4 pl-10 pr-20 bg-[#1414] border-[#1419] rounded-md focus:ring-[#141] focus:border-[#141] sm:text-sm"
                    placeholder="Enter amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Coins className="h-5 w-5 text-gray-300" aria-hidden="true" />
                  </div>
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <span className="text-gray-300 sm:text-sm">{tokenSymbol}</span>
                  </div>
                </div>
              </div>

              <div>
                <input
                  type="range"
                  min="0"
                  max={balance / tokenPrice}
                  step="1"
                  value={amount}
                  onChange={handleSliderChange}
                  className="w-full h-4 bg-[#1414]  border border-[#1418] rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-300 mt-2">
                  <span>0 {tokenSymbol}</span>
                  <span>{(balance / tokenPrice).toFixed(2)} {tokenSymbol}</span>
                </div>
              </div>

              <div className="bg-[#1418] p-4 rounded-md space-y-2">
                <div className="flex justify-between">
                  <span>Price per token:</span>
                  <span>{tokenPrice} ICP</span>
                </div>
                <div className="flex justify-between font-bold">
                  <span>Total cost:</span>
                  <span>{totalCost.toFixed(2)} ICP</span>
                </div>
              </div>

              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Wallet className="h-4 w-4" />
                <span>Connected: {plugAddress.slice(0, 6)}...{plugAddress.slice(-4)}</span>
              </div>

              <div className="bg-[#1414] bg-opacity-20 border border-[#141] rounded-md p-4 flex items-start space-x-3">
                <AlertCircle className="h-5 w-5 text-green-400 mt-0.5" />
                <div>
                  <h3 className="text-sm font-medium text-green-500">Important</h3>
                  <p className="mt-1 text-sm text-gray-300 font-leagueSpartan">
                    Please ensure you have sufficient ICP in your wallet before making the purchase.
                  </p>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#1416] hover:bg-[#141] text-white font-bold py-3 px-4 rounded shadow-sm transition duration-300 flex items-center justify-center"
              >
                Purchase Tokens
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </button>
            </form>
          )}
          
          <p className="text-sm text-gray-300 text-center mt-6">
            Need help? <a href="#" className="text-blue-400 hover:underline">Contact our support team</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TokenPurchase;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEthereum, FaWallet } from 'react-icons/fa';

const BuyNowPage: React.FC = () => {
  const [transactionPending, setTransactionPending] = useState(false);
  const [walletAddress, setWalletAddress] = useState('0x3f3a...1f8b');
  const [balance, setBalance] = useState(1.25); // ETH balance of the wallet
  const price = 0.05; // ETH price of the asset
  const gasFee = 0.002; // Approximate gas fee for the transaction

  const totalPrice = price + gasFee;

  const handleConfirmPurchase = () => {
    // Simulate processing transaction
    setTransactionPending(true);
    setTimeout(() => {
      setTransactionPending(false);
      alert('Purchase Successful!');
      // Redirect to success page or update UI
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300">
      {/* Buy Now Header */}
      <header className="bg-gray-800 py-4 shadow-md">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-neon-green">Confirm Purchase</h1>
          <div className="flex items-center space-x-4">
            <FaWallet className="text-neon-green" />
            <span className="text-gray-400">{walletAddress}</span>
          </div>
        </div>
      </header>

      {/* Buy Now Content */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-gray-800 rounded-lg shadow-lg p-8">
          {/* Asset Summary */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div className="w-full sm:w-1/2">
              <img
                src="https://placehold.co/400x300"
                alt="Asset Image"
                className="w-full rounded-lg"
              />
            </div>
            <div className="w-full sm:w-1/2 mt-6 sm:mt-0 sm:ml-8">
              <h2 className="text-2xl font-semibold">Rare Game Asset</h2>
              <p className="text-sm text-gray-400 mt-2">Blockchain: Ethereum</p>
              <p className="text-sm text-gray-400 mt-2">Creator: Game Dev Studio</p>
              <p className="text-lg mt-4 font-bold">Price: {price} ETH</p>
              <p className="text-sm text-gray-400">Gas Fee: {gasFee} ETH</p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-lg mt-2 text-neon-green font-semibold">
                  Total: {totalPrice} ETH
                </p>
              </motion.div>
            </div>
          </div>

          {/* Wallet and Balance */}
          <div className="mt-8">
            <div className="bg-gray-700 rounded-lg p-6 flex justify-between items-center">
              <div className="flex items-center">
                <FaWallet className="text-neon-green text-xl mr-4" />
                <span className="text-gray-400">Wallet Address: {walletAddress}</span>
              </div>
              <div className="flex items-center">
                <FaEthereum className="text-indigo-500 text-2xl mr-2" />
                <span className="text-lg font-semibold">
                  Balance: {balance} ETH
                </span>
              </div>
            </div>
            {balance < totalPrice && (
              <p className="mt-2 text-red-500">
                Insufficient funds to complete the purchase. Please add more ETH to your wallet.
              </p>
            )}
          </div>

          {/* Confirm Purchase Section */}
          <div className="mt-8 flex justify-end space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 rounded-lg bg-gray-700 text-gray-300 hover:bg-gray-600 transition"
              onClick={() => alert('Purchase Canceled')}
            >
              Cancel
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className={`px-6 py-3 rounded-lg text-white ${
                balance < totalPrice ? 'bg-gray-600 cursor-not-allowed' : 'bg-neon-green'
              }`}
              onClick={handleConfirmPurchase}
              disabled={balance < totalPrice || transactionPending}
            >
              {transactionPending ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1 }}
                  className="w-6 h-6 border-4 border-t-transparent border-white rounded-full"
                />
              ) : (
                'Confirm Purchase'
              )}
            </motion.button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-6">
        <div className="max-w-7xl mx-auto text-center">
          <p>© 2024 GameAsset Marketplace. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default BuyNowPage;

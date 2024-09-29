import React, { useState, useEffect } from 'react';
import { FaShoppingCart, FaWallet, FaEthereum, FaCheck } from 'react-icons/fa';
import useMarketPlaceStore from '../../store/UserMarketPlaceStore';
import { toast } from 'react-toastify';

// Mock function to simulate wallet connection
const connectWallet = async (network) => {
  // In a real application, this would interact with MetaMask or another web3 provider
  return { address: '0x1234...5678', balance: '10.5', network };
};

// Mock function to simulate blockchain transaction
const sendTransaction = async (amount, network) => {
  // Simulate a 20% chance of transaction failure
  if (Math.random() < 0.2) {
    throw new Error('Transaction failed');
  }
  // In a real application, this would create and send an actual blockchain transaction
  return { txHash: '0xabcd...1234' };
};

// Mock function to estimate gas fees
const estimateGasFee = async (network) => {
  // In a real application, this would query the network for current gas prices
  const baseFee = Math.random() * 0.01; // Random base fee between 0 and 0.01 ETH
  return baseFee * (network === 'Ethereum' ? 1 : 0.5); // Assume other networks have lower gas fees
};

const networks = ['Ethereum', 'Binance Smart Chain', 'Polygon', 'Avalanche'];

const CheckoutPage = () => {
  const [step, setStep] = useState(1);
  const { cart, clearCart } = useMarketPlaceStore();
  const [wallet, setWallet] = useState(null);
  const [txHash, setTxHash] = useState(null);
  const [selectedNetwork, setSelectedNetwork] = useState(networks[0]);
  const [gasFee, setGasFee] = useState(0);

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  useEffect(() => {
    const updateGasFee = async () => {
      const estimatedGasFee = await estimateGasFee(selectedNetwork);
      setGasFee(estimatedGasFee);
    };
    updateGasFee();
  }, [selectedNetwork]);

  const handleConnectWallet = async () => {
    try {
      const connectedWallet = await connectWallet(selectedNetwork);
      setWallet(connectedWallet);
      setStep(2);
      toast.success('Wallet connected successfully!');
    } catch (error) {
      toast.error('Failed to connect wallet. Please try again.');
    }
  };

  const handleConfirmPurchase = async () => {
    try {
      const transaction = await sendTransaction(totalPrice + gasFee, selectedNetwork);
      setTxHash(transaction.txHash);
      clearCart();
      setStep(3);
      toast.success('Purchase confirmed!');
    } catch (error) {
      toast.error('Transaction failed. Please check your balance and try again.');
    }
  };

  const steps = [
    { icon: FaShoppingCart, title: 'Order Summary' },
    { icon: FaWallet, title: 'Connect Wallet' },
    { icon: FaEthereum, title: 'Confirm Purchase' },
    // { icon: FaCheck, title: 'Confirmation' },
  ];

  return (
    <div className="min-h-screen bg-[#1414] text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
     
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-green-400 mb-8">Checkout</h1>
        
        {/* Progress bar */}
        <div className="flex justify-between mb-8">
          {steps.map((s, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className={`rounded-full p-3 ${
                  step > index ? 'bg-green-500' : step === index + 1 ? 'bg-blue-500' : 'bg-gray-700'
                } transition-all duration-300 ease-in-out transform hover:scale-110`}
              >
                <s.icon className="text-white" />
              </div>
              <span className="mt-2 text-sm">{s.title}</span>
            </div>
          ))}
        </div>

        <div
          className="transition-all duration-500 ease-in-out transform"
          style={{
            opacity: step === 1 ? 1 : 0,
            transform: `translateY(${step === 1 ? 0 : 50}px)`,
          }}
        >
          {step === 1 && (
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center mb-2">
                  <span>{item.name}</span>
                  <span>{item.price} ETH</span>
                </div>
              ))}
              <div className="border-t border-gray-600 mt-4 pt-4">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Total</span>
                  <span className="font-semibold">{totalPrice.toFixed(2)} ETH</span>
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-400 mb-1">Select Network</label>
                <select
                  value={selectedNetwork}
                  onChange={(e) => setSelectedNetwork(e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {networks.map((network) => (
                    <option key={network} value={network}>
                      {network}
                    </option>
                  ))}
                </select>
              </div>
              <button
                onClick={handleConnectWallet}
                className="w-full mt-6 bg-blue-500 text-white py-3 rounded-lg font-semibold transition-all duration-300 ease-in-out transform hover:bg-blue-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Connect Wallet
              </button>
            </div>
          )}
        </div>

        <div
          className="transition-all duration-500 ease-in-out transform"
          style={{
            opacity: step === 2 ? 1 : 0,
            transform: `translateY(${step === 2 ? 0 : 50}px)`,
          }}
        >
          {step === 2 && wallet && (
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Wallet Connected</h2>
              <p className="mb-2">Address: {wallet.address}</p>
              <p className="mb-2">Balance: {wallet.balance} ETH</p>
              <p className="mb-4">Network: {wallet.network}</p>
              <div className="border-t border-gray-600 mt-4 pt-4">
                <div className="flex justify-between items-center mb-2">
                  <span>Subtotal:</span>
                  <span>{totalPrice.toFixed(2)} ETH</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span>Estimated Gas Fee:</span>
                  <span>{gasFee.toFixed(4)} ETH</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="font-semibold">Total to Pay:</span>
                  <span className="font-semibold">{(totalPrice + gasFee).toFixed(4)} ETH</span>
                </div>
              </div>
              <button
                onClick={handleConfirmPurchase}
                className="w-full mt-6 bg-green-500 text-white py-3 rounded-lg font-semibold transition-all duration-300 ease-in-out transform hover:bg-green-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              >
                Confirm Purchase
              </button>
            </div>
          )}
        </div>

        <div
          className="transition-all duration-500 ease-in-out transform"
          style={{
            opacity: step === 3 ? 1 : 0,
            transform: `translateY(${step === 3 ? 0 : 50}px)`,
          }}
        >
          {step === 3 && txHash && (
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <FaCheck className="text-6xl text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold mb-2">Purchase Confirmed!</h2>
              <p className="mb-4">Your transaction has been sent to the {wallet.network} network.</p>
              <p className="text-sm mb-2">Transaction Hash:</p>
              <p className="text-xs text-gray-400 break-all">{txHash}</p>
              <p className="mt-4">Your digital assets will be delivered to your wallet shortly.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
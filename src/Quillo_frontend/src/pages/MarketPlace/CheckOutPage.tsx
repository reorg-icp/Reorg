import { useState, useEffect, useCallback, useMemo } from 'react';
import { FaShoppingCart, FaWallet, FaEthereum, FaCheck } from 'react-icons/fa';
import useMarketPlaceStore from '../../store/UserMarketPlaceStore';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import {debounce} from 'lodash';
// Mock function to simulate wallet connection
const connectWallet = async (network) => {
  return { address: '0x1234...5678', balance: '10.5', network };
};

// Mock function to simulate blockchain transaction
const sendTransaction = async (amounts, networks) => {
  if (Math.random() < 0.2) {
    throw new Error('Transaction failed');
  }
  return { txHash: '0xabcd...1234' };
};

// Mock function to estimate gas fees
const debouncedEstimateGasFee = debounce(async (network) => {
  const baseFee = Math.random() * 0.01;
  return baseFee * (network === 'Ethereum' ? 1 : network === 'ICP' ? 0.0 : 0.5);
}, 300);

const networks = ["ICP", 'Ethereum', 'Binance Smart Chain', 'Polygon', 'Avalanche'];

const CheckoutPage = () => {
  const [step, setStep] = useState(1);
  const { cart, clearCart } = useMarketPlaceStore();
  const [wallet, setWallet] = useState(null);
  const [txHash, setTxHash] = useState(null);
  const [selectedNetwork, setSelectedNetwork] = useState(networks[0]);
  const [gasFees, setGasFees] = useState({});

  const groupedByToken = useMemo(() => {
    return cart.reduce((acc, item) => {
      if (!acc[item.tokenSymbol]) {
        acc[item.tokenSymbol] = [];
      }
      acc[item.tokenSymbol].push(item);
      return acc;
    }, {});
  }, [cart]);

  const totals = useMemo(() => {
    return Object.keys(groupedByToken).reduce((acc, token) => {
      acc[token] = groupedByToken[token].reduce((sum, item) => sum + item.price, 0);
      return acc;
    }, {});
  }, [groupedByToken]);

  useEffect(() => {
    const updateGasFees = async () => {
      const fees = {};
      for (const token of Object.keys(groupedByToken)) {
        fees[token] = await debouncedEstimateGasFee(selectedNetwork);
      }
      setGasFees(fees);
    };
    updateGasFees();
  }, [selectedNetwork, JSON.stringify(groupedByToken)]);

  const handleConnectWallet = useCallback(async () => {
    try {
      const connectedWallet = await connectWallet(selectedNetwork);
      setWallet(connectedWallet);
      setStep(2);
      toast.success('Wallet connected successfully!');
    } catch (error) {
      toast.error('Failed to connect wallet. Please try again.');
    }
  }, [selectedNetwork]);

  const handleConfirmPurchase = useCallback(async () => {
    try {
      const amounts = Object.keys(totals).map(token => totals[token] + gasFees[token]);
      const transaction = await sendTransaction(amounts, selectedNetwork);
      setTxHash(transaction.txHash);
      clearCart();
      setStep(3);
      toast.success('Purchase confirmed!');
    } catch (error) {
      toast.error('Transaction failed. Please check your balance and try again.');
    }
  }, [totals, gasFees, selectedNetwork, clearCart]);
  const steps = [
    { icon: FaShoppingCart, title: 'Order Summary' },
    { icon: FaWallet, title: 'Connect Wallet' },
    { icon: FaEthereum, title: 'Confirm Purchase' },
  ];
  
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#002D1B] text-gray-300 py-12 px-2 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-green-400 mb-8">Checkout</h1>
        
        {/* Progress bar */}
        <div className="flex justify-between mb-8">
          {steps.map((s, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className={`rounded-full p-3 transition-all duration-300 ease-in-out transform hover:scale-110 ${
                  step > index
                    ? 'bg-green-500'
                    : step === index + 1
                    ? 'bg-blue-500'
                    : 'bg-[#005A4D]'
                }`}
              >
                <s.icon className="text-white" />
              </div>
              <span className={`mt-2 text-sm ${step > index ? 'text-green-400' : 'text-gray-400'}`}>
                {s.title}
              </span>
            </div>
          ))}
        </div>

        {/* Step 1: Order Summary */}
        <div
          className="transition-all duration-500 ease-in-out transform"
          style={{
            opacity: step === 1 ? 1 : 0,
            transform: `translateY(${step === 1 ? 0 : 50}px)`,
          }}
        >
          {step === 1 && (
            <div className="bg-[#0D3321] p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-green-400">Order Summary</h2>
              {Object.keys(groupedByToken).map((token) => (
                <div key={token}>
                  <h3 className="text-xl font-semibold mb-2 text-green-400">{token}</h3>
                  {groupedByToken[token].map((item) => (
                    <div key={item.id} className="flex justify-between items-center mb-2">
                      <span>{item.name}</span>
                      <span>{item.price} {token}</span>
                    </div>
                  ))}
                  <div className="border-t border-gray-600 mt-2 pt-2">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-300">Total {token}</span>
                      <span className="font-semibold text-green-400">{totals[token].toFixed(2)} {token}</span>
                    </div>
                  </div>
                </div>
              ))}
              <div className="mt-4">
                <label className="block text-sm font-medium text-green-400 mb-1">Select Network</label>
                <select
                  value={selectedNetwork}
                  onChange={(e) => setSelectedNetwork(e.target.value)}
                  className="w-full bg-[#002D1B] border border-green-400 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                >
                  {networks.map((network) => (
                    <option key={network} value={network} className="bg-[#002D1B] text-white">
                      {network}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex justify-between mt-6 ">
                <button
                  onClick={handleConnectWallet}
                  className="w-1/2 bg-green-400 text-black py-3 rounded-lg font-semibold transition-all duration-300 ease-in-out transform hover:bg-green-500 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                >
                  Connect Wallet
                </button>
                <button
                  onClick={() => navigate('/market')}
                  className="w-1/2 ml-4 bg-red-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 ease-in-out transform hover:bg-red-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Step 2: Wallet Connected */}
        <div
          className="transition-all duration-500 ease-in-out transform"
          style={{
            opacity: step === 2 ? 1 : 0,
            transform: `translateY(${step === 2 ? 0 : 50}px)`,
          }}
        >
          {step === 2 && wallet && (
            <div className="bg-[#0D3321] p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-green-400">Wallet Connected</h2>
              <p className="mb-2">Address: {wallet.address}</p>
              <p className="mb-2">Balance: {wallet.balance} ETH</p>
              <p className="mb-4">Network: {wallet.network}</p>
              <div className="border-t border-gray-600 mt-4 pt-4">
                {Object.keys(totals).map((token) => (
                  <div key={token} className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">Subtotal ({token}):</span>
                      <span className="text-green-400">{totals[token].toFixed(2)} {token}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">Estimated Gas Fee ({token}):</span>
                      <span className="text-green-400">{gasFees[token]?.toFixed(4)} {token}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-300">Total to Pay ({token}):</span>
                      <span className="font-semibold text-green-400">
                        {(totals[token] + (gasFees[token] || 0)).toFixed(4)} {token}
                      </span>
                    </div>
                  </div>
                ))}
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

        {/* Step 3: Purchase Confirmation */}
        <div
          className="transition-all duration-500 ease-in-out transform"
          style={{
            opacity: step === 3 ? 1 : 0,
            transform: `translateY(${step === 3 ? 0 : 50}px)`,
          }}
        >
          {step === 3 && txHash && (
            <div className="bg-[#0D3321] p-6 rounded-lg shadow-lg text-center">
              <FaCheck className="text-6xl text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold mb-2 text-green-400">Purchase Confirmed!</h2>
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
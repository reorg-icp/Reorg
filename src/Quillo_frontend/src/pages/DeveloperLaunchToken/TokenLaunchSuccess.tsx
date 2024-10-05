import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCheckCircle, FaCopy, FaExternalLinkAlt } from 'react-icons/fa';

interface TokenLaunchSuccessProps {
  name: string;
  symbol: string;
  symbolImage: string;
  totalSupply: number;
  canisterId: string;
}

const TokenLaunchSuccess: React.FC<TokenLaunchSuccessProps> = ({ 
  name, 
  symbol, 
  symbolImage, 
  totalSupply, 
  canisterId 
}) => {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen text-gray-300 font-leagueSpartan p-4 sm:p-8">
      <div className="max-w-xl sm:max-w-2xl mx-auto bg-[#1414] rounded-lg shadow-xl p-4 sm:p-8">
        <div className="flex flex-col sm:flex-row items-center justify-center mb-6 sm:mb-8">
          <FaCheckCircle className="text-4xl sm:text-6xl text-emerald-500 mb-2 sm:mb-0 sm:mr-4" />
          <h1 className="text-2xl sm:text-4xl font-bold text-emerald-400 text-center sm:text-left">Token Launch Successful!</h1>
        </div>
        
        <div className="space-y-4 sm:space-y-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-emerald-300">Token Details.</h2>
            <div className="flex flex-row  sm:flex-row items-center mb-3 sm:mb-4 space-x-12 sm:space-y-0 sm:space-x-24 px-2 sm:px-8">
              <img src={symbolImage} alt={`${symbol} logo`} className="w-12 h-12 sm:w-16 sm:h-16 rounded-full" />
              <div className="text-center sm:text-left">
                <p className="text-lg sm:text-xl font-semibold">{name}</p>
                <p className="text-base sm:text-lg">{symbol}</p>
              </div>
            </div>
            <p className="text-base sm:text-lg text-green-500"><span className='text-gray-300'>Total Supply</span> : <span className='text-green-600'> {totalSupply.toLocaleString()}</span></p>
          </div>
          
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-emerald-300">Canister ID</h2>
            <div className="flex items-center bg-emerald-800 p-2 rounded">
              <span className="flex-grow text-sm sm:text-base overflow-hidden overflow-ellipsis">{canisterId}</span>
              <button 
                onClick={() => copyToClipboard(canisterId)}
                className="ml-2 p-1 sm:p-2 hover:bg-emerald-700 rounded transition duration-300"
              >
                {copied ? <span className="text-emerald-400 text-xs sm:text-sm">Copied!</span> : <FaCopy className="text-sm sm:text-base" />}
              </button>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <button
              onClick={() => navigate('/tokens')}
              className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 bg-[#1414] border border-emerald-900 text-gray-400 text-sm sm:text-base rounded hover:bg-[#1418] hover:border-emerald-700 transition duration-300"
            >
              Go to Dashboard
            </button>
            <a
              href={`https://dashboard.internetcomputer.org/canister/${canisterId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-emerald-400 hover:text-emerald-300 transition duration-300 text-sm sm:text-base"
            >
              View on IC Dashboard <FaExternalLinkAlt className="ml-1 sm:ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenLaunchSuccess;
import React, { useState } from 'react';

interface Token {
  symbol: string;
  name: string;
  icon: string;
  type: string;
  balance: number;
  
}
interface ModalProps {
    onClose: () => void;
  }
  
  const Modal: React.FC<ModalProps> = ({ onClose })  => {
  const [search, setSearch] = useState('');
  const [hideZeroBalance, setHideZeroBalance] = useState(false);

  const tokens: Token[] = [
    { symbol: 'AVCD', name: 'AVOCADO', icon: '🥑', type: 'ICRC-1', balance: 0 },
    { symbol: 'BEBEK', name: 'BEBEK', icon: '🐥', type: 'ICRC-2', balance: 0 },
    { symbol: 'BITCORN', name: 'BITCORN', icon: '🌽', type: 'ICRC-1', balance: 0 },
    { symbol: 'BOOM', name: 'BOOM DAO', icon: '💥', type: 'ICRC-1', balance: 0 },
  ];

  return (
    <div className="fixed inset-0  bg-[#1414] bg-opacity-50   flex items-center justify-center">
      <div className="bg-[#01200f] rounded-lg md:py-4 py-3  md:px-4 px-3   w-full  md:max-w-lg  ">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-white">Select Token</h2>
          <button onClick={onClose} className="text-white text-2xl">&times;</button>
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search by symbol or canister id"
            className="w-full bg-[#1419] text-white rounded p-2  inset-2 border border-gray-500 focus:border focus:border-emerald-800"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex justify-end mb-4">
          <label className="flex items-center text-white cursor-pointer ">
            <span className="mr-2">Hide Zero Balance</span>
            <input
              type="checkbox"
              checked={hideZeroBalance}
              onChange={() => setHideZeroBalance(!hideZeroBalance)}
              className="form-checkbox text-[#1419] bg-red-500 cursor-pointer"
            />
          </label>
        </div>
        <div className="space-y-2">
          {tokens.map((token) => (
            <div key={token.symbol} className="flex items-center justify-between text-white ">
              <div className="flex items-center">
                <span className="mr-2 text-2xl">{token.icon}</span>
                <div>
                  <div>{token.symbol}</div>
                  <div className="text-sm text-gray-400">{token.name}</div>
                </div>
              </div>
              <div>
                <span className="bg-[#1419] text-xs px-2 py-1 rounded">{token.type}</span>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-4 w-full border border-emerald-800  hover:border-amber-400 text-white py-2 rounded transition-all duration-300  ">Add Token</button>
      </div>
    </div>
  );
};

export default Modal;
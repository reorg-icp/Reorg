import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import TokenLaunchSuccess from './TokenLaunchSuccess';

const TokenLaunchSuccessWrapper: React.FC = () => {
  const location = useLocation();
  const state = location.state as { 
    name: string; 
    symbol: string; 
    symbolImage: string;
    totalSupply: number; 
    canisterId: string 
  } | null;

  if (!state) {
    // If there's no state, redirect to a launch
    return <Navigate to="/app/token" replace />;
  }

  return (
    <TokenLaunchSuccess
      name={state.name}
      symbol={state.symbol}
      symbolImage={state.symbolImage}
      totalSupply={state.totalSupply}
      canisterId={state.canisterId}
    />
  );
};

export default TokenLaunchSuccessWrapper;
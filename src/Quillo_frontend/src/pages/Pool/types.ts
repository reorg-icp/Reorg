

export interface PoolData {
  id: string;
  type: 'Public Pool' | 'Private Pool' | 'Anchored Pool';
  tradingPair: string;
  tradingFeeRate: string;
  tokenAmount: {
    coinA: string;
    coinB: string;
  };
  volume24H: string;
  poolLink: string;
  tokenImages: string[];
  conversionRates: {
    fromCoinAtoCoinB: string;
    fromCoinBtoCoinA: string;
  };
  historicalData: {
    volume: { name: string; value: number }[];
    tvl: { name: string; value: number }[];
    transactions: { name: string; value: number }[];
  };
  tokens: TokenInfo[];
  volatilityCoefficient: string;
  volume24h: string;
  
}

interface TokenInfo {
  name: string;
  percentage: string;
  amount: string;
  locked: boolean;
}

// tokens: [
//   { name: "DOGM", percentage: "100.00%", amount: "336.58 M ", locked: true },
//   { name: "ICP", percentage: "0.00%", amount: "941.25", locked: false },
// ],
// tradingFeeRate: "0.30%",
// tvl: "$15.73 K",
// volatilityCoefficient: "0.5",
// volume24h: "$568.53",


 export  const poolData: PoolData[] = [
    {
      id: 'hvdnc-uqaaa-aaaam-acplq-cai',
      type: 'Public Pool',
      tradingPair: 'ICP/BITCORN',
      tradingFeeRate: '0.3%',
      tokenAmount: {
        coinA: '207.33 ICP (0.01%)',
        coinB: '1.53 M BITCORN (99.99%)',
      },
      volume24H: '38.81',
      poolLink: '/pool/detail/hvdnc-uqaaa-aaaam-acplq-cai',
      tokenImages: [
        'https://metrics.icpex.org/images/ryjl3-tyaaa-aaaaa-aaaba-cai.png',
        'https://metrics.icpex.org/images/edypu-bqaaa-aaaak-afknq-cai.png',
      ],
      conversionRates: {
        fromCoinAtoCoinB: '1 ICP = 358.42K BITCORN',
        fromCoinBtoCoinA: '1 BITCORN = 0.0005279 ICP',
      },
      tokens: [{
        name: "ICP",
        percentage: "65%",
        amount: "",
        locked: true,
      }],
      historicalData: {
        volume: [
          { name: 'Aug 24', value: 38.81 },
          { name: 'Aug 25', value: 42.33 },
        ],
        tvl: [
          { name: 'Aug 24', value: 207.33 },
          { name: 'Aug 25', value: 210.45 },
        ],
        transactions: [
          { name: 'Aug 24', value: 18 },
          { name: 'Aug 25', value: 22 },
        ],
      },
    
      volatilityCoefficient: '0.5',
      volume24h: "$3232"
    },

    {
      id: 'abcde-12345-67890-fghij-klmno',
      type: 'Private Pool',
      tradingPair: 'ETH/DAI',
      tradingFeeRate: '0.2%',
      tokenAmount: {
        coinA: '150.50 ETH (10.00%)',
        coinB: '5.00 M DAI (90.00%)',
      },
      volume24H: '$52,000.00',
      poolLink: '/pool/detail/abcde-12345-67890-fghij-klmno',
      tokenImages: [
        'https://metrics.icpex.org/images/ryjl3-tyaaa-aaaaa-aaaba-cai.png',
        'https://metrics.icpex.org/images/edypu-bqaaa-aaaak-afknq-cai.png',
      ],
      conversionRates: {
        fromCoinAtoCoinB: '1 ICP = 358.42K BITCORN',
        fromCoinBtoCoinA: '1 BITCORN = 0.0005279 ICP',
      },
      historicalData: {
        volume: [
          { name: 'Aug 24', value: 38.81 },
          { name: 'Aug 25', value: 42.33 },
        ],
        tvl: [
          { name: 'Aug 24', value: 207.33 },
          { name: 'Aug 25', value: 210.45 },
        ],
        transactions: [
          { name: 'Aug 24', value: 18 },
          { name: 'Aug 25', value: 22 },
        ],
      },
      volatilityCoefficient: '0.5',
      tokens: [   { name: "DOGM", percentage: "100.00%", amount: "336.58 M ", locked: true },
        { name: "ICP", percentage: "0.00%", amount: "941.25", locked: false },],
   
      volume24h: "$568.53"
      },
    {
      id: 'fghij-67890-12345-klmno-pqrst',
      type: 'Anchored Pool',
      tradingPair: 'BTC/USDT',
      tradingFeeRate: '0.25%',
      tokenAmount: {
        coinA: '10.00 BTC (50.00%)',
        coinB: '500,000 USDT (50.00%)',
      },
      volume24H: '$1,200,000.00',
      poolLink: '/pool/detail/fghij-67890-12345-klmno-pqrst',
      tokenImages: [
        'https://metrics.icpex.org/images/ryjl3-tyaaa-aaaaa-aaaba-cai.png',
        'https://metrics.icpex.org/images/edypu-bqaaa-aaaak-afknq-cai.png',
      ],
      conversionRates: {
        fromCoinAtoCoinB: '1 ICP = 358.42K BITCORN',
        fromCoinBtoCoinA: '1 BITCORN = 0.0005279 ICP',
      },
      historicalData: {
        volume: [
          { name: 'Aug 24', value: 38.81 },
          { name: 'Aug 25', value: 42.33 },
        ],
        tvl: [
          { name: 'Aug 24', value: 207.33 },
          { name: 'Aug 25', value: 210.45 },
        ],
        transactions: [
          { name: 'Aug 24', value: 18 },
          { name: 'Aug 25', value: 22 },
        ],
      },
      volatilityCoefficient: '0.5',
      tokens: [   { name: "DOGM", percentage: "100.00%", amount: "336.58 M ", locked: true },
        { name: "ICP", percentage: "0.00%", amount: "941.25", locked: false },],
   
      volume24h: "$568.53"
    },

    {
      id: 'xyz-98765-43210-cdefg-hijkl',
      type: 'Public Pool',
      tradingPair: 'SOL/USDC',
      tradingFeeRate: '0.15%',
      tokenAmount: {
        coinA: '300.00 SOL (20.00%)',
        coinB: '6.00 M USDC (80.00%)',
      },
      volume24H: '$90,000.00',
      poolLink: '/pool/detail/xyz-98765-43210-cdefg-hijkl',
      tokenImages: [
        'https://metrics.icpex.org/images/ryjl3-tyaaa-aaaaa-aaaba-cai.png',
        'https://metrics.icpex.org/images/edypu-bqaaa-aaaak-afknq-cai.png',
      ],

      conversionRates: {
        fromCoinAtoCoinB: '1 ICP = 358.42K BITCORN',
        fromCoinBtoCoinA: '1 BITCORN = 0.0005279 ICP',
      },
      historicalData: {
        volume: [
          { name: 'Aug 24', value: 38.81 },
          { name: 'Aug 25', value: 42.33 },
        ],
        tvl: [
          { name: 'Aug 24', value: 207.33 },
          { name: 'Aug 25', value: 210.45 },
        ],
        transactions: [
          { name: 'Aug 24', value: 18 },
          { name: 'Aug 25', value: 22 },
        ],
      },
      volatilityCoefficient: '0.5',
      tokens: [   { name: "DOGM", percentage: "100.00%", amount: "336.58 M ", locked: true },
        { name: "ICP", percentage: "0.00%", amount: "941.25", locked: false },],
   
      volume24h: "$568.53"
    },

    {
      id: 'mnop-45678-12345-qrst-uvwxy',
      type: 'Private Pool',
      tradingPair: 'ADA/BNB',
      tradingFeeRate: '0.35%',
    
      tokenAmount: {
        coinA: '500.00 ADA (40.00%)',
        coinB: '250.00 BNB (60.00%)',
      },
      volume24H: '$75,000.00',
      poolLink: '/pool/detail/mnop-45678-12345-qrst-uvwxy',
      tokenImages: [
        'https://metrics.icpex.org/images/ryjl3-tyaaa-aaaaa-aaaba-cai.png',
        'https://metrics.icpex.org/images/edypu-bqaaa-aaaak-afknq-cai.png',
      ],
      conversionRates: {
        fromCoinAtoCoinB: '1 ICP = 358.42K BITCORN',
        fromCoinBtoCoinA: '1 BITCORN = 0.0005279 ICP',
      },
      historicalData: {
        volume: [
          { name: 'Aug 24', value: 38.81 },
          { name: 'Aug 25', value: 42.33 },
        ],
        tvl: [
          { name: 'Aug 24', value: 207.33 },
          { name: 'Aug 25', value: 210.45 },
        ],
        transactions: [
          { name: 'Aug 24', value: 18 },
          { name: 'Aug 25', value: 22 },
        ],
      },
      volatilityCoefficient: '0.5',
      tokens: [   { name: "DOGM", percentage: "100.00%", amount: "336.58 M ", locked: true },
        { name: "ICP", percentage: "0.00%", amount: "941.25", locked: false },],
   
      volume24h: "$568.53"
    },
    {
      id: 'pqrst-12345-67890-uvwxy-zabcd',
      type: 'Anchored Pool',
      tradingPair: 'LTC/USDT',
      tradingFeeRate: '0.20%',
      tokenAmount: {
        coinA: '100.00 LTC (30.00%)',
        coinB: '3.00 M USDT (70.00%)',
      },
    
      volume24H: '$250,000.00',
      poolLink: '/pool/detail/pqrst-12345-67890-uvwxy-zabcd',
      tokenImages: [
        'https://metrics.icpex.org/images/ryjl3-tyaaa-aaaaa-aaaba-cai.png',
        'https://metrics.icpex.org/images/edypu-bqaaa-aaaak-afknq-cai.png',
      ],
      conversionRates: {
        fromCoinAtoCoinB: '1 ICP = 358.42K BITCORN',
        fromCoinBtoCoinA: '1 BITCORN = 0.0005279 ICP',
      },
   
      historicalData: {
        volume: [
          { name: 'Aug 24', value: 38.81 },
          { name: 'Aug 25', value: 42.33 },
        ],
        tvl: [
          { name: 'Aug 24', value: 207.33 },
          { name: 'Aug 25', value: 210.45 },
        ],
        transactions: [
          { name: 'Aug 24', value: 18 },
          { name: 'Aug 25', value: 22 },
        ],
      },
      volatilityCoefficient: '0.5',
      tokens: [   { name: "DOGM", percentage: "100.00%", amount: "336.58 M ", locked: true },
        { name: "ICP", percentage: "0.00%", amount: "941.25", locked: false },],
   
      volume24h: "$568.53"
      
    },
  ];
  
  export const headers:String[] =['Pool', 'Trading Pair', 'Trading Fee Rate', 'Token Amounts', 'Volume 24H'];
 export  const formatId = (id: string): string => {
    if (id.length <= 12) return id;
    return `${id.slice(0, 6)}...${id.slice(-6)}`;
  };

  export const YourLoopCard={
      title:"Incentives for Liquidity Providers",
        description:"Liquidity providers will receive trading fee incentives in all transactions, and the value of the trading fee rate is defined by the creator of the liquidity pool. The amount of incentive you get is proportional to your share in the liquidity pool. The trading fee will be injected into the liquidity pool, and you can obtain the corresponding incentive quota by withdrawing your liquidity."
  }
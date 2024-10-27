import Web3 from 'web3';

export const fetchGasFees = async (network) => {
    switch (network) {
      case 'Ethereum':
        return await fetchEthereumGasFees();
    
      case 'Polygon':
        return await fetchPolygonGasFees();
      case 'Avalanche':
        return await fetchAvalancheGasFees();
      case 'ICP':
        return await fetchIcpFees();
      case 'Arbitrum':
        return await fetchArbitrumGasFees();
      default:
        throw new Error('Unsupported network');
    }
  };
  const fetchArbitrumGasFees = async () => {
    const web3 = new Web3('https://arb1.arbitrum.io/rpc');
    const gasPrice = await web3.eth.getGasPrice();
    return web3.utils.fromWei(gasPrice, 'gwei');
  };
  const fetchEthereumGasFees = async () => {
    const web3 = new Web3('https://mainnet.infura.io/v3/302e00de2c264257a3050fdaf3ad16e9');
    const gasPrice = await web3.eth.getGasPrice();
    return web3.utils.fromWei(gasPrice, 'gwei');
  };
  const fetchPolygonGasFees = async () => {
  
    const web3 = new Web3(new Web3.providers.HttpProvider('https://polygon-rpc.com'));
    const gasPriceInWei = await web3.eth.getGasPrice();

    // Convert from wei to gwei
    const gasPriceInGwei = Web3.utils.fromWei(gasPriceInWei, "gwei");
    return gasPriceInGwei;
  };  
  const fetchAvalancheGasFees = async () => {
    const web3 = new Web3('https://api.avax.network/ext/bc/C/rpc');
    const gasPrice = await web3.eth.getGasPrice();
    return web3.utils.fromWei(gasPrice, 'gwei');
  };

const fetchIcpFees = async () => {
    // ICP doesn't use gas fees in the traditional sense
    // This is a placeholder - you'd need to implement ICP-specific logic
    return '0.0001';
  };
  
import React, { useState, useEffect, useRef } from 'react';
import { FaEthereum, FaWallet, FaShoppingCart, FaTimesCircle, FaTrash } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { create } from 'zustand';
import useMarketPlaceStore from '../../store/UserMarketPlaceStore';
import { FiDelete } from 'react-icons/fi';

// Mock data
const mockAssets = [
  { id: 1, name: 'Legendary Sword', price: 0.5, image: '/api/placeholder/400/300?text=Legendary+Sword', category: 'Weapon', featured: true },
  { id: 2, name: 'Magic Potion', price: 0.2, image: '/api/placeholder/400/300?text=Magic+Potion', category: 'Consumable', featured: false },
  { id: 3, name: 'Dragon Mount', price: 1.5, image: '/api/placeholder/400/300?text=Dragon+Mount', category: 'Mount', featured: true },
  { id: 4, name: 'Enchanted Armor', price: 0.8, image: '/api/placeholder/400/300?text=Enchanted+Armor', category: 'Armor', featured: false },
  { id: 5, name: 'Rare Gemstone', price: 0.3, image: '/api/placeholder/400/300?text=Rare+Gemstone', category: 'Collectible', featured: true },
  { id: 6, name: 'Ancient Scroll', price: 0.4, image: '/api/placeholder/400/300?text=Ancient+Scroll', category: 'Consumable', featured: false },
  { id: 7, name: 'Mythical Bow', price: 0.7, image: '/api/placeholder/400/300?text=Mythical+Bow', category: 'Weapon', featured: false },
  { id: 8, name: 'Flying Carpet', price: 1.2, image: '/api/placeholder/400/300?text=Flying+Carpet', category: 'Mount', featured: true },
];

const categories = ['All', 'Weapon', 'Consumable', 'Mount', 'Armor', 'Collectible'];



const Marketplace = () => {
  const [walletConnected, setWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [assets, setAssets] = useState(mockAssets);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [showCart, setShowCart] = useState(false);
  const cartRef = useRef<HTMLDivElement>(null);

  const { cart, addToCart, removeFromCart, clearCart } = useMarketPlaceStore();
  useEffect(() => {
    const filteredAssets = mockAssets.filter(asset => 
      (selectedCategory === 'All' || asset.category === selectedCategory) &&
      asset.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setAssets(filteredAssets);
      // Add event listener for clicks outside the cart
      const handleClickOutside = (event: MouseEvent) => {
        if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
          setShowCart(false);
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
  }, [selectedCategory, searchTerm]);

  const connectWallet = () => {
    setWalletAddress('0x3f3a...1f8b');
    setWalletConnected(true);
  };

  const featuredAssets = assets.filter(asset => asset.featured);

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black text-gray-300">
      {/* Header */}
      <header className="bg-gray-900 shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-extrabold text-green-400 tracking-wider">
            GameAsset Marketplace
          </h1>
          <div className="flex space-x-4 items-center">
            <input
              type="text"
              className="bg-gray-800 text-gray-300 border border-green-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-500"
              placeholder="Search assets..."
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={connectWallet}
              className="bg-green-400 text-black px-5 py-2 rounded-lg flex items-center space-x-2 hover:bg-green-500 transition-all"
            >
              <FaWallet />
              <span>{walletConnected ? walletAddress : 'Connect Wallet'}</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowCart(!showCart)}
              className="bg-blue-500 text-white px-3 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-600 transition-all"
            >
              <FaShoppingCart />
              <span>{cart.length}</span>
            </motion.button>
          </div>
        </div>
      </header>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-center space-x-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg ${
              selectedCategory === category ? 'bg-green-400 text-black' : 'bg-gray-700 text-gray-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Featured Assets */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold text-green-400 mb-4">Featured Game Assets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredAssets.map((asset) => (
            <FeaturedAssetCard key={asset.id} asset={asset} addToCart={addToCart} />
          ))}
        </div>
      </section>

      {/* All Assets */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold text-green-400 mb-4">Explore Assets</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {assets.map((asset) => (
            <AssetCard key={asset.id} asset={asset} addToCart={addToCart} />
          ))}
        </div>
      </section>

      {/* Shopping Cart */}
      <AnimatePresence>
    {showCart && (
      <motion.div
        ref={cartRef}
        initial={{ opacity: 0, x: 300 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 300 }}
        className="fixed top-0 right-0 h-full w-80 bg-gray-800 shadow-lg p-6 overflow-y-auto"
      >
        <div className="flex justify-between items-center mb-4 mt-14">
          <h2 className="text-2xl font-bold text-green-400">Shopping Cart</h2>
          <button
            onClick={() => setShowCart(false)}
            className="text-gray-400 hover:text-white"
          >
            <FaTimesCircle size={24} />
          </button>
        </div>
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between items-center mb-4">
            <span>{item.name}</span>
            <span>{item.price} ETH</span>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 hover:text-red-600"
            >
             <FaTrash className="text-red-500 hover:text-red-600 cursor-pointer" />
            </button>
          </div>
        ))}
        <div className="mt-8">
          <p className="text-xl font-bold">
            Total: {cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)} ETH
          </p>
         <Link
         to={'/checkout'}
         >
         <button className="w-full bg-green-400 text-black px-4 py-2 rounded-lg mt-4 hover:bg-green-500">
            Checkout
          </button>
         </Link>
        </div>
      </motion.div>
    )}
  </AnimatePresence>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-500 py-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-lg">© 2024 GameAsset Marketplace. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const FeaturedAssetCard = ({ asset, addToCart }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-gray-800 shadow-lg rounded-lg overflow-hidden"
  >
    <img src={asset.image} alt={asset.name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-semibold text-white">{asset.name}</h3>
      <p className="text-sm text-gray-400">Category: {asset.category}</p>
      <p className="text-lg font-bold text-green-400 mt-2">{asset.price} ETH</p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => addToCart(asset)}
        className="mt-4 w-full bg-green-400 text-black px-4 py-2 rounded-lg hover:bg-green-500"
      >
        Add to Cart
      </motion.button>
    </div>
  </motion.div>
);

const AssetCard = ({ asset, addToCart }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-gray-800 shadow-lg rounded-lg overflow-hidden"
  >
    <img src={asset.image} alt={asset.name} className="w-full h-40 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-semibold text-white">{asset.name}</h3>
      <p className="text-sm text-gray-400">Category: {asset.category}</p>
      <p className="text-md font-bold text-green-400 mt-2">{asset.price} ETH</p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => addToCart(asset)}
        className="mt-2 w-full bg-green-400 text-black px-3 py-1 rounded-lg hover:bg-green-500 text-sm"
      >
        Add to Cart
      </motion.button>
    </div>
  </motion.div>
);

export default Marketplace;
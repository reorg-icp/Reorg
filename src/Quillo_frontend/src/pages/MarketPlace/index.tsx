import { useState, useEffect, useRef } from "react";
import { FaWallet } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate, useParams } from "react-router-dom";

import useMarketPlaceStore from "../../store/UserMarketPlaceStore";

import { useMediaQuery } from "react-responsive";
import { useAuthDrawer } from "../../context/authdrawerctx";
import { MockAssets } from "./MockAssets";
import { Tag, ShoppingCart, Star, ChevronRight, ChevronLeft, ChevronUp, ChevronDown, Search, Filter } from "lucide-react";
import ShopingCartBucket from "./module/ShopingCartBucket";
import Cart from "./module/cart";
// Mock data
// const mockAssets = [
//   {
//     id: 1,
//     name: "Legendary GUN",
//     price: 0.5,
//     image:
//       "https://as2.ftcdn.net/v2/jpg/05/68/60/33/1000_F_568603373_myYg5WDPyja669cX4gMLRO7FdxxhbPtS.jpg",
//     category: "Weapon",
//     featured: true,
//   },
//   {
//     id: 2,
//     name: "Magic Potion",
//     price: 0.2,
//     image:
//       "https://as2.ftcdn.net/v2/jpg/03/54/99/07/1000_F_354990724_z5fYmELyMAghfmjTg5ESjEDioDz5i4CX.jpg",
//     category: "Consumable",
//     featured: false,
//   },
//   {
//     id: 3,
//     name: "Dragon Mount",
//     price: 1.5,
//     image:
//       "https://as1.ftcdn.net/v2/jpg/06/07/97/58/1000_F_607975804_Av70hhhtBN42s4OlWwnGqYVNsQHz7hpB.jpg",
//     category: "Mount",
//     featured: true,
//   },
//   {
//     id: 4,
//     name: "Enchanted Armor",
//     price: 0.8,
//     image:
//       "https://as1.ftcdn.net/v2/jpg/05/64/50/68/1000_F_564506895_Q73u4hGjq0hwYm85QdHsMsd5pw21tRFC.jpg",
//     category: "Armor",
//     featured: false,
//   },
//   {
//     id: 5,
//     name: "Rare Gemstone",
//     price: 0.3,
//     image:
//       "https://as1.ftcdn.net/v2/jpg/03/54/98/98/1000_F_354989895_eMcPM4foL6oquYxP2ieBVDGcTbJRUwvy.jpg",
//     category: "Collectible",
//     featured: true,
//   },
//   {
//     id: 6,
//     name: "Ancient Scroll",
//     price: 0.4,
//     image:
//       "https://as1.ftcdn.net/v2/jpg/02/06/63/28/1000_F_206632821_yiCYpqti1VQdGrJYDhkWFJIu60XWBQ60.jpg",
//     category: "Consumable",
//     featured: false,
//   },
//   {
//     id: 7,
//     name: "Mythical Bow",
//     price: 0.7,
//     image:
//       "https://as2.ftcdn.net/v2/jpg/09/55/62/15/1000_F_955621585_VXY3Qx3cQjPGr178SHn9tKaI7WwGGBN5.jpg",
//     category: "Weapon",
//     featured: false,
//   },
//   {
//     id: 8,
//     name: "Flying Carpet",
//     price: 1.2,
//     image:
//       "https://as1.ftcdn.net/v2/jpg/05/32/05/94/1000_F_532059478_uXekdU3WNLZK4jSgvUkNhgSy3S7PLwU7.jpg",
//     category: "Mount",
//     featured: true,
//   },
// ];

// const categories = [
//   "All",
//   "Weapon",
//   "Consumable",
//   "Mount",
//   "Armor",
//   "Collectible",
// ];

const Marketplace = () => {
  const { tokenSymbol } = useParams();
  const [walletConnected, setWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [assets, setAssets] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [isHeaderExpanded, setIsHeaderExpanded] = useState(false);

  const cartRef = useRef<HTMLDivElement>(null);
  const { openAuthDrawer } = useAuthDrawer();
  const isMobile = useMediaQuery({ maxWidth: 640 });
  console.log(tokenSymbol);
  const {  addToCart, setShowCart } =
    useMarketPlaceStore();
    const tokenAssets = MockAssets.find(token => token.tokenSymbol === tokenSymbol);
      
    useEffect(() => {
      // Find the token object that matches the tokenSymbol from the URL
    
      if (tokenAssets) {
        const filteredAssets = tokenAssets.assets.filter(
          (asset) =>
            (selectedCategory === "All" || asset.category === selectedCategory) &&
            asset.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setAssets(filteredAssets);
      } else {
        setAssets([]);
      }
  
      const handleClickOutside = (event: MouseEvent) => {
        if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
          setShowCart(false);
        }
      };
  
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [selectedCategory, searchTerm, tokenSymbol]);
  const connectWallet = () => {
    openAuthDrawer("signin");
  };
  useEffect(() => {
    const address = localStorage.getItem("principal");
    if (address) {
      // Format the address to "0x3f3a...1f8b"
      const formattedAddress = `${address.substring(
        0,
        6
      )}...${address.substring(address.length - 4)}`;

      setWalletAddress(formattedAddress);
      setWalletConnected(true);
    }
  }, []);
  const featuredAssets = assets.filter((asset) => asset.featured);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); 
  };

  const toggleHeader = () => {
    setIsHeaderExpanded(!isHeaderExpanded);
  };
  return (
    <div className="max-h-screen  text-gray-300">
   
        {/* Collapsible Header */}
        <motion.header
        initial={false}
        animate={{ height: isHeaderExpanded ? "auto" : "60px" }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 mt-16 left-0 w-full bg-[#142] z-50 border border-[#1419] overflow-hidden flex-col items-center  justify-center  "
      >
      <div className="max-w-7xl mx-auto px-2 sm:px-4 py-2">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
            <div className="flex items-center justify-between w-full">
              <motion.button
                whileHover={{ x: -5 }}
                onClick={goBack}
                className="flex items-center text-green-400 hover:text-green-300 text-sm sm:text-base"
              >
                <ChevronLeft size={16} />
                <span className="ml-1">Back</span>
              </motion.button>
              {!isHeaderExpanded && (
                <h1 className="text-lg sm:text-xl font-extrabold text-white tracking-wider text-center mx-2">
                  GameAsset Market
                </h1>
              )}
              <div className="flex space-x-4">
              {!isHeaderExpanded &&  <ShopingCartBucket />}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleHeader}
                className="flex items-center text-green-400 hover:text-green-300 bg-[#1a2b] px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm"
              >
               

                {isHeaderExpanded ? (
                  <>
                    <ChevronUp size={16} className="mr-1 sm:mr-2" />
                    <span className="hidden sm:inline">Hide</span>
                    <span className="sm:hidden">Hide</span>
                  </>
                ) : (
                  <>
                    <Search size={16} className="mr-1 sm:mr-2" />
                    <Filter size={16} className="mr-1 sm:mr-2" />
                    <span className="hidden sm:inline">Search & Filter</span>
                    <span className="sm:hidden">Search</span>
                  </>
                )}
              </motion.button>
              </div>
            
            </div>
          </div>
        </div>
       
        
        <AnimatePresence>
          {isHeaderExpanded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
                <h1 className="text-xl sm:text-2xl font-extrabold text-white tracking-wider text-center sm:text-left">
                  GameAsset Marketplace
                </h1>
                <div className="flex flex-col sm:flex-row space-y-2.5 sm:space-y-0 sm:space-x-4 items-center w-full sm:w-auto">
                  <div className="relative w-full sm:w-auto">
                    <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      className="text-gray-200 border border-green-400 rounded-lg pl-10 pr-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-emerald-300 placeholder-gray-400"
                      placeholder="Search assets..."
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={connectWallet}
                    className="bg-green-400 hidden md:block text-black px-4 py-1.5 sm:px-5 sm:py-2 w-full sm:w-auto rounded-lg md:flex md:items-center md:justify-center md:space-x-2 hover:bg-green-500 transition-all"
                  >
                    <FaWallet />
                    <span className="text-sm sm:text-base">
                      {walletConnected ? walletAddress : "Connect Wallet"}
                    </span>
                  </motion.button>
                  <ShopingCartBucket />
                </div>
              </div>
              
              {/* Category Filter */}
              <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex flex-wrap justify-center gap-2 sm:gap-4">
                {["All", ...new Set(assets.map((asset) => asset.category))].map(
                  (category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-3 py-1 rounded-lg ${
                        selectedCategory === category
                          ? "bg-green-400 text-black"
                          : "bg-[#1a2b] text-gray-200 hover:bg-[#2a3b] transition-colors"
                      }`}
                    >
                      {category}
                    </button>
                  )
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <Cart ref={cartRef}/>
      <div className={` ${isHeaderExpanded ? 'mt-[300px] md:mt-[230px] ' : 'mt-32'}`}>


        {/* Featured Assets */}
        {featuredAssets.length > 0 && (
          <section className="max-w-7xl mx-auto px-6 py-6">
            <h2 className="text-2xl font-bold text-green-400 mb-4">
            Featured {tokenAssets.project} Assets
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredAssets.map((asset) => (
                <FeaturedAssetCard
                  key={asset.id}
                  asset={asset}
                  addToCart={addToCart}
                />
              ))}
            </div>
          </section>
        )}


        {/* All Assets */}
        <section className="max-w-7xl mx-auto md:px-6  px-2 py-6">
          <h2 className="text-2xl font-bold text-green-400 mb-4">
          Explore {tokenAssets.project} Assets
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 md:gap-8 gap-2">
            {assets.map((asset) => (
              <AssetCard
                key={asset.id}
                asset={asset}
                addToCart={addToCart}
                isMobile={isMobile}
              />
            ))}
          </div>
        </section>

      
      </div>
      {/* Footer */}
      <footer className=" text-gray-500 py-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className=" text-gray-400 hover:text-green-200">
            <Link to={"/"}>Home</Link>
          </div>
          <p className="text-lg">
            © 2024 Reorg GameAsset Marketplace. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

const FeaturedAssetCard = ({ asset, addToCart }) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    className="bg-gradient-to-br from-gray-800 to-[#1418] rounded-xl overflow-hidden shadow-lg border border-green-400"
  >
    <div className="relative">
      <img
        src={asset.image}
        alt={asset.name}
        className="w-full h-48 object-cover"
      />
      <div className="absolute top-2 left-2 bg-green-400 text-black px-2 py-1 rounded-full text-xs font-semibold flex items-center">
        <Star size={12} className="mr-1" />
        Featured
      </div>
    </div>
    <div className="p-4">
      <h3 className="text-xl font-bold text-white mb-2">{asset.name}</h3>
      <div className="flex items-center text-gray-400 mb-3">
        <Tag size={16} className="mr-2" />
        <span className="text-sm">{asset.category}</span>
      </div>
      <div className="flex justify-between items-center mb-4">
        <p className="text-lg font-bold text-green-400">${asset.price} {asset.tokenSymbol}</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => addToCart(asset)}
          className="bg-green-400 text-black px-3 py-1 rounded-lg hover:bg-green-500 text-sm font-semibold flex items-center"
        >
          <ShoppingCart size={16} className="mr-1" />
          Add to Cart
        </motion.button>
      </div>
      <motion.div
        className="text-green-400 text-sm font-semibold flex items-center justify-end cursor-pointer"
        whileHover={{ x: 5 }}
      >
        <Link to={`/details/${asset.id}?tokenSymbol=${asset.tokenSymbol}`} className="flex items-center ">
          <span>View Details</span>
          <ChevronRight size={16} className="ml-1" />
        </Link>
      </motion.div>
    </div>
  </motion.div>
);

const AssetCard = ({ asset, addToCart, isMobile }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-gradient-to-br from-gray-800 to-[#1418] rounded-lg overflow-hidden shadow-md  "
  >
    <img
      src={asset.image}
      alt={asset.name}
      className="w-full h-40 object-cover"
    />
    <div className="p-3 py-8">
      <h3 className="text-lg font-semibold text-white mb-1">{asset.name}</h3>
      <div className="flex items-center text-gray-400 mb-2">
        <Tag size={14} className="mr-1" />
        <span className="text-xs">{asset.category}</span>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-md font-bold text-green-400">${asset.price} {asset.tokenSymbol} </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => addToCart(asset)}
          className="bg-green-400 text-black md:px-3 md:py-1  px-[0.2] py-1 rounded-lg hover:bg-green-500 text-xs font-semibold flex items-center"
        >
          <ShoppingCart size={isMobile ? 6 : 12} className="md:mr-1" />
          Add to Cart
        </motion.button>

      </div>
      <motion.div
        className="text-green-400 text-sm font-semibold flex items-center justify-end cursor-pointer mt-4"
        whileHover={{ x: 5 }}
      >
        <Link to={`/details/${asset.id}`} className="flex items-center ">
          <span>View Details</span>
          <ChevronRight size={16} className="ml-1" />
        </Link>
      </motion.div>
    </div>
  </motion.div>
);

export default Marketplace;

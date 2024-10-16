import { useState, useEffect, useRef } from "react";
import { FaWallet } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

import useMarketPlaceStore from "../../store/UserMarketPlaceStore";

import { useMediaQuery } from "react-responsive";
import { useAuthDrawer } from "../../context/authdrawerctx";
import { MockAssets } from "./MockAssets";
import { Tag, ShoppingCart, Star, ChevronRight } from "lucide-react";
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
  const { project_name } = useParams();
  const [walletConnected, setWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [assets, setAssets] = useState(MockAssets);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const cartRef = useRef<HTMLDivElement>(null);
  const { openAuthDrawer } = useAuthDrawer();
  const isMobile = useMediaQuery({ maxWidth: 640 });
  const {  addToCart, setShowCart } =
    useMarketPlaceStore();

  useEffect(() => {
    const filteredAssets = MockAssets.filter(
      (asset) =>
        (selectedCategory === "All" || asset.category === selectedCategory) &&
        asset.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        asset.project === project_name
    );
    setAssets(filteredAssets);

    const handleClickOutside = (event: MouseEvent) => {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        setShowCart(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectedCategory, searchTerm, project_name]); // Add dependencies

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

  return (
    <div className="min-h-screen   text-gray-300">
      {/* Header */}
      <header className="fixed mt-16 top-0 left-0 w-full bg-[#142] md:py-4 z-50 border border-[#1418]">
        <div className="border-b border-[#142]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <h1 className="text-xl sm:text-2xl font-extrabold text-white tracking-wider text-center sm:text-left">
              GameAsset Marketplace.
            </h1>
            <div className="flex flex-col sm:flex-row space-y-2.5 sm:space-y-0 sm:space-x-4 items-center">
              <input
                type="text"
                className="text-gray-200 border border-green-400 rounded-lg px-3 py-2 w-full sm:w-auto focus:outline-none focus:ring-1 focus:ring-emerald-300 placeholder-gray-300"
                placeholder="Search assets..."
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={connectWallet}
                className="bg-green-400 hidden md:block  text-black px-4 py-1.5 sm:px-5 sm:py-2 w-full sm:w-auto rounded-lg md:flex md:items-center md:justify-center md:space-x-2  hover:bg-green-500 transition-all"
              >
                <FaWallet />
                <span className="text-sm sm:text-base">
                  {walletConnected ? walletAddress : "Connect Wallet"}
                </span>
              </motion.button>
              <ShopingCartBucket />
            </div>
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
                    : "bg-[#142] text-gray-200"
                }`}
              >
                {category}
              </button>
            )
          )}
        </div>
      </header>

      <Cart ref={cartRef}/>

      <div className="md:mt-[200px] mt-[300px] ">
        {/* Featured Assets */}
        {featuredAssets.length > 0 && (
          <section className="max-w-7xl mx-auto px-6 py-6">
            <h2 className="text-2xl font-bold text-green-400 mb-4">
              Featured Game Assets
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
            Explore Assets
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
        <p className="text-lg font-bold text-green-400">{asset.price} ETH</p>
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
        <Link to={`/details/${asset.id}`} className="flex items-center ">
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
        <p className="text-md font-bold text-green-400">{asset.price} ETH</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => addToCart(asset)}
          className="bg-green-400 text-black md:px-2 md:py-1  px-[0.2] py-1 rounded-lg hover:bg-green-500 text-xs font-semibold flex items-center"
        >
          <ShoppingCart size={isMobile ? 6 : 12} className="md:mr-1" />
          Add to Cart
        </motion.button>
      </div>
    </div>
  </motion.div>
);

export default Marketplace;

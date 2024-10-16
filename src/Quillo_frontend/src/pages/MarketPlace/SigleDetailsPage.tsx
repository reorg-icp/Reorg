import  {  useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingCart, 
  Tag, 
//   Info, 
  Download, 
//   Eye, 
  Star, 
  ChevronLeft,
  Share2
} from 'lucide-react';
import useMarketPlaceStore from '../../store/UserMarketPlaceStore';
import { useNavigate } from 'react-router-dom';
import { detailAssetExample } from './detailAssets';
import ShopingCartBucket from './module/ShopingCartBucket';

const AssetDetailsPage = () => {
  const [isImageEnlarged, setIsImageEnlarged] = useState(false);

  const {  addToCart  } = useMarketPlaceStore();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); 
  };

  return (
    <div className="min-h-screen  text-white p-8">
  <div
  className='flex items-center justify-between'
  >
  <motion.button
        whileHover={{ x: -5 }}
        onClick={goBack}
        className="mb-6 flex items-center text-green-400 hover:text-green-300 "
      >
        <ChevronLeft size={20} />
        <span className="ml-1">Back to Assets</span>
      </motion.button>
<ShopingCartBucket/>
  </div>
      <div className="max-w-6xl mx-auto bg-gradient-to-br from-gray-800 to-[#1418] rounded-xl overflow-hidden shadow-2xl">
        <div className="md:flex">
          <div className="md:w-1/2">
            <div className="relative">
              <motion.img
                src={detailAssetExample.image}
                alt={detailAssetExample.name}
                className="w-full h-auto cursor-pointer"
                onClick={() => setIsImageEnlarged(true)}
                whileHover={{ scale: 1.05 }}
              />
              <div className="absolute top-4 left-4 bg-green-400 text-black px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                <Star size={16} className="mr-2" />
                Featured Asset
              </div>
            </div>
          </div>
          <div className="md:w-1/2 p-8">
            <h1 className="text-3xl font-bold mb-4">{detailAssetExample.name}</h1>
            <div className="flex items-center mb-4">
              <Tag size={20} className="mr-2 text-green-400" />
              <span className="text-gray-300">{detailAssetExample.category}</span>
            </div>
            <p className="text-gray-300 mb-6">{detailAssetExample.description}</p>
            <div className="flex items-center justify-between mb-6">
              <div className="text-2xl font-bold text-green-400">{detailAssetExample.price} ICP</div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => addToCart({
                    id: Number(detailAssetExample.id + 16 ),
                    name: detailAssetExample.name,
                    price: Number(detailAssetExample.price),

                })}
                className="bg-green-400 text-black px-6 py-2 rounded-lg hover:bg-green-500 font-semibold flex items-center"
              >
                <ShoppingCart size={20} className="mr-2" />
                Add to Cart
              </motion.button>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-[#1418] p-4 rounded-lg">
                <div className="text-sm text-gray-300 mb-1">File Format</div>
                <div className="font-semibold">{detailAssetExample.fileFormat}</div>
              </div>
              <div className="bg-[#1418] p-4 rounded-lg">
                <div className="text-sm text-gray-300 mb-1">Size</div>
                <div className="font-semibold">{detailAssetExample.fileSize}</div>
              </div>
              <div className="bg-[#1418] p-4 rounded-lg">
                <div className="text-sm text-gray-300 mb-1">Downloads</div>
                <div className="font-semibold">{detailAssetExample.downloads}</div>
              </div>
              <div className="bg-[#1418] p-4 rounded-lg">
                <div className="text-sm text-gray-300 mb-1">Last Updated</div>
                <div className="font-semibold">{detailAssetExample.lastUpdated}</div>
              </div>
            </div>
            <div className="flex justify-between">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="flex items-center text-green-400 hover:text-green-300"
              >
                <Download size={20} className="mr-2" />
                Download Preview
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="flex items-center text-green-400 hover:text-green-300"
              >
                <Share2 size={20} className="mr-2" />
                Share Asset
              </motion.button>
            </div>
          </div>
        </div>
        <div className="p-8 border-t border-[#1418]">
          <h2 className="text-2xl font-bold mb-4">Asset Details</h2>
          <p className="text-gray-300 mb-4">{detailAssetExample.detailedDescription}</p>
          <ul className="list-disc list-inside text-gray-300">
            {detailAssetExample.features.map((feature, index) => (
              <li key={index} className="mb-2">{feature}</li>
            ))}
          </ul>
        </div>
      </div>

      {isImageEnlarged && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={() => setIsImageEnlarged(false)}
        >
          <img 
            src={detailAssetExample.image} 
            alt={detailAssetExample.name} 
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default AssetDetailsPage;
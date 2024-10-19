import  {  useEffect, useState } from 'react';
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
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { DetailedAssets  } from './detailAssets';
import ShopingCartBucket from './module/ShopingCartBucket';
interface Details{
  
    id: string;
    name: string;
    category: string;
    description: string;
    detailedDescription: string;
    price: string;
    image: string;
    fileFormat: string;
    fileSize: string;
    downloads: string;
    lastUpdated: string;
    features: string[];

}
const AssetDetailsPage = () => {
  const [isImageEnlarged, setIsImageEnlarged] = useState(false);
  const [assetsDetail, setAssetsDetail] = useState<Details | null>(null);

const {id}=useParams();
const location = useLocation();
const queryParams = new URLSearchParams(location.search);
const tokenSymbol = queryParams.get('tokenSymbol');
  const {  addToCart  } = useMarketPlaceStore();
  useEffect(()=>{
    const assets= DetailedAssets.find(asset=>asset.id == id);
    if(assets){
      setAssetsDetail(assets);
    }
  },[id])
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
                src={assetsDetail?.image}
                alt={assetsDetail?.name}
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
            <h1 className="text-3xl font-bold mb-4">{assetsDetail?.name}</h1>
            <div className="flex items-center mb-4">
              <Tag size={20} className="mr-2 text-green-400" />
              <span className="text-gray-300">{assetsDetail?.category}</span>
            </div>
            <p className="text-gray-300 mb-6">{assetsDetail?.description}</p>
            <div className="flex items-center justify-between mb-6">
              <div className="text-2xl font-bold text-green-400">{assetsDetail?.price} {tokenSymbol}</div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => addToCart({
                    id: Number(assetsDetail?.id + 16 ),
                    name: assetsDetail?.name,
                    price: Number(assetsDetail?.price),

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
                <div className="font-semibold">{assetsDetail?.fileFormat}</div>
              </div>
              <div className="bg-[#1418] p-4 rounded-lg">
                <div className="text-sm text-gray-300 mb-1">Size</div>
                <div className="font-semibold">{assetsDetail?.fileSize}</div>
              </div>
              <div className="bg-[#1418] p-4 rounded-lg">
                <div className="text-sm text-gray-300 mb-1">Downloads</div>
                <div className="font-semibold">{assetsDetail?.downloads}</div>
              </div>
              <div className="bg-[#1418] p-4 rounded-lg">
                <div className="text-sm text-gray-300 mb-1">Last Updated</div>
                <div className="font-semibold">{assetsDetail?.lastUpdated}</div>
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
          <p className="text-gray-300 mb-4">{assetsDetail?.detailedDescription}</p>
          <ul className="list-disc list-inside text-gray-300">
            {assetsDetail?.features.map((feature, index) => (
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
            src={assetsDetail?.image} 
            alt={assetsDetail?.name} 
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default AssetDetailsPage;
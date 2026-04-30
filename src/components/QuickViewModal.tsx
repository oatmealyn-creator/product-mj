import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronRight, Check } from 'lucide-react';
import { Product } from '../data/mockData';
import { useState } from 'react';
import { useCart } from '../context/CartContext';

interface QuickViewProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function QuickViewModal({ product, isOpen, onClose }: QuickViewProps) {
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [sizeError, setSizeError] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const { addToCart } = useCart();

  if (!product) return null;

  const handleAddToCart = () => {
    if (!selectedSize) {
      setSizeError(true);
      return;
    }
    
    setSizeError(false);
    setIsAdding(true);
    setTimeout(() => {
      addToCart(product, selectedSize, 1);
      setIsAdding(false);
      onClose();
      // Reset state
      setSelectedSize('');
    }, 500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-50"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-4xl max-h-[90vh] overflow-y-auto bg-neutral-900/80 backdrop-blur-2xl border border-white/10 rounded-3xl z-50 flex flex-col md:flex-row shadow-2xl text-white"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 z-10 bg-black/40 backdrop-blur p-2 rounded-full hover:bg-black text-gray-300 transition-colors border border-white/10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left: Image Gallery */}
            <div className="w-full md:w-1/2 bg-neutral-950 flex p-4 md:p-6 pb-0 md:pb-6 relative overflow-hidden">
               {/* Decorative glow */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-500 rounded-full blur-[100px] opacity-10 pointer-events-none"></div>
               
               <div className="flex flex-col gap-2 mr-4 hidden md:flex shrink-0 z-10">
                {product.images.map((img, i) => (
                  <button key={i} className="w-16 h-20 rounded-lg overflow-hidden border border-white/10 hover:border-orange-500 transition-colors">
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
               </div>
               <div className="relative flex-1 rounded-2xl overflow-hidden aspect-[3/4] md:aspect-auto border border-white/5 z-10">
                 <img src={product.image} className="w-full h-full object-cover" alt={product.name} />
                 {product.badge && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-orange-500 text-white text-[10px] font-black px-3 py-1.5 rounded uppercase tracking-wider shadow-md">
                        {product.badge}
                      </span>
                    </div>
                  )}
               </div>
            </div>

            {/* Right: Details */}
            <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col relative">
              <div className="flex justify-end items-start mb-4">
                <div className="flex flex-col items-end">
                  <span className="text-[10px] text-gray-500 uppercase font-bold tracking-tighter">Price</span>
                  <span className="text-3xl font-bold">${product.price}</span>
                </div>
              </div>

              <div className="mb-6 border-b border-white/5 pb-6">
                 <p className="text-xs uppercase text-gray-400 mb-2 font-bold tracking-widest">{product.badge || 'Limited Drop'}</p>
                 <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">{product.name}</h2>
                 <p className="text-gray-400 text-sm mt-2">{product.details}</p>
                 <div className="flex items-center gap-2 mt-3 pt-3 border-t border-white/5 text-xs text-gray-400">
                   <span className="text-orange-400">★ {product.rating}</span>
                   <span>·</span>
                   <span>{product.reviews} reviews</span>
                 </div>
              </div>

              {/* Offer Banner */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-8 flex items-center justify-between shadow-sm">
                <div className="flex justify-between w-full items-center">
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Bulk Offers</p>
                    <p className="font-medium text-xs text-white mt-1">Get 10% Discount on orders over $500</p>
                  </div>
                  <button className="text-xs font-bold text-gray-300 flex items-center hover:text-white">
                    Explore <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>

              {/* Sizes */}
              <div className="mb-8">
                <div className="flex justify-between text-[11px] font-bold uppercase text-gray-400 mb-3">
                  <span className="flex items-center gap-2">
                    Size Select
                    {sizeError && <span className="text-red-500 animate-[pulse_1s_ease-in-out_infinite]">Required *</span>}
                  </span>
                  <span className="text-orange-400 cursor-pointer">Size Guide</span>
                </div>
                <div className="flex gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => { setSelectedSize(size); setSizeError(false); }}
                      className={`
                        flex-1 py-3 rounded-lg text-xs font-bold transition-all
                        ${selectedSize === size 
                          ? 'bg-orange-500 border border-orange-400 text-white shadow-lg shadow-orange-500/20' 
                          : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'}
                      `}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Add to Cart Button */}
              <button 
                onClick={handleAddToCart}
                disabled={isAdding}
                className={`
                  w-full py-4 rounded-xl font-black text-sm uppercase tracking-widest transition-all mt-auto border
                  ${isAdding 
                    ? 'bg-green-500 border-green-500 text-white scale-[0.98]' 
                    : 'bg-white text-black border-white hover:bg-orange-400 hover:border-orange-400 hover:text-white hover:shadow-orange-500/30 shadow-lg'}
                `}
              >
                {isAdding ? (
                  <span className="flex items-center justify-center gap-2">
                    <Check className="w-5 h-5" /> Added to Bag
                  </span>
                ) : (
                  'ADD TO BAG'
                )}
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

import { motion } from 'motion/react';
import { DollarSign } from 'lucide-react';
import { Product } from '../data/mockData';

interface ProductCardProps {
  key?: string | number;
  product: Product;
  onClick: (product: Product) => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group relative flex flex-col bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden cursor-pointer hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)] transition-all duration-300 hover:border-white/20 hover:-translate-y-1"
      onClick={() => onClick(product)}
    >
      {/* Badges */}
      {product.badge && (
        <div className="absolute top-3 left-3 z-10">
          <span className="bg-orange-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-sm uppercase tracking-wider shadow-sm border border-orange-400">
            {product.badge}
          </span>
        </div>
      )}
      
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-neutral-800">
        <img 
          src={product.image} 
          alt={product.name}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
          loading="lazy"
        />
        
        {/* Rating overlay */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-black/60 backdrop-blur-md rounded-full px-2 py-0.5 text-xs font-semibold shadow-sm text-gray-200 border border-white/10">
          <span className="text-orange-400">★</span>
          <span>{product.rating}</span>
          <span className="text-gray-500 mx-0.5">|</span>
          <span className="text-gray-400 font-medium">{product.reviews}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow items-center text-center">
        <h3 className="text-sm font-bold text-gray-200 line-clamp-2 mb-3">
          {product.name}
        </h3>
        
        <div className="mt-auto">
          <span className="text-sm font-medium text-white flex items-center justify-center">
            Starts From 
            <DollarSign className="w-3.5 h-3.5 ml-1" />
            {product.price}
          </span>
        </div>

        {/* Action Button */}
        <div className="mt-4 w-full">
          <button className="w-full py-2 rounded-xl border border-white/20 text-white font-bold text-xs tracking-wider uppercase hover:bg-white hover:text-black transition-colors">
            Quick View
          </button>
        </div>
      </div>
    </motion.div>
  );
}

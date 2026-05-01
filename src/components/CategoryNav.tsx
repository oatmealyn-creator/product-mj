import { useState, useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import { shopifyService } from '../services/shopify';

export default function CategoryNav() {
  const { activeCategory, setActiveCategory } = useShop();
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    async function loadCategories() {
      const fetched = await shopifyService.getCollections();
      setCategories(fetched);
    }
    loadCategories();
  }, []);

  return (
    <div className="w-full px-4 md:px-8 py-2 overflow-x-auto hide-scrollbar text-center border-y border-white/5 md:border-none mb-4 md:mb-0">
      <div className="max-w-7xl mx-auto flex md:inline-flex items-center gap-6 md:gap-8 text-xs md:text-sm font-medium uppercase tracking-widest text-gray-400">
        <button 
          onClick={() => setActiveCategory('ALL PRODUCTS')}
          className={`hover:text-orange-400 transition-colors uppercase whitespace-nowrap border-b-2 pb-1 ${
            activeCategory === 'ALL PRODUCTS' ? 'text-orange-400 font-bold border-orange-400' : 'border-transparent'
          }`}
        >
          ALL PRODUCTS
        </button>
        {categories.map((cat) => (
          <button 
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`hover:text-orange-400 transition-colors uppercase whitespace-nowrap border-b-2 pb-1 ${
              activeCategory === cat ? 'text-orange-400 font-bold border-orange-400' : 'border-transparent'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}

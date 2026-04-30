import { CATEGORIES } from '../data/mockData';
import { useShop } from '../context/ShopContext';

export default function CategoryNav() {
  const { activeCategory, setActiveCategory } = useShop();

  return (
    <div className="w-full px-4 md:px-8 py-2 overflow-x-auto hide-scrollbar text-center hidden md:block">
      <div className="max-w-7xl mx-auto inline-flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-gray-400">
        <button 
          onClick={() => setActiveCategory('ALL PRODUCTS')}
          className={`hover:text-orange-400 transition-colors uppercase whitespace-nowrap border-b-2 pb-1 ${
            activeCategory === 'ALL PRODUCTS' ? 'text-orange-400 font-bold border-orange-400' : 'border-transparent'
          }`}
        >
          ALL PRODUCTS
        </button>
        {CATEGORIES.map((cat, idx) => (
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

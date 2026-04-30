import { ShoppingBag, User, Menu } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useShop } from '../context/ShopContext';

export default function Header() {
  const { cart, setIsCartOpen } = useCart();
  const { setActiveCategory } = useShop();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="px-4 py-4 md:px-8 max-w-7xl mx-auto flex items-center justify-between">
      {/* Left: Mobile Menu & Logo */}
      <div className="flex items-center gap-4">
        <button className="md:hidden p-2 text-gray-300 hover:text-white">
          <Menu className="w-6 h-6" />
        </button>
        
        <div className="flex items-center gap-3 cursor-pointer group select-none relative z-10 transition-transform hover:scale-[1.02]" onClick={() => setActiveCategory('ALL PRODUCTS')}>
          <div className="w-10 h-10 bg-gradient-to-br from-orange-400 via-orange-500 to-yellow-500 rounded-lg shadow-[0_3px_12px_rgba(249,115,22,0.3)] border border-white/20 flex items-center justify-center">
            <span className="text-black font-black text-2xl italic pr-0.5" style={{ fontFamily: 'Impact, sans-serif' }}>M</span>
          </div>
          <div className="hidden sm:flex items-baseline gap-1.5 pt-1">
            <span className="text-xl font-black tracking-tighter uppercase text-white">MOONWALKER</span>
          </div>
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-4 text-gray-300">
        <button className="p-2 hidden sm:block hover:text-white hover:scale-110 transition-transform">
          <User className="w-5 h-5" />
        </button>
        
        <button 
          onClick={() => setIsCartOpen(true)}
          className="relative p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
        >
          <ShoppingBag className="w-5 h-5" />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              {totalItems}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}


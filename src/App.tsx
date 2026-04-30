import { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { ShopProvider, useShop } from './context/ShopContext';
import AnnouncementBar from './components/AnnouncementBar';
import Header from './components/Header';
import CategoryNav from './components/CategoryNav';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import QuickViewModal from './components/QuickViewModal';
import CartDrawer from './components/CartDrawer';
import Newsletter from './components/Newsletter';
import { PRODUCTS, Product } from './data/mockData';

function MainContent() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { activeCategory } = useShop();

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const filteredProducts = PRODUCTS.filter(product => {
    return activeCategory === 'ALL PRODUCTS' || product.category === activeCategory;
  });

  const displayProducts = [...filteredProducts, ...filteredProducts.map(p => ({...p, id: `${p.id}-copy`, badge: undefined}))];

  return (
    <div className="pb-24 relative overflow-x-hidden min-h-screen text-white bg-[#050505]">
      {/* Abstract Background Blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none fixed">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-900 rounded-full blur-[120px] opacity-30"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-orange-600 rounded-full blur-[150px] opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-indigo-600 rounded-full blur-[180px] opacity-10"></div>
      </div>

      <div className="relative z-10">
        {/* Navigation Layers - Sticky */}
        <div className="sticky top-0 z-50 flex flex-col">
          <AnnouncementBar />
          <div className="bg-[#050505]/80 backdrop-blur-md border-b border-white/10">
            <Header />
            <CategoryNav />
          </div>
        </div>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto pt-8">
          {activeCategory === 'ALL PRODUCTS' && <Hero />}
          
          {/* Section Title */}
          <div className="px-4 md:px-8 mb-6 flex justify-between items-end mt-12">
            <div>
              <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                {activeCategory === 'ALL PRODUCTS' ? 'Latest Drops' : activeCategory}
              </h3>
              <p className="text-sm text-gray-400 font-medium mt-1">
                 {displayProducts.length} {displayProducts.length === 1 ? 'item' : 'items'} found.
              </p>
            </div>
            <div className="hidden sm:block">
              <span className="text-sm font-bold text-orange-400 cursor-pointer hover:text-orange-300 transition-colors uppercase tracking-widest">View All</span>
            </div>
          </div>

          {/* Product Grid */}
          {displayProducts.length > 0 ? (
            <div className="px-4 md:px-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {displayProducts.map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product as Product} 
                  onClick={handleProductClick} 
                />
              ))}
            </div>
          ) : (
            <div className="px-4 md:px-8 py-20 text-center text-gray-400">
              <p>No products found matching your criteria.</p>
            </div>
          )}
        </main>

        <Newsletter />

        {/* Overlays */}
        <QuickViewModal 
          isOpen={!!selectedProduct} 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
        <CartDrawer />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <ShopProvider>
        <MainContent />
      </ShopProvider>
    </CartProvider>
  );
}

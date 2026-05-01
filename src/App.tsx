import { useState, useEffect } from 'react';
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
import { shopifyService, ShopifyProduct } from './services/shopify';

function MainContent() {
  const [selectedProduct, setSelectedProduct] = useState<ShopifyProduct | null>(null);
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { activeCategory, setActiveCategory } = useShop();

  useEffect(() => {
    async function loadProducts() {
      setIsLoading(true);
      try {
        const fetchedProducts = await shopifyService.getProducts();
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Failed to load generic products", error);
      } finally {
        setIsLoading(false);
      }
    }
    loadProducts();
  }, []);

  const handleProductClick = (product: ShopifyProduct) => {
    window.history.pushState({ modal: 'product', id: product.id }, '', window.location.href);
    setSelectedProduct(product);
  };

  useEffect(() => {
    const handlePopState = (e: PopStateEvent) => {
      if (selectedProduct) {
        setSelectedProduct(null);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [selectedProduct]);

  const closeProductModal = () => {
    // If we are currently showing a product via history state, back it out
    if (window.history.state?.modal === 'product') {
      window.history.back();
    } else {
      setSelectedProduct(null);
    }
  };

  const filteredProducts = products.filter((product) => {
    return activeCategory === 'ALL PRODUCTS' || product.category === activeCategory;
  });

  const displayProducts = [...filteredProducts, ...filteredProducts.map(p => ({...p, id: `${p.id}-copy`, badge: undefined}))];

  return (
    <div className="pb-24 relative overflow-x-hidden min-h-screen text-white bg-[#050505]">
      {/* Abstract Background Blobs - hidden on mobile for performance */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none fixed hidden sm:block">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-900 rounded-full blur-[120px] opacity-30"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-orange-600 rounded-full blur-[150px] opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-indigo-600 rounded-full blur-[180px] opacity-10"></div>
      </div>

      <div className="relative z-10">
        {/* Navigation Layers - Sticky */}
        <div className="sticky top-0 z-50 flex flex-col">
          <AnnouncementBar />
          <div className="bg-[#050505] border-b border-white/10">
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
              {!isLoading && (
                <p className="text-sm text-gray-400 font-medium mt-1">
                   {displayProducts.length} {displayProducts.length === 1 ? 'item' : 'items'} found.
                </p>
              )}
            </div>
            <div>
              <span 
                onClick={() => {
                  setActiveCategory('ALL PRODUCTS');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-xs sm:text-sm font-bold text-orange-400 cursor-pointer hover:text-orange-300 transition-colors uppercase tracking-widest"
              >
                View All
              </span>
            </div>
          </div>

          {/* Product Grid */}
          {isLoading ? (
            <div className="px-4 md:px-8 py-20 text-center text-gray-400 flex justify-center items-center">
              <div className="w-8 h-8 rounded-full border-2 border-orange-500 border-t-transparent animate-spin"></div>
            </div>
          ) : displayProducts.length > 0 ? (
            <div className="px-4 md:px-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {displayProducts.map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product as ShopifyProduct} 
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
          onClose={closeProductModal} 
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

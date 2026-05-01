import { motion, AnimatePresence } from 'motion/react';
import { X, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

import { useState } from 'react';
import { shopifyService } from '../services/shopify';

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, cartTotal, cartOriginalTotal } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  
  const discount = cartOriginalTotal - cartTotal;
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleCheckout = async () => {
    setIsCheckingOut(true);
    try {
      const checkoutUrl = await shopifyService.createCheckoutUrl(cart);
      // In a real app we'd redirect exactly to the shopify checkout url:
      // window.location.href = checkoutUrl;
      console.log("Redirecting to Shopify Checkout:", checkoutUrl);
      
      // Simulate redirection wait for preview
      setTimeout(() => {
        setIsCheckingOut(false);
        setIsCartOpen(false);
      }, 1000);
    } catch (error) {
      console.error(error);
      setIsCheckingOut(false);
    }
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/80 z-50"
          />

          {/* Drawer */}
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-neutral-900 z-50 flex flex-col shadow-2xl border-l border-white/10 text-white"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-orange-400" />
                <h2 className="font-bold text-white text-lg">My Bag ({itemCount})</h2>
              </div>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="p-2 bg-white/5 hover:bg-white/10 rounded-full text-gray-400 transition-colors border border-white/10"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Offer Banner */}
            <div className="bg-orange-500/10 text-orange-400 text-xs font-bold text-center py-2 border-b border-orange-500/20 flex items-center justify-center gap-1">
              <span>🎉</span> You're getting FREE shipping on this order!
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center text-gray-400 space-y-4">
                  <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                    <ShoppingBag className="w-10 h-10 text-orange-500/50" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Your bag is empty</h3>
                    <p className="text-sm">Looks like you haven't added anything yet.</p>
                  </div>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="mt-4 border border-orange-500 text-orange-400 px-6 py-2 rounded-full font-bold text-sm tracking-wider hover:bg-orange-500 hover:text-white transition-colors"
                  >
                    START SHOPPING
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.cartItemId} className="flex gap-4 bg-white/5 p-3 rounded-2xl border border-white/10 shadow-sm relative group">
                    <button 
                      onClick={() => removeFromCart(item.cartItemId)}
                      className="absolute top-2 right-2 p-1 text-gray-500 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="w-4 h-4" />
                    </button>
                    
                    <div className="w-20 h-24 rounded-xl overflow-hidden bg-neutral-800 shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover opacity-90" />
                    </div>
                    
                    <div className="flex flex-col flex-1 py-1">
                      <h4 className="text-sm font-bold text-white line-clamp-2 pr-6 leading-tight mb-1">{item.name}</h4>
                      <p className="text-xs text-gray-400 mb-2">Size: <span className="font-bold text-white">{item.selectedSize}</span></p>
                      
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-1.5">
                          <span className="font-bold text-white">${item.price}</span>
                          <span className="text-xs text-gray-500 line-through">${item.originalPrice}</span>
                        </div>
                        
                        <div className="flex items-center border border-white/20 rounded-lg bg-neutral-800">
                          <button 
                            onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                            className="p-1 hover:bg-white/10 text-gray-300"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="w-6 text-center text-xs font-bold text-white">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                            className="p-1 hover:bg-white/10 text-gray-300"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer Summary */}
            {cart.length > 0 && (
              <div className="border-t border-white/10 p-4 bg-neutral-900 pb-safe">
                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex justify-between text-gray-400">
                    <span>Total MRP</span>
                    <span>${cartOriginalTotal}</span>
                  </div>
                  <div className="flex justify-between text-green-400 font-medium">
                    <span>Discount on MRP</span>
                    <span>-${discount}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Shipping Fee</span>
                    <span className="text-green-400">FREE</span>
                  </div>
                  <div className="border-t border-white/10 pt-2 flex justify-between font-bold text-lg text-white">
                    <span>Total Amount</span>
                    <span>${cartTotal}</span>
                  </div>
                  <div className="text-[10px] text-gray-500 text-right">Inclusive of all taxes</div>
                </div>

                <div className="bg-orange-500/10 rounded-xl p-3 mb-4 flex items-center justify-center gap-2 border border-orange-500/20">
                  <span className="w-6 h-6 bg-orange-500 rounded-full text-white flex items-center justify-center text-xs font-bold">$</span>
                  <p className="text-xs font-bold text-orange-400">You saved ${discount} on this order!</p>
                </div>

                <button 
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                  className="w-full bg-gradient-to-r from-orange-500 to-purple-500 text-white font-black py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-orange-500/25 hover:scale-[1.02] transition-transform uppercase tracking-widest disabled:opacity-75 disabled:hover:scale-100"
                >
                  {isCheckingOut ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>PROCEED TO BUY <ArrowRight className="w-4 h-4" /></>
                  )}
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

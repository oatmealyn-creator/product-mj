import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ShopContextType {
  activeCategory: string;
  setActiveCategory: (c: string) => void;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export function ShopProvider({ children }: { children: ReactNode }) {
  const [activeCategory, setActiveCategory] = useState("ALL PRODUCTS");

  return (
    <ShopContext.Provider value={{ activeCategory, setActiveCategory }}>
      {children}
    </ShopContext.Provider>
  );
}

export function useShop() {
  const context = useContext(ShopContext);
  if (context === undefined) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
}

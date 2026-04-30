import { PRODUCTS, CATEGORIES, Product } from '../data/mockData';

// Simulated Shopify Storefront API Service
// This acts as a facade. Once you have a real Shopify Storefront API token,
// you can replace the implementations here with actual GraphQL fetch calls.

export interface ShopifyProduct extends Product {
  // We extend the existing mock product but when migrating to real Shopify, you'll map Shopify's GraphQL nodes to this interface.
}

export const shopifyService = {
  /**
   * Fetch all products from the store
   */
  async getProducts(): Promise<ShopifyProduct[]> {
    // Simulated network delay
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(PRODUCTS);
      }, 300);
    });
  },

  /**
   * Fetch categories (collections in Shopify)
   */
  async getCollections(): Promise<string[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(CATEGORIES);
      }, 100);
    });
  },

  /**
   * Fetch a single product by ID
   */
  async getProductById(id: string): Promise<ShopifyProduct | undefined> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const product = PRODUCTS.find((p) => p.id === id);
        resolve(product);
      }, 200);
    });
  },

  // In the future for Shopify integration:
  // - async createCart()
  // - async cartLinesAdd(cartId, lineItems)
  // - async checkout(cartId)
};

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  discount: string;
  rating: number;
  reviews: number;
  image: string;
  images: string[];
  badge?: string;
  sizes: string[];
  colors?: string[];
  details: string;
  category?: string;
}

export const CATEGORIES = [
  "T-SHIRTS",
  "HOODIES & SWEATSHIRTS",
  "JACKETS",
  "BOTTOMS"
];

export const PRODUCTS: Product[] = [
  {
    id: "prod-1",
    name: "Unisex Acid Wash Oversized Tee | UC61",
    price: 340,
    originalPrice: 799,
    discount: "57% OFF",
    rating: 4.8,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&auto=format&fit=crop&q=80",
    images: ["https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&auto=format&fit=crop&q=80"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black Acid Wash"],
    details: "Premium cotton oversized acid wash tee perfect for streetwear blanks.",
    category: "T-SHIRTS"
  },
  {
    id: "prod-2",
    name: "Unisex Terry Oversized Tee | UT27",
    price: 280,
    originalPrice: 599,
    discount: "53% OFF",
    rating: 4.7,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&auto=format&fit=crop&q=80",
    images: ["https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&auto=format&fit=crop&q=80"],
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Black"],
    details: "Heavyweight terry cotton basic oversized tee.",
    category: "T-SHIRTS"
  },
  {
    id: "prod-3",
    name: "Unisex Oversized Shirt | UC28",
    price: 290,
    originalPrice: 650,
    discount: "55% OFF",
    rating: 4.6,
    reviews: 65,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&auto=format&fit=crop&q=80",
    images: ["https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&auto=format&fit=crop&q=80"],
    badge: "BEST SELLER",
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["White"],
    details: "Boxy fit oversized shirt, versatile for casual layers.",
    category: "T-SHIRTS"
  },
  {
    id: "prod-4",
    name: "Unisex Sweatshirt | UH26",
    price: 330,
    originalPrice: 899,
    discount: "63% OFF",
    rating: 4.9,
    reviews: 211,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&auto=format&fit=crop&q=80",
    images: ["https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&auto=format&fit=crop&q=80"],
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Grey", "Black"],
    details: "Classic crewneck sweatshirt. Cozy fleece interior.",
    category: "HOODIES & SWEATSHIRTS"
  },
  {
    id: "prod-5",
    name: "Unisex Hoodie",
    price: 430,
    originalPrice: 999,
    discount: "57% OFF",
    rating: 4.8,
    reviews: 312,
    image: "https://images.unsplash.com/photo-1509942774463-acf339cf87d5?w=800&auto=format&fit=crop&q=80",
    images: ["https://images.unsplash.com/photo-1509942774463-acf339cf87d5?w=800&auto=format&fit=crop&q=80"],
    badge: "POPULAR",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Black", "Navy"],
    details: "Premium cotton-blend hoodie with kangaroo pocket.",
    category: "HOODIES & SWEATSHIRTS"
  },
  {
    id: "prod-6",
    name: "Unisex AOP Bomber Jacket | UA30",
    price: 750,
    originalPrice: 1599,
    discount: "53% OFF",
    rating: 4.5,
    reviews: 42,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&auto=format&fit=crop&q=80",
    images: ["https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&auto=format&fit=crop&q=80"],
    sizes: ["M", "L", "XL"],
    colors: ["White"],
    details: "All over print bomber jacket blank, zipper up and secure pockets.",
    category: "JACKETS"
  },
  {
    id: "prod-7",
    name: "Unisex Varsity Jacket | UJ31",
    price: 685,
    originalPrice: 1499,
    discount: "54% OFF",
    rating: 4.9,
    reviews: 185,
    image: "https://images.unsplash.com/photo-1559551409-dadc959f76b8?w=800&auto=format&fit=crop&q=80",
    images: ["https://images.unsplash.com/photo-1559551409-dadc959f76b8?w=800&auto=format&fit=crop&q=80"],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black/White"],
    details: "Classic letterman style varsity jacket. Ideal for custom prints and patches.",
    category: "JACKETS"
  },
  {
    id: "prod-8",
    name: "Unisex Sweatpants | US52",
    price: 420,
    originalPrice: 899,
    discount: "53% OFF",
    rating: 4.8,
    reviews: 145,
    image: "https://images.unsplash.com/photo-1628169420078-abfddf0f622f?w=800&auto=format&fit=crop&q=80",
    images: ["https://images.unsplash.com/photo-1628169420078-abfddf0f622f?w=800&auto=format&fit=crop&q=80"],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Grey Marl"],
    details: "Relaxed fit sweatpants with a comfy elastic waist.",
    category: "BOTTOMS"
  },
  {
    id: "prod-9",
    name: "Unisex Joggers | UJ29",
    price: 400,
    originalPrice: 899,
    discount: "55% OFF",
    rating: 4.6,
    reviews: 182,
    image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=800&auto=format&fit=crop&q=80",
    images: ["https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=800&auto=format&fit=crop&q=80"],
    badge: "POPULAR",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black"],
    details: "Tapered leg joggers with ribbed ankle cuffs.",
    category: "BOTTOMS"
  }
];

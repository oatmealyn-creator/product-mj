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
  "TOP WEAR",
  "PREMIUM HOODIES",
  "CENTRE STAGE",
  "BOTTOM WEAR"
];

export const PRODUCTS: Product[] = [
  {
    id: "moon-1",
    name: "Moonwalk Signature Oversized Drop-Shoulder Tee",
    price: 699,
    originalPrice: 1499,
    discount: "53% OFF",
    rating: 4.8,
    reviews: 1240,
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&auto=format&fit=crop&q=60",
    images: ["https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&auto=format&fit=crop&q=60"],
    badge: "BEST SELLER",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White"],
    details: "100% Premium Cotton. Heavyweight oversized fit with high-density print on the back.",
    category: "TOP WEAR"
  },
  {
    id: "moon-2",
    name: "Thriller Night Red Varsity Jacket",
    price: 2499,
    originalPrice: 4999,
    discount: "50% OFF",
    rating: 4.9,
    reviews: 856,
    image: "https://images.unsplash.com/photo-1559551409-dadc959f76b8?w=800&auto=format&fit=crop&q=60",
    images: ["https://images.unsplash.com/photo-1559551409-dadc959f76b8?w=800&auto=format&fit=crop&q=60"],
    badge: "PREMIUM",
    sizes: ["M", "L", "XL"],
    colors: ["Red/Black"],
    details: "Iconic red and black varsity jacket inspired by the Thriller era. Faux leather sleeves.",
    category: "CENTRE STAGE"
  },
  {
    id: "moon-3",
    name: "Smooth Criminal Fedora Graphic Hoodie",
    price: 1199,
    originalPrice: 2499,
    discount: "52% OFF",
    rating: 4.6,
    reviews: 432,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&auto=format&fit=crop&q=60",
    images: ["https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&auto=format&fit=crop&q=60"],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Grey", "Black"],
    details: "Cozy fleece interior hoodie with an anti-gravity lean graphic on the chest.",
    category: "PREMIUM HOODIES"
  },
  {
    id: "moon-4",
    name: "Bad Tour '88 Vintage Wash T-Shirt",
    price: 549,
    originalPrice: 1199,
    discount: "54% OFF",
    rating: 4.5,
    reviews: 512,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&auto=format&fit=crop&q=60",
    images: ["https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&auto=format&fit=crop&q=60"],
    badge: "BUY 3 @ 1099",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Washed Black"],
    details: "Acid wash vintage style tee with the classic Bad World Tour logo.",
    category: "TOP WEAR"
  },
  {
    id: "moon-5",
    name: "Billie Jean Light-Up Ankle Socks",
    price: 399,
    originalPrice: 799,
    discount: "50% OFF",
    rating: 4.4,
    reviews: 512,
    image: "https://images.unsplash.com/photo-1582966869695-1f99c264dc87?w=800&auto=format&fit=crop&q=60",
    images: ["https://images.unsplash.com/photo-1582966869695-1f99c264dc87?w=800&auto=format&fit=crop&q=60"],
    sizes: ["Free Size"],
    colors: ["White/Sparkle"],
    details: "Iconic sparkling white socks perfect for pairing with loafers.",
    category: "BOTTOM WEAR"
  },
  {
    id: "moon-6",
    name: "King of Pop Monogram Joggers",
    price: 899,
    originalPrice: 1999,
    discount: "55% OFF",
    rating: 4.7,
    reviews: 310,
    image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=800&auto=format&fit=crop&q=60",
    images: ["https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=800&auto=format&fit=crop&q=60"],
    badge: "NEW DROP",
    sizes: ["M", "L", "XL"],
    colors: ["Navy Blue", "Black"],
    details: "Premium cotton joggers with K.O.P embroidered monogram.",
    category: "BOTTOM WEAR"
  }
];

export type Product = {
  slug: string;
  name: string;
  category: string;
  image: string;
  description: string;
};

export const products: Product[] = [
  {
    slug: "airdopes-141",
    name: "boAt Airdopes 141",
    category: "earbuds",
    image: "/products/earbuds.jpg",
    description:
      "Wireless earbuds designed for everyday listening.",
  },
  {
    slug: "rockerz-255",
    name: "boAt Rockerz 255",
    category: "neckbands",
    image: "/products/neckband.jpg",
    description:
      "Wireless neckband with powerful sound.",
  },
  {
    slug: "nirvana-751",
    name: "boAt Nirvana 751",
    category: "headphones",
    image: "/products/headphones.jpg",
    description:
      "Wireless headphones with immersive sound.",
  },
  {
    slug: "stone-speaker",
    name: "boAt Stone Speaker",
    category: "speakers",
    image: "/products/speaker.jpg",
    description:
      "Portable speaker built for powerful audio.",
  },
  {
    slug: "wave-smartwatch",
    name: "boAt Wave Smartwatch",
    category: "smartwatches",
    image: "/products/smartwatch.jpg",
    description:
      "Smartwatch with fitness and lifestyle features.",
  },
  {
    slug: "immortal-gaming",
    name: "boAt Immortal Gaming",
    category: "gaming",
    image: "/products/gaming.jpg",
    description:
      "Gaming accessories built for immersive gameplay.",
  },
];
const products = [
  {
    id: "1",
    name: "boAt Airdopes 141",
    category: "earbuds",
    type: "Wireless Earbuds",
    image: "/products/earbuds.jpg",
  },
  {
    id: "2",
    name: "boAt Rockerz",
    category: "neckband",
    type: "Neckband",
    image: "/products/neckband.jpg",
  },
  {
    id: "3",
    name: "boAt Nirvana",
    category: "headphones",
    type: "Wireless Headphones",
    image: "/products/headphones.jpg",
  },
  {
    id: "4",
    name: "boAt Wave Smartwatch",
    category: "smartwatch",
    type: "Smart Watch",
    image: "/products/smartwatch.jpg",
  },
  {
    id: "5",
    name: "boAt Stone Speaker",
    category: "speaker",
    type: "Speaker",
    image: "/products/speaker.jpg",
  },
  {
    id: "6",
    name: "boAt Gaming Headset",
    category: "gaming",
    type: "Gaming Accessories",
    image: "/products/gaming.jpg",
  },
];

export async function getProducts({
  query = "",
  category = "",
  page = 1,
}: {
  query?: string;
  category?: string;
  page?: number;
}) {

  const filtered = products.filter((product) => {

    const matchesSearch =
      !query ||
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.type.toLowerCase().includes(query.toLowerCase());

    const matchesCategory =
      !category ||
      product.category === category;

    return matchesSearch && matchesCategory;
  });

  const pageSize = 6;

  const totalPages =
    Math.max(1, Math.ceil(filtered.length / pageSize));

  const safePage =
    Math.min(Math.max(page, 1), totalPages);

  const start =
    (safePage - 1) * pageSize;

  return {
    products: filtered.slice(
      start,
      start + pageSize
    ),

    page: safePage,

    totalPages,
  };
}
import boot1 from "../assets/shoes/boot1.png";
import boot2 from "../assets/shoes/boot2.png";
import boot3 from "../assets/shoes/boot3.png";
import boot4 from "../assets/shoes/boot4.png";
import boot5 from "../assets/shoes/boot5.png";
import boot6 from "../assets/shoes/boot6.png";

// Single source of truth for every product shown across the site.
// category values map 1:1 to route slugs: /men, /women, /kids, /jordan, /sale
export const PRODUCTS = [
  {
    id: "air-motion-90",
    name: "Air Motion 90",
    category: "men",
    type: "Lifestyle Shoes",
    price: 145,
    sale: false,
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1000&q=85",
    description:
      "A modern take on a classic silhouette, built with a breathable mesh upper and a cushioned foam midsole for all-day comfort.",
  },
  {
    id: "street-runner",
    name: "Street Runner",
    category: "men",
    type: "Everyday Shoes",
    price: 125,
    sale: true,
    salePrice: 95,
    image:
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=1000&q=85",
    description:
      "Lightweight everyday trainer with a flexible outsole that moves with you from the commute to the gym.",
  },
  {
    id: "zoom-silver",
    name: "Zoom Silver",
    category: "men",
    type: "Indoor Shoes",
    price: 135,
    sale: false,
    image:
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1000&q=85",
    description:
      "Responsive court-ready cushioning with a low-profile build for quick cuts and fast changes of direction.",
  },
  {
    id: "daily-comfort",
    name: "Daily Comfort",
    category: "women",
    type: "Lifestyle Shoes",
    price: 110,
    sale: false,
    image:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1000&q=85",
    description:
      "Soft, sock-like fit designed for everyday wear, from morning errands to evening walks.",
  },
  {
    id: "velocity-one",
    name: "Velocity One",
    category: "women",
    type: "Running Shoes",
    price: 155,
    sale: false,
    image:
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1000&q=85",
    description:
      "Race-day speed with a carbon-infused plate that returns energy on every stride.",
  },
  {
    id: "flex-ground",
    name: "Flex Ground",
    category: "women",
    type: "Training Shoes",
    price: 130,
    sale: true,
    salePrice: 99,
    image:
      "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=1000&q=85",
    description:
      "Stable, grippy training shoe built to handle lifts, sprints, and everything in between.",
  },
  {
    id: "aero-racer-4",
    name: "Aero Racer 4",
    category: "men",
    type: "Running Shoes",
    price: 160,
    sale: false,
    image:
      "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=1000&q=85",
    description:
      "Speed-focused performance built to push you further, with a featherweight upper and springy foam.",
  },
  {
    id: "velocity-pro-3",
    name: "Velocity Pro 3",
    category: "women",
    type: "Running Shoes",
    price: 150,
    sale: false,
    image:
      "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?auto=format&fit=crop&w=1000&q=85",
    description:
      "Responsive comfort for your fastest training sessions, tuned for long tempo runs.",
  },
  {
    id: "zoom-motion-6",
    name: "Zoom Motion 6",
    category: "men",
    type: "Running Shoes",
    price: 140,
    sale: false,
    image:
      "https://images.unsplash.com/photo-1486218119243-13883505764c?auto=format&fit=crop&w=1000&q=85",
    description:
      "Everyday technology meets comfortable road running, ready for daily miles.",
  },
  {
    id: "strike-elite",
    name: "Strike Elite",
    category: "jordan",
    type: "Football Boots",
    price: 190,
    sale: false,
    image: boot1,
    description:
      "Precision touch and locked-in support for players who create every chance on the pitch.",
  },
  {
    id: "phantom-control",
    name: "Phantom Control",
    category: "jordan",
    type: "Football Boots",
    price: 175,
    sale: false,
    image: boot2,
    description:
      "A textured strike zone built for close control at full speed.",
  },
  {
    id: "speed-motion",
    name: "Speed Motion",
    category: "jordan",
    type: "Football Boots",
    price: 165,
    sale: true,
    salePrice: 129,
    image: boot3,
    description:
      "Ultra-light boot designed for explosive first steps and sharp direction changes.",
  },
  {
    id: "field-pro",
    name: "Field Pro",
    category: "kids",
    type: "Football Boots",
    price: 95,
    sale: false,
    image: boot4,
    description:
      "A junior-fit boot with the same traction pattern as our pro-level pairs, sized down for growing feet.",
  },
  {
    id: "academy-touch",
    name: "Academy Touch",
    category: "kids",
    type: "Football Boots",
    price: 89,
    sale: true,
    salePrice: 65,
    image: boot5,
    description:
      "Durable, easy-care upper built for kids who are on the pitch every day after school.",
  },
  {
    id: "match-ready",
    name: "Match Ready",
    category: "kids",
    type: "Football Boots",
    price: 99,
    sale: false,
    image: boot6,
    description:
      "Match-day comfort with a soft collar and secure lace cage for confident play.",
  },
  {
    id: "jordan-kids-classic",
    name: "Jordan Kids Classic",
    category: "kids",
    type: "Lifestyle Shoes",
    price: 90,
    sale: false,
    image:
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1000&q=90",
    description:
      "Bring serious style to their everyday game with a scaled-down classic build.",
  },
  {
    id: "school-backpack",
    name: "All Access Backpack",
    category: "kids",
    type: "Bags & Backpacks",
    price: 65,
    sale: false,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=90",
    description:
      "A roomy, padded backpack built to carry books, kits, and everything in between.",
  },
  {
    id: "court-classic",
    name: "Court Classic",
    category: "women",
    type: "Lifestyle Shoes",
    price: 115,
    sale: false,
    image:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1000&q=85",
    description:
      "Clean, minimal court style that pairs with everything in your rotation.",
  },
  {
    id: "trail-edge",
    name: "Trail Edge",
    category: "men",
    type: "Hiking Shoes",
    price: 150,
    sale: true,
    salePrice: 112,
    image:
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=1000&q=85",
    description:
      "Lightweight comfort designed for outdoor movement and everyday trails.",
  },
  {
    id: "skims-rib-tee",
    name: "SKIMS Rib Tee",
    category: "women",
    type: "Clothing",
    price: 58,
    sale: false,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1000&q=85",
    description:
      "A soft, ribbed essential built to layer under kits or wear on its own.",
  },
];

export function getProductsByCategory(category) {
  if (category === "sale") {
    return PRODUCTS.filter((product) => product.sale);
  }

  return PRODUCTS.filter((product) => product.category === category);
}

export function getProductById(id) {
  return PRODUCTS.find((product) => product.id === id);
}

export function searchProducts(term) {
  const query = term.trim().toLowerCase();

  if (!query) {
    return [];
  }

  return PRODUCTS.filter(
    (product) =>
      product.name.toLowerCase().includes(query) ||
      product.type.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query)
  );
}

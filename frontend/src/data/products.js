import chukkappi from "../assets/chukkappi.jpg";
import classic from "../assets/classic.jpg";
import green from "../assets/green.jpg";
import masala from "../assets/masala.jpg";

export const productsData = [
  {
    id: 1,
    name: "Cardamom Tea",
    image: chukkappi,
    prices: [
      { size: "250g", price: 125, label: "₹125" },
      { size: "500g", price: 250, label: "₹250" },
    ],
    description: "Experience the rich, aromatic blend of premium Nilgiri tea leaves infused with natural cardamom. Known as 'Elaichi Chai', this blend offers a soothing and fragrant experience, perfect for refreshing your senses after a long day.",
    benefits: ["Rich in antioxidants", "Improves digestion", "Natural breath freshener"],
    category: "Flavored Black Tea"
  },
  {
    id: 2,
    name: "Classic Tea",
    image: classic,
    prices: [
      { size: "250g", price: 130, label: "₹130" },
      { size: "500g", price: 260, label: "₹260" },
    ],
    description: "Our Zyora Classic Tea brings you the unadulterated, bold flavor of handpicked Nilgiri tea leaves. With a robust taste and beautiful golden-amber color, it is the perfect everyday companion for your morning routine.",
    benefits: ["Boosts energy and focus", "Supports heart health", "Great for morning vitality"],
    category: "Pure Black Tea"
  },
  {
    id: 3,
    name: "Green Tea",
    image: green,
    prices: [
      { size: "250g", price: 150, label: "₹150" },
      { size: "500g", price: 300, label: "₹300" },
    ],
    description: "Delicate and highly refreshing, our Green Tea is minimally processed to retain maximum nutrients. It delivers a smooth, earthy taste that rejuvenates your body inside and out.",
    benefits: ["High in EGCG catechins", "Aids in weight management", "Enhances brain function"],
    category: "Green Tea"
  },
  {
    id: 4,
    name: "Masala Tea",
    image: masala,
    prices: [
      { size: "250g", price: 140, label: "₹140" },
      { size: "500g", price: 280, label: "₹280" },
    ],
    description: "A warming and spicy blend of classic black tea mixed with traditional Indian spices including ginger, clove, cinnamon, and black pepper. Our Masala Tea is the ultimate comfort drink for cold mornings or rainy evenings.",
    benefits: ["Boosts immunity", "Reduces inflammation", "Relieves cold symptoms"],
    category: "Spiced Tea"
  },
];

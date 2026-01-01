import ProductList from "../components/ProductList";

const Products = [
  {
    id: 1,
    name: "Apple iPhone 15 Pro",
    price: 4399,
    image: "https://m.media-amazon.com/images/I/81Sig84AMNL._AC_SL1500_.jpg",
    rating: 4.6,
    description: "The latest iPhone featuring a strong and lightweight aerospace-grade titanium design with A17 Pro chip."
  },
  {
    id: 2,
    name: "Logitech G502 HERO",
    price: 185,
    image: "https://m.media-amazon.com/images/I/51IOp89J7dL._AC_SL1500_.jpg",
    rating: 4.8,
    description: "High-performance wired gaming mouse with HERO 25K sensor, 11 programmable buttons, and adjustable weights."
  },
  {
    id: 3,
    name: "Sony WH-1000XM5",
    price: 1450,
    image: "https://m.media-amazon.com/images/I/61S9aVn99+L._AC_SL1500_.jpg",
    rating: 4.7,
    description: "Industry-leading noise canceling headphones with two processors controlling 8 microphones for exceptional sound."
  },
  {
    id: 4,
    name: "Samsung Galaxy Watch 6",
    price: 999,
    image: "https://m.media-amazon.com/images/I/61U0T-VAnGL._AC_SL1500_.jpg",
    rating: 4.5,
    description: "Advanced smartwatch with fitness tracking, personalized heart rate zones, and improved sleep coaching."
  },
  {
    id: 5,
    name: "MacBook Pro M3",
    price: 7499,
    image: "https://m.media-amazon.com/images/I/6166O-f8NfL._AC_SL1500_.jpg",
    rating: 4.9,
    description: "The most advanced chips ever built for a personal computer, featuring stunning Liquid Retina XDR display."
  },
  {
    id: 6,
    name: "Kindle Paperwhite",
    price: 650,
    image: "https://m.media-amazon.com/images/I/719f6X9fS2L._AC_SL1500_.jpg",
    rating: 4.7,
    description: "Now with a 6.8-inch display and thinner borders, adjustable warm light, and up to 10 weeks of battery life."
  },
  {
    id: 7,
    name: "PlayStation 5 Console",
    price: 2199,
    image: "https://m.media-amazon.com/images/I/619BkvFu35L._AC_SL1500_.jpg",
    rating: 4.9,
    description: "Experience lightning-fast loading with an ultra-high speed SSD and deeper immersion with haptic feedback."
  },
  {
    id: 8,
    name: "AirPods Pro (2nd Gen)",
    price: 899,
    image: "https://m.media-amazon.com/images/I/61SUj2W5yYL._AC_SL1500_.jpg",
    rating: 4.8,
    description: "Features up to 2x more Active Noise Cancellation, plus Adaptive Transparency and Personalized Spatial Audio."
  },
  {
    id: 9,
    name: "Nintendo Switch OLED",
    price: 1350,
    image: "https://m.media-amazon.com/images/I/71u9S+Jue4L._AC_SL1500_.jpg",
    rating: 4,
    description: "Play at home on the TV or on-the-go with a vibrant 7-inch OLED screen and enhanced audio."
  },
  {
    id: 10,
    name: "Dyson V15 Detect",
    price: 2800,
    image: "https://m.media-amazon.com/images/I/61vYf65pSBL._AC_SL1500_.jpg",
    rating: 2.6,
    description: "The most powerful, intelligent cordless vacuum with laser illumination to reveal microscopic dust."
  },
  {
    id: 11,
    name: "iPad Air M2",
    price: 2499,
    image: "https://m.media-amazon.com/images/I/71VbHaAqbML._AC_SL1500_.jpg",
    rating: 4.7,
    description: "Powerful iPad Air with M2 chip, 12MP Ultra Wide front camera, and superfast Wi-Fi 6E."
  },
  {
    id: 12,
    name: "GoPro HERO12 Black",
    price: 1550,
    image: "https://m.media-amazon.com/images/I/51R6m7L7r7L._AC_SL1500_.jpg",
    rating: 4.5,
    description: "Incredible image quality, even better HyperSmooth video stabilization and a huge boost in battery performance."
  },
  {
    id: 13,
    name: "Razer BlackWidow V4",
    price: 750,
    image: "https://m.media-amazon.com/images/I/718D-o66T4L._AC_SL1500_.jpg",
    rating: 3.6,
    description: "Mechanical gaming keyboard with Razer Chroma RGB, dedicated macro keys, and plush leatherette wrist rest."
  },
  {
    id: 14,
    name: "Bose SoundLink Revolve+",
    price: 1100,
    image: "https://m.media-amazon.com/images/I/7182m-CInBL._AC_SL1500_.jpg",
    rating: 4.7,
    description: "The best-performing portable Bluetooth speaker from Bose, delivering deep, loud and immersive 360-degree sound."
  },
  {
    id: 15,
    name: "DJI Mini 4 Pro",
    price: 3800,
    image: "https://m.media-amazon.com/images/I/61f2LhWjLAL._AC_SL1500_.jpg",
    rating: 4.8,
    description: "Advanced mini drone with 4K HDR video, omnidirectional obstacle sensing, and 34-minute flight time."
  },
  {
    id: 16,
    name: "ASUS ROG Swift Monitor",
    price: 2900,
    image: "https://m.media-amazon.com/images/I/81NOn4p2S6L._AC_SL1500_.jpg",
    rating: 4.7,
    description: "27-inch QHD gaming monitor with 240Hz refresh rate and 1ms response time for professional gaming."
  },
  {
    id: 17,
    name: "Xbox Series X",
    price: 2050,
    image: "https://m.media-amazon.com/images/I/51p6vM8493L._AC_SL1500_.jpg",
    rating: 4,
    description: "The fastest, most powerful Xbox ever. Explore rich new worlds with 12 teraflops of raw graphic processing power."
  },
  {
    id: 18,
    name: "Western Digital 2TB SSD",
    price: 620,
    image: "https://m.media-amazon.com/images/I/61p-k8I0GPL._AC_SL1500_.jpg",
    rating: 2.8,
    description: "High-performance NVMe internal SSD for gaming and intensive creative applications with super-fast load times."
  }
];

const Home = ()=> {
return(
    <div className="container mt-4">
        <h2 className="mb-4 mt-5 text-center">Our Products</h2>
        <ProductList products={Products}/>
    </div>
)

};
export default Home;
import { useState } from "react";
import ProductList from "../components/ProductList";

const Products = [
  {
    id: 1,
    name: "Apple iPhone 15 Pro",
    price: 4399,
    image:
      "https://benks.com.tr/cdn/shop/files/apple-iphone-15-pro-max-kilif-magsafe-sarj-ozellikli-airbagli-seffaf-benks-lucentpro-serisi-kapak-7637.jpg?v=1738356938&width=1214",
    rating: 4.6,
    description:
      "The latest iPhone featuring a strong and lightweight aerospace-grade titanium design with A17 Pro chip.",
  },
  {
    id: 2,
    name: "Logitech G502 HERO",
    price: 185,
    image:
      "https://cdn.akakce.com/z/logitech/logitech-g502-hero-k-da-rgb-kablolu-oyuncu.jpg",
    rating: 4.8,
    description:
      "High-performance wired gaming mouse with HERO 25K sensor, 11 programmable buttons, and adjustable weights.",
  },
  {
    id: 3,
    name: "Sony WH-1000XM5",
    price: 1450,
    image:
      "https://sonyworld.qa/cdn/shop/files/1_WH-1000XM5_standard_smokypink-Large_707d7e02-993b-4e38-96a3-d107efa9cd42.jpg?v=1728287183&width=1080",
    rating: 4.7,
    description:
      "Industry-leading noise canceling headphones with two processors controlling 8 microphones for exceptional sound.",
  },
  {
    id: 4,
    name: "Samsung Galaxy Watch 6",
    price: 999,
    image:
      "https://cdn.akakce.com/z/samsung/samsung-galaxy-watch-6-classic-43mm.jpg",
    rating: 4.5,
    description:
      "Advanced smartwatch with fitness tracking, personalized heart rate zones, and improved sleep coaching.",
  },
  {
    id: 5,
    name: "MacBook Pro M3",
    price: 7499,
    image: "https://techcrunch.com/wp-content/uploads/2023/11/CMC_7492.jpg",
    rating: 4.9,
    description:
      "The most advanced chips ever built for a personal computer, featuring stunning Liquid Retina XDR display.",
  },
  {
    id: 6,
    name: "Kindle Paperwhite",
    price: 650,
    image:
      "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/hermano/verge/product/image/10341/247464_Kindle_Paperwhite_ALiszewski_0002.jpg?quality=90&strip=all&crop=16.666666666667%2C0%2C66.666666666667%2C100&w=2400",
    rating: 4.7,
    description:
      "Now with a 6.8-inch display and thinner borders, adjustable warm light, and up to 10 weeks of battery life.",
  },
  {
    id: 7,
    name: "PlayStation 5 Console",
    price: 2199,
    image:
      "https://productimages.hepsiburada.net/s/777/375-375/110000644409660.jpg",
    rating: 4.9,
    description:
      "Experience lightning-fast loading with an ultra-high speed SSD and deeper immersion with haptic feedback.",
  },
  {
    id: 8,
    name: "AirPods Pro (2nd Gen)",
    price: 899,
    image:
      "https://applepalace.shop/wp-content/uploads/2023/12/9bd01eab-12e7-4d30-bce1-36d48b253c9a.jpg",
    rating: 4.8,
    description:
      "Features up to 2x more Active Noise Cancellation, plus Adaptive Transparency and Personalized Spatial Audio.",
  },
  {
    id: 9,
    name: "Nintendo Switch OLED",
    price: 1350,
    image:
      "https://reimg-teknosa-cloud-prod.mncdn.com/mnresize/600/600/productimage/125085896/125085896_0_MC/9d7b18ff.jpg",
    rating: 4,
    description:
      "Play at home on the TV or on-the-go with a vibrant 7-inch OLED screen and enhanced audio.",
  },
  {
    id: 10,
    name: "Dyson V15 Detect",
    price: 2800,
    image:
      "https://cdn.akakce.com/_static/387082046/dyson-v15-detect-total-clean-aparatlari.jpg",
    rating: 2.6,
    description:
      "The most powerful, intelligent cordless vacuum with laser illumination to reveal microscopic dust.",
  },
  {
    id: 11,
    name: "iPad Air M2",
    price: 2499,
    image:
      "https://st-troy.mncdn.com/mnresize/775/775/Content/media/ProductImg/original/mv6q3tua-apple-13-inc-ipad-air-m2-wi-fi-cellular-128gb-uzay-grisi-mv6q3tua-638509403384840475.jpg",
    rating: 4.7,
    description:
      "Powerful iPad Air with M2 chip, 12MP Ultra Wide front camera, and superfast Wi-Fi 6E.",
  },
  {
    id: 12,
    name: "GoPro HERO12 Black",
    price: 1550,
    image:
      "https://productimages.hepsiburada.net/s/466/375-375/110000503053701.jpg",
    rating: 4.5,
    description:
      "Incredible image quality, even better HyperSmooth video stabilization and a huge boost in battery performance.",
  },
  {
    id: 13,
    name: "Razer BlackWidow V4",
    price: 750,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScv8TiKHG1aH0cmRJdwbdlvysoATLKj2e7Xw&s",
    rating: 3.6,
    description:
      "Mechanical gaming keyboard with Razer Chroma RGB, dedicated macro keys, and plush leatherette wrist rest.",
  },
  {
    id: 14,
    name: "Bose SoundLink Revolve+",
    price: 1100,
    image:
      "https://i.rtings.com/assets/products/Q2ZVSu87/bose-soundlink-revolve-plus-ii/design-medium.jpg?format=auto",
    rating: 4.7,
    description:
      "The best-performing portable Bluetooth speaker from Bose, delivering deep, loud and immersive 360-degree sound.",
  },
  {
    id: 15,
    name: "DJI Mini 4 Pro",
    price: 3800,
    image: "https://m.media-amazon.com/images/I/61uXaDuE-iL.jpg",
    rating: 4.8,
    description:
      "Advanced mini drone with 4K HDR video, omnidirectional obstacle sensing, and 34-minute flight time.",
  },
  {
    id: 16,
    name: "ASUS ROG Swift Monitor",
    price: 2900,
    image:
      "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/asus/thumb/144567-1_large.jpg",
    rating: 4.7,
    description:
      "27-inch QHD gaming monitor with 240Hz refresh rate and 1ms response time for professional gaming.",
  },
  {
    id: 17,
    name: "Xbox Series X",
    price: 2050,
    image:
      "https://as6eaty9uqeg.merlincdn.net/Resim/Minik/1500x1500_thumb_xbox07.jpg?v=1",
    rating: 4,
    description:
      "The fastest, most powerful Xbox ever. Explore rich new worlds with 12 teraflops of raw graphic processing power.",
  },
  {
    id: 18,
    name: "Western Digital 2TB SSD",
    price: 620,
    image: "https://static.sinerji.gen.tr/Images/MD/MNF-dq2wd.jpg",
    rating: 2.8,
    description:
      "High-performance NVMe internal SSD for gaming and intensive creative applications with super-fast load times.",
  },
];

const Home = () => {
  const [searchTerm, seatSerchTerm] = useState("");
const filteredProducts = Products.filter((product)=>
product.name.toLowerCase().includes(searchTerm.toLowerCase()))
  return (
    <div className="container mt-4">


      <h2 className="mb-4 mt-5 text-center">Our Products</h2>


      <div className="mb-4">
<input type="text"
className="form-control" placeholder="Search for products..."
value={searchTerm}
onChange={(e)=> seatSerchTerm(e.target.value)} />

      </div>
      <ProductList products={filteredProducts} />
    </div>
  );
};
export default Home;

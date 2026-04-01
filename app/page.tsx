'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion,Variants } from "framer-motion";

import { FaWhatsapp } from "react-icons/fa";
import {
  Leaf,
  Droplet,
  TrendingUp,
  Zap,
  Award,
  Truck,
  MessageCircle,
  Menu,
  X,
} from 'lucide-react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [current, setCurrent] = useState(0);
  // ✅ CONTENT (ALL PRODUCTS)
  const heroContent = [
    {
      title: "Premium Vermicompost",
      highlight: "for Healthy Soil",
      desc: "100% organic compost made from cow dung to improve soil fertility.",
      image: "/hero1.jpg"
    },
    {
      title: "Natural Red Soil",
      highlight: "for Strong Roots",
      desc: "Fertile and nutrient-rich soil ideal for all types of plants.",
      image: "/red soi.webp"
    },
    {
      title: "Live Earthworms",
      highlight: "for Soil Health",
      desc: "Improve soil aeration and boost natural plant growth.",
      image: "/hero2.webp"
    },
    {
      title: "Potting Mix Sand",
      highlight: "for Better Drainage",
      desc: "Prevents waterlogging and ensures healthy root development.",
      image: "/mixsand.webp"
    }
  ];
const slideLeft: Variants= {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const slideRight: Variants = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.2   // 🔥 slight delay for premium feel
    }
  }
};

const slideUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};
const cardReveal: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};
  useEffect(() => {
    const interval = setInterval(() => {
     setCurrent((prev) => (prev + 1) % heroContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      'Hello! I would like to know more about your vermi compost products and place an order.'
    );
   window.open(
    `https://wa.me/918317449865?text=${message}`,
    "_blank");
  };

  const nextSlide = () => {
  setCurrent((prev) => (prev + 1) % heroContent.length);
};

const prevSlide = () => {
  setCurrent((prev) =>
    prev === 0 ? heroContent.length - 1 : prev - 1
  );
};

   return (

   <div className="min-h-screen bg-background text-foreground pt-[72px]">

<nav className="fixed top-0 inset-x-0 z-50">
  
  <div className="w-full">
    
    <div className="flex items-center justify-between h-[90px] px-5 md:px-8 
bg-white/95 backdrop-blur-md shadow-md border-b border-gray-200">

      {/* LOGO (BIGGER) */}
     <div className="flex items-center h-full">
  <Image
    src="/1.png"
    alt="Agrivyn"
    width={220}
    height={80}
    className="h-18 sm:h-20 md:h-30 w-auto object-contain mt-1"
    priority
  />
</div>

      {/* MENU */}
      <div className="hidden md:flex items-center gap-10 text-[20px] font-medium text-gray-700">

        {["Home", "About", "Products", "Benefits"].map((item, i) => (
          <a
            key={i}
            href={`#${item.toLowerCase()}`}
            className="relative group hover:text-green-600 transition"
          >
            {item}
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}

      </div>

      {/* BUTTON (BIGGER) */}
      <div className="hidden md:flex">
     <button
  onClick={handleWhatsAppClick}
  className="bg-black text-white px-9 py-3 text-lg rounded-full font-semibold 
  hover:bg-green-600 transition shadow-md"
>
  Order Now
</button>
      </div>

      {/* MOBILE */}
      <button
        className="md:hidden text-3xl"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? "✕" : "☰"}
      </button>

    </div>

    {/* MOBILE MENU */}
    {mobileMenuOpen && (
      <div className="md:hidden bg-white shadow-lg p-5">

        <div className="flex flex-col items-center gap-5 text-base font-medium text-gray-700">

          {["Home", "About", "Products", "Benefits"].map((item, i) => (
            <a
              key={i}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}

          <button
            onClick={() => {
              handleWhatsAppClick();
              setMobileMenuOpen(false);
            }}
            className="bg-black text-white px-6 py-3 rounded-full w-full"
          >
            Order Now
          </button>

        </div>

      </div>
    )}

  </div>
</nav>

      {/* Hero Section */}
     {/* Hero Section */}
<section id="home" className=" scroll-mt-24 relative h-screen overflow-hidden flex items-center justify-center text-white">

  {/* Single Background Image */}
  <div className="absolute inset-0">
    <Image
      key={current} // VERY IMPORTANT (forces image change cleanly)
      src={heroContent[current].image}
      alt="Agrivyn"
      fill
      priority
      className="object-cover animate-zoom"
    />
    <div className="absolute inset-0 bg-black/60"></div>
  </div>
  {/* Left Arrow */}
<button
  onClick={prevSlide}
  className="absolute left-5 md:left-10 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-md transition"
>
  <ChevronLeft size={40} />
</button>

{/* Right Arrow */}
<button
  onClick={nextSlide}
  className="absolute right-5 md:right-10 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-md transition"
>
  <ChevronRight size={40} />
</button>

  {/* Content */}
 <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="relative z-10 text-center px-6 max-w-3xl"
>

    <h2 className="text-green-500 uppercase tracking-[0.3em] text-sm mb-4">
      AGRIVYN
    </h2>
<p className="text-green-400 uppercase tracking-widest text-sm mb-3">
  Rooted in Nature. Driven by Growth.
</p>
    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
     {heroContent[current % heroContent.length].title}
      <br />
      <span className="text-yellow-400">
        {heroContent[current % heroContent.length].highlight}
      </span>
    </h1>

    <p className="mt-4 text-lg text-gray-300">
      {heroContent[current % heroContent.length].desc}
    </p>

    <div className="mt-8">
      <Button
        onClick={handleWhatsAppClick}
        className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full text-lg"
      >
        <MessageCircle className="w-5 h-5 mr-2" />
        Contact Us
      </Button>
      
    </div>

 </motion.div>
  
</section>






      



{/* Welcome + About Section */}
<motion.section
  id="about"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  transition={{ staggerChildren: 0.2 }}
  className="py-24 scroll-mt-24 bg-gradient-to-b from-background to-green-50"
>
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

    {/* LEFT CONTENT */}
    <motion.div
  variants={slideLeft}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>

      <motion.h3
        variants={slideUp}
        className="text-green-600 uppercase tracking-[0.3em] text-sm mb-4"
      >
        Welcome to Agrivyn
      </motion.h3>

      <motion.h2
        variants={slideUp}
        className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight"
      >
        Complete Organic Growing Solutions
        <br />
        <span className="text-green-600">
          for Healthy Plants & Soil
        </span>
      </motion.h2>

      <motion.p variants={slideUp} className="text-lg mb-5">
        Agrivyn provides high-quality organic products including vermicompost,
        red soil, earthworms, and potting mix essentials.
      </motion.p>

      <motion.p variants={slideUp} className="text-lg mb-8">
        Whether you are a farmer, home gardener, or nursery owner, our products
        help you grow stronger, healthier plants.
      </motion.p>

      {/* CARDS (ANIMATED) */}
      <div className="grid grid-cols-2 gap-5">
  {["100% Organic", "Chemical Free", "Nutrient Rich", "Improves Yield"].map((item, i) => (
    <motion.div
      key={i}
      variants={slideUp}
      whileHover={{ scale: 1.05 }}
      className="bg-white shadow-md rounded-xl p-4 hover:shadow-xl transition"
    >
      <p className="text-green-600 font-semibold text-lg">
        ✔ {item}
      </p>
    </motion.div>
  ))}
</div>

    </motion.div>

    {/* RIGHT IMAGE (ANIMATED) */}
  <motion.div
  variants={slideRight}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="relative group"
>

      <div className="absolute -inset-2 bg-green-400/20 blur-2xl rounded-2xl"></div>

      <Image
        src="/garden3.avif"
        alt="Agrivyn Vermicompost"
        width={550}
        height={420}
        className="relative rounded-2xl shadow-2xl object-cover transform group-hover:scale-105 transition duration-500"
      />

    </motion.div>

  </div>
</motion.section>
     
     
     
     
<motion.section
  id="benefits"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  transition={{ staggerChildren: 0.2 }}
  className="py-28 bg-gradient-to-b from-green-50 via-white to-background"
>

  <div className="max-w-7xl mx-auto px-6">

    {/* HEADING */}
    <motion.div variants={slideUp} className="text-center mb-20">

      <h2 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
        Why Choose <span className="text-green-600">Agrivyn Organic Solutions</span>?
      </h2>

      <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
        Improve soil health, enhance plant growth, and achieve better results with our complete range of organic products.
      </p>

    </motion.div>

    {/* IMAGE CARDS (LEFT + RIGHT ANIMATION) */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">

      {[
        {
          img: "/benefit-1.avif",
          icon: <Droplet className="w-8 h-8" />,
          title: "Better Water Retention",
          desc: "Maintains soil moisture and reduces frequent watering.",
        },
        {
          img: "/benefit-2.webp",
          icon: <TrendingUp className="w-8 h-8" />,
          title: "Faster Plant Growth",
          desc: "Boosts healthy growth with nutrient-rich organic inputs.",
        },
        {
          img: "/benefit-3.webp",
          icon: <Leaf className="w-8 h-8" />,
          title: "Improves Soil Health",
          desc: "Enhances soil structure and microbial activity naturally.",
        },
        {
          img: "/benefit-4.jpg",
          icon: <Zap className="w-8 h-8" />,
          title: "Eco-Friendly Solution",
          desc: "Safe, sustainable, and chemical-free for all crops.",
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          variants={cardReveal}
          whileHover={{ scale: 1.05 }}
          className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500"
        >

          {/* IMAGE */}
          <Image
  src={item.img}
  alt={item.title}
  width={400}
  height={300}
  sizes="(max-width: 768px) 100vw, 25vw"
  className="h-56 w-full object-cover group-hover:scale-110 transition duration-700"
/>

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition"></div>

          {/* CONTENT */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">

            <div className="mb-3 text-green-400">
              {item.icon}
            </div>

            <h3 className="text-lg font-semibold mb-2">
              {item.title}
            </h3>

            <p className="text-sm opacity-90">
              {item.desc}
            </p>

          </div>

        </motion.div>
      ))}

    </div>

    {/* GLASS CARDS (STAGGER POP UP) */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {[
        {
          icon: <Award className="w-10 h-10" />,
          title: "Premium Quality",
          desc: "High-quality organic products for best performance.",
        },
        {
          icon: <Zap className="w-10 h-10" />,
          title: "Affordable Pricing",
          desc: "Cost-effective solutions for farmers and gardeners.",
        },
        {
          icon: <Truck className="w-10 h-10" />,
          title: "Fast Delivery",
          desc: "Reliable and timely delivery to your location.",
        },
        {
          icon: <Leaf className="w-10 h-10" />,
          title: "Wide Product Range",
          desc: "Vermicompost, red soil, earthworms, and more.",
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          variants={slideUp}
          whileHover={{ scale: 1.05 }}
          className="group bg-white/70 backdrop-blur-md border border-green-100 rounded-2xl p-8 text-center shadow-md hover:shadow-2xl transition duration-300"
        >

          <div className="flex justify-center mb-4 text-green-600 group-hover:scale-110 transition">
            {item.icon}
          </div>

          <h3 className="text-xl font-semibold mb-3">
            {item.title}
          </h3>

          <p className="text-gray-600 text-sm">
            {item.desc}
          </p>

        </motion.div>
      ))}

    </div>

  </div>

</motion.section>


<section className="scroll-mt-24 bg-green-900 overflow-hidden">

  <div className="whitespace-nowrap py-10"> {/* increased height */}

    <div className="animate-marquee flex items-center gap-20 text-white text-xl md:text-2xl font-semibold tracking-wide">

      <span>🌿 Rooted in Nature</span>
      <span>🌱 Driven by Growth</span>
      <span>🌾 Pure Soil. Pure Growth</span>
      <span>🌿 Grow Naturally</span>
      <span>🌍 Healthy Soil, Healthy Life</span>

      {/* repeat */}
      <span>🌿 Rooted in Nature</span>
      <span>🌱 Driven by Growth</span>
      <span>🌾 Pure Soil. Pure Growth</span>
      <span>🌿 Grow Naturally</span>
      <span>🌍 Healthy Soil, Healthy Life</span>

    </div>

  </div>

</section>

















<motion.section
  id="products"
  variants={slideLeft}
  initial="hidden"
  whileInView="visible"
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
  className="py-24 bg-gray-50"
>

  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">
        Our <span className="text-green-600">Products</span>
      </h2>
      <p className="mt-4 text-lg text-gray-600">
        Explore our range of organic solutions for healthy plant growth.
      </p>
    </div>

    {/* Product Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

      {[
        {
          name: "Vermicompost",
          img: "/comp.png",
          desc: "Rich organic compost that improves soil fertility and plant growth.",
        },
        {
          name: "Red Soil",
          img: "/redsoil.png",
          desc: "Natural fertile soil ideal for all types of plants and crops.",
        },
        {
          name: "Earthworms",
          img: "/earth.png",
          desc: "Enhances soil aeration and supports organic farming.",
        },
        {
          name: "Potting Mix Sand",
          img: "/sandmix.jpg",
          desc: "Improves drainage and prevents waterlogging in plants.",
        },
      ].map((product, i) => (

        <motion.div
  key={i}
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: i * 0.1 }}
  viewport={{ once: true }}
  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 group"
>

          {/* Image */}
          <div className="overflow-hidden">
            <img
              src={product.img}
              className="h-56 w-full object-cover group-hover:scale-110 transition duration-500"
            />
          </div>

          {/* Content */}
          <div className="p-6 text-center">

            <h3 className="text-xl font-semibold mb-3">
              {product.name}
            </h3>

            <p className="text-gray-600 text-sm mb-5">
              {product.desc}
            </p>

            {/* WhatsApp Button */}
           

          </div>

        </motion.div>
        

      ))}

    </div>
<div className="text-center mt-16">
  <button
    onClick={() => {
      const message = encodeURIComponent(
        "Hello! I would like to know more about Agrivyn products and place an order."
      );
      window.open(`https://wa.me/918317449865?text=${message}`, "_blank");
    }}
    className="bg-green-600 hover:bg-green-700 px-10 py-4 rounded-full text-lg font-semibold shadow-lg transition transform hover:scale-105 active:scale-95"
    >
    Order Now
  </button>
</div>
  </div>

</motion.section>





      {/* Floating WhatsApp Button */}
   <button
  onClick={handleWhatsAppClick}
  className="fixed bottom-6 right-6 z-50 flex items-center gap-2 
  bg-[#25D366] hover:bg-green-700 
  text-white px-5 py-3 md:px-6 md:py-4 
  rounded-full shadow-xl hover:shadow-2xl 
  transition-all duration-300 
  transform hover:scale-105"
>
  {/* REAL WHATSAPP ICON */}
  <FaWhatsapp className="w-7 h-7 md:w-8 md:h-8" />

  {/* TEXT */}
  
</button>

<div className="fixed bottom-6 right-6 z-40">
  <div className="w-16 h-16 bg-green-500 rounded-full opacity-30 animate-ping"></div>
</div>


<footer className="relative text-gray-200">

  {/* BACKGROUND IMAGE */}
  <div className="absolute inset-0">
    <Image
      src="/footer-bg.jpg"   // 🔥 add this image in public folder
      alt="footer background"
      fill
      className="object-cover"
    />
    <div className="absolute inset-0 bg-[#1f2a1f]/90 backdrop-blur-sm"></div>
  </div>

  {/* CONTENT */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="relative max-w-7xl mx-auto px-6 md:px-10 py-20"
  >

    {/* GRID */}
    <div className="grid md:grid-cols-3 gap-12 items-start">

      {/* LEFT - BRAND */}
      <div>
        <Image
          src="/2.png"
          alt="Agrivyn"
          width={170}
          height={60}
          className="mb-5"
        />

        <p className="text-gray-300 leading-relaxed mb-5">
          Soil & organic growing solutions including vermicompost, red soil,
          earthworms, and potting mix for healthy plant growth.
        </p>

        <p className="text-green-400 font-semibold tracking-wide">
          Rooted in Nature. Driven by Growth.
        </p>
      </div>

      {/* CENTER - QUICK LINKS */}
      <div>
        <h4 className="text-xl font-semibold mb-5 text-white">
          Quick Links
        </h4>

        <div className="flex flex-col gap-3 text-gray-300">

          {["Home", "About", "Products", "Benefits"].map((item, i) => (
            <a
              key={i}
              href={`#${item.toLowerCase()}`}
              className="hover:text-green-400 transition duration-300"
            >
              {item}
            </a>
          ))}

        </div>
      </div>

      {/* RIGHT - CONTACT */}
      <div>
        <h4 className="text-xl font-semibold mb-5 text-white">
          Contact
        </h4>

        <div className="space-y-3 text-gray-300">
          <p>📞 +91 8317449865</p>
          <p>📧 orders@agrivyn.com</p>
          <p>🌐 agrivyn.com</p>
          <p>📸 @agrivyn</p>
        </div>

        {/* BUTTON */}
        <div className="mt-6">
          <button
            onClick={handleWhatsAppClick}
            className="bg-gradient-to-r from-green-500 to-green-700 
            hover:from-green-600 hover:to-green-800
            px-8 py-3 rounded-full text-lg font-semibold shadow-lg 
            transition transform hover:scale-105"
          >
            Order on WhatsApp
          </button>
        </div>
      </div>

    </div>

    {/* DIVIDER */}
    <div className="border-t border-white/20 mt-14 pt-6 text-center text-sm text-gray-400">
      © {new Date().getFullYear()} Agrivyn. All Rights Reserved.
    </div>

  </motion.div>
</footer>
    </div>
  );
}

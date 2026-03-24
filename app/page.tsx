'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % 2);
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
   return (

    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
     <nav className="fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur-md shadow-md">
  <div className="max-w-7xl mx-auto px-6 md:px-8">
    <div className="flex items-center justify-between h-20"> {/* FIXED height */}

      {/* Logo */}
      <div className="flex items-center gap-3">
        <Image
          src="/agrivyn-logo.jpeg"
          alt="Agrivyn"
          width={140}
          height={40}
          priority
        />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 text-lg font-medium text-gray-700">
        <a href="#home" className="hover:text-green-600">Home</a>
        <a href="#about" className="hover:text-green-600">About</a>
        <a href="#products" className="hover:text-green-600">Products</a>
        <a href="#benefits" className="hover:text-green-600">Benefits</a>
      </div>

      {/* Desktop Button */}
      <div className="hidden md:flex">
        <button
          onClick={handleWhatsAppClick}
          className="bg-green-600 hover:bg-green-700 text-white text-lg font-semibold px-5 py-2 rounded-full shadow"
        >
          Order
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-3xl"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        ☰
      </button>

    </div>

    {/* Mobile Dropdown Menu */}
   {mobileMenuOpen && (
  <div className="md:hidden bg-white shadow-lg rounded-2xl mt-4 p-6">

    <div className="flex flex-col items-center space-y-5 text-lg font-semibold text-gray-700">

      <a href="#home" onClick={() => setMobileMenuOpen(false)}>
        Home
      </a>

      <a href="#about" onClick={() => setMobileMenuOpen(false)}>
        About
      </a>

      <a href="#products" onClick={() => setMobileMenuOpen(false)}>
        Products
      </a>

      <a href="#benefits" onClick={() => setMobileMenuOpen(false)}>
        Benefits
      </a>

      {/* Button */}
      <button
        onClick={() => {
          handleWhatsAppClick();
          setMobileMenuOpen(false);
        }}
        className="bg-green-600 text-white px-6 py-3 rounded-full w-full mt-4"
      >
        Order on WhatsApp
      </button>

    </div>

  </div>
)}

  </div>
</nav>
      {/* Hero Section */}
     {/* Hero Section */}
<section id="home" className="relative h-screen overflow-hidden flex items-center justify-center text-white">

  {/* Single Background Image */}
  <div className="absolute inset-0">
    <Image
      key={current} // VERY IMPORTANT (forces image change cleanly)
      src={current === 0 ? "/hero1.jpg" : "/hero2.webp"}
      alt="Agrivyn"
      fill
      priority
      className="object-cover animate-zoom"
    />
    <div className="absolute inset-0 bg-black/60"></div>
  </div>

  {/* Content */}
  <div className="relative z-10 text-center px-6 max-w-3xl">

    <h2 className="text-green-500 uppercase tracking-[0.3em] text-sm mb-4">
      AGRIVYN
    </h2>

    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
      {current === 0 ? "Premium Vermicompost" : "Grow Better Plants"}
      <br />
      <span className="text-yellow-400">
        {current === 0 ? "for Healthy Soil" : "Naturally & Effectively"}
      </span>
    </h1>

    <p className="mt-4 text-lg text-gray-300">
      {current === 0
        ? "100% organic compost made from cow dung to improve soil fertility."
        : "Enhance plant growth with nutrient-rich and chemical-free compost."}
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

  </div>
</section>

      {/* About Section */}
    {/* Welcome + About Section */}
{/* Welcome + About Section */}
<section id="about" className="py-24 bg-gradient-to-b from-background to-green-50">

  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

    {/* LEFT CONTENT */}
    <div>

      {/* Small Title */}
      <h3 className="text-green-600 uppercase tracking-[0.3em] text-sm mb-4">
        Welcome to Agrivyn
      </h3>

      {/* Main Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6 leading-tight">
        Premium Organic Vermicompost
        <br />
        <span className="text-green-600">for Sustainable Farming</span>
      </h2>

      {/* Description */}
      <p className="text-lg text-muted-foreground mb-5 leading-relaxed">
        At Agrivyn, we produce high-quality vermicompost using natural cow dung
        and eco-friendly processes. Our compost enriches soil fertility and
        supports healthy plant growth without harmful chemicals.
      </p>

      <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
        Designed for farmers, gardeners, and nurseries, our product helps
        improve yield while maintaining soil health for long-term sustainability.
      </p>

      {/* Highlights Cards */}
      <div className="grid grid-cols-2 gap-5">

        <div className="bg-white shadow-md rounded-xl p-4 hover:shadow-xl transition">
          <p className="text-green-600 font-semibold text-lg">✔ 100% Organic</p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-4 hover:shadow-xl transition">
          <p className="text-green-600 font-semibold text-lg">✔ Chemical Free</p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-4 hover:shadow-xl transition">
          <p className="text-green-600 font-semibold text-lg">✔ Nutrient Rich</p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-4 hover:shadow-xl transition">
          <p className="text-green-600 font-semibold text-lg">✔ Improves Yield</p>
        </div>

      </div>

    </div>

    {/* RIGHT IMAGE */}
    <div className="relative group">

      {/* Glow Background */}
      <div className="absolute -inset-2 bg-green-400/20 blur-2xl rounded-2xl"></div>

      <Image
        src="/compost-about.jpg"
        alt="Agrivyn Vermicompost"
        width={550}
        height={420}
        className="relative rounded-2xl shadow-2xl object-cover transform group-hover:scale-105 transition duration-500"
      />

    </div>

  </div>

</section>

     
     
     
     

   <section id="benefits" className="py-28 bg-gradient-to-b from-green-50 via-white to-background">

  <div className="max-w-7xl mx-auto px-6">

    {/* MAIN HEADING */}
    <div className="text-center mb-20">
      <h2 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
        Why Choose <span className="text-green-600">Agrivyn Vermicompost</span>?
      </h2>
      <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
        Improve soil health, increase crop yield, and grow naturally with our premium organic compost.
      </p>
    </div>

    {/* BENEFITS (IMAGE CARDS WITH OVERLAY) */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">

      {[
        {
          img: "/benefit-1.avif",
          icon: <Droplet className="w-8 h-8" />,
          title: "Retains Moisture",
          desc: "Improves water retention and reduces irrigation needs.",
        },
        {
          img: "/benefit-2.webp",
          icon: <TrendingUp className="w-8 h-8" />,
          title: "Increases Yield",
          desc: "Boosts plant growth and crop productivity naturally.",
        },
        {
          img: "/benefit-3.webp",
          icon: <Leaf className="w-8 h-8" />,
          title: "Improves Fertility",
          desc: "Enriches soil with nutrients and microbial activity.",
        },
        {
          img: "/benefit-4.jpg",
          icon: <Zap className="w-8 h-8" />,
          title: "Eco-Friendly",
          desc: "100% natural and sustainable farming solution.",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500"
        >

          {/* Image */}
          <img
            src={item.img}
            className="h-56 w-full object-cover group-hover:scale-110 transition duration-700"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition"></div>

          {/* Content */}
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

        </div>
      ))}

    </div>

    {/* WHY CHOOSE US (GLASS STYLE CARDS) */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {[
        {
          icon: <Award className="w-10 h-10" />,
          title: "Premium Quality",
          desc: "Carefully processed and tested for best results.",
        },
        {
          icon: <Zap className="w-10 h-10" />,
          title: "Affordable Pricing",
          desc: "Best value for money across all quantities.",
        },
        {
          icon: <Truck className="w-10 h-10" />,
          title: "Reliable Delivery",
          desc: "Safe and timely delivery to your location.",
        },
        {
          icon: <Leaf className="w-10 h-10" />,
          title: "100% Organic",
          desc: "Chemical-free and safe for all crops.",
        },
      ].map((item, i) => (
        <div
          key={i}
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

        </div>
      ))}

    </div>

  </div>

</section>








      {/* Floating WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-8 right-8 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 z-40 transform hover:scale-110"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Footer */}
   <footer className="bg-[#3f4a3c] text-gray-200 py-16">

  <div className="max-w-7xl mx-auto px-6">

    <div className="grid md:grid-cols-3 gap-10 items-start">

      {/* LEFT - LOGO + DESCRIPTION */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <Image
            src="/agrivyn-logo.jpeg"
            alt="Agrivyn"
            width={180}
            height={60}
          />
        </div>

        <p className="text-lg leading-relaxed text-gray-300 mb-3">
          Our vermicompost is produced with premium quality standards and is
          widely used for agriculture, gardening, nurseries, and plantations.
        </p>

        <a href="#about" className="text-sm font-semibold hover:underline">
          READ MORE
        </a>
      </div>

      {/* CENTER - EXPLORE */}
      <div className="border-l border-white/20 pl-8">
        <h4 className="text-lg font-semibold mb-4 text-white">Explore</h4>

        <ul className="space-y-3 text-lg">
          <li><a href="#about" className="hover:text-white">About Us</a></li>
          <li><a href="#products" className="hover:text-white">Products</a></li>
          <li><a href="#gallery" className="hover:text-white">Gallery</a></li>
          <li><a href="#contact" className="hover:text-white">Contact Us</a></li>
        </ul>
      </div>

      {/* RIGHT - CONTACT INFO */}
      <div>
        <h4 className="text-lg font-semibold mb-4 text-white">Contact Info</h4>

       

        <p className="text-lg mb-2">
          <span className="font-semibold text-white">PHONE:</span><br />
          +91 83174 49865
        </p>

      

        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsAppClick}
          className="mt-3 bg-green-500 hover:bg-green-600 px-5 py-2 rounded-full text-lg font-semibold"
        >
          Contact on WhatsApp
        </button>
      </div>

    </div>

    {/* Bottom */}
    <div className="border-t border-white/20 mt-12 pt-6 text-center text-sm text-gray-300">
      © {new Date().getFullYear()} Agrivyn. All Rights Reserved.
    </div>

  </div>

</footer>
    </div>
  );
}

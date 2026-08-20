"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hello! I would like to know more about Agrivyn products."
    );
    window.open(`https://wa.me/918317449865?text=${message}`, "_blank");
  };

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-white border-b border-green-100 shadow-sm">

      <div className="max-w-7xl mx-auto px-6 md:px-10 h-[80px] flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
  <Image
    src="/1.png"
    alt="Agrivyn"
    width={300}
    height={100}
    className="h-16 md:h-30 w-auto object-contain"
    priority
  />
</Link>

        {/* MENU */}
        <div className="hidden md:flex items-center gap-8 text-[18px] font-medium text-gray-700">

       {[
  { name: "Home", link: "/#home" },
  { name: "About", link: "/#about" },
  { name: "Benefits", link: "/#benefits" },
].map((item, i) => (
  <Link
    key={i}
    href={item.link}
    className="relative group transition"
  >
    {item.name}
    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-600 transition-all duration-300 group-hover:w-full"></span>
  </Link>
))}

          {/* PRODUCTS DROPDOWN */}
          {/* PRODUCTS DROPDOWN */}
<div className="relative group">

  {/* Products Link */}
  <Link
    href="/products"
    className="relative group cursor-pointer"
  >
    Products
    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-600 transition-all duration-300 group-hover:w-full"></span>
  </Link>

  {/* DROPDOWN */}
  <div className="absolute left-0 top-full mt-3 w-60 bg-white rounded-xl shadow-xl border border-gray-100 
  opacity-0 invisible group-hover:opacity-100 group-hover:visible 
  transition-all duration-300 z-50 overflow-hidden">

    <Link
      href="/products#vermicompost"
      className="block px-5 py-3 hover:bg-gray-100 transition"
    >
      Vermicompost
    </Link>

    <Link
      href="/products#red-soil"
      className="block px-5 py-3 hover:bg-gray-100 transition"
    >
      Red Soil
    </Link>

    <Link
      href="/products#earthworms"
      className="block px-5 py-3 hover:bg-gray-100 transition"
    >
      Earthworms
    </Link>

    <Link
      href="/products#potting-mix-sand"
      className="block px-5 py-3 hover:bg-gray-100 transition"
    >
      Potting Mix Sand
    </Link>

  </div>

</div>
        </div>

        {/* BUTTON */}
        <div className="hidden md:flex">
          <button
            onClick={handleWhatsAppClick}
            className="bg-gradient-to-r from-green-600 to-green-500 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:scale-105 transition"
          >
            Order Now
          </button>
        </div>

        {/* MOBILE ICON */}
        <button
  className="md:hidden flex items-center justify-center text-3xl w-12 h-12 shrink-0"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

     {/* MOBILE MENU */}
<div
  className={`md:hidden overflow-hidden transition-all duration-200 ${
    mobileMenuOpen
      ? "max-h-[500px] opacity-100"
      : "max-h-0 opacity-0"
  }`}
>
  <div className="bg-white shadow-xl p-6">
    <div className="flex flex-col gap-5 text-gray-700 text-lg">

      {/* HOME */}
      <Link
        href="/#home"
        onClick={() => setMobileMenuOpen(false)}
      >
        Home
      </Link>

      {/* ABOUT */}
      <Link
        href="/#about"
        onClick={() => setMobileMenuOpen(false)}
      >
        About
      </Link>

      {/* BENEFITS */}
      <Link
        href="/#benefits"
        onClick={() => setMobileMenuOpen(false)}
      >
        Benefits
      </Link>

      {/* PRODUCTS */}
      <Link
        href="/products"
        onClick={() => setMobileMenuOpen(false)}
      >
        Products
      </Link>

      {/* ORDER */}
      <button
        onClick={() => {
          setMobileMenuOpen(false);
          handleWhatsAppClick();
        }}
        className="bg-green-600 text-white py-3 rounded-lg mt-4"
      >
        Order Now
      </button>

    </div>
  </div>
</div>
    </nav>
  );
}
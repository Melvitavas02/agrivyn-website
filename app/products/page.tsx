"use client";

import Image from "next/image";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const products = [
  {
    title: "Vermicompost",
    tag: "RICH IN NUTRIENTS",
    badge: "Best Seller",
    img: "/compost-bags.jpg",
    desc: "Nutrient-rich organic fertilizer produced by earthworms. Improves soil health and plant growth.",
    features: ["Improves Soil Structure", "Enhances Water Retention", "100% Organic"],
    pricing: [
      { size: "1 Kg" },
      { size: "5 Kg" },
      { size: "10 Kg" },
      { size: "25 Kg" },
      { size: "50 Kg" },
    ],
  },
  {
    title: "Red Soil",
    tag: "NATURAL & FERTILE",
    badge: "Premium",
    img: "/prored.jpg",
    desc: "Rich in iron oxide with excellent drainage. Ideal for gardening and landscaping.",
    features: ["Rich in Iron Oxide", "Excellent Drainage", "Ideal for Construction"],
    pricing: [
       { size: "1 Kg" },
      { size: "5 Kg" },
      { size: "10 Kg" },
      { size: "25 Kg" },
      { size: "50 Kg" },
    ],
  },
  {
    title: "Earthworms",
    tag: "SOIL AERATORS",
    badge: "Live Stock",
    img: "/proearth.jpg",
    desc: "Healthy composting worms that improve soil aeration and organic farming.",
    features: ["Natural Composting", "Soil Aeration", "Waste Recycling"],
    pricing: [
      { size: "1/2 kg" },
      
      { size: "1 Kg" },
      
    ],
  },
  {
    title: "Potting Mix Sand",
    tag: "IMPROVES DRAINAGE",
    badge: "Bulk Available",
    img: "/prosand.jpg",
    desc: "Clean river sand for potting mix and construction use.",
    features: ["Improves Aeration", "Consistent Texture", "Multi-purpose"],
    pricing: [
        { size: "1 Kg" },
      { size: "5 Kg" },
      { size: "10 Kg" },
      { size: "25 Kg" },
      { size: "50 Kg" },
    ],
  },
];


export default function ProductsPage() {
  return (
    <div className="bg-[#f7f5f2] min-h-screen px-6 py-16">

      {/* HEADER */}
      <div className="max-w-6xl mx-auto mb-20">
        <p className="text-sm text-gray-500 mb-2">← Back to Home</p>

        <h1 className="text-5xl font-bold mb-4 text-gray-800">
          Our Products
        </h1>

        <p className="text-gray-600 max-w-2xl">
          Premium organic soil products with flexible packaging — from small bags for home gardens to bulk orders.
        </p>

        <div className="flex gap-3 mt-6 flex-wrap">
          <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm">Multiple Pack Sizes</span>
          <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm">100% Organic</span>
          <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm">Home Delivery</span>
        </div>
      </div>

      {/* PRODUCTS */}
      <div className="max-w-6xl mx-auto space-y-24">

     {products.map((product, index) => (
  <div
    key={index}
    id={product.title.toLowerCase().replace(/\s+/g, "-")}
    className="grid md:grid-cols-2 gap-12 items-center scroll-mt-32"
  >

            {/* IMAGE */}
            <div className="relative">
              <span className="absolute top-4 left-4 bg-green-700 text-white text-xs px-3 py-1 rounded-full z-10">
                {product.badge}
              </span>

              <Image
                src={product.img}
                alt={product.title}
                width={600}
                height={400}
                className="rounded-2xl shadow-lg object-cover"
              />
            </div>

            {/* CONTENT */}
            <div>

              <p className="text-sm tracking-widest text-orange-500 mb-2">
                {product.tag}
              </p>

              <h2 className="text-4xl font-bold mb-4 text-gray-800">
                {product.title}
              </h2>

              <p className="text-gray-600 mb-4">
                {product.desc}
              </p>

              {/* FEATURES */}
              <div className="flex gap-2 flex-wrap mb-6">
                {product.features.map((f, i) => (
                  <span key={i} className="bg-gray-200 px-3 py-1 rounded-full text-xs">
                    {f}
                  </span>
                ))}
              </div>

              {/* PRICING */}
              {/* AVAILABLE SIZES */}
<div className="border rounded-xl overflow-hidden mb-6">
  <div className="bg-gray-100 px-4 py-2 font-semibold text-sm">
    AVAILABLE SIZES
  </div>

  <div className="flex flex-wrap gap-3 p-4">
    {product.pricing.map((p, i) => (
      <span
        key={i}
        className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium"
      >
        {p.size}
      </span>
    ))}
  </div>
</div>

              {/* BUTTON */}
              <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg font-medium transition">
                Order on WhatsApp
              </button>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
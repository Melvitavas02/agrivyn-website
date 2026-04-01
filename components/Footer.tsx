"use client";

import Image from "next/image";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";

export default function Footer() {

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hello! I would like to know more about Agrivyn products."
    );
    window.open(`https://wa.me/918317449865?text=${message}`, "_blank");
  };

  return (
    <footer className="relative text-gray-200 overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/farming-field.jpg"
          alt="footer"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-20">

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-orange-500 font-bold text-xl mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-300 text-base md:text-lg">
              <li><a href="#home" className="hover:text-orange-400 transition">Home</a></li>
              <li><a href="#about" className="hover:text-orange-400 transition">About Us</a></li>
              <li><a href="#products" className="hover:text-orange-400 transition">Products</a></li>
              <li><a href="#benefits" className="hover:text-orange-400 transition">Benefits</a></li>
            </ul>
          </div>

          {/* PRODUCTS */}
          <div>
            <h3 className="text-orange-500 font-bold text-xl mb-5">
              Our Products
            </h3>

            <ul className="space-y-3 text-gray-300 text-base md:text-lg">
              {["Vermicompost", "Red Soil", "Earthworms", "Potting Mix Sand"].map((item, i) => (
                <li key={i}>
                  <a href="#products" className="hover:text-orange-400 transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-orange-500 font-bold text-xl mb-5">
              Contact Info
            </h3>

            <div className="space-y-4 text-gray-300 text-base md:text-lg">

              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-orange-400" />
                <span>Mangalore, Karnataka, India</span>
              </div>

              <a
                href="tel:+918317449865"
                className="flex items-center gap-2 hover:text-orange-400 transition"
              >
                <Phone className="w-5 h-5 text-orange-400" />
                <span>+91 8317449865</span>
              </a>

              <a
                href="mailto:orders@agrivyn.com?subject=Product Enquiry"
                className="flex items-center gap-2 hover:text-orange-400 transition"
              >
                <Mail className="w-5 h-5 text-orange-400" />
                <span>orders@agrivyn.com</span>
              </a>

              <a
                href="https://www.instagram.com/agrivyn?igsh=MWd4c2dlNXljY3l6bA=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-orange-400 transition"
              >
                <Instagram className="w-5 h-5 text-orange-400" />
                <span>@agrivyn</span>
              </a>

            </div>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-orange-500 font-bold text-xl mb-5">
              Contact Us 📞
            </h3>

            <p className="text-gray-300 mb-4 text-base md:text-lg">
              Reach us quickly through WhatsApp or email for enquiries and orders.
            </p>

            {/* WhatsApp */}
            <button
              onClick={handleWhatsAppClick}
              className="bg-green-500 hover:bg-green-600 
              px-6 py-3 rounded-md text-white w-full mb-3 
              font-semibold transition"
            >
              💬 Chat on WhatsApp
            </button>

            {/* Email */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=orders@agrivyn.com&su=Product%20Enquiry&body=Hello%20Agrivyn,%20I%20would%20like%20to%20know%20more."
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/30 hover:bg-white/10 
              px-6 py-3 rounded-md text-white w-full 
              flex items-center justify-center gap-2 
              font-semibold transition"
            >
              📧 Send Email
            </a>

          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-white/20 mt-10 pt-6 text-center text-gray-400 text-base">
          © {new Date().getFullYear()} Agrivyn. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
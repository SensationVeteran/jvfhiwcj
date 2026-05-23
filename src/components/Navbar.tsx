"use client";

import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-white tracking-tight">
          Linear<span className="text-purple-400">.</span>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
            Features
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
            Pricing
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
            Docs
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
            Blog
          </a>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-medium px-5 py-2 rounded-full hover:opacity-90 transition-opacity duration-300">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-400 hover:text-white transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 bg-black/80 backdrop-blur-xl">
          <div className="px-6 py-4 flex flex-col gap-4">
            <a href="#features" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
              Features
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
              Pricing
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
              Docs
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
              Blog
            </a>
            <button className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-medium px-5 py-2 rounded-full hover:opacity-90 transition-opacity duration-300 w-fit">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

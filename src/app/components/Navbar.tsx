"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="
      bg-[var(--dark-azure)] h-[70px] sticky top-0 shadow 
      [&_a]:hover:transition-opacity [&_a]:hover:opacity-80">
      <div className="w-full flex items-center justify-between py-[10px] px-4 md:px-8">
        {/* Logo */}
        <a href="#hero" className="flex items-center">
          <img src="/assets/images/nav-logo.png" alt="JM Web Logo" className="w-[150px]" />
        </a>
        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <svg width="24" height="24" stroke="white" strokeWidth="2" fill="none">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
        {/* Menu */}
        <ul className={`md:flex gap-6 ${open ? "block" : "hidden"} md:block`}>
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
          <li>
            <a href="#start-website" className="bg-[var(--azure)] font-medium py-2 px-4">Launch Website</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="
      bg-[var(--dark-azure)] h-[70px] sticky top-0 shadow 
      [&_a]:hover:transition-opacity [&_a]:hover:opacity-80
      ">
      <div className="w-full h-full relative flex items-center justify-between py-[10px] header-container">
        
        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <svg width="24" height="24" stroke="white" strokeWidth="2" fill="none">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
        
        {/* Logo */}
        <a href="#hero" className="absolute left-1/2 -translate-x-1/2
        md:static md:left-auto md:translate-x-0
        md:order-1">
          <img src="/assets/images/nav-logo.png" alt="JM Web Logo" className="w-[150px]" />
        </a>
        
        {/* Menu */}
        <ul
      className={`
        flex flex-col gap-4
        absolute left-0 top-full w-full bg-[var(--dark-azure)] shadow-lg
        px-6 py-4
        transition-all duration-300
        ${open ? "opacity-100" : "opacity-0 -translate-y-4 pointer-events-none"}

        /* Desktop overrides */
        md:order-2 md:static md:flex-row md:gap-6 md:w-auto md:p-0 md:bg-transparent md:shadow-none
        md:opacity-100 md:translate-y-0 md:pointer-events-auto
      `}
    >
      <li><a href="#hero">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#contact">Contact</a></li>
      <li>
        <a href="#start-website" className="bg-[var(--azure)] font-semibold py-2 px-4">
          Launch Website
        </a>
      </li>
    </ul>
      </div>
    </nav>
  );
}
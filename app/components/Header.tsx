'use client'; 

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';

const navLinks = [
  { name: 'Solution', href: '#solution' },
  { name: 'Processus', href: '#processus' },
  { name: 'Tarifs', href: '#tarifs' },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const controls = useAnimation();
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 200) {
        controls.start("hidden");
      } else {
        controls.start("visible");
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  const headerVariants = {
    visible: { y: 0, opacity: 1 },
    hidden: { y: "-110%", opacity: 0 },
  };

  return (
    <motion.header 
      variants={headerVariants}
      initial="visible"
      animate={controls}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 py-4"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* FIX: Removed backdrop-blur and related classes, added a solid background */}
        <div className="flex items-center justify-between p-2 bg-[#02040a] border border-white/10 rounded-full">
          <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
            <Image src="/LOGO.png" alt="Koneqt Automation Logo" width={72} height={72} />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-[#ffffff] hover:text-[#a05cff] transition-colors duration-300">
                {link.name}
              </Link>
            ))}
          </nav>

          <Link
            href="#contact"
            className="hidden md:block bg-[#a05cff] text-[#ffffff] font-bold px-6 py-2.5 rounded-full transition-all duration-300 shadow-lg shadow-[#a05cff]/30 hover:shadow-[#a05cff]/50 hover:scale-105 hover:brightness-110"
          >
            Planifier un Appel
          </Link>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          // Using a solid background for the mobile menu as well
          <div className="md:hidden mt-2 p-4 bg-[#02040a] border border-white/10 rounded-2xl">
            <nav className="flex flex-col items-center">
              {navLinks.map((link, index) => (
                <div key={link.name} className="w-full">
                  <Link href={link.href} onClick={() => setIsMenuOpen(false)} className="block w-full text-center py-3 text-[#ffffff]/80 hover:text-[#ffffff] text-lg">
                    {link.name}
                  </Link>
                  {index < navLinks.length - 1 && (
                    <div className="border-b border-white/10 w-full"></div>
                  )}
                </div>
              ))}
              <Link
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="w-full text-center bg-[#a05cff] text-[#ffffff] font-bold py-3 mt-4 rounded-full transition-all duration-300 shadow-lg shadow-[#a05cff]/30 hover:scale-105"
              >
                Planifier un Appel
              </Link>
            </nav>
          </div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// CHANGE 1: Imported Linkedin, removed Facebook
import { Phone, MessageCircle, Linkedin, Instagram } from 'lucide-react'; 
import LogoIcon from "../../public/LOGO ICON.png"

// This TikTok icon component is unused in the footer, but we'll leave it in case you need it later.
const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 12a4 4 0 1 0 4 4V8a8 8 0 1 1-8-8" /></svg>
);

export const Footer = () => {
  const phoneNumber = "+212643791154";
  const whatsappLink = `https://wa.me/${phoneNumber.replace('+', '')}`;
  // CHANGE 2: Replaced facebookLink with linkedinLink
  const linkedinLink = "https://www.linkedin.com/company/getkoneqt"; 
  const instagramLink = "https://www.instagram.com/koneqt.ma/";

  return (
    <footer className="">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Glassmorphism Container */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Column 1: Logo */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <Link href="/" className="flex items-center space-x-2">
                <Image src={LogoIcon} alt="Koneqt Automation Logo" width={32} height={32} />
                <span className="text-xl font-bold text-white">Koneqt</span>
              </Link>
              <p className="mt-4 text-white/60 text-sm">
                Automatisez vos propositions.
              </p>
            </div>

            {/* Column 2: Contact */}
            <div className="text-center md:text-left">
              <h3 className="font-semibold text-white">Contact</h3>
              <div className="mt-4 space-y-2">
                <a href={`tel:${phoneNumber}`} className="flex items-center justify-center md:justify-start gap-2 text-white/80 hover:text-white transition-colors text-sm">
                  <Phone size={16} />
                  <span>{phoneNumber}</span>
                </a>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start gap-2 text-white/80 hover:text-white transition-colors text-sm">
                  <MessageCircle size={16} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Column 3: Social */}
            <div className="text-center md:text-left">
              <h3 className="font-semibold text-white">Suivez-nous</h3>
              <div className="flex justify-center md:justify-start items-center gap-4 mt-4">
                {/* CHANGE 3: Replaced the Facebook <a> tag with the LinkedIn one */}
                <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors"><Instagram size={25} /></a>
                <a href={linkedinLink} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors border-1 p-1 rounded-sm"><Linkedin size={18} /></a>
              </div>
            </div>
            
            {/* Column 4: Copyright */}
            <div className="text-center md:text-left lg:text-right text-sm text-white/50 self-end">
              <p>&copy; {new Date().getFullYear()} Koneqt. Tous droits réservés.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
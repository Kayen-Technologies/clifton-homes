"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const INTEREST_OPTIONS = ["I'M INTERESTED IN BUY / INVEST / RENT", "BUY", "INVEST", "RENT"];

export default function Footer() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedInterest, setSelectedInterest] = useState(INTEREST_OPTIONS[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <footer className="w-full flex flex-col lg:flex-row h-[100dvh] overflow-y-auto overflow-x-hidden">
      {/* Left Panel */}
      <div className="w-full lg:w-[70%] h-auto lg:h-full bg-[#EAE2D6] relative px-6 md:px-12 lg:px-10 xl:px-16 py-16 lg:py-20 flex flex-col justify-center lg:justify-start overflow-hidden border-t border-[#00000010] shrink-0">
        
        <div className="max-w-[480px] z-10">
          <p className="text-[11px] tracking-[0.2em] uppercase text-black font-semibold mb-6">
            YOUR NEXT ACCRA ADDRESS
          </p>
          <h2 className="text-5xl md:text-6xl lg:text-[76px] leading-[1.05] font-medium text-black tracking-tight mb-5">
            Start with a <br />
            conversation.
          </h2>
          <p className="text-[15px] text-black font-light mb-12">
            Buy, invest or rent with a team that knows every Clifton address.
          </p>
          
          <form className="flex flex-col gap-5 w-full max-w-[400px]">
            <div className="relative" ref={dropdownRef}>
              <button 
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full flex items-center justify-between bg-transparent border border-black text-black text-xs font-semibold tracking-widest px-5 py-4 outline-none rounded-none transition-colors uppercase text-left"
              >
                <span className="truncate pr-4">{selectedInterest}</span>
                <svg 
                  width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"
                  className={`flex-shrink-0 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
                >
                  <path d="M1 1.5L6 6.5L11 1.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              {isDropdownOpen && (
                <div className="absolute top-full left-0 w-full bg-[#EAE2D6] border border-t-0 border-black z-20 flex flex-col shadow-lg">
                  {INTEREST_OPTIONS.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => {
                        setSelectedInterest(opt);
                        setIsDropdownOpen(false);
                      }}
                      className="text-left px-5 py-4 text-black text-xs font-semibold tracking-widest uppercase hover:bg-black/5 transition-colors border-b border-black last:border-b-0"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <input 
              type="email" 
              placeholder="EMAIL" 
              className="w-full bg-transparent border border-black text-black placeholder:text-black text-xs font-semibold tracking-widest px-5 py-4 outline-none rounded-none focus:border-black transition-colors uppercase"
            />
            
            <div className="mt-2">
              <button className="bg-[#1E1E1E] text-white text-xs font-medium px-8 py-3.5 hover:bg-black transition-colors border-l-[12px] border-[#DCF900]">
                Explore Our Homes
              </button>
            </div>
          </form>
        </div>

        {/* Architectural lines */}
        <div className="absolute bottom-20 right-32 w-[1px] h-[350px] bg-[#0606063B] pointer-events-none hidden lg:block"></div>
        <div className="absolute bottom-40 right-10 w-[350px] h-[1px] bg-[#0606063B] pointer-events-none hidden lg:block"></div>
      </div>

      {/* Right Panel */}
      <div className="w-full lg:w-[30%] h-auto lg:h-full bg-[#1E1E1E] flex flex-col overflow-y-visible lg:overflow-y-auto py-16 lg:py-20 shrink-0">
        <div className="px-8 md:px-12 lg:px-12 flex flex-col border-b border-[#FFFFFF15] flex-1 pb-10 lg:pb-0">
          <div className="mb-14">
            <Image 
              src="/logo.svg" 
              alt="Clifton Homes" 
              width={160} 
              height={45} 
              className="object-contain invert brightness-0"
            />
          </div>
          
          <nav className="flex flex-col gap-6">
            <Link href="#" className="text-white text-[11px] font-medium tracking-[0.15em] uppercase hover:text-white/70 transition-colors">Developments</Link>
            <Link href="#" className="text-white text-[11px] font-medium tracking-[0.15em] uppercase hover:text-white/70 transition-colors">Lettings</Link>
            <Link href="#" className="text-white text-[11px] font-medium tracking-[0.15em] uppercase hover:text-white/70 transition-colors">Owner Services</Link>
            <Link href="#" className="text-white text-[11px] font-medium tracking-[0.15em] uppercase hover:text-white/70 transition-colors">About</Link>
            <Link href="#" className="text-white text-[11px] font-medium tracking-[0.15em] uppercase hover:text-white/70 transition-colors">News</Link>
            <Link href="#" className="text-white text-[11px] font-medium tracking-[0.15em] uppercase hover:text-white/70 transition-colors">Contact</Link>
          </nav>
        </div>
        
        <div className="flex flex-col">
          <div className="p-8 md:px-12 lg:px-12 lg:py-6 border-b border-[#FFFFFF15]">
            <p className="text-[#FFFFFFCC] text-[13px] font-light leading-relaxed">
              34 SENCHI STREET,<br />
              AIRPORT RESIDENTIAL,<br />
              ACCRA
            </p>
          </div>
          
          <div className="p-8 md:px-12 lg:px-12 lg:py-6 border-b border-[#FFFFFF33]">
            <p className="text-[#FFFFFFCC] text-[13px] font-light leading-relaxed">
              +233 (0)20 467 7033<br />
              +233 (0)30 278 6726
            </p>
          </div>
          
          <div className="p-8 md:px-12 lg:px-12 lg:py-6 border-b border-[#FFFFFF33]">
            <a href="mailto:info@cliftonghana.com" className="text-white text-[13px] font-light hover:text-white transition-colors">
              info@cliftonghana.com
            </a>
          </div>
          
          <div className="p-8 md:px-12 lg:px-12 lg:py-6 border-b border-[#FFFFFF33]">
            <a href="https://www.cliftonghana.com" className="text-white text-[13px] font-light hover:text-white transition-colors">
              www.cliftonghana.com
            </a>
          </div>
          
          <div className="md:px-12 lg:px-12 mt-6 pl-8">
            <Link href="#" className="text-white text-[13px] font-light hover:text-white transition-colors">
              Privacy policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

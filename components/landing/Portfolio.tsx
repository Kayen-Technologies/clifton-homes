"use client";

import { useState } from "react";
import Image from "next/image";

const PORTFOLIO_DATA = [
  { year: "2012", name: "CLIFTON COURT", image: "" },
  { year: "2014", name: "THE RESIDENCE", image: "/images/landing/portfolio/Kayen Technologies Image 13.png" },
  { year: "2016", name: "THE GALLERY", image: "" },
  { year: "2022", name: "LOXWOOD THE LENNOX", image: "" },
  { year: "2024", name: "LOXWOOD HOUSE", image: "" },
  { year: "2025", name: "THE BANTREE", image: "" },
];

export default function Portfolio() {
  const [activeItem, setActiveItem] = useState("2014");

  return (
    <section className="w-full bg-[#1E1E1E] py-24 md:py-32 px-6 md:px-12 lg:px-10 relative overflow-hidden">
      <div className="mx-auto flex flex-col-reverse lg:flex-row gap-16 lg:gap-24 items-start">
        
        {/* Left Side - Accordion */}
        <div className="w-full lg:w-[45%] border border-[#EAE2D6]">
          {PORTFOLIO_DATA.map((item) => {
            const isActive = activeItem === item.year;
            return (
              <div key={item.year} className="border-b border-[#EAE2D6] last:border-b-0">
                <button
                  onClick={() => setActiveItem(isActive ? "" : item.year)}
                  className={`w-full flex items-center justify-between px-6 md:px-8 py-5 transition-colors ${
                    isActive ? "bg-white text-black" : "bg-transparent text-white hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-center w-full">
                    <span className="w-16 md:w-24 text-left text-xs md:text-sm font-medium">{item.year}</span>
                    <span className="flex-1 text-center text-sm md:text-base font-medium tracking-wide">{item.name}</span>
                    <span className="w-16 md:w-24 flex justify-end relative h-6">
                      <Image 
                        src={isActive ? "/images/landing/what you need/subtract.svg" : "/images/landing/what you need/add.svg"}
                        alt={isActive ? "Collapse" : "Expand"}
                        fill
                        className={`object-contain object-right ${isActive ? "" : "invert"}`}
                      />
                    </span>
                  </div>
                </button>
                
                {/* Expanded Content */}
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out bg-white ${
                    isActive ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="w-full relative h-[300px] md:h-[400px]">
                    <Image 
                      src={item.image || "/images/landing/portfolio/Kayen Technologies Image 13.png"} // fallback for testing
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-6 left-0 w-full flex justify-center">
                      <button className="bg-white text-black text-xs font-medium px-6 py-3 border border-black/10 hover:bg-gray-100 transition-colors shadow-sm">
                        Open Project Archive
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Side - Content */}
        <div className="w-full lg:w-[50%] flex flex-col justify-center relative">
          <p className="text-[11px] tracking-[0.2em] uppercase text-white font-semibold mb-6">
            THE PORTFOLIO IS THE PROOF
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-[52px] leading-[1.1] font-medium text-white tracking-tight mb-6">
            A skyline built over time.
          </h2>
          <p className="text-[15px] text-white font-light leading-relaxed max-w-[480px] mb-12">
            From Clifton Court and Embassy Gardens to The Lennox, Loxwood House and The Bantree, every completed development adds another chapter to our story in Accra.
          </p>
          <div>
            <button className="bg-white text-black text-sm font-medium px-8 py-3.5 hover:bg-gray-100 transition-colors border-l-[16px] border-[#DCF900]">
              Explore All Developments
            </button>
          </div>
          
          {/* Architectural Background Lines */}
          <div className="absolute -bottom-32 right-12 md:right-24 w-[1px] h-[350px] bg-[#FFFFFF3B] pointer-events-none hidden lg:block"></div>
          <div className="absolute -bottom-10 right-[-100px] w-[450px] h-[1px] bg-[#FFFFFF3B] pointer-events-none hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";

const NEIGHBOURHOODS = [
  {
    id: "01",
    name: "AIRPORT RESIDENTIAL",
    title: "Airport Residential",
    description: "Premium living with easy access to the airport and upscale amenities.",
    color: "#363636"
  },
  {
    id: "02",
    name: "CANTOMENTS",
    title: "Cantoments",
    description: "An exclusive, serene diplomatic neighbourhood in the heart of Accra.",
    color: "#5E4444"
  },
  {
    id: "03",
    name: "NORTH RIDGE",
    title: "North Ridge",
    description: "Centrally located, connecting business districts with peaceful residential enclaves.",
    color: "#363636"
  },
  {
    id: "04",
    name: "TETTEH QUARSHIE",
    title: "Tetteh Quarshie",
    description: "The vibrant nexus of Accra's commercial and entertainment lifestyle.",
    color: "#5E4444"
  },
  {
    id: "05",
    name: "EAST LEGON",
    title: "East Legon",
    description: "Residential calm with restaurants, schools and city life nearby.",
    color: "#363636"
  },
  {
    id: "06",
    name: "ACCRA COASTLINE",
    title: "Accra Coastline",
    description: "Stunning ocean views and breezy beachfront living.",
    color: "#5E4444"
  }
];

export default function Neighbourhoods() {
  const [activeId, setActiveId] = useState("05");

  return (
    <section className="w-full flex flex-col h-[850px] md:h-[950px] lg:h-[1000px]">
      {/* Top Section */}
      <div className="w-full bg-[#EAE2D6] px-6 md:px-12 lg:px-10 py-16 md:py-20 text-black">
        <div className="flex flex-col gap-5">
          <p className="text-[11px] tracking-[0.2em] uppercase font-semibold">
            THE ACCRA EDIT
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-medium tracking-tight">
            Open a window into Accra
          </h2>
          <p className="text-[15px] font-medium mt-1">
            Six addresses. Six ways to experience the city.
          </p>
        </div>
      </div>

      {/* Bottom Section - Horizontal Accordion */}
      <div className="w-full flex-1 flex overflow-hidden">
        {NEIGHBOURHOODS.map((item) => {
          const isActive = activeId === item.id;
          
          return (
            <div
              key={item.id}
              onClick={() => setActiveId(item.id)}
              className={`relative h-full cursor-pointer transition-all duration-700 ease-in-out flex flex-col border-r border-[#EAE2D6] last:border-r-0 ${
                isActive ? "flex-[5] lg:flex-[7]" : "flex-1 hover:brightness-110"
              }`}
              style={{ backgroundColor: item.color }}
            >
              {/* Vertical Text (Always visible) */}
              <div 
                className={`absolute top-12 w-fit transition-all duration-700 ease-in-out ${
                  isActive ? 'left-4 md:left-5 translate-x-0' : 'left-1/2 -translate-x-1/2'
                }`}
                // className="absolute top-12 left-4 md:left-5 w-fit"

              >
                <span 
                  className="text-white text-xs md:text-[13px] font-light tracking-[0.15em] whitespace-nowrap inline-block"
                  style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                >
                  {item.id} - {item.name}
                </span>
              </div>

              {/* Active State - Content */}
              <div 
                className={`absolute bottom-0 left-0 w-full pl-5 pb-15 transition-opacity duration-500 delay-200 flex flex-col justify-end ${
                  isActive ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                <div className="max-w-md flex flex-col items-start gap-4">
                  <h3 className="text-white text-4xl md:text-5xl font-medium tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-white text-sm md:text-base leading-relaxed font-light">
                    {item.description}
                  </p>
                  <button className="mt-4 border border-white/60 text-white px-6 py-2.5 text-sm font-medium hover:bg-white hover:text-black transition-colors backdrop-blur-sm">
                    Explore {item.title}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";

const ACCORDION_DATA = [
  {
    id: "01",
    title: "01 BUY",
    image: "/images/landing/what you need/buy.png",
    description: "Find a home designed around how you want to live.",
    buttonText: "Explore Homes",
  },
  {
    id: "02",
    title: "02 INVEST",
    image: "/images/landing/what you need/buy.png", // Using same image as placeholder
    description: "Discover premium investment opportunities with high yields.",
    buttonText: "View Investments",
  },
  {
    id: "03",
    title: "03 RENT",
    image: "/images/landing/what you need/buy.png", // Using same image as placeholder
    description: "Explore luxury rentals in prime locations.",
    buttonText: "See Rentals",
  }
];

export default function WhatYouNeed() {
  const [expandedId, setExpandedId] = useState("01");

  return (
    <section className="bg-[#1E1E1E] py-24 md:py-25 px-6 md:px-12 lg:px-10 text-white">
      <div className=" mx-auto flex flex-col gap-12 md:gap-16">
        {/* Section Header */}
        <div>
          <p className="text-[11px] tracking-[0.2em] uppercase text-white mb-4 font-medium">
            Start with what you need
          </p>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white">
            One city. Three ways home.
          </h2>
        </div>

        {/* Accordion Container */}
        <div className="bg-[#EAE2D6] text-black w-full flex flex-col">
          {ACCORDION_DATA.map((item, index) => {
            const isExpanded = expandedId === item.id;
            return (
              <div 
                key={item.id} 
                className="border-b border-[#303030] last:border-b-0"
              >
                {/* Accordion Header */}
                <button
                  onClick={() => setExpandedId(isExpanded ? "" : item.id)}
                  className="w-full flex justify-between items-center py-6 md:py-8 px-6 md:px-12 lg:px-5 hover:bg-black/5 transition-colors"
                >
                  <span className="text-2xl md:text-[28px] font-light tracking-wide">{item.title}</span>
                  <span className="relative w-6 h-6 md:w-8 md:h-8">
                    <Image 
                      src={isExpanded ? "/images/landing/what you need/subtract.svg" : "/images/landing/what you need/add.svg"}
                      alt={isExpanded ? "Collapse" : "Expand"}
                      fill
                      className="object-contain"
                    />
                  </span>
                </button>

                {/* Accordion Content */}
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isExpanded ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 ">
                    {/* Image Area */}
                    <div className="w-full lg:w-[65%] h-[250px] sm:h-[350px] md:h-[420px] relative">
                      <Image 
                        src={item.image} 
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    {/* Content Area */}
                    <div className="w-full lg:w-[35%] flex flex-col justify-center items-start gap-8 px-6 md:px-12 lg:px-0 lg:pr-12 pb-10 lg:pb-0">
                      <p className="text-base md:text-[17px] text-black font-medium leading-relaxed max-w-[280px]">
                        {item.description}
                      </p>
                      <button className="border border-black px-6 py-2.5 text-sm font-medium hover:bg-black hover:text-[#EAE2D6] transition-colors">
                        {item.buttonText}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";

const TABS = [
  { id: "01", name: "Materials" },
  { id: "02", name: "Fittings" },
  { id: "03", name: "Light" },
  { id: "04", name: "Finishes" },
];

export default function DesignPhilosophy() {
  const [activeTab, setActiveTab] = useState("01");

  return (
    <section className="flex flex-col lg:flex-row w-full h-auto lg:h-[800px] bg-[#1E1E1E] border-t border-[#EAE2D64D]">
      {/* Left Panel */}
      <div className="w-full lg:w-[35%] xl:w-[30%] h-auto lg:h-full flex flex-col justify-between py-16 lg:py-0 gap-12 lg:gap-0">
        <div className="flex flex-col gap-6 lg:mt-20 px-6 md:px-12 lg:px-10">
          <p className="text-[11px] tracking-[0.2em] uppercase text-white font-medium">
            THE CLIFTON STANDARD
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-[56px] leading-[1.05] font-medium text-white tracking-tight">
            Luxury is how <br className="hidden lg:block"/>
            well everything <br className="hidden lg:block"/>
            works.
          </h2>
          <p className="text-[15px] text-white font-light max-w-[280px] leading-relaxed mt-2">
            A beautiful home should also be comfortable, functional and effortless to own.
          </p>
          <div className="mt-4">
            <button className="bg-white text-black text-sm font-medium px-8 py-3 hover:bg-gray-100 transition-colors border-l-[16px] border-[#DCF900]">
              See How We Build
            </button>
          </div>
        </div>

        {/* Bottom Tabs */}
        <div className="flex items-end border-t border-b border-[#6C6C6C] px-6 md:px-12 lg:px-10 pb-0 pt-4 gap-8 md:gap-12 overflow-x-auto lg:mb-30">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="flex flex-col items-start gap-1 pb-4 relative min-w-fit"
            >
              <span className={`text-sm font-medium ${activeTab === tab.id ? 'text-white' : 'text-[#FFFFFFAB]'}`}>
                {tab.id}
              </span>
              <span className={`text-base font-light ${activeTab === tab.id ? 'text-white' : 'text-[#FFFFFFAB]'}`}>
                {tab.name}
              </span>
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white"></div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Right Panel - Image */}
      <div className="w-full lg:w-[65%] xl:w-[70%] h-[500px] lg:h-full relative">
        <Image 
          src="/images/landing/design philosophy/de-phi.png"
          alt="Design Philosophy"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}

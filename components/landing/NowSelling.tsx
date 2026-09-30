"use client";

import Image from "next/image";
import AccordionGallery from "@/components/ui/AccordionGallery";

const PROPERTIES = [
  {
    id: "01",
    title: "THE DUNES",
    location: "ACCRA COAST LINE",
    price: "From $105,950",
    image: "/images/landing/now selling/sell-1.png",
    isActive: true,
  },
  {
    id: "02",
    title: "VARON RISE",
    image: "/images/landing/now selling/sell-2.png",
    location: "KUMASI BEACH",
    price: "From $63,950",
    isActive: false,
  },
  {
    id: "03",
    title: "THE ATLAS",
    image: "/images/landing/now selling/sell-1.png", // using sell-1 as fallback since sell-3 wasn't provided
    location: "POLO HEIGHTS",
    price: "From $400,950",
    isActive: false,
  }
];

export default function NowSelling() {
  return (
    <section className="flex flex-col lg:flex-row w-full h-auto lg:h-[800px]">
      {/* Left Panel */}
      <div className="w-full lg:w-[35%] xl:w-[30%] h-full bg-[#EAE2D6] flex flex-col justify-between">
        <div className="flex flex-col gap-6 lg:mt-20 pl-6 md:pl-10 py-10 border-y border-[#00000033]">
          <p className="text-[11px] tracking-[0.2em] uppercase text-black font-semibold">
            Now Selling
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-[56px] leading-[1.05] font-medium text-black tracking-tight">
            The next <br className="hidden lg:block" />
            chapter of <br className="hidden lg:block" />
            Accra living.
          </h2>
          <p className="text-[15px] text-black font-light max-w-[260px] leading-relaxed">
            A beautiful home should also be comfortable, functional and effortless to own.
          </p>
        </div>

        {/* Navigation area */}
        <div className="flex justify-between items-center p-6 md:p-10 lg:pb-16">
          <span className="text-lg font-light text-black">01 - 03</span>
          <div className="flex gap-6">
            <button className="hover:opacity-60 transition-opacity">
              <Image src="/images/back.svg" alt="Previous" width={36} height={12} className="object-contain" />
            </button>
            <button className="hover:opacity-60 transition-opacity">
              <Image src="/images/forward.svg" alt="Next" width={36} height={12} className="object-contain" />
            </button>
          </div>
        </div>
      </div>

      {/* Right Panel - Accordion Gallery */}
      <div className="w-full lg:w-[65%] xl:w-[70%] h-[500px] lg:h-full bg-[#1E1E1E] overflow-hidden">
        <AccordionGallery
          items={PROPERTIES.map(property => ({ 
            image: property.image, 
            label: property.title, 
            link: "#",
            customContent: (isActive) => (
              <div className="absolute inset-0 h-full w-full">
                {isActive ? (
                  /* Active State */
                  <div className="absolute inset-0">
                    <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 flex flex-col gap-6">
                      <div>
                        <p className="text-white font-medium text-lg mb-2">{property.id}</p>
                        <h3 className="text-white text-3xl md:text-4xl lg:text-[42px] font-medium tracking-wide mb-2">{property.title}</h3>
                        <p className="text-white text-xs md:text-sm uppercase tracking-[0.15em] font-semibold">
                          {property.location}
                        </p>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end w-full gap-4 mt-4">
                        <p className="text-white font-medium text-sm sm:text-base">{property.price}</p>
                        <button className="border border-white/80 text-white px-6 py-2.5 text-xs sm:text-sm font-medium hover:bg-white hover:text-black transition-colors backdrop-blur-sm">
                          Arrange a Viewing
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Inactive State */
                  <div className="absolute inset-0">
                    <div className="absolute bottom-0 left-0 w-full p-6 md:p-8">
                      <p className="text-white font-medium text-base mb-1 opacity-90">{property.id}</p>
                      <h3 className="text-white text-lg md:text-xl font-medium tracking-wide">{property.title}</h3>
                    </div>
                  </div>
                )}
              </div>
            )
          }))}
          defaultIndex={0}
          expandRatio={0.52}
          trigger="hover"
          radius={0}
          className="!h-full"
        />
      </div>
    </section>
  );
}

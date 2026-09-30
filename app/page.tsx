import NavBar from "@/components/NavBar";
import WhatYouNeed from "@/components/landing/WhatYouNeed";
import NowSelling from "@/components/landing/NowSelling";
import BuiltPromises from "@/components/landing/BuiltPromises";
import DesignPhilosophy from "@/components/landing/DesignPhilosophy";
import Neighbourhoods from "@/components/landing/Neighbourhoods";
import Investments from "@/components/landing/Investments";
import SquareMetre from "@/components/landing/SquareMetre";
import Portfolio from "@/components/landing/Portfolio";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full">
      {/* Curtain Footer (Sticky in background for all screens) */}
      <div className="sticky top-0 left-0 w-full h-[100dvh] z-0">
        <Footer />
      </div>

      <main className="relative z-20 w-full bg-white overflow-x-hidden shadow-[0_-20px_50px_rgba(0,0,0,0.1)] -mt-[100dvh] mb-[100dvh]">
        {/* Navigation */}
      <NavBar />

      {/* Hero Section */}
      <section className="relative h-screen w-full">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/images/landing/landing-hero.png')` }}
        >
          {/* Subtle dark overlay if needed */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex h-full w-full items-end pb-16 md:pb-24 px-6 md:px-12 lg:px-10">
          <div className="w-full flex flex-col xl:flex-row justify-between items-start xl:items-end gap-12 xl:gap-8">
            {/* Left Title */}
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold leading-[1.05] tracking-tight max-w-4xl">
              ACCRA RESIDENTIAL<br />
              DEVELOPMENT SINCE 2010
            </h1>

            {/* Right Side Info & Buttons */}
            <div className="relative flex flex-col gap-8 max-w-[420px] xl:mb-2">
              {/* Architectural Crosshair Lines - Desktop Only */}
              <div className="hidden xl:block absolute -left-12 top-[40%] w-[180%] h-[1px] bg-white/20 pointer-events-none"></div>
              <div className="hidden xl:block absolute -left-12 -top-24 w-[1px] h-[150%] bg-white/20 pointer-events-none"></div>

              <p className="text-white/95 text-base md:text-lg leading-relaxed relative z-10 font-light">
                Discover thoughtfully designed homes in Accra's most connected neighbourhoods, backed by a trusted record of delivery and long-term property support.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 relative z-10">
                <button className="flex items-center justify-center bg-white text-black text-sm font-medium px-8 py-3.5 hover:bg-gray-100 transition-colors border-l-[16px] border-[#DCF900]">
                  Explore Our Homes
                </button>
                <button className="flex items-center justify-center border border-white/60 text-white text-sm font-medium px-8 py-3.5 hover:bg-white/10 transition-colors backdrop-blur-sm">
                  Arrange a Viewing
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Need Section */}
      <WhatYouNeed />

      {/* Now Selling Section */}
      <NowSelling />

      {/* Built Promises Section */}
      <BuiltPromises />

      {/* Design Philosophy Section */}
      <DesignPhilosophy />

      {/* Neighbourhoods Section */}
      <Neighbourhoods />

      {/* Investments Section */}
      <Investments />

      {/* Square Metre Section */}
      <SquareMetre />

      {/* Portfolio Section */}
      <Portfolio />

      </main>
    </div>
  );
}


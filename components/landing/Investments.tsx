import Image from "next/image";

export default function Investments() {
  return (
    <section className="flex flex-col lg:flex-row w-full h-auto lg:h-[100vh]">
      {/* Left Panel */}
      <div className="w-full lg:w-[50%] h-full bg-[#EAE2D6] flex flex-col justify-center px-6 md:px-12 lg:pl-10 lg:pr-20 py-16 lg:py-0">
        
        <p className="text-[11px] tracking-[0.2em] uppercase text-black font-semibold mb-6">
          OWNERSHIP, AFTER THE KEYS
        </p>
        
        <h2 className="text-4xl md:text-5xl lg:text-[56px] leading-[1.1] font-medium text-black tracking-tight mb-6">
          Your property can keep working.
        </h2>
        
        <p className="text-[15px] text-black font-light leading-relaxed max-w-[460px] mb-12">
          Our relationship does not have to end at handover. 
          Clifton's in-house team can help investors find tenants, manage their properties and 
          access the serviced-apartment market.
        </p>
        
        {/* Separator Line */}
        <div className="w-full h-[1px] bg-[#00000033] mb-12 max-w-[460px]"></div>
        
        <div className="flex flex-col gap-10 mb-12">
          <div>
            <h3 className="text-4xl md:text-[42px] font-medium text-black mb-2 tracking-tight">75%+</h3>
            <p className="text-[15px] text-black font-medium">Of rental contracts are corporate lets</p>
          </div>
          <div>
            <h3 className="text-4xl md:text-[42px] font-medium text-black mb-2 tracking-tight">20+</h3>
            <p className="text-[15px] text-black font-medium">Countries represented by tenants</p>
          </div>
        </div>
        
        <div>
          <button className="border border-black text-black px-6 py-3 text-sm font-medium hover:bg-black hover:text-[#EAE2D6] transition-colors">
            Explore Investor Services
          </button>
        </div>
      </div>

      {/* Right Panel - Image */}
      <div className="w-full lg:w-[50%] h-[500px] lg:h-full relative">
        <Image 
          src="/images/landing/investments/image 1.png"
          alt="Clifton Homes Investments"
          fill
          className="object-cover object-center"
        />
      </div>
    </section>
  );
}

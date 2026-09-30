export default function BuiltPromises() {
  return (
    <section className="bg-[#1E1E1E] text-white py-10 md:py-32 px-6 md:px-12 lg:px-10 relative overflow-hidden">
      <div className="mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-stretch gap-20 lg:gap-150">

        {/* Left Side Content */}
        <div className="w-full lg:w-[60%] flex flex-col justify-start relative ">

          <div className="relative z-10">
            <p className="text-[11px] tracking-[0.2em] uppercase text-white mb-6 font-medium">
              BUILT PROMISES. KEPT DATES.
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-[56px] leading-[1.1] font-medium mb-8">
              Our record is part of the address.
            </h2>
            <p className="text-white font-light text-[15px] leading-relaxed mb-10 ">
              Since 2010, Clifton Homes has delivered 10 developments within contract and handed homes over to hundreds of clients on schedule.
            </p>
            <button className="bg-white text-black text-sm font-medium px-8 py-3 hover:bg-gray-100 transition-colors border-l-[16px] border-[#DCF900]">
              Discover our Story
            </button>
             {/* Architectural Background Lines */}
          <div className="absolute bottom-[10%] left-[20%] w-[120%] h-[1px] bg-[#FFFFFF3B] pointer-events-none hidden lg:block"></div>
          <div className="absolute -top-[20%] right-[-10%] w-[1px] h-[150%] bg-[#FFFFFF3B] pointer-events-none hidden lg:block"></div>
          </div>
        </div>

        {/* Right Side Stats */}
        <div className="w-full lg:w-[40%] flex flex-col border border-[#A1A1A1]">

          {/* Stat 1 */}
          <div className="flex flex-col justify-end pt-20 pl-5 pb-5 border-b border-[#A1A1A1] flex-1">
            <h3 className="text-5xl md:text-[64px] font-medium mb-2 tracking-tight">2010</h3>
            <p className="text-white text-sm md:text-base font-light">
              The Clifton journey began
            </p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col justify-center pt-20 pl-5 pb-5  border-b border-[#A1A1A1] flex-1">
            <h3 className="text-5xl md:text-[64px] font-medium mb-2 tracking-tight">10</h3>
            <p className="text-white text-sm md:text-base font-light">
              Developments completed within contract
            </p>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col justify-center pt-20 pl-5 pb-5  flex-1">
            <h3 className="text-5xl md:text-[64px] font-medium mb-2 tracking-tight">100s</h3>
            <p className="text-white text-sm md:text-base font-light">
              Of homes handed over to clients
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

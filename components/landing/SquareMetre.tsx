import Image from "next/image";

const FEATURES = [
  "01 - Security you can trust",
  "02 - Spaces that encourage wellbeing",
  "03 - Professional facilities management",
  "04 - Support when you need it"
];

export default function SquareMetre() {
  return (
    <section className="flex flex-col-reverse lg:flex-row w-full h-auto lg:h-[100vh]">
      {/* Left Panel - Image */}
      <div className="w-full lg:w-[50%] h-[500px] lg:h-full relative">
        <Image
          src="/images/landing/square metre/image 1.png"
          alt="Clifton Homes Facilities"
          fill
          className="object-cover object-center"
        />
      </div>

      {/* Right Panel */}
      <div className="w-full lg:w-[50%] h-full bg-[#EAE2D6] flex flex-col justify-center px-6 md:px-12 lg:pl-10 lg:pr-10 py-16 lg:py-0">
        <div className="max-w-[540px]">
          <p className="text-[11px] tracking-[0.2em] uppercase text-black font-semibold mb-6">
            MORE THAN SQUARE METRES
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-[56px] leading-[1.1] font-medium text-black tracking-tight mb-6">
            Homes designed around life <br className="hidden lg:block" />
            beyond your front door.
          </h2>

          <p className="text-[15px] text-black font-light leading-relaxed mb-12 max-w-[480px]">
            Across the Clifton portfolio, residents enjoy considered shared spaces, robust security,
            professionally managed facilities and responsive ongoing support.
          </p>

          {/* Features List */}
          <div className="flex flex-col border-t border-[#00000080]">
            {FEATURES.map((feature, index) => (
              <div
                key={index}
                className="py-6 border-b border-[#00000080]"
              >
                <p className="text-[17px] text-black font-medium tracking-wide">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

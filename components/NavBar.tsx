import Image from 'next/image';
import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-5 text-white md:px-12 lg:px-10">
      {/* Logo */}
      <Link href="/" className="relative flex items-center">
        <Image 
          src="/logo.svg" 
          alt="Clifton Homes Logo" 
          width={180} 
          height={50} 
          className="object-contain"
          priority
        />
      </Link>

      {/* Menu */}
      <button className="flex items-center gap-3 hover:opacity-80 transition-opacity">
        <div className="flex flex-col justify-between h-[10px] w-[18px]">
          <span className="w-full h-[1px] bg-white"></span>
          <span className="w-full h-[1px] bg-white"></span>
          <span className="w-full h-[1px] bg-white"></span>
        </div>
        <span className="text-sm font-light tracking-wide">Menu</span>
      </button>
    </nav>
  );
}

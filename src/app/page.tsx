"use client"
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-[100vh] bg-white text-black font-sans selection:bg-black selection:text-white overflow-hidden">
      {/* Cursor-sensitive Interactive Grid Background */}
      <div
        className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-500 ease-out"
        style={{
          backgroundImage: 'linear-gradient(to right, #00000070 1px, transparent 1px), linear-gradient(to bottom, #00000070 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          opacity: isMounted ? 1 : 0,
          maskImage: `radial-gradient(circle 180px at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(circle 180px at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`,
        }}
      />

      <div className="relative z-10 flex flex-col min-h-screen max-w-[1600px] mx-auto">
        {/* Navbar */}
        <nav className="flex items-center justify-between px-8 md:px-16 py-8">
          <div className="flex-shrink-0">
            <span className="text-3xl font-bold tracking-tighter lowercase text-[#ea1e24]">
              superposition.
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-[15px] font-medium text-zinc-600">
            <a href="#" className="text-black border-b border-black pb-0.5">Home</a>
            <a href="#" className="hover:text-black transition-colors">Culture</a>
            <a href="#" className="hover:text-black transition-colors">Careers</a>
            <a href="#" className="hover:text-black transition-colors">Investors</a>
            <a href="#" className="hover:text-black transition-colors">Blog</a>
            <a href="#" className="hover:text-black transition-colors">Contact</a>
          </div>
        </nav>

        {/* Main Hero Content */}
        <main className="flex-grow flex flex-col justify-center px-8 md:px-16 pb-32 pt-16">
          <div className="w-full">
            {/* HTML Text Conversion from brandline.png */}
            <h1 className="text-[3.5rem] sm:text-[5rem] md:text-[6rem] lg:text-[7.5rem] font-medium tracking-tight leading-[1.05] text-[#111] mb-16 max-w-[1400px]">
              parallel possibilities<span className="text-[#ea1e24]">,</span> <br />
              single impact<span className="text-[#ea1e24]">.</span>
            </h1>
          </div>

          {/* Founder Note Card (using provided image structure) */}
          <div className="w-full flex justify-end md:pr-32 lg:pr-48">
            <div className="flex items-center gap-6 min-w-[340px] max-w-lg cursor-pointer group">
              {/* The founder images */}
              <div className="relative w-48 h-32 flex-shrink-0">
                <Image
                  src="/founders.png"
                  alt="Founders"
                  fill
                  className="object-contain"
                />
              </div>
              {/* The text */}
              <div className="flex flex-col justify-center">
                <p className="text-[20px] font-medium leading-[1.3] text-[#111] mb-2">
                  A note from our Founder,<br />
                  Prasanth Gopalakrishnan
                </p>
                <div className="text-[16px] text-[#111] border-b border-black w-fit pb-0.5 mt-2 transition-opacity group-hover:opacity-70">
                  Read more
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Bottom Left Scroll Indicator */}
        <div className="absolute bottom-24 left-8 md:left-16 z-20">
          <button className="w-12 h-12 rounded-full border border-zinc-300 flex items-center justify-center hover:bg-zinc-50 transition-colors">
            <ChevronDown size={20} className="text-zinc-500" />
          </button>
        </div>
      </div>
    </div>
  );
}

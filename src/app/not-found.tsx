"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";

export default function NotFound() {
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
        <div className="relative min-h-[100vh] bg-white text-black font-sans selection:bg-black selection:text-white overflow-hidden selection:bg-[#ea1e24]">
            {/* Interactive Background matched to Hero */}
            <div
                className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-500 ease-out"
                style={{
                    backgroundImage: 'linear-gradient(to right, #ea1e2430 1px, transparent 1px), linear-gradient(to bottom, #ea1e2430 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                    opacity: isMounted ? 1 : 0,
                    maskImage: `radial-gradient(circle 250px at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`,
                    WebkitMaskImage: `radial-gradient(circle 250px at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`,
                }}
            />

            <div className="relative z-10 flex flex-col min-h-screen max-w-[1600px] mx-auto">
                <Navbar />

                {/* 404 Content */}
                <main className="flex-grow flex flex-col items-center justify-center px-8 text-center">

                    {/* Glitch Animated 404 Container */}
                    <div className="relative group cursor-default">
                        <h1 className="text-[8rem] sm:text-[12rem] md:text-[15rem] font-bold tracking-tighter leading-none text-[#111] relative z-10 transition-transform duration-500 group-hover:scale-105">
                            404<span className="text-[#ea1e24]">.</span>
                        </h1>

                        {/* Red offset shadow / glitch effect on hover */}
                        <div className="absolute inset-0 text-[8rem] sm:text-[12rem] md:text-[15rem] font-bold tracking-tighter leading-none text-[#ea1e24] opacity-0 group-hover:opacity-100 group-hover:-translate-x-3 group-hover:translate-y-2 transition-all duration-300 -z-10 mix-blend-multiply">
                            404.
                        </div>
                        {/* Zinc offset shadow / glitch effect on hover */}
                        <div className="absolute inset-0 text-[8rem] sm:text-[12rem] md:text-[15rem] font-bold tracking-tighter leading-none text-zinc-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-3 group-hover:-translate-y-2 transition-all duration-300 -z-20 mix-blend-multiply">
                            404.
                        </div>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-medium text-zinc-800 mt-8 mb-4">
                        This reality is still forming.
                    </h2>
                    <p className="text-[17px] text-zinc-500 max-w-lg mb-12">
                        The page you're trying to observe hasn't materialized in this timeline yet.
                        We are currently building this parallel possibility.
                    </p>

                    {/* Animated Return Link */}
                    <Link href="/" className="group/btn relative inline-flex items-center justify-center px-8 py-4 bg-black text-white rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#ea1e24]/20">
                        {/* Button Hover fill */}
                        <div className="absolute inset-0 bg-[#ea1e24] origin-bottom scale-y-0 transition-transform duration-300 ease-out group-hover/btn:scale-y-100" />
                        <span className="relative z-10 font-medium tracking-wide">
                            Return to reality
                        </span>
                    </Link>

                </main>
            </div>
        </div >
    );
}

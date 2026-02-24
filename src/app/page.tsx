"use client"
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import OurBusinesses from "@/components/OurBusinesses";
import VisionMission from "@/components/VisionMission";
import RecognizedBy from "@/components/RecognizedBy";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

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

            <div className="relative z-10 flex flex-col max-w-[1600px] mx-auto">
                <div className="relative flex flex-col min-h-screen w-full">
                    <Navbar />

                    {/* Main Hero Content */}
                    <main className="flex-grow flex flex-col justify-center px-8 md:px-16 pb-32 pt-16">
                        <div className="w-full">
                            {/* HTML Text Conversion from brandline.png */}
                            <h1 className="text-[3.5rem] sm:text-[5rem] md:text-[6rem] lg:text-[7.5rem] font-medium tracking-tight leading-[1.05] text-[#111] mb-16 max-w-[1400px]">
                                parallel possibilities<span className="text-[#ea1e24]">,</span> <br />
                                single impact<span className="text-[#ea1e24]">.</span>
                            </h1>
                        </div>

                        {/* Founder Connect Block (using provided image structure) */}
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
                                        Connect with our Founders,<br />
                                        Prasanth Gopalakrishnan &<br />
                                        Rajalingam N
                                    </p>
                                    <Link href="https://www.linkedin.com/in/prasanth-gopalakrishnan-27995a302" target="_blank" rel="noopener noreferrer" className="relative text-[16px] text-[#111] w-fit mt-2 group/btn cursor-pointer">
                                        @Founders
                                        <span className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-[#ea1e24] transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover/btn:scale-x-100" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </main>

                    {/* Recognized By Section at the bottom of the Hero */}
                    <div className="w-full relative z-10 -mt-12 md:-mt-24 pointer-events-auto">
                        <RecognizedBy />
                    </div>

                    {/* Bottom Left Scroll Indicator */}
                    <div className="absolute bottom-12 left-8 md:left-16 z-20 hidden md:block">
                        <button
                            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                            className="w-12 h-12 rounded-full border border-zinc-300 flex items-center justify-center hover:bg-zinc-50 transition-colors cursor-pointer"
                        >
                            <ChevronDown size={20} className="text-zinc-500" />
                        </button>
                    </div>
                </div>

                {/* Our Businesses Section */}
                <OurBusinesses />

                {/* Vision and Mission Section */}
                <VisionMission />

                {/* Dedicated Contact Section */}
                <Contact />

                {/* Global Footer */}
                <Footer />
            </div>
        </div>
    );
}

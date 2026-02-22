"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navItems = [
    { name: "Our Business", href: "/#businesses" },
    { name: "About", href: "/#about" },
    { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isMobileMenuOpen]);
    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Check if we've scrolled down or up
            if (currentScrollY > lastScrollY && currentScrollY > 80) {
                // Scrolling down & past the header threshold
                setIsVisible(false);
            } else {
                // Scrolling up or at the very top
                setIsVisible(true);
            }

            setScrolled(currentScrollY > 20);
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-8 md:px-16 ${isMobileMenuOpen ? 'h-screen bg-white py-6' : scrolled ? "bg-white/90 backdrop-blur-md border-b border-zinc-200 py-4 shadow-sm" : "bg-transparent py-6"}
                ${!isMobileMenuOpen && !isVisible ? "-translate-y-full" : "translate-y-0"}
            `}
        >
            <div className="max-w-[1600px] mx-auto flex items-center justify-between">
                {/* Logo */}
                <div
                    className={`flex-shrink-0 transition-all duration-700 transform ${mounted ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
                        }`}
                >
                    <Link href="/" className="group flex items-center gap-1" onClick={() => setIsMobileMenuOpen(false)}>
                        <span className="text-3xl font-bold tracking-tighter lowercase text-[#ea1e24] group-hover:scale-105 transition-transform duration-300 inline-block">
                            superposition.
                        </span>
                    </Link>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8 text-[15px] font-medium text-zinc-600">
                    {navItems.map((item, index) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`relative group transition-all duration-700 transform ${mounted ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
                                } hover:text-black`}
                            style={{ transitionDelay: `${(index + 1) * 75}ms` }}
                        >
                            {item.name}
                            {/* Animated Underline */}
                            <span className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-[#ea1e24] transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button - Optional for later */}
                <div className="md:hidden flex items-center">
                    <button
                        className="text-zinc-600 hover:text-black transition-colors z-50 relative"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[#ea1e24]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Content (rendered within the now-fullscreen nav) */}
            <div
                className={`md:hidden flex flex-col items-center justify-start pt-24 gap-12 w-full transition-all duration-500 ease-in-out ${isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none absolute"
                    }`}
            >
                {navItems.map((item, index) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-4xl font-medium text-zinc-800 hover:text-[#ea1e24] transition-colors"
                        style={{
                            transitionProperty: "all",
                            transitionDuration: "400ms",
                            transitionTimingFunction: "ease-out",
                            transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms',
                            opacity: isMobileMenuOpen ? 1 : 0,
                            transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(-10px)',
                        }}
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
        </nav>
    );
}

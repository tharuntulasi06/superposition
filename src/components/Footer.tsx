import Link from "next/link";
import { MoveUp } from "lucide-react";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="w-full bg-white text-[#111] border-t border-zinc-100 py-6 px-8 md:px-16 relative z-10">
            <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm">

                {/* Brand */}
                <div className="flex items-center gap-2 shrink-0">
                    <Link href="/" className="inline-block group">
                        <span className="font-serif italic tracking-tighter text-2xl font-bold text-[#111] group-hover:text-zinc-700 transition-colors">
                            superposition<span className="text-[#ea1e24]">.</span>
                        </span>
                    </Link>
                </div>

                {/* Primary Footer Links */}
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-10 font-medium text-zinc-500">
                    <Link href="#businesses" className="hover:text-[#ea1e24] transition-colors duration-300">Our Businesses</Link>
                    <Link href="#about" className="hover:text-[#ea1e24] transition-colors duration-300">About Us</Link>
                    <Link href="#contact" className="hover:text-[#ea1e24] transition-colors duration-300">Contact</Link>
                    <Link href="#" className="hover:text-[#ea1e24] transition-colors duration-300">Privacy Policy</Link>
                </div>

                {/* Copyright & Scroll to Top */}
                <div className="flex items-center gap-6 shrink-0">
                    <span className="text-xs text-zinc-400 font-light">
                        © {new Date().getFullYear()} Superposition Ltd.
                    </span>

                    <button
                        onClick={scrollToTop}
                        className="w-8 h-8 rounded-full border border-zinc-200 bg-white hover:border-[#ea1e24]/30 hover:bg-[#ea1e24]/5 flex items-center justify-center group shadow-sm hover:shadow transition-all duration-300"
                        aria-label="Scroll to top"
                    >
                        <MoveUp size={14} className="text-zinc-400 group-hover:text-[#ea1e24] group-hover:-translate-y-0.5 transition-all duration-300" />
                    </button>
                </div>

            </div>
        </footer>
    );
}

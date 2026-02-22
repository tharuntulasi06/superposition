"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function OurBusinesses() {
    const business = {
        name: "AakashOS",
        tagline: "Telemetry OS for India’s Private Space Ecosystem. Infrastructure for India’s New Space Era. Not Just Run Missions Control, Run it better than ever before.",
        description: "AakashOS is a secure, AI-enabled Telemetry and Mission Operations platform designed for satellites, rockets, and high‑altitude platforms across India’s private space sector.",
        logoText: "AakashOS.",
        logoSubtext: "A SUPERPOSITION COMPANY",
        logoFont: "font-serif italic tracking-tighter",
    };

    return (
        <section id="businesses" className="w-full px-8 md:px-16 py-24 border-t border-zinc-100 overflow-hidden">
            {/* Header Area */}
            <div className="flex justify-between items-end mb-16">
                <div className="max-w-3xl">
                    <h2 className="text-4xl md:text-5xl font-medium text-[#111] mb-6">
                        <span className="border-b-2 border-[#ea1e24] pb-1">Our</span> business
                    </h2>
                    <p className="text-[17px] text-zinc-500 leading-relaxed font-light">
                        Superposition is a parent multi-venture group focused on building advanced technology sectors.
                        We identify transformative opportunities and architect the platforms that will define the next generation of digital infrastructure, commerce, and human interaction.
                    </p>
                </div>
            </div>

            {/* Featured Business layout */}
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center mt-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative w-full lg:w-3/5 h-[350px] sm:h-[450px] flex items-center justify-center"
                >
                    <div className="relative w-full h-full md:p-12">
                        <Image
                            src="/AakashOS.png"
                            alt="Aakash OS Logo"
                            fill
                            className="object-contain"
                            unoptimized={true}
                        />
                    </div>
                </motion.div>

                {/* Text Content */}
                <div className="w-full lg:w-2/5 flex flex-col justify-center">
                    <h3 className="text-3xl sm:text-4xl font-medium text-[#111] mb-6 leading-snug">
                        {business.tagline}
                    </h3>
                    <p className="text-[17px] text-zinc-500 leading-relaxed mb-10 w-11/12">
                        {business.description}
                    </p>

                    {/* CTAs */}
                    <div className="flex items-center gap-8 mt-2">
                        <div
                            className="relative text-[16px] font-medium text-[#111] w-fit group/btn cursor-pointer inline-flex items-center gap-2"
                            onClick={() => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' })}
                        >
                            Partner with us
                            <ArrowRight size={16} className="transform group-hover/btn:translate-x-1 transition-transform" />
                            <span className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-[#ea1e24] transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover/btn:scale-x-100" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

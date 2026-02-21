"use client";

import Image from "next/image";

export default function RecognizedBy() {
    // Define the images along with optical scaling factors
    // Some logos (like Antler/Abyuday) might have heavy padding in their PNGs, making them look small
    const vcImages = [
        { src: "/Recognized/Abyuday.png", scale: "scale-[3.5]" }, // Increased massively
        { src: "/Recognized/Antler.png", scale: "scale-[1.5]" }, // Decreased
        { src: "/Recognized/IITM.png", scale: "scale-[3.5]" }, // Increased massively
        { src: "/Recognized/Lightspeed.png", scale: "scale-100" }, // Normal
        { src: "/Recognized/MoIT.png", scale: "scale-[3.5]" }, // Increased massively
        { src: "/Recognized/NASA.png", scale: "scale-[3.5]" }, // Increased massively
        { src: "/Recognized/Nexus.png", scale: "scale-100" }, // Normal
    ];

    // Duplicate images to create a seamless infinite scrolling effect
    // We duplicate them multiple times so the track is always full
    const marqueeImages = [...vcImages, ...vcImages, ...vcImages, ...vcImages, ...vcImages, ...vcImages];

    return (
        <section className="w-full pb-4 md:pb-8 pt-4 relative z-10 overflow-hidden group/marquee">
            <div className="max-w-[1600px] mx-auto px-8 md:px-16 mb-6 flex justify-center">
                <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-zinc-400 uppercase drop-shadow-sm bg-white/50 px-3 py-1 rounded-full backdrop-blur-sm border border-zinc-200/50">
                    Recognized by
                </span>
            </div>

            {/* Infinite Marquee Container with CSS Mask for perfect transparent blending */}
            {/* Using group hover to smoothly decelerate the animation */}
            <div
                className="flex w-fit animate-marquee group-hover/marquee:[animation-duration:120s] transition-all duration-1000 items-center gap-16 md:gap-24 px-8 md:px-24"
                style={{
                    WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                    maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
                }}
            >
                {marqueeImages.map((image, i) => (
                    <div
                        key={i}
                        className="flex-shrink-0 w-[120px] sm:w-[150px] flex items-center justify-center pointer-events-none"
                    >
                        <Image
                            src={image.src}
                            alt={`RecognizedBy ${i}`}
                            width={160}
                            height={80}
                            className={`object-contain h-10 md:h-12 w-auto drop-shadow-sm ${image.scale}`}
                            unoptimized={true}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}

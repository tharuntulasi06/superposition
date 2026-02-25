"use client";

import Image from "next/image";

export default function RecognizedBy() {
    // Define the images along with optical scaling factors
    // Some logos (like Antler/Abyuday) might have heavy padding in their PNGs, making them look small
    const vcImages = [
        { src: "/Recognized/Abyuday.png", scale: "scale-[3.5]" }, // Increased massively
        { src: "/Recognized/TNG.png", scale: "scale-[3.5]" }, // Increased massively
        { src: "/Recognized/Lightspeed.png", scale: "scale-100" }, // Normal
        { src: "/Recognized/NASA.png", scale: "scale-[3.5]" }, // Increased massively
        { src: "/Recognized/ecell_logo3.png", scale: "scale-100" }, // Increased massively
        { src: "/Recognized/srmlogo.png", scale: "scale-100" },
    ];

    // Duplicate images to create a seamless infinite scrolling effect
    // We duplicate them an EVEN amount of times (8 copies) so the track's 50% mark is precisely at the start of a repeating sequence.
    const marqueeImages = [...vcImages, ...vcImages, ...vcImages, ...vcImages, ...vcImages, ...vcImages, ...vcImages, ...vcImages];

    return (
        <section className="w-full pb-4 md:pb-8 pt-4 relative z-10 overflow-hidden group/marquee">
            <div className="max-w-[1600px] mx-auto px-8 md:px-16 mb-2 flex justify-center">
                <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-zinc-400 uppercase drop-shadow-sm bg-white/50 px-3 py-1 rounded-full backdrop-blur-sm border border-zinc-200/50">
                    Recognized by
                </span>
            </div>

            {/* Stationary Wrapper with CSS Mask for perfect transparent blending */}
            <div
                className="relative flex overflow-hidden max-w-[1600px] mx-auto"
                style={{
                    WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                    maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
                }}
            >
                {/* Infinite Marquee Animated Container */}
                {/* Added vertical padding (pt-8 pb-16 md:pt-10 md:pb-20) to prevent top/bottom clipping while keeping logos close to the title */}
                <div className="flex w-max animate-marquee group-hover/marquee:[animation-play-state:paused] transition-all duration-1000 items-center pt-8 pb-16 md:pt-10 md:pb-20">
                    {marqueeImages.map((image, i) => (
                        <div
                            key={i}
                            className="flex-shrink-0 w-[120px] sm:w-[150px] flex items-center justify-center group/logo mr-16 md:mr-24"
                        >
                            {/* Wrapper div provides the hover zoom effect while preserving the base optical scaling */}
                            <div className="transition-transform duration-300 ease-out group-hover/logo:scale-[2.5] cursor-pointer hover:z-20 relative">
                                <Image
                                    src={image.src}
                                    alt={`RecognizedBy ${i}`}
                                    width={160}
                                    height={80}
                                    className={`object-contain h-10 md:h-12 w-auto drop-shadow-sm ${image.scale}`}
                                    unoptimized={true}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

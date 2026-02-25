"use client";

import Image from "next/image";

export default function RecognizedBy() {
    // Define the images along with optical scaling factors
    const vcImages = [
        { src: "/Recognized/ecell_logo3.png", scale: "scale-50" },
        { src: "/Recognized/ecell_logo3.png", scale: "scale-75" },
        { src: "/Recognized/ecell_logo3.png", scale: "scale-100" },
        { src: "/Recognized/ecell_logo3.png", scale: "scale-110" },
        { src: "/Recognized/ecell_logo3.png", scale: "scale-125" },
        { src: "/Recognized/ecell_logo3.png", scale: "scale-150" },
        { src: "/Recognized/NASA.png", scale: "scale-[3.5]" }, // Reference
    ];

    return (
        <section className="w-full pb-4 md:pb-8 pt-4 relative z-10 overflow-hidden group/marquee">
            <div className="max-w-[1600px] mx-auto px-8 md:px-16 mb-6 flex justify-center">
                <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-zinc-400 uppercase drop-shadow-sm bg-white/50 px-3 py-1 rounded-full backdrop-blur-sm border border-zinc-200/50">
                    Recognized by
                </span>
            </div>

            <div
                className="relative flex overflow-hidden max-w-[1600px] mx-auto"
            >
                <div className="flex w-fit items-center gap-16 md:gap-24 px-8 md:px-24">
                    {vcImages.map((image, i) => (
                        <div
                            key={i}
                            className="flex-shrink-0 w-[120px] sm:w-[150px] flex flex-col items-center justify-center"
                        >
                            <span className="text-white mb-2 text-xs">{image.scale}</span>
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
            </div>
        </section>
    );
}

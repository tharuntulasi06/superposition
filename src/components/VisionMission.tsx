"use client";

import { useEffect, useRef } from "react";

export default function VisionMission() {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        // Force the video to play when the component mounts (fixes React navigation autoPlay issues)
        if (videoRef.current) {
            videoRef.current.play().catch(error => console.log("Video autoPlay was intercepted:", error));
        }
    }, []);

    return (
        <section id="about" className="w-full px-8 md:px-16 py-24 bg-white relative z-10">
            <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                {/* Text Content Column */}
                <div className="flex flex-col gap-16 max-w-xl">
                    {/* Vision */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-medium text-[#111] mb-6">
                            <span className="border-b-2 border-[#ea1e24] pb-1">Our</span> vision
                        </h2>
                        <p className="text-[17px] text-zinc-500 leading-relaxed font-light">
                            To build a multi-venture technology parent group that creates, nurtures, and scales innovative products across diverse industries — empowering businesses, communities, and individuals through technology-driven solutions.
                        </p>
                    </div>

                    {/* Mission */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-medium text-[#111] mb-6">
                            <span className="border-b-2 border-[#ea1e24] pb-1">Our</span> mission
                        </h2>
                        <p className="text-[17px] text-zinc-500 leading-relaxed font-light">
                            To continuously incubate and support innovative ventures through technology, collaboration, and structured growth.
                        </p>
                    </div>
                </div>

                {/* Deeptech Interactive Video Column */}
                <div className="w-full aspect-[4/3] relative overflow-hidden group shadow-2xl shadow-zinc-200/50 rounded-2xl cursor-crosshair">
                    {/* 
                      The video starts in black and white (grayscale). 
                      When hovered, the CSS smoothly transitions it into full color and scales it up slightly.
                    */}
                    <div className="w-full h-full transition-all duration-1000 ease-in-out transform group-hover:scale-105 rounded-2xl overflow-hidden">
                        <video
                            ref={videoRef}
                            src="/huly_laser_remix.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

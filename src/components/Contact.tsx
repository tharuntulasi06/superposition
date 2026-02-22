
import Image from "next/image";

export default function Contact() {
    return (
        <section id="contact" className="w-full px-8 md:px-16 py-24 bg-[#111] text-white overflow-hidden relative">
            <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Text and Form or Email CTA */}
                <div className="flex flex-col justify-center order-2 lg:order-1">
                    <h2 className="text-4xl md:text-5xl font-medium mb-6">
                        <span className="border-b-2 border-[#ea1e24] pb-1">Start</span> a conversation
                    </h2>
                    <p className="text-[17px] text-zinc-400 leading-relaxed font-light mb-12 max-w-lg">
                        We are actively looking to partner with ambitious founders and technologists. If you're building the infrastructure of tomorrow, we'd love to hear from you.
                    </p>

                    <a href="mailto:superposition26@gmail.com" className="group flex items-center gap-4 w-fit">
                        <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-[#ea1e24] transition-colors duration-300">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm text-zinc-500 uppercase tracking-widest font-bold">Get in touch</span>
                            <span className="text-lg md:text-xl font-medium text-white group-hover:text-[#ea1e24] transition-colors duration-300">superposition26@gmail.com</span>
                        </div>
                    </a>
                </div>

                {/* Massive Image of founders2 */}
                <div className="relative w-full group order-1 lg:order-2 rounded-3xl overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#ea1e24]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none mix-blend-overlay" />
                    <Image
                        src="/founders2.png"
                        alt="Superposition Founders"
                        width={1200}
                        height={1200}
                        className="w-full h-auto transition-all duration-700 ease-out transform group-hover:scale-[1.02]"
                    />
                </div>
            </div>
        </section>
    );
}

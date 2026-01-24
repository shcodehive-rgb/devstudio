"use client"

import { motion } from "framer-motion"
import { ArrowRight, Mail } from "lucide-react"



export function Hero() {
    return (
        <section className="relative w-full min-h-screen flex flex-col lg:flex-row items-center bg-[#0a0a0a] pt-28 lg:pt-0 overflow-hidden">

            {/* Background Image Setup */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2070")'
                }}
            >
                {/* Overlay for Readability */}
                <div className="absolute inset-0 bg-black/70 z-10" />
            </div>

            {/* Left: Text Content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-20 py-12 lg:py-0 z-20 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block mb-4 text-xs font-bold tracking-[0.2em] text-cyan-400 uppercase drop-shadow-md">
                        Salah / Lead Developer
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6 drop-shadow-xl">
                        I Build High-Performance <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                            Digital Businesses.
                        </span>
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl max-w-lg mb-8 leading-relaxed drop-shadow-md">
                        Helping brands automate bookings and scale sales with custom web solutions.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        {/* Glassmorphism Button 1 */}
                        {/* Glassmorphism Button 1 */}
                        <a href="#work" className="group px-8 py-3 text-sm font-semibold text-white bg-white/5 backdrop-blur-md border border-white/20 rounded-lg hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all flex items-center justify-center gap-2">
                            View My Work
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>

                        {/* Glassmorphism Button 2 (Filled style) */}
                        <a href="mailto:devstudio130@gmail.com" className="px-8 py-3 text-sm font-semibold text-black bg-white rounded-lg hover:bg-gray-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all flex items-center justify-center gap-2">
                            <Mail className="w-4 h-4" />
                            Contact Me
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Right Side Removed as per user request */}
        </section>
    )
}

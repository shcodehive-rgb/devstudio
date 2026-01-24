"use client"

import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import { Code, Database, PenTool, TrendingUp, ArrowRight } from "lucide-react"

const features = [
    {
        icon: Code,
        title: "High-Performance Web",
        desc: "Next.js & React apps that load instantly.",
    },
    {
        icon: Database,
        title: "SaaS & Automation",
        desc: "Booking systems & CRM integrations (Laravel).",
    },
    {
        icon: PenTool,
        title: "Premium UI/UX",
        desc: "Modern, dark-themed designs that convert.",
    },
    {
        icon: TrendingUp,
        title: "Business Growth",
        desc: "SEO & Speed optimization for maximum reach.",
    },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring" as const,
            bounce: 0.4,
            duration: 0.8
        }
    },
}

export function Expertise() {
    return (
        <section id="expertise" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Left Side: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            My <span className="text-cyan-400">Expertise</span>
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl">
                            I don't just write code; I build automated systems that save you time and increase revenue. From custom booking platforms to high-end e-commerce.
                        </p>

                        <a href="#about" className="inline-flex group px-8 py-3 text-sm font-semibold text-white border border-white/20 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all items-center gap-2">
                            Read More
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </motion.div>

                    {/* Right Side: Grid of 4 Cards */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/50 hover:bg-white/10 transition-all duration-300 group"
                            >
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <feature.icon className="w-6 h-6 text-cyan-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                                <p className="text-sm text-gray-400 leading-relaxed">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                </div>
            </div>
        </section>
    )
}

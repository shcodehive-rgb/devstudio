"use client"

import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import { ExternalLink, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface Project {
    title: string
    desc: string
    stack: string[]
    link: string | null
    image: string
}

const projects: Project[] = [
    // Card 1
    {
        title: "InfiniPrint Platform",
        desc: "Morocco's #1 online printing solution with automated pricing.",
        stack: ["Laravel", "Vue.js", "MySQL"],
        link: "https://infiniprint.ma",
        image: "/infiniprint.png",
    },
    // Card 2
    {
        title: "Teclecom SaaS",
        desc: "Complete ERP system for business management & CRM.",
        stack: ["React", "Laravel", "AWS"],
        link: "https://app.teclecom.com/",
        image: "/teclecom.png",
    },
    // Card 3
    {
        title: "Idmisk Fashion",
        desc: "High-performance modest fashion e-commerce store.",
        stack: ["Next.js", "Shopify", "Tailwind"],
        link: "https://idmisk.com",
        image: "/idmisk.png",
    },
    // Card 4
    {
        title: "MoroccoAI Conference",
        desc: "Event management platform for the annual AI conference.",
        stack: ["Python", "Django"],
        link: "https://morocco.ai",
        image: "/morocco-ai.png",
    },
    // Card 5
    {
        title: "OHM Institutional",
        desc: "Official web platform for INRH with custom CMS.",
        stack: ["Angular", "Docker"],
        link: "https://ohm.ma/",
        image: "/ohm.jpeg",
    },
    // Card 6 (Concept)
    {
        title: "Pet Grooming App",
        desc: "Automated booking system for pet care businesses.",
        stack: ["React Native", "Node.js"],
        link: null,
        image: "/pet-grooming.png",
    },
]

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
}

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    },
}

export function FeaturedWork() {
    return (
        <section id="work" className="py-24 bg-[#0a0a0a]">
            <div className="container mx-auto px-6 md:px-12">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Latest <span className="text-cyan-400">Projects</span>
                    </h2>
                    <div className="h-1 w-20 bg-cyan-500 rounded-full" />
                </motion.div>

                {/* Grid Layout */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {projects.map((project, index) => {
                        const isLink = !!project.link;

                        return (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                className="group flex flex-col rounded-2xl overflow-hidden bg-[#111] border border-white/5 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1"
                            >
                                {/* Part A: Visual (Top) */}
                                <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-900 border-b border-white/5">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    {/* Hover Overlay with Icon */}
                                    {isLink && (
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <div className="bg-white/10 backdrop-blur-md p-3 rounded-full text-white">
                                                <ExternalLink size={24} />
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Part B: Info (Bottom) */}
                                <div className="flex flex-col flex-grow p-6">
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                                        {project.desc}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.stack.map((tech, i) => (
                                            <span key={i} className="px-2 py-1 text-[10px] uppercase tracking-wider font-semibold text-gray-400 bg-white/5 rounded-md">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Action Button */}
                                    {isLink ? (
                                        <Link href={project.link!} target="_blank" className="inline-flex items-center text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors gap-2">
                                            Visit Website <ArrowRight size={16} />
                                        </Link>
                                    ) : (
                                        <span className="inline-flex items-center text-sm font-semibold text-gray-600 gap-2 cursor-not-allowed">
                                            Coming Soon
                                        </span>
                                    )}
                                </div>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    )
}

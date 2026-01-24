"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

// Types
export type ProjectType = 'live' | 'concept';

export interface Project {
    id: string | number;
    title: string;
    category: string;
    image: string;
    link?: string;
    type: ProjectType;
}

interface ProjectMarqueeProps {
    projects: Project[];
    speed?: number; // Duration in seconds for one full loop
}

export function ProjectMarquee({ projects, speed = 30 }: ProjectMarqueeProps) {
    // Duplicate array for seamless looping
    const duplicatedProjects = [...projects, ...projects, ...projects];

    return (
        <div className="w-full overflow-hidden bg-[#0a0a0a] py-20 relative">
            {/* Gradient masks for smooth fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

            <motion.div
                className="flex gap-8 md:gap-12 w-max"
                style={{ x: 0 }}
                animate={{ x: "-33.33%" }}
                transition={{
                    duration: speed,
                    ease: "linear",
                    repeat: Infinity,
                }}
            >
                {duplicatedProjects.map((project, index) => (
                    <div key={`${project.id}-${index}`} className="relative group shrink-0 w-[300px] md:w-[450px] aspect-[4/3] rounded-xl overflow-hidden cursor-pointer">
                        {/* Image */}
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />

                        {/* Content based on Type */}
                        {project.type === 'live' ? (
                            // LIVE PROJECT: Always show details + Visit Button
                            <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col gap-2">
                                <div className="transform transition-transform duration-300 translate-y-2 group-hover:translate-y-0">
                                    <span className="text-xs font-bold tracking-wider text-cyan-400 uppercase">{project.category}</span>
                                    <h3 className="text-2xl font-bold text-white mt-1">{project.title}</h3>
                                </div>

                                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 pt-2">
                                    {project.link && (
                                        <Link href={project.link} target="_blank" className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-white/10 backdrop-blur-md px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all">
                                            Visit Site <ArrowUpRight className="w-4 h-4" />
                                        </Link>
                                    )}
                                </div>
                            </div>
                        ) : (
                            // CONCEPT PROJECT: Text hidden, reveals on hover with zoom
                            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 text-center">
                                <span className="text-xs font-bold tracking-wider text-gray-300 uppercase mb-2">Concept</span>
                                <h3 className="text-3xl md:text-4xl font-bold text-white scale-90 group-hover:scale-100 transition-transform duration-300">{project.title}</h3>
                                <span className="mt-4 text-sm text-gray-300 italic">{project.category}</span>
                            </div>
                        )}
                    </div>
                ))}
            </motion.div>
        </div>
    )
}

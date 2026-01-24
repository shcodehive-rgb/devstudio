"use client"

import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import { Code, Database, Server, Smartphone, Layout, Terminal, Box, Globe, Briefcase, Award } from "lucide-react"

// Types for our data structures
interface TechItem {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon: any;
    name: string;
}

interface Stat {
    value: string;
    label: string;
}

interface Job {
    role: string;
    company: string;
    period: string;
}

const techStack: TechItem[] = [
    { icon: Terminal, name: "Python" },
    { icon: Server, name: "Node.js" },
    { icon: Globe, name: "Next.js" },
    { icon: Layout, name: "React" },
    { icon: Box, name: "Docker" },
    { icon: Database, name: "PostgreSQL" },
    { icon: Database, name: "MongoDB" },
    { icon: Code, name: "Tailwind" },
]

const stats: Stat[] = [
    { value: "50+", label: "Projects" },
    { value: "100%", label: "Satisfaction" },
    { value: "5+", label: "Years Exp." },
]

const jobs: Job[] = [
    { role: "Lead Developer", company: "DevStudio", period: "Current" },
    { role: "Freelance Full-Stack", company: "Global Clients", period: "2020 - 2024" },
]

const skills = [
    { name: "Frontend (Next.js/React)", percent: 98 },
    { name: "Backend (Python/Node.js)", percent: 95 },
    { name: "DevOps & Cloud", percent: 90 },
    { name: "Mobile (Capacitor)", percent: 85 },
]

// Animation Variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
}

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    },
}

const progressVariants: Variants = {
    hidden: { width: "0%" },
    visible: (custom: number) => ({
        width: `${custom}%`,
        transition: { duration: 1.5, ease: "easeOut", delay: 0.5 }
    }),
}

export function About() {
    return (
        <section id="about" className="py-24 bg-[#0a0a0a]" style={{ scrollMarginTop: "100px" }}>
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >

                    {/* 1. Top Left: Tech Arsenal */}
                    <motion.div variants={itemVariants} className="p-8 rounded-2xl bg-[#0f0f0f] border border-white/5 hover:border-white/10 transition-colors">
                        <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                            <Terminal className="text-cyan-400" size={20} />
                            Tech Arsenal
                        </h3>
                        <p className="text-gray-400 text-sm mb-6">Mastering the full spectrum of modern web development.</p>

                        <div className="grid grid-cols-4 gap-4">
                            {techStack.map((tech, i) => (
                                <div key={i} className="flex flex-col items-center gap-2 group cursor-default">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-cyan-400 group-hover:bg-cyan-400/10 transition-all duration-300">
                                        <tech.icon size={20} />
                                    </div>
                                    <span className="text-[10px] text-gray-500 font-medium uppercase tracking-wider group-hover:text-gray-300 transition-colors">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* 3. Top Right: The Developer (Stats & Bio) */}
                    <motion.div variants={itemVariants} className="p-8 rounded-2xl bg-[#0f0f0f] border border-white/5 hover:border-white/10 transition-colors flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                                <Briefcase className="text-purple-400" size={20} />
                                More Than Just Code
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                I operate as a complete digital partner. From simple landing pages to complex SaaS platforms handling thousands of users, I build solutions that scale.
                            </p>
                        </div>

                        <div className="grid grid-cols-3 gap-4 mt-auto">
                            {stats.map((stat, i) => (
                                <div key={i} className="text-center p-4 rounded-xl bg-white/5">
                                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                                    <div className="text-[10px] text-gray-500 uppercase tracking-wider">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* 2. Bottom Left: My Capabilities (Progress Bars) */}
                    <motion.div variants={itemVariants} className="p-8 rounded-2xl bg-[#0f0f0f] border border-white/5 hover:border-white/10 transition-colors">
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            <Award className="text-blue-400" size={20} />
                            My Capabilities
                        </h3>

                        <div className="space-y-6">
                            {skills.map((skill, i) => (
                                <div key={i}>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="text-gray-300 font-medium">{skill.name}</span>
                                        <span className="text-gray-500">{skill.percent}%</span>
                                    </div>
                                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                        <motion.div
                                            variants={progressVariants}
                                            custom={skill.percent}
                                            className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* 4. Bottom Right: Journey (Timeline) */}
                    <motion.div variants={itemVariants} className="p-8 rounded-2xl bg-[#0f0f0f] border border-white/5 hover:border-white/10 transition-colors">
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            <Globe className="text-emerald-400" size={20} />
                            Journey
                        </h3>

                        <div className="space-y-6 relative">
                            {/* Vertical Line */}
                            <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-white/5" />

                            {jobs.map((job, i) => (
                                <div key={i} className="relative pl-8">
                                    <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-[#0a0a0a] border-2 border-cyan-500 z-10" />
                                    <h4 className="text-lg font-bold text-white">{job.role}</h4>
                                    <p className="text-cyan-400 text-sm mb-1">@{job.company}</p>
                                    <p className="text-xs text-gray-500 font-mono">{job.period}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 pt-6 border-t border-white/5">
                            <p className="text-sm text-gray-400 italic">"Always learning, always shipping."</p>
                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    )
}

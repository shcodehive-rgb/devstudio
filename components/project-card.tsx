"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"

interface ProjectCardProps {
  title: string
  category: string
  image: string
  index: number
}

export function ProjectCard({ title, category, image, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative w-full md:w-[400px] h-[500px] rounded-2xl bg-[#1e1e2e] border border-white/10 overflow-hidden hover:border-blue-400/50 transition-all shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 1. Header d Browser (Zwaq) */}
      <div className="absolute top-0 left-0 right-0 z-20 h-8 bg-[#2a2a35] border-b border-white/5 flex items-center px-3 gap-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        </div>
        <div className="flex-1 text-[10px] text-center text-gray-500 font-mono opacity-50">
           {title.toLowerCase().replace(/\s/g, "")}.com
        </div>
      </div>

      {/* 2. L'Image Twila (Hna fin kyna l'magie) */}
      <div className="absolute top-8 left-0 right-0 bottom-0 overflow-hidden bg-gray-900">
        <div
          className="w-full transition-transform duration-[6000ms] ease-linear"
          style={{
            // ILA KAN HOVER: Habat tal lta7at (calc(-100% + height d container))
            // ILA MAKANCH: Rja3 l 0 (lfo9)
            transform: isHovered ? "translateY(calc(-100% + 460px))" : "translateY(0)"
          }}
        >
          {/* Tswira 3adiya (Width full, Height auto) */}
          <img 
            src={image} 
            alt={title} 
            className="w-full h-auto object-cover block"
          />
        </div>

        {/* Overlay K7al (Kaymchi mli t9iyso) */}
        <div className={`absolute inset-0 bg-gradient-to-t from-[#05050a] via-transparent to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`} />
      </div>

      {/* 3. Text fo9 Tswira (Kayhabat mli t9iyso) */}
      <div className={`absolute bottom-0 left-0 right-0 p-6 z-10 transition-transform duration-500 ${isHovered ? 'translate-y-full' : 'translate-y-0'}`}>
        <p className="text-xs text-blue-400 mb-1 font-medium tracking-wider uppercase">{category}</p>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
    </motion.div>
  )
}
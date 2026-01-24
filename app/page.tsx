"use client"

import { Hero } from "@/components/hero"
import { Expertise } from "@/components/expertise"
import { About } from "@/components/about"
import { FeaturedWork } from "@/components/featured-work"
import { Contact } from "@/components/contact"

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">

      {/* 2. Hero Section: Animated Code Editor */}
      <Hero />

      {/* 3. Expertise Section: 2x2 Grid */}
      <Expertise />

      {/* 4. About & Skills: Bento Grid */}
      <About />

      {/* 5. Latest Projects: Vertical PNG Gallery */}
      <FeaturedWork />

      {/* 6. Team & Contact: Partners & Form */}
      <Contact />

    </main>
  )
}
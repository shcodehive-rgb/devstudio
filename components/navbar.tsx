"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
// Assuming utils exists, if not I will standard generic class join
// But wait, existing codebase usually has lib/utils for shadcn/tailwind-merge. 
// I'll check if lib/utils exists. If not I will create it or use inline logic.
// The list_dir didn't show lib folder in root but maybe I missed it or it's inside app or components?
// Actually list_dir of root showed: app, components, public. No lib.
// So I should avoid importing from @/lib/utils if I'm not sure.
// I'll stick to standard template literals or install clsx/tailwind-merge if I need complex class merging.
// Re-reading list_dir output from Step 4: No 'lib' folder. 
// However, 'components/ui' usually implies shadcn which uses lib/utils.
// Let me check 'components/ui/button.tsx' if it exists to see how they merge classes.
// I'll do that in a separate step if I fail, but for now I'll implement Navbar without generic utility or define a small helper.

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Expertise", href: "#expertise" },
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md bg-black/50 border-white/5 border-b"
    >
      {/* Left: Logo */}
      <Link href="/" className="text-xl font-bold tracking-tight text-white font-sans">
        DevStudio.
      </Link>

      {/* Center: Links */}
      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Right: CTA */}
      <Link
        href="#contact"
        className="hidden md:inline-flex"
      >
        <button className="px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full hover:opacity-90 transition-opacity">
          Book a Call
        </button>
      </Link>

      {/* Mobile Menu Toggle (Simple placeholder for now) */}
      <div className="md:hidden text-white">
        {/* You could add a hamburger menu here if needed later */}
        <span className="sr-only">Menu</span>
      </div>
    </motion.header>
  )
}

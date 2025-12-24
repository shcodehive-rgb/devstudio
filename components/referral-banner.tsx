"use client"

import { motion } from "framer-motion"
import { Gift } from "lucide-react"

// Hna zedna Props bach nst9blo Texte
interface ReferralBannerProps {
  text: string;
  amount: string;
}

export function ReferralBanner({ text, amount }: ReferralBannerProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="py-8 px-4"
    >
      <div className="container mx-auto">
        <div className="relative rounded-2xl overflow-hidden max-w-4xl mx-auto shadow-2xl shadow-purple-900/20">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 via-purple-900/40 to-pink-900/40" />
          <div className="absolute inset-0 backdrop-blur-xl bg-white/5 border border-white/10" />

          {/* Content */}
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-4 py-6 px-8 text-center">
            <div className="p-3 bg-white/10 rounded-full">
               <Gift className="text-purple-400" size={24} />
            </div>
            <p className="text-lg md:text-xl font-medium">
              <span className="text-gray-200">{text} </span>
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text font-bold block md:inline mt-1 md:mt-0">
                {amount}
              </span>
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
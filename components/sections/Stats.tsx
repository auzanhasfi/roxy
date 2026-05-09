'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export function Stats() {
  return (
    <section className="py-4 md:py-8 px-4 md:px-6">
      <div className="mx-auto max-w-[1440px]">
        <div className="relative bg-[#1A1A1A] rounded-[32px] overflow-hidden py-16 px-8 md:p-24 border border-white/5">
          {/* Background Cinematic Image - darkened heavily */}
          <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/20 via-[#1A1A1A] to-[#1A1A1A]"></div>

          <div className="relative z-10 w-full">
            <div className="mb-16">
              <span className="text-[#C6A46C] text-xs font-bold tracking-[0.2em] uppercase mb-4 block text-center">Milestones</span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
              {[
                { value: "100+", label: "Brand Tenants" },
                { value: "1M+", label: "Yearly Visitors" },
                { value: "20+", label: "Dining Options" },
                { value: "15", label: "Years Trusted" },
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center flex flex-col items-center justify-center bg-white/5 border border-white/10 rounded-2xl py-8"
                >
                  <div className="flex items-start">
                    <span className="text-4xl md:text-5xl font-poppins font-bold text-white">{stat.value.replace('+', '')}</span>
                    {stat.value.includes('+') && <span className="text-xl md:text-2xl font-poppins font-bold text-[#D7F04B]">+</span>}
                  </div>
                  <span className="text-[10px] text-white/50 font-bold mt-4 uppercase tracking-[0.2em]">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

'use client';

import Image from 'next/image';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative pt-24 pb-4 px-4 md:px-6">
      <div className="mx-auto max-w-[1440px] w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-min h-auto md:h-[calc(100vh-8rem)]">
          
          {/* Left: Cinematic Image */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-7 bg-[#111111] rounded-[32px] overflow-hidden relative group h-[60vh] md:h-full flex flex-col justify-end p-8"
          >
            <Image
              src="https://images.unsplash.com/photo-1519999482648-25049ddd37b1?q=80&w=2126&auto=format&fit=crop"
              alt="Modern lifestyle mall architecture"
              fill
              className="object-cover mix-blend-overlay opacity-60"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Overlay gradient for premium feel */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
            <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent z-10" />
            
            <div className="absolute inset-0 flex items-center justify-center text-white/5 text-[10rem] md:text-[18rem] font-bold select-none z-10 leading-none">
              ROXY
            </div>

            {/* Floating Stats in Left Image area from Bento layout */}
            <div className="relative z-20 flex flex-wrap gap-4 mt-auto">
              <div>
                <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-xl border border-white/10 text-white">
                  <div className="font-bold text-2xl">100+</div>
                  <div className="text-white/60 text-[10px] uppercase tracking-wider">Brand Tenant</div>
                </div>
              </div>
              <div>
                <div className="bg-[#D7F04B] px-5 py-3 rounded-xl border border-black/5 text-[#111111]">
                  <div className="font-bold text-2xl flex items-baseline gap-1">15 <span className="text-sm font-medium">Tahun</span></div>
                  <div className="text-black/60 text-[10px] uppercase tracking-wider">Melayani Jember</div>
                </div>
              </div>
            </div>

            <div className="absolute top-0 right-0 p-8 z-20">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm">
                <div className="w-2 h-2 bg-[#D7F04B] rounded-full animate-pulse"></div>
              </div>
            </div>
          </motion.div>

          {/* Right: Typography and Content */}
          <div className="md:col-span-5 flex flex-col justify-center px-8 md:px-12 bg-white rounded-[32px] border border-[#111111]/5 shadow-xl shadow-black/[0.02] py-12 md:py-8 h-auto md:h-full">
            <span className="text-[#C6A46C] text-xs font-bold tracking-[0.2em] uppercase mb-4">The Urban Lifestyle Destination</span>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="font-poppins text-5xl md:text-6xl font-bold leading-[0.95] tracking-tighter text-[#111111] mb-6">
                A New <br />Lifestyle <br /><span className="italic font-serif font-light text-[#111111]/80">Standard.</span>
              </h1>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-[#111111]/60 text-sm md:text-base leading-relaxed mb-10 max-w-sm"
            >
              Destinasi belanja, hiburan, kuliner, dan gaya hidup modern untuk keluarga Jember.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap items-center gap-3"
            >
              <button className="px-6 py-3 bg-[#111111] text-white rounded-full text-sm font-semibold flex items-center gap-2 group hover:bg-[#1A1A1A] transition-all">
                Explore Tenant
                <span className="w-5 h-5 bg-[#D7F04B] text-black rounded-full flex items-center justify-center text-[10px]">→</span>
              </button>
              <button className="px-6 py-3 border border-[#111111]/10 rounded-full text-sm font-semibold hover:bg-[#FAF8F5] transition-colors">
                View Promotions
              </button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}

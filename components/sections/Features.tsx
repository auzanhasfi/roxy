'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const features = [
  {
    title: "Shopping Experience",
    desc: "100+ brand lokal dan internasional untuk gaya hidup Anda.",
    theme: "dark",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070&auto=format&fit=crop", // clothing store
  },
  {
    title: "Culinary Destination",
    desc: "Dari fine dining hingga street food premium.",
    theme: "lime",
    // No image for lime card in reference
  },
  {
    title: "Family Friendly",
    desc: "Fasilitas lengkap untuk kenyamanan keluarga Anda.",
    theme: "light",
    image: "https://images.unsplash.com/photo-1510168340798-502a9eb78921?q=80&w=2070&auto=format&fit=crop", // mall interior
  }
];

export function Features() {
  return (
    <section id="tentang" className="py-4 md:py-8 px-4 md:px-6">
      <div className="mx-auto max-w-[1440px]">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-12 mb-4 px-4">
            <span className="text-[#C6A46C] text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Tentang</span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-poppins font-bold text-[#111111] leading-tight tracking-tighter"
            >
              Pusat gaya hidup & <br className="hidden md:block" />hiburan terpadu.
            </motion.h2>
          </div>

          {/* Card 1: Dark */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-4 group relative min-h-[400px] rounded-[32px] overflow-hidden bg-[#111111] text-white p-8 border border-[#111111] flex flex-col justify-end isolate"
          >
            <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-60 transition-opacity duration-500">
               <Image src={features[0].image!} alt={features[0].title} fill className="object-cover" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[rgba(17,17,17,0.6)] to-transparent z-10" />
            <div className="relative z-20">
               <span className="text-white/60 text-[10px] font-bold uppercase tracking-wider mb-2 block">01.</span>
               <h3 className="text-2xl font-poppins font-semibold mb-3">{features[0].title}</h3>
               <p className="text-white/80 font-inter text-sm">{features[0].desc}</p>
            </div>
            <button className="absolute top-8 right-8 z-20 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
          </motion.div>

          {/* Card 2: Lime */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-4 group relative min-h-[400px] rounded-[32px] overflow-hidden bg-[#D7F04B] text-[#111111] p-8 flex flex-col pt-12 border border-black/5"
          >
            <div className="relative z-20">
               <span className="text-[#111111]/40 text-[10px] font-bold uppercase tracking-wider mb-6 block">02.</span>
               <h3 className="text-3xl font-poppins font-bold mb-4 leading-tight">{features[1].title}</h3>
               <p className="text-[#111111]/80 font-inter text-sm pt-4 border-t border-[#111111]/10">{features[1].desc}</p>
            </div>
            <button className="absolute bottom-8 right-8 z-20 w-12 h-12 bg-[#111111] text-[#D7F04B] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 14-7-7 14v-7z"/></svg>
            </button>
          </motion.div>

          {/* Card 3: Light Image with Overlay */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-4 group relative min-h-[400px] rounded-[32px] overflow-hidden bg-white border border-[#111111]/5 text-white p-8 flex flex-col justify-end isolate"
          >
            <div className="absolute inset-0 z-0 opacity-80">
               <Image src={features[2].image!} alt={features[2].title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
            
            <div className="relative z-20 flex flex-col">
               <span className="text-white/60 text-[10px] font-bold uppercase tracking-wider mb-2 block">03.</span>
               <h3 className="text-2xl font-poppins font-semibold mb-3">{features[2].title}</h3>
               <p className="text-white/80 font-inter text-sm">{features[2].desc}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const tenants = [
  "CGV", "MR DIY", "KFC", "Watsons", "Mixue", "Matahari", "Solaria", "Starbucks"
];

const categories = ["All", "Fashion", "F&B", "Entertainment", "Health & Beauty", "Supermarket"];

export function Tenants() {
  return (
    <section id="tenant" className="py-4 md:py-8 px-4 md:px-6">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-5 bg-[#FAF8F5] rounded-[32px] p-8 md:p-12 border border-[#111111]/5 flex flex-col">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="mb-auto"
            >
              <span className="text-[#C6A46C] text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Partner Brands</span>
              <h2 className="text-4xl md:text-5xl font-poppins font-bold text-[#111111] leading-tight mb-8">Exclusive<br/>Tenants.</h2>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {categories.map((cat, i) => (
                  <button 
                    key={cat} 
                    className={`px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider transition-colors ${i === 0 ? 'bg-[#111111] text-white' : 'bg-white text-neutral-600 border border-neutral-200 hover:border-[#111111] hover:text-[#111111]' }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </motion.div>
            
            <motion.button 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-[11px] font-bold text-[#C6A46C] tracking-wider uppercase flex items-center gap-2 group w-fit mt-8"
            >
              View All Directory
              <span className="w-5 h-5 bg-[#C6A46C]/10 rounded-full flex items-center justify-center group-hover:bg-[#C6A46C] group-hover:text-white transition-colors">→</span>
            </motion.button>
          </div>

          <div className="md:col-span-7 bg-[#1A1A1A] rounded-[32px] p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-full content-center">
              {tenants.map((name, i) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 aspect-square flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer group"
                >
                  <span className="font-poppins font-bold text-[10px] md:text-[11px] uppercase tracking-[0.1em] text-white/50 group-hover:text-white transition-colors text-center">{name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

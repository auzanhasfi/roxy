'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export function CTA() {
  return (
    <section className="py-4 md:py-8 px-4 md:px-6">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="col-span-1 md:col-span-8 bg-[#C6A46C] rounded-[32px] p-8 md:p-12 flex flex-col justify-between">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 border-b border-black/10 pb-8"
            >
              <h2 className="text-4xl md:text-6xl font-poppins font-bold text-[#111111] mb-4 leading-tight tracking-tighter max-w-xl">
                Experience Modern Lifestyle at Roxy Jember.
              </h2>
              <p className="text-[#111111]/70 font-inter text-sm max-w-md">
                Bergabunglah dengan ribuan pengunjung lain yang telah menjadikan kami destinasi utama mereka setiap hari.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <button className="bg-[#111111] text-white px-8 py-4 rounded-full font-bold text-sm tracking-wider uppercase hover:bg-[#1A1A1A] transition-all flex items-center gap-3 w-fit">
                Kunjungi Sekarang
                <span className="w-6 h-6 bg-[#D7F04B] text-black rounded-full flex items-center justify-center">→</span>
              </button>
            </motion.div>
          </div>

          <div className="col-span-1 md:col-span-4 bg-[#111111] rounded-[32px] p-8 md:p-12 border border-white/5 flex flex-col justify-between text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="font-poppins font-bold text-2xl mb-2">Get in<br/>Touch</h3>
              <p className="text-[#C6A46C] text-[10px] uppercase font-bold tracking-[0.2em] mb-8">Jl. Hayam Wuruk No.1, Jember</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex gap-2"
            >
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer border border-white/5">
                <span className="text-[10px] font-bold uppercase tracking-wider">IG</span>
              </div>
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer border border-white/5">
                <span className="text-[10px] font-bold uppercase tracking-wider">WA</span>
              </div>
              <div className="flex-grow h-12 bg-[#D7F04B] rounded-full flex items-center justify-center hover:bg-[#c4de3e] transition-colors cursor-pointer text-[#111111]">
                <span className="text-[10px] font-bold uppercase tracking-wider">Call Us</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

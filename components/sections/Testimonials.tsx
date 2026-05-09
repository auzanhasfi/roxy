'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const testimonials = [
  {
    name: "Budi Santoso",
    role: "Family Visitor",
    text: "Pusat perbelanjaan paling nyaman di Jember. Anak-anak sangat suka area bermainnya, sementara istri bisa santai berbelanja.",
    rating: 5
  },
  {
    name: "Siti Rahma",
    role: "Tenant Partner",
    text: "Sejak membuka cabang di Roxy Jember, pertumbuhan bisnis kami sangat signifikan. Manajemen mall sangat profesional.",
    rating: 5
  },
  {
    name: "Rio Pratama",
    role: "Local Resident",
    text: "Tempat nongkrong favorit setiap akhir pekan. Pilihan kulinernya lengkap dan bioskopnya selalu menayangkan film terbaru.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-4 md:py-8 px-4 md:px-6">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-8 px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#C6A46C] text-xs font-bold tracking-[0.2em] uppercase mb-2 block">Testimonials</span>
            <h2 className="text-3xl md:text-5xl font-poppins font-bold text-[#111111] tracking-tighter">Happy Visitors.</h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[32px] p-8 md:p-10 shadow-sm border border-[#111111]/5 flex flex-col"
            >
              <div className="flex items-center gap-1 mb-6">
                {[...Array(t.rating)].map((_, idx) => (
                  <svg key={idx} width="16" height="16" viewBox="0 0 24 24" fill="#C6A46C" stroke="#C6A46C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                ))}
              </div>
              <p className="text-[#111111]/70 font-inter leading-relaxed mb-10 text-[15px] flex-grow">&quot;{t.text}&quot;</p>
              
              <div className="flex items-center gap-4 pt-6 border-t border-[#111111]/5 mt-auto">
                <div className="w-10 h-10 rounded-full bg-[#111111]/5 overflow-hidden relative">
                   <div className="absolute inset-0 flex items-center justify-center bg-[#1A1A1A] text-white font-poppins font-semibold text-xs">
                     {t.name.charAt(0)}
                   </div>
                </div>
                <div>
                  <h4 className="font-poppins font-bold text-[#111111] text-sm">{t.name}</h4>
                  <span className="text-[10px] text-[#111111]/50 font-bold uppercase tracking-wider">{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

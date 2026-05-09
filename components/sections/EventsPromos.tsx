'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const promos = [
  {
    title: "Weekend Sale Special",
    desc: "Up to 70% Off on selected fashion brands.",
    image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?q=80&w=2070&auto=format&fit=crop",
    date: "Until Sunday"
  },
  {
    title: "Culinary Festival",
    desc: "Buy 1 Get 1 free at the Food Court.",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop",
    date: "All Month"
  }
];

export function EventsPromos() {
  return (
    <section id="promo" className="py-4 md:py-8 px-4 md:px-6">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-8 px-4 flex justify-between items-end">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#C6A46C] text-xs font-bold tracking-[0.2em] uppercase mb-2 block">Events</span>
            <h2 className="text-3xl md:text-5xl font-poppins font-bold text-[#111111] tracking-tighter">Update & Promo.</h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {promos.map((promo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative min-h-[400px] md:min-h-[500px] rounded-[32px] overflow-hidden cursor-pointer border border-[#111111]/5"
            >
              <div className="absolute inset-0 z-0">
                <Image src={promo.image} alt={promo.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                <span className="inline-block px-3 py-1 bg-[#D7F04B] text-[#111111] text-xs font-semibold rounded-full mb-4 uppercase tracking-wider">{promo.date}</span>
                <h3 className="text-2xl md:text-3xl font-poppins font-semibold text-white mb-2">{promo.title}</h3>
                <p className="text-white/80 font-inter">{promo.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

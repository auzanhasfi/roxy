'use client';

import { motion } from 'motion/react';
import { Wifi, ParkingSquare, Car, Baby, CreditCard, Film, Coffee, Heart } from 'lucide-react';

const facilities = [
  { icon: ParkingSquare, label: "Parking Area" },
  { icon: Wifi, label: "Free WiFi" },
  { icon: Baby, label: "Kids Playground" },
  { icon: CreditCard, label: "ATM Center" },
  { icon: Heart, label: "Prayer Room" },
  { icon: Car, label: "EV Charging" },
  { icon: Film, label: "Cinema" },
  { icon: Coffee, label: "Food Court" },
];

export function Facilities() {
  return (
    <section className="py-4 md:py-8 px-4 md:px-6">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="col-span-1 md:col-span-4 bg-white p-8 md:p-12 rounded-[32px] border border-[#111111]/5 flex flex-col justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#C6A46C] text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Amenities</span>
              <h2 className="text-4xl md:text-5xl font-poppins font-bold text-[#111111] leading-tight tracking-tighter mb-4">World-Class<br className="hidden lg:block"/>Facilities.</h2>
              <p className="text-[#111111]/50 font-inter text-sm max-w-sm">Kenyamanan Anda adalah prioritas utama kami. Menyediakan layanan terbaik bagi keluarga.</p>
            </motion.div>
          </div>

          <div className="col-span-1 md:col-span-8 bg-[#111111] p-4 md:p-8 rounded-[32px]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-full content-center">
              {facilities.map((fac, i) => {
                const Icon = fac.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="group bg-white/5 flex flex-col items-center justify-center p-6 rounded-2xl border border-white/10 hover:bg-[#D7F04B] hover:border-[#D7F04B] transition-colors duration-300 aspect-square"
                  >
                    <div className="w-12 h-12 bg-white/10 group-hover:bg-[#111111]/10 rounded-full flex items-center justify-center mb-4 transition-colors duration-300">
                      <Icon strokeWidth={1.5} className="w-5 h-5 text-white group-hover:text-[#111111] transition-colors" />
                    </div>
                    <span className="font-poppins font-semibold text-white group-hover:text-[#111111] text-[11px] uppercase tracking-wider text-center transition-colors">{fac.label}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { cn } from "@/lib/utils"

export function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 transition-all duration-300 px-4 md:px-6 pt-4">
      <div className="mx-auto w-full max-w-[1440px]">
        <nav className="flex items-center justify-between h-14 px-6 bg-white/40 backdrop-blur-md rounded-2xl border border-white/50 shadow-sm">
          <div className="flex items-center gap-2">
            {/* Logo placeholder */}
            <div className="w-8 h-8 bg-[#111111] rounded-full flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-[#C6A46C] rotate-45"></div>
            </div>
            <span className="font-poppins font-bold text-xl tracking-tight text-[#111111]">Roxy<span className="text-[#C6A46C]">Jember</span></span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#111111]/70">
            {['Home', 'Tentang', 'Tenant', 'Promo', 'Event'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-[#111111] transition-colors">
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden lg:flex items-center text-[11px] font-semibold uppercase tracking-[0.1em] text-[#111111]/70">
              <span className="mr-2">Call Us:</span>
              (0331) 488-888
            </span>
            <button className="bg-[#111111] text-white px-5 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider hover:bg-[#1A1A1A] transition-all">
              Visit Now
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}

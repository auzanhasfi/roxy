export function Footer() {
  return (
    <footer className="py-4 md:py-8 px-4 md:px-6">
      <div className="mx-auto max-w-[1440px]">
        <div className="bg-white rounded-[32px] px-8 md:px-12 py-16 border border-[#111111]/5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-[#111111] rounded-full flex items-center justify-center">
                  <span className="text-white font-poppins font-bold text-xl">R</span>
                </div>
                <span className="font-poppins font-bold text-2xl tracking-tight text-[#111111]">Roxy<span className="font-light text-neutral-500">Jember</span></span>
              </div>
              <p className="text-neutral-500 font-inter max-w-sm mb-8 leading-relaxed">
                Pusat perbelanjaan dan gaya hidup premium terbesar yang menjadi landmark kebanggaan kota Jember.
              </p>
              <div className="flex gap-4">
                {['Ig', 'Fb', 'Tw', 'Tt'].map((social) => (
                  <a key={social} href="#" className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600 hover:border-[#111111] hover:text-[#111111] transition-colors">
                    <span className="text-sm font-medium">{social}</span>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-poppins font-semibold text-[#111111] mb-6">Explore</h4>
              <ul className="space-y-4">
                {['Home', 'Tenant Directory', 'Promo & Events', 'Facilities', 'Gallery', 'Career'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-neutral-500 hover:text-[#111111] font-inter transition-colors text-sm">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-poppins font-semibold text-[#111111] mb-6">Visit</h4>
              <ul className="space-y-4">
                <li className="text-neutral-500 font-inter text-sm">
                  Jl. Hayam Wuruk No.1,<br />
                  Kaliwates, Jember, Jawa Timur 68133
                </li>
                <li className="pt-4 border-t border-neutral-100">
                  <strong className="block text-[#111111] mb-1 text-sm">Operating Hours</strong>
                  <span className="text-neutral-500 text-sm">Everyday: 10:00 - 22:00 WIB</span>
                </li>
                <li className="pt-2">
                  <a href="#" className="text-[#111111] font-medium border-b border-[#111111] pb-0.5 hover:text-neutral-600 hover:border-neutral-600 transition-colors text-sm">
                    Open in Google Maps
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-neutral-200">
            <p className="text-neutral-400 text-xs font-inter font-medium mb-4 md:mb-0 uppercase tracking-wider">
              © {new Date().getFullYear()} Roxy Jember. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs text-neutral-400 font-inter uppercase tracking-wider font-medium">
              <a href="#" className="hover:text-[#111111]">Privacy Policy</a>
              <a href="#" className="hover:text-[#111111]">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

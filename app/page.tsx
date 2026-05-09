import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Stats } from "@/components/sections/Stats";
import { Tenants } from "@/components/sections/Tenants";
import { EventsPromos } from "@/components/sections/EventsPromos";
import { Facilities } from "@/components/sections/Facilities";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F1EA]">
      <Navbar />
      <Hero />
      <Features />
      <Tenants />
      <EventsPromos />
      <Facilities />
      <Stats />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}

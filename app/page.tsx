"use client"
import { ContactForm } from "@/components/contact-form"
import ExpSection from "@/components/exp"
import { Footer } from "@/components/footer"
import HeroDev from "@/components/hero-dev"
import MyLang from "@/components/mylang"
import PortfolioSection from "@/components/portfolio-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeroDev />
      <ExpSection />
      <PortfolioSection />
      <MyLang />
      <ContactForm />
      <Footer />
    </div>
  )
}

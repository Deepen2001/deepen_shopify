"use client"

import { Facebook, Instagram, Linkedin } from "lucide-react"
// import Link from "next/link"

export function Footer() {
  // const scrollToSection = (sectionId: string) => {
  //   const element = document.getElementById(sectionId)
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth" })
  //   }
  // }

  return (
    <footer
      className="relative bg- text-white"

    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center justify-center text-center">
        <p className="text-gray-400 mb-6 max-w-md">
          Trusted by businesses worldwide, we prioritize transparency, reliability, and results. Our dedicated team partners with you every step of the way to ensure your digital success and lasting growth.
        </p>
        <div className="flex space-x-4 mb-6 justify-center">
          <a
            href="#"
            className="w-10 h-10 bg-[#23272f] rounded-lg flex items-center justify-center hover:bg-[#3b82f6] transition-colors"
          >
            <Facebook className="h-5 w-5 text-white" />
          </a>
          <a
            href="#"
            className="w-10 h-10 bg-[#23272f] rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors"
          >
            <Instagram className="h-5 w-5 text-white" />
          </a>
          <a
            href="#"
            className="w-10 h-10 bg-[#23272f] rounded-lg flex items-center justify-center hover:bg-[#5e8f3c] transition-colors"
          >
            <Linkedin className="h-5 w-5 text-white" />
          </a>
        </div>
      </div>
    </footer>
  )
}

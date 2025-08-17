
import React from "react";

export default function HeroDev() {
  return (
    <section className="relative flex flex-col justify-center h-[100vh] w-full bg-gradient-to-b from-[#18181b] to-[#23272f] text-white px-4 py-16">
      <div className="absolute inset-0 pointer-events-none select-none opacity-30 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#3b82f6]/30 via-transparent to-transparent" />
      <div className="z-10 max-w-7xl mx-auto w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Left: Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight leading-tight bg-gradient-to-r from-[#5e8f3c] to-[#96c045] bg-clip-text text-transparent">
            Shopify Developer & UI Engineer
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-gray-300 font-medium">
            I craft high-converting, visually stunning Shopify experiences for modern brands. <br className="hidden md:inline" />
            Let’s build your next e-commerce success story.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 md:justify-start justify-center">
            <a
              href="#contact"
              className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-[#5e8f3c] to-[#96c045] text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-200"
            >
              See My Work
            </a>
            <a
              href="#case-studies"
              className="inline-block px-8 py-3 rounded-lg border border-gray-700 text-gray-200 font-semibold hover:bg-gray-800 hover:border-[#3b82f6] transition-colors duration-200"
            >
              Download Resume
            </a>
          </div>
        </div>
        {/* Right: Developer Image */}
        <div className="w-full md:w-1/2 flex items-center justify-center mb-8 md:mb-0">
          <div className="relative group">
            <img
              src="https://sergio-react.vercel.app/static/img/home-banner.png"
              alt="Developer at work"
              className="w-60 h-60 sm:w-100 sm:h-100 object-cover rounded-full shadow-2xl border-4 border-[#23272f] group-hover:scale-105 transition-transform duration-300 bg-[#23272f]"
              style={{ boxShadow: '0 8px 32px 0 rgba(94,143,60,0.25)' }}
            />
            <div className="absolute -inset-2 rounded-full border-2 border-[#5e8f3c] opacity-40 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-70">
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24" className="animate-bounce">
          <path d="M12 5v14m0 0l-6-6m6 6l6-6" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="text-xs text-gray-400 mt-1">Scroll Down</span>
      </div>
    </section>
  );
}

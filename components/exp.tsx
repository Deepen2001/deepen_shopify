import React from "react";

export default function ExpSection() {
  return (
    <section
      className="w-full flex justify-center items-center py-20 px-3 sm:px-4"
      style={{
        background: 'linear-gradient(120deg, #23272f 60%, #18181b 100%)',
      }}
    >
      <div className="relative max-w-7xl w-full px-2 sm:px-4">
        {/* Glowing animated border like CodePen button */}
        <span
          className="pointer-events-none absolute inset-0 rounded-2xl"
          style={{
            zIndex: 1,
            padding: '2px',
            background: 'linear-gradient(90deg, #96c045, transparent, transparent, #96c045)',
            backgroundSize: '200% 200%',
            filter: 'blur(0px)',
            animation: 'glowBorder 3s linear infinite',
            display: 'block',
          }}
        />
        <style>{`
          @keyframes glowBorder {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}</style>
        <div className="relative rounded-2xl z-10 p-6 sm:p-10 md:p-12 lg:p-16 bg-[#18181b]">
            <div className="mb-8">
          <span className="tracking-widest text-[#96c045] text-sm font-semibold mb-4 block">SERVICES COUNTER</span>
          <h2 className="text-3xl md:text-3xl  text-white mb-6 leading-tight">
            I have a 3+ years of work experience and done<br />
             lots of projects, freelancing, and<br />
            designing works.
          </h2>
        </div>
        <div className="flex flex-wrap gap-8 md:flex-row md:gap-0 justify-between items-end mt-12">
          <div className="flex-1 text-center md:text-left">
            <span className="text-[3rem] sm:text-[4rem] md:text-[5rem] font-bold text-[#fff] opacity-80">20+</span>
            <div className="text-base sm:text-lg font-bold text-white">PROJECTS</div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <span className="text-[3rem] sm:text-[4rem] md:text-[5rem] font-bold text-[#fff] opacity-80">10+</span>
            <div className="text-base sm:text-lg font-bold text-white">CLIENTS</div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <span className="text-[3rem] sm:text-[4rem] md:text-[5rem] font-bold text-[#fff] opacity-80">10+</span>
            <div className="text-base sm:text-lg font-bold text-white">COLLABORATIONS</div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

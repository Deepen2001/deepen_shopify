"use client"

import { CheckCircle, XCircle } from "lucide-react"

export default function WhyUs() {
  return (
    <section
      className="w-full py-20 px-4"
      style={{
        background:
          'radial-gradient(circle at 80% 0%, rgba(37,99,235,0.35) 0%, rgba(15,23,42,0.95) 50%, #181c2e 100%), linear-gradient(120deg, #181c2e 60%, #1e2746 100%)',
      }}
    >
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
          Why NeuroID Over Others?
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          In the large pool of top promises, NeuroID is your growth partner that believes more in execution & real results.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-10 justify-center items-stretch">
        {/* Other Agencies Card */}
        <div className="relative flex-1 bg-black bg-opacity-80 rounded-2xl border-2 border-dashed border-red-400 p-8 flex flex-col justify-center items-start min-w-[320px] max-w-xl mx-auto">
          <div className="relative w-full mb-6">
            <span className="text-3xl md:text-4xl font-extrabold text-white relative z-10">Other Agencies</span>
            {/* Red strikethrough */}
            <svg className="absolute left-0 top-1/2 w-full h-6 z-20" style={{pointerEvents:'none'}} viewBox="0 0 320 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="10" y1="8" x2="310" y2="16" stroke="#ff3b3b" strokeWidth="6" strokeLinecap="round"/>
              <line x1="20" y1="18" x2="300" y2="6" stroke="#ff3b3b" strokeWidth="6" strokeLinecap="round"/>
            </svg>
          </div>
          <ul className="space-y-4 mt-2">
            {[
              "Traditional Ads Agency or Creative Agency",
              "Long Contracts",
              "Specific Tool Experts (Facebook, Google)",
              "Testing done at your expenses",
              "Over-Professional on Communication",
              "No Industry experience",
            ].map((item, i) => (
              <li key={i} className="flex items-center text-white text-base md:text-lg">
                <XCircle className="text-red-400 w-6 h-6 mr-3" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        {/* NeuroID Card */}
        <div className="relative flex-1 bg-black bg-opacity-80 rounded-2xl border-2 border-dashed border-green-400 p-8 flex flex-col justify-center items-start min-w-[320px] max-w-xl mx-auto">
          <div className="relative w-full mb-6">
            <span className="text-3xl md:text-4xl font-extrabold text-white relative z-10">NeuroID</span>
            {/* Green underline */}
            <svg className="absolute left-0 bottom-0 w-32 h-4 z-20" style={{pointerEvents:'none'}} viewBox="0 0 128 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 12 Q64 20 120 8" stroke="#22d3a8" strokeWidth="6" strokeLinecap="round"/>
            </svg>
          </div>
          <ul className="space-y-4 mt-2">
            {[
              "Your eCommerce Growth Partner",
              "Month-on-Month Contracts",
              "Marketing & Psychology Geeks",
              "CEO runs his own brand",
              "In-House Like Communication",
              "Proven & tested strategies",
            ].map((item, i) => (
              <li key={i} className="flex items-center text-white text-base md:text-lg">
                <CheckCircle className="text-green-400 w-6 h-6 mr-3" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

'use client'

import Image from 'next/image'
import { FC } from 'react'

export const HeroSection: FC = () => {
  return (
    <section
      className="text-white py-20 px-4 relative"
      style={{
        background:
          'radial-gradient(circle at 20% 0%, rgba(37,99,235,0.35) 0%, rgba(15,15,17,0.95) 50%, #0F0F11 100%), linear-gradient(120deg, #0F0F11 60%, #1e2746 100%)',
      }}
    >
      <div className="text-center max-w-6xl mx-auto mt-12">
        <div className="inline-block bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold mb-4">
          📣 For E-Commerce Brands Above ₹7L/month 📣
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          How We Help D2C eCommerce Brands Scale to{' '}
          <span className="text-yellow-400">₹70L-₹1CR+</span>
          /Per Month In Less than <span className="text-yellow-400">120 Days</span>
        </h1>

        <p className="text-lg mt-4 text-gray-300">
          With Creative Focused Advertising & Performance Creatives
        </p>
      </div>

      <div className="mt-12 flex justify-center items-center relative">
        {/* Left Icons */}
        <div className="absolute left-[10%] top-1/2 -translate-y-1/2 space-y-12 hidden md:block">
          <div className="w-[100px] h-[100px] grid place-items-center bg-[#4955715e] border border-gray-600 rounded-[4px]">
            <Image src="https://brandlogos.net/wp-content/uploads/2021/10/meta_platforms_icon-logo_brandlogos.net_f5zqr.png" alt="Meta Ads" width={50} height={50} />
          </div>
          <div className="w-[100px] h-[100px] grid place-items-center bg-[#4955715e] border border-gray-600 rounded-[4px] ml-[40px]">
            <Image src="https://dreamfoundry.org/wp-content/uploads/2018/12/instagram-logo-png-transparent-background.png" alt="Google Ads" width={50} height={50} />
          </div>
        </div>

        {/* Main Video/Image */}
        <div className="border-4 border-black rounded-lg overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-[90vw] max-w-2xl rounded-md shadow-lg"
          >
            <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Right Icons */}
        <div className="absolute right-[10%] top-1/2 -translate-y-1/2 space-y-12 hidden md:block">
        <div className="w-[100px] h-[100px] grid place-items-center bg-[#4955715e] border border-gray-600 rounded-[4px]">
          <Image src="https://brandlogos.net/wp-content/uploads/2021/10/meta_platforms_icon-logo_brandlogos.net_f5zqr.png" alt="Analytics" width={50} height={50} />
        </div>
          <div className="w-[100px] h-[100px] grid place-items-center bg-[#4955715e] border border-gray-600 rounded-[4px] ml-[-40px]">
            <Image src="https://brandlogos.net/wp-content/uploads/2021/10/meta_platforms_icon-logo_brandlogos.net_f5zqr.png" alt="YouTube Shorts" width={50} height={50} />
          </div>
        </div>
      </div>

      <p className="text-center mt-10 text-base sm:text-lg text-white font-medium">
        Let&apos;s scale your brand to 5,000+ orders per month profitably!
      </p>
    </section>
  )
}

export default HeroSection

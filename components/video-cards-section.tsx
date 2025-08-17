"use client"

import type React from "react"

interface VideoCard {
  title: string
  description: string
  videoUrl: string
}

export const VideoCardsSection: React.FC = () => {
  const videoCards: VideoCard[] = [
    {
      title: "Meta Ads Demo",
      description: "A demonstration of Meta Ads platform.",
      videoUrl: "https://cdn.shopify.com/videos/c/o/v/4d99e36ce5a84d8cb8ee5af4560dd757.mp4",
    },
    {
      title: "Google Ads Demo",
      description: "A demonstration of Google Ads platform.",
      videoUrl: "https://cdn.shopify.com/videos/c/o/v/4d99e36ce5a84d8cb8ee5af4560dd757.mp4",
    },
    {
      title: "Shopify Demo",
      description: "A demonstration of Shopify platform.",
      videoUrl: "https://cdn.shopify.com/videos/c/o/v/4d99e36ce5a84d8cb8ee5af4560dd757.mp4",
    },
    {
      title: "Shopify Demo",
      description: "A demonstration of Shopify platform.",
      videoUrl: "https://cdn.shopify.com/videos/c/o/v/4d99e36ce5a84d8cb8ee5af4560dd757.mp4",
    },
    {
      title: "Shopify Demo",
      description: "A demonstration of Shopify platform.",
      videoUrl: "https://cdn.shopify.com/videos/c/o/v/4d99e36ce5a84d8cb8ee5af4560dd757.mp4",
    },
    {
      title: "Shopify Demo",
      description: "A demonstration of Shopify platform.",
      videoUrl: "https://cdn.shopify.com/videos/c/o/v/4d99e36ce5a84d8cb8ee5af4560dd757.mp4",
    },
  ]

  // Duplicate the cards for seamless looping
  const marqueeCards = [...videoCards, ...videoCards]

  return (
    <section className="py-12 bg-[#f3f3f3] overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center text-black">Video Demonstrations</h2>
        <div className="relative w-full">
          <div
            className="flex gap-6 animate-marquee whitespace-nowrap"
            style={{
              animation: 'marquee 30s linear infinite',
            }}
          >
            {marqueeCards.map((card, index) => (
              <div
                key={index}
                className="relative rounded-lg overflow-hidden shadow-md min-w-[320px] max-w-xs flex-shrink-0 bg-gray-800 border border-gray-700 mx-2"
              >
                <video className="w-full object-cover aspect-[3/4]" autoPlay loop muted playsInline>
                  <source src={card.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 p-4">
                  <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                  <p className="text-sm text-gray-300">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          will-change: transform;
        }
      `}</style>
    </section>
  )
}

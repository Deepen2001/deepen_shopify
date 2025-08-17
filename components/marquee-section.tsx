"use client"

import { Facebook, Instagram, Search, ShoppingBag, Users, Video } from "lucide-react"

const marqueeItems = [
	{
		icon: Facebook,
		title: "Meta Ads Mastery",
		description: "Drive targeted traffic with precision Facebook advertising",
		color: "from-blue-500 to-blue-700",
	},
	{
		icon: Instagram,
		title: "Instagram Growth",
		description: "Engage audiences with compelling Instagram campaigns",
		color: "from-pink-500 to-purple-700",
	},
	{
		icon: Search,
		title: "Google Ads Expert",
		description: "Dominate search results with strategic Google advertising",
		color: "from-green-500 to-green-700",
	},
	{
		icon: ShoppingBag,
		title: "Shopify Development",
		description: "Build high-converting e-commerce stores that sell",
		color: "from-yellow-500 to-orange-700",
	},
	{
		icon: Video,
		title: "UGC Content Creation",
		description: "Authentic user-generated content that converts",
		color: "from-red-500 to-red-700",
	},
	{
		icon: Users,
		title: "Audience Targeting",
		description: "Reach the right customers at the perfect moment",
		color: "from-indigo-500 to-indigo-700",
	},
]

export function MarqueeSection() {
	return (
		<section
			className="py-20 overflow-hidden"
			style={{
				background:
					'radial-gradient(circle at 80% 0%, rgba(37,99,235,0.35) 0%, rgba(15,15,17,0.95) 50%, #0F0F11 100%), linear-gradient(120deg, #0F0F11 60%, #1e2746 100%)',
			}}
		>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
				<h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
					Our Expertise in Motion
				</h2>
				<p className="text-gray-400 text-center max-w-2xl mx-auto">
					Watch our services come to life through dynamic campaigns and proven
					results
				</p>
			</div>

			{/* Marquee Container */}
			<div className="relative">
				<div className="flex animate-marquee space-x-8">
					{[...marqueeItems, ...marqueeItems].map((item, index) => {
						const Icon = item.icon
						return (
							<div
								key={index}
								className="flex-shrink-0 w-80 h-48 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 group"
							>
								<div
									className={`w-12 h-12 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
								>
									<Icon className="h-6 w-6 text-white" />
								</div>
								<h3 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors">
									{item.title}
								</h3>
								<p className="text-gray-400 text-sm leading-relaxed">
									{item.description}
								</p>
							</div>
						)
					})}
				</div>
			</div>

			<style jsx>{`
				@keyframes marquee {
					0% {
						transform: translateX(0);
					}
					100% {
						transform: translateX(-50%);
					}
				}
				.animate-marquee {
					animation: marquee 30s linear infinite;
				}
			`}</style>
		</section>
	)
}

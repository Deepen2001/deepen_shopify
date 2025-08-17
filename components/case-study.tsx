"use client";

import Image from "next/image";

const caseStudies = [
    {
        title: "WOMEN’S APPAREL BRAND",
        revenue: "From ₹25.7L/Month to ₹72L/Month",
        description:
            "First starting out with them in March 2024, the brand used to hit ₹25L around per month & was stuck at the same revenue roof since last 4-5 months. 2 of the primary metrics were disturbed i.e. conversion rates + CPMs. Cracking a solid zero-to-one ₹1,999 offer improved the conversion rates by 25% & having a solid media buying strategy helped us bring down CPMs by 40% approx. But the major goal was to give a next-level user experience to consumers, where we were able to crack by 3rd month, and 72% of revenue growth in 3rd month is testament to it. Brand’s ROI & contribution margins drastically improved by 22% using our profit optimisation strategies. Finally, the brand is now growing by 30-40% MoM. (Quick insight – DPA + cost caps work so well for women apparel)",
        image: "/images/shopify-analytics-dashboard-1.png", // Replace with your actual image filename
    },
    {
        title: "JEWELLERY & ACCESSORIES BRAND",
        revenue: "From ₹5.7L/Month to ₹87L/Month",
        description:
            "The jewellery & accessories brand never going beyond 6L+ months started working with us in March & since then the growth has been consistent besides profitability. The biggest concern before we started for the founder was that the brand isn’t scaling as smoothly as he wanted & ROAS use to be around 5-6X that time. With our efforts on content, ads & growth consulting, we improved the ROAS to 6-7X in first 3 months & then scaled to 85L+ within 10 months. Since we started brand has almost generated a 4.4Cr in profitable revenue.",
        image: "/images/shopify-analytics-dashboard-1.png",
    },
    {
        title: "WELLNESS BRAND",
        revenue: "₹5.84Cr Generated in Last 12 Months",
        description:
            "In the past year, we helped a wellness brand in India generate ₹5.84 Cr in revenue by significantly improving their key metrics. We boosted their conversion rate from 0.9% to 1.25%, reduced CPMs by 35%, increased their average order value from ₹550 to ₹750, and raised click-through rates from 1.2% to 1.8%. These improvements led to a 2.9X ROAS, up from 1.9X, and enhanced their contribution margin by 35%. Our strategic focus on creative pipeline, diverse content, and effective media buying fueled this aggressive growth and profitability. In wellness, best is to focus on AOV & pain points + social proof driven advertising to maximise profitable revenue.",
        image: "/images/shopify-analytics-dashboard-1.png",
    },
    {
        title: "FMCG/CPG BRAND",
        revenue: "From ₹22L/Month to ₹51L/Month in 90 Days",
        description:
            "This FMCG brand came to us stuck at ₹20-22L months, with their Facebook and Google Ads never reaching over a 1.7x ROAS. Struggling to scale with poor performance, this client was relying on repeat customers to generate sales & some organic sales as well.\n\nTheir results: Since partnering with Neuroid, in 3 months we’ve achieved their first ₹50L+ sales month and successfully improved their blended ROAS on Meta & Google to 2.4x",
        image: "/images/shopify-analytics-dashboard-1.png",
    },
];

export default function CaseStudiesSection() {
	return (
		<section className="bg-[#f2f2f2] text-black py-20 px-6 md:px-16">
			<div className="max-w-screen-xl mx-auto text-center mb-16">
				<h2 className="text-3xl md:text-5xl font-bold mb-4">
					These Are Various Allied Case Studies
				</h2>
				<p className="text-gray-900 max-w-2xl mx-auto">
					Our partners brands have grown by 30-40% MoM past the revenue ceiling &
					added an extra $50k/Month profitably in less than 90 days
				</p>
			</div>
			<div className="flex flex-col gap-20">
				{caseStudies.map((study, index) => (
					<div
						key={index}
						className={`flex flex-col md:flex-row items-center gap-8 transition-transform duration-300 ${
							index % 2 === 1 ? "md:flex-row-reverse" : ""
						}`}
					>
						{/* Image */}
						<div className="md:w-1/2 w-full mb-6 md:mb-0">
							<Image
								src={study.image}
								alt={study.title}
								width={800}
								height={400}
								className="rounded-lg w-full object-cover shadow-lg border border-gray-700"
							/>
						</div>
						{/* Text */}
						<div className="md:w-1/2 w-full bg-[#1b1b1b] border border-gray-700 rounded-2xl p-6 shadow-lg">
							<h3 className="text-lg md:text-xl font-semibold text-yellow-400 mb-2">
								{study.title}
							</h3>
							<h4 className="text-xl md:text-2xl font-bold mb-4 text-gray-300">
								{study.revenue}
							</h4>
							<p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
								{study.description}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

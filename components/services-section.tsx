"use client"

import { Facebook, Search, ShoppingBag, Video } from "lucide-react"

import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Facebook,
    title: "Meta Ads",
    description:
      "Facebook & Instagram advertising campaigns that drive real results. We create targeted ads that reach your ideal customers and maximize your ROI.",
    features: ["Audience Research", "Creative Development", "Campaign Optimization", "Performance Tracking"],
    color: "from-blue-500 to-blue-700",
  },
  {
    icon: Search,
    title: "Google Ads",
    description:
      "Dominate search results with strategic Google Ads campaigns. From search to display, we help you capture high-intent customers.",
    features: ["Keyword Research", "Ad Copy Creation", "Bid Management", "Conversion Tracking"],
    color: "from-green-500 to-green-700",
  },
  {
    icon: ShoppingBag,
    title: "Shopify Development",
    description:
      "Custom Shopify stores that convert visitors into customers. We build fast, beautiful, and optimized e-commerce experiences.",
    features: ["Custom Design", "Mobile Optimization", "Payment Integration", "SEO Setup"],
    color: "from-yellow-500 to-orange-700",
  },
  {
    icon: Video,
    title: "UGC Creation",
    description:
      "Authentic user-generated content that builds trust and drives conversions. We create compelling content that resonates with your audience.",
    features: ["Content Strategy", "Creator Network", "Video Production", "Performance Analysis"],
    color: "from-purple-500 to-purple-700",
  },
]

export function ServicesSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="services" className="py-20 bg-[#0F0F11]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We offer comprehensive digital marketing solutions to help your business grow and succeed in the digital
            landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300 group hover:transform hover:scale-105"
              >
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">{service.title}</h3>

                <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={scrollToContact}
                  variant="outline"
                  className="border-gray-600 text-white bg-transparent hover:bg-gray-700 w-full group-hover:border-blue-500 transition-colors"
                >
                  Learn More
                </Button>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 text-lg font-semibold"
          >
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  )
}

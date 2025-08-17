"use client"

import { Mail, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useForm } from '@formspree/react';

export function ContactForm() {
  const [state, handleSubmit] = useForm("mnnvgqjz");

  return (
    <section
      id="contact"
      className="py-20"
      style={{
        background:
          'radial-gradient(circle at 130% 50%, #96c04529 0%, rgba(15,15,17,0.95) 50%, #0F0F11 100%), linear-gradient(120deg, #0F0F11 60%, #1e2746 100%)',
      }}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Let&apos;s Grow Your Business</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to take your marketing to the next level? Get in touch with us today for a free consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Get in Touch</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                We&apos;re here to help you achieve your marketing goals. Reach out to us and let&apos;s discuss how we can drive
                growth for your business.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#3b82f6] rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Email</h4>
                  <p className="text-gray-400">manoliyadev19@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#5e8f3c] rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Phone</h4>
                  <p className="text-gray-400">+91 9999378244</p>
                </div>
              </div>  
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-[#18181b] to-[#23272f] rounded-2xl p-8 border border-gray-700">
            {state.succeeded ? (
              <div className="text-center p-6 rounded-lg bg-green-600/20 text-green-400 border border-green-600/30">
                Thank you! Your message has been sent successfully.
              </div>
            ) : (
              <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-white">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="bg-[#23272f] border-gray-600 text-white placeholder-gray-400 focus:border-[#3b82f6]"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-white">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="bg-[#23272f] border-gray-600 text-white placeholder-gray-400 focus:border-[#3b82f6]"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2 text-white">
                    Phone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="bg-[#23272f] border-gray-600 text-white placeholder-gray-400 focus:border-[#3b82f6]"
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-white">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="bg-[#23272f] border-gray-600 text-white placeholder-gray-400 focus:border-[#3b82f6]"
                    placeholder="Tell us about your project and goals..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-gradient-to-r from-[#5e8f3c] to-[#96c045] hover:bg-[#5e8f3c] text-white px-8 py-3 block h-auto text-lg font-semibold disabled:opacity-50"
                >
                  {state.submitting ? "Sending..." : "Send Message"}
                </Button>

                {state.errors && (
                  <div className="text-center p-3 rounded-lg bg-red-600/20 text-red-400 border border-red-600/30">
                    Sorry, there was an error sending your message. Please try again.
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

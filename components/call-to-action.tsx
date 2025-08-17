"use client"

export default function CallToAction() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="bg-[#faf7e3] py-16 w-full">
      <div className="max-w-5xl mx-auto flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center text-black mb-8">
          Join 40+ D2C Brand's Founders We've Helped Scale
        </h2>
        <button
          onClick={scrollToContact}
          className="bg-[#ffd429] hover:bg-[#ffce00] text-black font-bold text-lg px-10 py-4 rounded-full shadow transition-colors duration-200"
        >
          Let's Connect
        </button>
      </div>
    </section>
  )
}

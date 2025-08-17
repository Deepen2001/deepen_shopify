import React from "react";

// Example portfolio items (replace with your own data and images)
const portfolioItems = [
  {
    title: "E-Commerce Fashion Store",
    image: "/images/trapin-home-desk.jpg",
    url: "https://yourfashionstore.com",
  },
  {
    title: "Tech Gadgets Shop",
    image: "/images/trapin-collec-desk.jpg",
    url: "https://yourtechgadgets.com",
  },
  {
    title: "Home Decor Boutique",
    image: "/images/trapin-pro-desk.jpg",
    url: "https://yourhomedecor.com",
  },
  {
    title: "Home Decor Boutique",
    image: "/images/charmacy-home.jpg",
    url: "https://yourhomedecor.com",
  },
  {
    title: "Home Decor Boutique",
    image: "/images/gillori-home.jpg",
    url: "https://yourhomedecor.com",
  },
  {
    title: "Home Decor Boutique",
    image: "/images/House-of-Gulab-home.jpg",
    url: "https://yourhomedecor.com",
  },
  {
    title: "Home Decor Boutique",
    image: "/images/Prisachi-home.jpg",
    url: "https://yourhomedecor.com",
  },
  {
    title: "Home Decor Boutique",
    image: "/images/Sazvit-home.jpg",
    url: "https://yourhomedecor.com",
  },
  {
    title: "Home Decor Boutique",
    image: "/images/Your-Sneaker-home.jpg",
    url: "https://yourhomedecor.com",
  },
  {
    title: "Home Decor Boutique",
    image: "/images/Zeraki-home.jpg",
    url: "https://yourhomedecor.com",
  },
  {
    title: "Home Decor Boutique",
    image: "/images/Nutressa-home.jpg",
    url: "https://yourhomedecor.com",
  },
];

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="w-full py-20"
      style={{
        background:
          'radial-gradient(circle at 0% 50%, #96c04555 0%, rgba(15,15,17,0.95) 50%, #0F0F11 100%), linear-gradient(120deg, #0F0F11 60%, #1e2746 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center">
          Portfolio
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8">
          {portfolioItems.map((item, idx) => {
            const [isHovered, setIsHovered] = React.useState(false);
            const imgRef = React.useRef<HTMLImageElement>(null);
            const containerRef = React.useRef<HTMLDivElement>(null);
            const [translateY, setTranslateY] = React.useState(0);

            React.useEffect(() => {
              if (isHovered && imgRef.current && containerRef.current) {
                const imgHeight = imgRef.current.offsetHeight;
                const containerHeight = containerRef.current.offsetHeight;
                const diff = imgHeight - containerHeight;
                setTranslateY(diff > 0 ? -diff : 0);
              } else {
                setTranslateY(0);
              }
            }, [isHovered]);

            return (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden shadow-lg bg-[#23272f] border border-[#23272f] hover:border-[#5e8f3c] transition-all duration-300"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div ref={containerRef} className="relative h-70 md:h-140 w-full overflow-hidden">
                  <div
                    className="absolute inset-0 transition-transform duration-[4000ms] ease"
                    style={{
                      willChange: 'transform',
                      transform: `translateY(${translateY}px)`,
                    }}
                  >
                    <img
                      ref={imgRef}
                      src={item.image}
                      alt={item.title}
                      className="w-full h-auto min-h-full object-top object-cover pointer-events-none select-none"
                      draggable="false"
                    />
                  </div>
                </div>
                {/* <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <span className="text-[#5e8f3c] font-medium">View Project</span>
                </div> */}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* eslint-disable @next/next/no-img-element */
import React from "react";

type PortfolioItem = {
  title: string;
  image: string;
  url: string;
};

// Example portfolio items (replace with your own data and images)
const portfolioItems: PortfolioItem[] = [
  { title: "E-Commerce Fashion Store", image: "/images/trapin-home-desk.jpg", url: "https://trapin.co/" },
  { title: "Tech Gadgets Shop", image: "/images/trapin-collec-desk.jpg", url: "https://trapin.co/" },
  { title: "Home Decor Boutique", image: "/images/trapin-pro-desk.jpg", url: "https://trapin.co/" },
  { title: "Home Decor Boutique", image: "/images/charmacy-home.jpg", url: "https://charmacyworld.com/" },
  { title: "Home Decor Boutique", image: "/images/gillori-home.jpg", url: "https://gillori.com/" },
  { title: "Home Decor Boutique", image: "/images/House-of-Gulab-home.jpg", url: "https://houseofgulab.com/" },
  { title: "Home Decor Boutique", image: "/images/Masakali-home.jpg", url: "https://shopmasakali.co/" },
  { title: "Home Decor Boutique", image: "/images/Sudathi-home.jpg", url: "https://sudathi.com/" },
  { title: "Home Decor Boutique", image: "/images/Prisachi-home.jpg", url: "https://www.prisachi.com/" },
  { title: "Home Decor Boutique", image: "/images/Anahat-home.jpg", url: "https://anahat.in/" },
  { title: "Home Decor Boutique", image: "/images/Zeraki-home.jpg", url: "https://zerakijewels.com/" },
  { title: "Home Decor Boutique", image: "/images/Sazvit-home.jpg", url: "https://sazvit.in/" },
  { title: "Home Decor Boutique", image: "/images/Your-Sneaker-home.jpg", url: "https://yoursneakerstore.in/" },
  { title: "Home Decor Boutique", image: "/images/Nutressa-home.jpg", url: "https://nutressa.com/" },
  { title: "Home Decor Boutique", image: "/images/Desi-Sass-home.jpg", url: "https://desisass.com/" },
  { title: "Home Decor Boutique", image: "/images/downalley-home.jpg", url: "https://downalley.com/" },
  { title: "Home Decor Boutique", image: "/images/Pluch-home.jpg", url: "https://www.pluchdesigns.com/" },
  { title: "Home Decor Boutique", image: "/images/Purposeclo-home.jpg", url: "https://purposeclo.in/" },
  { title: "Home Decor Boutique", image: "/images/TBFO-home.jpg", url: "https://www.tbfo.in/" },
  { title: "Home Decor Boutique", image: "/images/LosKoros-home.jpg", url: "https://loskoros.com/" },
  { title: "Home Decor Boutique", image: "/images/ND-Jewellery-home.jpg", url: "https://ndjewellery.com/" },
];

function PortfolioCard({ item }: { item: PortfolioItem }) {
  const [isHovered, setIsHovered] = React.useState(false);
  const [translateY, setTranslateY] = React.useState(0);
  const imgRef = React.useRef<HTMLImageElement | null>(null);
  const containerRef = React.useRef<HTMLDivElement | null>(null);

  const recalc = React.useCallback(() => {
    const imgEl = imgRef.current;
    const containerEl = containerRef.current;
    if (!imgEl || !containerEl) return;

    if (isHovered) {
      const imgHeight = imgEl.offsetHeight;
      const containerHeight = containerEl.offsetHeight;
      const diff = imgHeight - containerHeight;
      setTranslateY(diff > 0 ? -diff : 0);
    } else {
      setTranslateY(0);
    }
  }, [isHovered]);

  React.useEffect(() => {
    recalc();
  }, [recalc]);

  // Recalculate on window resize (helps when responsive breakpoints change)
  React.useEffect(() => {
    const onResize = () => recalc();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [recalc]);

  return (
    <a
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
            willChange: "transform",
            transform: `translateY(${translateY}px)`,
          }}
        >
          <img
            ref={imgRef}
            src={item.image}
            alt={item.title}
            className="w-full h-auto min-h-full object-top object-cover pointer-events-none select-none"
            draggable="false"
            onLoad={recalc}
          />
        </div>
      </div>
      {/* 
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
        <span className="text-[#5e8f3c] font-medium">View Project</span>
      </div> 
      */}
    </a>
  );
}

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="w-full py-20"
      style={{
        background:
          "radial-gradient(circle at 0% 50%, #96c04555 0%, rgba(15,15,17,0.95) 50%, #0F0F11 100%), linear-gradient(120deg, #0F0F11 60%, #1e2746 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center">Portfolio</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-8">
          {portfolioItems.map((item, idx) => (
            <PortfolioCard key={`${item.title}-${idx}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

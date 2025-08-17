import React from "react";

const languages = [
  {
    name: "HTML5",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png",
  },
  {
    name: "CSS3",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/340px-CSS3_logo_and_wordmark.svg.png",
  },
  {
    name: "JavaScript",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
  },
  {
    name: "Shopify Liquid",
    logo: "https://avatars.githubusercontent.com/u/8085?s=400&v=4",
  },
  {
    name: "React",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png",
  },
];

export default function MyLang() {
  return (
    <section className="w-full py-16 bg-[#fff]">
      <div className="max-w-8xl mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-black mb-10 text-center">
          Languages & Technologies I Use
        </h2>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {languages.map((lang) => (
            <div
              key={lang.name}
              className="flex flex-col items-center bg-white p-3 md:p-6  w-30 md:w-50 hover:shadow-lg transition-shadow duration-300 border border-transparent hover:border-[#96c045]"
            >
              <img
                src={lang.logo}
                alt={lang.name + ' logo'}
                className="w-22 h-22 md:w-30 md:h-30 mb-3 object-contain"
                draggable="false"
              />
              <span className="text-black text-base font-medium text-center mt-1">
                {lang.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

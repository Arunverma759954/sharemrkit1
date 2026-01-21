"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const slides = [
  {
    bg: "/banner/b1.jpg",
    title: "Stock Market & Cryptocurrency",
    highlight: "Trading Courses",
    desc:
      "Learn stock market trading, investing & cryptocurrency trading with practical, expert-led courses in Ghaziabad & Delhi NCR.",
  },
  {
    bg: "/banner/b2.jpg",
    title: "Learn Trading & Investing",
    highlight: "With Live Market Practice",
    desc:
      "Professional stock market, options trading & crypto courses focused on real strategies, risk management & discipline.",
  },
];

export default function Banner() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            active === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div
            className={`absolute inset-0 bg-cover bg-center ${
              active === index ? "animate-zoomSlow" : ""
            }`}
            style={{ backgroundImage: `url(${slide.bg})` }}
          />
          <div className="absolute inset-0 bg-black/60" />

          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-6 text-white">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                {slide.title} <br />
                <span className="text-[#7ED321]">{slide.highlight}</span>
              </h1>

              <p className="mt-6 max-w-2xl text-gray-200 text-lg">
                {slide.desc}
              </p>

              <div className="mt-10 flex gap-4 flex-wrap">
               <Link
    href="/"
    className="bg-[#2DB7F5] hover:bg-[#1aa3e8] px-8 py-3 rounded-full font-semibold"
  >
    Training
  </Link>

  <Link
    href="/investment"
    className="bg-[#7ED321] hover:bg-[#6ac11c] px-8 py-3 rounded-full font-semibold"
  >
    Investment
  </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

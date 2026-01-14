"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const slides = [
  {
    bg: "/banner/b1.jpg",
    title: "INVEST YOUR MONEY",
    highlight: "SMART SKILLS",
    desc:
      "Learn stock market trading, options, mutual funds, and investment strategies from industry experts.",
  },
  {
    bg: "/banner/b2.jpg",
    title: "LEARN & GROW",
    highlight: "WITH EXPERTS",
    desc:
      "Professional trading courses designed to help you grow your wealth with confidence.",
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
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
          ${active === index ? "opacity-100 z-10" : "opacity-0 z-0"}`}
        >
          {/* Background with zoom */}
          <div
            className={`absolute inset-0 bg-cover bg-center scale-100
            ${active === index ? "animate-zoomSlow" : ""}`}
            style={{ backgroundImage: `url(${slide.bg})` }}
          ></div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-6 text-white">
              <h5 className="text-[#7ED321] font-semibold mb-4">
                WELCOME TO SHAREMARKET SKILLS ACADEMY
              </h5>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                {slide.title} <br />
                WITH <span className="text-[#7ED321]">{slide.highlight}</span>
              </h1>

              <p className="mt-6 max-w-xl text-gray-200">
                {slide.desc}
              </p>

              <div className="mt-10 flex gap-4 flex-wrap">
                <Link
                  href="/"
                  className="bg-[#2DB7F5] hover:bg-[#1aa3e8] text-white px-7 py-3 rounded-full font-semibold transition"
                >
                  Training
                </Link>

                <Link
                  href="/investment"
                  className="bg-[#7ED321] hover:bg-[#6ac11c] text-white px-7 py-3 rounded-full font-semibold transition"
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

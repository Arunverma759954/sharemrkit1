"use client";

import { useState } from "react";
import Image from "next/image";

const benefits = [
  {
    title: "Lending money for investment of your new projects",
    desc: "We provide funding solutions for new ventures, helping investors grow their portfolio efficiently.",
    img: "/img1.webp",
    highlight: true,
  },
  {
    title: "Lending money for investment of your new projects",
    desc: "Our flexible lending options allow easy access to funds for your business needs.",
    img: "/img2.jpg",
    highlight: false,
  },
  {
    title: "Mobile payment is more flexible and easy for all investors",
    desc: "Investors can make payments on-the-go with our seamless mobile payment solutions.",
    img: "/img3.jpg",
    highlight: false,
  },
];

export default function BenefitsSection() {
  const [activeIndex, setActiveIndex] = useState(0); // track which card is active
  const activeBenefit = benefits[activeIndex];

  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-green-500 font-semibold mb-2">Our Offer</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Benefits We Offer
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            adipisci facilis cupiditate recusandae aperiam temporibus corporis
            itaque quis facere.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          
          {/* Left Cards */}
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`cursor-pointer p-8 rounded-xl font-semibold text-lg shadow-md transition ${
                  index === activeIndex
                    ? "bg-green-500 text-white shadow-lg"
                    : "bg-gray-50 text-gray-900 hover:shadow-md"
                }`}
              >
                {benefit.title}
              </div>
            ))}
          </div>

          {/* Right Image + Text */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            {/* Image */}
            <div className="rounded-xl overflow-hidden">
              <Image
                src={activeBenefit.img}  
                alt={activeBenefit.title}
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text */}
            <div>
              <h3 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                {activeBenefit.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {activeBenefit.desc}
              </p>
            </div>

          </div> {/* Close Right grid */}

        </div> {/* Close Content grid */}

      </div> {/* Close container */}
    </section>
  );
}

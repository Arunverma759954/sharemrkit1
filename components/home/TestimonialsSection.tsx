"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "Amit Sharma",
    role: "Equity Trader",
    img: "/t1.webp",
    review:
      "The mentors here explain concepts very clearly. My confidence in trading has improved a lot.",
  },
  {
    name: "Neha Verma",
    role: "Options Trader",
    img: "/t2.webp",
    review:
      "Best stock market institute. Practical knowledge with live market examples.",
  },
  {
    name: "Rahul Mehta",
    role: "Investor",
    img: "/t3.jpeg",
    review:
      "I learned risk management and discipline. Highly recommended for beginners.",
  },
  {
    name: "Pooja Singh",
    role: "Swing Trader",
    img: "/t4.webp",
    review:
      "Amazing learning environment and supportive trainers. Worth every penny.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-28 relative">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-green-500 font-semibold mb-2">Testimonial</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Our Clients Reviews
          </h2>
          <p className="text-gray-600 text-lg">
            Real feedback from students who transformed their trading journey
            with us.
          </p>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation
          loop
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, index) => (
           <SwiperSlide key={index}>
  <div className="bg-gray-50 rounded-2xl p-10 shadow-sm h-full relative text-center">

    {/* Quote */}
    <div className="text-green-500 text-6xl font-bold mb-6">“</div>

    {/* Profile Image - CENTER & BIG */}
    <div className="relative w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-4 border-green-500">
      <Image
        src={item.img}
        alt={item.name}
        fill
        className="object-cover"
      />
    </div>

    {/* Review */}
    <p className="text-gray-600 mb-6 leading-relaxed">
      {item.review}
    </p>

    {/* Name */}
    <div>
      <h4 className="font-bold text-lg text-gray-900">
        {item.name}
      </h4>
      <p className="text-gray-500 text-sm">{item.role}</p>

      {/* Stars */}
      <div className="flex justify-center text-green-500 mt-2">
        ★★★★★
      </div>
    </div>
  </div>
</SwiperSlide>

          ))}
        </Swiper>
      </div>
    </section>
  );
}

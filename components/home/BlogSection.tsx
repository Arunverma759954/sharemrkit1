"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const blogs = [
     {
    title: "Market Volatility Explained",
    category: "Dividend Stocks",
    desc: "Understand market volatility and how to trade smartly.",
    img: "/blogs/b1.jpg",
  },
  {
    title: "Options Trading Business?",
    category: "Dividend Stocks",
    desc: "Learn strategies for options trading and maximize your returns effectively.",
    img: "/blogs/b2.jpg",
  },
  {
    title: "Top 5 Stocks to Buy",
    category: "Non-Dividend Stocks",
    desc: "We analyze the top 5 stocks for long-term growth in 2026.",
    img: "/blogs/b3.jpeg",
  },
 
  {
    title: "Beginner's Guide to Investing",
    category: "ETF",
    desc: "Step by step guide for new investors to enter the stock market.",
    img: "/blogs/b4.jpeg",
  },
  {
    title: "Advanced Options Strategies",
    category: "Options",
    desc: "Learn advanced techniques to hedge and profit from options.",
    img: "/blogs/b5.jpg",
  },
];

export default function BlogSection() {
  return (
    <section className="bg-white py-28 relative">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-green-500 font-semibold mb-2">Our Blog & News</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Articles For Pro Traders
          </h2>
          <p className="text-gray-600 text-lg">
            Stay updated with latest trends, strategies, and tips in the stock market.
          </p>
        </div>

        {/* Slider */}
        <div className="relative">
          {/* Custom Arrows */}
          <button className="blog-prev absolute -left-6 top-1/2 -translate-y-1/2 z-10 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition">
            <ChevronLeft />
          </button>

          <button className="blog-next absolute -right-6 top-1/2 -translate-y-1/2 z-10 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition">
            <ChevronRight />
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: ".blog-next",
              prevEl: ".blog-prev",
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            spaceBetween={30}
            loop={true}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {blogs.map((blog, index) => (
              <SwiperSlide key={index}>
                <div className="bg-gray-50 rounded-2xl p-6 shadow-md hover:shadow-xl transition h-full">
                  <div className="relative rounded-xl overflow-hidden mb-6">
                    <Image
                      src={blog.img}
                      alt={blog.title}
                      width={500}
                      height={350}
                      className="w-full h-56 object-cover"
                    />
                    <span className="absolute bottom-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {blog.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{blog.desc}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}

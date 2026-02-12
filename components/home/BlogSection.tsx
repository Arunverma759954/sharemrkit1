"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const blogs = [
     {
    title: "Share Market Course in Ghaziabad",
    category: "Stock Market",
    desc: "Start your trading journey with the best share market course in Ghaziabad.",
    img: "/blogs/share-market-course.png",
    slug: "/share-market-course-ghaziabad",
  },
  {
    title: "Stock Market Training in Ghaziabad",
    category: "Training",
    desc: "Professional trading classes for beginners and advanced traders.",
    img: "/blogs/b2.jpg",
    slug: "/stock-market-training-ghaziabad",
  },
  {
    title: "Share Market Training Near Vishnu Enclave",
    category: "Stock Market",
    desc: "Professional trading classes near Vishnu Enclave designed for beginners.",
    img: "/blogs/b3.jpeg",
    slug: "/share-market-training-near-vishnu-enclave",
  },
  {
    title: "Stock Market Course Near Me in Ghaziabad",
    category: "Stock Market",
    desc: "Specially designed course for beginners, working professionals, and aspiring traders.",
    img: "/blogs/blog-thum-4.png",
    slug: "/stock-market-course-near-me-ghaziabad",
  },
  {
    title: "Best Share Market Academy in Ghaziabad",
    category: "Academy",
    desc: "Join the top trading institute in Ghaziabad for practical stock market training.",
    img: "/blogs/b5.jpg",
    slug: "/best-share-market-academy-in-ghaziabad",
  },
  {
    title: "Intraday Trading Course in Ghaziabad",
    category: "Intraday",
    desc: "Learn day trading with live market practice and proven strategies.",
    img: "/blogs/blog-thum-6.png",
    slug: "/intraday-trading-course-ghaziabad",
  },
  {
    title: "Options Trading Course in Ghaziabad",
    category: "Options",
    desc: "Master advanced options strategies with our professional course.",
    img: "/blogs/b1.jpg",
    slug: "/options-trading-course-ghaziabad",
  },
  {
    title: "Stock Market Course for Beginners in Ghaziabad",
    category: "Beginners",
    desc: "Start your trading journey with the best beginner course in Ghaziabad.",
    img: "/blogs/blog-thum-03.png",
    slug: "/beginner-stock-market-course-ghaziabad",
  },
  {
    title: "Technical Analysis Course in Ghaziabad",
    category: "Technical Analysis",
    desc: "Master chart reading and trading strategies with our expert-led course.",
    img: "/blogs/b4.jpeg",
    slug: "/technical-analysis-course-ghaziabad",
  },
  {
    title: "Online Stock Trading Classes in Ghaziabad",
    category: "Online",
    desc: "Learn stock trading from home with live, interactive virtual classes.",
    img: "/blogs/b1.jpg",
    slug: "/online-stock-trading-classes-ghaziabad",
  },
  {
    title: "Equity Trading Coaching in Ghaziabad",
    category: "Equity",
    desc: "Structured equity trading coaching with live market practice in Ghaziabad.",
    img: "/blogs/b2.jpg",
    slug: "/equity-trading-coaching-ghaziabad",
  },
  {
    title: "Financial Education Center in Ghaziabad",
    category: "Financial Education",
    desc: "Learn finance, stock market, and investments at our financial education center in Ghaziabad.",
    img: "/blogs/b3.jpeg",
    slug: "/financial-education-center-ghaziabad",
  },
  {
    title: "Stock Market Course After 12th in Ghaziabad",
    category: "Students",
    desc: "Career-oriented stock market course for students who have completed 12th.",
    img: "/blogs/b4.jpeg",
    slug: "/stock-market-course-after-12th-ghaziabad",
  },
  {
    title: "Stock Market Course for Working Professionals in Ghaziabad",
    category: "Working Professionals",
    desc: "Learn part-time trading strategies designed for busy working professionals.",
    img: "/blogs/b5.jpg",
    slug: "/stock-market-course-for-working-professionals-ghaziabad",
  },
  {
    title: "Share Market Training with Live Trading in Ghaziabad",
    category: "Live Trading",
    desc: "Get real-time market exposure with our share market live trading training in Ghaziabad.",
    img: "/blogs/blog-thum-6.png",
    slug: "/share-market-training-with-live-trading-ghaziabad",
  },
  {
    title: "How to Start Trading in Ghaziabad",
    category: "Trading Guide",
    desc: "Beginner-friendly guide explaining how to start trading in Ghaziabad step by step.",
    img: "/blogs/share-market-course.png",
    slug: "/how-to-start-trading-in-ghaziabad",
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
                    <Link href={blog.slug} className="hover:text-[#7ED321] transition">
                      {blog.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{blog.desc}</p>
                  
                  <Link href={blog.slug} className="text-[#7ED321] font-semibold text-sm hover:underline">
                    Read More →
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}

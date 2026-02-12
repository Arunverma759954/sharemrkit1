"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function StockMarketCourseNearMeGhaziabad() {
  return (
    <div className="bg-white text-black">
      {/* ================= BANNER ================= */}
      <section
        className="relative h-[40vh] md:h-[50vh] flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/banner/b1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
          <Link 
            href="/blogs" 
            className="inline-flex items-center gap-2 text-gray-300 hover:text-[#7ED321] mb-4 transition"
          >
            <ArrowLeft size={16} /> Back to Blogs
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Stock Market Course Near Me in <span className="text-[#7ED321]">Ghaziabad</span> <br/>
            Learn Trading with Practical Training
          </h1>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 space-y-8 text-gray-700 leading-relaxed text-lg">
          
          <div className="prose max-w-none">
            <p className="font-medium text-xl text-gray-800">
              Are you searching online for the best stock market course near me in Ghaziabad? If yes, then you are at the right place. Our professional share market course near me is specially designed for beginners, working professionals, and aspiring traders who want to learn stock market trading in a simple, practical, and effective way.
            </p>

            <p className="mt-8">
              Stock market trading is one of the best skills to build an additional income source, but only when you learn it with proper guidance. Our trading classes near me in Ghaziabad focus on real market learning instead of only theory. We teach you how the market actually works, how to analyze charts, and how to trade with discipline and risk management.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-black mt-10 mb-6">
              What You Will Learn in This Course:
            </h2>
            <ul className="space-y-4 list-none pl-0">
              {[
                "Basics of Stock Market (NSE & BSE)",
                "Technical Analysis & Chart Reading",
                "Intraday Trading Strategies",
                "Swing Trading Techniques",
                "Candlestick Patterns & Indicators",
                "Risk & Money Management",
                "Live Market Trading Practice",
                "Long-Term Investment Planning"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[#7ED321] text-xl">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8">
              Our experienced trainers explain each concept step by step so that even beginners can understand easily. The course is structured in a way that builds confidence and practical knowledge from day one.
            </p>

            <p className="mt-6">
              If you are looking for share market course near me that provides hands-on learning and personal attention, our small batch size ensures that every student gets proper guidance.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-6">
              Why Choose Our Trading Classes in Ghaziabad?
            </h2>
            <ul className="grid sm:grid-cols-2 gap-4 list-none pl-0">
              {[
                "Live Practical Market Sessions",
                "Beginner to Advanced Level Training",
                "Personal Mentorship & Doubt Clearing",
                "Affordable Course Fees",
                "Suitable for Students & Professionals"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100 hover:border-[#7ED321] transition">
                  <span className="text-yellow-500 text-xl">⭐</span>
                  <span className="font-semibold text-gray-800">{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-[#f9f9f9] border-l-4 border-[#7ED321] p-6 mt-12 rounded-r-lg">
              <p className="font-bold text-gray-900 mb-2">Enroll Today</p>
              <p>
                Whether your goal is daily trading, part-time income, or long-term investing, this stock market course near me in Ghaziabad helps you take the right step toward financial growth.
              </p>
              <p className="mt-4 font-semibold text-[#7ED321]">
                📞 Enroll today and start your journey to becoming a confident trader.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

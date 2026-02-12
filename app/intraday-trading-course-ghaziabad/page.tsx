"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function IntradayTradingCourseGhaziabad() {
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
            Intraday Trading Course in <span className="text-[#7ED321]">Ghaziabad</span> <br/>
            Learn Day Trading with Live Market Practice
          </h1>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 space-y-8 text-gray-700 leading-relaxed text-lg">
          
          <div className="prose max-w-none">
            <p className="font-medium text-xl text-gray-800">
              Are you searching for the best intraday trading course in Ghaziabad to start earning from daily market movements? Our professional day trading course in Ghaziabad is specially designed for beginners and working professionals who want to learn practical trading strategies and generate consistent income from the stock market.
            </p>

            <p className="mt-8">
              Intraday trading requires proper strategy, discipline, and risk management. Without the right guidance, beginners often face losses. That’s why our intraday classes in Ghaziabad focus on live market learning, real-time chart analysis, and step-by-step strategy building.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-black mt-10 mb-6">
              What You Will Learn in Our Intraday Course:
            </h2>
            <ul className="space-y-4 list-none pl-0">
              {[
                "Basics of Intraday Trading",
                "How to Select Stocks for Day Trading",
                "Chart Reading & Technical Analysis",
                "Support & Resistance Strategy",
                "Breakout & Momentum Trading Setup",
                "Risk & Money Management Techniques",
                "Stop Loss & Target Planning",
                "Live Market Practice Sessions"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[#7ED321] text-xl">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8">
              Our expert mentors provide practical exposure so you can understand how to trade confidently in real market conditions. We teach simple and effective strategies that are easy to follow even for beginners.
            </p>

            <p className="mt-6">
              This day trading course in Ghaziabad is suitable for students, job holders, and business owners who want to create an additional income source through short-term trading. Small batch sizes ensure personal attention and better learning experience.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-6">
              Why Choose Our Intraday Classes in Ghaziabad?
            </h2>
            <ul className="grid sm:grid-cols-2 gap-4 list-none pl-0">
              {[
                "Live Market Sessions",
                "Practical Strategy-Based Learning",
                "Beginner Friendly Training",
                "Personal Mentorship Support",
                "Affordable Course Fees"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100 hover:border-[#7ED321] transition">
                  <span className="text-yellow-500 text-xl">⭐</span>
                  <span className="font-semibold text-gray-800">{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-[#f9f9f9] border-l-4 border-[#7ED321] p-6 mt-12 rounded-r-lg">
              <p className="font-bold text-gray-900 mb-2">Join Us Today</p>
              <p>
                If you are serious about mastering intraday trading and building confidence in the stock market, join our intraday trading course in Ghaziabad today.
              </p>
              <p className="mt-4 font-semibold text-[#7ED321]">
                📞 Enroll now and start your journey toward becoming a skilled day trader.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

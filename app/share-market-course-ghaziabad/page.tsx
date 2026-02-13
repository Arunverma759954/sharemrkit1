"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ShareMarketCourseBlog() {
  return (
    <div className="bg-white text-black">
      {/* ================= BANNER ================= */}
      <section
        className="relative min-h-[50vh] pt-20 flex items-center bg-cover bg-center"
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
            Share Market Course in <span className="text-[#7ED321]">Ghaziabad</span> <br />
            Start Your Trading Journey Today
          </h1>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 space-y-8 text-gray-700 leading-relaxed text-lg">

          <div className="prose max-w-none">
            <p className="font-medium text-xl text-gray-800">
              Looking for the best share market course in Ghaziabad? Whether you are a student, working professional, or business owner, learning stock market trading can open the door to financial growth and passive income opportunities. Our professional stock market course in Ghaziabad is designed to help beginners and advanced learners understand the market from basics to live trading strategies.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-black mt-10 mb-6">
              In this course, you will learn:
            </h2>
            <ul className="space-y-4 list-none pl-0">
              {[
                "Basics of Stock Market & NSE/BSE",
                "Technical Analysis & Chart Reading",
                "Intraday & Swing Trading Strategies",
                "Risk Management Techniques",
                "Live Trading Practice",
                "Long-term Investment Planning"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[#7ED321] text-xl">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8">
              Our expert trainers provide step-by-step guidance so that you can confidently trade in the market. If you are searching for a practical trading course in Ghaziabad, this program focuses on real-time market exposure instead of just theory.
            </p>

            <p className="mt-6">
              We also offer a specialized investment course in Ghaziabad for those who want to build long-term wealth through smart portfolio management. Learn how to select strong stocks, analyze company fundamentals, and create a profitable investment strategy.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-6">
              Why Choose Us?
            </h2>
            <ul className="grid sm:grid-cols-2 gap-4 list-none pl-0">
              {[
                "Live Market Sessions",
                "Practical Learning Approach",
                "Small Batch Size",
                "Personalized Mentorship",
                "Affordable Fees"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100 hover:border-[#7ED321] transition">
                  <span className="text-yellow-500 text-xl">⭐</span>
                  <span className="font-semibold text-gray-800">{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-[#f9f9f9] border-l-4 border-[#7ED321] p-6 mt-12 rounded-r-lg">
              <p className="font-bold text-gray-900 mb-2">Ready to Start?</p>
              <p>
                The stock market can be a powerful tool to grow your income — but only with the right knowledge and strategy. Join the most trusted share market training in Ghaziabad and take your first step toward financial freedom.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function StockMarketCourseAfter12thGhaziabad() {
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
            Stock Market Course After 12th in <span className="text-[#7ED321]">Ghaziabad</span> <br />
            Start Your Trading Career Early
          </h1>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 space-y-8 text-gray-700 leading-relaxed text-lg">
          <div className="prose max-w-none">
            <p className="font-medium text-xl text-gray-800">
              Have you completed your 12th and looking for a career-oriented course? Our professional stock
              market course after 12th in Ghaziabad is specially designed for students who want to start
              building financial skills and explore career opportunities in the trading and investment field.
            </p>

            <p className="mt-8">
              Instead of waiting for traditional job options, students can now learn stock market trading and
              investment strategies at an early stage. Our structured trading course after 12th in Ghaziabad
              helps students understand financial markets from basics to advanced level with practical training.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-black mt-10 mb-6">
              What You Will Learn:
            </h2>
            <ul className="space-y-4 list-none pl-0">
              {[
                "Basics of Stock Market & Financial Markets",
                "How to Open and Use a Demat Account",
                "Basic Terminologies (Shares, IPO, Index, etc.)",
                "Understanding Market Trends",
                "Basics of Technical Analysis",
                "Introduction to Intraday & Swing Trading",
                "Risk & Money Management",
                "Basic Investment Planning",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[#7ED321] text-xl">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8">
              This share market career course in Ghaziabad focuses on skill development and real market exposure
              so that students gain confidence in analyzing and trading stocks. We explain concepts in simple
              language, making it easy for beginners to understand.
            </p>

            <p className="mt-6">
              The course is ideal for students who want to build an additional income source, start part-time
              trading, develop a career in financial markets, or improve financial knowledge at an early age.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-6">
              Why Choose Our Course After 12th?
            </h2>
            <ul className="grid sm:grid-cols-2 gap-4 list-none pl-0">
              {[
                "Beginner-Friendly Teaching Method",
                "Practical Live Market Training",
                "Step-by-Step Learning Approach",
                "Personal Mentorship Support",
                "Affordable Fees for Students",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100 hover:border-[#7ED321] transition"
                >
                  <span className="text-yellow-500 text-xl">⭐</span>
                  <span className="font-semibold text-gray-800">{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-[#f9f9f9] border-l-4 border-[#7ED321] p-6 mt-12 rounded-r-lg">
              <p className="font-bold text-gray-900 mb-2">Start Early, Grow Faster</p>
              <p>
                If you want to start your financial journey early and explore opportunities in the stock market,
                join our stock market course after 12th in Ghaziabad today.
              </p>
              <p className="mt-4 font-semibold text-[#7ED321]">
                📞 Enroll now and take your first step toward building a strong career in trading and investments.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


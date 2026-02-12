"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function StockMarketCourseForWorkingProfessionalsGhaziabad() {
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
            Stock Market Course for Working Professionals in{" "}
            <span className="text-[#7ED321]">Ghaziabad</span> <br />
            Learn Part-Time Trading
          </h1>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 space-y-8 text-gray-700 leading-relaxed text-lg">
          <div className="prose max-w-none">
            <p className="font-medium text-xl text-gray-800">
              Are you a job holder looking to create an additional source of income? Our specially designed
              stock market course for working professionals in Ghaziabad helps you learn trading and investment
              strategies without affecting your full-time job.
            </p>

            <p className="mt-8">
              Many professionals want to grow their income but struggle to find flexible learning options.
              That’s why our structured part-time trading course in Ghaziabad is created with convenient
              schedules and practical training methods. You can attend classes in the evening or weekend
              batches while continuing your job.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-black mt-10 mb-6">
              What You Will Learn in This Course:
            </h2>
            <ul className="space-y-4 list-none pl-0">
              {[
                "Basics of Stock Market & Trading",
                "Technical Analysis & Chart Reading",
                "Intraday & Swing Trading Strategies",
                "Long-Term Investment Planning",
                "Risk & Money Management",
                "Options & Equity Trading Basics",
                "Live Market Practice Sessions",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[#7ED321] text-xl">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8">
              Our focus is on practical learning and real market exposure so that you can confidently trade
              even with limited time. We teach simple and effective strategies that working professionals can
              apply in part-time trading.
            </p>

            <p className="mt-6">
              This course is ideal for salaried employees, business owners, IT & corporate professionals, and
              anyone looking to build a second income stream alongside their main career.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-6">
              Why Choose Our Part-Time Trading Course?
            </h2>
            <ul className="grid sm:grid-cols-2 gap-4 list-none pl-0">
              {[
                "Flexible Evening & Weekend Batches",
                "Live Practical Market Sessions",
                "Beginner to Advanced Level Training",
                "Personal Mentorship & Doubt Support",
                "Affordable Course Fees",
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
              <p className="font-bold text-gray-900 mb-2">Grow Alongside Your Career</p>
              <p>
                If you want to increase your income potential and learn trading with proper guidance, join our
                stock market course for working professionals in Ghaziabad today.
              </p>
              <p className="mt-4 font-semibold text-[#7ED321]">
                📞 Enroll now and start building your financial growth alongside your career.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


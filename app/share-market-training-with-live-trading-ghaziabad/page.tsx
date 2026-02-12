"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ShareMarketTrainingWithLiveTradingGhaziabad() {
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
            Share Market Training with Live Trading in{" "}
            <span className="text-[#7ED321]">Ghaziabad</span> <br />
            Practical Market Learning
          </h1>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 space-y-8 text-gray-700 leading-relaxed text-lg">
          <div className="prose max-w-none">
            <p className="font-medium text-xl text-gray-800">
              Are you searching for the best share market training with live trading in Ghaziabad? Learning
              trading through real-time market practice is the fastest way to build confidence and skills. Our
              professional live trading course in Ghaziabad is specially designed for beginners and aspiring
              traders who want hands-on experience instead of only theoretical knowledge.
            </p>

            <p className="mt-8">
              Stock market trading requires practical understanding, discipline, and proper strategy. That’s
              why our course focuses on live market sessions where students learn how to analyze charts,
              identify trading opportunities, and manage risk in real-time conditions.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-black mt-10 mb-6">
              What You Will Learn in Our Live Trading Course:
            </h2>
            <ul className="space-y-4 list-none pl-0">
              {[
                "Basics of Stock Market & Trading",
                "Live Chart Reading & Technical Analysis",
                "Intraday & Swing Trading Strategies",
                "Entry & Exit Planning",
                "Stop Loss & Target Setting",
                "Risk & Money Management",
                "Psychology of Successful Traders",
                "Real-Time Market Execution Practice",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[#7ED321] text-xl">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8">
              Our experienced mentors conduct live trading demonstrations and guide students step-by-step
              during market hours. This practical exposure helps you understand how professional traders take
              decisions in actual market situations.
            </p>

            <p className="mt-6">
              This share market training with live trading in Ghaziabad is suitable for students, working
              professionals, and business owners who want to generate income through smart trading. Small batch
              sizes ensure personal attention and better interaction during live sessions.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-6">
              Why Choose Our Live Trading Course in Ghaziabad?
            </h2>
            <ul className="grid sm:grid-cols-2 gap-4 list-none pl-0">
              {[
                "Real-Time Market Practice",
                "Strategy-Based Learning",
                "Beginner to Advanced Level Training",
                "Personal Mentorship & Doubt Clearing",
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
              <p className="font-bold text-gray-900 mb-2">Experience Real Market Learning</p>
              <p>
                If you want to move beyond theory and gain real trading confidence, join our live trading course
                in Ghaziabad today.
              </p>
              <p className="mt-4 font-semibold text-[#7ED321]">
                📞 Enroll now and experience practical stock market learning with expert guidance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


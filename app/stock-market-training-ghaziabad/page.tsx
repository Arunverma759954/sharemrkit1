"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function StockMarketTrainingBlog() {
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
            Stock Market Training in <span className="text-[#7ED321]">Ghaziabad</span> <br/>
            Professional Trading Classes
          </h1>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 space-y-8 text-gray-700 leading-relaxed text-lg">
          
          <div className="prose max-w-none">
            <p className="font-medium text-xl text-gray-800">
              Looking for the best stock market training in Ghaziabad to start your trading journey? Our professional share market training in Ghaziabad is specially designed for beginners, working professionals, and aspiring traders who want to learn the stock market in a practical and structured way.
            </p>

            <p className="mt-8">
              The stock market offers great earning opportunities, but without proper knowledge and risk management, it can be risky. That’s why our trading training in Ghaziabad focuses on step-by-step learning, live market practice, and real trading strategies that work in today’s market conditions.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-black mt-10 mb-6">
              What You Will Learn:
            </h2>
            <ul className="space-y-4 list-none pl-0">
              {[
                "Basics of Stock Market (NSE & BSE)",
                "Technical Analysis & Chart Reading",
                "Intraday & Swing Trading Strategies",
                "Candlestick Patterns",
                "Risk & Money Management",
                "Live Market Trading Sessions",
                "Psychology of Successful Traders"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[#7ED321] text-xl">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8">
              Our stock trading classes in Ghaziabad are conducted by experienced market mentors who provide practical exposure instead of just theoretical knowledge. You will get hands-on learning with real-time charts and market analysis sessions.
            </p>

            <p className="mt-6">
              Whether you want to trade daily for active income or invest for long-term wealth creation, our training program helps you build strong fundamentals and confidence.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-6">
              Why Choose Our Share Market Training?
            </h2>
            <ul className="grid sm:grid-cols-2 gap-4 list-none pl-0">
              {[
                "Live Practical Sessions",
                "Small Batch Size",
                "Personalized Guidance",
                "Beginner to Advanced Level Training",
                "Affordable Course Fees"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100 hover:border-[#7ED321] transition">
                  <span className="text-yellow-500 text-xl">⭐</span>
                  <span className="font-semibold text-gray-800">{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-[#f9f9f9] border-l-4 border-[#7ED321] p-6 mt-12 rounded-r-lg">
              <p className="font-bold text-gray-900 mb-2">Start Your Journey Today</p>
              <p>
                If you are serious about building a career in trading or generating side income from the stock market, this is the right place to start. Join the most trusted stock market training in Ghaziabad and take your first step toward financial independence.
              </p>
              <p className="mt-4 font-semibold text-[#7ED321]">
                📞 Enroll today and begin your journey to becoming a skilled trader.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

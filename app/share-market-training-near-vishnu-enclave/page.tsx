"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ShareMarketTrainingNearVishnuEnclave() {
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
            Share Market Training Near <span className="text-[#7ED321]">Vishnu Enclave</span> <br/>
            Professional Trading Classes
          </h1>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 space-y-8 text-gray-700 leading-relaxed text-lg">
          
          <div className="prose max-w-none">
            <p className="font-medium text-xl text-gray-800">
              Are you searching for the best share market training near Vishnu Enclave? If you want to learn stock market trading from basics to advanced level, our professional training program near Vishnu Enclave is designed to help you build strong knowledge and practical skills.
            </p>

            <p className="mt-8">
              The stock market offers excellent earning opportunities, but proper guidance is very important. Our expert-led trading classes in Vishnu Enclave focus on real-time market learning, live trading sessions, and proven strategies that help beginners and experienced learners grow confidently.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-black mt-10 mb-6">
              What You Will Learn:
            </h2>
            <ul className="space-y-4 list-none pl-0">
              {[
                "Introduction to Stock Market (NSE & BSE)",
                "Technical Analysis & Chart Reading",
                "Intraday & Swing Trading Strategies",
                "Candlestick Patterns & Indicators",
                "Risk & Money Management",
                "Live Market Practice",
                "Long-Term Investment Planning"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[#7ED321] text-xl">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8">
              Our stock market coaching in Vishnu Enclave provides step-by-step training so that you understand how the market works and how to take smart trading decisions. We focus on practical exposure instead of only theoretical knowledge.
            </p>

            <p className="mt-6">
              Whether you are a student, working professional, or business owner, our trading classes are suitable for everyone who wants to build an additional source of income or develop trading as a career.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-6">
              Why Choose Our Training?
            </h2>
            <ul className="grid sm:grid-cols-2 gap-4 list-none pl-0">
              {[
                "Live Practical Sessions",
                "Small Batch Size",
                "Personalized Mentorship",
                "Beginner to Advanced Level",
                "Affordable Fees"
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
                If you are located near Vishnu Enclave and looking for reliable share market training, this is the right opportunity to start your journey.
              </p>
              <p className="mt-4 font-semibold text-[#7ED321]">
                📞 Enroll today and take your first step toward becoming a confident trader and smart investor.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

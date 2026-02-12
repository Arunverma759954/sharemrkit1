"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function OptionsTradingCourseGhaziabad() {
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
            Options Trading Course in <span className="text-[#7ED321]">Ghaziabad</span> <br/>
            Learn Futures & Derivatives Trading
          </h1>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 space-y-8 text-gray-700 leading-relaxed text-lg">
          
          <div className="prose max-w-none">
            <p className="font-medium text-xl text-gray-800">
              Are you searching for the best options trading course in Ghaziabad to master advanced trading strategies? Our professional futures and options course in Ghaziabad is designed for traders who want to understand derivatives trading and generate income using smart risk-managed strategies.
            </p>

            <p className="mt-8">
              Options and futures trading can offer high profit opportunities, but they also involve higher risk. That’s why our derivatives trading course in Ghaziabad focuses on proper knowledge, strategy building, and disciplined risk management. We teach concepts in a simple and practical way so that beginners and intermediate traders can understand easily.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-black mt-10 mb-6">
              What You Will Learn in This Course:
            </h2>
            <ul className="space-y-4 list-none pl-0">
              {[
                "Basics of Futures & Options",
                "Call & Put Options Explained",
                "Option Chain Analysis",
                "Open Interest & Volume Study",
                "Intraday & Positional Options Strategies",
                "Hedging Techniques",
                "Risk & Capital Management",
                "Live Market Trading Practice"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[#7ED321] text-xl">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8">
              Our expert mentors guide you step-by-step with real-time examples and live market sessions. You will learn how to select the right strike price, manage stop loss, and create effective trading plans.
            </p>

            <p className="mt-6">
              This options trading course in Ghaziabad is suitable for students, working professionals, and active traders who want to upgrade their trading skills. We focus on practical learning instead of only theoretical explanations.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-6">
              Why Choose Our Futures and Options Course?
            </h2>
            <ul className="grid sm:grid-cols-2 gap-4 list-none pl-0">
              {[
                "Live Practical Sessions",
                "Beginner to Advanced Level Training",
                "Real-Time Strategy Demonstration",
                "Personal Mentorship & Doubt Support",
                "Affordable Course Fees"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100 hover:border-[#7ED321] transition">
                  <span className="text-yellow-500 text-xl">⭐</span>
                  <span className="font-semibold text-gray-800">{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-[#f9f9f9] border-l-4 border-[#7ED321] p-6 mt-12 rounded-r-lg">
              <p className="font-bold text-gray-900 mb-2">Master Derivatives Trading</p>
              <p>
                If you want to become confident in derivatives trading and understand how professional traders manage risk, join our futures and options course in Ghaziabad today.
              </p>
              <p className="mt-4 font-semibold text-[#7ED321]">
                📞 Enroll now and take your first step toward mastering advanced trading strategies.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

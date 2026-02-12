"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function FinancialEducationCenterGhaziabad() {
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
            Financial Education Center in <span className="text-[#7ED321]">Ghaziabad</span> <br />
            Professional Investment & Finance Training
          </h1>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 space-y-8 text-gray-700 leading-relaxed text-lg">
          <div className="prose max-w-none">
            <p className="font-medium text-xl text-gray-800">
              Looking for a trusted financial education center in Ghaziabad to build strong knowledge about
              finance, stock market, and investments? Our institute is dedicated to providing practical and
              structured learning for students, working professionals, and aspiring investors who want to
              understand financial markets with clarity and confidence.
            </p>

            <p className="mt-8">
              As a leading investment education institute in Ghaziabad, we focus on developing real-world
              financial skills instead of just theoretical concepts. Our programs are designed to help
              individuals make informed investment decisions, manage risks effectively, and plan long-term
              wealth creation strategies.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-black mt-10 mb-6">
              Our Training Programs Cover:
            </h2>
            <ul className="space-y-4 list-none pl-0">
              {[
                "Basics of Financial Markets",
                "Stock Market & Equity Trading",
                "Technical & Fundamental Analysis",
                "Investment Planning & Portfolio Management",
                "Risk & Money Management",
                "Intraday, Swing & Long-Term Strategies",
                "Live Market Demonstrations",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[#7ED321] text-xl">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8">
              Our experienced mentors explain every concept step-by-step in simple language, making it easy for
              beginners to understand. We believe that financial education is the foundation of financial
              independence.
            </p>

            <p className="mt-6">
              As a professional finance training institute in Ghaziabad, we offer a supportive learning
              environment with practical exposure and personal mentorship. Whether your goal is to start
              trading, grow your investments, or improve financial literacy, our structured courses help you
              achieve measurable results.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-6">
              Why Choose Our Financial Education Center?
            </h2>
            <ul className="grid sm:grid-cols-2 gap-4 list-none pl-0">
              {[
                "Practical & Strategy-Based Learning",
                "Live Market Practice Sessions",
                "Beginner to Advanced Level Courses",
                "Personal Mentorship & Doubt Support",
                "Affordable & Value-Oriented Programs",
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
              <p className="font-bold text-gray-900 mb-2">Start Your Financial Journey</p>
              <p>
                If you are serious about improving your financial knowledge and building a secure financial
                future, join our financial education center in Ghaziabad today.
              </p>
              <p className="mt-4 font-semibold text-[#7ED321]">
                📞 Enroll now and take your first step toward financial awareness and smart investing.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


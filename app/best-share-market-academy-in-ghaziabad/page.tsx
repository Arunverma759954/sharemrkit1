"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BestShareMarketAcademyGhaziabad() {
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
            Best Share Market Academy in <span className="text-[#7ED321]">Ghaziabad</span> <br />
            Professional Trading & Investment Training
          </h1>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 space-y-8 text-gray-700 leading-relaxed text-lg">

          <div className="prose max-w-none">
            <p className="font-medium text-xl text-gray-800">
              Looking for the best share market academy in Ghaziabad to start your trading journey? Choosing the right institute is the first and most important step toward becoming a successful trader. Our academy is recognized as one of the top trading institutes in Ghaziabad, offering practical and result-oriented stock market training.
            </p>

            <p className="mt-8">
              We focus on real-time market exposure, step-by-step guidance, and proven strategies that help beginners as well as experienced learners grow confidently in the stock market. Unlike many institutes that only provide theory, our training approach is completely practical and performance-focused.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-black mt-10 mb-6">
              What Makes Us the Best Stock Market Institute in Ghaziabad?
            </h2>
            <ul className="space-y-4 list-none pl-0">
              {[
                "Beginner to Advanced Level Training",
                "Live Market Trading Sessions",
                "Technical & Fundamental Analysis",
                "Intraday & Swing Trading Strategies",
                "Risk & Money Management",
                "Portfolio Building & Investment Planning",
                "Regular Doubt Clearing & Mentorship Support"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[#7ED321] text-xl">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8">
              Our expert mentors have real market experience and guide students with simple explanations and practical examples. We help you understand how to read charts, identify market trends, and make disciplined trading decisions.
            </p>

            <p className="mt-6">
              Whether you are a student, working professional, or business owner, our structured learning program helps you build strong fundamentals and confidence. Our small batch sizes ensure personalized attention and better learning outcomes.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-6">
              Why Students Choose Our Academy:
            </h2>
            <ul className="grid sm:grid-cols-2 gap-4 list-none pl-0">
              {[
                "Practical Training Approach",
                "Real-Time Trading Experience",
                "Affordable Course Fees",
                "Supportive Learning Environment",
                "Career & Income Growth Opportunities"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100 hover:border-[#7ED321] transition">
                  <span className="text-yellow-500 text-xl">⭐</span>
                  <span className="font-semibold text-gray-800">{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-[#f9f9f9] border-l-4 border-[#7ED321] p-6 mt-12 rounded-r-lg">
              <p className="font-bold text-gray-900 mb-2">Enroll Now</p>
              <p>
                If you are serious about building a career in trading or generating additional income through smart investments, join the best share market academy in Ghaziabad today.
              </p>
              <p className="mt-4 font-semibold text-[#7ED321]">
                📞 Enroll now at the top trading institute in Ghaziabad and take your first step toward financial success.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

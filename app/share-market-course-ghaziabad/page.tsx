"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Is the course fee for the investment course in Ghaziabad affordable?",
    answer:
      "Yes, we pride ourselves on offering an affordable trading course in Ghaziabad that provides maximum value through high-quality mentorship.",
  },
  {
    question: "Do you teach mobile trading or only desktop-based trading?",
    answer:
      "We provide a share market course in Ghaziabad on both platforms, ensuring you can manage your trades and analyze charts using professional mobile apps and advanced desktop software.",
  },
  {
    question: "What makes SMSA the best share market institute in Ghaziabad?",
    answer:
      "SMSA provides a unique investment course in Ghaziabad, composed of 100% practical live-market training and a curriculum updated for 2026's AI-driven trading environment.",
  },
  {
    question: "Will I get a certificate after completing the trading course in Ghaziabad?",
    answer:
      "Yes, every student receives a professional certification from ShareMarket Skills Academy.",
  },
  {
    question: "Do you offer online or offline trading courses in Ghaziabad?",
    answer:
      "We offer both flexible modes, including interactive offline classroom sessions at our Ghaziabad center and online live classes.",
  },
];

export default function ServicesDetailPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-white text-black">

      {/* ================= BANNER ================= */}
      <section
        className="relative h-[55vh] flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/banner/b1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
          <p className="text-sm text-gray-300 mb-3">
            <Link href="/" className="hover:text-[#7ED321]">Home</Link> / Services
          </p>
          <h1 className="text-4xl md:text-6xl font-bold">
            Best Share Market Course in <span className="text-[#7ED321]">Ghaziabad</span>
          </h1>
          <p className="mt-5 max-w-2xl text-gray-200">
            Reliable financial services designed for growth, stability & security.
          </p>
        </div>
      </section>

      {/* ================= INTRODUCTION CONTENT ================= */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 space-y-10 text-gray-700 leading-relaxed">

          <div className="space-y-5">
            <h2 className="text-3xl md:text-4xl font-bold text-black">Introduction</h2>
            <p>
              The world of finance is evolving with the latest trends and fluctuations due to the rise and fall in the current market. So in 2026, understanding the market shares and values before investing money in the share market is always the wiser move.
            </p>
            <p>
              That’s why you need a platform that offers a comprehensive share market course in Ghaziabad. Users should understand why ShareMarket Skills Academy (SMSA Ghaziabad) is the right choice to start your career in finance or to seek a secondary income.
            </p>
            <p>
              Time to focus on the structured approach to get next-level guidance and never feel lost in a sea full of financial turbulence.
            </p>
          </div>

          <div className="space-y-5">
            <h2 className="text-3xl font-bold text-black">Get Comprehensive Insights on Our Stock Market Course Ghaziabad</h2>
            <p>
              The share market classes in Ghaziabad are worth taking when you find the right tutor and tutorial; otherwise, it’s just a waste of time.
            </p>
            <p>
              ShareMarket Skills Academy is the only reliable trading institute in Ghaziabad that can help you become a professional investor after course completion.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-black">1. Professional Stock Market Training for Beginners</h3>
            <p>
              Getting a proper trading course in Ghaziabad at SMSA is easy, as we design everything beginner-friendly. Our students come from diverse backgrounds with the enthusiasm to achieve something unique in the share market.
            </p>
            <p>
              We ensure you understand psychological barriers that often lead to early losses and take a slow, methodical approach so no student is left behind.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-black">2. Advanced Technical Analysis and Chart Reading</h3>
            <p>
              After completing the basics, we transition into advanced analysis — “Understanding the Language of the Markets.”
            </p>
            <p>
              We focus on clean trading and practical chart reading so students learn to time entries and exits with precision.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-black">3. Mastering Options Trading and Hedging Strategies</h3>
            <p>
              The year 2026 presents major opportunities in derivatives. We teach options as tools for consistent income, not gambling instruments.
            </p>
            <p>
              We cover portfolio diversification, asset allocation, compounding, and risk-managed strategies.
            </p>
          </div>

          <div className="space-y-5">
            <h2 className="text-3xl font-bold text-black">Conclusion</h2>
            <p>
              By choosing our share market course in Ghaziabad, you gain lifetime support and guidance from the best trading academy in Ghaziabad.
            </p>
            <p>
              Empower yourself with the skills to navigate the bulls and bears of 2026 and beyond. Join ShareMarket Skills Academy today!
            </p>
          </div>

        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="bg-gray-50 py-28">
        <div className="max-w-5xl mx-auto px-6">

          <div className="text-center mb-16">
            <p className="text-green-500 font-semibold mb-2">FAQ</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left p-6"
                >
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900">{faq.question}</h3>
                  <span className="text-green-500">
                    {activeIndex === index ? <Minus /> : <Plus />}
                  </span>
                </button>

                <div className={`px-6 overflow-hidden transition-all duration-300 ${activeIndex === index ? "max-h-40 pb-6" : "max-h-0"}`}>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}

"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Is Share market trading risky for beginners?",
    answer:
      "Share market trading involves risk, but with proper education, risk management, and guidance, beginners can trade safely and confidently.",
  },
  {
    question: "Do I need prior experience to join your courses?",
    answer:
      "No prior experience is required. Our courses are designed for beginners as well as experienced traders.",
  },
  {
    question: "Are your trainers certified?",
    answer:
      "Yes, our trainers are NISM certified and have extensive real-world trading experience.",
  },
  {
    question: "Do you provide live market training?",
    answer:
      "Yes, we provide live market sessions where students learn real-time analysis and trading strategies.",
  },
  {
    question: "Will I get lifetime support after course completion?",
    answer:
      "Yes, we provide post-course support including doubt clearing sessions and market guidance.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-28">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-green-500 font-semibold mb-2">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Got questions? We’ve got answers. Everything you need to know before
            starting your trading journey.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left p-6 focus:outline-none"
              >
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                  {faq.question}
                </h3>

                <span className="text-green-500">
                  {activeIndex === index ? <Minus /> : <Plus />}
                </span>
              </button>

              <div
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? "max-h-40 pb-6" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

"use client"

import Link from "next/link"
import Image from "next/image"
import { CheckCircle } from "lucide-react"

/* ================= COURSES DATA ================= */
const courses = [
  {
    title: "Stock Market Trading Courses",
    location: "Ghaziabad & Delhi NCR",
    image: "/cources/stock-market-course.jpeg",
    points: [
      "Stock market course for beginners in Ghaziabad",
      "Share market trading course with live market practice",
      "Technical analysis course (Indian stock market)",
      "Fundamental analysis for long-term investing",
      "Swing trading & positional trading strategies",
      "Options trading course with live examples (Futures & Options)",
      "Risk management & trading psychology",
    ],
  },
  {
    title: "Cryptocurrency & Crypto Trading",
    location: "Ghaziabad & Delhi NCR",
    image: "/cources/cryptocurrency-course.jpeg",
    points: [
      "Crypto trading course for beginners in Ghaziabad",
      "Cryptocurrency trading course in Delhi NCR",
      "Bitcoin & altcoin trading fundamentals",
      "Crypto technical analysis & chart reading",
      "Spot & futures crypto trading basics",
      "Online crypto trading course with live guidance",
      "Best crypto trading classes near me",
    ],
  },
  {
    title: "Investing & Wealth Building",
    location: "Long-Term Financial Growth",
    image: "/cources/investment-management-course.jpeg",
    points: [
      "How to invest in stock market for beginners in Ghaziabad",
      "Long-term investing strategies (Delhi NCR)",
      "Mutual funds & portfolio basics",
      "Difference between trading and investing",
      "Demat & trading account guidance",
      "Capital protection & risk planning",
    ],
  },
]

export default function CoursesClient() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section
        className="relative h-[55vh] flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/banner/b1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
          <p className="text-sm text-gray-300 mb-3">
            <Link href="/" className="hover:text-[#7ED321]">Home</Link> / Courses
          </p>
          <h1 className="text-4xl md:text-6xl font-bold">
            Our <span className="text-[#7ED321]">Courses</span>
          </h1>
          <p className="mt-5 max-w-2xl text-gray-200">
            Practical stock market & crypto courses with live market exposure.
          </p>
        </div>
      </section>

      {/* ================= INTRO SECTION ================= */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl text-black font-bold mb-4">
            Learn Trading the <span className="text-[#7ED321]">Right Way</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our courses are designed for beginners to advanced traders with
            practical market exposure, disciplined strategies, and real-time
            guidance to help you grow confidently in trading and investing.
          </p>
        </div>
      </section>

      {/* ================= COURSES ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 space-y-20">

          {courses.map((course, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 !== 0 ? "md:flex-row-reverse md:grid-flow-col-dense" : ""
              }`}
            >
              {/* Image */}
              <div className="relative h-[320px] md:h-[420px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="text-3xl text-black font-bold mb-2">
                  {course.title}
                </h2>
                <p className="text-[#7ED321] font-medium mb-5">
                  {course.location}
                </p>

                <ul className="space-y-3 text-gray-700">
                  {course.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle size={18} className="text-[#7ED321] mt-1" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="inline-block mt-6 bg-[#7ED321] text-black px-6 py-3 rounded-lg font-semibold hover:bg-green-500 transition"
                >
                  Enquire Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

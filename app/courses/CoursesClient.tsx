"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

/* ================= COURSES DATA ================= */
const courses = [
  {
    title: "Trading Course",
    desc: "Master intraday, swing and positional trading with live market practice.",
    image: "/services/s1.jpg",
  },
  {
    title: "Algo Trading",
    desc: "Learn algorithmic trading strategies using automation and data.",
    image: "/services/s2.png",
  },
  {
    title: "Demat Account",
    desc: "Complete guidance on opening and managing Demat & Trading accounts.",
    image: "/services/s3.webp",
  },
  {
    title: "Mutual Funds",
    desc: "Build long-term wealth with smart mutual fund investment strategies.",
    image:  "/services/s4.webp",
  },
  {
    title: "Bonds",
    desc: "Understand fixed income instruments for stable and safe returns.",
    image:  "/services/s5.jpeg",
  },
];

export default function CoursesClient() {
  return (
    <>
      {/* ================= HERO / BANNER ================= */}
      <section
        className="relative h-[55vh] flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/banner/b1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
          <p className="text-sm text-gray-300 mb-3">
            <Link href="/" className="hover:text-[#7ED321]">
              Home
            </Link>{" "}
            / Courses
          </p>

          <h1 className="text-4xl md:text-6xl font-bold">
            Our <span className="text-[#7ED321]">Courses</span>
          </h1>

          <p className="mt-5 max-w-2xl text-gray-200">
            Practical stock market courses designed for beginners to advanced traders.
          </p>
        </div>
      </section>

      {/* ================= INTRO SECTION (NEW) ================= */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl text-black md:text-4xl font-bold mb-4">
            Learn Stock Market the <span className="text-[#7ED321]">Right Way</span>
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            At Share Market Skills Academy, we focus on practical learning,
            disciplined strategies, and real market experience. Our courses are
            designed to help beginners build strong foundations and enable
            traders to grow with confidence and consistency.
          </p>
        </div>
      </section>

      {/* ================= COURSES SECTION ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="md:text-center mb-14">
            <h2 className="text-3xl text-black md:text-4xl font-bold">
              Learn. Trade. <span className="text-[#7ED321]">Grow.</span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Choose from our expertly crafted stock market and investment courses.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 text-black md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
              >
                <div className="relative h-52">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover hover:scale-110 transition duration-300"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    {course.title}
                  </h3>

                  <p className="text-gray-600 mb-5">{course.desc}</p>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-[#7ED321] font-semibold hover:gap-3 transition"
                  >
                    Read More <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

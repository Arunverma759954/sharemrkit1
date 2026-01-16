"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

/* ================= BLOG DATA ================= */
const blogs = [
  {
    title: "Transforming Digital Solutions with Artificial Intelligence",
    desc:
      "We delve into the profound impact that Artificial Intelligence (AI) is having on digital solutions across various industries.",
    image: "/blogs/b1.jpg",
    category: ["Artificial Intelligence", "Machine Learning", "Deep Learning"],
  },
  {
    title: "The Art of Collaboration in Creative Agency Studio",
    desc:
      "In this blog post, we explore the dynamics of collaboration within and between creative agencies.",
    image: "/blogs/b2.jpg",
    category: ["creative", "agency", "product"],
  },
  {
    title: "Enhancing Creativity with Machine Learning",
    desc:
      "Explore how AI is revolutionizing the design process, from generating innovative concepts to automating.",
    image: "/blogs/blog-thum-03.png",
    category: ["Artificial Intelligence", "Machine Learning", "Deep Learning"],
  },
  {
    title: "The Art of Collaboration in Creative Agency Studio",
    desc:
      "In this blog post, we explore the dynamics of collaboration within and between creative agencies.",
    image: "/blogs/blog-thum-4.png",
    category: ["creative", "product", "digital"],
  },
  {
    title: "A Blueprint for Innovation in Product Development",
    desc:
      "Explore how AI is revolutionizing the design process, from generating innovative concepts to automating.",
    image: "/blogs/b5.jpg",
    category: ["Artificial Intelligence", "Machine Learning", "Deep Learning"],
  },
  {
    title: "Product Management in the Digital Age: Complexity and Uncertainty",
    desc:
      "In this blog post, we explore the dynamics of collaboration within and between creative agencies.",
    image: "/blogs/blog-thum-6.png",
    category: ["creative", "product", "digital"],
  },
];

export default function BlogClient() {
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
            <Link href="/" className="hover:text-[#7ED321]">
              Home
            </Link>{" "}
            / Blogs
          </p>

          <h1 className="text-4xl  md:text-6xl font-bold">
            Our <span className="text-[#7ED321]">Blogs</span>
          </h1>

          <p className="mt-5 max-w-2xl text-gray-200">
            Insights, strategies, and knowledge from trading, technology, and
            innovation.
          </p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl text-black md:text-4xl font-bold mb-4">
            Our <span className="text-[#7ED321]">Latest Blog</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Stay updated with market trends, technology insights, and expert
            opinions curated by ShareMarket Skills Academy.
          </p>
        </div>
      </section>

      {/* ================= CATEGORY FILTER ================= */}
      <section className="pb-6 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap gap-3 justify-center">
          {[
            "All Post (20)",
            "Design (4)",
            "Product (2)",
            "Software Engineering (10)",
            "Artificial Intelligence (4)",
          ].map((cat, i) => (
            <button
              key={i}
              className="px-5 py-2 rounded-full border text-sm font-medium text-gray-600 hover:bg-[#7ED321] hover:text-black transition"
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ================= BLOG GRID ================= */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-black grid grid-cols-1 sm:grid-cols-2 gap-10">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
            >
              <div className="relative h-60">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">
                  By ShareMarket Skills Academy | 23 March 2023 · 4 min read
                </p>

                <h3 className="text-xl font-semibold mb-3">
                  {blog.title}
                </h3>

                <p className="text-gray-600 mb-4">{blog.desc}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {blog.category.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href="/blogs/details"
                  className="inline-flex items-center gap-2 text-[#7ED321] font-semibold hover:gap-3 transition"
                >
                  Read More <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PAGINATION ================= */}
      <section className="pb-20 bg-gray-50">
        <div className="flex justify-center gap-3">
          {["Previous", "1", "2", "3", "Next"].map((p, i) => (
            <button
              key={i}
              className={`px-4 py-2 rounded-md border text-sm font-medium ${
                p === "1"
                  ? "bg-[#7ED321] text-black"
                  : "bg-white text-gray-600 hover:bg-[#7ED321] hover:text-black"
              } transition`}
            >
              {p}
            </button>
          ))}
        </div>
      </section>
    </>
  );
}

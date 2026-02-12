"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

/* ================= BLOG DATA ================= */
const allBlogs = [
  {
    title: "Share Market Course in Ghaziabad – Start Your Trading Journey Today",
    desc:
      "Looking for the best share market course in Ghaziabad? Whether you are a student, working professional, or business owner, learning stock market trading can open the door to financial growth.",
    image: "/blogs/share-market-course.png",
    category: ["Share Market", "Trading", "Investment"],
    slug: "/share-market-course-ghaziabad",
  },
  {
    title: "Stock Market Training in Ghaziabad – Professional Trading Classes",
    desc:
      "Looking for the best stock market training in Ghaziabad to start your trading journey? Our professional share market training is designed for beginners.",
    image: "/blogs/b2.jpg",
    category: ["Stock Market", "Training", "Education"],
    slug: "/stock-market-training-ghaziabad",
  },
  {
    title: "Share Market Training Near Vishnu Enclave – Professional Trading Classes",
    desc:
      "Are you searching for the best share market training near Vishnu Enclave? Our professional training program is designed to help you build strong knowledge.",
    image: "/blogs/b3.jpeg",
    category: ["Stock Market", "Training", "Vishnu Enclave"],
    slug: "/share-market-training-near-vishnu-enclave",
  },
  {
    title: "Enhancing Creativity with Machine Learning",
    desc:
      "Explore how AI is revolutionizing the design process, from generating innovative concepts to automating.",
    image: "/blogs/blog-thum-03.png",
    category: ["Artificial Intelligence", "Machine Learning", "Deep Learning"],
    slug: "/blogs/details",
  },
  {
    title: "Stock Market Course Near Me in Ghaziabad – Learn Trading",
    desc:
      "Are you searching online for the best stock market course near me in Ghaziabad? Our professional share market course is specially designed for beginners.",
    image: "/blogs/blog-thum-4.png",
    category: ["Stock Market", "Trading", "Ghaziabad"],
    slug: "/stock-market-course-near-me-ghaziabad",
  },
  {
    title: "Best Share Market Academy in Ghaziabad – Professional Training",
    desc:
      "Looking for the best share market academy in Ghaziabad? Our academy offers practical and result-oriented stock market training.",
    image: "/blogs/b5.jpg",
    category: ["Stock Market", "Academy", "Ghaziabad"],
    slug: "/best-share-market-academy-in-ghaziabad",
  },
  {
    title: "Intraday Trading Course in Ghaziabad – Learn Day Trading",
    desc:
      "Are you searching for the best intraday trading course in Ghaziabad? Our professional day trading course is specially designed for beginners.",
    image: "/blogs/blog-thum-6.png",
    category: ["Intraday", "Trading", "Ghaziabad"],
    slug: "/intraday-trading-course-ghaziabad",
  },
  {
    title: "Technical Analysis Course in Ghaziabad – Master Chart Reading",
    desc:
      "Are you searching for the best technical analysis course in Ghaziabad? Our professional chart reading course is specially designed for beginners.",
    image: "/blogs/b4.jpeg",
    category: ["Technical Analysis", "Trading", "Charts"],
    slug: "/technical-analysis-course-ghaziabad",
  },
  {
    title: "Stock Market Course for Beginners in Ghaziabad – Start from Basics",
    desc:
      "Are you new to the stock market and searching for the best stock market course for beginners in Ghaziabad? Our structured course is specially designed for students and job holders.",
    image: "/blogs/blog-thum-03.png",
    category: ["Stock Market", "Beginners", "Ghaziabad"],
    slug: "/beginner-stock-market-course-ghaziabad",
  },
  {
    title: "Online Stock Trading Classes in Ghaziabad – Learn Trading from Home",
    desc:
      "Are you searching for the best online stock trading classes in Ghaziabad? Learn professional trading skills from home with our live, interactive training program.",
    image: "/blogs/b1.jpg",
    category: ["Online", "Stock Market", "Ghaziabad"],
    slug: "/online-stock-trading-classes-ghaziabad",
  },
  {
    title: "Equity Trading Coaching in Ghaziabad – Professional Equity Market Training",
    desc:
      "Are you looking for the best equity trading coaching in Ghaziabad? Learn how the equity market works with practical, strategy-based training.",
    image: "/blogs/b2.jpg",
    category: ["Equity", "Trading", "Ghaziabad"],
    slug: "/equity-trading-coaching-ghaziabad",
  },
  {
    title: "Financial Education Center in Ghaziabad – Professional Investment & Finance Training",
    desc:
      "Looking for a trusted financial education center in Ghaziabad? Build strong knowledge of finance, stock market, and investments with our structured programs.",
    image: "/blogs/b3.jpeg",
    category: ["Financial Education", "Investment", "Ghaziabad"],
    slug: "/financial-education-center-ghaziabad",
  },
  {
    title: "Stock Market Course After 12th in Ghaziabad – Start Your Trading Career Early",
    desc:
      "Have you completed your 12th and looking for a career-oriented course? Start early with our stock market course after 12th in Ghaziabad.",
    image: "/blogs/b4.jpeg",
    category: ["Students", "Stock Market", "Ghaziabad"],
    slug: "/stock-market-course-after-12th-ghaziabad",
  },
  {
    title: "Stock Market Course for Working Professionals in Ghaziabad – Learn Part-Time Trading",
    desc:
      "Are you a job holder looking to create an additional source of income? Learn part-time trading with our stock market course for working professionals in Ghaziabad.",
    image: "/blogs/b5.jpg",
    category: ["Working Professionals", "Part-Time Trading", "Ghaziabad"],
    slug: "/stock-market-course-for-working-professionals-ghaziabad",
  },
  {
    title: "Share Market Training with Live Trading in Ghaziabad – Practical Market Learning",
    desc:
      "Are you searching for the best share market training with live trading in Ghaziabad? Gain real-time market experience with our live trading sessions.",
    image: "/blogs/blog-thum-6.png",
    category: ["Live Trading", "Share Market", "Ghaziabad"],
    slug: "/share-market-training-with-live-trading-ghaziabad",
  },
  {
    title: "How to Start Trading in Ghaziabad – Step-by-Step Beginner Guide",
    desc:
      "New to markets? This trading guide for Ghaziabad explains how to start trading, open accounts, learn stock market basics, and manage risk step by step.",
    image: "/blogs/share-market-course.png",
    category: ["Trading Guide", "Stock Market Basics", "Ghaziabad"],
    slug: "/how-to-start-trading-in-ghaziabad",
  },
];

export default function BlogClient() {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;
  
  // Calculate indices
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = allBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(allBlogs.length / blogsPerPage);

  const handlePageChange = (page: number | string) => {
     if (typeof page === 'number') {
        setCurrentPage(page);
     } else if (page === 'Previous' && currentPage > 1) {
        setCurrentPage(currentPage - 1);
     } else if (page === 'Next' && currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
     }
  };

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
            {currentBlogs.map((blog, index) => (
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
                  href={blog.slug}
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
          <button
              onClick={() => handlePageChange('Previous')}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-md border text-sm font-medium ${
                currentPage === 1 ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "bg-white text-gray-600 hover:bg-[#7ED321] hover:text-black"
              } transition`}
          >
              Previous
          </button>
          
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => handlePageChange(p)}
              className={`px-4 py-2 rounded-md border text-sm font-medium ${
                p === currentPage
                  ? "bg-[#7ED321] text-black"
                  : "bg-white text-gray-600 hover:bg-[#7ED321] hover:text-black"
              } transition`}
            >
              {p}
            </button>
          ))}

          <button
              onClick={() => handlePageChange('Next')}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-md border text-sm font-medium ${
                currentPage === totalPages ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "bg-white text-gray-600 hover:bg-[#7ED321] hover:text-black"
              } transition`}
          >
              Next
          </button>
        </div>
      </section>
    </>
  );
}

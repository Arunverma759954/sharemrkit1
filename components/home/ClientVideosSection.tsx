"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { X, Play } from "lucide-react";

const reviews = [
  {
    title: "Happy Client Review",
    sub: "See how our students trade confidently in the real market",
    videoUrl: "https://www.instagram.com/reels/DNAW7pPTqvD/",
  },
  {
    title: "Success Story",
    sub: "Practical trading experience leads to consistent growth",
    videoUrl: "https://www.instagram.com/reels/DM4zx0hTRt2/embed",
  },
];

export default function ClientVideosSection() {
  const [openVideo, setOpenVideo] = useState<string | null>(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-black">
          What Our <span className="text-[#7ED321]">Clients Say</span>
        </h2>
        <p className="text-gray-600 text-lg mb-12">
          Real stories and reviews from our students learning stock & crypto trading.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer relative"
              onClick={() => setOpenVideo(review.videoUrl)}
            >
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-1">{review.title}</h3>
                <p className="text-gray-600 mb-4">{review.sub}</p>
              </div>

              {/* Placeholder box with play icon */}
              <div className="relative w-full h-[400px] md:h-[350px] bg-gray-200 flex items-center justify-center rounded-b-2xl">
                <Play size={60} className="text-white opacity-80" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ===== VIDEO POPUP ===== */}
      {openVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <div className="relative w-[90%] md:w-[70%] lg:w-[50%] h-[60%] md:h-[70%] bg-black rounded-xl overflow-hidden">
            <button
              onClick={() => setOpenVideo(null)}
              className="absolute top-4 right-4 z-50 text-white hover:text-red-500"
            >
              <X size={28} />
            </button>
            <iframe
              src={openVideo}
              className="w-full h-full"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      )}
    </section>
  );
}

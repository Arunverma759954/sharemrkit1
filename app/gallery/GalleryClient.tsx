"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { useState } from "react"

const galleryImages = [
  "/Gallery/g1.jpg",
  "/Gallery/g2.jpg",
  "/Gallery/g3.jpg",
  "/Gallery/g4.webp",
  "/Gallery/g5.webp",
  "/Gallery/g6.webp",
]

export default function GalleryClient() {
  const [activeImage, setActiveImage] = useState<string | null>(null)

  return (
    <div className="bg-white">

      {/* ===== Banner ===== */}
      <section
        className="relative h-[55vh] flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/banner/b1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
          <p className="text-sm text-gray-300 mb-3">
            <Link href="/" className="hover:text-[#7ED321]">Home</Link> / Gallery
          </p>

          <h1 className="text-4xl md:text-6xl font-bold">
            Our <span className="text-[#7ED321]">Gallery</span>
          </h1>

          <p className="mt-4 max-w-2xl text-gray-200">
            A glimpse of our work, events, training sessions & achievements.
          </p>
        </div>
      </section>

      {/* ===== Intro ===== */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            Moments that <span className="text-[#7ED321]">Define Us</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Explore our journey through real classroom sessions, workshops,
            live market training and successful milestones.
          </p>
        </div>
      </section>

      {/* ===== Gallery Grid ===== */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onClick={() => setActiveImage(img)}
              className="relative h-64 rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
            >
              <Image
                src={img}
                alt={`Gallery Image ${index + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== Popup / Lightbox ===== */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-4"
            onClick={() => setActiveImage(null)}
          >
            {/* Popup Box */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-xl w-full max-w-3xl max-h-[85vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-3 right-3 z-10 bg-black/70 text-white p-2 rounded-full hover:bg-black"
              >
                <X size={20} />
              </button>

              {/* Image */}
              <div className="relative w-full min-h-[400px]">
                <Image
                  src={activeImage}
                  alt="Gallery Preview"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}

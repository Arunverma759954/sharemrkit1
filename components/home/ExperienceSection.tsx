// @ts-nocheck
"use client";


import { useState, useEffect } from "react";
import Image from "next/image";

// Move this outside the component
function useCounter(end, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 50); // update every 50ms
    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(interval);
      }
      setCount(Math.floor(start));
    }, 50);

    return () => clearInterval(interval);
  }, [end, duration]);

  return count;
}

export default function ExperienceSection() {
  const years = useCounter(10);
  const batches = useCounter(25);
  const students = useCounter(300);
  const stars = useCounter(5);

  return (
    <section className="relative bg-gray-900 text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/banner/b2.jpg" // replace with your image
          alt="Experience Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div> {/* overlay */}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-28 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Experiences Fueled by Passion and Expertise
        </h2>
        <p className="text-lg md:text-xl text-gray-200 mb-16 max-w-2xl mx-auto">
          Our trainers are NISM certified and have hefty amount of experience in real world trading.
        </p>

        {/* Counters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-blue-200 text-gray-900 p-6 rounded-xl shadow-lg flex flex-col items-center">
            <span className="text-4xl font-extrabold">{years} +</span>
            <p className="mt-2 text-center font-medium">Years of Experience<br/>(in trading)</p>
          </div>

          <div className="bg-blue-200 text-gray-900 p-6 rounded-xl shadow-lg flex flex-col items-center">
            <span className="text-4xl font-extrabold">{batches} +</span>
            <p className="mt-2 text-center font-medium">Batches Complete</p>
          </div>

          <div className="bg-blue-200 text-gray-900 p-6 rounded-xl shadow-lg flex flex-col items-center">
            <span className="text-4xl font-extrabold">{students} +</span>
            <p className="mt-2 text-center font-medium">Students Trained</p>
          </div>

          <div className="bg-blue-200 text-gray-900 p-6 rounded-xl shadow-lg flex flex-col items-center">
            <span className="text-4xl font-extrabold">{stars}</span>
            <p className="mt-2 text-center font-medium">Star Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}

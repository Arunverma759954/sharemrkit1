"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function AboutFioncaSection() {
  const [openVideo, setOpenVideo] = useState(false);

  return (
    <section className="bg-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-10">
        {/* Left: Image with bottom-left circular play button */}
        <div className="w-full lg:w-1/2 relative bg-white rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/team/Ash.jpeg"
            alt="Fionca About"
            width={600}
            height={400}
            className="w-full h-full object-cover"
          />

        </div>

        {/* Right: Content */}
        <div className="w-full lg:w-1/2 text-left">
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">
            About Ashish{" "}
            <span className="inline-block w-12 h-[2px] bg-[#E63946] ml-2"></span>
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">
            Largest Demand Partnership <br />
            Building Financial Experts
          </h2>

          <p className="text-gray-600 mb-8">
            Fionca is a trusted name for providing financial assistance and expert guidance. Our mission is to help individuals and businesses grow their wealth with professionalism, trust, and quality education.
          </p>

          {/* Features */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 text-[#2DB7F5]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-6h6v6m0 0l-3-3m3 3l3-3" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Support On Raising Funds</h4>
                <p className="text-gray-600">
                  Our financial experts support or help you to find out which way you can raise your funds more effectively.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 text-[#2DB7F5]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Outsourced Consulting Business</h4>
                <p className="text-gray-600">
                  Fionca provides experts and assistance to help you hire professionals for your financial or business requirements.
                </p>
              </div>
            </div>
          </div>

          {/* Team Member */}
          <div className="mt-10 flex items-center gap-4">
         
            <div>
              <p className="font-semibold text-gray-900">Ashish Singh</p>
              <p className="text-gray-500 text-sm">Co-founder & Faculty</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

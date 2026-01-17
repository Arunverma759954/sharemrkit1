"use client";

import Link from "next/link";
import Image from "next/image";

export default function EquityStrategiesPage() {
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
            / Investment / Equity Strategies
          </p>

          <h1 className="text-4xl md:text-6xl font-bold">
            Equity <span className="text-[#7ED321]">Strategies</span>
          </h1>

          <p className="mt-5 max-w-2xl text-gray-200">
            Professionally managed equity strategies designed to deliver
            consistent growth and income with disciplined risk control.
          </p>
        </div>
      </section>

      {/* ================= STRATEGY LIST ================= */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-900">
              Choose Your <span className="text-[#7ED321]">Strategy</span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Select a strategy that aligns with your capital, risk appetite,
              and long-term wealth goals.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-10">

            {/* Shares + MCX */}
            <div className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden">
              <Image
                src="/investment/equity-img.png"
                alt="Shares + MCX"
                width={600}
                height={350}
                className="w-full object-cover"
              />

              <div className="p-8">
                <h3 className="text-2xl text-black font-semibold mb-4">
                  Shares + MCX
                </h3>

                <p className="text-gray-600 mb-6">
                  Long-term equity growth combined with high-yield MCX option
                  selling for enhanced returns and extended market exposure.
                </p>

                <Link
                  href="/investment/equity-strategies/shares-mcx"
                  className="inline-block bg-[#7ED321] text-black px-6 py-3 rounded-full font-semibold hover:bg-[#6ac11c]"
                >
                  View Strategy →
                </Link>
              </div>
            </div>

            {/* Shares + Nifty */}
            <div className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden">
              <Image
                src="/investment/shares-nifty.png"
                alt="Shares + Nifty"
                width={600}
                height={350}
                className="w-full object-cover"
              />

              <div className="p-8">
                <h3 className="text-2xl text-black font-semibold mb-4">
                  Shares + Nifty
                </h3>

                <p className="text-gray-600 mb-6">
                  A stable equity portfolio paired with systematic Nifty option
                  strategies for consistent income generation.
                </p>

                <Link
                  href="/investment/equity-strategies/shares-nifty"
                  className="inline-block bg-[#7ED321] text-black px-6 py-3 rounded-full font-semibold hover:bg-[#6ac11c]"
                >
                  View Strategy →
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

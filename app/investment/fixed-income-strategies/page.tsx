"use client";

import Link from "next/link";
import Image from "next/image";

export default function FixedIncomeStrategiesPage() {
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
            / Investment Plans
          </p>

          <h1 className="text-4xl md:text-6xl font-bold">
            Fixed Income{" "}
            <span className="text-[#7ED321]">Strategies</span>
          </h1>

          <p className="mt-5 max-w-2xl text-gray-200">
            Capital protection–first strategies combined with intelligent
            algorithmic income enhancement.
          </p>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900">
              Choose Your <span className="text-[#7ED321]">Fixed Income Plan</span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Stable returns, downside protection, and enhanced yield through
              algorithmic strategies.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-10">

            {/* Bonds + Algo */}
            <div className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden">
              <Image
                src="/investment/bonds-algo.png"
                alt="Bonds + Algo"
                width={600}
                height={350}
                className="w-full object-cover"
              />

              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4">
                  Bonds + Algo
                </h3>

                <p className="text-gray-600 mb-6">
                  High-quality bond investments combined with low-risk
                  algorithmic strategies to generate consistent income.
                </p>

                <Link
                  href="/investment/fixed-income-strategies/bonds-algo"
                  className="inline-block bg-[#7ED321] text-black px-6 py-3 rounded-full font-semibold hover:bg-[#6ac11c]"
                >
                  View Strategy →
                </Link>
              </div>
            </div>

            {/* FD + Algo */}
            <div className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden">
              <Image
                src="/investment/fd-algo.png"
                alt="FD + Algo"
                width={600}
                height={350}
                className="w-full object-cover"
              />

              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4">
                  FD + Algo
                </h3>

                <p className="text-gray-600 mb-6">
                  Traditional fixed deposits enhanced with systematic
                  algo-based monthly income generation.
                </p>

                <Link
                  href="/investment/fixed-income-strategies/fd-algo"
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




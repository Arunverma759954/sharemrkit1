"use client";

import Image from "next/image";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export default function SharesMCX() {
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
            Managed Equity{" "}
            <span className="text-[#7ED321]">+ MCX Algos</span>
          </h1>

          <p className="mt-5 max-w-2xl text-gray-200">
            A powerful wealth strategy combining professional equity management
            with high-yield MCX option selling algorithms.
          </p>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">

          {/* Intro Section */}
          <div className="grid lg:grid-cols-2 gap-10 items-center mb-14">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Managed Equity <span className="text-blue-600">+</span> High-Yield MCX Algos
              </h2>
              <p className="text-lg text-gray-600">
                Maximize your wealth by combining professional stock selection
                with the late-night volatility of the commodity markets.
                This plan is designed for high-conviction growth with a focus
                on long-term capital preservation.
              </p>
            </div>

            <div>
              <Image
                src="/investment/equity-img.png"
                alt="Managed Equity and MCX Algo Trading"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* Section 1 */}
          <div className="bg-white rounded-xl shadow p-8 mb-10">
            <h2 className="text-2xl font-semibold mb-3">
              1. Professional Equity Management
            </h2>
            <p className="font-medium text-gray-700 mb-4">
              Target: <span className="text-green-600">20% – 25% Average CAGR</span>
            </p>

            <p className="text-gray-600 mb-4">
              Your core capital is invested in a high-growth equity portfolio.
            </p>

            <ul className="space-y-2 text-gray-700 list-disc pl-5">
              <li><strong>Expert Portfolio Selection:</strong> We pick fundamentally strong companies to beat the benchmark.</li>
              <li><strong>Passive Execution for You:</strong> Our professionals manage all entries, exits, and rebalancing.</li>
              <li><strong>Core Growth:</strong> This remains the foundation of your wealth.</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="bg-white rounded-xl shadow p-8 mb-10">
            <h2 className="text-2xl font-semibold mb-3">
              2. MCX Option Selling (The "Margin-Max" Engine)
            </h2>

            <p className="font-medium text-gray-700 mb-4">
              Target: <span className="text-green-600">15% – 18% Additional Annual Return</span>
            </p>

            <p className="text-gray-600 mb-4">
              We pledge your equity holdings to unlock a trading margin for
              automated Commodity Option Selling (Crude Oil, Natural Gas, Gold).
            </p>

            <ul className="space-y-2 text-gray-700 list-disc pl-5">
              <li><strong>Extended Earning Window:</strong> Trading continues until 11:30 PM.</li>
              <li><strong>Volatility as an Asset:</strong> Higher premiums via theta decay.</li>
              <li><strong>Automated Precision:</strong> Algo-managed execution.</li>
            </ul>
          </div>

          {/* Protection Section */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <ShieldCheck className="text-blue-600" />
              The 10% Capital Protection Floor
            </h2>

            <ul className="space-y-3 text-gray-700 list-disc pl-5">
              <li><strong>No Intraday Stop-Loss:</strong> Trades breathe through volatility.</li>
              <li>
                <strong>The 10% Hard-Stop:</strong> Global circuit breaker protects 90% capital.
              </li>
            </ul>
          </div>

          {/* Comparison Table */}
          <div className="bg-white rounded-xl shadow p-8">
            <h2 className="text-2xl font-semibold mb-6">
              Strategic Advantage: Why Equity + MCX?
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-3 border">Feature</th>
                    <th className="p-3 border">Standard Managed Equity</th>
                    <th className="p-3 border">Our Equity + MCX Plan</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border">Core Growth</td>
                    <td className="p-3 border">20-25% CAGR</td>
                    <td className="p-3 border">20-25% CAGR</td>
                  </tr>
                  <tr>
                    <td className="p-3 border">Additional Yield</td>
                    <td className="p-3 border">0%</td>
                    <td className="p-3 border">+15-18%</td>
                  </tr>
                  <tr>
                    <td className="p-3 border">Combined Target</td>
                    <td className="p-3 border">20-25%</td>
                    <td className="p-3 border font-semibold text-green-600">
                      35-43% Total ROI
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border">Risk Limit</td>
                    <td className="p-3 border">Market Dependent</td>
                    <td className="p-3 border">Hard 10% Protection</td>
                  </tr>
                  <tr>
                    <td className="p-3 border">Time Efficiency</td>
                    <td className="p-3 border">Standard Hours</td>
                    <td className="p-3 border">Till 11:30 PM</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Lock, TrendingUp } from "lucide-react";

export default function BondsAlgoPage() {
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
            / Fixed Income Strategies
          </p>

          <h1 className="text-4xl md:text-6xl font-bold">
            Guaranteed Yield{" "}
            <span className="text-[#7ED321]">+ Algo Booster</span>
          </h1>

          <p className="mt-5 max-w-2xl text-gray-200">
            Build a fortress for your capital with AAA-rated bonds combined
            with automated Nifty & MCX income strategies.
          </p>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">

          {/* Intro */}
          <div className="grid lg:grid-cols-2 gap-10 items-center mb-14">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Fixed Income Bonds{" "}
                <span className="text-[#7ED321]">+ Automated Yield</span>
              </h2>

              <p className="text-lg text-gray-600">
                This strategy combines the safety of top-rated bonds with
                algorithmic option selling to generate two income streams
                without exposing your capital to equity volatility.
              </p>
            </div>

            <div>
              <Image
                src="/investment/bonds-algo.png"
                alt="Bonds and Algo Strategy"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* Section 1 */}
          <div className="bg-white rounded-xl shadow p-8 mb-10">
            <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">
              <Lock className="text-[#7ED321]" />
              1. The Core: Best-in-Class Rated Bonds
            </h2>

            <p className="font-medium text-gray-700 mb-4">
              Target:{" "}
              <span className="text-green-600">
                10% – 12% Guaranteed Interest
              </span>
            </p>

            <ul className="space-y-2 text-gray-700 list-disc pl-5">
              <li>
                <strong>Low Risk:</strong> Capital parked in AAA & AA+ rated
                corporate bonds or government-backed securities.
              </li>
              <li>
                <strong>Capital Preservation:</strong> Returns do not depend on
                Nifty or stock market movements.
              </li>
              <li>
                <strong>Steady Growth:</strong> A solid fixed-income foundation
                delivering predictable annual returns.
              </li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="bg-white rounded-xl shadow p-8 mb-10">
            <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">
              <TrendingUp className="text-[#7ED321]" />
              2. The Booster: “Pledge & Trade” Algo
            </h2>

            <p className="font-medium text-gray-700 mb-4">
              Target:{" "}
              <span className="text-green-600">
                10% – 12% Additional Annual Return
              </span>
            </p>

            <ul className="space-y-2 text-gray-700 list-disc pl-5">
              <li>
                <strong>Extra ~1% Monthly:</strong> Nifty & MCX option selling
                using time decay (Theta).
              </li>
              <li>
                <strong>Cash-Free Leverage:</strong> Earn bond interest and algo
                profits on the same capital.
              </li>
              <li>
                <strong>Market-Neutral:</strong> Designed to profit without
                predicting market direction.
              </li>
            </ul>
          </div>

          {/* Safety */}
          <div className="bg-green-50 border border-green-200 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <ShieldCheck className="text-green-600" />
              Safety Protocols: Secure & Disciplined
            </h2>

            <ul className="space-y-3 text-gray-700 list-disc pl-5">
              <li>
                <strong>10% Capital Risk Cap:</strong> Algo halts automatically
                if losses reach 10%.
              </li>
              <li>
                <strong>Fully Automated:</strong> No emotional or manual
                intervention.
              </li>
              <li>
                <strong>Asset Independence:</strong> Market crashes do not
                devalue your bond principal.
              </li>
            </ul>
          </div>

          {/* Comparison Table */}
          <div className="bg-white rounded-xl shadow p-8">
            <h2 className="text-2xl font-semibold mb-6">
              Why Choose the Bond + Algo Hybrid?
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-3 border">Feature</th>
                    <th className="p-3 border">Standard Bonds</th>
                    <th className="p-3 border">Bond + Algo Plan</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border">Principal Security</td>
                    <td className="p-3 border">High</td>
                    <td className="p-3 border">High</td>
                  </tr>
                  <tr>
                    <td className="p-3 border">Fixed Yield</td>
                    <td className="p-3 border">7–9%</td>
                    <td className="p-3 border">10–12%</td>
                  </tr>
                  <tr>
                    <td className="p-3 border">Algo Income</td>
                    <td className="p-3 border">None</td>
                    <td className="p-3 border">+10–12%</td>
                  </tr>
                  <tr>
                    <td className="p-3 border font-semibold">Total Target</td>
                    <td className="p-3 border">7–9%</td>
                    <td className="p-3 border font-semibold text-green-600">
                      20–24% Total
                    </td>
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

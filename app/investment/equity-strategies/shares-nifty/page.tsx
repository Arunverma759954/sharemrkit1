
"use client";

import Image from "next/image";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export default function ProfessionalEquityNiftyYield() {
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
            Professional Equity Growth{" "}
            <span className="text-[#7ED321]">+ Automated Nifty Yield</span>
          </h1>

          <p className="mt-5 max-w-2xl text-gray-200">
            Experience a sophisticated investment model designed for the modern
            investor.
          </p>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">

          {/* ================= EXECUTIVE SUMMARY ================= */}
          <div className="grid lg:grid-cols-2 gap-10 items-center mb-14">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                1. Executive Summary
              </h2>
              <p className="text-lg text-gray-600">
                Experience a sophisticated investment model designed for the
                modern investor. This plan manages your core wealth for
                long-term compounding while simultaneously generating monthly
                cash flow through the power of Pledge & Trade. By combining
                professional human expertise with algorithmic precision, we
                aim for a target combined return of{" "}
                <strong>30-37% annually</strong>.
              </p>
            </div>

            <div>
              <Image
                src="/investment/shares-nifty.png"
                alt="Equity Growth and Automated Nifty Yield"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* ================= DUAL ENGINE STRATEGY ================= */}
          <div className="bg-white rounded-xl shadow p-8 mb-10">
            <h2 className="text-2xl font-semibold mb-6">
              2. The Dual-Engine Strategy
            </h2>

            <h3 className="text-xl font-semibold mb-2">
              Engine 1: Professional Equity Management
            </h3>

            <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-6">
              <li>
                <strong>Target:</strong> 20% – 25% Average CAGR
              </li>
              <li>
                <strong>Mechanism:</strong> Your core capital is deployed into a
                professionally curated portfolio of high-conviction growth
                stocks.
              </li>
              <li>
                <strong>Expert Oversight:</strong> We handle the research,
                entries, and rebalancing. Unlike passive index funds, we
                active-manage the portfolio to outperform benchmark indices.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">
              Engine 2: Nifty Algo "Yield Booster"
            </h3>

            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>
                <strong>Target:</strong> 10% – 12% Additional Annual Return
                (~1% Monthly)
              </li>
              <li>
                <strong>Mechanism:</strong> We utilize the Pledge & Trade system.
                By pledging your managed equity holdings, we unlock trading
                margins to run automated Nifty Option Selling strategies.
              </li>
              <li>
                <strong>Efficiency:</strong> This income is generated using the
                margin of your existing shares—requiring zero additional cash
                investment.
              </li>
            </ul>
          </div>

          {/* ================= RISK PROTECTION ================= */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <ShieldCheck className="text-blue-600" />
              3. Institutional-Grade Risk Protection
            </h2>

            <p className="text-gray-700 mb-4">
              We prioritize capital preservation through two non-negotiable,
              hard-coded "Circuit Breakers" within our algorithms:
            </p>

            <ul className="list-disc pl-5 space-y-3 text-gray-700">
              <li>
                <strong>1% Intraday Stop-Loss:</strong> If the algorithm hits a
                loss of 1% on any given day, the "Kill Switch" is triggered. All
                positions are instantly squared off to ensure one bad day never
                impacts your long-term wealth.
              </li>
              <li>
                <strong>10% Strategy Drawdown Limit:</strong> If the cumulative
                loss of the algo strategy reaches 10%, the system automatically
                halts for a full performance audit. This ensures a 90% capital
                protection floor on your algo-allocated margin.
              </li>
            </ul>
          </div>

          {/* ================= COMPARISON TABLE ================= */}
          <div className="bg-white rounded-xl shadow p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-6">
              4. Performance Comparison
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-3 border">Feature</th>
                    <th className="p-3 border">Standard Managed Equity</th>
                    <th className="p-3 border">Our Dual-Engine Plan</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border">Equity Core Growth</td>
                    <td className="p-3 border">20-25% CAGR</td>
                    <td className="p-3 border">20-25% CAGR</td>
                  </tr>
                  <tr>
                    <td className="p-3 border">Additional Algo Yield</td>
                    <td className="p-3 border">0%</td>
                    <td className="p-3 border">+10-12% (via Pledging)</td>
                  </tr>
                  <tr>
                    <td className="p-3 border">Total Target Return</td>
                    <td className="p-3 border">20-25%</td>
                    <td className="p-3 border font-semibold text-green-600">
                      30-37%
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border">Intraday Risk Control</td>
                    <td className="p-3 border">Market Dependent</td>
                    <td className="p-3 border">Strict 1% Daily Cap</td>
                  </tr>
                  <tr>
                    <td className="p-3 border">Maximum Strategy Risk</td>
                    <td className="p-3 border">Variable</td>
                    <td className="p-3 border">Hard 10% Overall Stop</td>
                  </tr>
                  <tr>
                    <td className="p-3 border">Effort Required</td>
                    <td className="p-3 border">Low</td>
                    <td className="p-3 border">Zero (Fully Automated)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* ================= ONBOARDING ================= */}
          <div className="bg-white rounded-xl shadow p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              5. The Onboarding Process
            </h2>

            <ol className="list-decimal pl-5 space-y-3 text-gray-700">
              <li>
                <strong>Portfolio Construction:</strong> We build your
                growth-oriented equity core in your demat account.
              </li>
              <li>
                <strong>Margin Activation:</strong> You pledge your holdings to
                receive a trading limit (collateral).
              </li>
              <li>
                <strong>Algo Deployment:</strong> Our Nifty Algos begin trading,
                targeting 1% monthly gains via Theta decay.
              </li>
              <li>
                <strong>Hands-Free Growth:</strong> The system manages exits and
                risk limits automatically while you track performance via our
                dashboard.
              </li>
            </ol>
          </div>

          {/* ================= DISCLOSURE ================= */}
          <div className="bg-gray-100 rounded-xl p-6 text-sm text-gray-600">
            <h2 className="text-lg font-semibold mb-2">6. Disclosure</h2>
            <p>
              Investment in the securities market are subject to market risks.
              Past performance is not indicative of future results. The 1%
              daily and 10% strategy stop-losses are designed to mitigate risk
              but do not eliminate the possibility of loss during extreme
              market volatility.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}

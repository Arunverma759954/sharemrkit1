"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Landmark,
  TrendingUp,
  Lock,
} from "lucide-react";

export default function FDAlgoPage() {
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
            Capital-Safe{" "}
            <span className="text-[#7ED321]">FD + Algo</span>
          </h1>

          <p className="mt-5 max-w-2xl text-gray-200">
            Bank-backed security combined with automated Nifty income.
            The lowest-risk strategy in our investment suite.
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
                The Capital-Safe{" "}
                <span className="text-[#7ED321]">FD + Algo Plan</span>
              </h2>

              <p className="text-lg text-gray-600">
                Your money stays safely in the bank while our algorithms
                work in the market. By pledging your Fixed Deposit, you earn
                guaranteed bank interest plus automated Nifty option income
                without exposing your capital to equity volatility.
              </p>
            </div>

            <div>
              <Image
                src="/investment/fd-algo.png"
                alt="FD plus Algo Strategy"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* Pillar 1 */}
          <div className="bg-white rounded-xl shadow p-8 mb-10">
            <h2 className="text-2xl font-semibold text-black mb-3 flex items-center gap-2">
              <Landmark className="text-[#7ED321]" />
              Pillar 1: Bank Fixed Deposit (Core Asset)
            </h2>

            <p className="font-medium text-gray-700 mb-4">
              Target:{" "}
              <span className="text-green-600">
                7% – 8% Guaranteed Bank Interest
              </span>
            </p>

            <ul className="space-y-2 text-gray-700 list-disc pl-5">
              <li>
                <strong>Capital in Bank:</strong> Your money remains in your
                preferred bank as a Fixed Deposit.
              </li>
              <li>
                <strong>Zero Market Risk:</strong> Principal protected by
                bank-level guarantees.
              </li>
              <li>
                <strong>Safe Foundation:</strong> Forms the lowest-risk base
                of the entire strategy.
              </li>
            </ul>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white rounded-xl shadow p-8 mb-10">
            <h2 className="text-2xl  text-black font-semibold mb-3 flex items-center gap-2">
              <TrendingUp className="text-[#7ED321]" />
              Pillar 2: Nifty Algo Booster (Yield Engine)
            </h2>

            <p className="font-medium text-gray-700 mb-4">
              Target:{" "}
              <span className="text-green-600">
                7% – 8% Additional Annual Return
              </span>
            </p>

            <ul className="space-y-2 text-gray-700 list-disc pl-5">
              <li>
                <strong>FD Pledging:</strong> Unlock trading margin without
                withdrawing a single rupee from your bank.
              </li>
              <li>
                <strong>0.6% – 0.7% Monthly:</strong> Automated Nifty option
                selling using time-decay strategies.
              </li>
              <li>
                <strong>Market-Neutral:</strong> Focuses on theta, not market
                direction.
              </li>
            </ul>
          </div>

          {/* Expected Performance */}
          <div className="bg-green-50 border border-green-200 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-semibold text-black mb-4 flex items-center gap-2">
              <ShieldCheck className="text-green-600" />
              Expected Performance: 14% – 15% CAGR
            </h2>

            <p className="text-gray-700">
              By combining guaranteed FD interest with disciplined algorithmic
              trading income, this plan nearly doubles the return of a standard
              FD while maintaining ultra-low risk.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="bg-white rounded-xl shadow p-8 mb-12">
            <h2 className="text-2xl text-black font-semibold mb-6">
              FD vs FD + Algo Strategy
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border text-black">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-3 border">Feature</th>
                    <th className="p-3 border">Standard Bank FD</th>
                    <th className="p-3 border">FD + Algo Plan</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border">Principal Safety</td>
                    <td className="p-3 border">Bank Guaranteed</td>
                    <td className="p-3 border">Bank Guaranteed</td>
                  </tr>
                  <tr>
                    <td className="p-3 border">Guaranteed Return</td>
                    <td className="p-3 border">7–8%</td>
                    <td className="p-3 border">7–8%</td>
                  </tr>
                  <tr>
                    <td className="p-3 border">Algo Yield</td>
                    <td className="p-3 border">0%</td>
                    <td className="p-3 border">+7–8%</td>
                  </tr>
                  <tr>
                    <td className="p-3 border font-semibold">
                      Total Expected CAGR
                    </td>
                    <td className="p-3 border">7–8%</td>
                    <td className="p-3 border font-semibold text-green-600">
                      14–15%
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border">Risk Category</td>
                    <td className="p-3 border">Lowest</td>
                    <td className="p-3 border">Ultra-Low (Managed)</td>
                  </tr>
                  <tr>
                    <td className="p-3 border">Payouts</td>
                    <td className="p-3 border">Maturity / Quarterly</td>
                    <td className="p-3 border">Monthly Profits Available</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Risk Shield */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 mb-12">
            <h2 className="text-2xl text-black font-semibold mb-4 flex items-center gap-2">
              <Lock className="text-blue-600" />
              Non-Negotiable Risk Shield
            </h2>

            <ul className="space-y-3 text-gray-700 list-disc pl-5">
              <li>
                <strong>10% Global Capital Stop:</strong> Algo halts instantly
                if drawdown reaches 10%.
              </li>
              <li>
                <strong>Delta-Neutral Execution:</strong> Profits from time
                decay, not market prediction.
              </li>
            </ul>
          </div>

          {/* Execution Steps */}
          <div className="bg-white rounded-xl shadow p-8">
            <h2 className="text-2xl text-black font-semibold mb-6">
              How We Execute This Successfully
            </h2>

            <ol className="space-y-3 list-decimal pl-6 text-gray-700">
              <li>
                <strong>Bank Setup:</strong> Create pledge-eligible FD with
                ICICI, HDFC, Axis, or partner banks.
              </li>
              <li>
                <strong>Margin Creation:</strong> Digital FD pledging to demat.
              </li>
              <li>
                <strong>Algo Integration:</strong> Nifty option selling system
                linked to your margin.
              </li>
              <li>
                <strong>Monthly Payouts:</strong> Bank interest + withdrawable
                algo profits every month.
              </li>
            </ol>

            <p className="mt-6 text-lg font-semibold text-center text-gray-900">
              The peace of an FD.{" "}
              <span className="text-[#7ED321]">The power of an Algo.</span>
            </p>
          </div>

        </div>
      </section>
    </>
  );
}

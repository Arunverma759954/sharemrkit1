"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function HowToStartTradingInGhaziabad() {
  return (
    <div className="bg-white text-black">
      {/* ================= BANNER ================= */}
      <section
        className="relative h-[40vh] md:h-[50vh] flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/banner/b1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-[#7ED321] mb-4 transition"
          >
            <ArrowLeft size={16} /> Back to Blogs
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            How to Start Trading in <span className="text-[#7ED321]">Ghaziabad</span> <br />
            Beginner-Friendly Trading Guide
          </h1>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 space-y-8 text-gray-700 leading-relaxed text-lg">
          <div className="prose max-w-none">
            <p className="font-medium text-xl text-gray-800">
              If you are wondering how to start trading in Ghaziabad and don&apos;t know where to begin,
              this step-by-step trading guide is for you. Whether you are a student, working professional,
              or business owner, you can learn stock market basics in Ghaziabad and start your trading
              journey in a planned and risk-managed way.
            </p>

            <p className="mt-8">
              Trading looks complicated from the outside, but when you follow a clear process it becomes
              simple and structured. Below is a practical roadmap that explains how complete beginners in
              Ghaziabad can move from zero knowledge to placing their first trades with confidence.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-black mt-10 mb-6">
              Step 1: Learn Stock Market Basics
            </h2>
            <p>
              Before placing any trade, you should understand what shares, indices, brokers, NSE/BSE, and
              order types are. Spend time learning the core concepts of the stock market, types of traders
              (intraday, swing, positional), and how price moves based on demand and supply. A basic{" "}
              <strong>stock market basics Ghaziabad</strong> program or beginner workshop can save you from
              common mistakes.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-black mt-10 mb-6">
              Step 2: Open Demat & Trading Account
            </h2>
            <p>
              To start trading in Ghaziabad, you need a Demat and trading account with a SEBI-registered
              broker. Compare brokerage charges, platform features, and customer support. Choose a broker
              that offers a simple interface, fast order execution, and good charting tools so you can focus
              on learning strategies instead of struggling with the app.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-black mt-10 mb-6">
              Step 3: Learn Technical Analysis & Risk Management
            </h2>
            <p>
              Next, focus on reading charts, support–resistance, candlestick patterns, and indicators. At
              the same time, learn position sizing, stop loss, and risk–reward ratios. A proper{" "}
              <strong>trading guide Ghaziabad</strong> is incomplete without risk management, because even
              a good strategy can fail if risk is not controlled.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-black mt-10 mb-6">
              Step 4: Practice with Small Capital or Paper Trading
            </h2>
            <p>
              Start with paper trading or very small capital. The goal in this phase is not to earn big
              profits but to build discipline, follow rules, and track results in a trading journal.
              Review your trades weekly and identify which setups work best for you.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-black mt-10 mb-6">
              Step 5: Join a Structured Training Program (Optional but Recommended)
            </h2>
            <p>
              If you want faster progress, you can join a structured{" "}
              <strong>share market training in Ghaziabad</strong> that offers live market practice,
              mentorship, and doubt clearing. Learning directly from experienced traders shortens the
              learning curve and helps you avoid emotional and technical mistakes.
            </p>

            <div className="bg-[#f9f9f9] border-l-4 border-[#7ED321] p-6 mt-12 rounded-r-lg">
              <p className="font-bold text-gray-900 mb-2">Start Your Trading Journey Today</p>
              <p>
                Trading can become a powerful skill if you treat it like a profession and follow the right
                process. Learn the basics, manage risk, and practice consistently. If you are in Ghaziabad
                and want guided support, our training programs can help you move from beginner to confident
                trader step by step.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


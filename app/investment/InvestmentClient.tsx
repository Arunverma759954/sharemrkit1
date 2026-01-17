"use client";

import Link from "next/link";
import Image from "next/image";
import {
  TrendingUp,
  ShieldCheck,
  BarChart3,
  Target,
  Wallet,
  LineChart,
} from "lucide-react";

export default function InvestmentClient() {
  return (
    <>
      {/* ================= HERO ================= */}
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
            / Investment
          </p>

          <h1 className="text-4xl md:text-6xl font-bold">
            Smart <span className="text-[#7ED321]">Investment</span> Solutions
          </h1>

          <p className="mt-5 max-w-2xl text-gray-200">
            Build long-term wealth with disciplined investment strategies,
            expert guidance, and risk-managed planning.
          </p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl text-black font-bold mb-6">
              Invest with <span className="text-[#7ED321]">Confidence</span>
            </h2>

            <p className="text-gray-600 mb-4">
              Successful investing is not about tips or shortcuts. It is about
              discipline, strategy, and long-term vision.
            </p>

            <p className="text-gray-600">
              At Share Market Skills Academy, we help investors grow wealth
              through structured investment planning and market understanding.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-10 shadow-lg">
            <TrendingUp className="w-14 h-14 text-[#7ED321] mb-5" />
            <h4 className="text-xl text-black font-semibold mb-3">
              Long-Term Wealth Creation
            </h4>
            <p className="text-gray-600">
              Our investment philosophy focuses on sustainable growth rather
              than short-term speculation.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="md:text-center mb-14">
            <h2 className="text-3xl text-black md:text-4xl font-bold">
              Our <span className="text-[#7ED321]">Investment Services</span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Structured solutions designed to meet your financial goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 text-black gap-8">
            <ServiceCard
              icon={Wallet}
              title="Mutual Fund Investments"
              desc="Goal-based mutual fund planning for long-term financial growth."
            />

            <ServiceCard
              icon={LineChart}
              title="Equity Investments"
              desc="Fundamental & technical based stock selection for investors."
            />

            <ServiceCard
              icon={ShieldCheck}
              title="Risk Management"
              desc="Portfolio diversification and downside protection strategies."
            />

            <ServiceCard
              icon={BarChart3}
              title="Portfolio Review"
              desc="Regular analysis and rebalancing of your investments."
            />

            <ServiceCard
              icon={Target}
              title="Goal-Based Planning"
              desc="Investment planning aligned with your life goals."
            />

            <ServiceCard
              icon={TrendingUp}
              title="Wealth Advisory"
              desc="Expert guidance to grow and preserve your wealth."
            />
          </div>
        </div>
      </section>

      {/* ================= STRATEGIES ================= */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <div className="md:text-center mb-14">
      <h2 className="text-3xl md:text-4xl font-bold text-black">
        Our <span className="text-[#7ED321]">Investment Strategies</span>
      </h2>
      <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
        Intelligent, automated and SEBI-compliant strategies designed for
        long-term wealth creation.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-10">
      {/* Equity Strategy */}
      <div className="bg-gray-50 rounded-2xl shadow hover:shadow-xl transition overflow-hidden">
        <Image
          src="/investment/Strategic.jpg"
          alt="Equity Strategy"
          width={600}
          height={400}
          className="w-full"
        />

        <div className="p-8">
          <h3 className="text-2xl font-semibold mb-4">
            Strategic Equity Growth
          </h3>

          <p className="text-gray-600 mb-6">
            Your capital works twice — once in equities for long-term growth and
            once in Nifty / MCX options for monthly income.
          </p>

          <ul className="text-gray-600 mb-6 space-y-2">
            <li>✔ 100% SEBI Compliant Infrastructure</li>
            <li>✔ Fully Automated Zero-Effort Investing</li>
            <li>✔ Real-Time Transparency</li>
            <li>✔ Professional Portfolio Management</li>
          </ul>

          <Link
            href="/investment/equity-strategies"
            className="inline-block bg-[#7ED321] text-black px-6 py-3 rounded-full font-semibold hover:bg-[#6ac11c]"
          >
            Explore Equity Strategies →
          </Link>
        </div>
      </div>

      {/* Fixed Income Strategy */}
      <div className="bg-gray-50 rounded-2xl shadow hover:shadow-xl transition overflow-hidden">
        <Image
          src="/investment/Fixed.jpg"
          alt="Fixed Income Strategy"
          width={600}
          height={400}
          className="w-full"
        />

        <div className="p-8">
          <h3 className="text-2xl font-semibold mb-4">
            Fixed Income Strategies
          </h3>

          <p className="text-gray-600 mb-6">
            Capital protection using High-Rated Bonds & FDs combined with
            automated option income.
          </p>

          <ul className="text-gray-600 mb-6 space-y-2">
            <li>✔ 100% SEBI Regulated Infrastructure</li>
            <li>✔ Automated Option Trading</li>
            <li>✔ Capital Safety Focus</li>
            <li>✔ Professional Trade Management</li>
          </ul>

          <Link
            href="/investment/fixed-income-strategies"
            className="inline-block bg-[#7ED321] text-black px-6 py-3 rounded-full font-semibold hover:bg-[#6ac11c]"
          >
            Explore Fixed Income →
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* ================= CTA ================= */}
      <section className="py-20 bg-[#0B1C2D] text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Your Investment Journey Today
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Let our experts help you build a secure and profitable investment
            portfolio.
          </p>

          <Link
            href="/contact"
            className="inline-block bg-[#7ED321] text-black px-10 py-4 rounded-full font-semibold hover:bg-[#6ac11c] transition"
          >
            Get Investment Advice
          </Link>
        </div>
      </section>
    </>
  );
}

/* ================= COMPONENT ================= */

function ServiceCard({
  icon: Icon,
  title,
  desc,
}: {
  icon: any;
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
      <Icon className="w-10 h-10 text-[#2DB7F5] mb-4" />
      <h4 className="text-xl font-semibold mb-3">{title}</h4>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}

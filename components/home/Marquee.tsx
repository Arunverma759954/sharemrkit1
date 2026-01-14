"use client";

export default function Marquee() {
  return (
    <div className="w-full overflow-hidden bg-[#F9FAFB] border-y border-gray-200">
      <div className="whitespace-nowrap animate-marquee py-3 text-[#7ED321] text-sm md:text-base font-semibold">
        Trading • Mutual Funds • Demat Account • Commodities • Swing Trading •
        Option Buying • Option Selling • Investments • IPO • Algo Trading •
        Trading • Mutual Funds • Demat Account • Commodities • Swing Trading •
        Option Buying • Option Selling • Investments • IPO • Algo Trading •
      </div>
    </div>
  );
}

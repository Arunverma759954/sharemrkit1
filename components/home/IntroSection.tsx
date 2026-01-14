"use client";

import Link from "next/link";

export default function IntroSection() {
  return (
    <section className="bg-white py-28 flex justify-center">
      <div className="max-w-5xl px-6 text-center">
        
        {/* Number / Stat
        <div className="inline-block border-2 border-blue-800 p-10 text-center rounded-lg mb-8">
          <h2 className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#2DB7F5] to-[#7ED321]">
            35
          </h2>
          <p className="mt-2 text-blue-800 font-semibold text-lg">FIONCA</p>
        </div> */}

        {/* Heading & Description */}
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-snug mb-6">
            Years of Struggle —{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2DB7F5] to-[#7ED321]">
              Better Strategy With Quality Business
            </span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl mb-6">
            Fionca started its journey in 1985 providing financial assistance. Now we offer our services globally with professionalism and experience. Our focus is on quality, trust, and customer satisfaction.
          </p>
          <Link
            href="#"
            className="inline-block text-[#E63946] font-semibold hover:underline text-lg"
          >
            Who We Are &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}

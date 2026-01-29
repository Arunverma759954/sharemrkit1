"use client";

"use client";

export default function CourseSearchBar() {
  return (
    <section className="relative z-20 mt-10 lg:-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* GREEN BG BAR */}
        <div className="bg-[#83ce01] rounded-xl shadow-lg">
          <div className="flex flex-col lg:flex-row items-center gap-4 p-6">

            {/* NAME */}
            <input
              type="text"
              placeholder="Your Name"
              className="w-full lg:w-[260px] px-4 py-3 rounded-md bg-white outline-none"
            />

            {/* EMAIL */}
            <input
              type="email"
              placeholder="Email Address"
              className="w-full lg:w-[260px] px-4 py-3 rounded-md bg-white outline-none"
            />

            {/* PHONE */}
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full lg:w-[260px] px-4 py-3 rounded-md bg-white outline-none"
            />

            {/* COURSE DROPDOWN */}
            <select
              className="w-full lg:w-[310px]  py-3 rounded-md bg-white outline-none text-gray-700"
            >
              <option value="">Select Course</option>
              <option>
                Stock Market Trading Courses
              </option>
              <option>
                Cryptocurrency & Crypto Trading 
              </option>
              <option>
                Investing & Wealth Building 
              </option>
            </select>

            {/* BUTTON */}
            <button
              className="w-full lg:w-auto bg-[#61c9f7] hover:bg-[#4bbce9] text-white font-semibold px-8 py-3 rounded-md transition whitespace-nowrap"
            >
              Talk To Our Expert
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}

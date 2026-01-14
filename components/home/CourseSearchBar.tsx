"use client";

export default function CourseSearchBar() {
  return (
    <section
      className="
        relative z-20
        mt-10 lg:-mt-20
      "
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* GREEN BG BAR */}
        <div className="bg-[#83ce01] rounded-xl shadow-lg">

          <div className="flex flex-col lg:flex-row items-center gap-4 p-6">

            {/* LEFT TEXT */}
            <div className="text-white font-semibold text-lg whitespace-nowrap">
              Find your course
            </div>

            {/* SEARCH */}
            <input
              type="text"
              placeholder="Course keyword"
              className="
                w-full lg:w-[260px]
                px-4 py-3
                rounded-md
                bg-white
                outline-none
              "
            />

            {/* CATEGORY */}
            <select
              className="
                w-full lg:w-[200px]
                px-4 py-3
                rounded-md
                bg-white
                outline-none
                text-gray-700
              "
            >
              <option>All categories</option>
              <option>Stock Market</option>
              <option>Options Trading</option>
              <option>Investment</option>
            </select>

            {/* LEVEL */}
            <select
              className="
                w-full lg:w-[200px]
                px-4 py-3
                rounded-md
                bg-white
                outline-none
                text-gray-700
              "
            >
              <option>Select level</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>

            {/* BUTTON */}
            <button
              className="
                w-full lg:w-auto
                bg-[#61c9f7]
                hover:bg-[#4bbce9]
                text-white
                font-semibold
                px-8 py-3
                rounded-md
                transition
                whitespace-nowrap
              "
            >
              Find Course
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}

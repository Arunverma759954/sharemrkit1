"use client";

export default function WhoCanJoinSection() {
  const list = [
    "Beginners with no prior stock market or crypto knowledge",
    "Students & fresh graduates looking for practical trading skills",
    "Working professionals aiming for financial literacy",
    "Business owners seeking investment strategies",
    "Anyone searching for share market & crypto trading courses",
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl text-black font-bold mb-12 md:text-center">
          Who Can <span className="text-[#7ED321]">Join Our Courses?</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-black">
          {list.map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition flex items-start gap-3"
            >
              <span className="text-[#7ED321] font-bold text-xl mt-1">✔</span>
              <p className="text-gray-700">{item}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-gray-500 text-sm md:text-center">
          <strong>
            stock market course for beginners in Ghaziabad · crypto trading
            course in Delhi NCR · share market classes near me
          </strong>
        </p>
      </div>
    </section>
  );
}

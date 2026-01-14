"use client";

import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Trading Course",
    desc: "Learn stock market trading with expert guidance and hands-on practice to boost your investment skills.",
    img: "/services/s1.jpg",
    link: "#",
  },
  {
    title: "Algo Trading",
    desc: "Automate your trading strategies using algorithms to save time and maximize profit.",
    img: "/services/s2.png",
    link: "#",
  },
  {
    title: "Demat Account",
    desc: "Open and manage your Demat account easily for hassle-free investment in stocks and securities.",
    img: "/services/s3.webp",
    link: "#",
  },
  {
    title: "Mutual Funds",
    desc: "Invest in diversified mutual funds to grow your wealth with professional fund management.",
    img: "/services/s4.webp",
    link: "#",
  },
  {
    title: "Bonds",
    desc: "Secure your investments with government and corporate bonds offering fixed returns.",
    img: "/services/s5.jpeg",
    link: "#",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          Our Services
        </h2>
        <p className="text-gray-600 text-lg md:text-xl mb-12">
          We offer a wide range of financial services to help you invest smartly and grow your wealth with confidence.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md flex flex-col overflow-hidden hover:shadow-xl transition"
            >
              {/* Full-width image */}
              <div className="w-full h-48 relative">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-center flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 flex-grow">{service.desc}</p>
                <Link
                  href={service.link}
                  className="mt-auto inline-block bg-[#7ED321] text-white font-semibold px-6 py-2 rounded-full hover:bg-green-600 transition"
                >
                  Read More &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

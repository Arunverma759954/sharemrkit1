"use client";

import Link from "next/link";
import ExperienceSection from "@/components/home/ExperienceSection";
import { useState } from "react";
import Image from "next/image";
import {
  Award,
  Users,
  TrendingUp,
  BarChart3,
  Target,
  Handshake,
  Lightbulb,
} from "lucide-react";

/* ================= TEAM DATA ================= */
const teamMembers = [
  {
    name: "Savannah Nguyen",
    role: "Founder & CEO",
    image: "/team/tm1.png",
  },
  {
    name: "Rahul Sharma",
    role: "Co-Founder & Mentor",
    image: "/team/tm2.png",
  },
  {
    name: "Amit Verma",
    role: "Technical Analyst",
    image: "/team/tm3.png",
  },
  {
    name: "Neha Singh",
    role: "Investment Advisor",
    image: "/team/tm1.png",
  },
];

export default function AboutClient() {
     const [play, setPlay] = useState(false);
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
            / About Us
          </p>

          <h1 className="text-4xl md:text-6xl font-bold">
            About <span className="text-[#7ED321]">Our Academy</span>
          </h1>

          <p className="mt-5 max-w-2xl text-gray-200">
            Academy fueled by deep passion for stock market education and
            financial growth.
          </p>
        </div>
      </section>
        

    
      {/* ================= STORY ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl text-black md:text-4xl font-bold mb-6">
              Academy Fueled by{" "}
              <span className="text-[#7ED321]">Deep Passion</span>
            </h2>

            <p className="text-gray-600 mb-4">
              The journey of Share Market Skills Academy began with two brothers
              who shared a strong passion for the stock market. Alongside their
              jobs, they started trading and learning through real market
              experience.
            </p>

            <p className="text-gray-600 mb-4">
              As their confidence grew, they noticed many beginners struggling
              with lack of proper guidance and fear of losses.
            </p>

            <p className="text-gray-600">
              Founded in 2020, the academy now focuses on building knowledge,
              discipline, and confidence in traders and investors.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-10 shadow-lg">
            <TrendingUp className="w-14 h-14 text-[#7ED321] mb-5" />
            <h4 className="text-xl text-black font-semibold mb-3">
              Experiences Fueled by Passion & Expertise
            </h4>
            <p className="text-gray-600">
              We combine real trading experience with structured education to
              help students grow confidently in financial markets.
            </p>
          </div>
        </div>
      </section>
   
     

<section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">

          {/* ===== POSTER IMAGE ===== */}
          {!play && (
            <>
              <img
                src="/banner/b2.jpg"
                alt="Video Poster"
                className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[520px] object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 flex items-end bg-black/40">
                <div className="w-full bg-gradient-to-t from-black/80 via-black/30 to-transparent p-8 md:p-12">
                  <h3 className="text-2xl md:text-4xl font-bold text-white mb-3">
                    Learn Trading from Market Experts
                  </h3>

                  <p className="text-gray-200 max-w-xl mb-6">
                    Watch how Share Market Skills Academy transforms beginners into
                    confident traders with practical learning.
                  </p>

                  <button
                    onClick={() => setPlay(true)}
                    className="bg-[#7ED321] hover:bg-[#6ac11c] text-black px-8 py-3 rounded-full font-semibold transition flex items-center gap-2"
                  >
                    ▶ Watch Full Story
                  </button>
                </div>
              </div>
            </>
          )}

          {/* ===== YOUTUBE VIDEO ===== */}
          {play && (
            <iframe
              className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[520px]"
              src="https://www.youtube.com/embed/G2_GGdGgtoA?autoplay=1"
              title="Share Market Skills Academy"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
      </div>
    </section>
  


      {/* ================= WHY DIFFERENT ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="md:text-center mb-14">
            <h2 className="text-3xl text-black md:text-4xl font-bold">
              Why Our{" "}
              <span className="text-[#7ED321]">Academy Is Different</span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              We focus on practical learning, disciplined strategies, and
              long-term success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 text-black gap-8">
            <WhyCard icon={Lightbulb} title="Innovative Learning">
              Simplified concepts with real market examples.
            </WhyCard>

            <WhyCard icon={BarChart3} title="Data-Driven Strategies">
              Decisions based on analysis, not tips or emotions.
            </WhyCard>

            <WhyCard icon={Award} title="Proven Track Record">
              Years of experience with successful students.
            </WhyCard>

            <WhyCard icon={Handshake} title="Mentor Support">
              Continuous guidance even after course completion.
            </WhyCard>

            <WhyCard icon={Users} title="Student-First Approach">
              Personalized attention for every learner.
            </WhyCard>

            <WhyCard icon={Target} title="Future Focused">
              Building disciplined traders and investors.
            </WhyCard>
          </div>
        </div>
      </section>
      
      {/* ================= COUNTERS ================= */}
      <ExperienceSection />

      {/* ================= TEAM ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:text-center">
          <h2 className="text-3xl md:text-4xl text-black font-bold mb-6">
            Meet Our <span className="text-[#7ED321]">Team</span>
          </h2>

          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Our team brings together trading expertise and teaching excellence.
          </p>

          <div className="grid grid-cols-1 text-black md:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 shadow hover:shadow-xl transition"
              >
                <div className="relative w-full h-60 rounded-xl overflow-hidden mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition duration-300 hover:scale-110"
                  />
                </div>

                <h4 className="font-semibold text-lg">{member.name}</h4>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* ================= SMALL COMPONENTS ================= */

function Counter({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <h3 className="text-4xl font-bold text-[#7ED321]">{number}</h3>
      <p className="mt-2 text-gray-300">{label}</p>
    </div>
  );
}

function WhyCard({
  icon: Icon,
  title,
  children,
}: {
  icon: any;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
      <Icon className="w-10 h-10 text-[#2DB7F5] mb-4" />
      <h4 className="text-xl font-semibold mb-3">{title}</h4>
      <p className="text-gray-600">{children}</p>
    </div>
  );
}

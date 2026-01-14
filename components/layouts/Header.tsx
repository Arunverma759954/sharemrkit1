"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Menu,
  X,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* TOP INFO BAR – Desktop only */}
      {!scrolled && (
        <div className="hidden md:block w-full bg-white border-b border-gray-200 text-sm relative z-50">
          <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center text-gray-700">
            
            {/* LEFT INFO */}
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1">
                <Mail size={16} className="text-[#7ED321]" />
                sharemarketskillsacademy@gmail.com
              </span>
              <span className="flex items-center gap-1">
                <Phone size={16} className="text-[#7ED321]" />
                +91 84601 88483
              </span>
             
               {/* <span className="flex items-center gap-1">
                <MapPin size={16} className="text-[#7ED321]" />
                41 Vishnu Enclave, Main Hapur Road, Ghaziabad
              </span> */}
            </div>

            {/* RIGHT SOCIAL */}
            <div className="flex items-center gap-4">
              <Link href="#"><Facebook size={16} /></Link>
              <Link href="#"><Instagram size={16} /></Link>
              <Link href="#"><Linkedin size={16} /></Link>
            </div>
          </div>
        </div>
      )}

      {/* MAIN HEADER */}
      <header
        className={`fixed left-0 w-full z-40 transition-all duration-300
        ${scrolled ? "top-0 bg-white shadow-md" : "top-0 md:top-[40px] bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">

          {/* LOGO */}
          <Image
            src={scrolled ? "/share-markit-logo.png" : "/share-white-logo.png"}
            alt="ShareMarket Skills Academy"
            width={140}
            height={50}
            priority
          />

          {/* DESKTOP NAV */}
          <nav
            className={`hidden md:flex items-center gap-8 font-medium
            ${scrolled ? "text-gray-800" : "text-white"}`}
          >
            <Link href="/" className="text-[#7ED321]">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/courses">Courses</Link>
            <Link href="/blogs">Blogs</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-4">

            {/* CALL BUTTON – Mobile */}
            <a
              href="tel:+01234567890"
              className="md:hidden bg-[#7ED321] text-white p-2 rounded-full"
            >
              <Phone size={18} />
            </a>

            {/* CTA – Desktop */}
            <Link
              href="/get-started"
              className="hidden md:inline-block bg-[#7ED321] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#6ac11c]"
            >
              Get Started
            </Link>

            {/* HAMBURGER – Mobile */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-white"
            >
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <nav className="flex flex-col p-6 gap-4 text-gray-800 font-medium">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/courses">Courses</Link>
              <Link href="/blogs">Blogs</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

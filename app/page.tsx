"use client";

import dynamic from "next/dynamic";
import Banner from "@/components/home/Banner";
import CourseSearchBar from "@/components/home/CourseSearchBar";
import IntroSection from "@/components/home/IntroSection";
import CoursesSection from "@/components/home/CoursesSection";
import AboutFioncaSection from "@/components/home/AboutFioncaSection";
import BenefitsSection from "@/components/home/BenefitsSection";
import ExperienceSection from "@/components/home/ExperienceSection";
import BlogSection from "@/components/home/BlogSection";
import TeamSection from "@/components/home/TeamSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FAQSection from "@/components/home/FAQSection";

// NEW SECTIONS
import WhoCanJoinSection from "@/components/home/WhoCanJoinSection";
import LocationTrainingSection from "@/components/home/LocationTrainingSection";
import HowTrainingWorksSection from "@/components/home/HowTrainingWorksSection";
import CallToActionSection from "@/components/home/CallToActionSection";
import ClientVideosSection from "@/components/home/ClientVideosSection";

const ScrollVideoSection = dynamic(
  () => import("@/components/home/ScrollVideoSection"),
  { ssr: false }
);

export default function HomePage() {
  return (
    <>
      <Banner />
      <CourseSearchBar />
      <IntroSection />
      <CoursesSection />

      

      <AboutFioncaSection />
      
      <WhoCanJoinSection />
      <LocationTrainingSection />
      <BenefitsSection />
      <ExperienceSection />
      <HowTrainingWorksSection />
      <ClientVideosSection />
      <BlogSection />
      <TeamSection />
      <ScrollVideoSection />
      <TestimonialsSection />
      <FAQSection />
      <CallToActionSection />
    </>
  );
}

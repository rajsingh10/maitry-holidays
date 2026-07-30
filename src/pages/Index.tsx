import { lazy, Suspense } from "react";
import AnnouncementBar from "@/components/site/AnnouncementBar";
import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";

// Lazy-load all below-the-fold sections to reduce initial bundle size
const Packages = lazy(() => import("@/components/site/Packages"));
const WhyUs = lazy(() => import("@/components/site/WhyUs"));
const About = lazy(() => import("@/components/site/About"));
const Explore = lazy(() => import("@/components/site/Explore"));
const Testimonials = lazy(() => import("@/components/site/Testimonials"));
const Contact = lazy(() => import("@/components/site/Contact"));
const HomeGallery = lazy(() => import("@/components/site/HomeGallery"));
import Footer from "@/components/site/Footer";
import FloatingActions from "@/components/site/FloatingActions";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<div className="h-[2000px] w-full" />}>
          <div className="min-h-[1100px] bg-background"><Packages /></div>
          <div className="min-h-[500px] bg-[#1c0600]"><WhyUs /></div>
          <div className="min-h-[800px] bg-background"><About /></div>
          <div className="min-h-[800px] bg-background"><Explore /></div>
          <div className="min-h-[600px] bg-background"><HomeGallery /></div>
          <div className="min-h-[700px] bg-brand-cream"><Testimonials /></div>
          <div className="min-h-[600px] bg-brand-cream"><Contact /></div>
        </Suspense>
      </main>
      <Suspense fallback={<div className="min-h-[400px] bg-[#1c0600]" />}>
        <Footer />
      </Suspense>

      <FloatingActions />
    </div>
  );
};

export default Index;

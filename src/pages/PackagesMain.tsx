import { lazy, Suspense, useEffect } from "react";
import AnnouncementBar from "@/components/site/AnnouncementBar";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import FloatingActions from "@/components/site/FloatingActions";
import SEO from "@/components/SEO";
import { Reveal } from "@/lib/motion";

const Packages = lazy(() => import("@/components/site/Packages"));
const Contact = lazy(() => import("@/components/site/Contact"));
const TourPosters = lazy(() => import("@/components/site/TourPosters"));
import heroImg from "@/assets/images/kerala_banner_bg.webp";

import { useSearchParams } from "react-router-dom";

const PackagesMain = () => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get('type');

  useEffect(() => {
    if (window.location.hash) {
      setTimeout(() => {
        const id = window.location.hash.substring(1);
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 500); // Give time for lazy-loaded components to render
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="All Tour Packages | Maitry Holidays"
        description="Explore our wide range of carefully crafted tour packages across Kerala, Char Dham, and Nepal."
      />
      <AnnouncementBar />
      <Navbar />

      <main className="bg-background">
        <section
          className="relative w-full flex flex-col items-center justify-center overflow-hidden py-24 md:py-32 min-h-[400px] md:min-h-[500px] bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${heroImg})` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="container-px relative z-10">
            <Reveal className="mx-auto max-w-2xl text-center">
              <h2 className="text-4xl font-semibold leading-[1.05] md:text-5xl lg:text-[56px] text-white">
                Our <span className="italic-display text-primary">Packages</span>
              </h2>
              <p className="mx-auto mt-5 max-w-md text-[15px] font-light leading-relaxed text-white/80">
                Explore our wide range of carefully crafted tour packages designed to give you the best of every destination.
              </p>
            </Reveal>
          </div>
        </section>

        <Suspense fallback={<div className="h-[500px] w-full flex items-center justify-center"><div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div></div>}>
          {(type === 'special' || !type) && <div className="min-h-[800px] bg-brand-cream pt-10"><TourPosters showAll={true} /></div>}
          {(type === 'regular' || !type) && <Packages showAll={true} />}
          <div className="min-h-[600px] bg-brand-cream"><Contact /></div>
        </Suspense>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
};

export default PackagesMain;

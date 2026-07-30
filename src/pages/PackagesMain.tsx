import { lazy, Suspense, useEffect } from "react";
import AnnouncementBar from "@/components/site/AnnouncementBar";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import FloatingActions from "@/components/site/FloatingActions";
import SEO from "@/components/SEO";
import { Reveal } from "@/lib/motion";

const Packages = lazy(() => import("@/components/site/Packages"));
const Contact = lazy(() => import("@/components/site/Contact"));
import heroImg from "@/assets/images/INDIA.jpg";

const PackagesMain = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="All Tour Packages | Maitry Holidays"
        description="Explore our wide range of carefully crafted tour packages across Kerala, Char Dham, and Nepal."
      />
      <AnnouncementBar />
      <Navbar />

      <main className="min-h-[1100px] bg-background">
        <Suspense fallback={<div className="h-[1000px] w-full flex items-center justify-center"><div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div></div>}>
          <Packages bgImage={heroImg} />
          <div className="min-h-[600px] bg-brand-cream"><Contact /></div>
        </Suspense>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
};

export default PackagesMain;

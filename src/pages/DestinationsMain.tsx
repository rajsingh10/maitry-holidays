import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import Explore from "@/components/site/Explore";
import AnnouncementBar from "@/components/site/AnnouncementBar";
import Hero from "@/components/site/Hero";
import heroImg from "@/assets/images/kerala_banner_bg.webp";
import { useEffect, lazy, Suspense } from "react";
import SEO from "@/components/SEO";
import FloatingActions from "@/components/site/FloatingActions";

const Contact = lazy(() => import("@/components/site/Contact"));

const DestinationsMain = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="All Destinations | Maitry Holidays"
        description="Explore all our beautiful travel destinations including Char Dham, Kashmir, North East, South India, and more."
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
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-4xl font-semibold leading-[1.05] md:text-5xl lg:text-[56px] text-white">
                All <span className="italic-display text-primary">Destinations</span>
              </h2>
              <p className="mx-auto mt-5 max-w-md text-[15px] font-light leading-relaxed text-white/80">
                Explore our wide range of carefully crafted tour destinations across India and beyond.
              </p>
            </div>
          </div>
        </section>

        <Suspense fallback={<div className="h-[500px] w-full flex items-center justify-center"><div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div></div>}>
          <div className="py-10">
            <Explore showAll={true} />
          </div>
          <div className="min-h-[600px] bg-brand-cream"><Contact /></div>
        </Suspense>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
};

export default DestinationsMain;

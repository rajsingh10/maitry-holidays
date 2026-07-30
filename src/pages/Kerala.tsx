import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import PackageCard from "@/components/site/PackageCard";
import { packages } from "@/data/packages";
import { Reveal } from "@/lib/motion";
import AnnouncementBar from "@/components/site/AnnouncementBar";
import Hero from "@/components/site/Hero";
import keralaHero from "@/assets/images/kerala (1).webp";
import { useEffect, lazy, Suspense } from "react";
import SEO from "@/components/SEO";
import FloatingActions from "@/components/site/FloatingActions";

const WhyUs = lazy(() => import("@/components/site/WhyUs"));
const About = lazy(() => import("@/components/site/About"));
const Testimonials = lazy(() => import("@/components/site/Testimonials"));
const Contact = lazy(() => import("@/components/site/Contact"));

const Kerala = () => {
  const keralaPackages = packages.filter(pkg => pkg.category === "kerala");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Kerala Tour Packages | Maitry Holidays"
        description="Experience the tranquil backwaters, lush tea gardens, and pristine beaches of Kerala with our top-rated tour packages."
      />
      <AnnouncementBar />
      <Navbar />
      <Hero
        bgImage={keralaHero}
        title="God's Own Country"
        subtitle="Experience the tranquil backwaters, lush tea gardens, and pristine beaches of Kerala."
        buttonLink="#packages"
        buttonText="View Packages"
      />
      <main id="packages" className="pt-12 pb-20">
        <div className="container-px">
          <Reveal className="mb-12 text-center">
            <h2 className="text-[30px] sm:text-4xl font-semibold leading-[1.05] text-foreground md:text-5xl lg:text-[64px] whitespace-nowrap">
              Kerala <span className="italic-display text-primary">Packages</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg font-light text-muted-foreground">
              Discover the serene beauty of Kerala with our handpicked tour packages.
            </p>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {keralaPackages.map((pkg, idx) => (
              <PackageCard key={pkg.title} pkg={pkg} idx={idx} />
            ))}
          </div>
        </div>
      </main>
      <Suspense fallback={<div className="h-[1500px] bg-background" />}>
        <WhyUs />
        <About />
        <Testimonials />
        <Contact />
      </Suspense>
      <Footer />
      <FloatingActions />
    </div>
  );
};

export default Kerala;

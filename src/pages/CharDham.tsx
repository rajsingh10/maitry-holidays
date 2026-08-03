import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import PackageCard from "@/components/site/PackageCard";
import { packages } from "@/data/packages";
import { Reveal } from "@/lib/motion";
import AnnouncementBar from "@/components/site/AnnouncementBar";
import Hero from "@/components/site/Hero";
import chardhamHero from "@/assets/images/chardham_hero.webp";
import { useEffect, lazy, Suspense } from "react";
import SEO from "@/components/SEO";
import FloatingActions from "@/components/site/FloatingActions";

const WhyUs = lazy(() => import("@/components/site/WhyUs"));
const About = lazy(() => import("@/components/site/About"));
const Testimonials = lazy(() => import("@/components/site/Testimonials"));
const Contact = lazy(() => import("@/components/site/Contact"));

const CharDham = () => {
  const chardhamPackages = packages.filter(pkg => pkg.category === "chardham");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Char Dham Tour Packages | Maitry Holidays"
        description="Embark on a spiritual journey to Char Dham. Explore Yamunotri, Gangotri, Kedarnath & Badrinath with our premium yatra packages."
      />
      <AnnouncementBar />
      <Navbar />
      <Hero
        bgImage={chardhamHero}
        title="The Divine Journey"
        subtitle="Embark on a spiritual journey to Char Dham. Explore Yamunotri, Gangotri, Kedarnath & Badrinath with our premium yatra packages."
        buttonLink="#packages"
        buttonText="View Packages"
      />
      <main id="packages" className="pt-12 pb-20">
        <div className="container-px">
          <Reveal className="mb-12 text-center">
            <h2 className="text-[30px] sm:text-4xl font-semibold leading-[1.05] text-foreground md:text-5xl lg:text-[64px] whitespace-nowrap">
              Char Dham <span className="italic-display text-primary">Yatra</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg font-light text-muted-foreground">
              Experience salvation with our well-curated and guided Char Dham Yatra packages.
            </p>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {chardhamPackages.map((pkg, idx) => (
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

export default CharDham;

import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import PackageCard from "@/components/site/PackageCard";
import { packages } from "@/data/packages";
import { Reveal } from "@/lib/motion";
import AnnouncementBar from "@/components/site/AnnouncementBar";
import Hero from "@/components/site/Hero";
import nepalHero from "@/assets/images/INDIA.jpg"; // Using a placeholder for now as requested by user's packages
import { useEffect, lazy, Suspense } from "react";
import SEO from "@/components/SEO";
import FloatingActions from "@/components/site/FloatingActions";

const WhyUs = lazy(() => import("@/components/site/WhyUs"));
const About = lazy(() => import("@/components/site/About"));
const Testimonials = lazy(() => import("@/components/site/Testimonials"));
const Contact = lazy(() => import("@/components/site/Contact"));

const Nepal = () => {
  const nepalPackages = packages.filter(pkg => pkg.category === "nepal");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Nepal Tour Packages | Maitry Holidays"
        description="Experience the breathtaking beauty of Nepal. Explore Kathmandu, Pokhara, and the Himalayas with our exclusive tour packages."
      />
      <AnnouncementBar />
      <Navbar />
      <Hero
        bgImage={nepalHero}
        title="Discover Nepal"
        subtitle="Experience the breathtaking beauty of Nepal. Explore Kathmandu, Pokhara, and the Himalayas with our exclusive tour packages."
        buttonLink="#packages"
        buttonText="View Packages"
      />
      <main id="packages" className="pt-12 pb-20">
        <div className="container-px">
          <Reveal className="mb-12 text-center">
            <h2 className="text-[30px] sm:text-4xl font-semibold leading-[1.05] text-foreground md:text-5xl lg:text-[64px] whitespace-nowrap">
              Nepal <span className="italic-display text-primary">Packages</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg font-light text-muted-foreground">
              Discover the spiritual and natural wonders of Nepal with our handpicked tour packages.
            </p>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {nepalPackages.map((pkg, idx) => (
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

export default Nepal;

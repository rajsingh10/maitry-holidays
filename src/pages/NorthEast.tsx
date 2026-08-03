import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import PackageCard from "@/components/site/PackageCard";
import { packages } from "@/data/packages";
import { Reveal } from "@/lib/motion";
import AnnouncementBar from "@/components/site/AnnouncementBar";
import Hero from "@/components/site/Hero";
import heroImg from "@/assets/images/INDIA.webp";
import { useEffect, lazy, Suspense } from "react";
import SEO from "@/components/SEO";
import FloatingActions from "@/components/site/FloatingActions";

const WhyUs = lazy(() => import("@/components/site/WhyUs"));
const About = lazy(() => import("@/components/site/About"));
const Testimonials = lazy(() => import("@/components/site/Testimonials"));
const Contact = lazy(() => import("@/components/site/Contact"));

const NorthEast = () => {
  const northEastPackages = packages.filter(pkg => pkg.category === "northeast");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="North East Tour Packages | Maitry Holidays"
        description="Discover the untouched beauty of North East India with our curated tour packages."
      />
      <AnnouncementBar />
      <Navbar />
      <Hero
        bgImage={heroImg}
        title="Discover North East India"
        subtitle="Explore the untouched beauty of North East India with our curated tour packages."
        buttonLink="#packages"
        buttonText="View Packages"
      />
      <main id="packages" className="pt-12 pb-20">
        <div className="container-px">
          <Reveal className="mb-12 text-center">
            <h2 className="text-[30px] sm:text-4xl font-semibold leading-[1.05] text-foreground md:text-5xl lg:text-[64px] whitespace-nowrap">
              North East <span className="italic-display text-primary">Tours</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg font-light text-muted-foreground">
              Experience the majestic hills and rich culture of North East India with our well-curated packages.
            </p>
          </Reveal>

          {northEastPackages.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {northEastPackages.map((pkg, idx) => (
                <PackageCard key={pkg.title} pkg={pkg} idx={idx} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">More packages coming soon!</p>
            </div>
          )}
        </div>
      </main>

      <Suspense fallback={<div className="h-40 flex items-center justify-center"><div className="w-8 h-8 rounded-full border-4 border-primary border-t-transparent animate-spin"></div></div>}>
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

export default NorthEast;

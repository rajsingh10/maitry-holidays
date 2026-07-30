import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import PackageCard from "@/components/site/PackageCard";
import { packages } from "@/data/packages";
import { Reveal } from "@/lib/motion";
import AnnouncementBar from "@/components/site/AnnouncementBar";
import Hero from "@/components/site/Hero";
import himachalHero from "@/assets/images/himachal.jpg";
import FloatingActions from "@/components/site/FloatingActions";
import WhyUs from "@/components/site/WhyUs";
import { useEffect, lazy, Suspense } from "react";
import SEO from "@/components/SEO";

const About = lazy(() => import("@/components/site/About"));
const Testimonials = lazy(() => import("@/components/site/Testimonials"));
const Contact = lazy(() => import("@/components/site/Contact"));

const Himachal = () => {
  const himachalPackages = packages.filter(pkg => pkg.category === "himachal");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Himachal Tour Packages | Shrishti Trip (India Trip Holiday)" 
        description="Experience the majestic Himalayas with our handpicked tours across Manali, Shimla, Dharamshala, and more." 
      />
      <AnnouncementBar />
      <Navbar />
      <Hero 
        bgImage={himachalHero}
        title="Experience Majestic Himachal"
        subtitle="From snowy peaks to lush valleys, discover the magic of the Himalayas with our curated Himachal tours."
        buttonLink="#packages"
        buttonText="View Packages"
      />
      <main id="packages" className="pt-12 pb-20">
        <div className="container-px">
          <Reveal className="mb-12 text-center">
            <h2 className="text-[30px] sm:text-4xl font-semibold leading-[1.05] text-foreground md:text-5xl lg:text-[64px] whitespace-nowrap">
              Himachal <span className="italic-display text-primary">Packages</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg font-light text-muted-foreground">
              Experience the majestic Himalayas with our handpicked tours across Manali, Shimla, Dharamshala, and more.
            </p>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {himachalPackages.map((pkg, idx) => (
              <PackageCard key={pkg.title} pkg={pkg} idx={idx} />
            ))}
          </div>
        </div>
      </main>
      <WhyUs/>
      <Suspense fallback={<div className="h-[1000px] bg-background" />}>
        <About />
        <Testimonials />
        <Contact />
      </Suspense>
      <Footer />
      <FloatingActions />
    </div>
  );
};

export default Himachal;

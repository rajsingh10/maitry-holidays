
import AnnouncementBar from "@/components/site/AnnouncementBar";
import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";

import PromoBanner from "@/components/site/PromoBanner";
import Packages from "@/components/site/Packages";
import TourPosters from "@/components/site/TourPosters";
import WhyUs from "@/components/site/WhyUs";
import About from "@/components/site/About";
import Explore from "@/components/site/Explore";
import Testimonials from "@/components/site/Testimonials";
import Contact from "@/components/site/Contact";
import HomeGallery from "@/components/site/HomeGallery";
import Footer from "@/components/site/Footer";
import FloatingActions from "@/components/site/FloatingActions";

import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Maitry Holidays - Best Travel Agency in India"
        description="Book your next holiday with Maitry Holidays. We offer customized tour packages for Chardham, Kerala, Nepal, Himachal and more with expert guides and instant booking."
      />
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <div className="min-h-[1100px] bg-background"><Packages /></div>
        <PromoBanner />
        <div className="min-h-[800px] bg-brand-cream"><TourPosters /></div>
        <div className="min-h-[500px] bg-[#1c0600]"><WhyUs /></div>
        <div className="min-h-[800px] bg-background"><About /></div>
        <div className="min-h-[800px] bg-background"><Explore /></div>
        <div className="min-h-[600px] bg-background"><HomeGallery /></div>
        <div className="min-h-[700px] bg-brand-cream"><Testimonials /></div>
        <div className="min-h-[600px] bg-brand-cream"><Contact /></div>
      </main>
      <Footer />

      <FloatingActions />
    </div>
  );
};

export default Index;

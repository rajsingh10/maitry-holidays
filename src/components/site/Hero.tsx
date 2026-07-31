import { useState, useEffect, memo, useMemo } from "react";
import { useLocation, Link } from "react-router-dom";
import { Star, ArrowRight } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import heroBg from "@/assets/images/hero_india.png";
import slider1 from "@/assets/images/hero_kerala.png";
import slider2 from "@/assets/images/hero_chardham.png";
import slider3 from "@/assets/images/hero_nepal.png";

import callIcon from "@/assets/images/68d58496260c7e2b997749bc_call-dark.svg";
import { Reveal, RevealGroup, motion } from "@/lib/motion";
import QuoteForm from "./QuoteForm";

const Stars = memo(() => (
  <div className="flex items-center gap-1 text-primary" aria-hidden="true">
    {[0, 1, 2, 3].map((i) => (
      <Star key={i} className="h-3.5 w-3.5 fill-primary stroke-primary" />
    ))}
    <Star className="h-3.5 w-3.5 fill-primary stroke-primary opacity-60" />
  </div>
));

Stars.displayName = "Stars";

interface HeroProps {
  bgImage?: string;
  title?: string;
  subtitle?: string;
  buttonLink?: string;
  buttonText?: string;
}

const Hero = ({
  bgImage = heroBg,
  title = "Maitry Holidays",
  subtitle = "Handpicked travel packages designed to make every single trip unforgettable. Tell us your dreams, we handle the rest.",
  buttonLink = "#explore",
  buttonText = "View Destinations"
}: HeroProps) => {
  const { pathname } = useLocation();
  const isHomePage = pathname === "/";
  const slides = useMemo(() => isHomePage ? [
    { image: bgImage, title: title, subtitle: subtitle },
    { image: slider1, title: "God's Own Country: Kerala", subtitle: "Experience the serene backwaters, lush green tea gardens, and pristine beaches of Kerala." },
    { image: slider2, title: "Divine Char Dham Yatra", subtitle: "Seek spiritual peace and divine blessings at the majestic snow-capped peaks of the Himalayas." },
    { image: slider3, title: "Mystical Nepal Explorer", subtitle: "Discover ancient Buddhist stupas, vibrant culture, and the awe-inspiring beauty of Nepal." }
  ] : [
    { image: bgImage, title: title, subtitle: subtitle }
  ], [isHomePage, bgImage, title, subtitle]);

  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    if (!isHomePage) return;
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [isHomePage, slides.length]);

  const slideVariants = {
    enter: { opacity: 0, scale: 1.05 },
    center: { zIndex: 1, opacity: 1, scale: 1 },
    exit: { zIndex: 0, opacity: 0 },
  };

  const textVariants = {
    enter: { opacity: 0, y: 20 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[100dvh] items-center overflow-hidden py-16 md:min-h-[700px] lg:min-h-[800px] lg:py-24"
      aria-label="Hero"
    >
      <div className="absolute inset-0 -z-20 h-full w-full bg-brand-darker">
        <AnimatePresence initial={false}>
          <motion.img
            key={currentIdx}
            src={slides[currentIdx].image}
            alt={`Hero background ${currentIdx + 1}`}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ opacity: { duration: 1.2, ease: "easeInOut" }, scale: { duration: 8, ease: "linear" } }}
            className="absolute inset-0 h-full w-full object-cover"
            {...({ fetchpriority: currentIdx === 0 ? "high" : "low" } as any)}
            loading={currentIdx === 0 ? "eager" : "lazy"}
            decoding="async"
          />
        </AnimatePresence>
      </div>
      <div className="absolute inset-0 -z-10 bg-black/30 bg-gradient-to-r from-brand-darker/80 via-brand-darker/40 to-transparent lg:from-brand-darker/90 lg:via-brand-darker/40 lg:to-transparent" />

      <div className="container-px relative z-10 w-full pt-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center justify-center gap-2 text-white/90 mb-4"
          >
            <Stars />
            <span className="text-[13px] font-medium tracking-[0.2em] uppercase text-white shadow-sm">Top Rated Travel Agency</span>
            <Stars />
          </motion.div>

          <div className="min-h-[140px] flex flex-col items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIdx}
                variants={textVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="flex flex-col items-center"
              >
                <h1
                  className="max-w-4xl text-balance text-5xl font-bold leading-[1.1] text-white sm:text-6xl md:text-7xl lg:text-[80px]"
                  style={{ textShadow: "0 4px 20px rgba(0,0,0,0.3)" }}
                >
                  {slides[currentIdx].title}
                </h1>
                <p
                  className="mt-6 max-w-2xl text-[17px] md:text-[19px] font-medium leading-relaxed text-white/90"
                  style={{ textShadow: "0 2px 10px rgba(0,0,0,0.2)" }}
                >
                  {slides[currentIdx].subtitle}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex w-full max-w-sm sm:max-w-none flex-row items-center justify-center gap-2 sm:gap-4 px-2 sm:px-0"
          >
            <a href={buttonLink} className="btn-primary group flex flex-1 sm:flex-none items-center justify-center !rounded-sm px-2 py-3 sm:px-8 sm:py-4 text-[13px] sm:text-[16px] font-semibold transition-all hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] text-center leading-tight">
              {buttonText}
              <ArrowRight className="ml-1 sm:ml-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 transition-transform group-hover:translate-x-1" />
            </a>
            <Link to="/contact" className="group flex flex-1 sm:flex-none items-center justify-center rounded-sm border-2 border-white/50 bg-white/10 backdrop-blur-md px-2 py-3 sm:px-8 sm:py-4 text-[13px] sm:text-[16px] font-semibold text-white transition-all hover:bg-white hover:text-brand-darker text-center leading-tight">
              Contact Us
              <ArrowRight className="ml-1 sm:ml-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { useState, useEffect, memo, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { Star, ArrowRight } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import heroBg from "@/assets/images/INDIA.jpg";
import slider1 from "@/assets/images/banner6.jpg";
import slider2 from "@/assets/images/banner5.jpg";
import slider3 from "@/assets/images/kerala (1).webp";

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
  title = "India’s Most Popular Tours",
  subtitle = "Handpicked travel packages designed to make every single trip unforgettable. Tell us your dreams, we handle the rest.",
  buttonLink = "#explore",
  buttonText = "View Destinations"
}: HeroProps) => {
  const { pathname } = useLocation();
  const isHomePage = pathname === "/";
  const images = useMemo(() => isHomePage ? [bgImage, slider1, slider2, slider3] : [bgImage], [isHomePage, bgImage]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left

  useEffect(() => {
    if (!isHomePage) return;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIdx((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [isHomePage, images.length]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 1,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 1,
    }),
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIdx ? 1 : -1);
    setCurrentIdx(index);
  };

  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[600px] items-center overflow-hidden py-16 md:min-h-[700px] lg:min-h-[800px] lg:py-24"
      aria-label="Hero"
    >
      <div className="absolute inset-0 -z-20 h-full w-full bg-brand-darker">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={currentIdx}
            src={images[currentIdx]}
            alt={`${title} background ${currentIdx + 1}`}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 100, damping: 24 },
              opacity: { duration: 0.3 },
            }}
            className="absolute inset-0 h-full w-full object-cover"
            {...({ fetchpriority: currentIdx === 0 ? "high" : "low" } as any)}
            loading={currentIdx === 0 ? "eager" : "lazy"}
            decoding="async"
          />
        </AnimatePresence>
      </div>
      <div className="absolute inset-0 -z-10 bg-black/30 bg-gradient-to-r from-brand-darker/80 via-brand-darker/40 to-transparent lg:from-brand-darker/90 lg:via-brand-darker/40 lg:to-transparent" />

      <div className="container-px w-full">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-10 lg:gap-20">
          {/* Left Column: Text Content */}
          <div className="text-center md:text-left lg:mt-0 mt-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center justify-center md:justify-start gap-2 text-white/90"
            >
              <Stars />
              <span className="text-[13px] font-light tracking-wide uppercase">Top Rated Travel Agency</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 mx-auto md:mx-0 max-w-xl text-balance text-4xl font-semibold leading-[1.1] text-white sm:text-5xl md:text-6xl lg:text-7xl"
            >
              {title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-6 mx-auto md:mx-0 max-w-lg text-[16px] md:text-[17px] font-light leading-relaxed text-white/80"
            >
              {subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-10 flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-10"
            >
              <a href={buttonLink} className="btn-primary group !px-2 !py-2.5 md:!px-7 md:!py-3.5 text-nowrap">
                {buttonText}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="tel:+917041260720" className="flex items-center gap-2 md:gap-3 text-white cursor-pointer group/call">
                <span className="flex h-10 w-10 md:h-11 md:w-11 items-center justify-center rounded-full border border-white p-2 md:p-2.5 transition-colors hover:bg-white/10 shrink-0">
                  <img src={callIcon} alt="" className="h-full w-full invert" width={20} height={20} decoding="async" />
                </span>
                <span className="text-left">
                  <span className="block text-[11px] md:text-[12px]  text-white text-bold">Call us</span>
                  <span className="block text-[13px] md:text-[15px] font-medium text-nowrap">+91-7041260720</span>
                </span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Hero Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto max-w-md md:ml-auto lg:ml-auto"
          >
            <div id="contact" className="overflow-hidden rounded-3xl shadow-2xl">
              <QuoteForm />
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 -z-10 h-32 w-32 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute -left-6 -top-6 -z-10 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl" />
          </motion.div>
        </div>

        {/* Slider Pagination Dots - Only show on Home Page */}
        {isHomePage && (
          <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 gap-3 z-10">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => handleDotClick(i)}
                className={`h-1.5 transition-all duration-500 rounded-full ${currentIdx === i ? "w-8 bg-primary" : "w-2 bg-white/40 hover:bg-white/60"
                  }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;


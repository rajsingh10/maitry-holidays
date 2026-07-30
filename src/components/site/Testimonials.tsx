import { useState, useEffect, useCallback, memo } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/lib/motion";

import u1 from "@/assets/images/68d706662e2c1302fd9b1c46_user-image1.png";
import u2 from "@/assets/images/68d7066501f243c7ab093727_user-image2.png";
import u3 from "@/assets/images/68d706666da03ec43b49d714_user-image3.png";
import u4 from "@/assets/images/68d70665fd3a0be0e780c90e_user-image4.png";

const reviews = [
  {
    quote: "I booked Shimla and Manali holidays including hotel, cab through this travel agency, named shrishti Trip. Overall Experience is totally flawless and convenient.",
    name: "Anand Maurya", location: "Mumbai", avatar: u1
  },
  {
    quote: "I had a family trip to Manali. It was a very good experience with the cab pilot and he was experienced as well as well versed with location.",
    name: "Anjali Sinha", location: "Delhi", avatar: u2
  },
  {
    quote: "We had recently a Jim Corbett trip by Shrishti Trip. We had booking in resort Pumpkin tusk and woods that is awesome place. Foods and services are fantastic.",
    name: "Shraddha Singh", location: "Bengaluru", avatar: u3
  },
  {
    quote: "I went an uttarakhand trip on 15-24 june 2024 with my family they gave me a decent dzire car and a good driver i enjoyed a lot with them i purchased a full package with hotels, dinner, sightseeing.they were good at every aspect.",
    name: "Abhishek Dhar", location: "Ahmedabad", avatar: u4
  },
];



const Stars = memo(() => (
  <div className="flex items-center gap-1 text-primary" aria-hidden>
    {[0, 1, 2, 3].map((i) => <Star key={i} className="h-4 w-4 fill-primary stroke-primary" />)}
    <Star className="h-4 w-4 fill-primary stroke-primary opacity-60" />
  </div>
));

Stars.displayName = "Stars";


const Testimonials = () => {
  const [idx, setIdx] = useState(0);

  const next = useCallback(() => setIdx((i) => (i + 1) % reviews.length), []);
  const prev = useCallback(() => setIdx((i) => (i - 1 + reviews.length) % reviews.length), []);

  // Auto-advance every 5 seconds; resets timer on manual navigation
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const r = reviews[idx];

  return (
    <section id="testimonials" aria-label="What our clients say" className="bg-brand-cream section-pad">
      <div className="container-px">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-2">
            <Stars />
            <span className="text-[13px] font-light text-foreground/70">4.6 Rate by 1,24,000+ Reviews</span>
          </div>
          <h2 className="mt-4 text-4xl font-semibold leading-[1.05] text-foreground md:text-5xl lg:text-[56px]">
            What our <span className="italic-display text-primary">clients say</span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[15px] font-light leading-relaxed text-muted-foreground">
            We take pride in serving our travelers with unforgettable journeys around the world. Here's what they shared about their experiences with Shrishti Trip (India Trip Holiday):
          </p>
        </Reveal>

        <div className="relative mx-auto mt-14 max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.figure
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="flex justify-center"><Stars /></div>
              <blockquote className="mx-auto mt-6 text-balance text-[20px] font-light leading-relaxed text-foreground md:text-[24px] md:leading-[1.45]">
                "{r.quote}"
              </blockquote>
              <figcaption className="mt-8 flex items-center justify-center gap-3">
                <img src={r.avatar} alt={r.name} loading="lazy" decoding="async" width={48} height={48} className="h-12 w-12 rounded-full object-cover" />
                <div className="text-left">
                  <div className="text-[14px] font-medium text-foreground">{r.name}</div>
                  <div className="text-[12px] font-light text-muted-foreground">{r.location}</div>
                </div>
              </figcaption>
            </motion.figure>
          </AnimatePresence>

          <button onClick={prev} aria-label="Previous review"
            className="absolute left-0 top-1/2 -translate-y-1/2 hidden h-12 w-12 items-center justify-center rounded-full bg-white text-foreground shadow-[var(--shadow-soft)] transition-all hover:bg-primary hover:text-primary-foreground md:flex">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button onClick={next} aria-label="Next review"
            className="absolute right-0 top-1/2 -translate-y-1/2 hidden h-12 w-12 items-center justify-center rounded-full bg-white text-foreground shadow-[var(--shadow-soft)] transition-all hover:bg-primary hover:text-primary-foreground md:flex">
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="mt-10 flex items-center justify-center gap-4 md:hidden">
            <button onClick={prev} aria-label="Previous review" className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-foreground shadow-[var(--shadow-soft)]"><ChevronLeft className="h-5 w-5" /></button>
            <button onClick={next} aria-label="Next review" className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-foreground shadow-[var(--shadow-soft)]"><ChevronRight className="h-5 w-5" /></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

import { useState, useRef, useEffect } from "react";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useAnimation, PanInfo } from "framer-motion";
import { Reveal } from "@/lib/motion";

import img1 from "@/assets/images/68e40231c5b5a7f61a03b7d8_popular-destination-image1.webp";
import img2 from "@/assets/images/68e40231694516f09e10aa89_popular-destination-image2.webp";
import img3 from "@/assets/images/68e402315cd843c163fedd88_popular-destination-image3.webp";
import img4 from "@/assets/images/68e40232faeb1fb4e6f91eac_popular-destination-image4.webp";
import img5 from "@/assets/images/68e40233282eb14c09c7ba08_popular-destination-image5.webp";
import img6 from "@/assets/images/68e40233b2f423c944e1da77_popular-destination-image6.webp";
import callIcon from "@/assets/images/68d58496260c7e2b997749bc_call-dark.svg";

const destinations = [
  {
    img: img1, country: "France", region: "Europe",
    description: "From romantic Paris to the sunny beaches of Cannes, France offers culture, art, fashion, and world-famous cuisine. A perfect mix of elegance and adventure.",
    cities: ["Paris", "Lyon", "Cannes", "Strasbourg", "Nice"]
  },
  {
    img: img2, country: "Italy", region: "Europe",
    description: "Italy is a journey through history, art, and flavors. From ancient ruins to scenic coastlines, it's every traveler's dream.",
    cities: ["Rome", "Venice", "Florence", "Milan"]
  },
  {
    img: img3, country: "Japan", region: "Asia",
    description: "A perfect blend of tradition and innovation, Japan takes you from ancient temples to futuristic cities.",
    cities: ["Tokyo", "Kyoto", "Osaka", "Hokkaido"]
  },
  {
    img: img4, country: "Dubai", region: "UAE",
    description: "The city where luxury meets innovation. From futuristic skyscrapers to golden deserts, Dubai is the ultimate modern-day oasis.",
    cities: ["Burj Khalifa", "Palm Jumeirah", "Desert Safari", "Dubai Mall"]
  },
  {
    img: img5, country: "Thailand", region: "Asia",
    description: "From bustling cities to tropical islands, Thailand offers a mix of culture, adventure, and relaxation.",
    cities: ["Bangkok", "Phuket", "Chiang Mai", "Phi Phi Islands"]
  },
  {
    img: img6, country: "Switzerland", region: "Europe",
    description: "Breathtaking landscapes, snowy peaks, and crystal clear lakes. Experience the ultimate alpine getaway.",
    cities: ["Zurich", "Geneva", "Zermatt", "Lucerne"]
  },
];

const PopularDestinations = () => {
  const [idx, setIdx] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const total = destinations.length;
  const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;
  const cardWidth = isMobile ? containerWidth * 0.9 : 940;
  const gap = 24;

  // Calculate the starting offset to center the current card
  const xOffset = (containerWidth - cardWidth) / 2 - idx * (cardWidth + gap);

  const next = () => setIdx((i) => (i + 1) % total);
  const prev = () => setIdx((i) => (i - 1 + total) % total);

  const onDragEnd = (_: any, info: PanInfo) => {
    const threshold = 100;
    if (info.offset.x < -threshold && idx < total - 1) {
      setIdx((i) => i + 1);
    } else if (info.offset.x > threshold && idx > 0) {
      setIdx((i) => i - 1);
    }
  };

  return (
    <section id="destinations" aria-label="Most popular destinations" className="bg-brand-cream overflow-hidden py-20 lg:py-28">
      <div className="container-px">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-[13px] font-light text-foreground/70">Discover the places travelers love the most!</p>
          <h2 className="mt-3 text-4xl font-semibold leading-[1.05] text-foreground md:text-5xl lg:text-[56px]">
            Most popular
            <br />
            <span className="italic-display text-primary">destinations</span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[15px] font-light leading-relaxed text-muted-foreground italic">
            From breathtaking landscapes to vibrant cultures, these destinations are handpicked for you.
          </p>
        </Reveal>
      </div>

      <div ref={containerRef} className="relative mt-14 w-full">
        <motion.div
          animate={{ x: xOffset }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          drag="x"
          dragConstraints={{ left: xOffset, right: xOffset }}
          onDragEnd={onDragEnd}
          className="flex gap-6 px-4"
        >
          {destinations.map((d, i) => (
            <div
              key={i}
              style={{ width: cardWidth, flexShrink: 0 }}
              className={`group overflow-hidden  bg-white shadow-[var(--shadow-soft)] transition-all duration-500 ${i === idx ? "opacity-100 scale-100" : "opacity-40 scale-[0.96]"
                }`}
            >
              <div className="flex flex-col lg:grid lg:h-[420px] lg:grid-cols-2">
                {/* Image side */}
                <div className="relative aspect-[16/10] overflow-hidden sm:aspect-[4/3] lg:aspect-auto">
                  <img src={d.img} alt={d.country} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>

                {/* Content side */}
                <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-12">
                  <div>
                    <h3 className="text-3xl font-semibold text-foreground lg:text-4xl">
                      {d.country}, <span className="italic-display text-primary uppercase text-[0.8em] tracking-wider">{d.region}</span>
                    </h3>
                    <p className="mt-4 text-[14px] font-light leading-relaxed text-muted-foreground lg:mt-5">{d.description}</p>

                    <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 sm:mt-8">
                      {d.cities.map((c) => (
                        <li key={c} className="flex items-center gap-2.5 text-[14px] text-foreground/90">
                          <Check className="h-4 w-4 text-primary" strokeWidth={3} />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-5 sm:mt-10 lg:flex-nowrap lg:gap-8">
                    <a href="#contact" className="btn-primary !px-8 !py-3.5 whitespace-nowrap">Book your tour today</a>

                    <div className="flex items-center gap-3">
                      <a href="tel:+13036667575" className="flex h-11 w-11 items-center justify-center rounded-full border border-foreground/15 transition-all hover:bg-foreground hover:text-white">
                        <img src={callIcon} alt="" className="h-5 w-5" />
                      </a>
                      <div className="text-left">
                        <span className="block text-[11px] font-light text-muted-foreground uppercase tracking-tight">Contact anytime</span>
                        <span className="block text-[14px] font-semibold text-foreground">(303) 666-7575</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Carousel controls */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-foreground shadow-md transition-all hover:bg-primary hover:text-white"
            aria-label="Previous destination"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div className="flex gap-2">
            {destinations.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${i === idx ? "w-8 bg-primary" : "w-2.5 bg-foreground/20"
                  }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-all hover:scale-110"
            aria-label="Next destination"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;

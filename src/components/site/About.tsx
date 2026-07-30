import { Star, Check } from "lucide-react";
import aboutImg1 from "@/assets/images/photo-1735050080783-7b3a661fb7cf.avif";
import aboutImg2 from "@/assets/images/premium_photo-1697730303782-6679b6bec202.avif";
import aboutImg3 from "@/assets/images/68d58498ee57cd6f993e94c3_about-image3.webp";
import { Reveal, RevealGroup, motion } from "@/lib/motion";

const stats = [
  { value: "12k+", label: ["Happy", "travelers"] },
  { value: "10k+", label: ["Train", "booked"] },
  { value: "5k+", label: ["Tours", "organized"] },
  { value: "8k+", label: ["Hotel", "stays"] },
];

import { memo } from "react";


const Stars = memo(() => (
  <div className="flex items-center gap-1 text-primary" aria-hidden>
    {[0, 1, 2, 3].map((i) => <Star key={i} className="h-4 w-4 fill-primary stroke-primary" />)}
    <Star className="h-4 w-4 fill-primary stroke-primary opacity-60" />
  </div>
));
Stars.displayName = "Stars";

const StatItem = memo(({ value, label }: { value: string; label: string[] }) => (
  <div className="flex items-center justify-center gap-3 text-center lg:justify-start lg:text-left">
    <div className="text-primary">
      <span className="block text-4xl font-semibold leading-none md:text-6xl">{value}</span>
    </div>
    <div className="text-[13px] font-light leading-tight text-foreground md:text-[14px]">
      {label.map((w) => <span key={w} className="block">{w}</span>)}
    </div>
  </div>
));
StatItem.displayName = "StatItem";

const About = () => (
  <section aria-label="Discover the world with us" className="bg-background pt-20 md:pt-28" id="about">
    <div className="container-px">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left: copy */}
        <Reveal className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
          <div className="flex items-center justify-center gap-2 text-foreground/80 lg:justify-start">
            <Stars />
            <span className="text-[13px] font-light whitespace-nowrap">4.6 Rate by 1,24,000+ Reviews</span>
          </div>

          <h2 className="mt-5 text-4xl font-semibold leading-[1.05] text-foreground md:text-5xl lg:text-[56px]">
            Discover the
            <br />
            <span className="italic-display text-primary">world with us.</span>
          </h2>
          <p className="mt-6 text-[15px] font-light leading-relaxed text-muted-foreground md:mx-auto lg:mx-0">
            <span className="font-medium text-primary">Shrishti Trip (India Trip Holiday)</span> is a professionally managed travel agency in <span className="font-medium text-primary">North INDIA </span> ZONE focusing on curated destinations. We specialize in everything from <span className="italic-display text-primary/90">Friends Tour Packages</span> to <span className="italic-display text-primary/90">Family Holidays</span> and <span className="italic-display text-primary/90">Honeymoon Trips</span>. We provide True Memories of experience through tailor-made journeys and corporate trips. Our unique tour packages are <span className="font-medium text-primary">perfectly suitable, smooth, and reasonable</span> for every holiday seeker.
          </p>

          <ul className="mt-8 space-y-4 text-left md:mx-auto lg:ml-0 lg:mr-auto">
            {[
              "24x7 Online Booking Services – Hotel reservations, airline tickets, taxi/transportation, and car rental services available anytime.",
              "Advanced Technology Support – Fast, reliable, and convenient booking experience powered by superior technology.",
              "Pan India & International Travel Solutions – Wide network providing travel solutions for travelers across India and abroad.",
            ].map((t) => (
              <li key={t} className="flex items-center gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <span className="text-[15px] text-foreground">{t}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Right: image collage */}
        <RevealGroup className="grid grid-cols-2 gap-4">
          <motion.div
            variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
            className="overflow-hidden rounded-3xl shadow-[var(--shadow-card)]"
          >
            <img
              src={aboutImg1}
              alt="Destination scenery"
              width={600}
              height={800}
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />

          </motion.div>
          <div className="flex flex-col gap-4">
            <motion.div
              variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.1 } } }}
              className="h-[45%] overflow-hidden rounded-3xl shadow-[var(--shadow-card)]"
            >
              <img
                src={aboutImg2}
                alt="Travel activity"
                width={400}
                height={300}
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />

            </motion.div>
            <motion.div
              variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.2 } } }}
              className="h-[55%] overflow-hidden rounded-3xl shadow-[var(--shadow-card)]"
            >
              <img
                src={aboutImg3}
                alt="Cultural experience"
                width={400}
                height={400}
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />

            </motion.div>
          </div>
        </RevealGroup>
      </div>

      {/* Stats row */}
      <RevealGroup className="mt-20 mb-8 grid grid-cols-2 gap-x-4 gap-y-10 border-t border-border pt-12 lg:grid-cols-4 lg:gap-y-0">
        {stats.map((s) => (
          <motion.div
            key={s.value}
            variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          >
            <StatItem value={s.value} label={s.label} />
          </motion.div>
        ))}
      </RevealGroup>
    </div>
  </section>
);

export default About;

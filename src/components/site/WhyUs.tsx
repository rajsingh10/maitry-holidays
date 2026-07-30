import { Plane, Car, MapPin, BadgeDollarSign, Phone } from "lucide-react";
import { Reveal, RevealGroup, motion } from "@/lib/motion";
import bgImg from "@/assets/images/68d58496371b78b1b690e3bd_why-choose-us-bg.webp";

const features = [
  {
    icon: Car,
    title: "Best Accommodation",
    desc: "Enjoy your stay with our handpicked accommodations that offer comfort, cleanliness, and a homely experience — all within your budget.",
  },
  {
    icon: Phone,
    title: "Support 24/7",
    desc: "We’re always here for you — before, during, and after your trip. Our dedicated support team is just a call away, 24x7.",
  },
  {
    icon: MapPin,
    title: "Best Travel Guide",
    desc: "Our knowledgeable and friendly tour guides will make your journey more informative, engaging, and hassle-free.",
  },
  {
    icon: BadgeDollarSign,
    title: "Competitive Price",
    desc: "Competitive Price Get the best value for your money with our budget-friendly packages — no hidden costs, just honest pricing!.",
  },
];

const WhyUs = () => (
  <section
    aria-label="Why choose Maitry Holidays"
    className="relative isolate overflow-hidden  text-white section-pad"
  >
    <img
      src={bgImg}
      alt=""
      aria-hidden="true"
      loading="lazy"
      decoding="async"
      className="absolute inset-0 -z-10 h-full w-full object-cover "
    />
    <div className="absolute inset-0 -z-10 " />

    <div className="container-px">
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="text-primary text-lg font-bold mb-5 tracking-widest uppercase">WHY CHOOSE US</p>
        <h2 className="text-4xl font-semibold leading-[1.05] md:text-5xl lg:text-[56px]">
          Why we're your
          <br />
          <span className="italic-display text-primary">perfect travel partner</span>
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-[18px] font-bold text-white/70">
          we believe travel is more than just visiting new places —it's about creating unforgettable experiences.
        </p>
      </Reveal>

      <RevealGroup className="mx-auto mt-16 grid max-w-5xl gap-x-16 gap-y-14 sm:grid-cols-2">
        {features.map(({ icon: Icon, title, desc }) => (
          <motion.div
            key={title}
            variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            className="text-left"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-primary shadow-[var(--shadow-orange)] transition-transform duration-300 hover:scale-110">
              <Icon className="h-7 w-7" strokeWidth={1.6} />
            </div>
            <h3 className="mt-8 text-[28px] font-semibold leading-tight text-white">{title}</h3>
            <p className="mt-4 max-w-md text-[18px] leading-relaxed text-white/80">
              {desc}
            </p>
          </motion.div>
        ))}
      </RevealGroup>
    </div>
  </section>
);

export default WhyUs;

import { Star, Shield, Compass, Globe2 } from "lucide-react";
import aboutImg1 from "@/assets/images/photo-1735050080783-7b3a661fb7cf.avif";
import aboutImg2 from "@/assets/images/premium_photo-1697730303782-6679b6bec202.avif";
import aboutImg3 from "@/assets/images/68d58498ee57cd6f993e94c3_about-image3.webp";
import { Reveal, RevealGroup, motion } from "@/lib/motion";

const stats = [
  { value: "12k+", label: "Happy travelers" },
  { value: "10k+", label: "Train booked" },
  { value: "5k+", label: "Tours organized" },
  { value: "8k+", label: "Hotel stays" },
];

const About = () => (
  <section aria-label="Discover the world with us" className="bg-background pt-20 md:pt-28 overflow-hidden" id="about">
    <div className="container-px">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">

        {/* Left: Premium Image Collage */}
        <div className="relative h-[500px] md:h-[600px] w-full mt-10 lg:mt-0">
          {/* Main Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="absolute top-0 right-[5%] w-[75%] h-[80%] rounded-[2.5rem] overflow-hidden shadow-2xl z-10"
          >
            <img src={aboutImg1} alt="Travel Destination" className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" loading="lazy" />
          </motion.div>

          {/* Overlapping Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="absolute bottom-0 left-0 w-[55%] h-[60%] rounded-[2.5rem] border-[8px] border-background overflow-hidden shadow-2xl z-20"
          >
            <img src={aboutImg3} alt="Cultural Experience" className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" loading="lazy" />
          </motion.div>

          {/* Small Circular Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="absolute top-[10%] left-[5%] w-32 h-32 md:w-40 md:h-40 rounded-full border-[6px] border-background overflow-hidden shadow-xl z-30"
          >
            <img src={aboutImg2} alt="Travel Activity" className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110" loading="lazy" />
          </motion.div>

          {/* Floating Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="absolute bottom-[15%] -right-4 md:right-0 bg-background/90 backdrop-blur-md p-4 md:p-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] z-30 border border-border flex items-center gap-4"
          >
            <div className="bg-primary/10 text-primary p-3 rounded-full">
              <Star className="w-6 h-6 fill-primary" />
            </div>
            <div>
              <p className="text-xl md:text-2xl font-bold text-foreground leading-none mb-1">4.6/5</p>
              <p className="text-xs md:text-sm font-medium text-muted-foreground whitespace-nowrap">Rated by 1.2M+ Travelers</p>
            </div>
          </motion.div>
        </div>

        {/* Right: Modern Copy */}
        <Reveal className="flex flex-col justify-center text-left mt-8 lg:mt-0">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary w-fit mb-6">
            <Compass className="w-4 h-4" />
            <span className="text-sm font-semibold tracking-wide uppercase">About Maitry Holidays</span>
          </div>

          <h2 className="text-4xl font-semibold leading-[1.05] text-foreground md:text-5xl lg:text-[56px] mb-6">
            Discover the
            <br />
            <span className="italic-display text-primary">world with us.</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            <span className="font-semibold text-foreground">Maitry Holidays</span> is a professionally managed travel agency in North India focusing on curated destinations. From vibrant <span className="text-foreground">Friends Tour Packages</span> to relaxing <span className="text-foreground">Family Holidays</span> and romantic <span className="text-foreground">Honeymoon Trips</span>, we provide tailor-made journeys for every holiday seeker.
          </p>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 text-primary">
                <Globe2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-1">Pan India & International</h4>
                <p className="text-muted-foreground leading-relaxed">Wide network providing comprehensive travel solutions for travelers across India and abroad.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 text-primary">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-1">24x7 Support & Bookings</h4>
                <p className="text-muted-foreground leading-relaxed">Hotel reservations, airline tickets, and car rental services available anytime with advanced tech support.</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Stats row inside a nice glass/colored container */}
      <div className="mt-20 mb-8 bg-primary/5 rounded-[2.5rem] p-8 md:p-12 border border-primary/10">
        <RevealGroup className="grid grid-cols-2 lg:grid-cols-4 gap-8 gap-y-12 lg:gap-y-8 lg:divide-x lg:divide-primary/20">
          {stats.map((s, idx) => (
            <motion.div
              key={s.value}
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, delay: idx * 0.1 } } }}
              className="text-center flex flex-col items-center justify-center"
            >
              <div className="group">
                <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                  {s.value}
                </h3>
                <p className="text-foreground font-semibold uppercase tracking-wider text-sm md:text-base">
                  {s.label}
                </p>
              </div>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </div>
  </section>
);

export default About;

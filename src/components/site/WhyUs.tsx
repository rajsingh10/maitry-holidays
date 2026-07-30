import { Plane, Car, MapPin, BadgeDollarSign, Phone } from "lucide-react";
import { Reveal, RevealGroup, motion } from "@/lib/motion";
import bgImg from "@/assets/images/68d59f47bfb9ce8546a01b76_destination-image5.webp";

const features = [
  {
    icon: Car,
    title: "Best Accommodation",
    desc: "Enjoy your stay with our handpicked accommodations that offer comfort, cleanliness, and a homely experience.",
  },
  {
    icon: Phone,
    title: "Support 24/7",
    desc: "We’re always here for you — before, during, and after your trip. Our dedicated support team is just a call away.",
  },
  {
    icon: MapPin,
    title: "Best Travel Guide",
    desc: "Our knowledgeable and friendly tour guides will make your journey more informative, engaging, and hassle-free.",
  },
  {
    icon: BadgeDollarSign,
    title: "Competitive Price",
    desc: "Get the best value for your money with our budget-friendly packages — no hidden costs, just honest pricing!",
  },
];

const WhyUs = () => (
  <section
    aria-label="Why choose Maitry Holidays"
    className="relative isolate overflow-hidden text-white section-pad bg-fixed bg-center bg-cover"
    style={{ backgroundImage: `url(${bgImg})` }}
  >
    {/* Dark overlay to ensure text readability */}
    <div className="absolute inset-0 -z-10 bg-black/75" />

    {/* Ambient background decoration */}
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
       <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px]" />
       <div className="absolute bottom-[0%] right-[0%] w-[40%] h-[50%] rounded-full bg-primary/10 blur-[100px]" />
    </div>

    <div className="container-px flex flex-col lg:flex-row gap-16 lg:items-center">
      <Reveal className="lg:w-1/2">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
          <Plane className="w-4 h-4 text-primary" />
          <p className="text-white text-sm font-bold tracking-widest uppercase">Why Choose Us</p>
        </div>
        <h2 className="text-4xl font-semibold leading-[1.1] md:text-5xl lg:text-[60px] mb-6">
          Experience the world
          <br />
          with <span className="italic-display text-primary">confidence</span>
        </h2>
        <p className="text-lg text-white/80 leading-relaxed max-w-xl">
          We believe travel is more than just visiting new places — it's about creating unforgettable experiences. From handpicked accommodations to 24/7 support, we're dedicated to making your journey seamless and extraordinary.
        </p>
        <div className="mt-12 flex items-center gap-8">
           <div className="flex flex-col">
             <span className="text-4xl md:text-5xl font-bold text-primary">10+</span>
             <span className="text-white/70 text-xs sm:text-sm mt-2 uppercase tracking-wider font-semibold">Years Exp.</span>
           </div>
           <div className="w-px h-16 bg-white/20"></div>
           <div className="flex flex-col">
             <span className="text-4xl md:text-5xl font-bold text-primary">5k+</span>
             <span className="text-white/70 text-xs sm:text-sm mt-2 uppercase tracking-wider font-semibold">Happy Travelers</span>
           </div>
        </div>
      </Reveal>

      <RevealGroup className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
        {/* Decorative background glow behind cards */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary/30 blur-[100px] rounded-full -z-10 pointer-events-none" />
        
        {features.map(({ icon: Icon, title, desc }, index) => (
          <motion.div
            key={title}
            variants={{ hidden: { opacity: 0, scale: 0.9, y: 20 }, show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } } }}
            className={`group relative overflow-hidden rounded-sm bg-white/10 backdrop-blur-md border border-white/10 p-8 hover:bg-white/20 hover:border-white/30 transition-all duration-300 ${index % 2 === 1 ? 'sm:mt-12 sm:-mb-12' : ''}`}
          >
            {/* Hover gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-sm bg-white text-primary shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
              <Icon className="h-7 w-7" strokeWidth={1.8} />
            </div>
            <h3 className="relative z-10 text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{title}</h3>
            <p className="relative z-10 text-white/70 text-sm leading-relaxed group-hover:text-white transition-colors">
              {desc}
            </p>
          </motion.div>
        ))}
      </RevealGroup>
    </div>
  </section>
);

export default WhyUs;

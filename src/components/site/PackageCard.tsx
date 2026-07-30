import { Check, ArrowRight, Hotel, Utensils, Car, Camera, User, Phone } from "lucide-react";
import { motion } from "framer-motion";

interface PackageProps {
  pkg: {
    img: string;
    title: string;
    duration: string;
    price: string;
    bullets: string[];
    includes?: {
      stay?: boolean;
      meals?: boolean;
      transport?: boolean;
      sightseeing?: boolean;
    };
  };
  idx: number;
}

const PackageCard = ({ pkg, idx }: PackageProps) => {
  return (
    <motion.article
      key={pkg.title}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      className="group flex flex-col h-full overflow-hidden rounded-[32px] border border-border bg-white shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
    >
      {/* Image Container with Badges */}
      <div className="relative aspect-[16/11] overflow-hidden">
        <img 
          src={pkg.img} 
          alt={`${pkg.title} package`} 
          loading="lazy" 
          width={600} 
          height={412} 
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" 
        />
        
        {/* Bottom Gradient for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

        {/* Floating Duration Badge */}
        <div className="absolute bottom-4 left-4 z-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md px-4 py-1.5 border border-white/30 shadow-lg">
          <span className="text-[12px] font-semibold tracking-wide text-white drop-shadow-md">
            {pkg.duration}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6 md:p-7">
        <h3 className="text-[22px] sm:text-[24px] font-bold leading-tight text-foreground transition-colors group-hover:text-primary">
          {pkg.title}
        </h3>

        {/* Inclusions Row */}
        <div className="mt-4 flex items-center justify-center gap-3 sm:gap-5 border-y border-border/50 py-3">
          <div className="flex flex-col items-center gap-1.5 opacity-100 transition-opacity">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
              <Hotel className="h-4 w-4" />
            </div>
            <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Stay</span>
          </div>
          <div className="flex flex-col items-center gap-1.5 opacity-100 transition-opacity">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
              <Utensils className="h-4 w-4" />
            </div>
            <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Meals</span>
          </div>
          <div className="flex flex-col items-center gap-1.5 opacity-100 transition-opacity">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
              <Car className="h-4 w-4" />
            </div>
            <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Transit</span>
          </div>
          <div className="flex flex-col items-center gap-1.5 opacity-100 transition-opacity">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
              <User className="h-4 w-4" />
            </div>
            <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Guide</span>
          </div>
          <div className="flex flex-col items-center gap-1.5 opacity-100 transition-opacity">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
              <Camera className="h-4 w-4" />
            </div>
            <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Sightseeing</span>
          </div>
        </div>

        {/* Highlight Bullets */}
        <ul className="mt-6 space-y-3">
          {pkg.bullets.map((b) => (
            <li key={b} className="flex items-start gap-3 text-[14px] leading-relaxed text-muted-foreground font-medium">
              <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                <Check className="h-3 w-3" strokeWidth={3.5} />
              </span>
              <span className="line-clamp-2">{b}</span>
            </li>
          ))}
        </ul>

        {/* Divider */}
        <div className="my-6 h-px w-full bg-border" />

        {/* Pricing and Actions (Bottom) */}
        <div className="mt-auto flex flex-col gap-5">
          <div className="flex items-end justify-between">
            <div className="flex flex-col">
              <span className="text-[12px] font-medium uppercase tracking-widest text-muted-foreground mb-0.5">Starting at</span>
              <span className="text-[28px] sm:text-[32px] font-bold text-foreground leading-none">{pkg.price}</span>
            </div>
            <span className="text-[12px] font-medium text-muted-foreground mb-1">per person</span>
          </div>

          <div className="flex items-center gap-3">
            <a href="#contact" className="btn-primary group flex-1 rounded-2xl py-3.5 text-[15px] font-semibold text-center shadow-[var(--shadow-orange)] transition-transform hover:-translate-y-0.5">
              Get Free Quote
              <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="tel:+917041260720" className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-2xl bg-brand-cream/80 text-primary transition-colors hover:bg-primary hover:text-white border border-border" aria-label="Call Us">
              <Phone className="h-5 w-5" strokeWidth={2.5} />
            </a>
          </div>
        </div>

      </div>
    </motion.article>
  );
};

export default PackageCard;

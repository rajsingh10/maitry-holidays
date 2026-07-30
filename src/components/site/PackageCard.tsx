import { Check, ArrowRight, Hotel, Utensils, Car, Camera, User } from "lucide-react";
import { motion } from "framer-motion";
import callIcon from "@/assets/images/68d58496260c7e2b997749bc_call-dark.svg";

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
      className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-white shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-card)] h-full"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img src={pkg.img} alt={`${pkg.title} package`} loading="lazy" width={600} height={375} decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-6 md:p-7">
        <p className="text-[12px] font-light text-muted-foreground">{pkg.duration}</p>
        <h3 className="mt-1 text-[22px] font-semibold leading-tight text-foreground">{pkg.title}</h3>

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

        <ul className="mt-5 space-y-3">
          {pkg.bullets.map((b) => (
            <li key={b} className="flex items-start gap-2.5 text-[13.5px] text-foreground/80">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
              <span className="line-clamp-2">{b}</span>
            </li>
          ))}
        </ul>
        <div className="mt-auto flex items-center gap-3 border-t border-border pt-5">

          <div className="flex flex-col leading-tight">
            <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">Starting at</span>
            <span className="text-[11px] font-light text-muted-foreground">per person</span>
          </div>
          <span className="text-3xl font-semibold text-foreground">{pkg.price}</span>
        </div>
        <div className="mt-5 flex items-center justify-between sm:justify-start gap-2 sm:gap-6">
          <a href="#contact" className="btn-primary group !px-1.5 !py-2 text-[12.5px] sm:text-[14px] sm:flex-none flex-1 text-center">
            Get an enquiry
            <ArrowRight className="ml-1 h-3 w-3 sm:h-3.5 sm:w-3.5 transition-transform group-hover:translate-x-1" />
          </a>
          <a href="tel:+917042426335" className="flex items-center gap-2 text-[12px] text-foreground cursor-pointer group/contact shrink-0">
            <span className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <img src={callIcon} alt="" className="h-3.5 w-3.5 sm:h-4 sm:w-4" width={16} height={16} decoding="async" />
            </span>
            <span>
              <span className="block text-[10px] sm:text-[11px] font-light text-muted-foreground">Contact anytime</span>
              <span className="block text-[12px] sm:text-[13px] font-medium text-nowrap">+91-7042426335</span>
            </span>
          </a>
        </div>
      </div>
    </motion.article>
  );
};

export default PackageCard;

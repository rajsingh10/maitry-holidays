import { Check, ArrowRight, Hotel, Utensils, Car, Camera, User, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

interface PackageProps {
  pkg: {
    img: string;
    images?: string[];
    title: string;
    duration: string;
    price: string;
    bullets: string[];
    inclusions?: string[];
    link?: string;
  };
  idx: number;
}

const inclusionConfig: Record<string, { label: string; icon: any; className: string }> = {
  stay: {
    label: "Stay",
    icon: Hotel,
    className: "bg-primary/10 text-primary border-primary/20"
  },
  meals: {
    label: "Meals",
    icon: Utensils,
    className: "bg-accent/10 text-accent border-accent/20"
  },
  transit: {
    label: "Transit",
    icon: Car,
    className: "bg-primary/10 text-primary border-primary/20"
  },
  guide: {
    label: "Guide",
    icon: User,
    className: "bg-accent/10 text-accent border-accent/20"
  },
  sightseeing: {
    label: "Sightseeing",
    icon: Camera,
    className: "bg-primary/10 text-primary border-primary/20"
  }
};

const PackageCard = ({ pkg, idx }: PackageProps) => {
  const navigate = useNavigate();

  const handleCardClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest("a") || target.closest("button")) {
      return;
    }
    if (pkg.link) {
      navigate(pkg.link);
    }
  };

  return (
    <motion.article
      key={pkg.title}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      onClick={handleCardClick}
      className={`group flex flex-col h-full bg-white rounded-sm border border-border/60 shadow-soft hover:shadow-xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden ${pkg.link ? 'cursor-pointer' : ''}`}
    >
      {/* Decorative Top Accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent z-20"></div>

      {/* Slanted Image Container */}
      <div
        className="relative aspect-[4/3] overflow-hidden group/slider bg-brand-darker"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 88%, 0 100%)" }}
      >
        <img
          src={pkg.img}
          alt={`${pkg.title} package`}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80 pointer-events-none" />

        {/* Floating Duration Badge on Image */}
        <div className="absolute top-4 right-4 z-10 flex items-center justify-center rounded-sm bg-black/40 backdrop-blur-md px-3 py-1.5 border border-white/20">
          <span className="text-[11px] font-bold tracking-widest text-white uppercase shadow-sm">
            {pkg.duration}
          </span>
        </div>

        {/* Title overlayed on image */}
        <div className="absolute bottom-6 left-5 right-5 z-10">
          <h3 className="text-2xl sm:text-[26px] font-bold leading-tight text-white drop-shadow-md">
            {pkg.title}
          </h3>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6 pt-2">
        {/* Modern Inclusions Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {(pkg.inclusions || ["stay", "meals", "transit", "guide", "sightseeing"]).map((inclusion) => {
            const config = inclusionConfig[inclusion.toLowerCase()];
            if (!config) return null;
            const Icon = config.icon;
            return (
              <div
                key={inclusion}
                className={`flex items-center gap-1.5 rounded-sm px-2.5 py-1 border text-[10px] font-bold uppercase tracking-wider ${config.className}`}
              >
                <Icon className="h-3 w-3" />
                <span>{config.label}</span>
              </div>
            );
          })}
        </div>

        {/* Highlight Bullets */}
        <ul className="space-y-3 mb-6">
          {pkg.bullets.map((b) => (
            <li key={b} className="flex items-start gap-3 text-[14px] leading-relaxed text-muted-foreground font-medium">
              <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-sm bg-primary text-white shadow-sm">
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
              <span className="line-clamp-2">{b}</span>
            </li>
          ))}
        </ul>

        {/* Divider */}
        <div className="mt-auto pt-5 border-t border-dashed border-border/80 flex flex-col gap-4">
          <div className="flex items-end justify-between">
            <div className="flex flex-col">
              <span className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Starting Price</span>
              <div className="flex items-baseline gap-1.5">
                <span className="font-display text-3xl font-extrabold text-foreground leading-none">{pkg.price}</span>
                <span className="text-[12px] font-medium text-muted-foreground">/ per person</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link to="/contact" className="btn-primary flex items-center justify-center group flex-1 rounded-sm py-3.5 text-[15px] font-bold text-center shadow-[var(--shadow-blue)] transition-transform hover:-translate-y-0.5">
              Book Now
              <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a href="tel:+917041260720" className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-sm bg-accent/10 text-accent transition-colors hover:bg-accent hover:text-white border border-accent/20" aria-label="Call Us">
              <Phone className="h-5 w-5" strokeWidth={2.5} />
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default PackageCard;

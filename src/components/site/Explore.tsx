import { MapPin, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal, RevealGroup, motion } from "@/lib/motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import d1 from "@/assets/images/kerala (1).webp";
import d2 from "@/assets/images/chardham-yatra-tour.jpg";
import d3 from "@/assets/images/INDIA.jpg";

const places = [
  { name: "Kerala", trips: 3, img: d1, link: "/kerala" },
  { name: "Char Dham", trips: 4, img: d2, link: "/chardham" },
  { name: "Nepal", trips: 3, img: d3, link: "/nepal" },
];

const DestinationCard = ({ p }: { p: (typeof places)[0] }) => {
  const MotionLink = motion(Link);
  return (
    <MotionLink
      to={p.link}
      variants={{ hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
      className="group relative block aspect-[3/4] overflow-hidden rounded-t-full rounded-b-3xl shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
    >
      <img
        src={p.img}
        alt={`Travel to ${p.name}`}
        loading="lazy"
        decoding="async"
        width={400}
        height={500}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
      />
      
      {/* Dark gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />
      
      {/* Inner Decorative Border */}
      <div className="absolute inset-3 rounded-t-full rounded-b-2xl border border-white/30 transition-all duration-500 group-hover:border-white/60 group-hover:scale-[0.96]" />
      
      {/* Animated Content Wrapper */}
      <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-end p-8 pb-12 transition-transform duration-500 group-hover:-translate-y-8">
        <h3 className="text-3xl font-bold tracking-tight text-white mb-2">{p.name}</h3>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/80">{p.trips} Packages</p>
      </div>

      {/* Button that slides up from the bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full opacity-0 transition-all duration-500 group-hover:-translate-y-10 group-hover:opacity-100">
         <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-lg">
           <ArrowUpRight className="h-5 w-5" />
         </span>
      </div>
    </MotionLink>
  );
};

const Explore = () => (
  <section aria-label="Explore destinations" className="bg-background section-pad" id="explore">
    <div className="container-px">
      <Reveal className="mx-auto flex flex-col items-center text-center max-w-2xl">
        <h2 className="text-4xl font-semibold leading-[1.05] text-foreground md:text-5xl lg:text-[56px]">
          Explore <span className="italic-display text-primary">Destination</span>
        </h2>
        <p className="mt-5 max-w-md text-[15px] font-light leading-relaxed text-muted-foreground">
          Handpicked travel experiences designed to give you the best of every destination—at the best value.
        </p>
      </Reveal>

      {/* Desktop Grid Layout: Visible on md and up */}
      <RevealGroup className="mt-14 hidden md:grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {places.map((p) => (
          <DestinationCard key={p.name} p={p} />
        ))}
      </RevealGroup>

      {/* Mobile Slider Layout: Visible below md */}
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="mt-14 w-full md:hidden"
      >
        <CarouselContent className="-ml-5">
          {places.map((p) => (
            <CarouselItem key={p.name} className="pl-5 basis-[85%]">
              <DestinationCard p={p} />
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* Navigation Controls */}
        <div className="mt-20 flex items-center justify-center gap-4">
          <CarouselPrevious className="static h-12 w-12 translate-y-0 bg-white" />
          <CarouselNext className="static h-12 w-12 translate-y-0 bg-primary text-white hover:bg-primary/90" />
        </div>
      </Carousel>
    </div>
  </section>
);

export default Explore;

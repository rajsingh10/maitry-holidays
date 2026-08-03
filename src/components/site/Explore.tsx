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

import imgCharDham from "@/assets/images/chardham-yatra-tour.webp";
import imgDivineDarshan from "@/assets/images/divya_darshan.webp";
import imgKashmir from "@/assets/images/mini-switzerland.webp";
import imgNorthEast from "@/assets/images/INDIA.webp";
import imgSouthIndia from "@/assets/images/kerala (1).webp";

const places = [
  { name: "Char Dham", trips: 2, img: imgCharDham, link: "/chardham" },
  { name: "Kashmir", trips: 1, img: imgKashmir, link: "/kashmir" },
  { name: "North East", trips: 1, img: imgNorthEast, link: "/north-east" },
  { name: "South India", trips: 1, img: imgSouthIndia, link: "/south-india" },
  { name: "Divine Darshan", trips: 2, img: imgDivineDarshan, link: "/divine-darshan" },
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

const Explore = ({ showAll = false }: { showAll?: boolean } = {}) => {
  const displayPlaces = showAll ? places : places.slice(0, 3);

  return (
    <section aria-label="Explore destinations" className={`bg-background ${showAll ? 'pt-8 pb-20' : 'section-pad'}`} id="explore">
      <div className="container-px">
        {!showAll && (
          <Reveal className="mx-auto flex flex-col items-center text-center max-w-2xl">
            <h2 className="text-4xl font-semibold leading-[1.05] text-foreground md:text-5xl lg:text-[56px]">
              Explore <span className="italic-display text-primary">Destination</span>
            </h2>
            <p className="mt-5 max-w-md text-[15px] font-light leading-relaxed text-muted-foreground">
              Handpicked travel experiences designed to give you the best of every destination—at the best value.
            </p>
          </Reveal>
        )}

        {/* Desktop Grid Layout: Visible on md and up */}
        <RevealGroup className={`${showAll ? 'mt-8' : 'mt-14'} hidden md:grid gap-5 sm:grid-cols-2 lg:grid-cols-3`}>
          {displayPlaces.map((p) => (
            <DestinationCard key={p.name} p={p} />
          ))}
        </RevealGroup>

        {/* Mobile Layout */}
        {showAll ? (
          <RevealGroup className="mt-8 grid grid-cols-1 gap-6 md:hidden">
            {displayPlaces.map((p) => (
              <DestinationCard key={p.name} p={p} />
            ))}
          </RevealGroup>
        ) : (
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="mt-10 w-full md:hidden relative"
          >
            <CarouselContent className="-ml-4">
              {displayPlaces.map((p) => (
                <CarouselItem key={p.name} className="pl-4 basis-full sm:basis-1/2">
                  <div className="p-1">
                    <DestinationCard p={p} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious className="position-static transform-none bg-brand-cream hover:bg-primary hover:text-white border-none h-12 w-12 static" />
              <CarouselNext className="position-static transform-none bg-brand-cream hover:bg-primary hover:text-white border-none h-12 w-12 static" />
            </div>
          </Carousel>
        )}

        {!showAll && (
          <Reveal className="mt-12 text-center">
            <Link
              to="/destinations"
              className="inline-flex items-center gap-2 rounded-sm border-2 border-primary px-8 py-3 text-sm font-bold text-primary transition-all hover:bg-primary hover:text-white"
            >
              View all destinations
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        )}
      </div>
    </section>
  );
};

export default Explore;

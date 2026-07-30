import { Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal, RevealGroup, motion } from "@/lib/motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import d1 from "@/assets/images/uttarakhand.avif";
import d2 from "@/assets/images/uttarakhand1.avif";
import d3 from "@/assets/images/North India.avif";
import d4 from "@/assets/images/Shimla & Manali.avif";
import d5 from "@/assets/images/golden temple.avif";
import d6 from "@/assets/images/Ayodhya & Varanasi.avif";

const places = [
  { name: "Uttarakhand", trips: 14, img: d1, link: "/uttarakhand" },
  { name: "Himachal", trips: 15, img: d2, link: "/himachal" },
  { name: "North India", trips: 12, img: d3, link: "/north-india" },
  { name: "Shimla & Manali", trips: 24, img: d4, link: "/himachal" },
  { name: "Golden Temple", trips: 25, img: d5, link: "/north-india" },
  { name: "Ayodhya & Varanasi", trips: 25, img: d6, link: "/north-india" },
];

const DestinationCard = ({ p }: { p: (typeof places)[0] }) => {
  const MotionLink = motion(Link);
  return (
    <MotionLink
      to={p.link}
      variants={{ hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
      className="group relative block aspect-[4/5] overflow-hidden rounded-3xl shadow-[var(--shadow-soft)]"
    >
      <img
        src={p.img}
        alt={`Travel to ${p.name}`}
        loading="lazy"
        decoding="async"
        width={400}
        height={500}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-darker/90 via-brand-darker/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
        <div className="text-white">
          <p className="text-[12px] font-light text-white/75">{p.trips} Trips Packages</p>
          <h3 className="mt-1 text-2xl font-semibold">{p.name}</h3>
        </div>
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-foreground transition-all duration-300 group-hover:rotate-90 group-hover:bg-primary group-hover:text-primary-foreground">
          <Plus className="h-5 w-5" />
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

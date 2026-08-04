import { useState } from "react";
import { Reveal } from "@/lib/motion";
import { X, ZoomIn, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import p1 from "@/assets/images/packages/WhatsApp Image 2026-07-31 at 1.34.48 PM.webp";
import p2 from "@/assets/images/packages/WhatsApp Image 2026-07-31 at 1.34.49 PM.webp";
import p3 from "@/assets/images/packages/WhatsApp Image 2026-07-31 at 1.34.54 PM.webp";
import p4 from "@/assets/images/packages/WhatsApp Image 2026-07-31 at 1.34.54 PM (1).webp";

const posters = [
  p1,
  p2,
  p3,
  p4
];

interface TourPostersProps {
  showAll?: boolean;
}

const TourPosters = ({ showAll = false }: TourPostersProps = {}) => {
  const [selectedPoster, setSelectedPoster] = useState<string | null>(null);

  return (
    <section id="special-packages" className="pt-10 pb-20 md:pt-12 md:pb-28 bg-brand-cream relative overflow-hidden">
      {/* Decorative BG */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="container-px">
        <Reveal className="mx-auto max-w-2xl text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary w-fit mb-4">
            <span className="text-xs font-bold tracking-widest uppercase">Bharat Yatra</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.1] text-foreground uppercase tracking-tight">
            Special <span className="text-primary italic-display font-light">Packages</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Explore our latest exclusive tour packages and upcoming group departures.
          </p>
        </Reveal>

        {/* CSS Grid for posters */}
        <Reveal className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {posters.slice(0, showAll ? undefined : 3).map((poster, index) => (
            <div
              key={index}
              className="relative group rounded-2xl overflow-hidden cursor-pointer border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-300"
              onClick={() => setSelectedPoster(poster)}
            >
              <img
                src={poster}
                alt={`Tour Poster ${index + 1}`}
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center backdrop-blur-[2px]">
                <div className="bg-white/20 p-4 rounded-full text-white backdrop-blur-md transform scale-50 group-hover:scale-100 transition-transform duration-300 mb-8">
                  <ZoomIn className="w-8 h-8" />
                </div>
                
                {/* Action Button (Appears on Hover) */}
                <div className="absolute bottom-6 left-6 right-6 transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">
                  <Link 
                    to="/contact" 
                    className="w-full btn-primary flex items-center justify-center group/btn rounded-sm py-3.5 text-[15px] font-bold text-center shadow-lg hover:scale-[1.02] transition-transform"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Get an enquiry
                    <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Reveal>

        {!showAll && (
          <Reveal className="mt-12 text-center">
            <Link
              to="/packages?type=special"
              className="inline-flex items-center gap-2 rounded-sm border-2 border-primary px-8 py-3 text-sm font-bold text-primary transition-all hover:bg-primary hover:text-white"
            >
              View all Special Packages
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedPoster && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-8"
          onClick={() => setSelectedPoster(null)}
        >
          <button
            className="absolute top-4 right-4 md:top-8 md:right-8 text-white bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-md transition-colors z-10"
            onClick={() => setSelectedPoster(null)}
          >
            <span className="sr-only">Close poster</span>
            <X className="w-6 h-6" />
          </button>

          <div
            className="relative w-full h-full max-w-5xl flex items-center justify-center"
            onClick={e => e.stopPropagation()}
          >
            <img
              src={selectedPoster}
              alt="Tour Poster Expanded"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default TourPosters;

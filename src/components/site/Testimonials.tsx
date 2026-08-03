import { useState, useEffect } from "react";
import { Reveal } from "@/lib/motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import v1 from "@/assets/video/VID-20260731-WA0005.mp4";
import v2 from "@/assets/video/VID-20260731-WA0006.mp4";
import v3 from "@/assets/video/VID-20260731-WA0007.mp4";
import v4 from "@/assets/video/VID-20260731-WA0008.mp4";
import v5 from "@/assets/video/VID-20260731-WA0009.mp4";
import v6 from "@/assets/video/VID-20260731-WA0010.mp4";

const reviews = [
  {
    id: 1,
    videoSrc: v1
  },
  {
    id: 2,
    videoSrc: v2
  },
  {
    id: 3,
    videoSrc: v3
  },
  {
    id: 4,
    videoSrc: v4
  },
  {
    id: 5,
    videoSrc: v5
  },
  {
    id: 6,
    videoSrc: v6
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(2); // Center active by default
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null); // For fullscreen playback

  useEffect(() => {
    // The active video is always the 3rd element in the rotated DOM array (index 2)
    const videos = document.querySelectorAll('#testimonials video') as NodeListOf<HTMLVideoElement>;
    videos.forEach((vid, i) => {
      if (i === 2) {
        vid.muted = false;
        vid.play().catch(() => {
          vid.muted = true;
          vid.play().catch(() => {});
        });
      } else {
        vid.muted = true;
        vid.pause();
      }
    });
  }, [activeIndex]);

  const getRotatedItems = () => {
    const items = [...reviews];
    const shift = 2 - activeIndex;
    if (shift > 0) {
      for (let i = 0; i < shift; i++) items.unshift(items.pop()!);
    } else if (shift < 0) {
      for (let i = 0; i < -shift; i++) items.push(items.shift()!);
    }
    return items;
  };

  return (
    <section id="testimonials" aria-label="What our clients say" className="bg-gradient-to-b from-pink-50/50 to-orange-50/50 section-pad overflow-hidden">
      <div className="container-px">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-extrabold leading-[1.05] text-foreground md:text-5xl lg:text-[56px] uppercase tracking-tight">
            Happy <span className="text-primary italic-display font-light">Travelers</span>
          </h2>
        </Reveal>

        <Reveal className="mt-10 md:mt-12 flex h-[400px] md:h-[500px] w-full max-w-7xl mx-auto gap-2 md:gap-4 relative px-2 sm:px-0 justify-center">
          {getRotatedItems().map((r, i) => {
            // Find original index to maintain correct state
            const originalIndex = reviews.findIndex(item => item.id === r.id);
            const isActive = originalIndex === activeIndex;

            return (
              <motion.div
                layout
                key={r.id}
                onClick={() => {
                  if (isActive) {
                    setSelectedVideo(r.videoSrc);
                  } else {
                    setActiveIndex(originalIndex);
                  }
                }}
                className={`group relative h-full overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer rounded-2xl md:rounded-[2rem] shadow-lg ${isActive
                    ? "flex-grow basis-full sm:basis-[220px] md:basis-[550px] shadow-2xl scale-100 block"
                    : "basis-[60px] md:basis-[220px] opacity-70 hover:opacity-100 scale-95 md:scale-100 hidden sm:block"
                  }`}
              >
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  muted={!isActive}
                  loop
                  preload="metadata"
                >
                  <source src={r.videoSrc} type="video/mp4" />
                </video>

                {/* Dark Overlay for inactive */}
                <div className={`absolute inset-0 bg-black transition-opacity duration-700 ${isActive ? 'opacity-0' : 'opacity-60 group-hover:opacity-40'}`} />

                {/* Mobile Navigation Arrows (Only on Active item) */}
                {isActive && (
                  <div className="sm:hidden absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-3 z-10 pointer-events-none">
                    <button
                      className="pointer-events-auto bg-black/40 text-white p-2.5 rounded-full backdrop-blur-sm border border-white/20 active:scale-95 transition-transform"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveIndex(prev => prev === 0 ? reviews.length - 1 : prev - 1);
                      }}
                    >
                      <ArrowLeft className="w-5 h-5" strokeWidth={2.5} />
                    </button>
                    <button
                      className="pointer-events-auto bg-black/40 text-white p-2.5 rounded-full backdrop-blur-sm border border-white/20 active:scale-95 transition-transform"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveIndex(prev => prev === reviews.length - 1 ? 0 : prev + 1);
                      }}
                    >
                      <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
                    </button>
                  </div>
                )}

                {/* Desktop Navigation Arrows (Only on Inactive items) */}
                {!isActive && (
                  <div className="hidden sm:block absolute bottom-6 left-1/2 -translate-x-1/2 text-primary drop-shadow-md transition-transform duration-300 group-hover:scale-125">
                    {i < 2 ? <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" strokeWidth={3} /> : <ArrowRight className="w-5 h-5 md:w-6 md:h-6" strokeWidth={3} />}
                  </div>
                )}
              </motion.div>
            );
          })}
        </Reveal>
      </div>

      {/* Fullscreen Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <button
            className="absolute top-6 right-6 text-white bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-md transition-colors"
            onClick={() => setSelectedVideo(null)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
          <div
            className="relative w-full max-w-4xl max-h-[90vh] aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <video
              src={selectedVideo}
              className="w-full h-full object-contain"
              controls
              autoPlay
              muted={false}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;

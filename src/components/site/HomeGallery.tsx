import { Reveal, RevealGroup, motion, fadeUp } from "@/lib/motion";
import { Link } from "react-router-dom";
import { Image as ImageIcon, ArrowRight } from "lucide-react";

import img1 from "@/assets/images/hero_kerala.png";
import img2 from "@/assets/images/hero_chardham.png";
import img3 from "@/assets/images/hero_nepal.png";
import img4 from "@/assets/images/kerala (1).webp";
import img5 from "@/assets/images/INDIA.jpg";
import img6 from "@/assets/images/banner5.jpg";

const galleryImages = [
    { src: img1, title: "Kerala Backwaters", category: "Kerala" },
    { src: img2, title: "Kedarnath Temple", category: "Char Dham" },
    { src: img3, title: "Kathmandu Stupa", category: "Nepal" },
    { src: img4, title: "Houseboat Journey", category: "Kerala" },
    { src: img5, title: "Incredible India", category: "India" },
    { src: img6, title: "Spiritual Peace", category: "Char Dham" },
];

const HomeGallery = () => {
    return (
        <section className="section-pad bg-background overflow-hidden relative">
            <div className="container-px relative z-10">
                <Reveal className="mb-10 md:mb-16 text-center max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 rounded-sm border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">
                        <ImageIcon className="h-4 w-4" />
                        <span>Travel Memories</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                        Our <span className="text-primary italic-display">Gallery</span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        A glimpse into the beautiful destinations and unforgettable experiences we craft.
                    </p>
                </Reveal>

                {/* Image Grid */}
                <RevealGroup className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                    {galleryImages.map((img, index) => (
                        <motion.div 
                            key={index} 
                            variants={fadeUp}
                            className="break-inside-avoid relative group rounded-sm overflow-hidden shadow-card border border-border/50 cursor-pointer"
                        >
                            <img 
                                src={img.src} 
                                alt={img.title} 
                                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                loading="lazy"
                            />
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <span className="text-primary text-xs font-bold uppercase tracking-wider mb-1 block">
                                    {img.category}
                                </span>
                                <h3 className="text-white font-semibold text-lg">
                                    {img.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </RevealGroup>

                <Reveal delay={0.4} className="mt-12 text-center">
                    <Link to="/gallery" className="btn-primary group">
                        View All Gallery
                        <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Link>
                </Reveal>
            </div>
        </section>
    );
};

export default HomeGallery;

import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import AnnouncementBar from "@/components/site/AnnouncementBar";
import FloatingActions from "@/components/site/FloatingActions";
import { Reveal, RevealGroup, motion, fadeUp } from "@/lib/motion";
import { useEffect, useState } from "react";
import heroBg from "@/assets/images/hero_india.png";
import { Image as ImageIcon } from "lucide-react";

// Import a selection of images for the gallery
import img1 from "@/assets/images/hero_kerala.png";
import img2 from "@/assets/images/hero_chardham.png";
import img3 from "@/assets/images/hero_nepal.png";
import img4 from "@/assets/images/kerala (1).webp";
import img5 from "@/assets/images/INDIA.jpg";
import img6 from "@/assets/images/banner5.jpg";
import img7 from "@/assets/images/banner6.jpg";
import img8 from "@/assets/images/himachal.jpg";

const galleryImages = [
    { src: img1, title: "Kerala Backwaters", category: "Kerala" },
    { src: img2, title: "Kedarnath Temple", category: "Char Dham" },
    { src: img3, title: "Kathmandu Stupa", category: "Nepal" },
    { src: img4, title: "Houseboat Journey", category: "Kerala" },
    { src: img5, title: "Incredible India", category: "India" },
    { src: img6, title: "Spiritual Peace", category: "Char Dham" },
    { src: img7, title: "Himalayan Ranges", category: "Char Dham" },
    { src: img8, title: "Majestic Himachal", category: "India" },
];

const categories = ["All", "Kerala", "Char Dham", "Nepal", "India"];

const Gallery = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const filteredImages = activeCategory === "All" 
        ? galleryImages 
        : galleryImages.filter(img => img.category === activeCategory);

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <AnnouncementBar />
            <Navbar />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative isolate flex items-center overflow-hidden py-24 md:py-32 min-h-[400px]">
                    <div className="absolute inset-0 -z-20 h-full w-full bg-brand-darker">
                        <img
                            src={heroBg}
                            alt="Gallery Background"
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    </div>
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 -z-10 bg-black/30 bg-gradient-to-r from-brand-darker/80 via-brand-darker/40 to-transparent lg:from-brand-darker/90 lg:via-brand-darker/40 lg:to-transparent" />

                    <div className="container-px w-full text-center mt-12 md:mt-20">
                        <Reveal>
                            <div className="flex items-center justify-center gap-2 text-white/90 font-medium tracking-wider uppercase text-[14px] mb-4">
                                <ImageIcon className="w-4 h-4" />
                                <span>Travel Memories</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
                                Our <span className="italic-display text-primary font-normal">Gallery</span>
                            </h1>
                            <p className="text-lg md:text-xl text-white/80 font-light max-w-2xl mx-auto leading-relaxed">
                                A glimpse into the beautiful destinations and unforgettable experiences we craft.
                            </p>
                        </Reveal>
                    </div>
                </section>

                {/* Main Content Section */}
                <div className="container-px py-16 md:py-24">
                    {/* Filter Buttons */}
                    <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-2.5 rounded-sm text-sm font-medium transition-all duration-300 ${
                                    activeCategory === cat
                                        ? "bg-primary text-white shadow-md shadow-primary/30"
                                        : "bg-white text-muted-foreground border border-border hover:bg-gray-50 hover:text-foreground"
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Image Grid */}
                    <RevealGroup key={activeCategory} className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                        {filteredImages.map((img, index) => (
                            <motion.div 
                                key={img.src} 
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
                </div>
            </main>

            <Footer />
            <FloatingActions />
        </div>
    );
};

export default Gallery;

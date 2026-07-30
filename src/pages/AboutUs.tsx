import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import AnnouncementBar from "@/components/site/AnnouncementBar";
import FloatingActions from "@/components/site/FloatingActions";
import { Reveal } from "@/lib/motion";
import { useEffect } from "react";
import heroBg from "@/assets/images/banner5.jpg";
import aboutImg1 from "@/assets/images/about_img1.jpg";
import aboutImg2 from "@/assets/images/about_img2.jpg";
import {
    MapPin,
    Mail,
    Instagram,
    MessageCircle,
    Info
} from "lucide-react";

const AboutUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-background">
            <AnnouncementBar />
            <Navbar />

            <main>
                {/* Hero Section */}
                <section className="relative isolate flex items-center overflow-hidden py-24 md:py-32 min-h-[400px] md:min-h-[500px]">
                    <div className="absolute inset-0 -z-20 h-full w-full bg-brand-darker">
                        <img
                            src={heroBg}
                            alt="About Us Background"
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    </div>
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 -z-10 bg-black/30 bg-gradient-to-r from-brand-darker/80 via-brand-darker/40 to-transparent lg:from-brand-darker/90 lg:via-brand-darker/40 lg:to-transparent" />

                    <div className="container-px w-full text-center mt-12 md:mt-20">
                        <Reveal>
                            <div className="flex items-center justify-center gap-2 text-white/90 font-medium tracking-wider uppercase text-[14px] mb-4">
                                <Info className="w-4 h-4" />
                                <span>Discover Our Journey</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
                                About <span className="italic-display text-primary font-normal">Maitry Holidays</span>
                            </h1>
                            <p className="text-lg md:text-xl text-white/80 font-light max-w-2xl mx-auto leading-relaxed">
                                Creating unforgettable memories and extraordinary travel experiences for you and your loved ones.
                            </p>
                        </Reveal>
                    </div>
                </section>

                {/* Main Content Section */}
                <div className="container-px pt-20 md:pt-28 pb-8 md:pb-12 relative z-10 -mt-10 md:-mt-20">
                    <div className="grid gap-12 lg:gap-16 lg:grid-cols-2 items-center">
                        {/* Image Collage */}
                        <Reveal delay={0.1}>
                            <div className="relative h-full min-h-[400px] md:min-h-[500px] rounded-3xl w-full">
                                <div className="absolute top-0 left-0 w-[70%] h-[70%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-10">
                                    <img
                                        src={aboutImg1}
                                        alt="Maitry Holidays Experience"
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <div className="absolute bottom-0 right-0 w-[65%] h-[65%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-20">
                                    <img
                                        src={aboutImg2}
                                        alt="Maitry Holidays Tour"
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                </div>

                                {/* Decorative Element */}
                                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl -z-10"></div>
                                <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/10 rounded-full blur-2xl -z-10"></div>
                            </div>
                        </Reveal>

                        {/* Text and Contact Information */}
                        <Reveal delay={0.2}>
                            <div className="flex flex-col h-full justify-center">
                                <h2 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight mb-6">
                                    Who <span className="text-primary italic-display">We Are</span>
                                </h2>
                                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                                    At Maitry Holidays, we believe that traveling is more than just visiting a destination; it's about experiencing the world, discovering new cultures, and creating memories that last a lifetime. Our dedicated team is passionate about curating personalized holiday packages that cater to your unique preferences and dreams.
                                </p>

                                <div className="rounded-3xl bg-white p-8 shadow-card border border-primary/30 space-y-6">
                                    <h3 className="text-xl font-semibold text-foreground mb-4">Get in Touch</h3>

                                    <div className="flex items-start gap-4 group cursor-pointer">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                                            <MessageCircle className="w-5 h-5" />
                                        </div>
                                        <div className="pt-1">
                                            <p className="text-sm font-medium text-foreground mb-0.5">WhatsApp</p>
                                            <a href="https://wa.me/917041260720" target="_blank" rel="noopener noreferrer" className="text-muted-foreground group-hover:text-primary transition-colors">
                                                +91 7041260720
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 group cursor-pointer">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                                            <Mail className="w-5 h-5" />
                                        </div>
                                        <div className="pt-1">
                                            <p className="text-sm font-medium text-foreground mb-0.5">Email Address</p>
                                            <a href="mailto:maitry.holidays13@gmail.com" className="text-muted-foreground group-hover:text-primary transition-colors">
                                                maitry.holidays13@gmail.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 group cursor-pointer">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                                            <Instagram className="w-5 h-5" />
                                        </div>
                                        <div className="pt-1">
                                            <p className="text-sm font-medium text-foreground mb-0.5">Instagram</p>
                                            <a href="https://instagram.com/maitry_holidays" target="_blank" rel="noopener noreferrer" className="text-muted-foreground group-hover:text-primary transition-colors">
                                                @maitry_holidays
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                            <MapPin className="w-5 h-5" />
                                        </div>
                                        <div className="pt-1">
                                            <p className="text-sm font-medium text-foreground mb-0.5">Business Address</p>
                                            <p className="text-muted-foreground text-sm leading-relaxed">
                                                F-39, Signet Mall, Kamrej Char Rasta, Surat, Gujarat Zip code: 394185
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </main>

            <Footer />
            <FloatingActions />
        </div>
    );
};

export default AboutUs;

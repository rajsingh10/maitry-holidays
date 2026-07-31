import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import AnnouncementBar from "@/components/site/AnnouncementBar";
import FloatingActions from "@/components/site/FloatingActions";
import { Reveal, RevealGroup, motion } from "@/lib/motion";
import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import heroBg from "@/assets/images/nepal_banner_bg.png";
import aboutImg1 from "@/assets/images/about_img1.jpg";
import aboutImg2 from "@/assets/images/about_img2.jpg";
import {
    MapPin,
    Mail,
    Instagram,
    MessageCircle,
    Info,
    CheckCircle2,
    Compass,
    Shield,
    Globe2,
    Star,
    Award,
    Compass as CompassIcon,
    Users,
    Activity,
    PhoneCall
} from "lucide-react";

// Stats definition
const stats = [
    { value: "12k+", label: "Happy Travelers", icon: Users },
    { value: "10k+", label: "Trains Booked", icon: TicketIcon },
    { value: "5k+", label: "Tours Organized", icon: CompassIcon },
    { value: "8k+", label: "Hotel Stays", icon: Star },
];

function TicketIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
            <path d="M13 5v2" />
            <path d="M13 17v2" />
            <path d="M13 11v2" />
        </svg>
    );
}

// Core Philosophy Values
const coreValues = [
    {
        icon: Compass,
        title: "Curated Journeys",
        desc: "We don't offer generic templates. Every package is tailor-made to your pace, budget, and specific dreams.",
        className: "bg-primary/5 text-primary border-primary/10 hover:bg-primary/10 hover:border-primary/20"
    },
    {
        icon: Shield,
        title: "Safe & Secure",
        desc: "From certified premium stays to trusted local drivers, your safety is at the core of everything we plan.",
        className: "bg-accent/5 text-accent border-accent/10 hover:bg-accent/10 hover:border-accent/20"
    },
    {
        icon: Globe2,
        title: "Local Connection",
        desc: "Travel like a local. We connect you with authentic cultural hubs and hidden gems to enrich your experience.",
        className: "bg-primary/5 text-primary border-primary/10 hover:bg-primary/10 hover:border-primary/20"
    },
    {
        icon: Award,
        title: "Honest Pricing",
        desc: "No hidden charges, no surprises. Just high-quality inclusions, premium execution, and transparent costs.",
        className: "bg-accent/5 text-accent border-accent/10 hover:bg-accent/10 hover:border-accent/20"
    }
];

function Counter({ value }: { value: string }) {
    const numMatch = value.match(/\d+/);
    const num = numMatch ? parseInt(numMatch[0]) : 0;
    const suffix = value.replace(/[0-9]/g, '');

    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        damping: 30,
        stiffness: 60,
    });
    const display = useTransform(springValue, (current) => Math.round(current) + suffix);

    useEffect(() => {
        if (inView) {
            motionValue.set(num);
        }
    }, [inView, motionValue, num]);

    return <motion.span ref={ref}>{display}</motion.span>;
}

const AboutUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-background">
            <AnnouncementBar />
            <Navbar />

            <main className="overflow-hidden">
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
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 font-medium tracking-widest uppercase text-[11px] mb-6 shadow-inner">
                                <Info className="w-3.5 h-3.5 text-primary" />
                                <span>Discover Our Story</span>
                            </div>
                            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
                                Crafting Your <span className="italic-display text-primary font-normal">Next Story</span>
                            </h1>
                            <p className="text-base sm:text-lg md:text-xl text-white/80 font-light max-w-2xl mx-auto leading-relaxed">
                                Maitry Holidays is a professionally managed travel agency dedicated to curating tailor-made, unforgettable memories across North India and beyond.
                            </p>
                        </Reveal>
                    </div>
                </section>

                {/* Narrative & Collage Section */}
                <section className="relative py-12 md:py-16 bg-background">
                    <div className="container-px">
                        <div className="grid gap-16 lg:grid-cols-12 items-center">
                            
                            {/* Left: Dynamic Premium Collage */}
                            <div className="lg:col-span-5 relative h-[380px] md:h-[480px] w-full mt-6 lg:mt-0">
                                {/* Back decorative dots */}
                                <div className="absolute top-[10%] -left-8 w-24 h-24 bg-primary/5 rounded-full blur-2xl -z-10"></div>
                                <div className="absolute -bottom-6 right-10 w-32 h-32 bg-accent/5 rounded-full blur-2xl -z-10"></div>

                                {/* Main Overlay Image Card */}
                                <motion.div
                                    initial={{ opacity: 0, x: -40, scale: 0.95 }}
                                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                    transition={{ duration: 0.8 }}
                                    viewport={{ once: true }}
                                    className="absolute top-0 left-0 w-[80%] h-[75%] rounded-2xl overflow-hidden shadow-2xl z-10 border border-border/40"
                                >
                                    <img
                                        src={aboutImg1}
                                        alt="Maitry Holidays Experience"
                                        className="w-full h-full object-cover transition-transform duration-[1.2s] hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                                </motion.div>

                                {/* Bottom Overlapping Image Card */}
                                <motion.div
                                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    viewport={{ once: true }}
                                    className="absolute bottom-0 right-0 w-[65%] h-[60%] rounded-2xl border-[6px] border-background overflow-hidden shadow-2xl z-20"
                                >
                                    <img
                                        src={aboutImg2}
                                        alt="Maitry Holidays Tour"
                                        className="w-full h-full object-cover transition-transform duration-[1.2s] hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                                </motion.div>

                                {/* Floating Years of Exp Badge */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.7 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
                                    viewport={{ once: true }}
                                    className="absolute bottom-[20%] left-[-10px] bg-background/95 backdrop-blur-md p-4 rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.12)] z-30 border border-border flex items-center gap-3.5 hover:translate-y-[-4px] transition-transform duration-300"
                                >
                                    <div className="bg-primary/10 text-primary p-2.5 rounded-xl">
                                        <Award className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xl md:text-2xl font-black text-foreground leading-none mb-1">10+</p>
                                        <p className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">Years Experience</p>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Right: Modern Copy */}
                            <div className="lg:col-span-7 flex flex-col justify-center text-left">
                                <Reveal>
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-primary/10 text-primary w-fit mb-6">
                                        <Compass className="w-4 h-4" />
                                        <span className="text-xs font-bold tracking-widest uppercase">Who We Are</span>
                                    </div>

                                    <h2 className="text-3xl md:text-5xl font-bold leading-tight text-foreground mb-6">
                                        Your Trusted Companion for <br />
                                        <span className="italic-display text-primary font-normal">Authentic Travel</span>
                                    </h2>

                                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
                                        At <span className="font-semibold text-foreground">Maitry Holidays</span>, we believe that traveling is more than just sightseeing; it's about connecting with new horizons, diving deep into local cultures, and curating experiences that enrich your life. We are committed to designing customized travel solutions that perfectly align with your vision.
                                    </p>

                                    {/* Checklist */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                        {[
                                            "Bespoke & Tailored Itineraries",
                                            "Expert Local Travel Directors",
                                            "24/7 On-Tour Support Network",
                                            "100% Honest & Transparent Pricing"
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-center gap-3 group">
                                                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                                                    <CheckCircle2 className="w-3.5 h-3.5" strokeWidth={3} />
                                                </div>
                                                <span className="font-semibold text-foreground text-sm sm:text-base">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </Reveal>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Premium Counters Section */}
                <section className="py-10 md:py-14 bg-primary/5 border-y border-primary/10 relative">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/40 via-transparent to-transparent pointer-events-none" />
                    
                    <div className="container-px">
                        <RevealGroup className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                            {stats.map((s, idx) => {
                                const StatIcon = s.icon;
                                return (
                                    <motion.div
                                        key={s.label}
                                        variants={{
                                            hidden: { opacity: 0, y: 30 },
                                            show: { opacity: 1, y: 0, transition: { duration: 0.5, delay: idx * 0.1 } }
                                        }}
                                        className="bg-background/60 backdrop-blur-sm border border-border/80 rounded-2xl p-6 md:p-8 text-center flex flex-col items-center justify-center shadow-sm hover:shadow-lg hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 group"
                                    >
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                            <StatIcon className="w-5 h-5" />
                                        </div>
                                        <h3 className="text-3xl md:text-5xl font-black text-foreground mb-2 tracking-tight">
                                            <Counter value={s.value} />
                                        </h3>
                                        <p className="text-[11px] md:text-xs font-bold text-muted-foreground uppercase tracking-widest">{s.label}</p>
                                    </motion.div>
                                );
                            })}
                        </RevealGroup>
                    </div>
                </section>

                {/* Core Philosophy Section */}
                <section className="relative py-12 md:py-16 bg-background">
                    <div className="container-px">
                        <div className="text-center max-w-2xl mx-auto mb-10">
                            <Reveal>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-accent/10 text-accent w-fit mb-4">
                                    <Shield className="w-4 h-4" />
                                    <span className="text-xs font-bold tracking-widest uppercase">Our Philosophy</span>
                                </div>
                                <h2 className="text-3xl md:text-5xl font-bold leading-tight text-foreground mb-4">
                                    Our Core Values
                                </h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    We build relationships, not just itineraries. Here is what guides every decision, booking, and trip we design.
                                </p>
                            </Reveal>
                        </div>

                        <RevealGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {coreValues.map((value, idx) => {
                                const ValIcon = value.icon;
                                return (
                                    <motion.div
                                        key={value.title}
                                        variants={{
                                            hidden: { opacity: 0, scale: 0.95 },
                                            show: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: idx * 0.08 } }
                                        }}
                                        className={`rounded-2xl border p-6 md:p-8 flex flex-col items-start transition-all duration-300 group cursor-pointer ${value.className}`}
                                    >
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white border border-border shadow-sm text-foreground mb-6 group-hover:scale-110 transition-transform duration-300">
                                            <ValIcon className="w-5 h-5" />
                                        </div>
                                        <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{value.title}</h3>
                                        <p className="text-muted-foreground text-sm leading-relaxed">{value.desc}</p>
                                    </motion.div>
                                );
                            })}
                        </RevealGroup>
                    </div>
                </section>

                {/* Ultra-Premium Contact & Connect Card Section */}
                <section className="py-10 md:py-14 bg-background relative z-10">
                    <div className="container-px">
                        <div className="relative border border-primary/10 shadow-[0_20px_50px_rgba(0,0,0,0.03)] bg-gradient-to-br from-brand-cream/40 via-white/80 to-brand-cream/10 backdrop-blur-md rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 overflow-hidden">
                            {/* Decorative background gradients */}
                            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-10" />
                            <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-accent/5 rounded-full blur-[80px] pointer-events-none -z-10" />

                            <div className="grid gap-12 lg:grid-cols-12 items-center">
                                {/* Left column info */}
                                <div className="lg:col-span-5 text-left">
                                    <Reveal>
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-primary/10 text-primary w-fit mb-4">
                                            <PhoneCall className="w-3.5 h-3.5" />
                                            <span className="text-xs font-bold tracking-widest uppercase">Start Planning</span>
                                        </div>
                                        <h2 className="text-3xl md:text-5xl font-bold leading-tight text-foreground mb-4">
                                            Let’s build your <span className="italic-display text-primary font-normal">dream getaway</span>
                                        </h2>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Whether you are ready to book or just looking to brainstorm ideas, we are always here. Get in touch with our travel team today.
                                        </p>
                                    </Reveal>
                                </div>

                                {/* Right column connect cards */}
                                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {/* WhatsApp */}
                                    <Reveal delay={0.1} className="h-full">
                                        <div 
                                            onClick={() => window.open("https://wa.me/917041260720", "_blank")}
                                            className="h-full rounded-2xl bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] transition-all duration-300 border border-border/80 hover:border-primary/40 flex flex-col items-start gap-4 group cursor-pointer"
                                        >
                                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                                                <MessageCircle className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1">WhatsApp</p>
                                                <span className="font-bold text-foreground group-hover:text-primary transition-colors text-sm md:text-base">
                                                    +91 7041260720
                                                </span>
                                            </div>
                                        </div>
                                    </Reveal>

                                    {/* Email */}
                                    <Reveal delay={0.15} className="h-full">
                                        <div 
                                            onClick={() => window.open("mailto:maitry.holidays13@gmail.com")}
                                            className="h-full rounded-2xl bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] transition-all duration-300 border border-border/80 hover:border-primary/40 flex flex-col items-start gap-4 group cursor-pointer"
                                        >
                                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                                                <Mail className="w-5 h-5" />
                                            </div>
                                            <div className="w-full overflow-hidden">
                                                <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1">Email Us</p>
                                                <span className="font-bold text-foreground group-hover:text-primary transition-colors text-sm md:text-base break-all">
                                                    maitry.holidays13@gmail.com
                                                </span>
                                            </div>
                                        </div>
                                    </Reveal>

                                    {/* Instagram */}
                                    <Reveal delay={0.2} className="h-full">
                                        <div 
                                            onClick={() => window.open("https://instagram.com/maitry_holidays", "_blank")}
                                            className="h-full rounded-2xl bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] transition-all duration-300 border border-border/80 hover:border-primary/40 flex flex-col items-start gap-4 group cursor-pointer"
                                        >
                                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                                                <Instagram className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1">Instagram</p>
                                                <span className="font-bold text-foreground group-hover:text-primary transition-colors text-sm md:text-base">
                                                    @maitry_holidays
                                                </span>
                                            </div>
                                        </div>
                                    </Reveal>

                                    {/* Business Address */}
                                    <Reveal delay={0.25} className="h-full">
                                        <div 
                                            className="h-full rounded-2xl bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] transition-all duration-300 border border-border/80 hover:border-primary/40 flex flex-col items-start gap-4 group cursor-pointer"
                                        >
                                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                                                <MapPin className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1">Address</p>
                                                <span className="font-bold text-foreground group-hover:text-primary transition-colors text-sm md:text-base leading-relaxed">
                                                    Kamrej Char Rasta, Surat
                                                </span>
                                            </div>
                                        </div>
                                    </Reveal>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
            <FloatingActions />
        </div>
    );
};

export default AboutUs;

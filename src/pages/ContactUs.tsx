import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import AnnouncementBar from "@/components/site/AnnouncementBar";
import FloatingActions from "@/components/site/FloatingActions";
import { Reveal } from "@/lib/motion";
import { useEffect } from "react";
import heroBg from "@/assets/images/banner6.jpg";
import {
    MapPin,
    Mail,
    Instagram,
    MessageCircle,
    PhoneCall,
    Send
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactUs = () => {
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
                            alt="Contact Us Background"
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    </div>
                    {/* Dark Overlay to match home page hero */}
                    <div className="absolute inset-0 -z-10 bg-black/30 bg-gradient-to-r from-brand-darker/80 via-brand-darker/40 to-transparent lg:from-brand-darker/90 lg:via-brand-darker/40 lg:to-transparent" />

                    <div className="container-px w-full text-center mt-12 md:mt-20">
                        <Reveal>
                            <div className="flex items-center justify-center gap-2 text-white/90 font-medium tracking-wider uppercase text-[14px] mb-4">
                                <PhoneCall className="w-4 h-4" />
                                <span>Get in Touch</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
                                Contact <span className="italic-display text-primary font-normal">Us</span>
                            </h1>
                            <p className="text-lg md:text-xl text-white/80 font-light max-w-2xl mx-auto leading-relaxed">
                                We'd love to hear from you. Reach out to us for any queries, bookings, or customized holiday packages.
                            </p>
                        </Reveal>
                    </div>
                </section>

                {/* Main Content: Info & Form */}
                <div className="container-px pt-20 md:pt-28 pb-4 md:pb-8 relative z-10 -mt-10 md:-mt-20">
                    <div className="grid gap-8 lg:gap-12 lg:grid-cols-2">
                        {/* Contact Information */}
                        <Reveal delay={0.1}>
                            <div className="h-full rounded-3xl bg-white p-8 md:p-12 shadow-card border border-primary/30 flex flex-col">
                                <h2 className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight mb-8">Contact Information</h2>

                                <div className="space-y-8 flex-grow">
                                    <div className="flex items-start gap-5 group cursor-pointer">
                                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                                            <MessageCircle className="w-6 h-6" />
                                        </div>
                                        <div className="pt-1">
                                            <h3 className="text-[17px] font-semibold text-foreground mb-1">WhatsApp</h3>
                                            <a href="https://wa.me/917041260720" target="_blank" rel="noopener noreferrer" className="text-muted-foreground group-hover:text-primary transition-colors text-[15px]">
                                                +91 7041260720
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-5 group cursor-pointer">
                                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                                            <Mail className="w-6 h-6" />
                                        </div>
                                        <div className="pt-1">
                                            <h3 className="text-[17px] font-semibold text-foreground mb-1">Email Address</h3>
                                            <a href="mailto:maitry.holidays13@gmail.com" className="text-muted-foreground group-hover:text-primary transition-colors text-[15px]">
                                                maitry.holidays13@gmail.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-5 group cursor-pointer">
                                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                                            <Instagram className="w-6 h-6" />
                                        </div>
                                        <div className="pt-1">
                                            <h3 className="text-[17px] font-semibold text-foreground mb-1">Instagram</h3>
                                            <a href="https://instagram.com/maitry_holidays" target="_blank" rel="noopener noreferrer" className="text-muted-foreground group-hover:text-primary transition-colors text-[15px]">
                                                @maitry_holidays
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-5">
                                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                            <MapPin className="w-6 h-6" />
                                        </div>
                                        <div className="pt-1">
                                            <h3 className="text-[17px] font-semibold text-foreground mb-1">Business Address</h3>
                                            <p className="text-muted-foreground text-[15px] leading-relaxed">
                                                F-39, Signet Mall, Kamrej Char Rasta,Surat, Gujarat Zip code: 394185
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>

                        {/* Contact Form */}
                        <Reveal delay={0.2}>
                            <div className="h-full rounded-3xl bg-white p-8 md:p-12 shadow-card border border-primary/30">
                                <h2 className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight mb-2">Send us a Message</h2>
                                <p className="text-muted-foreground text-[15px] mb-8">Fill out the form below and we'll get back to you as soon as possible.</p>

                                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                    <div className="grid gap-6 md:grid-cols-2">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-medium text-foreground">First Name</label>
                                            <Input id="name" placeholder="John" className="h-12 rounded-xl bg-slate-50 border-slate-200 focus-visible:ring-primary/20" />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="lastName" className="text-sm font-medium text-foreground">Last Name</label>
                                            <Input id="lastName" placeholder="Doe" className="h-12 rounded-xl bg-slate-50 border-slate-200 focus-visible:ring-primary/20" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-foreground">Email Address</label>
                                        <Input id="email" type="email" placeholder="john@example.com" className="h-12 rounded-xl bg-slate-50 border-slate-200 focus-visible:ring-primary/20" />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm font-medium text-foreground">Phone Number</label>
                                        <Input id="phone" type="tel" placeholder="+91 98765 43210" className="h-12 rounded-xl bg-slate-50 border-slate-200 focus-visible:ring-primary/20" />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium text-foreground">Your Message</label>
                                        <Textarea
                                            id="message"
                                            placeholder="Tell us about your travel plans..."
                                            className="min-h-[120px] rounded-xl bg-slate-50 border-slate-200 focus-visible:ring-primary/20 resize-none py-3"
                                        />
                                    </div>

                                    <Button className="w-full h-12 rounded-xl text-base gap-2 group transition-all duration-300 hover:shadow-[var(--shadow-orange)]">
                                        Send Message
                                        <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                    </Button>
                                </form>
                            </div>
                        </Reveal>
                    </div>
                </div>

                {/* Map Section */}
                <div className="container-px pb-24">
                    <Reveal delay={0.3}>
                        <div className="w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-card border border-primary/10 relative group">
                            <iframe
                                src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Signet%20Mall,%20Kamrej%20Char%20Rasta,%20Surat,%20Gujarat%20394185+(Maitry%20Holidays)&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="absolute inset-0 grayscale-[0.2] transition-all duration-500 group-hover:grayscale-0"
                            ></iframe>
                        </div>
                    </Reveal>
                </div>
            </main>

            <Footer />
            <FloatingActions />
        </div>
    );
};

export default ContactUs;

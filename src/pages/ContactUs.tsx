import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import AnnouncementBar from "@/components/site/AnnouncementBar";
import FloatingActions from "@/components/site/FloatingActions";
import { Reveal } from "@/lib/motion";
import { useEffect, useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import api from "@/lib/api";
import heroBg from "@/assets/images/chardham_banner_bg.webp";
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
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState<Record<string, string[]>>({});

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const today = new Date();
    const minDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            setErrors({});
            await api.post("/store-enquiries", data);
            toast.success("Message sent successfully!", {
                description: "We will get back to you shortly.",
            });
            (e.target as HTMLFormElement).reset();
            navigate("/thank-you");
        } catch (error: any) {
            console.error("Form submission error:", error);
            if (error.response?.data?.errors) {
                setErrors(error.response.data.errors);
            }
            toast.error(error.response?.data?.message || "Something went wrong", {
                description: "Please try again later or contact us directly.",
            });
        } finally {
            setLoading(false);
        }
    };

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
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 -z-10 bg-black/30 bg-gradient-to-r from-brand-darker/80 via-brand-darker/40 to-transparent lg:from-brand-darker/90 lg:via-brand-darker/40 lg:to-transparent" />

                    <div className="container-px w-full text-center mt-12 md:mt-20 relative z-10">
                        <Reveal>
                            <div className="flex items-center justify-center gap-2 text-white/90 font-medium tracking-wider uppercase text-[14px] mb-4">
                                <PhoneCall className="w-4 h-4 text-primary" />
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
                <div className="container-px pt-16 md:pt-20 pb-4 md:pb-8 relative z-10">
                    <div className="grid gap-8 lg:gap-12 lg:grid-cols-2">
                        {/* Contact Information */}
                        <Reveal delay={0.1}>
                            <div className="h-full rounded-sm bg-white p-8 md:p-12 shadow-card border border-primary/30 flex flex-col">
                                <h2 className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight mb-8">Contact Information</h2>

                                <div className="space-y-8 flex-grow">
                                    <div className="flex items-start gap-5 group cursor-pointer">
                                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-sm bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
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
                                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-sm bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
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
                                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-sm bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
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
                                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-sm bg-primary/10 text-primary">
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
                            <div className="h-full rounded-sm bg-white p-8 md:p-12 shadow-card border border-primary/30">
                                <h2 className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight mb-2">Send us a Message</h2>
                                <p className="text-muted-foreground text-[15px] mb-8">Fill out the form below and we'll get back to you as soon as possible.</p>

                                <form className="space-y-6" onSubmit={onSubmit}>
                                    <div className="grid gap-6 md:grid-cols-2">
                                        <div className="space-y-2">
                                            <label htmlFor="quote-name" className="text-[11px] md:text-[12px] font-bold uppercase tracking-wider text-foreground/100">Full Name</label>
                                            <Input
                                                id="quote-name"
                                                name="full_name"
                                                placeholder="John Doe"
                                                className={`h-12 rounded-sm bg-slate-50 border-slate-200 focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary/20 focus-visible:ring-offset-0 ${errors.full_name ? 'border-red-500' : ''}`}
                                            />
                                            {errors.full_name && <p className="text-[10px] text-red-500 mt-1">{errors.full_name[0]}</p>}
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="quote-mobile" className="text-[11px] md:text-[12px] font-bold uppercase tracking-wider text-foreground/100">Mobile Number</label>
                                            <Input
                                                id="quote-mobile"
                                                name="phone"
                                                type="text"
                                                inputMode="numeric"
                                                pattern="[0-9]*"
                                                onInput={(e) => {
                                                    e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '');
                                                }}
                                                placeholder="9876543210"
                                                className={`h-12 rounded-sm bg-slate-50 border-slate-200 focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary/20 focus-visible:ring-offset-0 ${errors.phone ? 'border-red-500' : ''}`}
                                            />
                                            {errors.phone && <p className="text-[10px] text-red-500 mt-1">{errors.phone[0]}</p>}
                                        </div>
                                    </div>

                                    <div className="grid gap-6 md:grid-cols-2">
                                        <div className="space-y-2">
                                            <label htmlFor="quote-email" className="text-[11px] md:text-[12px] font-bold uppercase tracking-wider text-foreground/100">Email Address</label>
                                            <Input
                                                id="quote-email"
                                                name="email"
                                                type="email"
                                                placeholder="john@example.com"
                                                className={`h-12 rounded-sm bg-slate-50 border-slate-200 focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary/20 focus-visible:ring-offset-0 ${errors.email ? 'border-red-500' : ''}`}
                                            />
                                            {errors.email && <p className="text-[10px] text-red-500 mt-1">{errors.email[0]}</p>}
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="quote-date" className="text-[11px] md:text-[12px] font-bold uppercase tracking-wider text-foreground/100">Travel Date</label>
                                            <Input
                                                id="quote-date"
                                                name="arrival_date"
                                                type="date"
                                                min={minDate}
                                                className={`h-12 rounded-sm bg-slate-50 border-slate-200 focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary/20 focus-visible:ring-offset-0 ${errors.arrival_date ? 'border-red-500' : ''}`}
                                            />
                                            {errors.arrival_date && <p className="text-[10px] text-red-500 mt-1">{errors.arrival_date[0]}</p>}
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="quote-msg" className="text-[11px] md:text-[12px] font-bold uppercase tracking-wider text-foreground/100">Special Requirements</label>
                                        <Textarea
                                            id="quote-msg"
                                            name="message"
                                            placeholder="e.g. Dietary needs, accessible room..."
                                            className={`min-h-[120px] rounded-sm bg-slate-50 border-slate-200 focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary/20 focus-visible:ring-offset-0 resize-none py-3 ${errors.message ? 'border-red-500' : ''}`}
                                        />
                                        {errors.message && <p className="text-[10px] text-red-500 mt-1">{errors.message[0]}</p>}
                                    </div>

                                    <Button type="submit" disabled={loading} className="w-full h-12 rounded-sm text-base gap-2 group transition-all duration-300 hover:shadow-[var(--shadow-orange)]">
                                        {loading ? (
                                            <span className="flex items-center justify-center gap-2">
                                                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                                                Sending...
                                            </span>
                                        ) : (
                                            <>
                                                Send Message
                                                <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                            </>
                                        )}
                                    </Button>
                                </form>
                            </div>
                        </Reveal>
                    </div>
                </div>

                {/* Map Section */}
                <div className="container-px pb-24">
                    <Reveal delay={0.3}>
                        <div className="w-full h-[400px] md:h-[500px] rounded-sm overflow-hidden shadow-card border border-primary/10 relative group">
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

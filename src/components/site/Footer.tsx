import { useState, type FormEvent } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Instagram, Facebook, Twitter, Youtube, ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { Reveal } from "@/lib/motion";
import bgImg from "@/assets/images/68d58496b3e623b2654f2853_newsletter-bg.webp";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const subscribe = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || loading) return;

    setLoading(true);
    try {
      const apiUrl = import.meta.env.VITE_API_BASE_URL || "https://maitryholidays.com/services/api";
      const response = await axios.post(`${apiUrl}/subscribe`, { email });

      if (response.status === 200 || response.status === 201) {
        toast.success("Thank you! Subscription received.");
        setEmail("");
      } else {
        toast.error("Failed to subscribe. Please try again.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-brand-darker text-white">
      {/* Newsletter Section */}
      <section
        aria-label="Newsletter"
        className="relative isolate overflow-hidden border-b border-white/10"
      >
        <img
          src={bgImg}
          alt=""
          aria-hidden
          loading="lazy"
          decoding="async"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />
        {/* Dark overlay to make text readable while keeping image visible */}
        <div className="absolute inset-0 -z-10 bg-black/30 bg-gradient-to-t from-brand-darker to-transparent" />

        <div className="container-px py-16 md:py-24">
          <Reveal className="mx-auto flex max-w-4xl flex-col items-center text-center">
            <h2 className="text-3xl font-bold leading-tight text-white md:text-5xl lg:text-[54px] mb-6">
              Travel smarter with <span className="text-primary italic-display font-normal">Maitry</span>
            </h2>
            <p className="text-[16px] md:text-[18px] font-light leading-relaxed text-white/70 max-w-2xl mb-10">
              Join our community of travelers and receive handpicked packages, discounts, and inspiration delivered straight to your inbox.
            </p>

            <div className="w-full max-w-xl">
              <form onSubmit={subscribe} className="relative flex w-full items-center">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-6 py-4 pr-36 text-[16px] text-white placeholder:text-white/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="absolute right-1 top-1 bottom-1 flex items-center justify-center rounded-full bg-primary px-6 text-[15px] font-semibold text-white transition-transform hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100"
                >
                  {loading ? "Wait..." : "Subscribe"}
                  {!loading && <ArrowRight className="ml-2 h-4 w-4" />}
                </button>
              </form>
              <div className="mt-4 flex items-center justify-center gap-2 text-[13px] font-light text-white/60">
                <span>By subscribing, you agree to our</span>
                <Link to="/privacy-policy" className="text-white underline hover:text-primary transition-colors">Privacy Policy</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Main Footer Links */}
      <div className="bg-brand-darker py-16">
        <div className="container-px">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">

            {/* Column 1: Brand & Social (Spans 4 cols) */}
            <div className="lg:col-span-4 flex flex-col items-start">
              <Logo className="h-24 md:h-32 w-auto -mt-6 opacity-100" variant="light" />
              <p className="text-[14px] font-light leading-relaxed text-white/70 mb-8 max-w-sm">
                Maitry Holidays (A Unit of Shrishti Trip) is committed to providing the best travel experiences. We curate unforgettable journeys across India and beyond.
              </p>

              {/* <div className="flex items-center gap-4">
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-primary hover:border-primary transition-all group">
                  <Instagram className="h-4 w-4 transition-transform group-hover:scale-110" />
                </a>
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-primary hover:border-primary transition-all group">
                  <Facebook className="h-4 w-4 transition-transform group-hover:scale-110" />
                </a>
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-primary hover:border-primary transition-all group">
                  <Twitter className="h-4 w-4 transition-transform group-hover:scale-110" />
                </a>
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-primary hover:border-primary transition-all group">
                  <Youtube className="h-4 w-4 transition-transform group-hover:scale-110" />
                </a>
              </div> */}
            </div>

            {/* Column 2: Quick Links (Spans 2 cols) */}
            <div className="lg:col-span-2">
              <h3 className="mb-6 text-[13px] font-semibold uppercase tracking-widest text-primary">
                Quick Links
              </h3>
              <ul className="flex flex-col gap-4">
                <li><Link to="/" className="text-[14px] font-light text-white/80 hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/packages" className="text-[14px] font-light text-white/80 hover:text-white transition-colors">Popular Packages</Link></li>
                <li><Link to="/about" className="text-[14px] font-light text-white/80 hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="text-[14px] font-light text-white/80 hover:text-white transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            {/* Column 3: Legal & Support (Spans 2 cols) */}
            <div className="lg:col-span-2">
              <h3 className="mb-6 text-[13px] font-semibold uppercase tracking-widest text-primary">
                Legal
              </h3>
              <ul className="flex flex-col gap-4">
                <li><Link to="/privacy-policy" className="text-[14px] font-light text-white/80 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms-conditions" className="text-[14px] font-light text-white/80 hover:text-white transition-colors">Terms & Conditions</Link></li>
                <li><Link to="/contact" className="text-[14px] font-light text-white/80 hover:text-white transition-colors">Help & Support</Link></li>
              </ul>
            </div>

            {/* Column 4: Contact Info (Spans 4 cols) */}
            <div className="lg:col-span-4">
              <h3 className="mb-6 text-[13px] font-semibold uppercase tracking-widest text-primary">
                Get In Touch
              </h3>
              <ul className="flex flex-col gap-5">
                <li className="flex items-start gap-3 text-[14px] font-light text-white/80 leading-relaxed">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-white/50" />
                  <span>Ground Floor, JJ Camp 01, Veer Singh Marg, Shiv Mandir, New Delhi - 110001</span>
                </li>
                <li className="flex items-center gap-3 text-[14px] font-light text-white/80">
                  <Phone className="h-4 w-4 shrink-0 text-white/50" />
                  <a href="tel:+917041260720" className="hover:text-white transition-colors">+91-7041260720</a>
                </li>
                <li className="flex items-center gap-3 text-[14px] font-light text-white/80">
                  <Mail className="h-4 w-4 shrink-0 text-white/50" />
                  <a href="mailto:maitry.holidays13@gmail.com" className="hover:text-white transition-colors">maitry.holidays13@gmail.com</a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/10 bg-brand-darker py-6">
        <div className="container-px text-center">
          <p className="text-[13px] font-light text-white/50">
            © {new Date().getFullYear()} <span className="font-medium text-white">Maitry Holidays</span>. All Rights Reserved.
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;

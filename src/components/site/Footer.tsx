import { useState, type FormEvent } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Instagram, Facebook, Twitter, Youtube, Send, ArrowRight } from "lucide-react";
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
      const apiUrl = import.meta.env.VITE_API_BASE_URL || "https://indiatripholiday.com/services/api";
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
    <footer className="bg-[#1c0600] text-white">
      {/* Newsletter / CTA Section */}
      <section
        aria-label="Newsletter"
        className="relative isolate overflow-hidden border-b border-white/5"
      >
        <img
          src={bgImg}
          alt=""
          aria-hidden
          loading="lazy"
          decoding="async"
          className="absolute inset-0 -z-20 h-full w-full object-cover grayscale-[0.3]"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#1c0600]/95 via-[#1c0600]/80 to-transparent" />
        <div className="absolute inset-0 -z-10 bg-[#1c0600]/40" />

        <div className="container-px py-16 md:py-20">
          <Reveal className="grid items-center gap-8 lg:grid-cols-2">
            <div className="max-w-2xl text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-1 text-primary mb-6">
                {[0, 1, 2, 3, 4].map((i) => (
                  <span key={i} className="text-lg">★</span>
                ))}
                <span className="ml-2 text-[13px] font-light text-white/70">4.6 Rate by 1,24,000+ Reviews</span>
              </div>
              <h2 className="text-3xl font-semibold leading-[1.1] tracking-tight text-white md:text-4xl lg:text-[45px]">
                Travel smarter with 
                <br />
               Shrishti Trip (India Trip Holiday).
              </h2>
              <p className="mt-8 text-[16px] font-light leading-relaxed text-white/70 max-w-md mx-auto lg:mx-0">
                Join our community of travelers and receive handpicked packages, discounts, and inspiration every week.
              </p>
            </div>

            <div className="w-full max-w-lg mx-auto lg:ml-auto text-center lg:text-left">
              <h3 className="mb-6 text-2xl font-medium text-white">Stay up to date</h3>
              <form onSubmit={subscribe} className="flex w-full flex-col gap-4 sm:flex-row">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email ID"
                  className="w-full rounded-full border border-white/10 bg-white px-7 py-4 text-[15px] text-brand-darker placeholder:text-brand-darker/40 focus:outline-none"
                />
                <button 
                  type="submit" 
                  disabled={loading}
                  className="btn-primary whitespace-nowrap px-8 py-4 text-[15px] shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? "Subscribing..." : "Subscribe Free"}
                  {!loading && <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />}
                </button>
              </form>
              <div className="mt-6 flex items-center justify-center lg:justify-start gap-3 text-[14px] font-light text-white/80">
                <span className="h-5 w-5 flex items-center justify-center rounded-full border border-white/30 text-[10px]">○</span>
                <span>By subscribing you agree to our <Link to="/privacy-policy" className="underline hover:text-primary transition-colors">Privacy Policy</Link></span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 bg-[#0b0200] py-8 pb-2">
        <div className="container-px">
          <div className="flex flex-col gap-8">
            {/* Logo, Links, Brand & Office Info */}
            <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-4 border-b border-white/5 pb-10 items-start text-center md:text-left">
              {/* Column 1: Logo */}
              <div className="flex justify-center md:justify-start">
                <Logo className="h-28 md:h-32 w-auto opacity-100 transition-opacity hover:opacity-90" variant="light" />
              </div>

              {/* Column 2: Brand & Links */}
              <div>
                  <div className="flex flex-col gap-3 items-center md:items-start mb-2">
                  <a className="text-[11px] font-medium uppercase tracking-[0.2em] text-primary">
                    Contact Us
                  </a>
                </div>
                <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.2em] text-white">
                  India Trip Holiday
                  <span className="block mt-1 text-[10px] font-light normal-case text-white tracking-normal">(A Unit of Shrishti Trip)</span>
                </p>
              
                
                
                <p className="text-[13px] font-light leading-relaxed text-white">
                  Ground Floor, JJ Camp 01, Veer Singh Marg, Shiv Mandir, New Delhi - 110001
                </p>
              </div>

              {/* Column 3: Disclaimer & Legal */}
              <div className="lg:col-span-2">
                <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.2em] text-primary">
                  Disclaimer
                </p>
                <p className="text-[12px] font-light leading-relaxed text-white mb-6">
                  India Trip Holiday is a travel brand operated by Shrishti Trip. While we strive for accuracy, all tour prices and itineraries are subject to change based on availability and seasonal factors.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start">
                  <Link to="/privacy-policy" className="text-[13px] font-light text-white hover:text-primary transition-colors whitespace-nowrap">
                    Privacy Policy
                  </Link>
                  <Link to="/terms-conditions" className="text-[13px] font-light text-white hover:text-primary transition-colors whitespace-nowrap">
                    Terms & Conditions
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom Part: Copyright */}
            <div className="text-center mb-4">
              <p className="text-[13px] font-light tracking-wide text-white">
                © 2026 <span className=" font-medium text-primary uppercase tracking-widest">Shrishti Trip (India Trip Holiday)</span>. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;

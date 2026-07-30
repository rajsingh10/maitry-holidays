import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Clock, Instagram, Facebook, ArrowRight, MessageCircle } from "lucide-react";
import { Reveal } from "@/lib/motion";
import api from "@/lib/api";
import { Link } from "react-router-dom";
import FAQ from "./FAQ";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string[]>>({});

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      setErrors({});
      // The user will add the specific endpoint path here later
      await api.post("/store-enquiries", data);

      toast.success("Thanks — we've received your request!", {
        description: "A travel expert will contact you within 24 hours.",
      });
      (e.target as HTMLFormElement).reset();
    } catch (error: any) {
      console.error("Form submission error:", error);
      if (error.response?.data?.errors) {
        setErrors(error.response.data.errors);
      }
      toast.error(error.response?.data?.message || "Something went wrong", {
        description: "Please try again later or call us directly.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact-section" aria-label="Contact" className="bg-brand-cream ">
      <div className="container-px ">
        {/* Header */}
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-[13px] font-light uppercase tracking-widest text-primary">Get in Touch</p>
          <h2 className="mt-3 text-4xl font-semibold leading-[1.05] text-foreground md:text-5xl lg:text-[56px]">
            Ready for your next
            <br />
            <span className="italic-display text-primary">adventure?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[16px] font-light leading-relaxed text-muted-foreground">
            Contact us today and let our travel experts create a journey that's uniquely yours.
          </p>
        </Reveal>

        <div className="mt-10 md:mt-16 grid items-start gap-12 lg:grid-cols-2 lg:gap-20 pb-20">
          {/* Left Side: Contact Info */}
          <Reveal delay={0.1} className="hidden lg:block">
            <div className="space-y-8 md:space-y-10 ">
              <div>
                <h3 className="text-2xl font-semibold text-foreground">Contact Information</h3>
                <p className="mt-2 text-muted-foreground">Reach out to us via any of these channels.</p>
              </div>

              <div className="grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-1">
                {[
                  { icon: Mail, label: "Email us", value: "info@shrishtitrip.com", sub: "Response within 24h" },
                  { icon: Phone, label: "Call us", value: "+91-7042426335, 8920909501 ", sub: "Mon-Fri 9am - 6pm" },
                  { icon: MapPin, label: "Visit us", value: "JJ Camp-01, Shiv Mandir Bhai Veer Singh Marg, New Delhi-110001", sub: "By appointment only" },
                  { icon: Clock, label: "Business Hours", value: "24/7 Concierge", sub: "For active travelers" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary shadow-soft">
                      <item.icon className="h-5 w-5 text-white" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-[13px] font-medium text-muted-foreground uppercase tracking-tight">{item.label}</p>
                      {item.label === "Call us" ? (
                        <a href={`tel:+917042426335`} className="text-[15px] font-semibold text-foreground hover:text-primary transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-[15px] font-semibold text-foreground">{item.value}</p>
                      )}
                      <p className="text-[13px] text-muted-foreground/80">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <p className="text-[13px] font-medium text-muted-foreground uppercase tracking-tight">Follow our journey</p>
                <div className="mt-3 flex gap-4">
                  {[
                    { Icon: Instagram, href: "https://www.instagram.com/shrishti_trip/" },
                    { Icon: Facebook, href: "https://www.facebook.com/shrishtitrip.in/" },
                    { Icon: MessageCircle, href: "https://wa.me/917042426335"}
                  ].map(({ Icon, href }, i) => (
                    <a
                      key={i}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/10 bg-primary transition-all hover:bg-primary hover:text-white"
                    >
                      <Icon className="h-4 w-4 text-white" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Side: FAQ */}
          <Reveal delay={0.2} className="w-full">
            <FAQ />
          </Reveal>
        </div>

      </div>
    </section>
  );
};

export default Contact;



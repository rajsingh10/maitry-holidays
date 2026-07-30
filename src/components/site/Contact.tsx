import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Reveal } from "@/lib/motion";
import FAQ from "./FAQ";
import mapBg from "@/assets/images/contact-map-bg.png";

const Contact = () => {
  return (
    <section id="contact-section" aria-label="Contact" className="bg-slate-50 section-pad relative overflow-hidden">
      {/* Full UI Background Image */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30 mix-blend-multiply" 
        style={{ 
          backgroundImage: `url(${mapBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      <div className="container-px relative z-10">
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
          {/* Fixed the bug here: removed 'hidden lg:block' so it shows on mobile */}
          <Reveal delay={0.1} className="w-full">
            <div className="space-y-8 md:space-y-10 ">
              <div>
                <h3 className="text-2xl font-semibold text-foreground">Contact Information</h3>
                <p className="mt-2 text-muted-foreground">Reach out to us via any of these channels.</p>
              </div>

              <div className="grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-1">
                {[
                  { icon: Mail, label: "Email us", value: "maitry.holidays13@gmail.com", sub: "Response within 24h" },
                  { icon: Phone, label: "Call us", value: "+91-7041260720", sub: "Mon-Fri 9am - 6pm" },
                  {
                    icon: MapPin, label: "Visit us", value: "F-39, signet mall, kamrej char rasta, surat, Gujarat \nZip code: 394185", sub: "By appointment only"
                  },
                  { icon: Clock, label: "Business Hours", value: "24/7 Concierge", sub: "For active travelers" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-primary shadow-soft">
                      <item.icon className="h-5 w-5 text-white" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-[13px] font-medium text-muted-foreground uppercase tracking-tight">{item.label}</p>
                      {item.label === "Call us" ? (
                        <a href={`tel:+917041260720`} className="text-[15px] font-semibold text-foreground hover:text-primary transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-[15px] font-semibold text-foreground whitespace-pre-line">{item.value}</p>
                      )}
                      <p className="text-[13px] text-muted-foreground/80">{item.sub}</p>
                    </div>
                  </div>
                ))}
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



import { Reveal } from "@/lib/motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import imgLeh from "@/assets/images/INDIA.webp";
import imgPangong from "@/assets/images/himachal.webp";
import imgNubra from "@/assets/images/uttarakhand.webp";
import imgTirupati from "@/assets/images/hero_india.webp";
import imgVellore from "@/assets/images/hero_kerala.webp";
import imgKanyakumari from "@/assets/images/hero_chardham.webp";

const offers = [
  {
    id: 1,
    tag: "Special Offer",
    title: "Royal Ladakh Tour",
    subtitle: "Adventure + Nature Experience",
    price: "₹39,999",
    features: [
      "Tempo Traveller / SUV",
      "Hotel + Camp Stay",
      "Breakfast + Dinner",
      "All Sightseeing Included"
    ],
    locations: ['Srinagar', 'Gulmarg', 'Sonmarg', 'Pehalgam', 'Zoji La Pass', 'Kargil', 'Atal Tunnel', 'Jispa'],
    images: [
      { src: imgLeh, label: "Leh City" },
      { src: imgPangong, label: "Pangong Lake" },
      { src: imgNubra, label: "Nubra Valley" }
    ]
  },
  {
    id: 2,
    tag: "Limited Seats",
    title: "Divya Darshan Bharat Yatra",
    subtitle: "South India Divine Journey (9N/10D)",
    price: "₹28,000",
    features: [
      "9 Nights / 10 Days",
      "Comfortable Hotel Stay",
      "Pure Veg Food",
      "Safe & Best Service"
    ],
    locations: ['Tirupati', 'Vellore', 'Madurai', 'Rameshwaram', 'Kanyakumari', 'Trivandrum', 'Kovalam', 'Srisailam'],
    images: [
      { src: imgTirupati, label: "Tirupati" },
      { src: imgVellore, label: "Vellore" },
      { src: imgKanyakumari, label: "Kanyakumari" }
    ]
  }
];

const PromoBanner = () => {
  return (
    <section className="py-16 md:py-20 bg-slate-50">
      <div className="container-px">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4 uppercase tracking-tight">
              Our <span className="text-primary italic-display">Special</span> Offers
            </h2>
            <p className="text-muted-foreground text-lg">
              Book your dream journey today with our exclusive, limited-time travel packages.
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 md:gap-10">
            {offers.map((offer) => (
              <div key={offer.id} className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] transition-all duration-300">

                {/* Images Top Side */}
                <div className="w-full flex gap-3 h-[250px] sm:h-[300px] mb-8">
                  <div className="w-1/2 h-full flex flex-col gap-3">
                    <div className="relative w-full h-2/3 rounded-sm overflow-hidden shadow-sm group">
                      <img src={offer.images[0].src} alt={offer.images[0].label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white font-bold text-sm sm:text-base tracking-wide">{offer.images[0].label}</div>
                    </div>
                    <div className="relative w-full h-1/3 rounded-sm overflow-hidden shadow-sm group">
                      <img src={offer.images[1].src} alt={offer.images[1].label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute bottom-3 left-4 text-white font-bold text-xs sm:text-sm tracking-wide">{offer.images[1].label}</div>
                    </div>
                  </div>
                  <div className="w-1/2 h-full flex flex-col gap-3">
                    <div className="relative w-full h-full rounded-sm overflow-hidden shadow-sm group">
                      <img src={offer.images[2].src} alt={offer.images[2].label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white font-bold text-sm sm:text-base tracking-wide">{offer.images[2].label}</div>
                    </div>
                  </div>
                </div>

                {/* Content Bottom Side */}
                <div className="w-full flex-grow flex flex-col">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] sm:text-[11px] font-bold uppercase tracking-widest mb-5 self-start">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    {offer.tag}
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground mb-2 leading-tight uppercase">
                    {offer.title}
                  </h3>
                  <p className="text-base sm:text-lg text-muted-foreground font-medium mb-6">
                    {offer.subtitle}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 mb-6">
                    {offer.features.map((item, i) => (
                      <div key={i} className="flex items-center gap-2.5">
                        <div className="flex items-center justify-center w-5 h-5 rounded-full bg-primary/10 shrink-0">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                        </div>
                        <span className="text-[13px] sm:text-[14px] font-semibold text-foreground/80">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                    {offer.locations.map((place) => (
                      <span key={place} className="text-[10px] font-bold uppercase tracking-wider text-slate-600 bg-slate-100 px-2.5 py-1.5 rounded-sm">
                        {place}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 sm:p-6 bg-slate-50 rounded-2xl border border-slate-100 mt-auto">
                    <div className="text-center sm:text-left">
                      <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Get an enquiry At Just</p>
                      <div className="flex items-baseline justify-center sm:justify-start gap-1">
                        <span className="font-display text-3xl sm:text-4xl font-extrabold text-foreground leading-none">{offer.price}</span>
                        <span className="text-xs sm:text-sm font-bold text-muted-foreground">/ Person</span>
                      </div>
                    </div>

                    <Link
                      to="/contact"
                      className="btn-primary w-full sm:w-auto rounded-xl text-[14px] py-3.5 px-6 font-bold group flex items-center justify-center gap-2 shadow-[var(--shadow-blue)] shrink-0"
                    >
                      Get an enquiry
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default PromoBanner;

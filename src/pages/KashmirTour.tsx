import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import AnnouncementBar from "@/components/site/AnnouncementBar";
import FloatingActions from "@/components/site/FloatingActions";
import SEO from "@/components/SEO";
import { Reveal } from "@/lib/motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/images/mini-switzerland.webp";
import {
  MapPin,
  Calendar,
  Clock,
  ArrowRight,
  ArrowLeft,
  Phone,
  MessageCircle,
  Check,
  ChevronRight,
  Info,
  Hotel,
  Utensils,
  Car,
  Compass,
  Eye,
  Sparkles,
  AlertTriangle,
  Train,
  Landmark,
  Waves,
  ShoppingBag,
  Snowflake,
  Mountain,
  Camera
} from "lucide-react";

// Itinerary Data for 7 Days
const itinerary = [
  {
    day: 1,
    title: "Surat to Jammu",
    description: "Board the train from Surat for Jammu. Relax and enjoy the overnight journey as you begin your exciting journey towards the beautiful valley of Kashmir.",
    icon: Train,
    stay: "Overnight Train Journey",
    activities: [
      "Board the train from Surat Railway Station",
      "Begin your exciting journey towards Kashmir"
    ]
  },
  {
    day: 2,
    title: "Jammu to Srinagar",
    description: "Arrive at Jammu Railway Station and proceed by vehicle to Srinagar. Drive through scenic mountain routes and beautiful landscapes before checking into your Srinagar hotel.",
    icon: Car,
    stay: "Srinagar",
    activities: [
      "Arrive at Jammu Railway Station",
      "Proceed by comfortable vehicle to Srinagar",
      "📍 En Route Udhampur: Drive through beautiful pine forests and hills",
      "📍 Chenani–Nashri Tunnel: Travel through India's longest bi-directional highway tunnel",
      "📍 Ramban, Banihal, Qazigund: Witness changing valley terrain",
      "🍽️ Experience beautiful mountain landscapes and enjoy the famous local Rajma Chawal (at your own preference during the journey)",
      "Arrive in Srinagar and check in to the hotel"
    ]
  },
  {
    day: 3,
    title: "Srinagar Sightseeing",
    description: "After breakfast, enjoy a full-day sightseeing tour of Srinagar. Discover beautiful Mughal gardens, historic temples, and local shopping hubs.",
    icon: Compass,
    stay: "Srinagar",
    activities: [
      "🌸 Mughal Gardens: Admire the beautifully landscaped Mughal-era gardens.",
      "🌺 Nishat Garden: Known as the 'Garden of Bliss', overlooking the picturesque Dal Lake.",
      "🌷 Shalimar Garden: A magnificent Mughal garden built by Emperor Jahangir for his wife Nur Jahan.",
      "🛕 Shankaracharya Temple: A historic hilltop temple dedicated to Lord Shiva, offering panoramic views of Srinagar city.",
      "🛍️ Lal Chowk: Explore the famous shopping and cultural hub of Srinagar."
    ]
  },
  {
    day: 4,
    title: "Excursion to Gulmarg",
    description: "After breakfast, depart for Gulmarg, one of Kashmir's most famous hill stations. Spend the day enjoying the snow-covered landscapes and winter activities.",
    icon: Snowflake,
    stay: "Srinagar",
    activities: [
      "❄️ Enjoy the stunning snow-covered landscapes and winter sports.",
      "🧥 Optional Rent: Warm clothes and snow boots are available for rent locally (at your own expense).",
      "🚡 Gulmarg Gondola Ride (Optional): Experience Asia's highest cable car ride (Tickets should be booked independently online in advance at own expense).",
      "Spend the day enjoying scenic beauty and snowfall (season permitting)."
    ]
  },
  {
    day: 5,
    title: "Srinagar to Sonamarg",
    description: "After breakfast, proceed to Sonamarg, popularly known as the 'Meadow of Gold', nestled in the high Himalayas. Take in spectacular glaciers and clear rivers.",
    icon: Mountain,
    stay: "Sonamarg",
    activities: [
      "🏔️ Thajiwas Glacier: Trek or take an optional pony ride (at your own expense) to see the glacier.",
      "🌊 Sindh River: Relax near the crystal-clear river flowing through the valley.",
      "📸 Capture spectacular mountain scenery and natural alpine beauty."
    ]
  },
  {
    day: 6,
    title: "Sonamarg to Pahalgam",
    description: "After breakfast at 7:00 AM, depart for Pahalgam. Pass through beautiful apple orchards and explore Pahalgam's peaceful valley surroundings.",
    icon: Compass,
    stay: "Pahalgam",
    activities: [
      "🍎 Pass through scenic Kashmir apple orchards en route.",
      "🌊 Enjoy scenic views of rivers and valleys throughout the mountain drive.",
      "Hotel check-in upon arrival in Pahalgam.",
      "Explore local attractions of Pahalgam by pony or local jeep (optional and at your own expense)."
    ]
  },
  {
    day: 7,
    title: "Pahalgam to Jammu – Return Journey",
    description: "After breakfast, depart from Pahalgam for Jammu Railway Station. Board the return train to Surat, concluding your memorable Kashmir tour.",
    icon: Train,
    stay: "Tour Completed",
    activities: [
      "Depart from Pahalgam for Jammu in the morning",
      "Arrive at Jammu Railway Station",
      "Board the return train to Surat",
      "Conclude your journey with sweet memories of Kashmir valley"
    ]
  }
];

const inclusions = [
  "Train journey as per the itinerary",
  "All sightseeing and transfers by comfortable Tempo Traveller",
  "Accommodation in comfortable 3-Star Hotels",
  "Delicious Gujarati meals prepared by an experienced Gujarati cook",
  "2 bottles of mineral water per person every day"
];

const exclusions = [
  "Warm clothing and snow boots rental in Gulmarg (available locally)",
  "Gulmarg Gondola cable car tickets (must be booked online in advance)",
  "Pony rides, local jeep rides, and other optional activities",
  "Personal expenses, laundry, telephone calls, tips, and medicines",
  "GST & travel insurance"
];

const getActivityIconAndText = (text: string) => {
  const emojis = ["🌸", "🌺", "🌷", "🛕", "🛍️", "❄️", "🧥", "🚡", "🏔️", "🌊", "📸", "🍎", "📍", "🍽️"];
  let matchedEmoji = "";
  for (const emoji of emojis) {
    if (text.startsWith(emoji)) {
      matchedEmoji = emoji;
      break;
    }
  }

  if (!matchedEmoji) {
    return {
      icon: Check,
      iconColor: "text-emerald-500",
      text: text
    };
  }

  const cleanText = text.slice(matchedEmoji.length).trim();

  switch (matchedEmoji) {
    case "🌸":
    case "🌺":
    case "🌷":
      return { icon: Sparkles, iconColor: "text-rose-500", text: cleanText };
    case "🛕":
      return { icon: Landmark, iconColor: "text-primary", text: cleanText };
    case "🛍️":
      return { icon: ShoppingBag, iconColor: "text-primary", text: cleanText };
    case "❄️":
    case "🏔️":
      return { icon: Mountain, iconColor: "text-sky-500", text: cleanText };
    case "🌊":
      return { icon: Waves, iconColor: "text-primary", text: cleanText };
    case "📸":
      return { icon: Camera, iconColor: "text-primary", text: cleanText };
    case "🍎":
      return { icon: Sparkles, iconColor: "text-rose-600", text: cleanText };
    case "📍":
      return { icon: MapPin, iconColor: "text-accent", text: cleanText };
    case "🍽️":
      return { icon: Utensils, iconColor: "text-accent", text: cleanText };
    default:
      return { icon: Check, iconColor: "text-emerald-500", text: cleanText };
  }
};

const KashmirTour = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <SEO
        title="Kashmir Tour Package: Paradise on Earth | Maitry Holidays"
        description="Book our 7-Day premium Kashmir Tour Package. Explore Srinagar, Gulmarg, Sonamarg, and Pahalgam with comfortable stays, train travel & Gujarati meals."
      />
      <AnnouncementBar />
      <Navbar />

      {/* Hero Section */}
      <section className="relative isolate flex items-center overflow-hidden py-24 md:py-32 min-h-[450px] md:min-h-[550px] bg-brand-darker">
        <div className="absolute inset-0 -z-20 h-full w-full">
          <img
            src={heroBg}
            alt="Kashmir Tour Hero"
            className="absolute inset-0 h-full w-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-brand-darker/60 bg-gradient-to-t from-brand-darker via-brand-darker/90 to-black/70" />
        </div>

        <div className="container-px relative z-10 w-full mt-12">
          <Link
            to="/packages"
            className="inline-flex items-center gap-2 text-white/80 hover:text-accent font-semibold text-[14px] mb-6 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Tour Packages</span>
          </Link>

          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-white font-semibold tracking-wider uppercase text-[11px] mb-6">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span>Paradise on Earth</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-4 leading-tight">
              Kashmir <span className="italic-display text-accent font-normal block sm:inline">Tour Package</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 font-light max-w-3xl leading-relaxed mb-6">
              Discover the breathtaking beauty of Kashmir, famous for its snow-covered mountains, lush valleys, pristine lakes, colorful gardens, and unforgettable landscapes. Complete with pure vegetarian Gujarati meals and comfortable stays.
            </p>
            <div className="flex flex-wrap gap-4 text-white/80 text-[14px]">
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-accent" /> 7 Days / 6 Nights</span>
              <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-accent" /> Surat to Surat</span>
              <span className="flex items-center gap-1.5"><Hotel className="w-4 h-4 text-accent" /> 3-Star Hotel Stays</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Package Quick Info Grid */}
      <section className="relative z-20 -mt-10 mb-16">
        <div className="container-px">
          <div className="grid gap-8 lg:grid-cols-12 items-start">
            {/* Left Main Content */}
            <div className="lg:col-span-8 space-y-12">

              {/* Quick Summary Cards */}
              <Reveal>
                <div className="bg-white p-6 md:p-8 rounded-sm border border-border/80 shadow-soft">
                  <h2 className="text-2xl font-bold mb-6 text-foreground border-b pb-4 flex items-center gap-2">
                    <Compass className="w-6 h-6 text-primary" />
                    Yatra Overview
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Kashmir is one of India's most breathtakingly beautiful locations, renowned worldwide as "Paradise on Earth." This tour covers the spectacular cities of Srinagar, Gulmarg, Sonamarg, and Pahalgam. Enjoy comfortable 3-star hotel stays, transfers by comfortable Tempo Traveller, and delicious Gujarati meals prepared by our professional cook.
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-brand-cream/50 p-4 rounded-sm border border-border/50 text-center">
                      <Calendar className="w-5 h-5 text-primary mx-auto mb-2" />
                      <span className="block text-[11px] uppercase tracking-wider text-muted-foreground font-bold">Duration</span>
                      <span className="text-sm font-semibold text-foreground">7 Days</span>
                    </div>
                    <div className="bg-brand-cream/50 p-4 rounded-sm border border-border/50 text-center">
                      <Hotel className="w-5 h-5 text-primary mx-auto mb-2" />
                      <span className="block text-[11px] uppercase tracking-wider text-muted-foreground font-bold">Stays</span>
                      <span className="text-sm font-semibold text-foreground">3-Star Hotels</span>
                    </div>
                    <div className="bg-brand-cream/50 p-4 rounded-sm border border-border/50 text-center">
                      <Utensils className="w-5 h-5 text-primary mx-auto mb-2" />
                      <span className="block text-[11px] uppercase tracking-wider text-muted-foreground font-bold">Meals</span>
                      <span className="text-sm font-semibold text-foreground">Veg Gujarati Meals</span>
                    </div>
                    <div className="bg-brand-cream/50 p-4 rounded-sm border border-border/50 text-center">
                      <Car className="w-5 h-5 text-primary mx-auto mb-2" />
                      <span className="block text-[11px] uppercase tracking-wider text-muted-foreground font-bold">Transport</span>
                      <span className="text-sm font-semibold text-foreground">Tempo Traveller</span>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Day-by-Day Itinerary */}
              <div>
                <Reveal className="mb-8">
                  <h2 className="text-3xl font-bold text-foreground flex items-center gap-2">
                    <Compass className="w-8 h-8 text-primary" />
                    Day-Wise Itinerary
                  </h2>
                  <p className="text-muted-foreground mt-2 font-light">
                    Follow your journey day by day. All transfers, hotel accommodations, and sightseeing excursions are carefully coordinated.
                  </p>
                </Reveal>

                <div className="relative border-l-2 border-primary/20 ml-4 md:ml-6 space-y-12 pb-4">
                  {itinerary.map((dayPlan, index) => {
                    const DayIcon = dayPlan.icon;
                    return (
                      <Reveal key={dayPlan.day} delay={index * 0.05}>
                        <div className="relative pl-8 md:pl-10 group">
                          {/* Dot / Icon container */}
                          <div className="absolute -left-[19px] top-0 flex items-center justify-center w-9 h-9 rounded-full bg-primary text-white border-4 border-background group-hover:scale-110 transition-transform duration-300 shadow-md">
                            <DayIcon className="w-4 h-4" />
                          </div>

                          <div className="bg-white p-6 rounded-sm border border-border/80 shadow-soft hover:shadow-md transition-shadow duration-300">
                            {/* Header details */}
                            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                              <span className="px-3 py-1 bg-accent/10 text-accent text-[11px] font-extrabold uppercase tracking-wider rounded-full">
                                Day {dayPlan.day}
                              </span>
                            </div>

                            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                              {dayPlan.title}
                            </h3>

                            <p className="text-muted-foreground leading-relaxed text-[15px] mb-4">
                              {dayPlan.description}
                            </p>

                            {/* Activities / Highlights */}
                            {dayPlan.activities && dayPlan.activities.length > 0 && (
                              <div className="mt-4">
                                <span className="block text-[11px] uppercase tracking-wider text-primary font-extrabold mb-2">
                                  Highlights & Sightseeing
                                </span>
                                <ul className="grid gap-2 sm:grid-cols-1 text-sm text-muted-foreground">
                                  {dayPlan.activities.map((act, aIdx) => {
                                    const { icon: ActivityIcon, iconColor, text: activityText } = getActivityIconAndText(act);
                                    return (
                                      <li key={aIdx} className="flex items-start gap-2.5">
                                        <ActivityIcon className={`w-4 h-4 shrink-0 mt-0.5 ${iconColor}`} strokeWidth={ActivityIcon === Check ? 3 : 2.5} />
                                        <span className="leading-normal">{activityText}</span>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </div>
                            )}

                            {/* Night stay details */}
                            <div className="mt-4 pt-3 border-t border-dashed border-border/60 flex items-center gap-2 text-sm">
                              <Hotel className="w-4 h-4 text-primary shrink-0" />
                              <span className="text-muted-foreground">Night Stay:</span>
                              <span className="font-semibold text-foreground">{dayPlan.stay}</span>
                            </div>
                          </div>
                        </div>
                      </Reveal>
                    );
                  })}
                </div>
              </div>

              {/* Inclusions & Exclusions */}
              <div className="grid gap-8 md:grid-cols-2">
                <Reveal>
                  <div className="bg-emerald-50/50 p-6 md:p-8 rounded-sm border border-emerald-100 h-full">
                    <h3 className="text-xl font-bold text-emerald-900 mb-6 flex items-center gap-2">
                      <Check className="w-5 h-5 text-emerald-600" strokeWidth={3} />
                      Package Inclusions
                    </h3>
                    <ul className="space-y-4">
                      {inclusions.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-[14px] leading-relaxed text-emerald-800 font-medium">
                          <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-sm bg-emerald-500 text-white shadow-sm">
                            <Check className="h-3 w-3" strokeWidth={3} />
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>

                <Reveal>
                  <div className="bg-orange-50/50 p-6 md:p-8 rounded-sm border border-orange-100 h-full">
                    <h3 className="text-xl font-bold text-orange-950 mb-6 flex items-center gap-2">
                      <Info className="w-5 h-5 text-accent" />
                      Package Exclusions
                    </h3>
                    <ul className="space-y-4">
                      {exclusions.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-[14px] leading-relaxed text-orange-900 font-medium">
                          <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-sm bg-accent text-white shadow-sm">
                            <span className="text-[10px] font-extrabold font-sans">✕</span>
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </div>

              {/* Important Notes & Travel Guidelines */}
              <Reveal>
                <div className="bg-amber-50/50 p-6 md:p-8 rounded-sm border border-amber-200">
                  <h3 className="text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-amber-600" />
                    Important Notes & Guidelines
                  </h3>
                  <div className="space-y-3 text-[14px] text-amber-800 font-medium leading-relaxed">
                    <p className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>Warm clothing and snow boots in Gulmarg are available on rent locally and are not included in the package.</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>Gulmarg Gondola ride tickets must be booked online in advance by guests and are subject to availability.</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>Pony rides, local jeep rides, and other optional adventure activities are at your own expense.</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>The itinerary is subject to adjustment depending on local weather conditions and mountain road accessibility.</span>
                    </p>
                  </div>
                </div>
              </Reveal>

            </div>

            {/* Sidebar Sticky / Floating Info Panel */}
            <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
              <Reveal>
                <div className="bg-brand-dark text-white p-6 md:p-8 rounded-sm border border-white/10 shadow-xl relative overflow-hidden">
                  {/* Background overlay */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/20 rounded-full blur-2xl -z-10"></div>

                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-accent mb-2 block">Holiday Tour Package</span>
                  <h3 className="text-2xl font-bold leading-tight mb-4">Kashmir Tour (7 Days)</h3>

                  <div className="border-t border-white/10 my-4 pt-4">
                    <span className="text-[11px] uppercase text-white/60 tracking-wider font-semibold block">Departure Date</span>
                    <div className="flex items-baseline gap-1.5 mt-1">
                      <span className="font-display text-2xl font-extrabold text-accent leading-none">10 November 2026</span>
                    </div>
                  </div>

                  <div className="space-y-3.5 my-6 text-sm text-white/90">
                    <div className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-accent shrink-0" strokeWidth={3} />
                      <span>Srinagar Dal Lake & Mughal Gardens</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-accent shrink-0" strokeWidth={3} />
                      <span>Excursion to Gulmarg & Sonamarg</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-accent shrink-0" strokeWidth={3} />
                      <span>Pahalgam Valley & Apple Orchards</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-accent shrink-0" strokeWidth={3} />
                      <span>3-Star Stays & Pure Veg Gujarati Meals</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Link to="/contact" className="w-full btn-primary !bg-accent hover:bg-accent/95 text-white flex items-center justify-center gap-2 rounded-sm py-4 font-bold tracking-wider text-[15px] transition-transform hover:-translate-y-0.5 hover:shadow-[var(--shadow-orange)]">
                      Enquiry Now
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <a href="tel:+917041260720" className="w-full flex items-center justify-center gap-2 rounded-sm border border-white/20 bg-white/5 hover:bg-white/10 py-4 font-bold text-[15px] transition-colors">
                      <Phone className="w-4 h-4 text-accent" />
                      <span>Call +91 70412 60720</span>
                    </a>

                    <a href="https://wa.me/917041260720?text=Hi%20Maitry%20Holidays,%20I%20am%20interested%20in%20booking%20the%20Kashmir%20Tour%207%20Days%20package." target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 rounded-sm bg-emerald-600 hover:bg-emerald-700 py-4 font-bold text-[15px] transition-colors">
                      <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </Reveal>

              {/* Office & Address info card */}
              <Reveal>
                <div className="bg-white p-6 rounded-sm border border-border/80 shadow-soft">
                  <h4 className="text-base font-bold text-foreground mb-4 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    Contact details
                  </h4>
                  <div className="space-y-4 text-sm text-muted-foreground">
                    <div>
                      <span className="block font-bold text-foreground">Maitry Holidays</span>
                      <span className="block mt-1 leading-relaxed">
                        F-39, Signet Mall,<br />
                        Kamrej Char Rasta, Surat,<br />
                        Gujarat – 394185
                      </span>
                    </div>
                    <div className="pt-3 border-t border-border/60 text-xs font-semibold uppercase text-accent tracking-wider">
                      Save Money • Safe Journey
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      <Footer />
      <FloatingActions />
    </div>
  );
};

export default KashmirTour;

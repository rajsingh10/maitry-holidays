import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import AnnouncementBar from "@/components/site/AnnouncementBar";
import FloatingActions from "@/components/site/FloatingActions";
import { renderTextWithHighlights } from "@/lib/highlight";
import SEO from "@/components/SEO";
import { Reveal, motion } from "@/lib/motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import chardhamCardImg from "@/assets/images/chardham_yatra.webp";
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
  Bus,
  Landmark
} from "lucide-react";

// Itinerary Data for 6 Days
const itinerary = [
  {
    day: 1,
    title: "Surat to Pune",
    description: "Report at the boarding point in Surat by 3:00 AM. Depart for Pune by luxury bus. Relax and enjoy a comfortable overnight journey to Pune.",
    icon: Bus,
    stay: "Pune",
    activities: [
      "Report at boarding point by 3:00 AM",
      "Depart from Surat by luxury bus",
      "Comfortable overnight travel"
    ]
  },
  {
    day: 2,
    title: "Morgaon – Siddhatek",
    description: "After breakfast with tea/coffee, proceed towards Morgaon (approx. 490 km, ~10 hours travel time). Upon arrival, check in to the hotel, freshen up, and visit the first temple of the Ashtavinayak Yatra. Later, proceed to Siddhatek to visit the second temple, then return to the hotel.",
    icon: Sparkles,
    stay: "Morgaon",
    metrics: {
      distance: "490 km",
      time: "Around 10 Hours"
    },
    activities: [
      "🛕 Shree Mayureshwar Temple – Morgaon: The first and most important temple of the Ashtavinayak pilgrimage. Lord Ganesha is worshipped here as Mayureshwar, who is believed to have defeated the demon Sindhu while riding a peacock.",
      "🛕 Shree Siddhivinayak Temple – Siddhatek: One of the rare temples where Lord Ganesha's trunk bends to the right. According to Hindu mythology, Lord Vishnu performed penance here and attained success (Siddhi) with Lord Ganesha's blessings."
    ]
  },
  {
    day: 3,
    title: "Theur – Ranjangaon – Ozar",
    description: "After breakfast, begin the day's pilgrimage covering three sacred Ganesha temples. Visit Theur, Ranjangaon, and Ozar, and check in at Ozar for the night stay.",
    icon: Compass,
    stay: "Ozar",
    activities: [
      "🛕 Shree Chintamani Temple – Theur: Famous for removing worries and mental stress. Lord Ganesha is worshipped here as Chintamani, the remover of anxiety. This temple is considered one of the most revered Swayambhu Ganesh temples.",
      "🛕 Shree Mahaganpati Temple – Ranjangaon: It is believed that Lord Shiva worshipped Lord Ganesha here before defeating the demon Tripurasura. The temple houses a powerful self-manifested idol of Lord Mahaganpati.",
      "🛕 Shree Vighneshwar Temple – Ozar: Lord Ganesha is worshipped here as the Remover of Obstacles (Vighna). Sincere prayers at this temple are believed to remove difficulties and obstacles from one's life."
    ]
  },
  {
    day: 4,
    title: "Lenyadri – Bhimashankar – Pali – Mahad",
    description: "After breakfast, proceed to Lenyadri to visit the unique cave temple. Next, head to Bhimashankar to seek blessings at the sacred Jyotirlinga. Continue your pilgrimage to Pali and Mahad, and return to the hotel.",
    icon: MapPin,
    stay: "Ozar",
    activities: [
      "🛕 Shree Girijatmaj Temple – Lenyadri: Reach the temple by climbing 283 steps. This unique temple is carved into a mountain cave and has no supporting pillars. Goddess Parvati performed severe penance here for 13 years, and Lord Ganesha was born at this sacred place.",
      "🛕 Bhimashankar Jyotirlinga: Visit one of the 12 sacred Jyotirlingas of Lord Shiva. Seek blessings at this ancient and spiritually significant temple.",
      "🛕 Shree Ballaleshwar Temple – Pali: The only Ganesh temple named after a devotee, Ballal. The idol is self-manifested (Swayambhu). As per tradition, devotees first worship Dhundi Ganpati before offering prayers to Ballaleshwar.",
      "🛕 Shree Varadvinayak Temple – Mahad: Lord Ganesha is worshipped here as the Bestower of Wishes. Devotees believe that sincere prayers offered here fulfill all genuine wishes. The idol is self-manifested."
    ]
  },
  {
    day: 5,
    title: "Jyotirlinga Darshan",
    description: "After breakfast, continue the spiritual journey to visit three major Jyotirlingas. Seek blessings at Parli Vaijnath, Aundha Nagnath, and Grishneshwar, and then proceed to Shirdi.",
    icon: Eye,
    stay: "Shirdi",
    activities: [
      "🛕 Parli Vaijnath Jyotirlinga: One of the twelve sacred Jyotirlingas dedicated to Lord Shiva.",
      "🛕 Aundha Nagnath Jyotirlinga: An ancient and highly revered Jyotirlinga temple believed to be one of the oldest Shiva temples in India.",
      "🛕 Grishneshwar Jyotirlinga: The twelfth Jyotirlinga, located near the famous Ellora Caves, known for its beautiful architecture and spiritual importance."
    ]
  },
  {
    day: 6,
    title: "Shirdi – Trimbakeshwar – Surat",
    description: "After breakfast, visit Shirdi Sai Baba Temple, then drive to Trimbakeshwar Jyotirlinga near Nashik. After darshan, begin the return journey to Surat via the scenic hill station of Saputara.",
    icon: Car,
    stay: "Tour Completed",
    activities: [
      "🛕 Shirdi Sai Baba Temple: Seek blessings at the world-famous shrine of Sai Baba.",
      "🛕 Trimbakeshwar Jyotirlinga: Famous for its unique three-faced Shiva Lingam representing Brahma, Vishnu, and Mahesh.",
      "Begin the return journey to Surat via the scenic hill station of Saputara, concluding the tour with divine blessings."
    ]
  }
];

const inclusions = [
  "Travel by comfortable Tempo Traveller for all sightseeing and transfers",
  "Delicious Gujarati meals prepared by an experienced Gujarati cook",
  "Comfortable hotel night stays in Pune, Morgaon, Ozar, and Shirdi",
  "Dedicated driver and tour assistance throughout the journey"
];

const exclusions = [
  "Personal expenses, laundry, telephone calls, tips, and medicines",
  "Special Puja charges at temples",
  "GST & travel insurance",
  "Any entry fees or optional activities not mentioned in the itinerary"
];

const AshtavinayakTour = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <SEO
        title="Ashtavinayak Ganpati Tour with 5 Jyotirlinga | Maitry Holidays"
        description="Embark on the sacred Ashtavinayak Ganpati Tour covering the 8 Swayambhu Ganesha temples and 5 Jyotirlingas of Maharashtra. Luxury bus & Gujarati meals."
      />
      <AnnouncementBar />
      <Navbar />

      {/* Hero Section */}
      <section className="relative isolate flex items-center overflow-hidden py-24 md:py-32 min-h-[450px] md:min-h-[550px] bg-brand-darker">
        <div className="absolute inset-0 -z-20 h-full w-full">
          <img
            src={chardhamCardImg}
            alt="Ashtavinayak Tour Hero"
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
              <span>Divine Ganesha & Shiva Yatra</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-4 leading-tight">
              Ashtavinayak <span className="italic-display text-accent font-normal">Ganpati Tour</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 font-light max-w-3xl leading-relaxed mb-6">
              A sacred 6 Days / 5 Nights pilgrimage covering the 8 self-manifested (Swayambhu) Ganesha temples and 5 powerful Jyotirlingas of Maharashtra. Complete with comfortable stays, pure vegetarian Gujarati meals, and transport.
            </p>
            <div className="flex flex-wrap gap-4 text-white/80 text-[14px]">
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-accent" /> 6 Days / 5 Nights</span>
              <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-accent" /> Surat to Surat</span>
              <span className="flex items-center gap-1.5"><Hotel className="w-4 h-4 text-accent" /> Comfortable Hotel Stays</span>
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
                    Embark on the sacred Ashtavinayak Yatra with Maitry Holidays. Seek blessings at the eight self-manifested (Swayambhu) Ganesha temples of Maharashtra alongside 5 powerful Shiva Jyotirlingas (Bhimashankar, Parli Vaijnath, Aundha Nagnath, Grishneshwar, and Trimbakeshwar). Our tour ensures comfortable luxury travel, hygienic stays, and freshly cooked Gujarati meals prepared by an experienced Gujarati cook.
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-brand-cream/50 p-4 rounded-sm border border-border/50 text-center">
                      <Calendar className="w-5 h-5 text-primary mx-auto mb-2" />
                      <span className="block text-[11px] uppercase tracking-wider text-muted-foreground font-bold">Duration</span>
                      <span className="text-sm font-semibold text-foreground">6 Days</span>
                    </div>
                    <div className="bg-brand-cream/50 p-4 rounded-sm border border-border/50 text-center">
                      <Hotel className="w-5 h-5 text-primary mx-auto mb-2" />
                      <span className="block text-[11px] uppercase tracking-wider text-muted-foreground font-bold">Stays</span>
                      <span className="text-sm font-semibold text-foreground">Comfortable Hotels</span>
                    </div>
                    <div className="bg-brand-cream/50 p-4 rounded-sm border border-border/50 text-center">
                      <Utensils className="w-5 h-5 text-primary mx-auto mb-2" />
                      <span className="block text-[11px] uppercase tracking-wider text-muted-foreground font-bold">Meals</span>
                      <span className="text-sm font-semibold text-foreground">Veg Gujarati Meals</span>
                    </div>
                    <div className="bg-brand-cream/50 p-4 rounded-sm border border-border/50 text-center">
                      <Car className="w-5 h-5 text-primary mx-auto mb-2" />
                      <span className="block text-[11px] uppercase tracking-wider text-muted-foreground font-bold">Transport</span>
                      <span className="text-sm font-semibold text-foreground">Tempo Traveller / Bus</span>
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
                    Follow your divine path day by day. All timings and details are carefully planned for a smooth pilgrimage.
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
                              {dayPlan.metrics && (
                                <div className="flex gap-3 text-[12px] text-muted-foreground font-medium">
                                  {dayPlan.metrics.distance && (
                                    <span>Dist: <b>{dayPlan.metrics.distance}</b></span>
                                  )}
                                  {dayPlan.metrics.time && (
                                    <span>Time: <b>{dayPlan.metrics.time}</b></span>
                                  )}
                                </div>
                              )}
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
                                  Highlights & Rituals
                                </span>
                                <ul className="grid gap-2 sm:grid-cols-1 text-sm text-muted-foreground">
                                  {dayPlan.activities.map((act, aIdx) => {
                                    const isTemple = act.startsWith("🛕");
                                    const displayText = isTemple ? act.replace("🛕", "").trim() : act;
                                    return (
                                      <li key={aIdx} className="flex items-start gap-2.5">
                                        {isTemple ? (
                                          <Landmark className="w-4 h-4 text-primary shrink-0 mt-0.5" strokeWidth={2.5} />
                                        ) : (
                                          <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" strokeWidth={3} />
                                        )}
                                        <span className="leading-normal">{renderTextWithHighlights(displayText)}</span>
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
                      <span>The itinerary involves visiting multiple sacred destinations in Maharashtra. Safe, coordinated, and comfortable transfers are arranged via Tempo Traveller/Luxury coach.</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>Comfortable clothing and walking shoes are recommended, especially for climbing the 283 steps to the cave temple of Lenyadri.</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>The itinerary is subject to change based on route updates, traffic, weather, and temple guidelines.</span>
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

                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-accent mb-2 block">Sacred Pilgrimage Package</span>
                  <h3 className="text-2xl font-bold leading-tight mb-4">Ashtavinayak Tour (6 Days)</h3>

                  <div className="border-t border-white/10 my-4 pt-4">
                    <span className="text-[11px] uppercase text-white/60 tracking-wider font-semibold block">Starting Price</span>
                    <div className="flex items-baseline gap-1.5 mt-1">
                      <span className="font-display text-4xl font-extrabold text-accent leading-none">₹14,000</span>
                      <span className="text-[12px] text-white/60 font-medium">/ per person</span>
                    </div>
                  </div>

                  <div className="space-y-3.5 my-6 text-sm text-white/90">
                    <div className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-accent shrink-0" strokeWidth={3} />
                      <span>8 Sacred Ganesha Temples (Swayambhu)</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-accent shrink-0" strokeWidth={3} />
                      <span>5 Powerful Jyotirlingas Included</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-accent shrink-0" strokeWidth={3} />
                      <span>Pure Veg Gujarati Meals Included</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-accent shrink-0" strokeWidth={3} />
                      <span>Comfortable Tempo Traveller Transit</span>
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

                    <a href="https://wa.me/917041260720?text=Hi%20Maitry%20Holidays,%20I%20am%20interested%20in%20booking%20the%20Ashtavinayak%20Ganpati%20Tour%206%20Days%20package." target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 rounded-sm bg-emerald-600 hover:bg-emerald-700 py-4 font-bold text-[15px] transition-colors">
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

export default AshtavinayakTour;

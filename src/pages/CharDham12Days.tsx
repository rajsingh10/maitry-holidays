import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import AnnouncementBar from "@/components/site/AnnouncementBar";
import FloatingActions from "@/components/site/FloatingActions";
import SEO from "@/components/SEO";
import { Reveal, RevealGroup, motion } from "@/lib/motion";
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
  Heart,
  Sun,
  Flame,
  Activity,
  Sparkles,
  AlertCircle,
  Map,
  Train,
  Tent,
  AlertTriangle
} from "lucide-react";

// Itinerary Data for 12 Days
const itinerary = [
  {
    day: 1,
    title: "Surat to Delhi",
    description: "Board the train from Surat and depart for Delhi. Relax and enjoy the overnight journey by train as we set off on this divine yatra.",
    icon: Train,
    stay: "Overnight Train Journey",
    details: []
  },
  {
    day: 2,
    title: "Delhi to Haridwar",
    description: "Arrive in Delhi at around 10:30 AM. Immediately proceed by vehicle to Haridwar, the gateway to the gods. Check in to your hotel, freshen up, and enjoy tea & breakfast.",
    icon: Car,
    stay: "Haridwar",
    activities: [
      "Visit the famous Har Ki Pauri ghat (Auto Rickshaw at your own expense)",
      "Take a holy dip in the sacred River Ganga to purify the soul",
      "Attend the world-famous evening Ganga Aarti, a spectacle of light, sound, and devotion"
    ]
  },
  {
    day: 3,
    title: "Haridwar to Barkot (Via Lakhamandal)",
    description: "Start early with tea/coffee at 5:00 AM. Depart for Barkot, which serves as the base camp for the Yamunotri pilgrimage.",
    icon: MapPin,
    stay: "Barkot",
    metrics: {
      distance: "205 km",
      time: "7–8 Hours",
      altitude: "1,220 m"
    },
    enRoute: [
      "Visit the historic Lakhamandal Temple associated with the Mahabharata. According to Hindu mythology, this is the site of the Lakshagriha where the Kauravas attempted to burn the Pandavas alive in a palace of wax.",
      "Explore the ancient site famous for its beautiful Shiva Lingams discovered during excavations."
    ]
  },
  {
    day: 4,
    title: "Yamunotri Darshan",
    description: "Wake up early at 3:00 AM. Drive to Janki Chatti. From here, begin the sacred trek to the temple of Goddess Yamuna. After a divine darshan, return to Janki Chatti and drive back to Barkot for dinner.",
    icon: Sparkles,
    stay: "Barkot",
    metrics: {
      distance: "45 km (Drive)",
      altitude: "3,293 m"
    },
    activities: [
      "Trek 6 km to Yamunotri Temple from Janki Chatti. (Pilgrims may choose Horse, Palki/Doli, or Pony services at own cost)",
      "Take a holy bath in the natural hot springs of Surya Kund before entering the temple",
      "Packed breakfast will be provided for the journey"
    ]
  },
  {
    day: 5,
    title: "Barkot to Uttarkashi",
    description: "Enjoy breakfast and depart Barkot around 8:00–9:00 AM. Head towards Uttarkashi, a town situated on the banks of the Bhagirathi river, comparable to Kashi (Varanasi) in spiritual significance.",
    icon: MapPin,
    stay: "Uttarkashi",
    metrics: {
      distance: "100 km",
      time: "3–4 Hours",
      altitude: "1,158 m"
    },
    enRoute: [
      "Visit the ancient Shiv Gufa (Shiva Cave) along the route."
    ],
    activities: [
      "Visit the revered Kashi Vishwanath Temple in Uttarkashi upon arrival"
    ]
  },
  {
    day: 6,
    title: "Gangotri Darshan",
    description: "Depart at 3:00 AM for Gangotri Dham. Drive through the scenic Harshil Valley. After the holy darshan and rituals, return to Uttarkashi.",
    icon: Flame,
    stay: "Uttarkashi",
    metrics: {
      distance: "100 km",
      time: "3–4 Hours",
      altitude: "3,415 m"
    },
    activities: [
      "Darshan at the beautiful white-granite Gangotri Temple, dedicated to Goddess Ganga",
      "Take a holy bath in the freezing waters of the River Ganga",
      "Perform religious rituals (Puja) at the ghats",
      "Enjoy the breathtaking scenic beauty of Harshil Valley, known for apple orchards and pine forests"
    ]
  },
  {
    day: 7,
    title: "Uttarkashi to Guptkashi",
    description: "Have breakfast at 7:00 AM and depart at 8:00 AM. Journey towards Guptkashi, which means 'Hidden Benares'. According to legend, Lord Shiva hid here to evade the Pandavas.",
    icon: MapPin,
    stay: "Guptkashi / Phata",
    metrics: {
      distance: "200 km",
      time: "8–9 Hours",
      altitude: "1,500 m"
    },
    enRoute: [
      "Visit the Budha Kedar Temple, located at the confluence of Bal Ganga and Dharma Ganga rivers."
    ]
  },
  {
    day: 8,
    title: "Kedarnath Yatra",
    description: "Reach Sonprayag early between 1:00 AM and 3:00 AM. Stand in queue for the shared jeep service to Gaurikund. From Gaurikund, begin your trek up to the majestic Kedarnath temple.",
    icon: Tent,
    stay: "Kedarnath (Hotel or Tent - Group Sharing)",
    metrics: {
      distance: "Sonprayag to Gaurikund: 6 km (Shared Jeep)",
      altitude: "3,583 m"
    },
    activities: [
      "Begin the 21 km trek from Gaurikund to Kedarnath Temple. Options like Trekking, Pony/Horse, or Palki (Doli) are available at your own expense.",
      "Attend the divine evening Aarti at Kedarnath Temple amidst the majestic snow peaks",
      "Arrange special Puja by directly contacting the temple priests"
    ]
  },
  {
    day: 9,
    title: "Kedarnath to Guptkashi",
    description: "Attend the early morning special Puja (optional) at 3:00 AM. Afterward, descend from Kedarnath back to Gaurikund, take the jeep to Sonprayag, and return to Guptkashi for a comfortable stay.",
    icon: Compass,
    stay: "Guptkashi",
    enRoute: [
      "Optional: Hire a local jeep from Sonprayag at your own expense to visit the sacred Triyuginarayan Temple, the legendary site of Lord Shiva and Goddess Parvati's celestial wedding."
    ]
  },
  {
    day: 10,
    title: "Guptkashi to Badrinath",
    description: "Have breakfast at 7:00 AM and begin the drive towards Badrinath, the holy abode of Lord Vishnu. The route winds through some of the most scenic mountain passes.",
    icon: MapPin,
    stay: "Badrinath",
    enRoute: [
      "Visit Omkareshwar Temple in Ukhimath (winter seat of Kedarnath deity)",
      "Visit Tungnath Temple, the highest Shiva temple in the world (if time permits)",
      "Drive via Chopta, often called the 'Mini Switzerland of India'",
      "Visit Narsingh Temple in Joshimath"
    ]
  },
  {
    day: 11,
    title: "Badrinath Sightseeing",
    description: "Participate in the early morning 4:00 AM Darshan at Badrinath Temple. Visit the famous Mana Village, then return to the hotel for lunch before heading towards Joshimath or Srinagar for the night stay.",
    icon: Eye,
    stay: "Joshimath / Srinagar",
    activities: [
      "Participate in early morning Darshan & take a bath in the hot water spring of Tapt Kund",
      "Explore Mana Village - the First Village of India. Visit Vyas Gufa, Ganesh Gufa, and the origin of the Saraswati River",
      "Proceed towards Joshimath or Srinagar for the overnight stay"
    ]
  },
  {
    day: 12,
    title: "Return Journey",
    description: "Enjoy breakfast at the hotel, then drive from Srinagar/Joshimath back to Haridwar. Continue your journey back to Delhi or board the train directly from Haridwar back to Surat, filled with spiritual peace and divine blessings.",
    icon: Activity,
    stay: "Tour Completed",
    details: []
  }
];

const inclusions = [
  "Comfortable Surat-to-Surat travel arrangements",
  "Comfortable hotel & tent accommodations (Kedarnath in group sharing)",
  "Pure vegetarian (Satvik) Gujarati meals served during the tour",
  "AC transportation for regional travel (AC switched off in hilly areas)",
  "Experienced tour guide & coordinators throughout the yatra",
  "Mandatory Yatra registration support"
];

const exclusions = [
  "Horse / Pony / Palki (Doli) / Porter charges for trekking",
  "Helicopter tickets to Kedarnath",
  "Shared Jeep fares (Sonprayag to Gaurikund & return)",
  "Local Auto Rickshaw and sightseeing vehicle charges",
  "Special Puja charges at temples",
  "Personal expenses, laundry, telephone calls, tips, and medicines",
  "GST & travel insurance"
];

const CharDham12Days = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <SEO
        title="Char Dham Yatra 12 Days Tour Package | Maitry Holidays"
        description="Book our premium 12-day Char Dham Yatra. Journey from Surat to Haridwar, Yamunotri, Gangotri, Kedarnath, Badrinath with Gujarati meals and guide."
      />
      <AnnouncementBar />
      <Navbar />

      {/* Hero Section */}
      <section className="relative isolate flex items-center overflow-hidden py-24 md:py-32 min-h-[450px] md:min-h-[550px] bg-brand-darker">
        <div className="absolute inset-0 -z-20 h-full w-full">
          <img
            src={chardhamCardImg}
            alt="Char Dham Yatra Hero"
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
              <span>Divine Salvation Tour</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-4">
              Char Dham <span className="italic-display text-accent font-normal">Yatra</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 font-light max-w-3xl leading-relaxed mb-6">
              A sacred 12 Days / 11 Nights spiritual odyssey covering Yamunotri, Gangotri, Kedarnath, and Badrinath. Curated with comfortable stays, pure vegetarian Gujarati meals, and expert guidance.
            </p>
            <div className="flex flex-wrap gap-4 text-white/80 text-[14px]">
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-accent" /> 12 Days / 11 Nights</span>
              <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-accent" /> Surat to Surat</span>
              <span className="flex items-center gap-1.5"><Hotel className="w-4 h-4 text-accent" /> Hotels & Tents</span>
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
                    Embark on the ultimate journey of faith with Maitry Holidays. The Char Dham Yatra of Uttarakhand is believed to open the doors of salvation. Our meticulously designed itinerary ensures that seniors and families travel at a comfortable pace, enjoying freshly cooked, pure vegetarian meals that taste like home, stay in hygienic and cozy accommodations, and receive dedicated assistance at every step.
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-brand-cream/50 p-4 rounded-sm border border-border/50 text-center">
                      <Calendar className="w-5 h-5 text-primary mx-auto mb-2" />
                      <span className="block text-[11px] uppercase tracking-wider text-muted-foreground font-bold">Duration</span>
                      <span className="text-sm font-semibold text-foreground">12 Days</span>
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
                      <span className="text-sm font-semibold text-foreground">AC Coaches / Jeeps</span>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Day-by-Day Itinerary */}
              <div>
                <Reveal className="mb-8">
                  <h2 className="text-3xl font-bold text-foreground flex items-center gap-2">
                    <Map className="w-8 h-8 text-primary" />
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
                                  {dayPlan.metrics.altitude && (
                                    <span className="text-accent">Alt: <b>{dayPlan.metrics.altitude}</b></span>
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

                            {/* En route stops */}
                            {dayPlan.enRoute && dayPlan.enRoute.length > 0 && (
                              <div className="mt-4 bg-brand-cream/40 p-4 rounded-sm border border-accent/10 border-l-4 border-l-accent">
                                <span className="block text-[11px] uppercase tracking-wider text-accent font-extrabold mb-2 flex items-center gap-1">
                                  <MapPin className="w-3.5 h-3.5" /> En Route Attractions
                                </span>
                                <ul className="space-y-2 text-sm text-foreground/90 font-medium">
                                  {dayPlan.enRoute.map((stop, sIdx) => (
                                    <li key={sIdx} className="flex items-start gap-2">
                                      <ChevronRight className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                                      <span>{stop}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {/* Activities / Highlights */}
                            {dayPlan.activities && dayPlan.activities.length > 0 && (
                              <div className="mt-4">
                                <span className="block text-[11px] uppercase tracking-wider text-primary font-extrabold mb-2">
                                  Highlights & Rituals
                                </span>
                                <ul className="grid gap-2 sm:grid-cols-1 text-sm text-muted-foreground">
                                  {dayPlan.activities.map((act, aIdx) => (
                                    <li key={aIdx} className="flex items-start gap-2.5">
                                      <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" strokeWidth={3} />
                                      <span className="leading-normal">{act}</span>
                                    </li>
                                  ))}
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
                      <span>Horse, Pony, Palki (Doli), Jeep charges, Auto Rickshaw charges, and Special Puja charges are not included unless specifically mentioned.</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>Pilgrims are strongly advised to carry heavy woolens, rain protection (umbrella or raincoat), comfortable trekking shoes, and a personal medical kit containing essential medicines.</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>The tour itinerary is subject to change based on weather conditions, landslide situations, road closures, and government regulations.</span>
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

                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-accent mb-2 block">Premium Yatra Package</span>
                  <h3 className="text-2xl font-bold leading-tight mb-4">Char Dham Yatra (12 Days)</h3>

                  <div className="border-t border-white/10 my-4 pt-4">
                    <span className="text-[11px] uppercase text-white/60 tracking-wider font-semibold block">Starting Price</span>
                    <div className="flex items-baseline gap-1.5 mt-1">
                      <span className="font-display text-4xl font-extrabold text-accent leading-none">₹36,000</span>
                      <span className="text-[12px] text-white/60 font-medium">/ per person</span>
                    </div>
                  </div>

                  <div className="space-y-3.5 my-6 text-sm text-white/90">
                    <div className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-accent shrink-0" strokeWidth={3} />
                      <span>Surat to Surat Complete Tour</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-accent shrink-0" strokeWidth={3} />
                      <span>Comfortable Hotels Included</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-accent shrink-0" strokeWidth={3} />
                      <span>Pure Veg Gujarati Meals Included</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-accent shrink-0" strokeWidth={3} />
                      <span>Expert Local Guide & Registration</span>
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

                    <a href="https://wa.me/917041260720?text=Hi%20Maitry%20Holidays,%20I%20am%20interested%20in%20booking%20the%20Char%20Dham%20Yatra%2012%20Days%20package." target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 rounded-sm bg-emerald-600 hover:bg-emerald-700 py-4 font-bold text-[15px] transition-colors">
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

export default CharDham12Days;

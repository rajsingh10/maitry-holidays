import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import AnnouncementBar from "@/components/site/AnnouncementBar";
import FloatingActions from "@/components/site/FloatingActions";
import { renderTextWithHighlights } from "@/lib/highlight";
import SEO from "@/components/SEO";
import { Reveal } from "@/lib/motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/images/divya_darshan.webp";
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
  Waves
} from "lucide-react";

// Itinerary Data for 11 Days
const itinerary = [
  {
    day: 1,
    title: "Surat to Raichur",
    description: "Board 20924 – Humsafar Express from Surat at 1:00 PM. Begin your spiritual journey towards Raichur.",
    icon: Train,
    stay: "Overnight Train Journey",
    activities: [
      "Board 20924 – Humsafar Express from Surat Railway Station at 1:00 PM",
      "Begin your journey towards Raichur",
      "Comfortable overnight travel by train"
    ]
  },
  {
    day: 2,
    title: "Raichur – Srisailam",
    description: "Arrive at Raichur Railway Station around 4:30 AM. Proceed by road to Srisailam. Visit Mallikarjuna Temple and seek blessings.",
    icon: Car,
    stay: "Srisailam",
    activities: [
      "Arrive at Raichur Railway Station around 4:30 AM",
      "Proceed by road towards Srisailam",
      "🛕 Mallikarjuna Jyotirlinga: Seek blessings at the holy temple, one of the 12 sacred Jyotirlingas of Lord Shiva and an important Shakti Peetha.",
      "Check in to the hotel after temple darshan"
    ]
  },
  {
    day: 3,
    title: "Srisailam – Tirupati",
    description: "After breakfast, depart for Tirupati. Upon arrival, check in to the hotel and collect your Balaji Darshan Token for the next day's temple visit.",
    icon: Car,
    stay: "Tirupati",
    activities: [
      "Enjoy breakfast at the hotel",
      "Depart for Tirupati by road",
      "Arrive and complete check-in at the hotel",
      "Collect the Balaji Darshan Token for the upcoming temple visit"
    ]
  },
  {
    day: 4,
    title: "Tirumala Balaji Darshan",
    description: "After breakfast, proceed to Tirumala Hills for a divine darshan of Lord Venkateswara (Balaji), one of India's most visited and sacred pilgrimage sites.",
    icon: Sparkles,
    stay: "Tirupati",
    activities: [
      "Enjoy breakfast at Tirupati hotel",
      "Proceed to Tirumala Hills by vehicle",
      "🛕 Sri Venkateswara (Balaji) Temple: Detailed darshan of Lord Venkateswara.",
      "Return to Tirupati in the evening"
    ]
  },
  {
    day: 5,
    title: "Tirupati – Vellore",
    description: "After breakfast, proceed towards Vellore, visiting Sri Padmavathi Ammavari Temple and ISKCON Temple en route. In the evening, explore the magnificent Golden Temple.",
    icon: Compass,
    stay: "Vellore",
    activities: [
      "🛕 Sri Padmavathi Ammavari Temple: Dedicated to Goddess Padmavathi, the divine consort of Lord Venkateswara.",
      "🛕 ISKCON Temple: Visit the beautiful ISKCON Temple for peaceful darshan.",
      "Continue to Vellore by road",
      "🛕 Sripuram Golden Temple: Visit the magnificent Golden Temple, famous for its stunning architecture covered with real gold."
    ]
  },
  {
    day: 6,
    title: "Vellore – Rameswaram",
    description: "After breakfast, proceed towards the holy island town of Rameswaram. Complete hotel check-in upon arrival.",
    icon: Car,
    stay: "Rameswaram",
    activities: [
      "Depart Vellore by road after breakfast",
      "Proceed towards the island of Rameswaram",
      "Arrive and complete hotel check-in"
    ]
  },
  {
    day: 7,
    title: "Rameswaram & Dhanushkodi",
    description: "Visit the holy Ramanathaswamy Temple early in the morning. After lunch, take an excursion to the ghost town of Dhanushkodi.",
    icon: Compass,
    stay: "Rameswaram",
    activities: [
      "🛕 Ramanathaswamy Temple: Visit one of the 12 Jyotirlingas and one of the Char Dham pilgrimage sites, famous for its corridors and 22 holy water tanks.",
      "Return to hotel for lunch",
      "🌊 Dhanushkodi: Visit the ghost town located at the southern tip of Rameswaram where the Bay of Bengal meets the Indian Ocean."
    ]
  },
  {
    day: 8,
    title: "Rameswaram – Kanyakumari",
    description: "After breakfast, proceed towards Kanyakumari. Upon arrival, check in to the hotel and enjoy sightseeing around the coastal town.",
    icon: Car,
    stay: "Kanyakumari",
    activities: [
      "Depart Rameswaram after breakfast",
      "Proceed towards Kanyakumari by road",
      "Hotel check-in upon arrival",
      "🌊 Enjoy beautiful coastal views, sunsets, and local attractions around Kanyakumari."
    ]
  },
  {
    day: 9,
    title: "Kanyakumari – Trivandrum",
    description: "After breakfast, depart for Trivandrum (Thiruvananthapuram), the capital city of Kerala. Complete hotel check-in and enjoy leisure time.",
    icon: Car,
    stay: "Trivandrum",
    activities: [
      "Depart Kanyakumari in the morning",
      "Drive to Trivandrum (Thiruvananthapuram)",
      "Hotel check-in and relax"
    ]
  },
  {
    day: 10,
    title: "Trivandrum Sightseeing",
    description: "Enjoy sightseeing in Trivandrum, visiting the famous Sree Padmanabhaswamy Temple and relaxing at Kovalam Beach.",
    icon: Compass,
    stay: "Trivandrum",
    activities: [
      "🛕 Sree Padmanabhaswamy Temple: One of India's richest and most sacred temples dedicated to Lord Vishnu.",
      "🌊 Kovalam Beach: Relax at Kerala's famous beach known for its golden sands and beautiful coastline.",
      "Return to the hotel in the evening"
    ]
  },
  {
    day: 11,
    title: "Return Journey",
    description: "Board 20923 – Humsafar Express at 7:50 AM from Trivandrum. Begin your return journey back to Surat with sweet memories.",
    icon: Train,
    stay: "Tour Completed",
    activities: [
      "Transfer to Trivandrum Railway Station",
      "Board 20923 – Humsafar Express at 7:50 AM",
      "Begin your return journey to Surat",
      "Tour concludes with sweet spiritual memories"
    ]
  }
];

const inclusions = [
  "Train journey as per the itinerary",
  "All sightseeing and transfers by Force Urbania",
  "3 AC Sleeper Coach transportation",
  "Accommodation in comfortable 3-Star Hotels",
  "Delicious Gujarati meals prepared by an experienced Gujarati cook"
];

const exclusions = [
  "Personal expenses, laundry, telephone calls, tips, and medicines",
  "Special Puja/Darshan ticket charges at temples",
  "GST & travel insurance",
  "Any entry fees or optional activities not mentioned in the itinerary"
];

const getActivityIconAndText = (text: string) => {
  const emojis = ["🛕", "🌊", "🌅", "🏖️"];
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
    case "🛕":
      return { icon: Landmark, iconColor: "text-primary", text: cleanText };
    case "🌊":
    case "🌅":
    case "🏖️":
      return { icon: Waves, iconColor: "text-primary", text: cleanText };
    default:
      return { icon: Check, iconColor: "text-emerald-500", text: cleanText };
  }
};

const SouthIndiaTour = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <SEO
        title="South India Tour Package: Temples & Scenic Destinations | Maitry Holidays"
        description="Book our 11-day premium South India Tour covering Srisailam, Tirupati, Vellore, Rameswaram, Kanyakumari & Trivandrum. 3-Star stays & Gujarati meals."
      />
      <AnnouncementBar />
      <Navbar />

      {/* Hero Section */}
      <section className="relative isolate flex items-center overflow-hidden py-24 md:py-32 min-h-[450px] md:min-h-[550px] bg-brand-darker">
        <div className="absolute inset-0 -z-20 h-full w-full">
          <img
            src={heroBg}
            alt="South India Tour Hero"
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
              <span>Sacred Temples & Scenic Destinations</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-4 leading-tight">
              South India <span className="italic-display text-accent font-normal block sm:inline">Tour Package</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 font-light max-w-3xl leading-relaxed mb-6">
              Experience the spiritual and cultural beauty of Andhra Pradesh, Tamil Nadu, and Kerala, visiting famous Jyotirlingas, temples, beaches, and iconic tourist destinations. Complete with delicious Gujarati meals prepared by an experienced cook.
            </p>
            <div className="flex flex-wrap gap-4 text-white/80 text-[14px]">
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-accent" /> 11 Days / 10 Nights</span>
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
                    A grand pilgrimage through South India. Seek blessings at Mallikarjuna Temple (Jyotirlinga), Sri Venkateswara Balaji Temple in Tirumala, Sripuram Golden Temple in Vellore, Ramanathaswamy Temple in Rameswaram, and Sree Padmanabhaswamy Temple in Trivandrum. Visit scenic destinations like Dhanushkodi, Kanyakumari, and Kovalam Beach. We offer comfortable 3-star stays, Force Urbania transfers, and traditional Gujarati cooked meals.
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-brand-cream/50 p-4 rounded-sm border border-border/50 text-center">
                      <Calendar className="w-5 h-5 text-primary mx-auto mb-2" />
                      <span className="block text-[11px] uppercase tracking-wider text-muted-foreground font-bold">Duration</span>
                      <span className="text-sm font-semibold text-foreground">11 Days</span>
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
                      <span className="text-sm font-semibold text-foreground">Force Urbania</span>
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
                    Explore your daily program below. Train departures, local vehicle sightseeing, hotel transfers, and temple darshans are all managed.
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
                                        <span className="leading-normal">{renderTextWithHighlights(activityText)}</span>
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

            </div>

            {/* Sidebar Sticky / Floating Info Panel */}
            <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
              <Reveal>
                <div className="bg-brand-dark text-white p-6 md:p-8 rounded-sm border border-white/10 shadow-xl relative overflow-hidden">
                  {/* Background overlay */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/20 rounded-full blur-2xl -z-10"></div>

                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-accent mb-2 block">Sacred Temple Tour</span>
                  <h3 className="text-2xl font-bold leading-tight mb-4">South India Tour (11 Days)</h3>

                  <div className="border-t border-white/10 my-4 pt-4">
                    <span className="text-[11px] uppercase text-white/60 tracking-wider font-semibold block">Duration</span>
                    <div className="flex items-baseline gap-1.5 mt-1">
                      <span className="font-display text-2xl font-extrabold text-accent leading-none">11 Days / 10 Nights</span>
                    </div>
                  </div>

                  <div className="space-y-3.5 my-6 text-sm text-white/90">
                    <div className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-accent shrink-0" strokeWidth={3} />
                      <span>Mallikarjuna & Rameswaram Jyotirlinga</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-accent shrink-0" strokeWidth={3} />
                      <span>Tirumala Balaji & Vellore Golden Temple</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-accent shrink-0" strokeWidth={3} />
                      <span>Dhanushkodi, Kanyakumari & Kovalam Beach</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-accent shrink-0" strokeWidth={3} />
                      <span>3-Star Hotels & Force Urbania transfers</span>
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

                    <a href="https://wa.me/917041260720?text=Hi%20Maitry%20Holidays,%20I%20am%20interested%20in%20booking%20the%20South%20India%20Tour%2011%20Days%20package." target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 rounded-sm bg-emerald-600 hover:bg-emerald-700 py-4 font-bold text-[15px] transition-colors">
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

export default SouthIndiaTour;

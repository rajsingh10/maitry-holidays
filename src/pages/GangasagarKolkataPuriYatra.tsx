import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import AnnouncementBar from "@/components/site/AnnouncementBar";
import FloatingActions from "@/components/site/FloatingActions";
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
  Waves,
  Home,
  Target,
  Sun,
  Activity
} from "lucide-react";

// Itinerary Data for 6 Days
const itinerary = [
  {
    day: 1,
    title: "Surat to Puri",
    description: "Assemble at Surat Railway Station. Board 22828 – Puri Superfast Express at 8:00 AM. Begin your spiritual journey to Jagannath Puri.",
    icon: Train,
    stay: "Overnight Train Journey",
    activities: [
      "Assemble at Surat Railway Station by designated time",
      "Board 22828 – Puri Superfast Express at 8:00 AM",
      "Begin your spiritual journey to Jagannath Puri"
    ]
  },
  {
    day: 2,
    title: "Arrival at Jagannath Puri",
    description: "Arrive at Puri Railway Station around 2:00 PM. Transfer to the hotel and complete check-in. Visit the sacred Shree Jagannath Temple for divine darshan. Visit the Gundicha Temple, an important temple associated with the famous Rath Yatra. In the evening, enjoy leisure time at the beautiful Golden Beach.",
    icon: Sparkles,
    stay: "Puri",
    activities: [
      "Arrive at Puri Railway Station around 2:00 PM",
      "Transfer to the hotel and complete check-in",
      "🛕 Shree Jagannath Temple: One of the Four Sacred Char Dhams of India and among the most important pilgrimage sites for Hindus.",
      "🛕 Gundicha Temple: An important temple associated with the famous Rath Yatra.",
      "🌊 Golden Beach: Enjoy relaxing leisure time in the evening at the pristine beach"
    ]
  },
  {
    day: 3,
    title: "Bhubaneswar Sightseeing",
    description: "After breakfast, proceed for a full-day sightseeing tour of Bhubaneswar, the Temple City of India. Explore magnificent Kalinga architecture, historical caves, and peace pagodas.",
    icon: Compass,
    stay: "Puri",
    activities: [
      "🛕 Lingaraj Temple: One of the oldest and largest Shiva temples in India, renowned for its magnificent Kalinga-style architecture.",
      "🛕 Udayagiri & Khandagiri Caves: Ancient rock-cut caves dating back to the 2nd century BCE, associated with Jain monks and rich historical heritage.",
      "🛕 Dhauli Shanti Stupa: A beautiful Peace Pagoda built near the site where Emperor Ashoka embraced Buddhism after the Kalinga War.",
      "🛕 Mukteswar Temple: Famous for its exquisite stone carvings and elegant temple architecture.",
      "🛕 Rajarani Temple: Known for its stunning sculptures and unique red-and-yellow sandstone construction.",
      "🛕 Parasurameswar Temple: One of the earliest surviving temples of Odisha, dedicated to Lord Shiva.",
      "🦁 Nandankanan Zoological Park: A renowned zoological park and botanical garden, famous for its white tigers and safari experience.",
      "🛕 Chausathi Yogini Temple: An ancient circular temple dedicated to the 64 Yoginis.",
      "🏛️ Odisha State Museum: Explore Odisha's rich history, art, archaeology, manuscripts, and cultural heritage."
    ]
  },
  {
    day: 4,
    title: "Puri Local Sightseeing & Departure to Kolkata",
    description: "After breakfast, enjoy local sightseeing. Later, transfer to Puri Railway Station. Board 18410 – Shri Jagannath Express at 10:40 PM for Kolkata.",
    icon: Car,
    stay: "Overnight Train Journey",
    activities: [
      "Enjoy local sightseeing and optional attractions",
      "🌊 Chilika Lake (Optional Visit): Asia's largest brackish water lagoon, famous for migratory birds, dolphins, and breathtaking natural beauty (at own expense)",
      "Later, transfer to Puri Railway Station",
      "Board 18410 – Shri Jagannath Express at 10:40 PM for Kolkata"
    ]
  },
  {
    day: 5,
    title: "Kolkata Sightseeing",
    description: "Upon arrival in Kolkata, check in to the hotel and refresh. Proceed for a full-day city tour of the historical monuments, bridges, and revered temples of Kolkata.",
    icon: Eye,
    stay: "Kolkata",
    activities: [
      "Hotel check-in and refresh upon arrival in Kolkata",
      "🏛️ Victoria Memorial: Kolkata's iconic marble monument built in memory of Queen Victoria.",
      "🛕 Dakshineswar Kali Temple: One of the most revered temples dedicated to Goddess Kali.",
      "🌉 Howrah Bridge (Rabindra Setu): A world-famous cantilever bridge and the symbol of Kolkata.",
      "🏛️ Indian Museum: The oldest and largest museum in India, featuring priceless historical collections.",
      "⛪ Mother House: Headquarters of the Missionaries of Charity and the resting place of Mother Teresa.",
      "🛕 Belur Math: The international headquarters of the Ramakrishna Mission.",
      "🌅 Prinsep Ghat: A beautiful riverside promenade on the banks of the Hooghly River.",
      "🏠 Jorasanko Thakur Bari: The ancestral home of Nobel Laureate Rabindranath Tagore.",
      "🏏 Eden Gardens: One of the world's most famous cricket stadiums.",
      "🛕 Kalighat Kali Temple: One of the 51 Shakti Peethas and a highly revered pilgrimage site.",
      "🌌 Birla Planetarium: One of Asia's largest planetariums.",
      "🔬 Science City: India's largest science centre featuring interactive exhibits and attractions."
    ]
  },
  {
    day: 6,
    title: "Gangasagar Pilgrimage & Return to Surat",
    description: "After breakfast, proceed for the sacred Gangasagar Yatra. Visit the holy confluence where the River Ganga meets the Bay of Bengal, take a holy dip, and visit Kapil Muni Ashram. In the evening, transfer to Howrah Railway Station to board your return train to Surat.",
    icon: Sparkles,
    stay: "Tour Completed",
    activities: [
      "🌊 Gangasagar Pilgrimage: Visit the holy place where River Ganga meets the Bay of Bengal.",
      "🌊 Take a holy dip at the sacred confluence.",
      "🛕 Kapil Muni Ashram: Visit the famous Kapil Muni Ashram.",
      "Spend time experiencing the spiritual atmosphere of this revered pilgrimage destination.",
      "After completing the pilgrimage, transfer to Howrah Railway Station",
      "Board 12834 – Howrah–Ahmedabad Superfast Express at 11:05 PM for your return journey to Surat"
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
  "Personal expenses, laundry, telephone calls, tips, and medicines",
  "Special Puja charges at temples",
  "GST & travel insurance",
  "Optional visits like Chilika Lake entry/boating fees",
  "Any entry fees or optional activities not mentioned in the itinerary"
];

const getActivityIconAndText = (text: string) => {
  const emojis = ["🛕", "🏛️", "⛪", "🌉", "🌊", "🦁", "🏠", "🏏", "🔬", "🌌", "🌅"];
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
    case "🏛️":
    case "⛪":
      return { icon: Landmark, iconColor: "text-primary", text: cleanText };
    case "🌊":
    case "🌅":
      return { icon: Waves, iconColor: "text-primary", text: cleanText };
    case "🌉":
      return { icon: MapPin, iconColor: "text-primary", text: cleanText };
    case "🏠":
      return { icon: Home, iconColor: "text-primary", text: cleanText };
    case "🦁":
      return { icon: Compass, iconColor: "text-primary", text: cleanText };
    case "🏏":
      return { icon: Target, iconColor: "text-primary", text: cleanText };
    case "🔬":
      return { icon: Activity, iconColor: "text-primary", text: cleanText };
    case "🌌":
      return { icon: Sun, iconColor: "text-primary", text: cleanText };
    default:
      return { icon: Landmark, iconColor: "text-primary", text: cleanText };
  }
};

const GangasagarKolkataPuriYatra = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <SEO
        title="Gangasagar – Kolkata – Jagannath Puri Yatra | Maitry Holidays"
        description="Embark on a divine spiritual journey to Gangasagar, Kolkata, and Jagannath Puri. 6-Day tour package with 3-Star hotel stays, train journey & Gujarati meals."
      />
      <AnnouncementBar />
      <Navbar />

      {/* Hero Section */}
      <section className="relative isolate flex items-center overflow-hidden py-24 md:py-32 min-h-[450px] md:min-h-[550px] bg-brand-darker">
        <div className="absolute inset-0 -z-20 h-full w-full">
          <img
            src={heroBg}
            alt="Gangasagar Kolkata Puri Yatra Hero"
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
              <span>Divine Spiritual Journey</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-4 leading-tight">
              Gangasagar – Kolkata – <span className="italic-display text-accent font-normal block sm:inline">Jagannath Puri Yatra</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 font-light max-w-3xl leading-relaxed mb-6">
              "All pilgrimages can be visited many times, but Gangasagar should be visited at least once in a lifetime." Explore the sacred confluence at Gangasagar and visit the Char Dham destination of Jagannath Puri.
            </p>
            <div className="flex flex-wrap gap-4 text-white/80 text-[14px]">
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-accent" /> 6 Days / 5 Nights</span>
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
                    Gangasagar is one of India's most sacred pilgrimage destinations, where the holy River Ganga meets the Bay of Bengal. Together with Jagannath Puri, one of the Four Sacred Char Dhams of India and a crucial Hindu pilgrimage site, this tour offers a complete spiritual experience. Enjoy comfortable 3-star stays, train journeys, and delicious Gujarati meals cooked by our experienced cook.
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
                    Follow your divine path day by day. All train departures, hotel transfers, and temple darshans are carefully managed.
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
                      <span>Comfortable clothing and light wear are recommended, especially for the holy dip at Gangasagar confluence.</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>Carry valid photo identification (Aadhaar Card/Voter ID) for train travel and hotel check-ins.</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>The itinerary is subject to modification based on train schedules, local weather, and administrative guidelines at Gangasagar and temple authorities.</span>
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

                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-accent mb-2 block">Spiritual Pilgrimage Yatra</span>
                  <h3 className="text-2xl font-bold leading-tight mb-4">Gangasagar – Kolkata – Puri</h3>

                  <div className="border-t border-white/10 my-4 pt-4">
                    <span className="text-[11px] uppercase text-white/60 tracking-wider font-semibold block">Departure Date</span>
                    <div className="flex items-baseline gap-1.5 mt-1">
                      <span className="font-display text-2xl font-extrabold text-accent leading-none">20 October 2026</span>
                    </div>
                  </div>

                  <div className="space-y-3.5 my-6 text-sm text-white/90">
                    <div className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-accent shrink-0" strokeWidth={3} />
                      <span>Jagannath Puri Dham Darshan</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-accent shrink-0" strokeWidth={3} />
                      <span>Gangasagar Confluence Holy Dip</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-accent shrink-0" strokeWidth={3} />
                      <span>Kolkata & Bhubaneswar City Tour</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-accent shrink-0" strokeWidth={3} />
                      <span>3-Star Hotel Stay & Gujarati Cooked Meals</span>
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

                    <a href="https://wa.me/917041260720?text=Hi%20Maitry%20Holidays,%20I%20am%20interested%20in%20booking%20the%20Gangasagar%20Kolkata%20Puri%20Yatra%20package." target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 rounded-sm bg-emerald-600 hover:bg-emerald-700 py-4 font-bold text-[15px] transition-colors">
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

export default GangasagarKolkataPuriYatra;

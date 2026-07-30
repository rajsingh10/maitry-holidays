import p1 from "@/assets/images/luxury-manali.jpg";
import p2 from "@/assets/images/shimla-weekend-tour.jpg";
import p3 from "@/assets/images/chardham-yatra-tour.jpg";
import p4 from "@/assets/images/dodham-yatra.jpg";
import p5 from "@/assets/images/Ayodhya & Varanasi.avif";
import p6 from "@/assets/images/vaishno-devi.jpg";
import p7 from "@/assets/images/North India.avif";
import p8 from "@/assets/images/golden temple.avif";
import p9 from "@/assets/images/haridwar-tour.png";
import p10 from "@/assets/images/auli-tour.jpg";
import p11 from "@/assets/images/best-uttarakhand.jpg";
import p12 from "@/assets/images/mini-switzerland.jpg";
import p13 from "@/assets/images/Kainchi-Dham.avif"
import p14 from "@/assets/images/nainiatal-corbett.jpg"
import p15 from "@/assets/images/shimla-manali.jpg"
import p16 from "@/assets/images/manali-volvo.jpg"
import p17 from "@/assets/images/manali-honeymoon.jpg"
import p18 from "@/assets/images/shimla-tour.jpg"
import p19 from "@/assets/images/mathura & vrindavan.jfif"
import p20 from "@/assets/images/Khatu Shyam & Salasar Balaji Divine.jfif"
import p21 from "@/assets/images/Shakti Peeth Devi Darshan Tour.jfif"
import p22 from "@/assets/images/Ayodhya temple.jfif"
import p23 from "@/assets/images/nainital-honeymoon.jpg"
import p24 from "@/assets/images/grand-uttarakhand.jpg"
import p25 from "@/assets/images/uttarakhand-tour.jpg"
import p26 from "@/assets/images/do-dham-yatra.jpg"
import p27 from "@/assets/images/badrinath-tour.jpg"
import p28 from "@/assets/images/INDIA.jpg"
import p29 from "@/assets/images/Dharamshala.jfif"
import p30 from "@/assets/images/Dalhousie & Khajjiar.jfif"
import p31 from "@/assets/images/jim-corbett.jpg"
import p32 from "@/assets/images/Kullu Manali Premium Car Tour.jpg"
import p33 from "@/assets/images/Shimla & Manali Romantic Car Escape.jfif"
import p34 from "@/assets/images/Shimla & Manali Deluxe Car Tour.avif"
import p35 from "@/assets/images/Complete Himachal Tour Package.jpg"
import p36 from "@/assets/images/Grand Himachal & Amritsar Explorer.jfif"
import p37 from "@/assets/images/kerala (1).webp"



export const packages = [
  // Kerala
  {
    img: p37, title: "Kerala Backwaters & Beaches", duration: "5 Days / 4 Nights", price: "₹14,999", category: "kerala",
    bullets: ["Premium Houseboat Stay in Alleppey", "Munnar Tea Gardens & Waterfalls", "Private AC Transport"]
  },
  {
    img: p37, title: "Munnar Hill Station Retreat", duration: "4 Days / 3 Nights", price: "₹11,499", category: "kerala",
    bullets: ["Stay in Luxury Resort amidst Tea Plantations", "Eravikulam National Park Safari", "Spice Plantation Tour & Elephant Ride"]
  },
  {
    img: p37, title: "Complete Kerala Explorer", duration: "7 Days / 6 Nights", price: "₹22,999", category: "kerala",
    bullets: ["Covering Kochi, Munnar, Thekkady & Alleppey", "Kathakali & Kalaripayattu Cultural Shows", "Periyar Lake Boating & Ayurvedic Massage"]
  },

  // Char Dham
  {
    img: p3, title: "Char Dham Yatra: Path to Salvation", duration: "12 Days / 11 Nights", price: "₹25,999", category: "chardham",
    bullets: ["Yamunotri, Gangotri, Kedarnath & Badrinath", "11 Nights Premium Stay & Pure Veg Meals", "Private AC vehicle with expert hill driver"]
  },
  {
    img: p26, title: "Do Dham Yatra: The Divine Duo", duration: "6 Days / 5 Nights", price: "₹16,999", category: "chardham",
    bullets: ["Kedarnath (Shiva) & Badrinath (Vishnu)", "05 Nights Premium Stay at base camps", "Holy Confluences (Prayags) visit en route"]
  },
  {
    img: p4, title: "Kedarnath Dham: The Shiva Calling", duration: "4 Days / 3 Nights", price: "₹9,999", category: "chardham",
    bullets: ["16km trek to the 11th Jyotirlinga", "Stay at closest points (Guptkashi/Sitapur)", "Mandatory Yatra Registration Support"]
  },
  {
    img: p27, title: "Badrinath Dham: Vaikuntha Experience", duration: "4 Days / 3 Nights", price: "₹9,999", category: "chardham",
    bullets: ["Morning & Evening Darshan at Lord Vishnu's abode", "Visit Mana (India’s Last Village) & Tapt Kund", "03 Nights Premium Stay & Satvik Meals"]
  },

  // Nepal
  {
    img: p28, title: "Kathmandu & Pokhara Explorer", duration: "6 Days / 5 Nights", price: "₹18,999", category: "nepal",
    bullets: ["Visit Pashupatinath & Boudhanath Stupa", "Pokhara Lake Boating & Mountain Views", "Premium Hotel Stays & Transfers"]
  },
  {
    img: p28, title: "Muktinath Darshan Yatra", duration: "5 Days / 4 Nights", price: "₹15,499", category: "nepal",
    bullets: ["Holy Bath at 108 Waterspouts", "Scenic flight from Pokhara to Jomsom", "Dedicated AC Vehicle for Darshan"]
  },
  {
    img: p28, title: "Best of Nepal Cultural Tour", duration: "7 Days / 6 Nights", price: "₹22,500", category: "nepal",
    bullets: ["Explore Kathmandu, Pokhara & Chitwan", "Wildlife Safari in Chitwan National Park", "Swayambhunath & Durbar Square Visits"]
  },
];

export const categories = [
  { id: "kerala", label: "Kerala", img: p28, path: "/kerala" },
  { id: "chardham", label: "Char Dham", img: p3, path: "/chardham" },
  { id: "nepal", label: "Nepal", img: p28, path: "/nepal" },
];

import p1 from "@/assets/images/luxury-manali.webp";
import p2 from "@/assets/images/shimla-weekend-tour.webp";
// import p3 from "@/assets/images/chardham-yatra-tour.webp";
import p3 from "@/assets/images/chardham_yatra.webp";
import p4 from "@/assets/images/dodham-yatra.webp";
import p5 from "@/assets/images/Ayodhya & Varanasi.avif";
import p6 from "@/assets/images/vaishno-devi.webp";
import p7 from "@/assets/images/North India.avif";
import p8 from "@/assets/images/golden temple.avif";
import p9 from "@/assets/images/haridwar-tour.webp";
import p10 from "@/assets/images/auli-tour.webp";
import p11 from "@/assets/images/best-uttarakhand.webp";
import p12 from "@/assets/images/mini-switzerland.webp";
// import p26 from "@/assets/images/do-dham-yatra.webp"
import p26 from "@/assets/images/divya_darshan.webp"
import p27 from "@/assets/images/badrinath-tour.webp"
import p28 from "@/assets/images/INDIA.webp"
import p37 from "@/assets/images/kerala (1).webp"
import p38 from "@/assets/images/kerala_munnar.webp"
import p39 from "@/assets/images/nepal_kathmandu.webp"
import p40 from "@/assets/images/nepal_muktinath.webp"
import p41 from "@/assets/images/nepal_chitwan.webp"
import p42 from "@/assets/images/kerala.webp"

import g1 from "@/assets/images/68d58498cd278adf77c2fcb0_package-image5.webp"
import g2 from "@/assets/images/68d58498e1e7b157e6d2c8e7_package-image3.webp"
import g3 from "@/assets/images/68d584990acf69f30cb0ab44_package-image4.webp"
import g4 from "@/assets/images/68d584996cc7bd69eb58cdda_package-image6.webp"
import g5 from "@/assets/images/68d584997592b6b423757073_package-image2.webp"
import g6 from "@/assets/images/68d5849977180d0ab8b0c9a6_package-image1.webp"
import g7 from "@/assets/images/68e40231c5b5a7f61a03b7d8_popular-destination-image1.webp"
import g8 from "@/assets/images/68e40231694516f09e10aa89_popular-destination-image2.webp"
import g9 from "@/assets/images/68e402315cd843c163fedd88_popular-destination-image3.webp"
import g10 from "@/assets/images/68e40232faeb1fb4e6f91eac_popular-destination-image4.webp"
import g11 from "@/assets/images/68e40233282eb14c09c7ba08_popular-destination-image5.webp"
import g12 from "@/assets/images/68e40233b2f423c944e1da77_popular-destination-image6.webp"
export const packages = [
  // Kerala
  {
    img: p37,
    images: [p37, g1, g2],
    title: "Kerala Backwaters & Beaches", duration: "5 Days / 4 Nights", price: "₹14,999", category: "kerala",
    bullets: ["Premium Houseboat Stay in Alleppey", "Munnar Tea Gardens & Waterfalls", "Private AC Transport"],
    inclusions: ["stay", "transit", "sightseeing"]
  },
  {
    img: p38,
    images: [p38, g3, g4],
    title: "Munnar Hill Station Retreat", duration: "4 Days / 3 Nights", price: "₹11,499", category: "kerala",
    bullets: ["Stay in Luxury Resort amidst Tea Plantations", "Eravikulam National Park Safari", "Spice Plantation Tour & Elephant Ride"],
    inclusions: ["stay", "transit", "sightseeing"]
  },
  {
    img: p42,
    images: [p42, g5, g6],
    title: "Complete Kerala Explorer", duration: "7 Days / 6 Nights", price: "₹22,999", category: "kerala",
    bullets: ["Covering Kochi, Munnar, Thekkady & Alleppey", "Kathakali & Kalaripayattu Cultural Shows", "Periyar Lake Boating & Ayurvedic Massage"],
    inclusions: ["stay", "transit", "sightseeing"]
  },

  // Char Dham
  {
    img: p3,
    images: [p3, g7, g8],
    title: "Char Dham Yatra: Path to Salvation", duration: "12 Days / 11 Nights", price: "₹36,000", category: "chardham",
    bullets: ["Visit Yamunotri, Gangotri, Kedarnath & Badrinath", "Comfortable Surat-to-Surat travel with pure vegetarian Gujarati meals", "Comfortable hotel accommodation, AC transportation & experienced tour guide"],
    inclusions: ["stay", "meals", "transit", "guide", "sightseeing"],
    link: "/packages/char-dham-yatra-12-days"
  },
  {
    img: p26,
    images: [p26, g9, g10],
    title: "Gangasagar – Kolkata – Jagannath Puri Yatra", duration: "6 Days / 5 Nights", price: "₹18,000", category: "divine-darshan",
    bullets: ["Visit sacred Jagannath Temple & Kapil Muni Ashram in Gangasagar", "Explore historic temples in Bhubaneswar & iconic sites of Kolkata", "Comfortable 3-star hotel stay, train travel & pure vegetarian Gujarati meals"],
    inclusions: ["stay", "meals", "transit", "sightseeing"],
    link: "/packages/gangasagar-kolkata-jagannath-puri-yatra"
  },
  {
    img: p3,
    images: [p3, g7, g8],
    title: "Ashtavinayak Ganpati Tour", duration: "6 Days / 5 Nights", price: "₹14,000", category: "divine-darshan",
    bullets: ["Visit the 8 Most Sacred Ganesha Temples of Maharashtra (Swayambhu)", "Visit 5 powerful Jyotirlingas: Bhimashankar, Parli Vaijnath, Aundha Nagnath, Grishneshwar & Trimbakeshwar", "Travel by comfortable Tempo Traveller with delicious Gujarati meals prepared by an experienced cook"],
    inclusions: ["stay", "meals", "transit", "sightseeing"],
    link: "/packages/ashtavinayak-ganpati-tour-6-days"
  },
  {
    img: p26,
    images: [p26, g9, g10],
    title: "Divya Darshan Bharat Yatra", duration: "9 Days / 10 Nights", price: "₹28,000", category: "chardham",
    bullets: ["Tirupati, Vellore (Golden Temple), Madurai, Rameswaram & Kanyakumari", "Kanyakumari, Trivandrum & Kovalam Beach sightseeing", "9 Nights / 10 Days with comfortable hotel stay, pure vegetarian meals & AC transportation"],
    inclusions: ["stay", "meals", "transit", "guide", "sightseeing"]
  },
  // {
  //   img: p4,
  //   images: [p4, g11, g12],
  //   title: "Kedarnath Dham: The Shiva Calling", duration: "4 Days / 3 Nights", price: "₹9,999", category: "chardham",
  //   bullets: ["16km trek to the 11th Jyotirlinga", "Stay at closest points (Guptkashi/Sitapur)", "Mandatory Yatra Registration Support"],
  //   inclusions: ["stay", "transit"]
  // },
  // {
  //   img: p27,
  //   images: [p27, p5, p6],
  //   title: "Badrinath Dham: Vaikuntha Experience", duration: "4 Days / 3 Nights", price: "₹9,999", category: "chardham",
  //   bullets: ["Morning & Evening Darshan at Lord Vishnu's abode", "Visit Mana (India’s Last Village) & Tapt Kund", "03 Nights Premium Stay & Satvik Meals"],
  //   inclusions: ["stay", "meals", "transit", "sightseeing"]
  // },

  // Nepal
  {
    img: p39,
    images: [p39, p7, p8],
    title: "Kathmandu & Pokhara Explorer", duration: "6 Days / 5 Nights", price: "₹18,999", category: "nepal",
    bullets: ["Visit Pashupatinath & Boudhanath Stupa", "Pokhara Lake Boating & Mountain Views", "Premium Hotel Stays & Transfers"],
    inclusions: ["stay", "transit", "sightseeing"]
  },
  {
    img: p40,
    images: [p40, p9, p10],
    title: "Muktinath Darshan Yatra", duration: "5 Days / 4 Nights", price: "₹15,499", category: "nepal",
    bullets: ["Holy Bath at 108 Waterspouts", "Scenic flight from Pokhara to Jomsom", "Dedicated AC Vehicle for Darshan"],
    inclusions: ["stay", "transit", "sightseeing"]
  },
  {
    img: p41,
    images: [p41, p11, p12],
    title: "Best of Nepal Cultural Tour", duration: "7 Days / 6 Nights", price: "₹22,500", category: "nepal",
    bullets: ["Explore Kathmandu, Pokhara & Chitwan", "Wildlife Safari in Chitwan National Park", "Swayambhunath & Durbar Square Visits"],
    inclusions: ["stay", "transit", "sightseeing"]
  },

  // Kashmir
  {
    img: p12,
    images: [p12, g1, g2],
    title: "Kashmir Tour: Experience the Paradise on Earth", duration: "7 Days / 6 Nights", price: "On Request", category: "kashmir",
    bullets: ["Explore Srinagar Mughal Gardens & Dal Lake Shikara Ride", "Visit snow-covered Gulmarg & Thajiwas Glacier in Sonamarg", "Scenic Pahalgam Valley, Apple Orchards & tasty Gujarati meals"],
    inclusions: ["stay", "meals", "transit", "sightseeing"],
    link: "/packages/kashmir-tour-7-days"
  },

  // North East
  {
    img: p28,
    images: [p28, g1, g2],
    title: "North East Tour: Explore the Hidden Gems", duration: "11 Days / 10 Nights", price: "₹48,000", category: "northeast",
    bullets: ["Explore scenic Tawang Monastery & Sela Pass in Arunachal", "Safari in Kaziranga National Park & Bihu Dance", "Visit Asia's cleanest Mawlynnong village & Dawki clear river"],
    inclusions: ["stay", "meals", "transit", "sightseeing"],
    link: "/packages/north-east-tour-11-days"
  },

  // South India
  {
    img: p26,
    images: [p26, g1, g2],
    title: "South India Tour: Sacred Temples & Scenic Destinations", duration: "11 Days / 10 Nights", price: "₹28,000", category: "southindia",
    bullets: ["Visit Mallikarjuna Jyotirlinga, Tirumala Balaji & Rameswaram Dham", "Explore Vellore Golden Temple & Padmanabhaswamy Temple in Trivandrum", "Scenic Dhanushkodi beach, Kanyakumari sunset & Kovalam beach"],
    inclusions: ["stay", "meals", "transit", "sightseeing"],
    link: "/packages/south-india-tour-11-days"
  },
];

export const categories = [
  // { id: "kerala", label: "Kerala", img: p28, path: "/kerala" },
  { id: "chardham", label: "Char Dham", img: p3, path: "/chardham" },
  { id: "divine-darshan", label: "Divine Darshan Yatra", img: p26, path: "/packages" },
  // { id: "nepal", label: "Nepal", img: p28, path: "/nepal" },
  { id: "kashmir", label: "Kashmir", img: p12, path: "/packages" },
  { id: "northeast", label: "North East", img: p28, path: "/packages" },
  { id: "southindia", label: "South India", img: p26, path: "/packages" },
];

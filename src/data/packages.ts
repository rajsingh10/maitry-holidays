
import p3 from "@/assets/images/chardham_yatra.webp";
import p12 from "@/assets/images/mini-switzerland.webp";
import p26 from "@/assets/images/divya_darshan.webp"
import p28 from "@/assets/images/INDIA.webp"
import pAshtavinayak from "@/assets/images/ashtavinayak.webp";
import pSouthIndia from "@/assets/images/south_img.webp"
import g1 from "@/assets/images/68d58498cd278adf77c2fcb0_package-image5.webp"
import g2 from "@/assets/images/68d58498e1e7b157e6d2c8e7_package-image3.webp"
import g7 from "@/assets/images/68e40231c5b5a7f61a03b7d8_popular-destination-image1.webp"
import g8 from "@/assets/images/68e40231694516f09e10aa89_popular-destination-image2.webp"
import g9 from "@/assets/images/68e402315cd843c163fedd88_popular-destination-image3.webp"
import g10 from "@/assets/images/68e40232faeb1fb4e6f91eac_popular-destination-image4.webp"
export const packages = [


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
    img: pAshtavinayak,
    images: [pAshtavinayak, g7, g8],
    title: "Ashtavinayak Ganpati Tour", duration: "6 Days / 5 Nights", price: "₹14,000", category: "divine-darshan",
    bullets: ["Visit the 8 Most Sacred Ganesha Temples of Maharashtra (Swayambhu)", "Visit 5 powerful Jyotirlingas: Bhimashankar, Parli Vaijnath, Aundha Nagnath, Grishneshwar & Trimbakeshwar", "Travel by comfortable Tempo Traveller with delicious Gujarati meals prepared by an experienced cook"],
    inclusions: ["stay", "meals", "transit", "sightseeing"],
    link: "/packages/ashtavinayak-ganpati-tour-6-days"
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
    img: pSouthIndia,
    images: [pSouthIndia, g1, g2],
    title: "South India Tour: Sacred Temples & Scenic Destinations", duration: "11 Days / 10 Nights", price: "₹28,000", category: "southindia",
    bullets: ["Visit Mallikarjuna Jyotirlinga, Tirumala Balaji & Rameswaram Dham", "Explore Vellore Golden Temple & Padmanabhaswamy Temple in Trivandrum", "Scenic Dhanushkodi beach, Kanyakumari sunset & Kovalam beach"],
    inclusions: ["stay", "meals", "transit", "sightseeing"],
    link: "/packages/south-india-tour-11-days"
  },
];

export const categories = [
  { id: "chardham", label: "Char Dham", img: p3, path: "/chardham" },
  { id: "divine-darshan", label: "Divine Darshan Yatra", img: p26, path: "/packages" },
  { id: "kashmir", label: "Kashmir", img: p12, path: "/packages" },
  { id: "northeast", label: "North East", img: p28, path: "/packages" },
  { id: "southindia", label: "South India", img: pSouthIndia, path: "/packages" },
];

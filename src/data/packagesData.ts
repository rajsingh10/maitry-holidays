import chardhamCardImg from "@/assets/images/chardham_yatra.webp";
import divyaDarshanImg from "@/assets/images/divya_darshan.webp";
import ashtavinayakImg from "@/assets/images/ashtavinayak.webp";
import miniSwitzerlandImg from "@/assets/images/mini-switzerland.webp";
import indiaImg from "@/assets/images/INDIA.webp";
import northEastImg from "@/assets/images/noth_east.webp";

export interface ItineraryItem {
  day: number;
  title: string;
  description: string;
  iconName: string;
  stay: string;
  metrics?: {
    distance?: string;
    time?: string;
    altitude?: string;
  };
  enRoute?: string[];
  activities?: string[];
}

export interface PackageDetail {
  slug: string;
  seo: {
    title: string;
    description: string;
  };
  hero: {
    tag: string;
    title: string;
    italicTitle?: string;
    description: string;
    bgImage: string;
  };
  metrics: {
    duration: string;
    route: string;
    stayType: string;
    mealsType: string;
    transitType: string;
  };
  overview: string;
  itinerary: ItineraryItem[];
  inclusions: string[];
  exclusions: string[];
  guidelines: string[];
  sidebar: {
    tag: string;
    title: string;
    startingPrice?: string;
    departureDate?: string;
    list: string[];
  };
}

export const packagesData: PackageDetail[] = [
  {
    slug: "char-dham-yatra-12-days",
    seo: {
      title: "Char Dham Yatra 12 Days | Maitry Holidays",
      description: "Embark on a spiritual journey to Char Dham. Explore Yamunotri, Gangotri, Kedarnath & Badrinath with our premium yatra packages."
    },
    hero: {
      tag: "Divine Salvation Tour",
      title: "Char Dham",
      italicTitle: "Yatra",
      description: "A sacred 12 Days / 11 Nights spiritual odyssey covering Yamunotri, Gangotri, Kedarnath, and Badrinath. Curated with comfortable stays, pure vegetarian Gujarati meals, and expert guidance.",
      bgImage: chardhamCardImg
    },
    metrics: {
      duration: "12 Days / 11 Nights",
      route: "Surat to Surat",
      stayType: "Hotels & Tents",
      mealsType: "Veg Gujarati Meals",
      transitType: "AC Coaches / Jeeps"
    },
    overview: "Embark on the ultimate journey of faith with Maitry Holidays. The Char Dham Yatra of Uttarakhand is believed to open the doors of salvation. Our meticulously designed itinerary ensures that seniors and families travel at a comfortable pace, enjoying freshly cooked, pure vegetarian meals that taste like home, stay in hygienic and cozy accommodations, and receive dedicated assistance at every step.",
    itinerary: [
      {
        day: 1,
        title: "Surat to Delhi",
        description: "Board the train from Surat and depart for Delhi. Relax and enjoy the overnight journey by train as we set off on this divine yatra.",
        iconName: "Train",
        stay: "Overnight Train Journey"
      },
      {
        day: 2,
        title: "Delhi to Haridwar",
        description: "Arrive in Delhi at around 10:30 AM. Immediately proceed by vehicle to Haridwar, the gateway to the gods. Check in to your hotel, freshen up, and enjoy tea & breakfast.",
        iconName: "Car",
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
        iconName: "MapPin",
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
        iconName: "Sparkles",
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
        iconName: "MapPin",
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
        iconName: "Flame",
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
        iconName: "MapPin",
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
        iconName: "Tent",
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
        iconName: "Compass",
        stay: "Guptkashi",
        enRoute: [
          "Optional: Hire a local jeep from Sonprayag at your own expense to visit the sacred Triyuginarayan Temple, the legendary site of Lord Shiva and Goddess Parvati's celestial wedding."
        ]
      },
      {
        day: 10,
        title: "Guptkashi to Badrinath",
        description: "Have breakfast at 7:00 AM and begin the drive towards Badrinath, the holy abode of Lord Vishnu. The route winds through some of the most scenic mountain passes.",
        iconName: "MapPin",
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
        iconName: "Eye",
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
        iconName: "Activity",
        stay: "Tour Completed"
      }
    ],
    inclusions: [
      "Train journey as per the itinerary",
      "Delicious meals (Breakfast, Lunch, and Dinner) prepared by our experienced Gujarati cook",
      "Comfortable night stays in hotels and sharing tents in Kedarnath",
      "AC Coach transportation for comfortable transit",
      "Yatra registration support and dedicated guide assistance"
    ],
    exclusions: [
      "Kedarnath local transport from Sonprayag (Jeep service)",
      "Trek services (Pony, Horse, Palki/Doli, or Helicopter charges)",
      "Personal expenses, laundry, tips, and medicines",
      "GST & travel insurance",
      "Any entry fees or optional activities not mentioned in the itinerary"
    ],
    guidelines: [
      "All pilgrims must carry valid government-issued photo ID cards.",
      "Due to high altitudes, physical fitness is essential. Carry necessary personal warm clothing and raincoats.",
      "The tour itinerary is subject to change based on weather conditions, landslide situations, road closures, and government regulations."
    ],
    sidebar: {
      tag: "Premium Yatra Package",
      title: "Char Dham Yatra (12 Days)",
      startingPrice: "₹36,000",
      list: [
        "Surat to Surat Complete Tour",
        "Comfortable Hotels Included",
        "Pure Veg Gujarati Meals Included",
        "Yatra Registration Support",
        "Experienced Tour Guide & Cook"
      ]
    }
  },
  {
    slug: "ashtavinayak-ganpati-tour-6-days",
    seo: {
      title: "Ashtavinayak Ganpati Tour with 5 Jyotirlinga | Maitry Holidays",
      description: "Embark on the sacred Ashtavinayak Ganpati Tour covering the 8 Swayambhu Ganesha temples and 5 Jyotirlingas of Maharashtra. Luxury bus & Gujarati meals."
    },
    hero: {
      tag: "Divine Ganesha & Shiva Yatra",
      title: "Ashtavinayak",
      italicTitle: "Ganpati Tour",
      description: "A sacred 6 Days / 5 Nights pilgrimage covering the 8 self-manifested (Swayambhu) Ganesha temples and 5 powerful Jyotirlingas of Maharashtra. Complete with comfortable stays, pure vegetarian Gujarati meals, and transport.",
      bgImage: ashtavinayakImg
    },
    metrics: {
      duration: "6 Days / 5 Nights",
      route: "Surat to Surat",
      stayType: "Comfortable Hotel Stays",
      mealsType: "Veg Gujarati Meals",
      transitType: "Tempo Traveller / Bus"
    },
    overview: "Embark on the sacred Ashtavinayak Yatra with Maitry Holidays. Seek blessings at the eight self-manifested (Swayambhu) Ganesha temples of Maharashtra alongside 5 powerful Shiva Jyotirlingas (Bhimashankar, Parli Vaijnath, Aundha Nagnath, Grishneshwar, and Trimbakeshwar). Our tour ensures comfortable luxury travel, hygienic stays, and freshly cooked Gujarati meals prepared by an experienced Gujarati cook.",
    itinerary: [
      {
        day: 1,
        title: "Surat to Pune",
        description: "Report at the boarding point in Surat by 3:00 AM. Depart for Pune by luxury bus. Relax and enjoy a comfortable overnight journey to Pune.",
        iconName: "Bus",
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
        iconName: "Sparkles",
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
        iconName: "Compass",
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
        iconName: "MapPin",
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
        iconName: "Eye",
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
        iconName: "Car",
        stay: "Tour Completed",
        activities: [
          "🛕 Shirdi Sai Baba Temple: Seek blessings at the world-famous shrine of Sai Baba.",
          "🛕 Trimbakeshwar Jyotirlinga: Famous for its unique three-faced Shiva Lingam representing Brahma, Vishnu, and Mahesh.",
          "Begin the return journey to Surat via the scenic hill station of Saputara, concluding the tour with divine blessings."
        ]
      }
    ],
    inclusions: [
      "Travel by comfortable Tempo Traveller for all sightseeing and transfers",
      "Delicious Gujarati meals prepared by an experienced Gujarati cook",
      "Comfortable hotel night stays in Pune, Morgaon, Ozar, and Shirdi",
      "Dedicated driver and tour assistance throughout the journey"
    ],
    exclusions: [
      "Personal expenses, laundry, telephone calls, tips, and medicines",
      "Special Puja charges at temples",
      "GST & travel insurance",
      "Any entry fees or optional activities not mentioned in the itinerary"
    ],
    guidelines: [
      "The itinerary involves visiting multiple sacred destinations in Maharashtra. Safe, coordinated, and comfortable transfers are arranged via Tempo Traveller/Luxury coach.",
      "Comfortable clothing and walking shoes are recommended, especially for climbing the 283 steps to the cave temple of Lenyadri.",
      "The itinerary is subject to change based on route updates, traffic, weather, and temple guidelines."
    ],
    sidebar: {
      tag: "Sacred Pilgrimage Package",
      title: "Ashtavinayak Tour (6 Days)",
      startingPrice: "₹14,000",
      list: [
        "8 Sacred Ganesha Temples (Swayambhu)",
        "5 Powerful Jyotirlingas Included",
        "Pure Veg Gujarati Meals Included",
        "Comfortable Tempo Traveller Transit"
      ]
    }
  },
  {
    slug: "gangasagar-kolkata-jagannath-puri-yatra",
    seo: {
      title: "Gangasagar – Kolkata – Jagannath Puri Yatra | Maitry Holidays",
      description: "Embark on a divine spiritual journey to Gangasagar, Kolkata, and Jagannath Puri. 6-Day tour package with 3-Star hotel stays, train journey & Gujarati meals."
    },
    hero: {
      tag: "Spiritual Pilgrimage Yatra",
      title: "Gangasagar – Kolkata –",
      italicTitle: "Jagannath Puri Yatra",
      description: "\"All pilgrimages can be visited many times, but Gangasagar should be visited at least once in a lifetime.\" Explore the sacred confluence at Gangasagar and visit the Char Dham destination of Jagannath Puri.",
      bgImage: divyaDarshanImg
    },
    metrics: {
      duration: "6 Days / 5 Nights",
      route: "Surat to Surat",
      stayType: "3-Star Hotel Stay",
      mealsType: "Veg Gujarati Meals",
      transitType: "Comfortable Tempo Traveller"
    },
    overview: "Gangasagar is one of India's most sacred pilgrimage destinations, where the holy River Ganga meets the Bay of Bengal. Together with Jagannath Puri, one of the Four Sacred Char Dhams of India and a crucial Hindu pilgrimage site, this tour offers a complete spiritual experience. Enjoy comfortable 3-star stays, train journeys, and delicious Gujarati meals cooked by our experienced cook.",
    itinerary: [
      {
        day: 1,
        title: "Surat to Puri",
        description: "Assemble at Surat Railway Station. Board 22828 – Puri Superfast Express at 8:00 AM. Begin your spiritual journey to Jagannath Puri.",
        iconName: "Train",
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
        iconName: "Sparkles",
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
        iconName: "Compass",
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
        iconName: "Car",
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
        iconName: "Eye",
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
        iconName: "Sparkles",
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
    ],
    inclusions: [
      "Train journey as per the itinerary",
      "All sightseeing and transfers by comfortable Tempo Traveller",
      "Accommodation in comfortable 3-Star Hotels",
      "Delicious Gujarati meals prepared by an experienced Gujarati cook",
      "2 bottles of mineral water per person every day"
    ],
    exclusions: [
      "Personal expenses, laundry, telephone calls, tips, and medicines",
      "Special Puja charges at temples",
      "GST & travel insurance",
      "Optional visits like Chilika Lake entry/boating fees",
      "Any entry fees or optional activities not mentioned in the itinerary"
    ],
    guidelines: [
      "Comfortable clothing and light wear are recommended, especially for the holy dip at Gangasagar confluence.",
      "Carry valid photo identification (Aadhaar Card/Voter ID) for train travel and hotel check-ins.",
      "The itinerary is subject to modification based on train schedules, local weather, and administrative guidelines at Gangasagar and temple authorities."
    ],
    sidebar: {
      tag: "Spiritual Pilgrimage Yatra",
      title: "Gangasagar – Kolkata – Puri",
      startingPrice: "₹18,000",
      departureDate: "20 October 2026",
      list: [
        "Jagannath Puri Dham Darshan",
        "Gangasagar Confluence Holy Dip",
        "Kolkata & Bhubaneswar City Tour",
        "3-Star Hotel Stay & Gujarati Cooked Meals"
      ]
    }
  },
  {
    slug: "kashmir-tour-7-days",
    seo: {
      title: "Kashmir Tour: Experience the Paradise on Earth | Maitry Holidays",
      description: "Experience the breathtaking beauty of Kashmir. 7-Day tour package covering Srinagar, Gulmarg, Sonamarg, and Pahalgam. Stays, transit & delicious Gujarati meals."
    },
    hero: {
      tag: "Nature & Adventure Tour",
      title: "Kashmir Tour:",
      italicTitle: "Paradise on Earth",
      description: "A beautiful 7 Days / 6 Nights tour package covering Srinagar, Gulmarg, Sonamarg, and Pahalgam. Experience the scenic valleys, snow-clad peaks, Dal Lake houseboats, and mouth-watering Gujarati food.",
      bgImage: miniSwitzerlandImg
    },
    metrics: {
      duration: "7 Days / 6 Nights",
      route: "Surat to Surat",
      stayType: "3-Star Hotel Stays",
      mealsType: "Veg Gujarati Meals",
      transitType: "Tempo Traveller / Bus"
    },
    overview: "Kashmir, known as the 'Paradise on Earth', offers breathtaking landscapes, snow-covered mountains, lush green valleys, and pristine alpine rivers. Our curated itinerary allows you to explore Srinagar's Dal Lake houseboat stays and Mughal gardens, take in Sonamarg's glaciers, witness Pahalgam's apple orchards, and experience Gulmarg's snowfall. Enjoy fully managed comfortable stays and pure vegetarian Gujarati meals throughout the tour.",
    itinerary: [
      {
        day: 1,
        title: "Surat to Jammu",
        description: "Board the train from Surat for Jammu. Relax and enjoy the overnight journey as you begin your exciting journey towards the beautiful valley of Kashmir.",
        iconName: "Train",
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
        iconName: "Car",
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
        iconName: "Compass",
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
        iconName: "Snowflake",
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
        iconName: "Mountain",
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
        iconName: "Compass",
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
        iconName: "Train",
        stay: "Tour Completed",
        activities: [
          "Depart from Pahalgam for Jammu in the morning",
          "Arrive at Jammu Railway Station",
          "Board the return train to Surat",
          "Conclude your journey with sweet memories of Kashmir valley"
        ]
      }
    ],
    inclusions: [
      "Train journey as per the itinerary",
      "All sightseeing and transfers by comfortable Tempo Traveller",
      "Accommodation in comfortable 3-Star Hotels",
      "Delicious Gujarati meals prepared by an experienced Gujarati cook",
      "2 bottles of mineral water per person every day"
    ],
    exclusions: [
      "Warm clothing and snow boots rental in Gulmarg (available locally)",
      "Gulmarg Gondola cable car tickets (must be booked online in advance)",
      "Pony rides, local jeep rides, and other optional activities",
      "Personal expenses, laundry, telephone calls, tips, and medicines",
      "GST & travel insurance"
    ],
    guidelines: [
      "Make sure to pack appropriate woolens and winter wear, as temperatures can drop significantly, especially in Gulmarg and Sonamarg.",
      "Gondola ride tickets in Gulmarg sell out very quickly. It is highly recommended to book them online at least 15-20 days in advance.",
      "The itinerary is subject to modification based on weather conditions, road closures (like Zoji La Pass), and local guidelines."
    ],
    sidebar: {
      tag: "Beautiful Valley Tour",
      title: "Kashmir Tour (7 Days)",
      startingPrice: "On Request",
      list: [
        "Explore Srinagar, Gulmarg & Pahalgam",
        "Scenic Sonamarg Glaciers & River",
        "Pure Veg Gujarati Cooked Meals",
        "Comfortable 3-Star Hotel Stay",
        "All Sightseeing & Transfers Included"
      ]
    }
  },
  {
    slug: "north-east-tour-11-days",
    seo: {
      title: "North East Tour: Explore the Hidden Gems | Maitry Holidays",
      description: "Embark on an 11-Day spiritual and scenic tour of North East India. Explore Guwahati, Tawang, Kaziranga Safari & Shillong with comfortable stays & Gujarati meals."
    },
    hero: {
      tag: "Spiritual & Scenic Tour",
      title: "North East Tour:",
      italicTitle: "Explore Hidden Gems",
      description: "An incredible 11 Days / 10 Nights tour program covering the scenic peaks of Arunachal, Kaziranga National Park in Assam, and the waterfalls of Meghalaya. Travel comfortably with pure vegetarian Gujarati meals.",
      bgImage: northEastImg
    },
    metrics: {
      duration: "11 Days / 10 Nights",
      route: "Guwahati to Guwahati",
      stayType: "3-Star Hotel Stays",
      mealsType: "Veg Gujarati Meals",
      transitType: "AC Coach / Traveller"
    },
    overview: "Explore the breathtaking landscapes and cultural diversity of North East India. Discover Bhalukpong, Dirang, and Tawang's high-altitude monasteries in Arunachal Pradesh. Witness the endangered one-horned rhinoceros in Kaziranga National Park. Experience the wettest places, clean villages, and clear rivers in Shillong, Cherrapunji, and Dawki. Our tour provides fully managed hotels, transit, and Gujarati meals prepared by an experienced cook.",
    itinerary: [
      {
        day: 1,
        title: "Guwahati – Bhalukpong",
        description: "Arrival at Guwahati Airport or Railway Station. Begin your journey towards Bhalukpong, the gateway to Arunachal Pradesh. En route, visit historic attractions in Tezpur and relax along the Kameng River in the evening.",
        iconName: "Car",
        stay: "Bhalukpong",
        activities: [
          "Arrive at Guwahati Airport or Railway Station",
          "Proceed towards Bhalukpong",
          "📍 En Route Tezpur: Visit Agnigarh and Cole Park",
          "Arrive at Bhalukpong and check in to the hotel",
          "Spend a peaceful evening along the banks of the Kameng River"
        ]
      },
      {
        day: 2,
        title: "Bhalukpong – Dirang",
        description: "After breakfast, drive towards Dirang, exploring local monasteries, tribal forts, hot water springs, and beautiful orchid gardens along the way.",
        iconName: "Compass",
        stay: "Dirang",
        activities: [
          "🌸 Tipi Orchidarium: Home to hundreds of orchid species and beautiful gardens.",
          "🏯 Dirang Dzong: A historic tribal fort with traditional tribal architecture.",
          "♨️ Hot Water Spring: A naturally occurring hot spring known for its relaxing waters.",
          "🛕 Dirang Monastery: A peaceful Buddhist monastery surrounded by scenic landscapes."
        ]
      },
      {
        day: 3,
        title: "Dirang – Tawang",
        description: "Drive towards the beautiful high-altitude town of Tawang. Cross the scenic Sela Pass, visit mountain war memorials, and spectacular waterfalls.",
        iconName: "Mountain",
        stay: "Tawang",
        activities: [
          "🏔️ Sela Pass: Situated at an altitude of 13,700 ft, offering spectacular snow-covered mountain views.",
          "🏞️ Sela Lake (Paradise Lake): A stunning high-altitude lake surrounded by majestic mountains.",
          "🇮🇳 Jaswant Garh War Memorial: A memorial dedicated to the brave Indian soldier Jaswant Singh Rawat.",
          "💦 Nuranang Waterfall (Jang Falls): One of the most beautiful waterfalls in Arunachal Pradesh.",
          "🛍️ Evening visit to local Tawang Market."
        ]
      },
      {
        day: 4,
        title: "Tawang Local Sightseeing",
        description: "Explore the spiritual, historical, and cultural attractions of Tawang, including the famous Tawang Monastery, Urgelling Monastery, and local markets.",
        iconName: "Compass",
        stay: "Tawang",
        activities: [
          "🛕 Tawang Monastery: The second-largest Buddhist monastery in the world.",
          "🛕 Urgelling Monastery: Birthplace of the 6th Dalai Lama.",
          "🛕 Ani Gompa (Nunnery): A peaceful Buddhist monastery maintained by Buddhist nuns.",
          "🇮🇳 Tawang War Memorial: Dedicated to the Indian soldiers who sacrificed their lives during the 1962 Indo-China War.",
          "🛍️ Craft Centre & Local Market: Shop for local handicrafts, souvenirs, and traditional items."
        ]
      },
      {
        day: 5,
        title: "Bumla Pass & Madhuri Lake Excursion",
        description: "Enjoy a full-day excursion from Tawang. Visit the high-altitude border pass at Bumla and explore beautiful alpine lakes.",
        iconName: "Mountain",
        stay: "Tawang",
        activities: [
          "🏔️ Bumla Pass: Located on the India–China Border (Special permit is mandatory).",
          "🏞️ Sangetsar Lake (Madhuri Lake): A stunning lake made famous by the Bollywood movie Koyla.",
          "🏞️ Pangateng Tso Lake: A beautiful high-altitude lake surrounded by mountains.",
          "Note: Permits for Bumla Pass can be arranged through your hotel or a local travel agent."
        ]
      },
      {
        day: 6,
        title: "Tawang – Bomdila",
        description: "Drive back towards Bomdila, enjoying the scenic beauty of Sela Pass once again. Visit local monasteries and viewpoints.",
        iconName: "Car",
        stay: "Bomdila",
        activities: [
          "Enjoy the scenic drive through Sela Pass once again",
          "🛕 Bomdila Monastery: Seek blessings at the Buddhist monastery",
          "📸 Bomdila View Point: Experience panoramic views of the surrounding hills",
          "🛍️ Explore the local market in the evening"
        ]
      },
      {
        day: 7,
        title: "Bomdila – Kaziranga National Park",
        description: "Descend from the mountains into the plain valley of Assam. Travel to Kaziranga National Park, the home of the One-Horned Rhinoceros, and enjoy local cultural dance performances.",
        iconName: "Compass",
        stay: "Kaziranga",
        activities: [
          "Descend from the mountains into the plains of Assam",
          "🦏 Kaziranga National Park: A UNESCO World Heritage Site famous for the One-Horned Rhinoceros.",
          "🎭 Enjoy an optional Bihu Cultural Dance Performance in the evening."
        ]
      },
      {
        day: 8,
        title: "Kaziranga – Shillong",
        description: "Start with an early morning jeep safari to spot rhinos and other wildlife. Later, drive to Shillong, visiting the picturesque Umiam Lake en route.",
        iconName: "Compass",
        stay: "Shillong",
        activities: [
          "🛻 Jeep Safari (Optional): Spot One-Horned Rhinoceroses, elephants, deer, wild buffaloes, and various bird species.",
          "After breakfast, proceed towards Shillong",
          "🏞️ Umiam Lake (Barapani Lake): A picturesque reservoir surrounded by lush green hills."
        ]
      },
      {
        day: 9,
        title: "Shillong – Cherrapunji – Shillong",
        description: "Enjoy a full-day excursion to Cherrapunji (Sohra), the land of high rain, water falls, and deep caves. Return to Shillong for the night stay.",
        iconName: "Waves",
        stay: "Shillong",
        activities: [
          "💦 NohKaLikai Falls: One of India's tallest plunge waterfalls.",
          "🕳️ Mawsmai Cave: A naturally formed limestone cave.",
          "🌊 Seven Sisters Falls: A spectacular multi-tier waterfall.",
          "🌿 Eco Park: Offers panoramic views of Bangladesh plains.",
          "Optional: Arwah Cave or Double Decker Living Root Bridge (Trekking Required)"
        ]
      },
      {
        day: 10,
        title: "Shillong – Mawlynnong – Dawki – Guwahati",
        description: "Begin your journey early. Visit the clean village of Mawlynnong, cross living root bridges, and experience boating in the crystal-clear Dawki river before heading to Guwahati.",
        iconName: "Car",
        stay: "Guwahati",
        activities: [
          "🏡 Mawlynnong Village: Recognized as Asia's Cleanest Village.",
          "🌉 Living Root Bridge: A naturally formed bridge created by living tree roots.",
          "🚣 Dawki (Umngot River): Famous for its crystal-clear waters and boating experience.",
          "Proceed to Guwahati and check in to the hotel"
        ]
      },
      {
        day: 11,
        title: "Guwahati Sightseeing & Departure",
        description: "After breakfast, enjoy local sightseeing of Guwahati. Visit Kamakhya Temple and Umananda Temple before transferring to the airport or railway station for your onward journey.",
        iconName: "Train",
        stay: "Tour Completed",
        activities: [
          "🛕 Kamakhya Temple: One of India's most revered Shakti Peethas.",
          "⛴️ Umananda Temple: Located on Peacock Island in the Brahmaputra River and reached by ferry.",
          "🛍️ Fancy Bazaar: Popular shopping destination for local products and souvenirs.",
          "Later, transfer to Guwahati Airport or Railway Station for your onward journey."
        ]
      }
    ],
    inclusions: [
      "11 Nights / 12 Days tour program",
      "Accommodation in comfortable 3-Star Hotels",
      "Daily Breakfast & Dinner prepared by an experienced Gujarati Cook",
      "All sightseeing and transfers as per the itinerary"
    ],
    exclusions: [
      "Bumla Pass permit fees and local vehicle charges",
      "Jeep Safari & Elephant Safari charges in Kaziranga National Park",
      "Dawki boating charges & living root bridge entry fees",
      "Personal expenses, laundry, telephone calls, tips, and medicines",
      "GST & travel insurance"
    ],
    guidelines: [
      "Special inner line permits (ILP) are required for entering Arunachal Pradesh. Please provide necessary photos and ID cards well in advance.",
      "Bumla Pass sightseeing requires local registered SUVs which are not included in the standard coach transit.",
      "The itinerary is subject to modification based on local weather, border guidelines, and road conditions."
    ],
    sidebar: {
      tag: "Premium Tour Package",
      title: "North East Tour (12 Days)",
      startingPrice: "₹48,000",
      list: [
        "Arunachal Pass & Serene Monasteries",
        "Kaziranga Rhino Wildlife Spotting",
        "Shillong & Cherrapunji Waterfalls",
        "Pure Veg Gujarati Cooked Meals",
        "Comfortable 3-Star Hotel Stay"
      ]
    }
  },
  {
    slug: "south-india-tour-11-days",
    seo: {
      title: "South India Tour Package: Temples & Scenic Destinations | Maitry Holidays",
      description: "Embark on an 11-Day pilgrimage and scenic tour of South India. Visit Srisailam Mallikarjuna Jyotirlinga, Tirupati Balaji, Vellore Golden Temple, and Kanyakumari."
    },
    hero: {
      tag: "Sacred Temples & Scenic Destinations",
      title: "South India Tour:",
      italicTitle: "Sacred Yatra",
      description: "Experience the spiritual and cultural beauty of Andhra Pradesh, Tamil Nadu, and Kerala, visiting famous Jyotirlingas, temples, beaches, and iconic tourist destinations. Complete with delicious Gujarati meals prepared by an experienced cook.",
      bgImage: divyaDarshanImg
    },
    metrics: {
      duration: "11 Days / 10 Nights",
      route: "Surat to Surat",
      stayType: "3-Star Hotel Stays",
      mealsType: "Veg Gujarati Meals",
      transitType: "Force Urbania Transit"
    },
    overview: "A grand pilgrimage through South India. Seek blessings at Mallikarjuna Temple (Jyotirlinga), Sri Venkateswara Balaji Temple in Tirumala, Sripuram Golden Temple in Vellore, Ramanathaswamy Temple in Rameswaram, and Sree Padmanabhaswamy Temple in Trivandrum. Visit scenic destinations like Dhanushkodi, Kanyakumari, and Kovalam Beach. We offer comfortable 3-star stays, Force Urbania transfers, and traditional Gujarati cooked meals.",
    itinerary: [
      {
        day: 1,
        title: "Surat to Raichur",
        description: "Board 20924 – Humsafar Express from Surat at 1:00 PM. Begin your spiritual journey towards Raichur.",
        iconName: "Train",
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
        iconName: "Car",
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
        iconName: "Car",
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
        iconName: "Sparkles",
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
        iconName: "Compass",
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
        iconName: "Car",
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
        iconName: "Compass",
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
        iconName: "Car",
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
        iconName: "Car",
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
        iconName: "Compass",
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
        iconName: "Train",
        stay: "Tour Completed",
        activities: [
          "Transfer to Trivandrum Railway Station",
          "Board 20923 – Humsafar Express at 7:50 AM",
          "Begin your return journey to Surat",
          "Tour concludes with sweet spiritual memories"
        ]
      }
    ],
    inclusions: [
      "Train journey as per the itinerary",
      "All sightseeing and transfers by Force Urbania",
      "3 AC Sleeper Coach transportation",
      "Accommodation in comfortable 3-Star Hotels",
      "Delicious Gujarati meals prepared by an experienced Gujarati cook"
    ],
    exclusions: [
      "Personal expenses, laundry, telephone calls, tips, and medicines",
      "Special Puja/Darshan ticket charges at temples",
      "GST & travel insurance",
      "Any entry fees or optional activities not mentioned in the itinerary"
    ],
    guidelines: [
      "Special Darshan tokens for Tirumala Balaji should be coordinated well in advance to ensure smooth entry.",
      "Traditional dress codes must be followed when visiting major South Indian temples.",
      "The itinerary is subject to modification based on train availability, weather, and administrative rules at major temples."
    ],
    sidebar: {
      tag: "Sacred Temple Tour",
      title: "South India Tour (11 Days)",
      startingPrice: "₹28,000",
      list: [
        "Mallikarjuna & Rameswaram Jyotirlinga",
        "Tirumala Balaji & Vellore Golden Temple",
        "Dhanushkodi, Kanyakumari & Kovalam Beach",
        "3-Star Hotels & Force Urbania transfers"
      ]
    }
  }
];

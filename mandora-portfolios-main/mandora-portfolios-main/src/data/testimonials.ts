export interface Testimonial {
  name: string;
  role: string;
  location: string;
  platform: string;
  quote: string;
  initials: string;
  international?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    name: "James Richardson",
    role: "Startup Founder",
    location: "🇬🇧 London, UK",
    platform: "Upwork",
    quote: "Manmeetsinh built a React dashboard for our analytics platform. The code quality was excellent, delivery was on time, and communication was seamless throughout.",
    initials: "JR",
    international: true,
  },
  {
    name: "Priya Desai",
    role: "CTO, EduTrack",
    location: "🇮🇳 Ahmedabad",
    platform: "Startup",
    quote: "His Node.js backend architecture was clean and scalable. He understood our requirements quickly and delivered a robust API that handles thousands of requests daily.",
    initials: "PD",
  },
  {
    name: "Dr. Rajesh Solanki",
    role: "Professor",
    location: "🇮🇳 Surat",
    platform: "College",
    quote: "The automatic timetable generation system he built saved our department 10+ hours every semester. Brilliant algorithmic thinking and clean implementation.",
    initials: "RS",
  },
  {
    name: "Arjun Khanna",
    role: "Product Manager",
    location: "🇮🇳 Mumbai",
    platform: "Freelance",
    quote: "The Android app with Firebase integration was delivered ahead of schedule. Already serving 200+ active users with zero downtime since launch.",
    initials: "AK",
  },
  {
    name: "Nisha Patel",
    role: "Hackathon Teammate",
    location: "🇮🇳 Vadodara",
    platform: "Hackathon",
    quote: "Working with Manmeetsinh at Vadodara Hackathon 5.0 was incredible. His technical skills and teamwork helped us reach the finals with Herbarium 2.0.",
    initials: "NP",
  },
  {
    name: "Varun Mehta",
    role: "Founder, LogisticsPro",
    location: "🇮🇳 Surat",
    platform: "Freelance",
    quote: "He delivered a complete React dashboard with real-time tracking in just 2 weeks. Professional, responsive, and the end product exceeded our expectations.",
    initials: "VM",
  },
];

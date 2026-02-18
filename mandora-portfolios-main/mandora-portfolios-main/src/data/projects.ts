export interface Project {
  number: string;
  badge: string;
  title: string;
  description: string;
  tags: string[];
  github: string;
  wide?: boolean;
}

export const projects: Project[] = [
  {
    number: "01",
    badge: "AI Project",
    title: "HealthGenieAI",
    description: "An AI-powered healthcare assistant that provides symptom analysis, health recommendations, and connects users with medical resources using advanced AI APIs.",
    tags: ["React", "Node.js", "MongoDB", "AI APIs"],
    github: "https://github.com/Mandora-Manmeetsinh",
    wide: true,
  },
  {
    number: "02",
    badge: "Hackathon Finalist",
    title: "Herbarium 2.0",
    description: "Digital herbarium with 3D plant models, built for Vadodara Hackathon 5.0. Reached the finals with an interactive botanical exploration experience.",
    tags: ["JavaScript", "CSS", "HTML", "3D"],
    github: "https://github.com/Mandora-Manmeetsinh",
  },
  {
    number: "03",
    badge: "Web App",
    title: "Synapse.io",
    description: "A social media analytics dashboard aggregating data from multiple platforms with real-time insights and engagement metrics.",
    tags: ["React", "Node.js", "APIs"],
    github: "https://github.com/Mandora-Manmeetsinh",
  },
  {
    number: "04",
    badge: "Game",
    title: "Chess Wizards",
    description: "A fully functional browser-based chess game with move validation, check/checkmate detection, and a clean minimal UI.",
    tags: ["JavaScript", "DOM API"],
    github: "https://github.com/Mandora-Manmeetsinh",
  },
  {
    number: "05",
    badge: "Game",
    title: "Cricket Game Simulator",
    description: "A TypeScript-based cricket simulation game with OOP architecture, realistic scoring mechanics, and match commentary.",
    tags: ["TypeScript", "OOP"],
    github: "https://github.com/Mandora-Manmeetsinh",
  },
  {
    number: "06",
    badge: "Utility Tool",
    title: "Automatic Timetable Generator",
    description: "An intelligent college scheduling system that generates conflict-free timetables using constraint-satisfaction algorithms.",
    tags: ["JavaScript", "Algorithms"],
    github: "https://github.com/Mandora-Manmeetsinh",
    wide: true,
  },
  {
    number: "07",
    badge: "Android",
    title: "Student Hub Android App",
    description: "A comprehensive student management app with attendance tracking, grade management, and real-time notifications.",
    tags: ["Kotlin", "Firebase", "Material UI"],
    github: "https://github.com/Mandora-Manmeetsinh",
  },
  {
    number: "08",
    badge: "Dashboard",
    title: "E-Commerce Admin Panel",
    description: "Full-featured admin dashboard with product management, order tracking, analytics charts, and role-based authentication.",
    tags: ["React", "Node.js", "JWT", "Chart.js", "MySQL"],
    github: "https://github.com/Mandora-Manmeetsinh",
  },
];

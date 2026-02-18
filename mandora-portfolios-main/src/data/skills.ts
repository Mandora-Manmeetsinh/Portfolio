export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  color: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    color: "hsl(249, 90%, 69%)",
    skills: [
      { name: "JavaScript", level: 95 },
      { name: "TypeScript", level: 80 },
      { name: "Python", level: 75 },
      { name: "Java", level: 70 },
      { name: "Kotlin", level: 72 },
      { name: "HTML5/CSS3", level: 96 },
      { name: "SQL", level: 68 },
    ],
  },
  {
    title: "Frontend",
    color: "hsl(160, 90%, 69%)",
    skills: [
      { name: "React.js", level: 92 },
      { name: "Next.js", level: 76 },
      { name: "Redux/Zustand", level: 70 },
      { name: "Tailwind CSS", level: 88 },
      { name: "Chart.js/D3", level: 65 },
      { name: "Framer Motion", level: 60 },
      { name: "Responsive/PWA", level: 93 },
    ],
  },
  {
    title: "Backend & Cloud",
    color: "hsl(40, 90%, 69%)",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 85 },
      { name: "GraphQL", level: 62 },
      { name: "REST API", level: 90 },
      { name: "AWS", level: 58 },
      { name: "Docker", level: 65 },
      { name: "GitHub Actions", level: 70 },
    ],
  },
  {
    title: "Database & Mobile",
    color: "hsl(249, 90%, 69%)",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "MySQL/PostgreSQL", level: 72 },
      { name: "Firebase", level: 82 },
      { name: "Redis", level: 50 },
      { name: "Android Kotlin", level: 72 },
      { name: "Git/GitHub", level: 93 },
      { name: "Postman", level: 88 },
    ],
  },
];

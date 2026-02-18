export interface Service {
  title: string;
  price: string;
  unit: string;
}

export const services: Service[] = [
  { title: "Frontend Development", price: "$15", unit: "/hr" },
  { title: "Backend Development", price: "$18", unit: "/hr" },
  { title: "Full Stack Project", price: "$350", unit: "/project" },
  { title: "Database Design", price: "$12", unit: "/hr" },
  { title: "Android Development", price: "$20", unit: "/hr" },
  { title: "AI Integration", price: "$25", unit: "/hr" },
];

import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import ProjectCard from "./ui/ProjectCard";
import { projects } from "@/data/projects";

const Projects = () => {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-xs font-body text-primary mb-2 block">Selected Work</span>
          <h2 className="text-3xl font-heading font-bold text-foreground">
            Projects & <span className="font-serif-accent text-primary">Experiments</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.number} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

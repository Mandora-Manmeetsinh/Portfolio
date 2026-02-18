import { ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => (
  <div
    className={`group relative rounded-lg border border-border bg-card/50 backdrop-blur-sm p-6 transition-all duration-300 hover:border-primary/50 ${
      project.wide ? "md:col-span-2" : ""
    }`}
  >
    {/* Animated top border */}
    <div className="absolute top-0 left-0 h-[2px] w-0 bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-500 group-hover:w-full rounded-t-lg" />

    <div className="flex items-center justify-between mb-4">
      <span className="text-muted-foreground text-xs font-body">{project.number}</span>
      <span className="text-[10px] font-body px-2 py-0.5 rounded-full border border-primary/30 text-primary">
        {project.badge}
      </span>
    </div>

    <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{project.title}</h3>
    <p className="text-xs text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

    <div className="flex flex-wrap gap-1.5 mb-4">
      {project.tags.map((tag) => (
        <span
          key={tag}
          className="text-[10px] font-body px-2 py-0.5 rounded-full bg-muted text-muted-foreground"
        >
          {tag}
        </span>
      ))}
    </div>

    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-xs text-primary hover:text-primary/80 transition-colors"
    >
      <ExternalLink className="w-3 h-3" />
      View on GitHub
    </a>
  </div>
);

export default ProjectCard;

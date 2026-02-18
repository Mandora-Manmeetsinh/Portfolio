import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import StatCard from "./ui/StatCard";

const techPills = ["React", "Node.js", "TypeScript", "MongoDB", "Firebase", "AWS", "Docker", "Kotlin"];
const activityBars = [4, 7, 3, 8, 5, 9, 6, 4, 7, 8, 3, 5, 9, 6, 7, 4, 8, 5, 3, 7];

const Hero = () => (
  <section className="min-h-screen pt-24 pb-16 flex items-center">
    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
      {/* Left */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-xs font-body text-primary mb-4 inline-block">
          Full Stack Developer & Product Builder
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight mb-6">
          Turning Ideas
          <br />
          Into <span className="font-serif-accent text-primary">Products.</span>
        </h1>
        <p className="text-sm text-muted-foreground font-body leading-relaxed mb-8 max-w-md">
          I'm Manmeetsinh Mandora — a full stack developer from Surat, India who ships
          production-ready apps from concept to deployment. Clean code, modern stacks, real results.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 text-xs font-body px-5 py-2.5 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            View My Work <ArrowRight className="w-3 h-3" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-xs font-body px-5 py-2.5 rounded-md border border-border text-foreground hover:bg-muted transition-colors"
          >
            <MessageCircle className="w-3 h-3" /> Let's Talk
          </a>
        </div>
      </motion.div>

      {/* Right */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="space-y-6"
      >
        <div className="grid grid-cols-2 gap-3">
          <StatCard value="31+" label="Projects" delay={0.3} />
          <StatCard value="100+" label="Contributions" delay={0.4} />
          <StatCard value="5+" label="Clients" delay={0.5} />
          <StatCard value="3+" label="Hackathons" delay={0.6} />
        </div>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-1.5">
          {techPills.map((t) => (
            <span key={t} className="text-[10px] font-body px-2 py-0.5 rounded-full border border-border text-muted-foreground">
              {t}
            </span>
          ))}
        </div>

        {/* GitHub activity */}
        <div className="rounded-lg border border-border bg-card/50 p-4">
          <span className="text-[10px] text-muted-foreground font-body mb-2 block">GitHub Activity</span>
          <div className="flex items-end gap-[3px] h-10">
            {activityBars.map((h, i) => (
              <motion.div
                key={i}
                className="flex-1 rounded-sm bg-primary/70"
                initial={{ height: 0 }}
                animate={{ height: `${h * 10}%` }}
                transition={{ duration: 0.5, delay: 0.8 + i * 0.03 }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;

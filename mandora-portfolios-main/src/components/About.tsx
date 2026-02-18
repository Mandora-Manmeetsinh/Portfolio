import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Github, Linkedin, ExternalLink } from "lucide-react";
import ServiceRow from "./ui/ServiceRow";
import { services } from "@/data/services";

const profileLinks = [
  { label: "GitHub", href: "https://github.com/Mandora-Manmeetsinh", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mandora-manmeetsinh-306950296", icon: Linkedin },
  { label: "LeetCode", href: "https://leetcode.com/u/OfAk2AI95N/", icon: ExternalLink },
  { label: "HackerRank", href: "https://www.hackerrank.com/profile/manmeetmandora20", icon: ExternalLink },
  { label: "Code360", href: "#", icon: ExternalLink },
];

const stats = [
  { value: "31+", label: "Repos" },
  { value: "3+", label: "Hackathons" },
  { value: "5+", label: "Clients" },
];

const About = () => {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        {/* Left */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-body text-primary mb-2 block">About Me</span>
          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
            Building <span className="font-serif-accent text-primary">digital</span> products
            <br />that matter
          </h2>

          <div className="space-y-3 text-xs text-muted-foreground font-body leading-relaxed mb-8">
            <p>
              I'm a Full Stack Developer based in Surat, Gujarat with a passion for turning complex
              problems into elegant, user-friendly applications.
            </p>
            <p>
              With experience spanning React, Node.js, Android, and AI integration, I build
              production-grade software from the ground up.
            </p>
            <p>
              I've competed in hackathons, contributed to open-source projects, and delivered solutions
              for clients across India and internationally.
            </p>
            <p>
              When I'm not coding, I'm exploring new technologies, solving problems on LeetCode,
              or mentoring fellow developers.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-6">
            {stats.map((s) => (
              <div key={s.label} className="rounded-lg border border-border bg-card/50 p-3 text-center">
                <div className="text-lg font-heading font-bold text-primary">{s.value}</div>
                <div className="text-[10px] text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {profileLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[10px] font-body px-3 py-1.5 rounded-md border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
              >
                <link.icon className="w-3 h-3" />
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right — Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="text-xs font-body text-secondary mb-2 block">Services & Pricing</span>
          <h3 className="text-xl font-heading font-semibold text-foreground mb-6">
            What I <span className="font-serif-accent text-secondary">offer</span>
          </h3>
          <div>
            {services.map((service, i) => (
              <ServiceRow key={service.title} service={service} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

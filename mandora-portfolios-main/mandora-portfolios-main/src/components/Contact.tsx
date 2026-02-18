import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Mail, Github, Linkedin, MapPin, Clock, Monitor, Globe, Calendar } from "lucide-react";

const infoCards = [
  { icon: MapPin, label: "Location", value: "Surat, Gujarat, India" },
  { icon: Clock, label: "Response Time", value: "Within 24 hours" },
  { icon: Monitor, label: "Work Mode", value: "Remote / Hybrid" },
  { icon: Globe, label: "Languages", value: "English, Hindi, Gujarati" },
  { icon: Calendar, label: "Availability", value: "Open to Freelance" },
];

const Contact = () => {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-body text-primary mb-2 block">Get In Touch</span>
          <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
            Let's Build Something <span className="font-serif-accent text-primary">Great</span>
          </h2>
          <p className="text-xs text-muted-foreground font-body leading-relaxed mb-6">
            Have a project in mind? I'm always open to discussing new opportunities,
            creative ideas, or ways to bring your vision to life.
          </p>

          <a
            href="mailto:manmeetmandora20@gmail.com"
            className="inline-flex items-center gap-2 text-sm font-body text-primary hover:text-primary/80 transition-colors mb-6"
          >
            <Mail className="w-4 h-4" />
            manmeetmandora20@gmail.com
          </a>

          <div className="flex gap-2 mt-4">
            <a
              href="https://github.com/Mandora-Manmeetsinh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/mandora-manmeetsinh-306950296"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-3"
        >
          {infoCards.map((card) => (
            <div
              key={card.label}
              className="flex items-center gap-4 rounded-lg border border-border bg-card/50 backdrop-blur-sm p-4"
            >
              <card.icon className="w-4 h-4 text-primary shrink-0" />
              <div>
                <div className="text-[10px] text-muted-foreground">{card.label}</div>
                <div className="text-xs font-body text-foreground">{card.value}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

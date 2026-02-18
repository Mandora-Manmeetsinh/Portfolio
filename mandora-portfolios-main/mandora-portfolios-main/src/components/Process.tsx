import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Search, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
  { num: "01", title: "Discover & Understand", desc: "Deep dive into your requirements, goals, and target audience to form a clear project vision.", icon: Search },
  { num: "02", title: "Plan & Architecture", desc: "Design the technical architecture, choose the right stack, and create a detailed development roadmap.", icon: PenTool },
  { num: "03", title: "Build & Iterate", desc: "Develop in agile sprints with regular check-ins, testing, and iterative improvements.", icon: Code2 },
  { num: "04", title: "Ship & Support", desc: "Deploy to production, monitor performance, and provide ongoing support and maintenance.", icon: Rocket },
];

const Process = () => {
  const { ref, isInView } = useScrollReveal();

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-xs font-body text-primary mb-2 block">How I Work</span>
          <h2 className="text-3xl font-heading font-bold text-foreground">
            My <span className="font-serif-accent text-primary">Process</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="rounded-lg border border-border bg-card/50 backdrop-blur-sm p-6 group hover:border-primary/50 transition-colors"
            >
              <step.icon className="w-5 h-5 text-primary mb-4" />
              <span className="text-[10px] text-muted-foreground font-body block mb-1">{step.num}</span>
              <h3 className="text-sm font-heading font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-[11px] text-muted-foreground font-body leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;

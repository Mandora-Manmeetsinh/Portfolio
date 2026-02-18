import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import SkillBar from "./ui/SkillBar";
import { skillCategories } from "@/data/skills";

const Skills = () => {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-xs font-body text-primary mb-2 block">Technical Expertise</span>
          <h2 className="text-3xl font-heading font-bold text-foreground">
            Skills & <span className="font-serif-accent text-primary">Proficiency</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((cat) => (
            <div key={cat.title}>
              <h3 className="text-sm font-heading font-semibold text-foreground mb-4 pb-2 border-b border-border">
                {cat.title}
              </h3>
              {cat.skills.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={cat.color}
                  delay={i}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

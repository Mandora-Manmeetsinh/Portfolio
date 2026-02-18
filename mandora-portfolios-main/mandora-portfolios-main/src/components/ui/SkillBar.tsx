import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface SkillBarProps {
  name: string;
  level: number;
  color: string;
  delay?: number;
}

const SkillBar = ({ name, level, color, delay = 0 }: SkillBarProps) => {
  const { ref, isInView } = useScrollReveal(0.3);

  return (
    <div ref={ref} className="mb-3">
      <div className="flex justify-between items-center mb-1">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
          <span className="text-xs text-foreground font-body">{name}</span>
        </div>
        <span className="text-[10px] text-muted-foreground font-body">{level}%</span>
      </div>
      <div className="h-1 w-full rounded-full bg-muted overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: delay * 0.1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export default SkillBar;

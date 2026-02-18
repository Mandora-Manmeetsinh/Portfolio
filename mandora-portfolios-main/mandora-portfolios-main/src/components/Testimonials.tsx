import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import TestimonialCard from "./ui/TestimonialCard";
import { testimonials } from "@/data/testimonials";

const Testimonials = () => {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="testimonials" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-xs font-body text-primary mb-2 block">Client Reviews</span>
          <h2 className="text-3xl font-heading font-bold text-foreground">
            What People <span className="font-serif-accent text-primary">Say</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

import { Star } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => (
  <div className="relative rounded-lg border border-border bg-card/50 backdrop-blur-sm p-6">
    {testimonial.international && (
      <span className="absolute -top-3 right-4 text-[10px] font-body px-2 py-0.5 rounded-full bg-accent text-accent-foreground font-medium">
        International 🌍
      </span>
    )}

    <div className="flex gap-0.5 mb-3">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-3 h-3 fill-accent text-accent" />
      ))}
    </div>

    <p className="text-xs text-muted-foreground font-serif-accent leading-relaxed mb-4">
      "{testimonial.quote}"
    </p>

    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-[10px] font-heading font-bold text-primary">
        {testimonial.initials}
      </div>
      <div>
        <div className="text-xs font-heading font-semibold text-foreground">{testimonial.name}</div>
        <div className="text-[10px] text-muted-foreground">{testimonial.role} · {testimonial.location}</div>
      </div>
    </div>
  </div>
);

export default TestimonialCard;

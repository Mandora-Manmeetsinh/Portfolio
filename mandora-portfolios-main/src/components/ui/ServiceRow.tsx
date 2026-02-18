import { ArrowRight } from "lucide-react";
import type { Service } from "@/data/services";

interface ServiceRowProps {
  service: Service;
  index: number;
}

const ServiceRow = ({ service, index }: ServiceRowProps) => (
  <div className="flex items-center justify-between py-3 border-b border-border/50 group cursor-default">
    <div className="flex items-center gap-3">
      <span className="text-[10px] text-muted-foreground font-body">0{index + 1}</span>
      <span className="text-sm font-body text-foreground group-hover:text-primary transition-colors">
        {service.title}
      </span>
    </div>
    <div className="flex items-center gap-2">
      <span className="text-sm font-heading font-bold text-primary">{service.price}</span>
      <span className="text-[10px] text-muted-foreground">{service.unit}</span>
      <ArrowRight className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  </div>
);

export default ServiceRow;

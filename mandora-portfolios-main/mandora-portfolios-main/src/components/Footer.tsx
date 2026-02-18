const Footer = () => (
  <footer className="border-t border-border/50 py-8">
    <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <a href="#" className="text-lg font-heading font-bold text-foreground">
        MM<span className="text-primary">.</span>
      </a>
      <p className="text-[10px] text-muted-foreground font-body text-center">
        © {new Date().getFullYear()} Manmeetsinh Mandora. Built with passion and clean code.
      </p>
      <p className="text-[10px] text-muted-foreground font-body font-serif-accent">
        Crafting digital experiences
      </p>
    </div>
  </footer>
);

export default Footer;

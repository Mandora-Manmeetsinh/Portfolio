const techs = [
  "React.js", "Node.js", "Next.js", "TypeScript", "MongoDB", "Firebase",
  "Android Dev", "AWS Cloud", "Docker", "GraphQL", "AI Integration",
  "MySQL", "Kotlin", "Python",
];

const Marquee = () => (
  <section className="py-8 border-y border-border/50 overflow-hidden">
    <div className="animate-marquee flex whitespace-nowrap">
      {[...techs, ...techs].map((t, i) => (
        <span
          key={i}
          className="mx-6 text-sm font-heading font-semibold text-muted-foreground/40 uppercase tracking-widest"
        >
          {t}
        </span>
      ))}
    </div>
  </section>
);

export default Marquee;

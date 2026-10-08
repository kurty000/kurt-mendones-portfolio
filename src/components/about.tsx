import { profile } from "@/lib/profile";

export function About() {
  return (
    <section id="about" className="relative border-t border-border/70 bg-mist/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:py-28">
        <div>
          <p className="font-mono text-[11px] tracking-[0.2em] text-signal uppercase">
            About
          </p>
          <h2 className="mt-3 font-heading text-4xl leading-tight font-bold tracking-tight text-ink sm:text-5xl">
            Systems that connect — and stay up.
          </h2>
        </div>
        <div className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {profile.about.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

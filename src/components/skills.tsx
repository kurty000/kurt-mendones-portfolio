import { profile } from "@/lib/profile";

export function Skills() {
  return (
    <section id="skills" className="border-t border-border/70 bg-background">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <p className="font-mono text-[11px] tracking-[0.2em] text-signal uppercase">
          Technical skills
        </p>
        <h2 className="mt-3 max-w-2xl font-heading text-4xl leading-tight font-bold tracking-tight text-ink sm:text-5xl">
          Where I spend my practice hours.
        </h2>

        <ul className="mt-14 space-y-10">
          {profile.skillGroups.map((group, index) => (
            <li
              key={group.name}
              className="grid gap-4 border-b border-border/80 pb-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-10"
            >
              <div>
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-heading text-xl font-semibold text-ink sm:text-2xl">
                    {group.name}
                  </h3>
                  <span className="font-mono text-xs tracking-wider text-muted-foreground tabular-nums">
                    {group.level}/5
                  </span>
                </div>
                <div
                  className="mt-4 h-1.5 overflow-hidden rounded-full bg-secondary"
                  aria-hidden
                >
                  <div
                    className="animate-bar-fill h-full rounded-full bg-signal"
                    style={{
                      width: `${(group.level / 5) * 100}%`,
                      animationDelay: `${index * 0.08}s`,
                    }}
                  />
                </div>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                {group.items}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-16">
          <h3 className="font-heading text-2xl font-semibold text-ink">
            Tools & platforms
          </h3>
          <ul className="mt-6 flex flex-wrap gap-x-3 gap-y-2">
            {profile.tools.map((tool) => (
              <li
                key={tool}
                className="font-mono text-xs tracking-wide text-muted-foreground uppercase before:mr-3 before:text-signal/70 before:content-['/'] first:before:content-none"
              >
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

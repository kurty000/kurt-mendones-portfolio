import { buttonVariants } from "@/components/ui/button";
import { profile } from "@/lib/profile";
import { cn } from "@/lib/utils";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-border/70 bg-[#0b1f2a] text-white"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at 20% 20%, rgba(15,118,110,0.45), transparent 55%), radial-gradient(ellipse at 80% 80%, rgba(201,221,232,0.12), transparent 50%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <p className="font-mono text-[11px] tracking-[0.2em] text-teal-200/90 uppercase">
          Connect
        </p>
        <h2 className="mt-3 max-w-3xl font-heading text-4xl leading-tight font-bold tracking-tight sm:text-5xl">
          Open to opportunities, labs, and IT projects.
        </h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
          Reach out if you need help with networking, infrastructure services, or
          want to collaborate on something practical.
        </p>

        <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-3">
            <a
              href={`mailto:${profile.email}`}
              className="block font-heading text-2xl font-semibold tracking-tight text-white transition-colors hover:text-teal-200 sm:text-3xl"
            >
              {profile.email}
            </a>
            <a
              href={`tel:${profile.phone}`}
              className="block font-mono text-sm tracking-wider text-white/70 transition-colors hover:text-white"
            >
              {profile.phone}
            </a>
          </div>
          <a
            href={`mailto:${profile.email}`}
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-11 w-fit rounded-md bg-white px-5 text-sm tracking-wide text-ink hover:bg-white/90",
            )}
          >
            Start a conversation
          </a>
        </div>
      </div>
    </section>
  );
}

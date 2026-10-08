import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { profile } from "@/lib/profile";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate min-h-[100svh] overflow-hidden text-white"
    >
      <Image
        src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2400&q=80"
        alt="Network infrastructure cabling and switch gear"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[#06202c]/72" />
      <div
        aria-hidden
        className="animate-grid-drift absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div
        aria-hidden
        className="animate-soft-pulse absolute -right-24 top-24 h-72 w-72 rounded-full bg-teal-400/20 blur-3xl"
      />

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 sm:px-8 sm:pb-20">
        <p className="animate-fade-up font-mono text-[11px] tracking-[0.22em] text-teal-200/90 uppercase">
          {profile.title}
        </p>
        <h1 className="animate-fade-up-delay-1 mt-4 max-w-4xl font-heading text-[clamp(2.75rem,9vw,6.5rem)] leading-[0.92] font-extrabold tracking-tight text-white">
          {profile.name}
        </h1>
        <p className="animate-fade-up-delay-2 mt-6 max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl">
          {profile.tagline}
        </p>
        <div className="animate-fade-up-delay-3 mt-10 flex flex-wrap gap-3">
          <a
            href={`mailto:${profile.email}`}
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-11 rounded-md px-5 text-sm tracking-wide",
            )}
          >
            Email me
          </a>
          <a
            href="#skills"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-11 rounded-md border-white/35 bg-transparent px-5 text-sm tracking-wide text-white hover:bg-white/10 hover:text-white",
            )}
          >
            View skills
          </a>
        </div>
      </div>
    </section>
  );
}

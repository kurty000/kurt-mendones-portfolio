import Link from "next/link";
import { profile } from "@/lib/profile";
import { cn } from "@/lib/utils";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/certifications", label: "Certifications" },
  { href: "/#contact", label: "Contact" },
] as const;

type SiteHeaderProps = {
  variant?: "overlay" | "solid";
};

export function SiteHeader({ variant = "overlay" }: SiteHeaderProps) {
  const overlay = variant === "overlay";

  return (
    <header
      className={cn(
        "z-20",
        overlay
          ? "absolute inset-x-0 top-0"
          : "sticky top-0 border-b border-border/70 bg-background/90 backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
        <Link
          href="/"
          className={cn(
            "font-heading text-sm font-semibold tracking-[0.14em] uppercase",
            overlay ? "text-white" : "text-ink",
          )}
        >
          {profile.shortName}
        </Link>
        <nav
          className="flex flex-wrap items-center justify-end gap-x-5 gap-y-2 sm:gap-8"
          aria-label="Primary"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-mono text-[11px] tracking-[0.16em] uppercase transition-colors",
                overlay
                  ? "text-white/80 hover:text-white"
                  : "text-muted-foreground hover:text-ink",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

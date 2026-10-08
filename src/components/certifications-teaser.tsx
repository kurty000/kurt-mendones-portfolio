import Link from "next/link";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/profile";

export function CertificationsTeaser() {
  const count = profile.certifications.length;

  return (
    <section
      id="certifications"
      className="border-t border-border/70 bg-mist/35"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-20 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:py-28">
        <div className="max-w-2xl">
          <p className="font-mono text-[11px] tracking-[0.2em] text-signal uppercase">
            Certifications
          </p>
          <h2 className="mt-3 font-heading text-4xl leading-tight font-bold tracking-tight text-ink sm:text-5xl">
            Proof of training and credentials.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {count > 0
              ? `Browse ${count} certificate${count === 1 ? "" : "s"} with full previews and details.`
              : "A dedicated page for every certificate — ready to fill as credentials are added."}
          </p>
        </div>
        <Button
          render={<Link href="/certifications" />}
          size="lg"
          className="h-11 w-fit rounded-md px-5 text-sm tracking-wide"
        >
          View certifications
        </Button>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import { CertificationsList } from "@/components/certifications-list";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { profile } from "@/lib/profile";

export const metadata: Metadata = {
  title: "Certifications | Kurt Ian A. Mendones",
  description:
    "Professional and training certifications earned by Kurt Ian A. Mendones.",
};

export default function CertificationsPage() {
  return (
    <>
      <SiteHeader variant="solid" />
      <main className="flex-1 bg-background">
        <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
          <p className="font-mono text-[11px] tracking-[0.2em] text-signal uppercase">
            Credentials
          </p>
          <h1 className="mt-3 max-w-3xl font-heading text-4xl leading-tight font-bold tracking-tight text-ink sm:text-6xl">
            Certifications
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Training and credentials that support my work in networking,
            infrastructure services, and IT systems.
          </p>
          <CertificationsList certifications={profile.certifications} />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

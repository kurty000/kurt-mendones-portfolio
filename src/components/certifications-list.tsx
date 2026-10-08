import Image from "next/image";
import type { Certification } from "@/lib/profile";
import { Button } from "@/components/ui/button";

type CertificationsListProps = {
  certifications: Certification[];
};

export function CertificationsList({ certifications }: CertificationsListProps) {
  if (certifications.length === 0) {
    return (
      <div className="mt-14 border-t border-border/80 pt-10">
        <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Certificates will show up here as soon as they are added — title,
          issuer, date, and a clear preview of each credential.
        </p>
      </div>
    );
  }

  return (
    <ul className="mt-14 space-y-14">
      {certifications.map((cert) => (
        <li
          key={cert.id}
          className="grid gap-6 border-t border-border/80 pt-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-12"
        >
          <div className="relative aspect-[4/3] overflow-hidden bg-mist/60 sm:aspect-[16/10]">
            {cert.image ? (
              <Image
                src={cert.image}
                alt={`${cert.title} certificate`}
                fill
                className="object-contain object-center p-3 sm:p-5"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            ) : (
              <div className="flex h-full items-center justify-center px-6 text-center">
                <p className="font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase">
                  Certificate image pending
                </p>
              </div>
            )}
          </div>

          <div className="flex flex-col justify-center">
            <p className="font-mono text-[11px] tracking-[0.2em] text-signal uppercase">
              {cert.issuer}
            </p>
            <h2 className="mt-3 font-heading text-2xl leading-tight font-bold tracking-tight text-ink sm:text-3xl">
              {cert.title}
            </h2>
            <p className="mt-3 font-mono text-xs tracking-wider text-muted-foreground uppercase">
              {cert.date}
            </p>
            {cert.description ? (
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                {cert.description}
              </p>
            ) : null}
            {cert.credentialUrl ? (
              <div className="mt-7">
                <Button
                  render={
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  }
                  size="lg"
                  className="h-11 rounded-md px-5 text-sm tracking-wide"
                >
                  View credential
                </Button>
              </div>
            ) : null}
          </div>
        </li>
      ))}
    </ul>
  );
}

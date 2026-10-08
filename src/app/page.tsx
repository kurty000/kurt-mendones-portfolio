import { About } from "@/components/about";
import { CertificationsTeaser } from "@/components/certifications-teaser";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <CertificationsTeaser />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}

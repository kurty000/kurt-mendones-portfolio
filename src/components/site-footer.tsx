import { profile } from "@/lib/profile";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#07161e] text-white/55">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="font-mono text-[11px] tracking-[0.14em] uppercase">
          © {new Date().getFullYear()} {profile.shortName}
        </p>
        <p className="text-sm">BSIT · Infrastructure Services</p>
      </div>
    </footer>
  );
}

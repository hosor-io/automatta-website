"use client";

import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";

export default function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const next = locale === "en" ? "es" : "en";
    const segments = pathname.split("/");
    segments[1] = next;
    router.push(segments.join("/") || "/");
  };

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const links = [
    { label: tNav("services"), id: "services" },
    { label: tNav("ideaLab"), id: "idea-lab" },
    { label: tNav("pricing"), id: "pricing" },
    { label: tNav("faq"), id: "faq" },
  ];

  return (
    <footer className="border-t border-[#E4E4E7] py-10 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 font-bold text-lg text-[#09090B]">
            Automatta
            <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
          </div>

          <nav className="flex flex-wrap gap-6 justify-center">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="text-sm text-[#71717A] hover:text-[#09090B] transition-colors"
              >
                {l.label}
              </button>
            ))}
            <a
              href="mailto:hello@automatta.ai"
              className="text-sm text-[#71717A] hover:text-[#09090B] transition-colors"
            >
              hello@automatta.ai
            </a>
          </nav>

          <button
            onClick={toggleLocale}
            className="text-sm text-[#71717A] hover:text-[#09090B] transition-colors"
          >
            {locale === "en" ? "ES" : "EN"}
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-[#E4E4E7] text-center text-xs text-[#71717A]">
          {t("rights")}
        </div>
      </div>
    </footer>
  );
}

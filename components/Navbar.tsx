"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleLocale = () => {
    const next = locale === "en" ? "es" : "en";
    const segments = pathname.split("/");
    segments[1] = next;
    router.push(segments.join("/") || "/");
  };

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const links = [
    { label: t("services"), id: "services" },
    { label: t("ideaLab"), id: "idea-lab" },
    { label: t("pricing"), id: "pricing" },
    { label: t("faq"), id: "faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-[#E4E4E7]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-2 font-bold text-xl text-[#09090B]"
        >
          Automatta
          <span className="w-2 h-2 rounded-full bg-[#7C3AED]" />
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="text-sm text-[#52525B] hover:text-[#09090B] transition-colors"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleLocale}
            className="text-sm text-[#52525B] hover:text-[#09090B] transition-colors font-medium"
          >
            {locale === "en" ? "ES" : "EN"}
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="px-4 py-2 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-sm font-medium transition-colors"
          >
            {t("cta")}
          </button>
        </div>

        <button
          className="md:hidden text-[#52525B]"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-b border-[#E4E4E7] px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="text-sm text-[#52525B] hover:text-[#09090B] transition-colors text-left"
            >
              {l.label}
            </button>
          ))}
          <div className="flex items-center gap-4 pt-2 border-t border-[#E4E4E7]">
            <button
              onClick={toggleLocale}
              className="text-sm text-[#52525B] hover:text-[#09090B]"
            >
              {locale === "en" ? "ES" : "EN"}
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="px-4 py-2 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-sm font-medium transition-colors"
            >
              {t("cta")}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

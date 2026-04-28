import { useState, useEffect } from "react";
import logoHeader from "@/assets/logoHeader.png";

const links = [
  { label: "INÍCIO", href: "#inicio" },
  { label: "SOBRE NÓS", href: "#sobre" },
  { label: "ÁREAS DE ATUAÇÃO", href: "#areas" },
  { label: "CONTATO", href: "#contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled ? "bg-navy-deep/95 backdrop-blur shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#inicio" className="flex items-center">
          <img
            src={logoHeader}
            alt="Jansen Advocacia"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[11px] tracking-[0.2em] text-white/85 hover:text-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          aria-label="Menu"
          className="md:hidden text-white"
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-navy-deep/95 backdrop-blur border-t border-white/10">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-xs tracking-[0.2em] text-white/85 hover:text-gold"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
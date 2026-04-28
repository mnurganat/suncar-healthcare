"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, Search, Phone } from "lucide-react";

export default function Navbar() {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  function switchLocale(loc: string) {
    const segments = pathname.split("/");
    segments[1] = loc;
    router.push(segments.join("/") || "/");
  }

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/${locale}/search?q=${encodeURIComponent(query.trim())}`);
      setSearchOpen(false);
      setQuery("");
    }
  }

  const navLinks = [
    { href: `/${locale}/catalog`,  label: t("nav.catalog") },
    { href: `/${locale}/partners`, label: t("nav.partners") },
    { href: `/${locale}/about`,    label: t("nav.about") },
    { href: `/${locale}/services`, label: t("nav.services") },
    { href: `/${locale}/contacts`, label: t("nav.contacts") },
  ];

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "var(--blue)",
        borderBottom: "3px solid var(--accent)",
        boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.18)" : "none",
        transition: "box-shadow 0.2s",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: 68,
          maxWidth: 1400,
          margin: "0 auto",
        }}
        className="px-5 md:px-14"
      >
        {/* Logo */}
        <Link href={`/${locale}`} style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none", flexShrink: 0 }}>
          <div style={{
            width: 38, height: 38,
            background: "var(--accent)",
            display: "flex", alignItems: "center", justifyContent: "center",
            clipPath: "polygon(0 0, 100% 0, 100% 75%, 75% 100%, 0 100%)",
          }}>
            <span style={{ color: "white", fontWeight: 900, fontSize: 12, letterSpacing: "0.05em" }}>SHL</span>
          </div>
          <div>
            <div style={{
              fontFamily: "var(--font-cactus), 'Cactus Classical Serif', serif",
              fontSize: 15, fontWeight: 700, color: "white", lineHeight: 1.1,
            }}>
              Suncar Healthcare LTD
            </div>
            <div style={{ fontSize: 9, color: "rgba(255,255,255,0.35)", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginTop: 2 }}>
              Медицинское оборудование
            </div>
          </div>
        </Link>

        {/* Desktop nav — centered */}
        <div className="hidden md:flex" style={{ alignItems: "center", gap: 28 }}>
          {navLinks.map((link) => {
            const active = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontSize: 13,
                  fontWeight: active ? 700 : 500,
                  color: active ? "var(--accent)" : "rgba(255,255,255,0.7)",
                  textDecoration: "none",
                  letterSpacing: "0.03em",
                  transition: "color 0.15s",
                  paddingBottom: active ? 2 : 0,
                  borderBottom: active ? "2px solid var(--accent)" : "2px solid transparent",
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right: search + locale + CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>

          {/* Search */}
          {searchOpen ? (
            <form onSubmit={handleSearch} style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t("nav.search_placeholder")}
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  padding: "6px 12px",
                  fontSize: 13,
                  outline: "none",
                  color: "white",
                  width: "min(180px, 35vw)",
                  fontFamily: "inherit",
                }}
              />
              <button type="button" onClick={() => setSearchOpen(false)}
                style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(255,255,255,0.5)", display: "flex" }}>
                <X size={16} />
              </button>
            </form>
          ) : (
            <button onClick={() => setSearchOpen(true)}
              style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(255,255,255,0.5)", display: "flex", padding: 4 }}>
              <Search size={17} />
            </button>
          )}

          {/* Locale switcher */}
          <div className="hidden md:flex" style={{ gap: 2 }}>
            {["ru", "kz", "en"].map((loc) => (
              <button
                key={loc}
                onClick={() => switchLocale(loc)}
                style={{
                  background: locale === loc ? "rgba(27,143,168,0.25)" : "none",
                  color: locale === loc ? "var(--accent)" : "rgba(255,255,255,0.35)",
                  border: "none",
                  padding: "3px 7px",
                  fontSize: 10,
                  fontWeight: 700,
                  cursor: "pointer",
                  letterSpacing: "0.08em",
                  fontFamily: "inherit",
                  transition: "color 0.15s",
                }}
              >
                {loc.toUpperCase()}
              </button>
            ))}
          </div>

          {/* CTA — phone as button */}
          <a
            href={`tel:${t("nav.phone").replace(/\s/g, "")}`}
            className="hidden md:flex"
            style={{
              alignItems: "center", gap: 7,
              background: "var(--accent)",
              color: "white",
              fontSize: 12, fontWeight: 700,
              padding: "8px 16px",
              textDecoration: "none",
              letterSpacing: "0.03em",
              whiteSpace: "nowrap",
              transition: "background 0.15s",
            }}
          >
            <Phone size={13} />
            {t("nav.phone")}
          </a>

          {/* Burger */}
          <button className="md:hidden" onClick={() => setOpen(!open)}
            style={{ background: "none", border: "none", cursor: "pointer", color: "white", padding: 4 }}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: "var(--blue-dk, #1e2a38)", borderTop: "1px solid rgba(255,255,255,0.08)", padding: "16px 20px 28px" }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                padding: "12px 0",
                fontSize: 15,
                fontWeight: 600,
                color: pathname.startsWith(link.href) ? "var(--accent)" : "rgba(255,255,255,0.8)",
                textDecoration: "none",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {link.label}
            </Link>
          ))}
          <div style={{ display: "flex", gap: 8, marginTop: 20 }}>
            {["ru", "kz", "en"].map((loc) => (
              <button
                key={loc}
                onClick={() => { switchLocale(loc); setOpen(false); }}
                style={{
                  background: locale === loc ? "var(--accent)" : "rgba(255,255,255,0.08)",
                  color: "white",
                  border: "none",
                  padding: "6px 14px",
                  fontSize: 11,
                  fontWeight: 700,
                  cursor: "pointer",
                  fontFamily: "inherit",
                }}
              >
                {loc.toUpperCase()}
              </button>
            ))}
          </div>
          <a
            href={`tel:${t("nav.phone").replace(/\s/g, "")}`}
            style={{
              display: "flex", alignItems: "center", gap: 8,
              marginTop: 16,
              fontSize: 15, fontWeight: 700,
              color: "var(--accent)",
              textDecoration: "none",
            }}
          >
            <Phone size={16} />
            {t("nav.phone")}
          </a>
        </div>
      )}
    </nav>
  );
}

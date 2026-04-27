import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import Link from "next/link";
import { getCategories, getFeaturedProducts } from "@/lib/supabase/queries";
import CategoryCard from "@/components/catalog/CategoryCard";
import ProductCard from "@/components/catalog/ProductCard";
import ContactSection from "@/components/sections/ContactSection";
import ClinicProcessSection from "@/components/sections/ClinicProcessSection";
import CATEGORIES from "@/data/categoryTree";
import { ArrowRight, Phone } from "lucide-react";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const PARTNERS = [
  "Neurosoft", "Петр Телегин", "Спектромед", "FIAB",
  "Medicraft", "Geltek", "Erenler", "B. Braun", "Aurica", "Mitsubishi",
];

const STATS = [
  { value: "7+",   label: "лет на рынке" },
  { value: "17",   label: "категорий оборудования" },
  { value: "10+",  label: "официальных партнёров" },
  { value: "24/7", label: "сервисная поддержка" },
];

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  let categories: any[] = CATEGORIES.filter(c => c.parent_id === null).slice(0, 12);
  let featuredProducts: any[] = [];
  try {
    const fetched = await getCategories(locale);
    if (fetched.length > 0) categories = fetched.filter((c: any) => !c.parent_id).slice(0, 12) as any;
    featuredProducts = await getFeaturedProducts(locale, 3);
  } catch {}

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section style={{ background: "var(--blue)", color: "white", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", overflow: "hidden" }} className="px-5 md:px-14">

        {/* Orange accent block */}
        <div style={{ position: "absolute", top: 0, right: 0, width: "38%", height: "100%", background: "var(--accent)", opacity: 0.08, clipPath: "polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)" }} />

        <div style={{ maxWidth: 1400, margin: "0 auto", width: "100%", paddingTop: 100, paddingBottom: 80 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 40, alignItems: "end" }} className="hero-grid">

            {/* Left */}
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(232,98,42,0.15)", border: "1px solid rgba(232,98,42,0.3)", padding: "6px 14px", marginBottom: 32 }}>
                <div style={{ width: 6, height: 6, background: "var(--accent)", borderRadius: "50%" }} />
                <span style={{ fontSize: 11, fontWeight: 700, color: "var(--accent)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                  Официальный дистрибьютор
                </span>
              </div>

              <h1 style={{ fontFamily: "var(--font-cactus), 'Cactus Classical Serif', serif", fontSize: "clamp(36px, 5.5vw, 72px)", fontWeight: 700, lineHeight: 1.05, marginBottom: 28, letterSpacing: "-0.02em" }}>
                Диагностическое<br />
                оборудование для<br />
                <span style={{ color: "var(--accent)" }}>медицинских центров</span>
              </h1>

              <p style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.75, maxWidth: 520, marginBottom: 44 }}>
                Поставка, монтаж и сервисное обслуживание медицинской техники по всему Казахстану. Работаем с 2018 года.
              </p>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link href={`/${locale}/catalog`} className="btn-primary" style={{ gap: 8 }}>
                  Смотреть каталог
                  <ArrowRight size={16} />
                </Link>
                <a href="tel:+77018794444" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 24px", border: "1px solid rgba(255,255,255,0.25)", color: "white", textDecoration: "none", fontSize: 13, fontWeight: 600, transition: "border-color 0.2s" }}>
                  <Phone size={15} />
                  +7 (701) 879-44-44
                </a>
              </div>
            </div>

            {/* Right — Stats grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, minWidth: 280 }} className="stats-grid-hero">
              {STATS.map((s, i) => (
                <div key={s.label} style={{ background: i % 2 === 0 ? "rgba(255,255,255,0.05)" : "var(--accent)", padding: "28px 24px" }}>
                  <div style={{ fontFamily: "var(--font-cactus), 'Cactus Classical Serif', serif", fontSize: 40, fontWeight: 700, lineHeight: 1, color: "white" }}>{s.value}</div>
                  <div style={{ fontSize: 11, color: i % 2 === 0 ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.8)", marginTop: 6, lineHeight: 1.3 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom border */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 3, background: "var(--accent)" }} />
      </section>

      {/* ── PARTNERS MARQUEE ─────────────────────────────────────────── */}
      <div style={{ background: "var(--ink)", padding: "14px 0", overflow: "hidden", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ display: "flex", gap: 0, animation: "marquee 22s linear infinite", width: "max-content" }}>
          {[...PARTNERS, ...PARTNERS].map((p, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 0, whiteSpace: "nowrap" }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,0.45)", letterSpacing: "0.1em", textTransform: "uppercase", padding: "0 32px" }}>{p}</span>
              <span style={{ color: "var(--accent)", fontSize: 10 }}>◆</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── CATEGORIES ──────────────────────────────────────────────── */}
      <section style={{ paddingTop: "80px", paddingBottom: "80px" }} className="px-5 md:px-14">
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 40, flexWrap: "wrap", gap: 16 }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: "var(--accent)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 10 }}>
                Каталог
              </div>
              <h2 style={{ fontFamily: "var(--font-cactus), 'Cactus Classical Serif', serif", fontSize: "clamp(24px, 3vw, 40px)", fontWeight: 700, color: "var(--ink)" }}>
                17 направлений<br />медицинской диагностики
              </h2>
            </div>
            <Link href={`/${locale}/catalog`} className="btn-outline">
              Весь каталог
            </Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 2 }}>
            {categories.map((cat: any) => (
              <CategoryCard key={cat.id} category={cat} />
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────────────────── */}
      <ClinicProcessSection />

      {/* ── FEATURED PRODUCTS ────────────────────────────────────────── */}
      {featuredProducts.length > 0 && (
        <section style={{ paddingTop: "80px", paddingBottom: "80px", background: "var(--silver)" }} className="px-5 md:px-14">
          <div style={{ maxWidth: 1400, margin: "0 auto" }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "var(--accent)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>
              Популярные
            </div>
            <h2 style={{ fontFamily: "var(--font-cactus), 'Cactus Classical Serif', serif", fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, color: "var(--ink)", marginBottom: 40 }}>
              Рекомендуемое оборудование
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 2 }}>
              {featuredProducts.map((p: any) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── USP STRIP ────────────────────────────────────────────────── */}
      <section style={{ background: "var(--blue)" }} className="px-5 md:px-14">
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", borderTop: "3px solid var(--accent)" }}>
            {[
              { num: "01", title: "Поставки точно в срок", text: "Чёткие сроки и контроль логистики на каждом этапе" },
              { num: "02", title: "Выгодные цены", text: "Прямые контракты с производителями без посредников" },
              { num: "03", title: "Сертифицированный монтаж", text: "Инженеры с допуском к медицинскому оборудованию" },
              { num: "04", title: "Рассрочка", text: "Гибкие условия оплаты для медицинских учреждений" },
            ].map((item) => (
              <div key={item.num} style={{ padding: "40px 28px", borderRight: "1px solid rgba(255,255,255,0.08)" }}>
                <div style={{ fontFamily: "var(--font-cactus), 'Cactus Classical Serif', serif", fontSize: 48, fontWeight: 700, color: "var(--accent)", opacity: 0.3, lineHeight: 1, marginBottom: 16 }}>
                  {item.num}
                </div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "white", marginBottom: 8 }}>{item.title}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", lineHeight: 1.65 }}>{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────────────── */}
      <ContactSection locale={locale} />
    </>
  );
}

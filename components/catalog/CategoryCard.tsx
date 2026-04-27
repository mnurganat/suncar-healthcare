import Link from "next/link";
import Image from "next/image";
import { useLocale } from "next-intl";
import {
  ChevronRight, Brain, Activity, Heart, Stethoscope,
  Waves, Eye, Wind, Ear, Shield,
  Cpu, Dumbbell, Zap, Scissors, MonitorCheck,
  type LucideIcon,
} from "lucide-react";
import type { Category } from "@/types";

const SLUG_ICONS: Record<string, LucideIcon> = {
  // Слаги из дампа suncarhealthcare.kz
  "eeg":                             Brain,
  "emg":                             Activity,
  "ekg":                             Heart,
  "uzi":                             Waves,
  "iom":                             MonitorCheck,
  "tms":                             Zap,
  "psg":                             Cpu,
  "spiro":                           Wind,
  "reo":                             Activity,
  "surdologiya":                     Ear,
  "sluhovye-apparaty":               Ear,
  "reabilitaciya":                   Dumbbell,
  "biomehanika":                     Stethoscope,
  "psihofiziologiya":                Brain,
  "hirurgiya":                       Scissors,
  "sredstva-individualnoj-zashhity": Shield,
  "erg":                             Eye,
  "sfigmografiya":                   Activity,
};

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const locale = useLocale();
  const Icon = SLUG_ICONS[category.slug] ?? Activity;

  return (
    <Link
      href={`/${locale}/catalog/${category.slug}`}
      style={{
        display: "block",
        background: "white",
        border: "1px solid var(--border)",
        padding: "28px",
        textDecoration: "none",
        color: "inherit",
        transition: "border-color 0.2s, box-shadow 0.2s",
        position: "relative",
      }}
      className="category-card-hover"
    >
      {category.image_url ? (
        <div style={{ width: 48, height: 48, position: "relative", marginBottom: 16 }}>
          <Image src={category.image_url} alt={category.name ?? category.slug} fill style={{ objectFit: "contain" }} />
        </div>
      ) : (
        <div style={{ width: 48, height: 48, background: "var(--blue-lt)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
          <Icon size={24} color="var(--blue)" strokeWidth={1.5} />
        </div>
      )}
      <div style={{ fontSize: 14, fontWeight: 700, color: "var(--ink)", lineHeight: 1.35, marginBottom: 8 }}>
        {category.name ?? category.slug}
      </div>
      {category.description && (
        <div style={{ fontSize: 12, color: "var(--gray)", lineHeight: 1.6, marginBottom: 16 }}>
          {category.description}
        </div>
      )}
      <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 11, fontWeight: 700, color: "var(--accent)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
        Смотреть
        <ChevronRight size={14} />
      </div>
    </Link>
  );
}

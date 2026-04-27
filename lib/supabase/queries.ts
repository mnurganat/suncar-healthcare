/**
 * Data layer — static files, no external database needed.
 * All data lives in /data/*.ts — fast, free, zero dependencies.
 * For leads (contact form) we send email via Resend API.
 */
import type { Category, Product } from "@/types";
import CATEGORIES_RAW from "@/data/categoryTree";
import { SEED_PRODUCTS } from "@/data/seed-products";

// ── helpers ─────────────────────────────────────────────────────────────────

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9а-яё\s-]/gi, "")
    .replace(/\s+/g, "-");
}

// Build products array from seed data once
const ALL_PRODUCTS: Product[] = SEED_PRODUCTS.map((p, i) => {
  const category = CATEGORIES_RAW.find((c) => c.slug === p.category_slug);
  return {
    id:          `prod-${String(i + 1).padStart(2, "0")}`,
    slug:        slugify(p.name_ru),
    category_id: category?.id ?? "",
    price:       "",                       // "По запросу"
    images:      p.image_url ? [p.image_url] : [],
    specs:       [],
    features:    [],
    is_featured: p.is_featured,
    is_active:   true,
    hits:        0,
    created_at:  "",
    name:        p.name_ru,
    description: p.description_ru ?? "",
    category:    category as any,
    // extra fields from seed
    sku:         (p as any).sku ?? "",
    manufacturer:(p as any).manufacturer_ru ?? "",
  } as any;
});

// ── Categories ───────────────────────────────────────────────────────────────

export async function getCategories(_locale = "ru"): Promise<Category[]> {
  return CATEGORIES_RAW.filter((c) => c.is_active).map((c) => ({
    ...c,
    name: c.name,
  })) as Category[];
}

export async function getCategoryBySlug(slug: string, _locale = "ru"): Promise<Category | null> {
  return (CATEGORIES_RAW.find((c) => c.slug === slug && c.is_active) as Category) ?? null;
}

export async function getAllCategorySlugs(): Promise<string[]> {
  return CATEGORIES_RAW.filter((c) => c.is_active).map((c) => c.slug);
}

// ── Products ─────────────────────────────────────────────────────────────────

export async function getProducts(categoryId?: string, _locale = "ru"): Promise<Product[]> {
  const active = ALL_PRODUCTS.filter((p) => p.is_active);
  if (!categoryId) return active;
  return active.filter((p) => p.category_id === categoryId);
}

export async function getProductsByCategory(categorySlug: string, _locale = "ru"): Promise<Product[]> {
  const cat = CATEGORIES_RAW.find((c) => c.slug === categorySlug);
  if (!cat) return [];
  return ALL_PRODUCTS.filter((p) => p.is_active && p.category_id === cat.id);
}

export async function getProductBySlug(slug: string, _locale = "ru"): Promise<Product | null> {
  return ALL_PRODUCTS.find((p) => p.slug === slug && p.is_active) ?? null;
}

export async function getFeaturedProducts(_locale = "ru", limit = 6): Promise<Product[]> {
  return ALL_PRODUCTS.filter((p) => p.is_featured && p.is_active).slice(0, limit);
}

export async function getAllProductSlugs(): Promise<string[]> {
  return ALL_PRODUCTS.filter((p) => p.is_active).map((p) => p.slug);
}

export async function searchProducts(query: string, _locale = "ru"): Promise<Product[]> {
  const q = query.toLowerCase();
  return ALL_PRODUCTS.filter(
    (p) =>
      p.is_active &&
      (p.name?.toLowerCase().includes(q) ||
        p.description?.toLowerCase().includes(q) ||
        (p as any).sku?.toLowerCase().includes(q))
  );
}

// ── SEO meta (static stub) ───────────────────────────────────────────────────

export async function getSeoMeta(
  _entityType: string,
  _entityId: string,
  _locale = "ru"
) {
  return null;
}

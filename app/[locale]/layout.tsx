import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import localFont from "next/font/local";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingContact from "@/components/layout/FloatingContact";
import "../globals.css";

// Body: Roboto (Cyrillic + Latin)
const roboto = Roboto({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-roboto",
  display: "swap",
});

// Headings: Cactus Classical Serif
const cactus = localFont({
  src: "../../public/fonts/CactusClassicalSerif-Regular.woff2",
  variable: "--font-cactus",
  display: "swap",
  weight: "400",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "meta" });

  const localeMap: Record<string, string> = { ru: "ru_KZ", kz: "kk_KZ", en: "en_KZ" };

  return {
    title: {
      default: "Suncar Healthcare — медицинское оборудование в Казахстане",
      template: "%s | Suncar Healthcare",
    },
    description: t("description"),
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://suncarhealthcare.kz"),
    keywords: [
      "медицинское оборудование Казахстан",
      "медоборудование Алматы",
      "оснащение клиник",
      "медицинская техника",
      "Suncar Healthcare Казахстан",
      "suncarhealthcare.kz",
    ],
    authors: [{ name: "Suncar Healthcare", url: "https://suncarhealthcare.kz" }],
    creator: "Suncar Healthcare",
    publisher: "Suncar Healthcare",
    category: "Medical Equipment",
    icons: { icon: "/favicon.ico" },
    openGraph: {
      type: "website",
      locale: localeMap[locale] ?? "ru_KZ",
      alternateLocale: ["ru_KZ", "kk_KZ", "en_KZ"].filter(
        (l) => l !== (localeMap[locale] ?? "ru_KZ")
      ),
      siteName: "Suncar Healthcare",
      title: "Suncar Healthcare — медицинское оборудование",
      description: t("description"),
      url: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://suncarhealthcare.kz"}/${locale}`,
    },
    alternates: {
      canonical: `https://suncarhealthcare.kz/${locale}`,
      languages: {
        "ru-KZ": "https://suncarhealthcare.kz/ru",
        "kk-KZ": "https://suncarhealthcare.kz/kz",
        "en-KZ": "https://suncarhealthcare.kz/en",
        "x-default": "https://suncarhealthcare.kz/ru",
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${roboto.variable} ${cactus.variable}`}>
      <body className="min-h-screen flex flex-col antialiased" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'SF Pro Display', var(--font-roboto), Roboto, sans-serif" }}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingContact />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "suncarhealthcare.kz" },
      { protocol: "https", hostname: "www.suncarhealthcare.kz" },
      { protocol: "https", hostname: "*.supabase.co" },
    ],
  },
  async redirects() {
    return [
      { source: "/", destination: "/ru", permanent: false },
    ];
  },
};

export default withNextIntl(nextConfig);

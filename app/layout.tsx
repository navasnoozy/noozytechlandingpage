import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import { site } from "@/lib/site";

import "./globals.css";

// Inter with optical sizes: large headlines get the tighter display shapes.
// Self-hosted by next/font, so visitors never connect to Google.
const inter = Inter({
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
  variable: "--font-inter",
});

// Every route must be fully static (docs/decisions/0001). The build fails if
// anything renders per request.
export const ensureStatic = "navigation";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  // The home page's search result. Rules in docs/engineering/seo.md; the
  // wording comes from "Why NoOzyTech exists" in docs/product/company.md.
  title: {
    default: `${site.name} – Simple, honest software for life and work`,
    template: `%s – ${site.name}`,
  },
  description:
    "NoOzyTech makes software that feels simple and stays honest. Caps Money Manager tracks your wallets, cards, loans and budgets on Android, with no ads.",
  applicationName: site.name,
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-surface font-sans text-body text-ink antialiased">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-50 focus:rounded-pill focus:bg-action focus:px-5 focus:py-3 focus:text-small focus:text-on-action"
        >
          Skip to content
        </a>
        <main id="content">{children}</main>
      </body>
    </html>
  );
}

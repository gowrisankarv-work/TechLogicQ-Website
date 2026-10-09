import type { Metadata, Viewport } from "next";
import RevealObserver from "@/components/RevealObserver";
import { siteConfig } from "@/lib/site";
import { montserrat } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.message}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "TechLogicQ",
    "technical training",
    "student training",
    "web development services",
    "Java training",
    "full stack development",
    "career-focused learning",
    "job updates",
  ],
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ${siteConfig.message}`,
    description: siteConfig.description,
    url: "/",
    locale: "en_US",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "TechLogicQ – Where Technology Meets Quality Logic" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.message}`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#0A0F2C",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  alternateName: "Tech Logic Q",
  url: siteConfig.url,
  logo: new URL("/logo-mark.png", siteConfig.url).toString(),
  description: siteConfig.description,
  email: siteConfig.contact.email,
  telephone: siteConfig.contact.phoneHref.replace("tel:", ""),
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
  sameAs: siteConfig.social.map((link) => link.href),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="flex min-h-dvh flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-navy-900 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        {children}
        <RevealObserver />
      </body>
    </html>
  );
}

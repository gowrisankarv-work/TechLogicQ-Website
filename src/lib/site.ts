function toSiteUrl(value: string | undefined) {
  const raw = value?.trim().replace(/\/+$/, "");
  if (!raw) return "https://techlogicq.in";
  return /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
}

export const siteConfig = {
  name: "TechLogicQ",
  tagline: "Where Technology Meets Quality Logic",
  pillars: "Technology . Logic . Quality",
  philosophy: "Learn • Build • Grow",
  message: "Building Skills, Creating Technology, Shaping the Future",
  description:
    "At TechLogicQ, we help students build industry-ready skills through practical training, hands-on projects and real-world technology experience. We also build modern digital solutions that help businesses, institutions and organizations solve real-world problems.",
  // Overridden by NEXT_PUBLIC_SITE_URL in each environment (see .env.example); falls back to the production domain.
  url: toSiteUrl(process.env.NEXT_PUBLIC_SITE_URL),
  ogImage: "/og-image.jpg",
  contact: {
    email: "info@techlogicq.in",
    phone: "+91 63841 22546",
    phoneHref: "tel:+916384122546",
    location: "Chennai, Tamil Nadu",
  },
  social: [
    { name: "Instagram", href: "https://www.instagram.com/techlogicq?stkn=MWh6Y3Y3M3BpemF4NQ==" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/techlogicq" },
    // { name: "YouTube", href: "https://www.youtube.com/" },
  ],
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Training", href: "/training" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  // { label: "Academy", href: "/academy" }, // Academy page hidden for now
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
] as const;

export function contactHref(subject: string, type?: string) {
  const params = new URLSearchParams({ subject });
  if (type) params.set("type", type);
  return `/contact?${params.toString()}`;
}

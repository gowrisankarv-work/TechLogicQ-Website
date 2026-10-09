import { Check } from "lucide-react";
import { notFound } from "next/navigation";
import CTASection from "@/components/CTASection";
import Hero from "@/components/Hero";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import { products } from "@/data/content";
import { pageMetadata } from "@/lib/metadata";
import { contactHref, siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return pageMetadata({ title: "Product", description: "", path: "/products" });
  return pageMetadata({
    title: product.name,
    description: product.tagline,
    path: `/products/${product.slug}`,
  });
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const Icon = product.icon;
  const demoHref = contactHref(`${product.name}: Request a demo`, "product");
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.name,
    description: product.description,
    url: new URL(`/products/${product.slug}`, siteConfig.url).toString(),
    applicationCategory: product.applicationCategory,
    operatingSystem: "Web",
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  return (
    <>
      <JsonLd data={jsonLd} />

      <Hero
        eyebrow="Our Products"
        title={
          <span className="inline-flex items-center gap-3">
            <Icon className="h-9 w-9 text-brand-600 sm:h-10 sm:w-10" aria-hidden />
            {product.name}
          </span>
        }
        description={product.tagline}
        primaryCta={{ label: "Request a Demo", href: demoHref }}
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-lg leading-relaxed text-muted">{product.description}</p>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="mt-10 text-2xl font-bold">What You Get</h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {product.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3 rounded-2xl border border-navy-900/8 bg-white p-5">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                    <Check className="h-4 w-4" aria-hidden />
                  </span>
                  <span className="text-sm leading-relaxed text-navy-900">{highlight}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <CTASection
        title={`Ready to see ${product.name} in action?`}
        description="Tell us a little about your institution or business and we'll set up a live walkthrough."
        primaryCta={{ label: "Request a Demo", href: demoHref }}
      />
    </>
  );
}

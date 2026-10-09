import { ArrowRight } from "lucide-react";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import { products } from "@/data/content";
import { pageMetadata } from "@/lib/metadata";
import { contactHref } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Products",
  description:
    "Evalora, our secure online assessment and coding exam platform, and LoyaltyHub, our digital loyalty card platform — built and maintained by TechLogicQ.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <>
      <Hero
        eyebrow="Our Products"
        title="Digital Products We've Built"
        description="Beyond services, we build and maintain our own products that solve real problems for institutions and businesses."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            {products.map((product, i) => {
              const Icon = product.icon;
              return (
                <Reveal key={product.slug} delay={i * 120} className="h-full">
                  <article className="flex h-full flex-col rounded-3xl border border-navy-900/8 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-600/10 sm:p-10">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-navy-800 to-brand-500 text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <h2 className="mt-5 text-2xl font-bold">{product.name}</h2>
                    <p className="mt-3 text-base font-semibold leading-relaxed text-brand-600">{product.tagline}</p>
                    <p className="mt-4 text-sm leading-relaxed text-muted">{product.description}</p>
                    <Link
                      href={`/products/${product.slug}`}
                      className="mt-auto inline-flex min-h-11 items-center gap-1.5 self-start pt-6 text-sm font-semibold text-brand-600 hover:text-brand-700"
                    >
                      Learn More <span className="sr-only">about {product.name}</span>
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </Link>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        title="Want to see a product in action?"
        description="Share a few details about your institution or business and we'll walk you through a live demo."
        primaryCta={{ label: "Request a Demo", href: contactHref("Product demo request", "product") }}
      />
    </>
  );
}

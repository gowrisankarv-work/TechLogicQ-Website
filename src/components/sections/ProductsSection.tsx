import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { products } from "@/data/content";
import { contactHref } from "@/lib/site";
import Reveal from "../Reveal";
import SectionHeader from "../SectionHeader";

export default function ProductsSection() {
  return (
    <section className="bg-surface py-16 sm:py-24" aria-label="Our products">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Products"
          title="Digital Products We've Built"
          description="Beyond services, we build and maintain our own products that solve real problems for institutions and businesses."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {products.map((product, i) => {
            const Icon = product.icon;
            return (
              <Reveal key={product.slug} delay={i * 120} className="h-full">
                <article className="flex h-full flex-col rounded-3xl border border-navy-900/8 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-600/10 sm:p-10">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-navy-800 to-brand-500 text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="mt-5 text-2xl font-bold">
                    <Link href={`/products/${product.slug}`} className="hover:text-brand-600">
                      {product.name}
                    </Link>
                  </h3>
                  <p className="mt-3 text-base font-semibold leading-relaxed text-brand-600">{product.tagline}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{product.description}</p>
                  <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-2 pt-6 text-sm font-semibold">
                    <Link href={`/products/${product.slug}`} className="inline-flex items-center gap-1.5 text-navy-900 hover:text-brand-600">
                      Learn More <span className="sr-only">about {product.name}</span>
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </Link>
                    <Link
                      href={contactHref(`${product.name}: Request a demo`, "product")}
                      className="inline-flex min-h-11 items-center gap-1.5 text-brand-600 hover:text-brand-700"
                    >
                      Request a Demo <span className="sr-only">of {product.name}</span>
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </Link>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

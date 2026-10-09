import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import Hero from "@/components/Hero";
import JsonLd from "@/components/JsonLd";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import { servicesFaqs, services } from "@/data/content";
import { pageMetadata } from "@/lib/metadata";
import { contactHref, siteConfig } from "@/lib/site";

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Web and software development services",
  provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  areaServed: "IN",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "TechLogicQ Services",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: service.title, description: service.description },
    })),
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: servicesFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export const metadata = pageMetadata({
  title: "Web Development Services",
  description:
    "Business websites, portfolios, landing pages, web applications, e-commerce, ERP/CRM tools, digital marketing, web development and Android development from TechLogicQ.",
  path: "/services",
});

const process = [
  { step: "01", title: "Discover", description: "We learn about your goals, audience and requirements." },
  { step: "02", title: "Design & Build", description: "We design and develop a responsive, modern solution." },
  { step: "03", title: "Launch & Support", description: "We launch your project and help keep it up to date." },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={[servicesJsonLd, faqJsonLd]} />

      <Hero
        eyebrow="Web Development Services"
        title="Build Your Digital Presence"
        description="Modern, responsive and scalable websites and web applications for businesses, startups and professionals."
        primaryCta={{ label: "Start a Project", href: contactHref("New web project", "services") }}
        secondaryCta={{ label: "View Services", href: "#services" }}
      />

      <section id="services" className="scroll-mt-24 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="What We Build"
            title="Services for Your Business"
            description="From a single landing page to a custom web application."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => (
              <ServiceCard key={service.title} {...service} delay={(i % 4) * 80} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="How We Work" title="A Simple, Transparent Process" />
          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {process.map((item) => (
              <li key={item.step} className="rounded-2xl border border-navy-900/8 bg-white p-7">
                <span className="font-display text-3xl font-extrabold text-accent-500">{item.step}</span>
                <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="FAQ" title="Frequently Asked Questions" />
          <div className="mt-12">
            <FAQAccordion items={servicesFaqs} />
          </div>
        </div>
      </section>

      <CTASection
        title="Have a project in mind? Let's build it together."
        description="Share a few details about what you need and we'll get back to you."
        primaryCta={{ label: "Start a Project", href: contactHref("New web project", "services") }}
      />
    </>
  );
}

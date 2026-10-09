import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import Hero from "@/components/Hero";
import JsonLd from "@/components/JsonLd";
import SectionHeader from "@/components/SectionHeader";
import TechnologyCard from "@/components/TechnologyCard";
import WhyTechLogicQ from "@/components/sections/WhyTechLogicQ";
import { techCategories, trainingFaqs } from "@/data/content";
import { pageMetadata } from "@/lib/metadata";
import { contactHref } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Training & Skills",
  description:
    "Hands-on technical training in Java, Python, C, Spring Boot, Django, Node.js, React, Angular, Next.js, databases, AWS, Docker and Generative AI at TechLogicQ.",
  path: "/training",
});

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: trainingFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function TrainingPage() {
  return (
    <>
      <JsonLd data={faqJsonLd} />

      <Hero
        eyebrow="Training & Skills"
        title="Build Skills That Matter"
        description="Structured, hands-on training in the languages, frameworks and tools used across the technology industry, from programming fundamentals to modern AI."
        primaryCta={{ label: "Get in Touch", href: contactHref("Training enquiry", "training") }}
      />

      <section className="py-16 sm:py-20" aria-label="Technology categories">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
          {techCategories.map((category, i) => (
            <TechnologyCard key={category.title} {...category} delay={(i % 3) * 100} />
          ))}
        </div>
      </section>

      <WhyTechLogicQ />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="FAQ" title="Frequently Asked Questions" />
          <div className="mt-12">
            <FAQAccordion items={trainingFaqs} />
          </div>
        </div>
      </section>

      <CTASection
        title="Not sure where to begin?"
        description="Tell us about your background and goals, and we'll help you find a learning path that fits."
        primaryCta={{ label: "Get in Touch", href: contactHref("Training enquiry", "training") }}
        secondaryCta={{ label: "View Job Openings", href: "/careers" }}
      />
    </>
  );
}

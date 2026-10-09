// import { ArrowRight } from "lucide-react";
// import ButtonLink from "@/components/ButtonLink";
// import CourseCard from "@/components/CourseCard";
import type { Metadata } from "next";
import FeatureCard from "@/components/FeatureCard";
import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import LearnBuildGrow from "@/components/sections/LearnBuildGrow";
import ProductsSection from "@/components/sections/ProductsSection";
import SocialSection from "@/components/sections/SocialSection";
import WhyTechLogicQ from "@/components/sections/WhyTechLogicQ";
import { coreOfferings } from "@/data/content";
import { siteConfig } from "@/lib/site";
// import { courses } from "@/data/content"; // used by the hidden Academy preview

const accents = ["blue", "orange", "navy", "blue"] as const;

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.message}`,
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero
        variant="home"
        eyebrow="Where Technology Meets Quality Logic"
        pillars
        title={
          <>
            Building Skills, Creating <span className="text-brand-600">Technology</span>,
            <br className="hidden sm:block" /> Shaping the Future
          </>
        }
        description={siteConfig.description}
        primaryCta={{ label: "Start Learning", href: "/training" }}
        secondaryCta={{ label: "Explore Our Services", href: "/services" }}
      />

      <section className="py-16 sm:py-20" aria-label="What we do">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="What We Do"
            title="For Students and Businesses Alike"
            description="Practical training and career support for students, and modern digital solutions for businesses, institutions and organizations."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreOfferings.map((item, i) => (
              <FeatureCard key={item.title} {...item} accent={accents[i]} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>

      <LearnBuildGrow />

      <ProductsSection />

      <WhyTechLogicQ />

      {/* Academy preview hidden while the Academy page is disabled.
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              align="left"
              eyebrow="Academy"
              title="Learn. Practice. Build. Grow."
              description="Practical, career-focused courses built around hands-on projects."
            />
            <ButtonLink href="/academy" variant="secondary" className="self-start md:self-auto">
              View all courses <ArrowRight className="h-4 w-4" aria-hidden />
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses.slice(0, 3).map((course, i) => (
              <CourseCard key={course.title} {...course} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>
      */}

      <SocialSection />
    </>
  );
}

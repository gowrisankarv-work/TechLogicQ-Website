import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Terms of Service",
  description: "The terms that apply to using the TechLogicQ website, training, services and products.",
  path: "/terms",
});

const updated = "October 2026";

export default function TermsPage() {
  return (
    <>
      <Hero eyebrow="Terms of Service" title="Terms of Service" description={`Last updated: ${updated}`} />

      <section className="py-16 sm:py-20">
        <Reveal as="article" className="mx-auto max-w-3xl space-y-8 px-4 text-base leading-relaxed text-muted sm:px-6 lg:px-8">
          <p>
            These terms apply when you use{" "}
            <strong className="text-navy-900">{siteConfig.url.replace(/^https?:\/\//, "")}</strong> or get in touch
            with {siteConfig.name} about training, web and software services, or our products (Evalora and
            LoyaltyHub). By using this website, you agree to these terms.
          </p>

          <div>
            <h2 className="text-xl font-bold text-navy-900">Website content</h2>
            <p className="mt-3">
              Content on this site — including text, graphics, the TechLogicQ logo and course or service
              descriptions — is provided for general information about {siteConfig.name} and may be updated at any
              time without notice. We make reasonable efforts to keep it accurate, but we don&apos;t guarantee it is
              complete, current or error-free.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy-900">Training</h2>
            <p className="mt-3">
              Course content, schedules, formats (online or in-person) and duration are confirmed directly with
              participants and may vary from any general description on this site. Enrolling in training does not
              guarantee a job offer, internship or placement; our Careers page shares opportunities we&apos;re aware of,
              without any guarantee of outcome.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy-900">Services and products</h2>
            <p className="mt-3">
              Web development, software, ERP/CRM, digital marketing and Android development services are scoped and
              agreed with each client individually — the service descriptions on this site are illustrative, not a
              binding quote. Our products, Evalora and LoyaltyHub, are offered under separate terms agreed with each
              institution or business at the time of onboarding.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy-900">Acceptable use</h2>
            <p className="mt-3">When using this website, you agree not to:</p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5">
              <li>Attempt to gain unauthorised access to any part of the site or its systems</li>
              <li>Use the contact form or any form on this site to send spam, malicious content or false information</li>
              <li>Copy or reuse site content, including the TechLogicQ name and logo, without permission</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy-900">Limitation of liability</h2>
            <p className="mt-3">
              This website and its content are provided &quot;as is.&quot; To the extent permitted by law, {siteConfig.name} is
              not liable for indirect or incidental damages arising from your use of this site or reliance on its
              content. Nothing in these terms limits liability that cannot legally be limited.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy-900">Changes to these terms</h2>
            <p className="mt-3">
              We may update these terms as our services change. Continued use of the site after an update means you
              accept the revised terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy-900">Contact us</h2>
            <p className="mt-3">
              Questions about these terms? Reach us at{" "}
              <a href={`mailto:${siteConfig.contact.email}`} className="font-semibold text-brand-600 hover:text-brand-700">
                {siteConfig.contact.email}
              </a>{" "}
              or {siteConfig.contact.phone}.
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}

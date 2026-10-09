import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How TechLogicQ collects, uses and protects information submitted through this website.",
  path: "/privacy",
});

const updated = "October 2026";

export default function PrivacyPage() {
  return (
    <>
      <Hero eyebrow="Privacy Policy" title="Your Privacy" description={`Last updated: ${updated}`} />

      <section className="py-16 sm:py-20">
        <Reveal as="article" className="mx-auto max-w-3xl space-y-8 px-4 text-base leading-relaxed text-muted sm:px-6 lg:px-8">
          <p>
            This Privacy Policy explains what information {siteConfig.name} collects through{" "}
            <strong className="text-navy-900">{siteConfig.url.replace(/^https?:\/\//, "")}</strong>, how it is used, and
            the choices you have. {siteConfig.name} is a small technology training and services business based in{" "}
            {siteConfig.contact.location}; this policy is written in plain language to reflect that.
          </p>

          <div>
            <h2 className="text-xl font-bold text-navy-900">Information we collect</h2>
            <p className="mt-3">
              We only collect information you choose to give us. The main place this happens is our{" "}
              <strong className="text-navy-900">Contact form</strong>, where we ask for your name, email address, phone
              number (optional), subject and message. This information is sent directly to our team by email so we can
              respond to your enquiry — it is not stored in a database, sold, or shared with third parties for
              marketing.
            </p>
            <p className="mt-3">
              If you apply for a role through our Careers page or email us directly, we collect whatever information
              you choose to send (for example, a résumé or portfolio link) for the purpose of considering your
              application.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy-900">Cookies and tracking</h2>
            <p className="mt-3">
              This website does not use advertising or analytics cookies, and we do not run third-party tracking
              scripts on public pages. A session cookie is used only on our internal admin login, which is not
              accessible to site visitors.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy-900">How we use your information</h2>
            <p className="mt-3">We use the information you submit only to:</p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5">
              <li>Respond to enquiries sent through the contact form</li>
              <li>Follow up on training, service, product or career-related requests</li>
              <li>Keep basic records of correspondence for our own reference</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy-900">Third-party services</h2>
            <p className="mt-3">
              Contact form messages are delivered using a standard email-sending service. We may also use common
              infrastructure providers (for hosting and domain services) that process data only as needed to operate
              this website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy-900">Your choices</h2>
            <p className="mt-3">
              You can ask us to tell you what information we hold about you, or to delete correspondence we&apos;ve kept,
              by emailing{" "}
              <a href={`mailto:${siteConfig.contact.email}`} className="font-semibold text-brand-600 hover:text-brand-700">
                {siteConfig.contact.email}
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy-900">Changes to this policy</h2>
            <p className="mt-3">
              We may update this page as the site or our services change. Significant changes will be reflected here
              with an updated date.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy-900">Contact us</h2>
            <p className="mt-3">
              Questions about this policy? Reach us at{" "}
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

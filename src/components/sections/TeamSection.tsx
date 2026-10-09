import { team } from "@/data/content";
import Reveal from "../Reveal";
import SectionHeader from "../SectionHeader";

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export default function TeamSection() {
  return (
    <section className="py-16 sm:py-20" aria-label="Our team">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Our Team" title="The People Behind TechLogicQ" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={i * 100} className="h-full">
              <article className="flex h-full flex-col items-center rounded-2xl border border-navy-900/8 bg-white p-7 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-600/10">
                <span
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-navy-900 text-lg font-bold text-white"
                  aria-hidden
                >
                  {initials(member.name)}
                </span>
                <h3 className="mt-4 text-lg font-semibold">Mr. {member.name}</h3>
                <p className="text-sm font-semibold text-brand-600">{member.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{member.bio}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

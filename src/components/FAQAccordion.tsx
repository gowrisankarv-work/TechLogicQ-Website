import { Plus } from "lucide-react";
import type { FAQ } from "@/data/content";
import Reveal from "./Reveal";

type FAQAccordionProps = {
  items: FAQ[];
};

export default function FAQAccordion({ items }: FAQAccordionProps) {
  return (
    <div className="mx-auto max-w-3xl divide-y divide-navy-900/8 rounded-2xl border border-navy-900/8 bg-white">
      {items.map((item, i) => (
        <Reveal key={item.question} delay={i * 60}>
          <details className="group p-6 open:pb-6 sm:p-7">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold marker:content-none">
              {item.question}
              <Plus
                className="h-5 w-5 shrink-0 text-brand-600 transition-transform duration-200 group-open:rotate-45"
                aria-hidden
              />
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-muted">{item.answer}</p>
          </details>
        </Reveal>
      ))}
    </div>
  );
}

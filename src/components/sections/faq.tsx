import { Container } from "@/components/layout/container";
import { faqItems } from "@/features/faq/data";
import { SectionTitle } from "@/components/ui/section-title";

export function FaqSection() {
  return (
    <section id="faq" className="scroll-mt-32 py-20 sm:py-24">
      <Container className="space-y-8">
        <SectionTitle
          eyebrow="FAQ"
          title="Les questions qui rassurent avant le premier contact"
          description="Une bonne page de coaching leve les freins tout de suite. Cette FAQ est courte, utile et orientee conversion."
        />

        <div className="space-y-4">
          {faqItems.map((item) => (
            <details key={item.question} className="surface-card group rounded-[1.75rem] p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-xl font-semibold text-[var(--color-deep-green)]">
                {item.question}
                <span className="text-2xl text-[var(--color-sand)] transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-4xl text-base leading-8 text-[var(--color-muted)]">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

import { Container } from "@/components/layout/container";
import { SectionTitle } from "@/components/ui/section-title";
import { methodSteps } from "@/lib/constants";

export function MethodSection() {
  return (
    <section id="methode" className="scroll-mt-32 bg-[rgba(255,255,255,0.28)] py-20 sm:py-24">
      <Container className="space-y-8">
        <SectionTitle
          eyebrow="La methode"
          title="Une progression lisible, serieuse et facile a comprendre"
          description="Le site doit inspirer confiance des la premiere visite. Cette section montre que Sabfit ne vend pas juste un PDF, mais une vraie methode de travail."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {methodSteps.map((step, index) => (
            <article
              key={step.id}
              className="group surface-card relative overflow-hidden rounded-[2rem] p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_28px_80px_rgba(16,40,31,0.12)] sm:p-8"
            >
              <div
                className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--color-sand),transparent)] opacity-70"
              />
              <div
                className="absolute inset-y-0 right-0 w-32 bg-[radial-gradient(circle_at_center,rgba(200,168,115,0.12),transparent_68%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
              <div className="flex items-start gap-4">
                <span
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[rgba(22,56,43,0.08)] font-display text-lg font-semibold text-[var(--color-deep-green)] transition-all duration-300 group-hover:scale-110 group-hover:bg-[var(--color-deep-green)] group-hover:text-white"
                >
                  {step.id}
                </span>
                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-green-soft)]">
                    Etape {index + 1}
                  </p>
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-[var(--color-deep-green)]">
                    {step.title}
                  </h3>
                </div>
              </div>
              <p className="mt-5 max-w-xl text-base leading-8 text-[var(--color-muted)]">
                {step.description}
              </p>
              <div className="mt-6 flex items-center justify-between">
                <div className="h-[2px] w-24 bg-[linear-gradient(90deg,var(--color-deep-green),var(--color-sand))]" />
                <p className="text-sm font-medium text-[var(--color-muted)] transition-colors duration-300 group-hover:text-[var(--color-deep-green)]">
                  Progression claire
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

import type { ReactNode } from "react";
import { Container } from "@/components/layout/container";

interface LegalTemplateProps {
  title: string;
  intro: string;
  children: ReactNode;
}

export function LegalTemplate({ title, intro, children }: LegalTemplateProps) {
  return (
    <main className="py-12 sm:py-16">
      <Container className="space-y-8">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-green-soft)]">
            Template legal a personnaliser
          </p>
          <h1 className="font-display text-4xl font-semibold tracking-tight text-[var(--color-deep-green)] sm:text-5xl">
            {title}
          </h1>
          <p className="text-base leading-8 text-[var(--color-muted)]">{intro}</p>
        </div>

        <div className="surface-card rounded-[2rem] p-6 sm:p-10">
          <div className="space-y-8 text-[15px] leading-8 text-[var(--color-muted)]">{children}</div>
        </div>
      </Container>
    </main>
  );
}

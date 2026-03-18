import { Container } from "@/components/layout/container";
import { trustItems } from "@/lib/constants";

export function TrustBarSection() {
  return (
    <section className="py-4 sm:py-6">
      <Container>
        <div className="surface-card expertise-strip relative overflow-hidden rounded-[2rem] p-5">
          <div className="absolute inset-y-0 left-0 w-40 bg-[linear-gradient(90deg,rgba(246,244,238,0.9),transparent)]" />
          <div className="absolute inset-y-0 right-0 w-40 bg-[linear-gradient(270deg,rgba(246,244,238,0.9),transparent)]" />
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {trustItems.map((item, index) => (
              <div
                key={item}
                className="expertise-card group relative flex items-center gap-4 rounded-[1.5rem] border border-[var(--color-line)] bg-white/76 px-5 py-4 transition-all duration-300 hover:-translate-y-1.5 hover:border-[rgba(22,56,43,0.18)] hover:bg-white"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[rgba(22,56,43,0.08)] font-display text-sm font-semibold text-[var(--color-deep-green)] transition-all duration-300 group-hover:scale-110 group-hover:bg-[var(--color-deep-green)] group-hover:text-white">
                  0{index + 1}
                </span>
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-[var(--color-muted)]">
                    Expertise
                  </p>
                  <p className="mt-1 font-display text-xl font-semibold text-[var(--color-deep-green)]">
                    {item}
                  </p>
                </div>
                <div className="absolute inset-x-6 bottom-0 h-px bg-[linear-gradient(90deg,transparent,var(--color-sand),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

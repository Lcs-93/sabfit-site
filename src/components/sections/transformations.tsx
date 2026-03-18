import Image from "next/image";
import { Container } from "@/components/layout/container";
import { transformations } from "@/features/transformations/data";
import { SectionTitle } from "@/components/ui/section-title";

export function TransformationsSection() {
  return (
    <section className="bg-[linear-gradient(180deg,rgba(255,251,244,0.68),rgba(246,244,238,0.96))] py-20 sm:py-24">
      <Container className="space-y-8">
        <SectionTitle
          eyebrow="Transformations"
          title="De la place pour de vraies progressions, sans faux avant / apres"
          description="Tant que vous n'avez pas encore de cas reels, le site reste propre avec des emplacements premium et honnetes. Cela protege la credibilite de Sabfit."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {transformations.map((item) => (
            <article
              key={`${item.objective}-${item.duration}`}
              className="group surface-card overflow-hidden rounded-[2rem] transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_80px_rgba(16,40,31,0.16)]"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.image}
                  alt={`Visuel de demonstration pour ${item.objective}.`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,14,10,0.04),rgba(6,14,10,0.1),rgba(6,14,10,0.72))]" />
                <div className="absolute left-4 top-4 rounded-full border border-white/16 bg-[rgba(255,255,255,0.78)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-deep-green)]">
                  Visuel template
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <p className="text-sm uppercase tracking-[0.18em] text-white/72">{item.objective}</p>
                  <h3 className="mt-2 font-display text-2xl font-semibold">{item.title}</h3>
                </div>
              </div>
              <div className="bg-white/78 p-6 transition-colors duration-300 group-hover:bg-white">
                <p className="text-sm font-medium text-[var(--color-deep-green)]">
                  Duree estimee : {item.duration}
                </p>
                <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">{item.note}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

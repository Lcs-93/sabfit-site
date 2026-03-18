import Image from "next/image";
import { Container } from "@/components/layout/container";
import { testimonials } from "@/features/testimonials/data";
import { SectionTitle } from "@/components/ui/section-title";

export function TestimonialsSection() {
  const ribbonItems = [
    ...testimonials,
    {
      name: "Camille P.",
      focus: "Suivi global",
      quote: "",
      avatar: "/images/coach/review-4.jpg",
      ribbonLabel: "5 etoiles - suivi global",
    },
  ];

  return (
    <section
      id="avis"
      className="scroll-mt-32 border-y border-[rgba(22,56,43,0.08)] bg-[rgba(255,255,255,0.52)] py-20 sm:py-24"
    >
      <Container className="space-y-8">
        <SectionTitle
          eyebrow="Avis & ressenti"
          title="Une maquette qui prevoit deja la preuve sociale"
          description="Ces avis sont des exemples pour la V1. Ils donnent tout de suite la bonne structure visuelle, mais devront etre remplaces par de vrais retours avant la mise en ligne publique."
        />

        <div className="marquee-shell rounded-full border border-[var(--color-line)] bg-white/70 px-4 py-3 shadow-[var(--shadow-soft)]">
          <div className="marquee-track">
            {[...ribbonItems, ...ribbonItems].map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="mx-2 flex items-center gap-3 rounded-full border border-[var(--color-line)] bg-[rgba(246,244,238,0.92)] px-4 py-2"
              >
                <div className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-white">
                  <Image
                    src={item.avatar}
                    alt={`Portrait de demonstration pour ${item.name}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 text-[15px] text-[var(--color-sand)]">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <span key={`${item.name}-${starIndex}`} aria-hidden="true">
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-sm font-medium text-[var(--color-deep-green)]">
                    {item.ribbonLabel}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="group surface-card rounded-[2rem] p-6 transition-transform duration-300 hover:-translate-y-1.5 hover:bg-white sm:p-7"
            >
              <p className="font-display text-5xl leading-none text-[var(--color-sand)]">&ldquo;</p>
              <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
                {testimonial.quote}
              </p>
              <div className="mt-6 border-t border-[var(--color-line)] pt-5">
                <div className="flex items-center gap-3">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-white">
                    <Image
                      src={testimonial.avatar}
                      alt={`Avatar de demonstration pour ${testimonial.name}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-display text-xl font-semibold text-[var(--color-deep-green)]">
                      {testimonial.name}
                    </p>
                    <p className="mt-1 text-sm uppercase tracking-[0.16em] text-[var(--color-green-soft)]">
                      {testimonial.focus}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

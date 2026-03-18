import Image from "next/image";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { buildWhatsAppLink, heroChecklist, siteConfig, whatsappBaseMessage } from "@/lib/constants";

export function HeroSection() {
  return (
    <section id="top" className="section-shell overflow-hidden py-12 sm:py-16">
      <Container className="relative grid gap-10 lg:grid-cols-[1fr_0.92fr] lg:items-center">
        <div className="max-w-3xl">
          <Badge className="border-[var(--color-line)] bg-[rgba(255,255,255,0.7)]">
            Sabfit coaching en ligne
          </Badge>

          <h1 className="mt-6 max-w-3xl text-balance font-display text-4xl font-semibold tracking-tight text-[var(--color-deep-green)] sm:text-5xl lg:text-6xl">
            Musculation, nutrition et suivi personnalise pour des resultats durables.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
            Sabfit vous accompagne avec une approche claire, humaine et structuree pour
            vous aider a developper votre physique, perdre du gras, mieux manger et
            progresser avec methode.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {heroChecklist.map((item) => (
              <li
                key={item}
                className="rounded-[1.35rem] border border-[var(--color-line)] bg-[rgba(255,255,255,0.55)] px-4 py-4 text-sm font-medium text-[var(--color-deep-green)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-0.5 hover:bg-white/85"
              >
                <span className="mr-2 inline-block h-2.5 w-2.5 rounded-full bg-[var(--color-sand)]" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/#offres">Decouvrir les formules</ButtonLink>
            <ButtonLink
              href={buildWhatsAppLink(whatsappBaseMessage)}
              variant="secondary"
            >
              Echanger sur WhatsApp
            </ButtonLink>
          </div>

          <div className="mt-8 flex flex-wrap gap-6 text-sm text-[var(--color-muted)]">
            <p>{siteConfig.responseTime}</p>
            <p>Approche humaine et premium</p>
            <p>V1 prete a evoluer vers une V2 data-driven</p>
          </div>
        </div>

        <div className="relative lg:justify-self-end">
          <div className="absolute inset-6 -z-10 rounded-[2.5rem] bg-[radial-gradient(circle_at_top,_rgba(200,168,115,0.42),_transparent_38%)] blur-3xl" />
          <div className="relative overflow-hidden rounded-[2.3rem] shadow-[var(--shadow-strong)]">
            <Image
              src="/images/coach/coach-stock-3.jpg"
              alt="Portrait de demonstration pour le coach Sabfit."
              width={860}
              height={980}
              priority
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,33,25,0.04),rgba(14,33,25,0.16),rgba(7,17,13,0.76))]" />

            <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5 sm:p-6">
              <Badge className="border-white/14 bg-[rgba(255,255,255,0.78)]">
                Vraie photo temporaire
              </Badge>
              <Badge className="border-white/18 bg-[rgba(22,56,43,0.4)] text-white">
                Sportif naturel
              </Badge>
            </div>

            <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
              <p className="text-sm uppercase tracking-[0.2em] text-white/72">Sabfit</p>
              <p className="mt-2 max-w-sm text-balance font-display text-2xl font-semibold">
                Une image plus humaine, plus directe et plus credible au premier regard.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

import Image from "next/image";
import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button";
import { buildWhatsAppLink, siteConfig, whatsappBaseMessage } from "@/lib/constants";

const footerLinks = [
  { label: "Mentions legales", href: "/mentions-legales" },
  { label: "Politique de confidentialite", href: "/politique-confidentialite" },
  { label: "CGV", href: "/cgv" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] bg-[rgba(255,253,248,0.85)]">
      <Container className="py-10">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div className="space-y-4">
            <div className="relative h-16 w-[4.6rem] overflow-hidden sm:h-18 sm:w-[5.2rem]">
              <Image
                src="/images/hero/logo/sabrish-logo.png"
                alt={`Logo ${siteConfig.name}`}
                fill
                sizes="(max-width: 639px) 74px, 84px"
                className="object-cover object-center"
              />
            </div>
            <p className="max-w-md text-sm leading-7 text-[var(--color-muted)]">
              Musculation, nutrition et accompagnement personnalise dans une approche
              humaine, structuree et durable.
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-deep-green)]">
              Navigation
            </p>
            <div className="flex flex-col items-start gap-2 text-sm text-[var(--color-muted)]">
              {footerLinks.map((link) => (
                <ButtonLink key={link.href} href={link.href} variant="ghost" className="px-0 py-0">
                  {link.label}
                </ButtonLink>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-deep-green)]">
              Contact
            </p>
            <p className="text-sm text-[var(--color-muted)]">{siteConfig.whatsappDisplay}</p>
            <p className="text-sm text-[var(--color-muted)]">{siteConfig.email}</p>
            <ButtonLink
              href={buildWhatsAppLink(whatsappBaseMessage)}
              variant="secondary"
              className="mt-2"
            >
              Contacter Sabfit
            </ButtonLink>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-[var(--color-line)] pt-6 text-sm text-[var(--color-muted)] md:flex-row md:items-center md:justify-between">
          <p>Sabfit - Auto-entreprise - Template a completer avant mise en ligne reelle.</p>
          <p>{siteConfig.location}</p>
        </div>
      </Container>
    </footer>
  );
}

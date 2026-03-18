import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button";
import { buildWhatsAppLink, navItems, siteConfig, whatsappBaseMessage } from "@/lib/constants";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-line)] bg-[rgba(246,244,238,0.82)] backdrop-blur-xl">
      <Container className="py-4">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-deep-green)] text-sm font-semibold tracking-[0.24em] text-white">
              SF
            </div>
            <div>
              <p className="font-display text-lg font-semibold tracking-tight text-[var(--color-deep-green)]">
                {siteConfig.name}
              </p>
              <p className="text-sm text-[var(--color-muted)]">Coaching musculation & nutrition</p>
            </div>
          </div>

          <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
            <nav className="flex flex-wrap items-center gap-2 text-sm text-[var(--color-muted)]">
              {navItems.map((item) => (
                <ButtonLink
                  key={item.href}
                  href={item.href}
                  variant="ghost"
                  className="px-3 py-2 text-sm"
                >
                  {item.label}
                </ButtonLink>
              ))}
            </nav>

            <ButtonLink href={buildWhatsAppLink(whatsappBaseMessage)} className="w-full lg:w-auto">
              Echanger sur WhatsApp
            </ButtonLink>
          </div>
        </div>
      </Container>
    </header>
  );
}

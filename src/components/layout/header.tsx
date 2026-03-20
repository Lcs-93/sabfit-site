"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  CircleHelp,
  LayoutGrid,
  Map,
  Menu,
  MessageCircle,
  Star,
  X,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button";
import { buildWhatsAppLink, navItems, siteConfig, whatsappBaseMessage } from "@/lib/constants";
import { cn } from "@/lib/utils";

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
      <path d="M20.52 3.449A11.42 11.42 0 0 0 12.35 0C6.1 0 1.02 5.08 1.02 11.33c0 1.99.52 3.93 1.5 5.64L0 24l7.25-2.38a11.35 11.35 0 0 0 5.09 1.21h.01c6.25 0 11.33-5.08 11.33-11.33a11.3 11.3 0 0 0-3.16-8.05zM12.36 20.9h-.01a9.44 9.44 0 0 1-4.81-1.32l-.35-.21-4.3 1.41 1.41-4.2-.23-.36a9.39 9.39 0 0 1-1.44-5.03c0-5.18 4.22-9.4 9.4-9.4 2.51 0 4.87.98 6.65 2.76a9.34 9.34 0 0 1 2.75 6.66c0 5.18-4.22 9.41-9.41 9.41zm5.16-7.04c-.28-.14-1.65-.81-1.91-.9-.26-.1-.45-.14-.64.14-.19.28-.74.9-.91 1.08-.17.19-.33.21-.61.07-.28-.14-1.18-.43-2.25-1.38-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.33.42-.5.14-.17.19-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.12-.23-.55-.46-.48-.64-.49h-.54c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.44 0 1.43 1.03 2.81 1.17 3 .14.19 2.02 3.09 4.89 4.33.68.29 1.21.46 1.63.59.68.22 1.3.19 1.8.12.55-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.26-.19-.54-.33z" />
    </svg>
  );
}

const navIcons: Record<string, LucideIcon> = {
  Offres: LayoutGrid,
  Methode: Map,
  Avis: Star,
  FAQ: CircleHelp,
  Contact: MessageCircle,
};

interface HeaderLinkProps {
  label: string;
  href: string;
  mobile?: boolean;
  transparent?: boolean;
  onNavigate?: () => void;
}

function HeaderLink({
  label,
  href,
  mobile = false,
  transparent = false,
  onNavigate,
}: HeaderLinkProps) {
  const Icon = navIcons[label] ?? LayoutGrid;

  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={cn(
        "group relative transition-all duration-250",
        mobile
          ? "flex items-center justify-between rounded-[1.2rem] border border-[rgba(22,56,43,0.08)] bg-white/78 px-4 py-3"
          : transparent
            ? "flex h-11 items-center gap-2 rounded-full px-2.5 text-white hover:text-white"
            : "flex h-11 items-center gap-2 rounded-full px-3 text-[var(--color-muted)] hover:text-[var(--color-deep-green)]",
      )}
    >
      {!mobile ? (
        <span
          className={cn(
            "absolute inset-0 rounded-full transition-opacity duration-250",
            transparent
              ? "bg-white/14 opacity-0 backdrop-blur-md group-hover:opacity-100"
              : "bg-white/82 opacity-0 shadow-[0_10px_26px_rgba(16,40,31,0.08)] group-hover:opacity-100",
          )}
        />
      ) : null}

      <span
        className={cn(
          "relative z-10 flex items-center justify-center rounded-full transition-all duration-250",
          mobile
            ? "h-10 w-10 bg-[rgba(22,56,43,0.08)] text-[var(--color-deep-green)]"
            : transparent
              ? "h-8 w-8 bg-white/18 text-white shadow-[0_10px_24px_rgba(0,0,0,0.16)] group-hover:-translate-y-0.5 group-hover:bg-white/28 group-hover:text-white"
              : "h-8 w-8 bg-[rgba(22,56,43,0.06)] text-[var(--color-green-soft)] group-hover:-translate-y-0.5 group-hover:bg-[var(--color-deep-green)] group-hover:text-white",
        )}
      >
        <Icon
          aria-hidden="true"
          className={cn(
            "stroke-[2.05]",
            mobile ? "h-[1.08rem] w-[1.08rem]" : "h-[0.95rem] w-[0.95rem]",
          )}
        />
      </span>

      <span
        className={cn(
          "relative z-10 font-medium transition-colors duration-250",
          mobile
            ? "text-[15px] text-[var(--color-deep-green)]"
            : transparent
              ? "text-[14px] text-white [text-shadow:0_1px_10px_rgba(0,0,0,0.36)]"
              : "text-[14px]",
        )}
      >
        {label}
      </span>

      {mobile ? (
        <ArrowRight aria-hidden="true" className="relative z-10 h-[1rem] w-[1rem] text-[var(--color-muted)]" />
      ) : (
        <span
          className={cn(
            "absolute inset-x-4 bottom-1 h-px origin-left scale-x-0 transition-transform duration-250 group-hover:scale-x-100",
            transparent
              ? "bg-[linear-gradient(90deg,rgba(200,168,115,0.88),rgba(255,255,255,0.95))]"
              : "bg-[linear-gradient(90deg,var(--color-sand),var(--color-deep-green))]",
          )}
        />
      )}
    </Link>
  );
}


export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const { body, documentElement } = document;
    const previousBodyOverflow = body.style.overflow;
    const previousHtmlOverflow = documentElement.style.overflow;

    if (menuOpen) {
      body.style.overflow = "hidden";
      documentElement.style.overflow = "hidden";
    }

    return () => {
      body.style.overflow = previousBodyOverflow;
      documentElement.style.overflow = previousHtmlOverflow;
    };
  }, [menuOpen]);

  const overlayOnHero = pathname === "/";
  const transparentDesktop = overlayOnHero && !isScrolled && !menuOpen;

  return (
    <header
      className={cn(
        "top-0 z-50 transition-all duration-300",
        overlayOnHero ? "fixed inset-x-0" : "sticky",
        transparentDesktop
          ? "border-b border-transparent bg-transparent backdrop-blur-0"
          : "border-b border-[rgba(22,56,43,0.08)] bg-[rgba(246,244,238,0.46)] shadow-[0_10px_30px_rgba(16,40,31,0.06)] backdrop-blur-2xl",
      )}
    >
      <Container className="py-3 sm:py-4">
        <div className="relative">
          <div
            className="flex items-center justify-between gap-3 px-3 py-2.5 transition-all duration-300 sm:px-4 xl:grid xl:grid-cols-[auto_minmax(0,1fr)_auto] xl:items-center xl:gap-5 2xl:gap-6"
          >
            <Link href="/#top" className="group flex min-w-0 items-center py-1.5 xl:justify-self-start">
              <p
                className={cn(
                  "font-display text-[1.3rem] font-semibold tracking-tight sm:text-[1.5rem]",
                  transparentDesktop
                    ? "text-white [text-shadow:0_1px_14px_rgba(0,0,0,0.4)]"
                    : "text-[var(--color-deep-green)]",
                )}
              >
                {siteConfig.name}
              </p>
            </Link>

            <div className="hidden xl:flex items-center justify-center xl:min-w-0">
              <nav
                className={cn(
                  "flex items-center gap-0.5 rounded-full px-1 py-1 transition-all duration-300",
                  transparentDesktop
                    ? "border border-white/16 bg-[rgba(10,16,13,0.24)] shadow-[0_16px_38px_rgba(0,0,0,0.28)] backdrop-blur-xl"
                    : "border border-[rgba(22,56,43,0.08)] bg-[rgba(255,255,255,0.58)] shadow-[0_12px_28px_rgba(16,40,31,0.05)]",
                )}
              >
                {navItems.map((item) => (
                  <HeaderLink
                    key={item.href}
                    label={item.label}
                    href={item.href}
                    transparent={transparentDesktop}
                  />
                ))}
              </nav>
            </div>

            <div className="hidden xl:flex items-center justify-end xl:justify-self-end">
              <ButtonLink
                href={buildWhatsAppLink(whatsappBaseMessage)}
                className={cn(
                  "group min-h-[3.55rem] min-w-[14.6rem] gap-3 rounded-full px-3.5 py-2.5 transition-all duration-300",
                  transparentDesktop
                    ? "border border-white/18 bg-[rgba(255,255,255,0.18)] text-white shadow-[0_18px_35px_rgba(0,0,0,0.22)] backdrop-blur-xl hover:bg-[rgba(255,255,255,0.24)] hover:shadow-[0_24px_46px_rgba(0,0,0,0.28)]"
                    : "bg-[linear-gradient(135deg,var(--color-deep-green),var(--color-green-soft))] text-white shadow-[0_18px_35px_rgba(16,40,31,0.16)] hover:shadow-[0_24px_46px_rgba(16,40,31,0.2)]",
                )}
              >
                <span className="flex items-center justify-center text-white transition-transform duration-250 group-hover:scale-105">
                  <WhatsAppIcon />
                </span>

                <span className="flex flex-col items-start leading-none">
                  <span className="text-[10px] uppercase tracking-[0.18em] text-white/72">
                    WhatsApp
                  </span>
                  <span className="whitespace-nowrap text-[0.9rem] font-semibold text-white [text-shadow:0_1px_10px_rgba(0,0,0,0.34)]">
                    Parler maintenant
                  </span>
                </span>

                <ArrowRight
                  aria-hidden="true"
                  className="ml-auto h-[1.02rem] w-[1.02rem] text-white/82 transition-transform duration-250 group-hover:translate-x-0.5"
                />
              </ButtonLink>
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className={cn(
                "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-colors xl:hidden",
                transparentDesktop
                  ? "border border-white/16 bg-[rgba(255,255,255,0.14)] text-white shadow-[0_12px_28px_rgba(0,0,0,0.18)] backdrop-blur-md hover:bg-[rgba(255,255,255,0.22)]"
                  : "border border-[rgba(22,56,43,0.08)] bg-[rgba(255,255,255,0.62)] text-[var(--color-deep-green)] shadow-[0_10px_24px_rgba(16,40,31,0.08)] backdrop-blur-xl hover:bg-[rgba(255,255,255,0.78)]",
              )}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {menuOpen ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
            </button>
          </div>

          <div
            className={cn(
              "transition-all duration-300 xl:hidden",
              menuOpen
                ? "mt-3 max-h-[calc(100vh-6.5rem)] overflow-y-auto overscroll-contain opacity-100"
                : "max-h-0 overflow-hidden opacity-0",
            )}
          >
            <div className="surface-card rounded-[1.9rem] p-3">
              <div className="grid gap-2">
                {navItems.map((item) => (
                  <HeaderLink
                    key={item.href}
                    label={item.label}
                    href={item.href}
                    mobile
                    onNavigate={() => setMenuOpen(false)}
                  />
                ))}
              </div>

              <div className="mt-3 rounded-[1.45rem] border border-[rgba(22,56,43,0.08)] bg-[linear-gradient(135deg,rgba(22,56,43,0.98),rgba(39,75,58,0.96))] p-3.5 text-white shadow-[0_18px_45px_rgba(16,40,31,0.16)]">
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-[0.16em] text-white/70">WhatsApp direct</p>
                  <p className="mt-1 text-base font-semibold text-white">Parlez-nous maintenant</p>
                  <p className="mt-1 text-sm leading-relaxed text-white/72">
                    Reponse rapide pour choisir votre formule.
                  </p>
                </div>

                <ButtonLink
                  href={buildWhatsAppLink(whatsappBaseMessage)}
                  className="mt-4 w-full justify-between rounded-[1.2rem] bg-white px-4 py-3.5 text-[var(--color-deep-green)] shadow-none hover:bg-[#fffaf0]"
                >
                  <span className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[rgba(22,56,43,0.08)] text-[var(--color-deep-green)]">
                      <WhatsAppIcon />
                    </span>
                    <span className="flex flex-col items-start leading-none">
                      <span className="text-[15px] font-semibold text-[var(--color-deep-green)]">
                        Envoyer un message
                      </span>
                    </span>
                  </span>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[rgba(22,56,43,0.08)]">
                    <ArrowRight aria-hidden="true" className="h-[1rem] w-[1rem]" />
                  </span>
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}

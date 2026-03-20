"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowRight, Layers3 } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button, ButtonLink } from "@/components/ui/button";
import { consumePendingHomeSection, scrollToHomeSection } from "@/lib/home-scroll";
import {
  buildWhatsAppLink,
  heroHighlights,
  heroRotatingPhrases,
  siteConfig,
  whatsappBaseMessage,
} from "@/lib/constants";

function WhatsAppGlyph() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-5.5 w-5.5">
      <path d="M20.52 3.449A11.42 11.42 0 0 0 12.35 0C6.1 0 1.02 5.08 1.02 11.33c0 1.99.52 3.93 1.5 5.64L0 24l7.25-2.38a11.35 11.35 0 0 0 5.09 1.21h.01c6.25 0 11.33-5.08 11.33-11.33a11.3 11.3 0 0 0-3.16-8.05zM12.36 20.9h-.01a9.44 9.44 0 0 1-4.81-1.32l-.35-.21-4.3 1.41 1.41-4.2-.23-.36a9.39 9.39 0 0 1-1.44-5.03c0-5.18 4.22-9.4 9.4-9.4 2.51 0 4.87.98 6.65 2.76a9.34 9.34 0 0 1 2.75 6.66c0 5.18-4.22 9.41-9.41 9.41zm5.16-7.04c-.28-.14-1.65-.81-1.91-.9-.26-.1-.45-.14-.64.14-.19.28-.74.9-.91 1.08-.17.19-.33.21-.61.07-.28-.14-1.18-.43-2.25-1.38-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.33.42-.5.14-.17.19-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.12-.23-.55-.46-.48-.64-.49h-.54c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.44 0 1.43 1.03 2.81 1.17 3 .14.19 2.02 3.09 4.89 4.33.68.29 1.21.46 1.63.59.68.22 1.3.19 1.8.12.55-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.26-.19-.54-.33z" />
    </svg>
  );
}

export function HeroSection() {
  const [activePhrase, setActivePhrase] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [highlightImages, setHighlightImages] = useState(() =>
    heroHighlights.map((item) => item.images[0]),
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPreference = () => setPrefersReducedMotion(mediaQuery.matches);

    syncPreference();
    mediaQuery.addEventListener("change", syncPreference);

    return () => mediaQuery.removeEventListener("change", syncPreference);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const interval = window.setInterval(() => {
      setActivePhrase((current) => (current + 1) % heroRotatingPhrases.length);
    }, 2200);

    return () => window.clearInterval(interval);
  }, [prefersReducedMotion]);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setHighlightImages(
        heroHighlights.map((item) => {
          const randomIndex = Math.floor(Math.random() * item.images.length);
          return item.images[randomIndex];
        }),
      );
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const pendingSection = consumePendingHomeSection();

    if (!pendingSection) {
      return;
    }

    let secondFrame = 0;
    const firstFrame = window.requestAnimationFrame(() => {
      secondFrame = window.requestAnimationFrame(() => {
        scrollToHomeSection(pendingSection);
      });
    });

    return () => {
      window.cancelAnimationFrame(firstFrame);
      if (secondFrame) {
        window.cancelAnimationFrame(secondFrame);
      }
    };
  }, []);

  return (
    <section id="top" className="overflow-hidden pb-12 sm:pb-14">
      <div className="hero-cover relative isolate min-h-[72svh] overflow-hidden sm:min-h-[78svh] lg:min-h-[82svh]">
        <Image
          src="/images/hero/hero-wide-coaching.jpg"
          alt="Coach sportif avec son client dans une salle, en format large pour le hero Sabfit."
          fill
          priority
          sizes="100vw"
          className="object-cover object-[68%_center]"
        />

        <div className="hero-cover-overlay absolute inset-0" />

        <Container className="relative z-10 flex min-h-[72svh] items-end py-12 sm:min-h-[78svh] sm:py-16 lg:min-h-[82svh] lg:py-20">
          <div className="hero-cover-shell w-full">
            <div className="hero-cover-panel max-w-[43rem]">
              <div className="hero-eyebrow" aria-label="Sabfit coaching en ligne">
                <span className="hero-eyebrow-line" aria-hidden="true" />
                <span className="hero-eyebrow-text">Sabfit coaching en ligne</span>
              </div>

              <h1 className="hero-cover-title mt-6 max-w-[12ch] font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[5.2rem]">
                <span className="hero-title-line hero-title-line-1">Musculation,</span>
                <span className="hero-title-line hero-title-line-2">nutrition et suivi</span>
                <span className="hero-title-line hero-title-line-3">personnalise</span>
              </h1>

              <div className="mt-4 min-h-[4.4rem] max-w-[24rem] sm:min-h-[3.3rem] sm:max-w-[31rem]">
                <p
                  key={heroRotatingPhrases[activePhrase]}
                  className="hero-inline-rotator hero-inline-rotator-light text-balance text-lg font-medium sm:text-[1.45rem]"
                >
                  {heroRotatingPhrases[activePhrase]}
                </p>
              </div>

              <p className="mt-6 max-w-[39rem] text-lg leading-8 text-white/82 sm:text-[1.16rem]">
                Sabfit vous aide a prendre de la masse, perdre du gras et mieux structurer
                votre alimentation avec une methode claire, serieuse et durable.
              </p>

              <div className="hero-credential mt-5">
                <span className="hero-credential-kicker">Qualification</span>
                <span className="hero-credential-text">
                  Titulaire du CQP Instructeur Fitness
                </span>
              </div>

              <div className="mt-8">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
                  <Button
                    type="button"
                    onClick={() => scrollToHomeSection("offres")}
                    className="hero-cta hero-cta-light-primary w-full sm:min-w-[18.5rem]"
                  >
                    <span className="hero-cta-visual hero-cta-visual-light" aria-hidden="true">
                      <span className="hero-cta-visual-main">
                        <Layers3 className="h-[1.2rem] w-[1.2rem]" />
                      </span>
                    </span>

                    <span className="hero-cta-content">
                      <span className="hero-cta-label hero-cta-label-dark">Voir les formules</span>
                    </span>
                    <span className="hero-cta-badge hero-cta-badge-dark" aria-hidden="true">
                      <ArrowRight className="h-[1rem] w-[1rem]" />
                    </span>
                  </Button>

                  <ButtonLink
                    href={buildWhatsAppLink(whatsappBaseMessage)}
                    variant="secondary"
                    className="hero-cta hero-cta-glass w-full sm:min-w-[18.5rem]"
                  >
                    <span className="hero-cta-visual hero-cta-visual-glass" aria-hidden="true">
                      <span className="hero-cta-visual-main">
                        <WhatsAppGlyph />
                      </span>
                    </span>
                    <span className="hero-cta-content">
                      <span className="hero-cta-label">Parler sur WhatsApp</span>
                    </span>
                    <span className="hero-cta-arrow-soft hero-cta-arrow-soft-light" aria-hidden="true">
                      <ArrowRight className="h-[1rem] w-[1rem]" />
                    </span>
                  </ButtonLink>
                </div>

                <div className="hero-proof-row mt-6 text-sm text-white/82">
                  <div className="hero-proof-stack">
                    <span className="hero-proof-chip">{siteConfig.responseTime}</span>
                    <span className="hero-proof-chip">Approche humaine et durable</span>
                  </div>

                  <div className="hero-partner-mobile">
                    <div className="hero-partner-badge hero-partner-badge-mobile">
                      <span className="hero-partner-label hero-partner-label-mobile">
                        Experience acquise chez
                      </span>
                      <Image
                        src="/images/Partenaire/Workout-Challenge.avif"
                        alt="Logo Workout Challenge"
                        width={220}
                        height={88}
                        className="hero-partner-logo hero-partner-logo-mobile"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hero-partner-anchor hidden xl:flex">
              <div className="hero-partner-badge">
                <span className="hero-partner-label">Experience acquise chez</span>
                <Image
                  src="/images/Partenaire/Workout-Challenge.avif"
                  alt="Logo Workout Challenge"
                  width={220}
                  height={88}
                  className="hero-partner-logo"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Container className="relative z-20 -mt-5 pt-0 sm:-mt-8 lg:-mt-10">
        <ul className="hero-focus-grid hero-focus-stage">
          {heroHighlights.map((item, index) => {
            return (
              <li key={item.id} className="hero-focus-card">
                <span className="hero-focus-media">
                  <Image
                    src={highlightImages[index] ?? item.images[0]}
                    alt={item.imageAlt}
                    width={160}
                    height={160}
                    sizes="(max-width: 640px) 35vw, 160px"
                    className="hero-focus-image"
                  />
                </span>
                <span className="hero-focus-title">{item.title}</span>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}

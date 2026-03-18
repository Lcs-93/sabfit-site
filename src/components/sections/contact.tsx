"use client";

import { useState } from "react";
import { Container } from "@/components/layout/container";
import { Button, ButtonLink } from "@/components/ui/button";
import { SectionTitle } from "@/components/ui/section-title";
import {
  buildMailtoLink,
  buildWhatsAppLink,
  objectiveOptions,
  siteConfig,
  whatsappBaseMessage,
} from "@/lib/constants";

interface ContactSectionProps {
  initialOffer?: string;
}

export function ContactSection({ initialOffer = "" }: ContactSectionProps) {
  const [name, setName] = useState("");
  const [objective, setObjective] = useState(objectiveOptions[0]);
  const [offer, setOffer] = useState(initialOffer);
  const [message, setMessage] = useState("");

  const fullMessage = [
    "Bonjour Sabfit,",
    "",
    "Je souhaite echanger au sujet de votre accompagnement.",
    offer ? `Formule qui m'interesse : ${offer}` : "",
    `Nom : ${name || "A preciser"}`,
    `Objectif principal : ${objective}`,
    `Message : ${message || "A preciser"}`,
    "",
    "Merci.",
  ]
    .filter(Boolean)
    .join("\n");

  function handleEmailSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.location.href = buildMailtoLink("Demande de contact Sabfit", fullMessage);
  }

  function handleWhatsAppClick() {
    window.open(buildWhatsAppLink(fullMessage || whatsappBaseMessage), "_blank", "noopener,noreferrer");
  }

  return (
    <section
      id="contact"
      className="scroll-mt-32 border-t border-[rgba(22,56,43,0.06)] bg-[rgba(255,253,248,0.74)] py-20 sm:py-24"
    >
      <Container className="space-y-8">
        <SectionTitle
          eyebrow="Contact"
          title="Parlons de votre objectif"
          description="Vous souhaitez demarrer, poser une question ou choisir une formule ? Echangeons simplement sur votre situation et vos besoins."
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="surface-card rounded-[2rem] p-6 sm:p-8">
            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-green-soft)]">
                  Contact direct
                </p>
                <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[var(--color-deep-green)]">
                  Un premier echange simple, sans friction
                </h3>
              </div>

              <div className="grid gap-4">
                <div className="rounded-[1.5rem] border border-[var(--color-line)] bg-white/70 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                    WhatsApp
                  </p>
                  <p className="mt-2 font-display text-2xl font-semibold text-[var(--color-deep-green)]">
                    {siteConfig.whatsappDisplay}
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-[var(--color-line)] bg-white/70 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                    Mail
                  </p>
                  <p className="mt-2 font-display text-2xl font-semibold text-[var(--color-deep-green)]">
                    {siteConfig.email}
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-[var(--color-line)] bg-[rgba(22,56,43,0.06)] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                    Delai
                  </p>
                  <p className="mt-2 text-base leading-7 text-[var(--color-deep-green)]">
                    {siteConfig.responseTime}. Le formulaire ci-contre prepare votre
                    message dans votre boite mail ou sur WhatsApp.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <ButtonLink href={buildWhatsAppLink(whatsappBaseMessage)}>
                  Ecrire sur WhatsApp
                </ButtonLink>
                <ButtonLink href={`mailto:${siteConfig.email}`} variant="secondary">
                  Envoyer un mail
                </ButtonLink>
              </div>
            </div>
          </aside>

          <form onSubmit={handleEmailSubmit} className="surface-card rounded-[2rem] p-6 sm:p-8">
            <div className="grid gap-5">
              <div className="grid gap-2">
                <label htmlFor="name" className="text-sm font-semibold text-[var(--color-deep-green)]">
                  Votre nom
                </label>
                <input
                  id="name"
                  name="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Votre nom"
                  className="rounded-2xl border border-[var(--color-line)] bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--color-green-soft)]"
                />
              </div>

              <div className="grid gap-2 sm:grid-cols-2 sm:gap-5">
                <div className="grid gap-2">
                  <label
                    htmlFor="objective"
                    className="text-sm font-semibold text-[var(--color-deep-green)]"
                  >
                    Objectif principal
                  </label>
                  <select
                    id="objective"
                    name="objective"
                    value={objective}
                    onChange={(event) => setObjective(event.target.value)}
                    className="rounded-2xl border border-[var(--color-line)] bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--color-green-soft)]"
                  >
                    {objectiveOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid gap-2">
                  <label
                    htmlFor="offer"
                    className="text-sm font-semibold text-[var(--color-deep-green)]"
                  >
                    Formule envisagee
                  </label>
                  <input
                    id="offer"
                    name="offer"
                    value={offer}
                    onChange={(event) => setOffer(event.target.value)}
                    placeholder="Ex : Suivi Progression"
                    className="rounded-2xl border border-[var(--color-line)] bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--color-green-soft)]"
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <label
                  htmlFor="message"
                  className="text-sm font-semibold text-[var(--color-deep-green)]"
                >
                  Votre message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Parlez rapidement de votre situation, de votre niveau et de ce que vous recherchez."
                  className="rounded-[1.5rem] border border-[var(--color-line)] bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--color-green-soft)]"
                />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button type="submit" className="w-full sm:w-auto">
                  Preparer ma demande par email
                </Button>
                <Button
                  type="button"
                  variant="secondary"
                  className="w-full sm:w-auto"
                  onClick={handleWhatsAppClick}
                >
                  Preparer sur WhatsApp
                </Button>
              </div>

              <p className="text-sm leading-7 text-[var(--color-muted)]">
                Les moyens de contact affiches ici sont des placeholders a remplacer par
                vos coordonnees reelles avant la mise en ligne publique.
              </p>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}

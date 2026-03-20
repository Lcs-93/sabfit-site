"use client";

import { useState } from "react";
import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button";
import { SectionTitle } from "@/components/ui/section-title";
import { offers } from "@/features/offers/data";
import type { OfferCategory } from "@/features/offers/types";
import { cn } from "@/lib/utils";

const tabs: Array<{ key: OfferCategory; label: string }> = [
  { key: "subscription", label: "Abonnements" },
  { key: "unique", label: "Formules uniques" },
];

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4"
    >
      <path
        d="M3.5 10H15.5M11 5.5L15.5 10L11 14.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function OffersSection() {
  const [activeTab, setActiveTab] = useState<OfferCategory>("subscription");

  const filteredOffers = offers.filter((offer) => offer.category === activeTab);

  return (
    <section
      id="offres"
      className="scroll-mt-32 border-y border-[rgba(22,56,43,0.06)] bg-[rgba(255,253,248,0.72)] py-20 sm:py-24"
    >
      <Container className="space-y-8">
        <SectionTitle
          eyebrow="Les formules"
          title="Des offres lisibles, premium et pensees pour votre objectif"
          description="Choisissez entre une formule unique pour repartir avec un cadre structure, ou un abonnement pour beneficier d'un accompagnement dans la duree."
        />

        <div className="inline-flex rounded-full border border-[var(--color-line)] bg-white/72 p-1 shadow-[var(--shadow-soft)]">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key)}
              className={cn(
                "cursor-pointer rounded-full px-5 py-3 text-sm font-semibold transition-colors",
                activeTab === tab.key
                  ? "bg-[var(--color-deep-green)] text-white"
                  : "text-[var(--color-deep-green)]",
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid gap-6 xl:grid-cols-[0.95fr_1.08fr_0.95fr]">
          {filteredOffers.map((offer, index) => {
            const isFeatured = Boolean(offer.featured);
            const sideLabel = index === 0 ? "Demarrage" : "Accompagnement";

            return (
              <article
                key={offer.name}
                style={
                  isFeatured
                    ? {
                        background:
                          "linear-gradient(180deg, rgba(22,56,43,0.99) 0%, rgba(19,47,36,0.995) 56%, rgba(16,40,31,1) 100%)",
                      }
                    : undefined
                }
                className={cn(
                  "group relative flex h-full flex-col overflow-hidden rounded-[2.15rem] border p-6 transition-all duration-300 sm:p-7",
                  isFeatured
                    ? "xl:-translate-y-4 xl:scale-[1.02] border-[rgba(200,168,115,0.58)] text-white shadow-[0_35px_100px_rgba(16,40,31,0.22)] hover:-translate-y-5 hover:shadow-[0_45px_120px_rgba(16,40,31,0.28)]"
                    : "border-[var(--color-line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(249,247,242,0.92))] shadow-[var(--shadow-soft)] backdrop-blur-sm hover:-translate-y-3 hover:border-[rgba(22,56,43,0.16)] hover:shadow-[0_28px_90px_rgba(16,40,31,0.14)]",
                )}
              >
                {isFeatured ? (
                  <>
                    <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,var(--color-sand),#f6d9a5,var(--color-sand))]" />
                    <div className="absolute -right-16 top-8 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(200,168,115,0.32),transparent_70%)] blur-2xl" />
                    <div className="absolute -left-10 bottom-0 h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.08),transparent_72%)] blur-2xl" />
                    <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(200,168,115,0.22),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_25%)]" />
                  </>
                ) : (
                  <>
                    <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--color-sand),transparent)]" />
                    <div className="absolute -right-12 top-10 h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(200,168,115,0.16),transparent_72%)] blur-2xl" />
                    <div className="absolute inset-x-6 bottom-0 h-px bg-[linear-gradient(90deg,transparent,rgba(22,56,43,0.12),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </>
                )}

                <div className="relative z-10 flex h-full flex-col">
                  <div className="flex flex-wrap items-center gap-3">
                    {!isFeatured ? (
                      <span className="inline-flex rounded-full border border-[rgba(22,56,43,0.08)] bg-white/72 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-green-soft)]">
                        {sideLabel}
                      </span>
                    ) : null}

                    {offer.badge ? (
                      <span
                        className={cn(
                          "inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]",
                          isFeatured
                            ? "bg-[rgba(255,255,255,0.12)] text-white"
                            : "bg-[rgba(22,56,43,0.08)] text-[var(--color-deep-green)]",
                        )}
                      >
                        {offer.badge}
                      </span>
                    ) : null}

                    {offer.previousPrice ? (
                      <span
                        className={cn(
                          "inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em]",
                          isFeatured
                            ? "bg-[rgba(200,168,115,0.18)] text-[#f6d9a5]"
                            : "bg-[rgba(200,168,115,0.18)] text-[var(--color-deep-green)]",
                        )}
                      >
                        Offre lancement
                      </span>
                    ) : null}
                  </div>

                  <div className="mt-5">
                    <h3
                      className={cn(
                        "max-w-[12ch] font-display text-[2rem] leading-[1.05] font-semibold tracking-tight transition-transform duration-300",
                        isFeatured ? "text-white" : "text-[var(--color-deep-green)]",
                      )}
                    >
                      {offer.name}
                    </h3>

                    <p
                      className={cn(
                        "mt-3 max-w-[34ch] text-[15px] leading-7",
                        isFeatured ? "text-white/80" : "text-[var(--color-muted)]",
                      )}
                    >
                      {offer.description}
                    </p>
                  </div>

                  {offer.highlight ? (
                    <div
                      className={cn(
                        "mt-5 rounded-[1.35rem] px-4 py-3 text-sm font-medium",
                        isFeatured
                          ? "bg-[rgba(255,255,255,0.08)] text-[#f6d9a5]"
                          : "bg-[linear-gradient(90deg,rgba(22,56,43,0.05),rgba(200,168,115,0.14))] text-[var(--color-green-soft)]",
                      )}
                    >
                      {offer.highlight}
                    </div>
                  ) : null}

                  <div
                    className={cn(
                      "mt-6 rounded-[1.55rem] p-5 transition-transform duration-300 group-hover:translate-y-0.5",
                      isFeatured
                        ? "bg-[rgba(255,255,255,0.06)] ring-1 ring-white/8"
                        : "bg-[rgba(255,255,255,0.76)] ring-1 ring-[rgba(22,56,43,0.06)] shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]",
                    )}
                  >
                    {offer.previousPrice ? (
                      <p
                        className={cn(
                          "text-sm line-through",
                          isFeatured ? "text-white/48" : "text-[var(--color-muted)]",
                        )}
                      >
                        {offer.previousPrice}
                      </p>
                    ) : null}

                    <div className="mt-1 flex flex-wrap items-end gap-3">
                      <p className="font-display text-4xl font-semibold tracking-tight">{offer.price}</p>

                      {isFeatured ? (
                        <span className="rounded-full bg-[rgba(200,168,115,0.2)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#f6d9a5]">
                          La plus demandee
                        </span>
                      ) : (
                        <span className="rounded-full bg-[rgba(22,56,43,0.06)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-green-soft)]">
                          Reponse rapide
                        </span>
                      )}
                    </div>
                  </div>

                  <ul
                    className={cn(
                      "mt-6 space-y-3 rounded-[1.55rem] p-5 transition-transform duration-300 group-hover:translate-y-0.5",
                      isFeatured
                        ? "bg-[rgba(255,255,255,0.05)] ring-1 ring-white/8"
                        : "bg-[rgba(255,255,255,0.74)] ring-1 ring-[rgba(22,56,43,0.05)]",
                    )}
                  >
                    {offer.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className={cn(
                          "flex gap-3 text-sm leading-7",
                          isFeatured ? "text-white/88" : "text-[var(--color-muted)]",
                        )}
                      >
                        <span
                          className={cn(
                            "mt-2 h-2.5 w-2.5 shrink-0 rounded-full",
                            isFeatured ? "bg-[var(--color-sand)]" : "bg-[var(--color-deep-green)]",
                          )}
                        />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 space-y-4">
                    {isFeatured ? (
                      <div className="rounded-[1.35rem] border border-white/14 bg-[rgba(255,255,255,0.08)] px-4 py-3">
                        <p className="text-sm font-medium text-white/88">
                          La formule ideale a pousser visuellement si vous voulez orienter
                          le choix vers une offre plus complete.
                        </p>
                      </div>
                    ) : null}

                    <ButtonLink
                      href={`/contact?formule=${encodeURIComponent(offer.name)}`}
                      variant="ghost"
                      className={cn(
                        "group/button w-full justify-between gap-3 rounded-[1.35rem] px-5 py-4 text-left",
                        isFeatured &&
                          "!border !border-white/18 !bg-white !text-[var(--color-deep-green)] shadow-[0_18px_32px_rgba(0,0,0,0.14)] hover:!bg-[#fffaf0] active:!text-[var(--color-deep-green)]",
                        !isFeatured &&
                          "!border !border-[rgba(22,56,43,0.1)] !bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(241,244,241,0.92))] !text-[var(--color-deep-green)] shadow-[0_14px_28px_rgba(16,40,31,0.08)] hover:!bg-white",
                      )}
                    >
                      <span className="pr-3 text-sm font-semibold leading-5 !text-inherit">
                        {offer.ctaLabel ?? "Choisir cette formule"}
                      </span>
                      <span
                        className={cn(
                          "inline-flex shrink-0 items-center gap-2 rounded-full px-3 py-2 transition-transform duration-200 group-hover/button:translate-x-1",
                          isFeatured
                            ? "bg-[var(--color-deep-green)] text-white"
                            : "bg-[rgba(22,56,43,0.08)] text-[var(--color-deep-green)] ring-1 ring-[rgba(22,56,43,0.08)]",
                        )}
                      >
                        <ArrowIcon />
                      </span>
                    </ButtonLink>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <p className="max-w-3xl text-sm leading-7 text-[var(--color-muted)]">
          Chaque formule est affichee avec son tarif pour vous aider a vous projeter.
          La reservation se fait ensuite apres un premier echange afin de confirmer
          qu&apos;elle correspond bien a votre objectif.
        </p>
      </Container>
    </section>
  );
}

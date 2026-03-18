import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { ContactSection } from "@/components/sections/contact";

type ContactPageProps = {
  searchParams: Promise<{ formule?: string }>;
};

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez Sabfit pour echanger autour de votre objectif et de la formule adaptee.",
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;

  return (
    <main className="py-12 sm:py-16">
      <Container className="space-y-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-green-soft)]">
            Contact Sabfit
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-[var(--color-deep-green)] sm:text-5xl">
            Echangez directement autour de votre objectif
          </h1>
        </div>
      </Container>

      <ContactSection initialOffer={params.formule ?? ""} />
    </main>
  );
}

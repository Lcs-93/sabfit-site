import type { Metadata } from "next";
import { LegalTemplate } from "@/components/layout/legal-template";

export const metadata: Metadata = {
  title: "Politique de confidentialite",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalTemplate
      title="Politique de confidentialite"
      intro="Cette politique sert de base pour la maquette Sabfit. Elle doit etre adaptee aux outils reels utilises, aux donnees effectivement collectees et aux mentions legales applicables."
    >
      <section className="space-y-3">
        <h2 className="font-display text-2xl font-semibold text-[var(--color-deep-green)]">
          Donnees collectees
        </h2>
        <p>
          Le site peut collecter les informations transmises volontairement par
          l&apos;utilisateur via le formulaire de contact, le mail ou WhatsApp, par exemple :
          nom, objectif sportif, formule envisagee et message libre.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-2xl font-semibold text-[var(--color-deep-green)]">
          Finalites
        </h2>
        <p>
          Ces donnees servent a repondre aux demandes, qualifier un besoin, proposer une
          formule adaptee et assurer un suivi commercial ou client lorsque cela est
          necessaire.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-2xl font-semibold text-[var(--color-deep-green)]">
          Conservation
        </h2>
        <p>
          La duree de conservation doit etre precisee selon vos outils et votre
          organisation. Pensez a indiquer un cadre clair avant publication.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-2xl font-semibold text-[var(--color-deep-green)]">
          Vos droits
        </h2>
        <p>
          L&apos;utilisateur peut demander l&apos;acces, la rectification ou la suppression
          de ses donnees via l&apos;adresse de contact qui sera affichee sur le site final.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-2xl font-semibold text-[var(--color-deep-green)]">
          Cookies et outils tiers
        </h2>
        <p>
          Si vous ajoutez plus tard des outils de mesure d&apos;audience, de CRM ou de
          paiement, cette page devra etre completee en consequence.
        </p>
      </section>
    </LegalTemplate>
  );
}

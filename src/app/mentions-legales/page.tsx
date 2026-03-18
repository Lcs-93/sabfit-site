import type { Metadata } from "next";
import { LegalTemplate } from "@/components/layout/legal-template";

export const metadata: Metadata = {
  title: "Mentions legales",
};

export default function MentionsLegalesPage() {
  return (
    <LegalTemplate
      title="Mentions legales"
      intro="Cette page est une base de travail pour la V1 du site Sabfit. Les informations ci-dessous doivent etre remplacees par les donnees exactes de l'auto-entreprise avant toute publication reelle."
    >
      <section className="space-y-3">
        <h2 className="font-display text-2xl font-semibold text-[var(--color-deep-green)]">
          Editeur du site
        </h2>
        <p>
          Nom commercial : Sabfit
          <br />
          Nom / prenom : a completer
          <br />
          Statut : auto-entrepreneur
          <br />
          SIRET : a completer
          <br />
          Adresse professionnelle : a completer
          <br />
          Email : a completer
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-2xl font-semibold text-[var(--color-deep-green)]">
          Hebergement
        </h2>
        <p>
          Hebergeur : a completer selon la solution de deploiement retenue
          <br />
          Adresse : a completer
          <br />
          Contact : a completer
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-2xl font-semibold text-[var(--color-deep-green)]">
          Propriete intellectuelle
        </h2>
        <p>
          Les contenus du site Sabfit, incluant les textes, visuels, logos et elements
          graphiques, sont proteges et ne peuvent etre reutilises sans autorisation
          prealable.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-2xl font-semibold text-[var(--color-deep-green)]">
          Responsabilite
        </h2>
        <p>
          Les informations presentes sur le site ont une vocation informative et
          commerciale. Cette page reste une maquette juridique a valider et completer
          avant la mise en ligne definitive.
        </p>
      </section>
    </LegalTemplate>
  );
}

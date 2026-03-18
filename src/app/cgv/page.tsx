import type { Metadata } from "next";
import { LegalTemplate } from "@/components/layout/legal-template";

export const metadata: Metadata = {
  title: "CGV",
};

export default function CgvPage() {
  return (
    <LegalTemplate
      title="Conditions generales de vente"
      intro="Les CGV ci-dessous sont un point de depart pour la maquette Sabfit. Elles ne remplacent pas une validation juridique et doivent etre completees avec les modalites exactes de votre activite."
    >
      <section className="space-y-3">
        <h2 className="font-display text-2xl font-semibold text-[var(--color-deep-green)]">
          Objet
        </h2>
        <p>
          Sabfit propose des programmes et accompagnements lies a la musculation, a la
          nutrition et au suivi global, selon les formules presentes sur le site.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-2xl font-semibold text-[var(--color-deep-green)]">
          Commande et validation
        </h2>
        <p>
          Pour la V1, la reservation est envisagee apres un premier echange direct afin de
          confirmer que la formule choisie correspond bien au besoin du client.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-2xl font-semibold text-[var(--color-deep-green)]">
          Tarifs
        </h2>
        <p>
          Les prix affiches sur le site sont indiques a titre commercial pour la maquette
          et devront etre confirmes au moment de la mise en ligne definitive.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-2xl font-semibold text-[var(--color-deep-green)]">
          Modalites d&apos;execution
        </h2>
        <p>
          Les delais d&apos;envoi, de suivi, de reponse et d&apos;ajustement doivent etre
          precises dans la version finale selon l&apos;organisation reelle de Sabfit.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-2xl font-semibold text-[var(--color-deep-green)]">
          Responsabilite et cadre
        </h2>
        <p>
          Les prestations Sabfit doivent etre presentees comme un accompagnement sportif et
          nutritionnel, sans promesse medicale ni garantie de resultat. Le texte final doit
          etre revu avant publication.
        </p>
      </section>
    </LegalTemplate>
  );
}

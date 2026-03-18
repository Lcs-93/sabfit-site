export const siteConfig = {
  name: "Sabfit",
  description:
    "Musculation, nutrition et suivi personnalise pour des resultats durables.",
  whatsappNumber: "33612345678",
  whatsappDisplay: "+33 6 12 34 56 78",
  email: "contact@sabfit.fr",
  responseTime: "Reponse sous 24 a 48h",
  location: "Coaching en ligne depuis la France",
};

export const whatsappBaseMessage =
  "Bonjour Sabfit, je souhaite en savoir plus sur votre accompagnement.";

export const navItems = [
  { label: "Offres", href: "/#offres" },
  { label: "Methode", href: "/#methode" },
  { label: "Avis", href: "/#avis" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

export const heroChecklist = [
  "Programme adapte a votre niveau et a vos objectifs",
  "Plan alimentaire clair, concret et applicable",
  "Accompagnement humain et structure",
  "Echange direct via WhatsApp et par mail",
];

export const trustItems = [
  "Prise de masse",
  "Perte de gras",
  "Nutrition",
  "Suivi global",
];

export const methodSteps = [
  {
    id: "01",
    title: "Vous presentez votre objectif",
    description:
      "Vous expliquez votre situation, votre niveau, vos habitudes et ce que vous souhaitez atteindre.",
  },
  {
    id: "02",
    title: "Analyse de votre profil",
    description:
      "Sabfit etudie vos besoins pour construire une base coherente et adaptee a votre quotidien.",
  },
  {
    id: "03",
    title: "Creation de votre plan",
    description:
      "Vous recevez un programme musculation et, selon la formule, un cadre alimentaire personnalise.",
  },
  {
    id: "04",
    title: "Suivi et ajustements",
    description:
      "Vous avancez avec une methode claire et des ajustements penses pour tenir dans le temps.",
  },
];

export const objectiveOptions = [
  "Prise de masse",
  "Perte de gras",
  "Recomposition physique",
  "Nutrition",
  "Suivi global",
];

export function buildWhatsAppLink(message: string) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function buildMailtoLink(subject: string, body: string) {
  return `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

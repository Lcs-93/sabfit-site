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

function createHeroImagePool(category: string, count: number) {
  return Array.from(
    { length: count },
    (_, index) =>
      `/images/hero/${category}/${category}-${String(index + 1).padStart(2, "0")}.png`,
  );
}

export const heroHighlights = [
  {
    id: "fat-loss",
    title: "Perte de gras",
    imageAlt: "Illustration Sabfit pour la perte de gras.",
    images: createHeroImagePool("fat-loss", 6),
  },
  {
    id: "nutrition",
    title: "Nutrition",
    imageAlt: "Illustration Sabfit pour la nutrition.",
    images: createHeroImagePool("nutrition", 6),
  },
  {
    id: "muscle-gain",
    title: "Prise de muscle",
    imageAlt: "Illustration Sabfit pour la prise de muscle.",
    images: createHeroImagePool("muscle-gain", 11),
  },
  {
    id: "online-coaching",
    title: "Suivi en ligne",
    imageAlt: "Illustration Sabfit pour le suivi en ligne.",
    images: createHeroImagePool("online-coaching", 9),
  },
] as const;

export const heroRotatingPhrases = [
  "avec un accompagnement humain.",
  "avec une methode claire.",
  "avec un suivi structure.",
  "avec une progression durable.",
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

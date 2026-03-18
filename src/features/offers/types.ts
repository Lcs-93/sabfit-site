export type OfferCategory = "unique" | "subscription";

export interface Offer {
  name: string;
  price: string;
  previousPrice?: string;
  description: string;
  highlight?: string;
  benefits: string[];
  category: OfferCategory;
  featured?: boolean;
  badge?: string;
  ctaLabel?: string;
}

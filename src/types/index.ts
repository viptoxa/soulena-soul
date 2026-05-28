export interface Package {
  id: string;
  name: string;
  category: "Group" | "Private";
  priceTHB: number;
  priceUSD: number;
  description: string;
  features: string[];
  order: number;
  active: boolean;
}

import { Client } from "@notionhq/client";
import type { Package } from "@/types";

const notion = process.env.NOTION_API_KEY
  ? new Client({ auth: process.env.NOTION_API_KEY })
  : null;

const FALLBACK_PACKAGES: Package[] = [
  {
    id: "fallback-1",
    name: "Drop-in Class",
    category: "Group",
    priceTHB: 400,
    priceUSD: 12,
    description: "Perfect for first-time visitors or slow island mornings",
    features: ["Single session", "Suitable for all levels"],
    order: 1,
    active: true,
  },
  {
    id: "fallback-2",
    name: "5 Times Pack",
    category: "Group",
    priceTHB: 1800,
    priceUSD: 50,
    description: "Build consistency and deepen your practice",
    features: ["5 group sessions", "Valid for 2 months"],
    order: 2,
    active: true,
  },
  {
    id: "fallback-3",
    name: "5 Times Private Pack",
    category: "Private",
    priceTHB: 4200,
    priceUSD: 126,
    description: "Stay consistent and build your practice",
    features: ["5 private sessions", "Flexible time & location"],
    order: 3,
    active: true,
  },
  {
    id: "fallback-4",
    name: "10 Times Private Pack",
    category: "Private",
    priceTHB: 7500,
    priceUSD: 230,
    description: "For dedicated yogis who want it all",
    features: ["10 private sessions", "Priority scheduling", "Best per-session value"],
    order: 4,
    active: true,
  },
];

export async function fetchPackages(): Promise<Package[]> {
  if (!notion || !process.env.NOTION_PACKAGES_DB_ID) {
    return FALLBACK_PACKAGES;
  }

  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_PACKAGES_DB_ID,
      filter: {
        property: "Active",
        checkbox: { equals: true },
      },
      sorts: [{ property: "Order", direction: "ascending" }],
    });

    return response.results.map((page) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const props = (page as Record<string, any>).properties;
      return {
        id: page.id,
        name: props.Name?.title?.[0]?.plain_text ?? "Unnamed",
        category: props.Category?.select?.name === "Private" ? "Private" : "Group",
        priceTHB: props["Price THB"]?.number ?? 0,
        priceUSD: props["Price USD"]?.number ?? 0,
        description: props.Description?.rich_text?.[0]?.plain_text ?? "",
        features: (props.Features?.rich_text?.[0]?.plain_text ?? "")
          .split("\n")
          .filter(Boolean),
        order: props.Order?.number ?? 0,
        active: props.Active?.checkbox ?? true,
      };
    });
  } catch (error) {
    console.error("Failed to fetch from Notion, using fallback:", error);
    return FALLBACK_PACKAGES;
  }
}

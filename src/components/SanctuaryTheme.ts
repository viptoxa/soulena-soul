import type { CSSProperties } from "react";

/**
 * Shared tokens for the Soul & Sound Sanctuary page (Canva page 6).
 * The page is the one deliberately dark, luxe surface on the site: a warm
 * near-black canvas, deep navy orbs and gold display type.
 */

/** Warm near-black canvas used by the hero and the Mind–Body section. */
export const SANCTUARY_INK = "#1d1913";

/** Cream used for headings and body copy on the dark canvas. */
export const SANCTUARY_CREAM = "#e9e3d7";

/** Deep navy orb — the hero medallion and the two experience circles. */
export const SANCTUARY_ORB =
  "radial-gradient(circle at 50% 46%, #1e1e28 0%, #23242f 46%, #2c303e 82%, #383e4f 100%)";

/** Gold display type, clipped to the text like the Canva gradient fill. */
export const SANCTUARY_GOLD_TEXT: CSSProperties = {
  backgroundImage:
    "linear-gradient(180deg,#f6dc98 0%,#e6bb5e 34%,#cb9a20 70%,#a97c12 100%)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
};

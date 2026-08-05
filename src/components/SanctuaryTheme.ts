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

/**
 * Deep navy orb — the hero medallion and the two experience circles.
 * Lifted verbatim from the Canva radialGradient (r=181.019 in a 256 box, so
 * its stops land at 0 / 70.7% / 141.4% of the circle's own radius). Darkest
 * just inside the rim, then lifting to a pale blue edge — that rim glow is
 * what reads as the orb's shadow.
 */
export const SANCTUARY_ORB =
  "radial-gradient(circle closest-side at 50% 50%, #131e38 0%, #04091c 70.7%, #475f86 141.4%)";

/** Gold display type, clipped to the text like the Canva gradient fill. */
export const SANCTUARY_GOLD_TEXT: CSSProperties = {
  backgroundImage:
    "linear-gradient(180deg,#f6dc98 0%,#e6bb5e 34%,#cb9a20 70%,#a97c12 100%)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
};

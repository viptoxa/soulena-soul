import type { SVGProps } from "react";

/**
 * Line-art icons for the Classes page, drawn to match the set Soulena placed in
 * her 2026-09-07 Canva: a single-weight open stroke, round caps, nothing
 * filled. They ride in a sand-coloured disc, so they inherit `currentColor`.
 */
type IconProps = SVGProps<SVGSVGElement>;

function Line(props: IconProps & { children: React.ReactNode }) {
  const { children, ...rest } = props;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {children}
    </svg>
  );
}

/* ── Card icons ─────────────────────────────────────────────────────────── */

export function ClockIcon(props: IconProps) {
  return (
    <Line {...props}>
      <circle cx="12" cy="12" r="8.4" />
      <path d="M12 7.2V12l3.2 2" />
    </Line>
  );
}

/** Seated figure with arms lifted — her "Class Includes" mark. */
export function MeditationIcon(props: IconProps) {
  return (
    <Line {...props}>
      <circle cx="12" cy="5.4" r="2.1" />
      <path d="M12 7.9c-1.7 0-2.9 1.2-3.2 2.8l-.5 3" />
      <path d="M12 7.9c1.7 0 2.9 1.2 3.2 2.8l.5 3" />
      <path d="M8.3 13.7c-1.8.5-3.2 1.5-3.2 2.5 0 .7.7 1.2 1.7 1.2" />
      <path d="M15.7 13.7c1.8.5 3.2 1.5 3.2 2.5 0 .7-.7 1.2-1.7 1.2" />
      <path d="M5.6 18.4c1.1-1.5 3.6-2.5 6.4-2.5s5.3 1 6.4 2.5c-1.6.8-3.9 1.3-6.4 1.3s-4.8-.5-6.4-1.3Z" />
    </Line>
  );
}

export function LeafIcon(props: IconProps) {
  return (
    <Line {...props}>
      <path d="M19 5c0 7.2-4 11.3-9.4 11.3-2 0-3.6-.6-4.6-1.6C3.9 13.5 4 10.6 6.2 8.5 8.7 6.2 13.6 5.6 19 5Z" />
      <path d="M5 19c2.4-3.4 5.2-6.2 9.3-8.8" />
    </Line>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <Line {...props}>
      <path d="M12 21c3.9-4.6 5.9-8.1 5.9-10.8A5.9 5.9 0 0 0 6.1 10.2C6.1 12.9 8.1 16.4 12 21Z" />
      <circle cx="12" cy="10.1" r="2.2" />
    </Line>
  );
}

export function CalendarGridIcon(props: IconProps) {
  return (
    <Line {...props}>
      <rect x="3.6" y="5.4" width="16.8" height="15" rx="2.4" />
      <path d="M3.6 10h16.8M8.4 3.4v3.6M15.6 3.4v3.6" />
      <path d="M8 13.6h.01M12 13.6h.01M16 13.6h.01M8 16.8h.01M12 16.8h.01" />
    </Line>
  );
}

export function TagIcon(props: IconProps) {
  return (
    <Line {...props}>
      <path d="M11.3 3.6H19a1.4 1.4 0 0 1 1.4 1.4v7.7a1.4 1.4 0 0 1-.4 1L11.7 22a1.4 1.4 0 0 1-2 0l-7.7-7.7a1.4 1.4 0 0 1 0-2l8.3-8.3a1.4 1.4 0 0 1 1-.4Z" />
      <circle cx="16" cy="8" r="1.5" />
    </Line>
  );
}

/* ── Chip icons ─────────────────────────────────────────────────────────── */

export function PersonIcon(props: IconProps) {
  return (
    <Line {...props}>
      <circle cx="12" cy="8.2" r="3.4" />
      <path d="M5.2 20a6.8 6.8 0 0 1 13.6 0" />
    </Line>
  );
}

export function ChatIcon(props: IconProps) {
  return (
    <Line {...props}>
      <path d="M20 14.2a2.4 2.4 0 0 1-2.4 2.4H8.8L4 20.2V6.6a2.4 2.4 0 0 1 2.4-2.4h11.2A2.4 2.4 0 0 1 20 6.6Z" />
      <path d="M8 9h8M8 12.2h5" />
    </Line>
  );
}

export function CameraIcon(props: IconProps) {
  return (
    <Line {...props}>
      <path d="M3.4 8.6A1.8 1.8 0 0 1 5.2 6.8h2.3l1.3-2h6.4l1.3 2h2.3a1.8 1.8 0 0 1 1.8 1.8v8.6a1.8 1.8 0 0 1-1.8 1.8H5.2a1.8 1.8 0 0 1-1.8-1.8Z" />
      <circle cx="12" cy="12.6" r="3.4" />
    </Line>
  );
}

export function GroupIcon(props: IconProps) {
  return (
    <Line {...props}>
      <circle cx="9" cy="8.6" r="3" />
      <path d="M3.2 19.4a5.8 5.8 0 0 1 11.6 0" />
      <path d="M16.2 6.2a3 3 0 0 1 0 5.6" />
      <path d="M17.4 14.4a5.8 5.8 0 0 1 3.4 5" />
    </Line>
  );
}

/** Villa with a palm beside it — her "Home / Hotel / Beach" mark. */
export function VillaIcon(props: IconProps) {
  return (
    <Line {...props}>
      <path d="M2.6 11.4 9 6.2l6.4 5.2" />
      <path d="M4.4 10.2v9.4h9.2v-9.4" />
      <path d="M7.6 19.6v-4.2h2.8v4.2" />
      <path d="M18.4 19.6v-6.4" />
      <path d="M18.4 13.2c-.8-1.5-2-2.2-3.4-2.1 1 1.4 2 2.1 3.4 2.1Zm0 0c.8-1.5 2-2.2 3.4-2.1-1 1.4-2 2.1-3.4 2.1Z" />
    </Line>
  );
}

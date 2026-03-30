import type { ReactNode } from "react";

/** First character green (#049518), remainder light red (#F87171) — matches site-wide heading brand. */
export function ngcBrandLeadingText(text: string): ReactNode {
  if (!text) return null;
  const chars = Array.from(text);
  const first = chars[0] ?? "";
  const rest = chars.slice(1).join("");
  return (
    <>
      <span className="text-[var(--ngc-brand-first)]">{first}</span>
      <span className="text-[var(--ngc-brand-rest)]">{rest}</span>
    </>
  );
}

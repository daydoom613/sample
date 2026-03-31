import type { ReactNode } from "react";

/** First character green, remainder red — for a single brand token (e.g. “NGC” or “Nature Guru Creations”). */
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

function toHeadingCase(input: string): string {
  // Title Case each word; keep NGC fully caps.
  return input
    .split(/(\s+)/)
    .map((token) => {
      if (!token || /^\s+$/.test(token)) return token;
      if (token === "NGC") return "NGC";
      if (token === "OTT") return "OTT";
      if (token === "IP") return "IP";
      if (token === "IP's" || token === "IP’S") return "IP's";
      // Preserve punctuation around the word, e.g. "NGC—" won't happen here since we split on spaces,
      // but handle "NGC’s" / "NGC's" and trailing punctuation like "," "." ":".
      const m = token.match(/^([^A-Za-z0-9]*)([A-Za-z0-9]+)([^A-Za-z0-9]*)$/);
      if (!m) return token;
      const [, pre, core, post] = m;
      const upper = core.toUpperCase();
      if (upper === "NGC") return `${pre}NGC${post}`;
      if (upper === "OTT") return `${pre}OTT${post}`;
      if (upper === "IP" && (post.startsWith("'s") || post.startsWith("’s"))) {
        return `${pre}IP's${post.slice(2)}`;
      }
      if (/^[A-Z0-9]{2,6}$/.test(core)) {
        // Preserve short acronyms like VFX, CG, AI, HDR, 8K, ACES, etc.
        return `${pre}${core}${post}`;
      }
      const lower = core.toLowerCase();
      return `${pre}${lower.charAt(0).toUpperCase()}${lower.slice(1)}${post}`;
    })
    .join("");
}

/** Match “Nature Guru Creations”, “NGC”, or “NGC’s” (ASCII or curly apostrophe) inside heading copy. */
const BRAND_IN_HEADING_RE =
  /(Nature\s+Guru\s+Creations|NGC['\u2019]s\b|NGC\b)/gi;

/**
 * Use in headings when “NGC” or “Nature Guru Creations” can appear mid-sentence.
 * Each match is styled with {@link ngcBrandLeadingText}; the rest keeps default heading color.
 */
export function ngcBrandInHeading(text: string): ReactNode {
  if (!text) return null;
  const out: ReactNode[] = [];
  let last = 0;
  const s = toHeadingCase(text);
  const re = new RegExp(BRAND_IN_HEADING_RE.source, BRAND_IN_HEADING_RE.flags);
  let m: RegExpExecArray | null;
  let k = 0;
  while ((m = re.exec(s)) !== null) {
    if (m.index > last) {
      out.push(
        <span key={`ngc-rest-${k++}`} className="text-[var(--ngc-brand-rest)]">
          {s.slice(last, m.index)}
        </span>,
      );
    }
    out.push(
      <span key={`ngc-brand-${k++}`} className="inline">
        {ngcBrandLeadingText(m[0])}
      </span>,
    );
    last = re.lastIndex;
  }
  if (last < s.length) {
    out.push(
      <span key={`ngc-rest-${k++}`} className="text-[var(--ngc-brand-rest)]">
        {s.slice(last)}
      </span>,
    );
  }
  return <>{out}</>;
}

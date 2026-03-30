import Image from "next/image";
import type { ReactNode } from "react";

export type PageIntroStat = {
  value: string;
  label: string;
  /** Tailwind border color class for left accent, e.g. border-cyan-600 */
  borderClass?: string;
};

const DEFAULT_STAT_BORDERS = ["border-cyan-600", "border-amber-300"];

type Props = {
  kicker?: string;
  title: ReactNode;
  children: ReactNode;
  tagline?: ReactNode;
  stats?: PageIntroStat[];
  image: {
    src: string;
    alt: string;
    priority?: boolean;
  };
};

/**
 * Matches the home page “About Us” block: kicker, type heading, body, optional tagline & stats, image with glow.
 */
export default function PageIntro({
  kicker,
  title,
  children,
  tagline,
  stats,
  image,
}: Props) {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          {kicker ? (
            <div className="inline-block px-4 py-1 border border-gray-300 type-body text-gray-600 font-semibold uppercase tracking-[0.14em] rounded-full">
              {kicker}
            </div>
          ) : null}
          <h1 className="type-heading ngc-heading-plain">{title}</h1>
          <div className="type-body text-justify tracking-[0.02em] space-y-4">
            {children}
          </div>
          {tagline ? (
            <p className="type-subheading text-[var(--ngc-accent)]">{tagline}</p>
          ) : null}
          {stats && stats.length > 0 ? (
            <div className="grid grid-cols-2 gap-8 pt-4">
              {stats.map((s, idx) => (
                <div
                  key={`${s.value}-${s.label}`}
                  className={`border-l-4 pl-6 ${
                    s.borderClass ??
                    DEFAULT_STAT_BORDERS[idx % DEFAULT_STAT_BORDERS.length]
                  }`}
                >
                  <p className="type-subheading">{s.value}</p>
                  <p className="type-body uppercase tracking-[0.12em]">{s.label}</p>
                </div>
              ))}
            </div>
          ) : null}
        </div>
        <div className="relative group">
          <div className="absolute -inset-1 bg-linear-to-r from-primary to-gold rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000" />
          <div className="relative rounded-xl overflow-hidden aspect-video shadow-2xl">
            <Image
              src={image.src}
              alt={image.alt}
              className="object-cover object-center"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority={image.priority}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import type { Metadata } from "next";
import PageIntro from "@/components/page/PageIntro";
import { ngcBrandLeadingText } from "@/lib/ngcBrandHeading";
import PageSection from "@/components/page/PageSection";

export const metadata: Metadata = {
  title: "International VFX & CG",
  description:
    "Global VFX and CG services for film and series, delivered through NGC’s integrated pipeline.",
};

export default function InternationalPage() {
  return (
    <div className="w-full">
      <PageIntro
        kicker="VFX services"
        title={ngcBrandLeadingText("International VFX / CG")}
        tagline="Pipeline • Supervision • Delivery — worldwide."
        image={{
          src: "/vfxPoster.jpg",
          alt: "International VFX and CG at Nature Guru Creations",
          priority: true,
        }}
      >
        <p>
          We partner with producers and studios worldwide on creature,
          environment, and simulation work—aligned with NGC’s technology
          pipeline from ingest to delivery.
        </p>
      </PageIntro>

      <PageSection className="pt-0 pb-28 flex flex-wrap gap-4">
        <Link
          href="/services"
          className="inline-flex items-center justify-center rounded-lg bg-[var(--ngc-accent)]/15 border border-[var(--ngc-accent)]/40 px-6 py-3 type-body font-semibold text-[var(--ngc-text-primary)] hover:bg-[var(--ngc-accent)]/25 transition-colors"
        >
          View services
        </Link>
        <Link
          href="/pipeline"
          className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 type-body font-semibold text-[var(--ngc-text-primary)] hover:border-[var(--ngc-accent)] transition-colors"
        >
          Technology &amp; pipeline
        </Link>
      </PageSection>
    </div>
  );
}

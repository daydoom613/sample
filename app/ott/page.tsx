import Link from "next/link";
import type { Metadata } from "next";
import PageIntro from "@/components/page/PageIntro";
import { ngcBrandInHeading } from "@/lib/ngcBrandHeading";
import PageSection from "@/components/page/PageSection";

export const metadata: Metadata = {
  title: "IPs, Distribution & OTT",
  description:
    "Distribution and OTT partnerships for NGC originals and partner IPs.",
};

export default function OttPage() {
  return (
    <div className="w-full">
      <PageIntro
        kicker="Distribution"
        title={ngcBrandInHeading("IP's, distribution & OTT")}
        tagline="Originals • Partner IPs • Global reach."
        image={{
          src: "/ott.jpg",
          alt: "NGC originals and distribution partnerships",
          priority: true,
          mode: "responsive",
          width: 736,
          height: 854,
        }}
      >
        <p>
          We work with platforms and distributors on originals and creative
          execution titles. For acquisition or partnership discussions, get in
          touch with our team.
        </p>
      </PageIntro>

      <PageSection className="pt-0 pb-28 flex flex-wrap gap-4">
        <Link
          href="/contact"
          className="inline-flex rounded-lg border border-gray-300 px-6 py-3 type-body font-semibold text-[var(--ngc-text-primary)] hover:border-[var(--ngc-accent)] transition-colors"
        >
          Contact distribution
        </Link>
      </PageSection>
    </div>
  );
}

import Link from "next/link";
import type { Metadata } from "next";
import PageIntro from "@/components/page/PageIntro";
import { ngcBrandLeadingText } from "@/lib/ngcBrandHeading";
import PageSection from "@/components/page/PageSection";
import AbadamevaJayatheSpotlight from "@/components/media/AbadamevaJayatheSpotlight";

export const metadata: Metadata = {
  title: "Media & Announcements",
  description:
    "News, awards, and announcements from Nature Guru Creations.",
};

export default function MediaAnnouncementsPage() {
  return (
    <div className="w-full">
      <PageIntro
        title={ngcBrandLeadingText("Media & announcements")}
        tagline="Press • Awards • Behind the scenes."
        image={{
          src: "/press1.png",
          alt: "Nature Guru Creations — media and press",
          priority: true,
        }}
      >
        <p>
          Press enquiries, screening notices, and partnership news. For media
          requests, reach our team directly—we&apos;ll route you to the right
          contact.
        </p>
      </PageIntro>

      <PageSection className="pt-0 pb-16 border-t border-black/5">
        <AbadamevaJayatheSpotlight />
      </PageSection>

      <PageSection className="pt-0 pb-28">
        <Link
          href="/contact"
          className="inline-flex rounded-lg bg-[var(--ngc-accent)]/15 border border-[var(--ngc-accent)]/40 px-6 py-3 type-body font-semibold text-[var(--ngc-text-primary)] hover:bg-[var(--ngc-accent)]/25 transition-colors"
        >
          Contact media
        </Link>
      </PageSection>
    </div>
  );
}

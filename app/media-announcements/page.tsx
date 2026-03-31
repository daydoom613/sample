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

    </div>
  );
}

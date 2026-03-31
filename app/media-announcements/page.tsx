import type { Metadata } from "next";
import Image from "next/image";
import PageIntro from "@/components/page/PageIntro";
import { ngcBrandInHeading } from "@/lib/ngcBrandHeading";
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
        title={ngcBrandInHeading("Media & announcements")}
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

      <PageSection className="pt-0 pb-24 border-t border-black/5">
        <section
          id="abadameva-jayathe-interview"
          className="scroll-mt-28 rounded-2xl border border-black/5 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.06)] overflow-hidden"
        >
          <div className="p-8 lg:p-12 border-b border-black/5">
            <div className="type-body font-semibold uppercase tracking-[0.14em] text-[var(--ngc-accent)] mb-3">
              Interview feature
            </div>
            <h2 className="type-heading uppercase mb-4">
              Abadameva Jayathe interview highlights
            </h2>
            <p className="type-body text-[var(--ngc-text-secondary)] max-w-4xl">
              Behind the scenes moments and interview visuals from the
              Abadameva Jayathe journey.
            </p>
            <div className="type-body text-[var(--ngc-text-secondary)] max-w-4xl mt-5 space-y-3">
              <p>
                The interview explores how performance, visual effects, and
                storytelling came together to shape the digital character
                experience in Abadameva Jayathe.
              </p>
              <p>
                It highlights the creative intent behind key sequences and the
                collaborative pipeline used to preserve emotional authenticity
                while delivering cinematic scale.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 bg-black/[0.02] p-2">
            <div className="relative min-h-[260px] rounded-xl overflow-hidden">
              <Image
                src="/interview.png"
                alt="Abadameva Jayathe interview still 1"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
            <div className="relative min-h-[260px] rounded-xl overflow-hidden">
              <Image
                src="/interview_2.jpeg"
                alt="Abadameva Jayathe interview still 2"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
          </div>
        </section>
      </PageSection>

    </div>
  );
}

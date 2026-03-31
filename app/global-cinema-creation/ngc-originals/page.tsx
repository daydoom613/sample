import {
  ArrowRight,
  Globe,
  Handshake,
  Lightbulb,
  SquarePen,
  Videotape,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import PageIntro from "@/components/page/PageIntro";
import { ngcBrandInHeading } from "@/lib/ngcBrandHeading";
import PageSection from "@/components/page/PageSection";
import {
  contentCardClass,
  contentSectionTitleClass,
} from "@/components/page/contentStyles";

export const metadata: Metadata = {
  title: "NGC Originals",
  description:
    "What defines an NGC Original — creative authorship, ownership, and global scope.",
};

export default function NgcOriginalsPage() {
  return (
    <>
      <PageIntro
        title={ngcBrandInHeading("What defines an NGC Original")}
        tagline="Bridging nature and high-end filmmaking through our production DNA."
        image={{
          src: "/originals1.jpg",
          alt: "NGC Originals — epic natural history and cinematic storytelling",
          priority: true,
          mode: "responsive",
          width: 736,
          height: 735,
        }}
      >
        <p>
          We create stories that resonate globally, rooted in creative
          authenticity—from development through delivery.
        </p>
      </PageIntro>

      <PageSection className="border-t border-black/5 pt-0">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className={`${contentSectionTitleClass} mb-4`}>
              The five core pillars
            </h2>
            <p className="type-body text-[var(--ngc-text-secondary)]">
              Our commitment to excellence in every frame. These pillars form the
              foundation of every NGC Original production.
            </p>
          </div>
          <Link
            href="/global-cinema-creation/the-science-of-storytelling"
            className="text-[var(--ngc-accent)] font-semibold flex items-center gap-2 hover:gap-3 transition-all type-body"
          >
            Learn more about our process
            <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <PillarCard
            icon={Lightbulb}
            title="Idea originates"
            body="Every original starts within our walls. We manage the entire lifecycle from conceptualization to IP registration."
          />
          <PillarCard
            icon={SquarePen}
            title="Creative authorship"
            body="We protect and nurture the unique vision of every director—avoiding over-commercialized compromises."
          />
          <PillarCard
            icon={Videotape}
            title="Filmmaking ownership"
            body="Full control over production means better results. We own the gear, workflow, and timeline."
          />
          <PillarCard
            icon={Globe}
            title="Global scope"
            body="While our stories are local, their impact is global—designed for world-class streaming and cinema."
          />
          <div className="md:col-span-2 lg:col-span-1">
            <PillarCard
              icon={Handshake}
              title="Production partnerships"
              body="We collaborate with world-class production entities to scale our vision with shared values."
            />
          </div>
        </div>
      </PageSection>

    </>
  );
}

function PillarCard({
  icon: Icon,
  title,
  body,
}: {
  icon: LucideIcon;
  title: string;
  body: string;
}) {
  return (
    <div className={`${contentCardClass} group flex flex-col gap-6`}>
      <div className="flex size-14 items-center justify-center rounded-lg bg-[var(--ngc-accent)]/15 text-[var(--ngc-accent)] transition-transform group-hover:scale-110">
        <Icon className="size-7" />
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="type-subheading">{title}</h3>
        <p className="type-body text-[var(--ngc-text-secondary)] leading-relaxed">{body}</p>
      </div>
    </div>
  );
}

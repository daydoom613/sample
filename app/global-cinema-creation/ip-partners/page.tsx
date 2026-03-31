import {
  Check,
  Clapperboard,
  FilePenLine,
  Handshake,
  Puzzle,
} from "lucide-react";
import type { Metadata } from "next";
import PageIntro from "@/components/page/PageIntro";
import { ngcBrandInHeading } from "@/lib/ngcBrandHeading";
import PageSection from "@/components/page/PageSection";
import {
  contentCardClass,
  contentSectionTitleClass,
} from "@/components/page/contentStyles";
import { SITE_EMAILS } from "@/lib/emails";

export const metadata: Metadata = {
  title: "Partner IPs",
  description:
    "Creative execution and CG film partnerships for your intellectual property.",
};

const pillars = [
  {
    title: "Creative Development Support",
    icon: FilePenLine,
    items: [
      "Concept art & visual development",
      "Deep world-building frameworks",
      "Narrative & script refinement",
    ],
  },
  {
    title: "Creative Execution",
    icon: Clapperboard,
    items: [
      "Premium art direction",
      "High-end asset creation",
      "Visual style guide authoring",
    ],
  },
  {
    title: "End-to-End CG Film",
    icon: Puzzle,
    items: [
      "Pre-viz & cinematography",
      "Full production pipeline",
      "Final render & post-production",
    ],
  },
  {
    title: "Collaborative Workflow",
    icon: Handshake,
    items: [
      "Transparent milestone tracking",
      "Shared creative vision tools",
      "Integrated feedback loops",
    ],
  },
];

export default function IpPartnersPage() {
  return (
    <>
      <PageIntro
        kicker="Partner IPs / collaboration"
        title={ngcBrandInHeading("Nurturing your intellectual property")}
        tagline="Executive creative excellence — state-of-the-art CG execution."
        image={{
          src: "/poster_1.png",
          alt: "Partner IPs and creative execution at NGC",
          priority: true,
        }}
      >
        <p>
          Scaling cinematic worlds through executive creative excellence and
          state-of-the-art CG execution.
        </p>
      </PageIntro>

      <PageSection className="border-t border-black/5 pt-0">
        <div className="mb-12 text-center">
          <h2 className={contentSectionTitleClass}>
            Our four pillars of partnership
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className={`${contentCardClass} text-[var(--ngc-text-primary)]`}
              >
                <div className="size-16 rounded-lg bg-white flex items-center justify-center text-[var(--ngc-accent)] border border-black/10">
                  <Icon className="size-10" />
                </div>
                <h3 className="type-subheading mt-6 mb-4">
                  {p.title}
                </h3>
                <ul className="space-y-3 type-body text-[var(--ngc-text-secondary)]">
                  {p.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <Check className="text-[var(--ngc-accent)] bg-white rounded-full size-5 p-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </PageSection>

      <PageSection className="bg-black/[0.02] border-t border-black/5 pb-28">
        <div className={`${contentCardClass} text-center max-w-3xl mx-auto`}>
          <h2 className={`${contentSectionTitleClass} mb-6`}>
            Ready to bring your IP to life?
          </h2>
          <p className="type-body text-[var(--ngc-text-secondary)] mb-10 max-w-2xl mx-auto">
            We don&apos;t just produce films; we build legacies. Partner with
            Nature Guru Creations for collaboration that prioritizes quality,
            transparency, and innovation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`mailto:${SITE_EMAILS.business}?subject=IP%20Collaboration`}
              className="w-full sm:w-auto bg-[var(--ngc-accent)] hover:opacity-95 text-white px-10 py-4 rounded-xl type-body font-semibold transition-opacity"
            >
              Start a collaboration
            </a>
            <a
              href="/services"
              className="w-full sm:w-auto border border-[var(--ngc-accent)]/50 text-[var(--ngc-accent)] px-10 py-4 rounded-xl type-body font-semibold hover:bg-[var(--ngc-accent)]/10 transition-colors"
            >
              View capabilities
            </a>
          </div>
        </div>
      </PageSection>
    </>
  );
}

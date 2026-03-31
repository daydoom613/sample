import { CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";
import PageIntro from "@/components/page/PageIntro";
import PageSection from "@/components/page/PageSection";
import { ngcBrandInHeading } from "@/lib/ngcBrandHeading";
import {
  contentCardClass,
  contentSectionTitleClass,
} from "@/components/page/contentStyles";

export const metadata: Metadata = {
  title: "AI Filmmaking & Script Validation",
  description:
    "AI-powered filmmaking workflows to validate scripts, visualize scenes, and align production decisions before shoot.",
};

const whatWeDo = [
  "Script breakdown using AI analysis",
  "Scene visualization and concept generation",
  "Character and world visualization",
  "Mood and tone validation",
  "Shot design and camera planning",
  "Previsualization using AI tools",
  "Budget-aware visual planning",
  "Production feasibility validation",
];

const whyThisMatters = [
  "Producers understand the film visually before production",
  "Directors align creative vision early",
  "DOP plan lighting and camera setups",
  "Production teams avoid surprises",
  "VFX teams plan accurately",
  "Investors reduce risk",
];

const benefits = [
  "Reduced production risks",
  "Better creative clarity",
  "Cost vs quality optimization",
  "Faster decision-making",
  "Smooth production execution",
  "Stronger investor confidence",
];

export default function AiFilmmakingPage() {
  return (
    <div className="w-full">
      <PageIntro
        kicker="VFX service"
        title={ngcBrandInHeading("AI Filmmaking & Script Validation")}
        tagline="A visual film bible before production begins."
        image={{
          src: "/ai_poster.png",
          alt: "AI filmmaking and script validation visualization at Nature Guru Creations",
          priority: true,
          fit: "cover",
        }}
      >
        <p>
          At NGC, we leverage AI-powered filmmaking workflows to validate ideas
          before production begins.
        </p>
        <p>
          We use advanced AI tools and proprietary methodologies to lock
          scripts, visualize scenes, and validate creative decisions, reducing
          risk and improving clarity for producers and filmmakers.
        </p>
        <p>
          This process helps create a visual film bible that guides the entire
          production team.
        </p>
      </PageIntro>

      <PageSection className="border-t border-black/5 pt-0">
        <div className={contentCardClass}>
          <h2 className={`${contentSectionTitleClass} mb-6`}>What we do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whatWeDo.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-black/5 bg-white/70 p-4"
              >
                <CheckCircle2 className="mt-0.5 size-5 text-[var(--ngc-accent)] shrink-0" />
                <div className="type-body font-medium text-[var(--ngc-text-primary)]">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      <PageSection className="border-t border-black/5 bg-black/[0.02]">
        <div className={contentCardClass}>
          <h2 className={`${contentSectionTitleClass} mb-6`}>Why this matters</h2>
          <p className="type-body text-justify text-[var(--ngc-text-secondary)] max-w-5xl mb-8">
            This becomes a single source of truth, a visual film bible for the
            entire production team.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whyThisMatters.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-black/5 bg-white/70 p-4"
              >
                <CheckCircle2 className="mt-0.5 size-5 text-[var(--ngc-accent)] shrink-0" />
                <div className="type-body font-medium text-[var(--ngc-text-primary)]">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      <PageSection>
        <div className={contentCardClass}>
          <h2 className={`${contentSectionTitleClass} mb-6`}>Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-black/5 bg-white/70 p-4"
              >
                <CheckCircle2 className="mt-0.5 size-5 text-[var(--ngc-accent)] shrink-0" />
                <div className="type-body font-medium text-[var(--ngc-text-primary)]">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageSection>
    </div>
  );
}

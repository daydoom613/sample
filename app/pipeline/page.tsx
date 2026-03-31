import {
  BadgeCheck,
  Boxes,
  Film,
  Hammer,
  Layers,
  MonitorPlay,
  Sparkles,
} from "lucide-react";
import type { Metadata } from "next";
import PageIntro from "@/components/page/PageIntro";
import { ngcBrandInHeading } from "@/lib/ngcBrandHeading";
import PageSection from "@/components/page/PageSection";
import {
  contentCardClass,
  contentSectionTitleClass,
} from "@/components/page/contentStyles";

export const metadata: Metadata = {
  title: "Technology & VFX Pipeline",
  description:
    "NGC’s hybrid ACES-driven pipeline with Unreal, Houdini, Maya, Katana, Nuke, and Baselight.",
};

const pipeline = [
  {
    title: "Story & Previz",
    detail: "Concept → Storyboard → Unreal",
    icon: MonitorPlay,
  },
  {
    title: "Assets Modeling & Sculpting",
    detail: "Maya / ZBrush / Houdini",
    icon: Boxes,
  },
  {
    title: "Surfacing & LookDev",
    detail: "Substance / Mari / Katana / Arnold",
    icon: Layers,
  },
  {
    title: "Animation & CFX",
    detail: "Maya + Houdini (Muscle, Groom, FX, Cloth)",
    icon: Sparkles,
  },
  {
    title: "Lighting & Rendering",
    detail: "Katana / Karma XPU / Arnold / RenderMan",
    icon: Hammer,
  },
  {
    title: "Compositing & DI",
    detail: "Nuke + Baselight",
    icon: Film,
  },
  {
    title: "Final Delivery & DI Mastering",
    detail: "4K / 8K HDR ACES",
    icon: BadgeCheck,
  },
];

const tools = [
  "Unreal",
  "Houdini",
  "Maya",
  "Mari",
  "Katana",
  "Nuke",
  "Baselight",
  "ACES",
  "USD",
];

export default function PipelinePage() {
  return (
    <div className="w-full">
      <PageIntro
        kicker="Technology & pipeline"
        title={ngcBrandInHeading("NGC Technology & VFX Pipeline")}
        tagline="Film-grade realism at optimized cost and time."
        image={{
          src: "/imgSpl.avif",
          alt: "NGC VFX and CG pipeline technology",
          priority: true,
        }}
      >
        <p>
          NGC operates with a hybrid ACES-driven, Unreal + Houdini + Maya +
          Katana + Nuke + Baselight pipeline tightly integrated by AI tools in
          every stage of production, ensuring film-grade realism at optimized
          cost and time.
        </p>
      </PageIntro>

      <PageSection className="border-t border-black/5 pt-0">
        <h2 className={`${contentSectionTitleClass} mb-10`}>Pipeline</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pipeline.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.title} className={contentCardClass}>
                <div className="flex items-start gap-3">
                  <div className="size-12 rounded-xl bg-[var(--ngc-accent)]/15 text-[var(--ngc-accent)] flex items-center justify-center shrink-0">
                    <Icon className="size-6" />
                  </div>
                  <div>
                    <h3 className="type-subheading">{p.title}</h3>
                    <div className="mt-1 type-body text-[var(--ngc-text-secondary)]">
                      {p.detail}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className={`mt-12 ${contentCardClass}`}>
          <div className="type-body font-semibold uppercase tracking-[0.14em] text-[var(--ngc-accent)]">
            Philosophy
          </div>
          <p className="mt-4 type-heading ngc-heading-plain text-[var(--ngc-text-primary)] max-w-3xl">
            “We believe a perfect shot is where art, physics, and faith meet.”
          </p>
        </div>
      </PageSection>

      <PageSection className="bg-black/[0.02] border-t border-black/5">
        <div className={contentCardClass}>
          <div className="flex items-center gap-3 mb-4">
            <div className="size-12 rounded-xl bg-[var(--ngc-accent)]/15 text-[var(--ngc-accent)] flex items-center justify-center">
              <Layers className="size-6" />
            </div>
            <h2 className="type-heading uppercase">Tools &amp; standards</h2>
          </div>
          <p className="type-body text-justify text-[var(--ngc-text-secondary)] max-w-4xl mb-8">
            Our production engineering is built on industry-standard tools and a
            consistent color-managed workflow for predictable results across
            teams and deliverables.
          </p>
          <div className="flex flex-wrap gap-3">
            {tools.map((t) => (
              <span
                key={t}
                className="rounded-full border border-black/10 bg-white px-4 py-2 type-body font-semibold text-[var(--ngc-text-primary)]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </PageSection>
    </div>
  );
}

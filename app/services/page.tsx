import { CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";
import PageIntro from "@/components/page/PageIntro";
import { ngcBrandLeadingText } from "@/lib/ngcBrandHeading";
import PageSection from "@/components/page/PageSection";
import {
  contentCardClass,
  contentSectionTitleClass,
} from "@/components/page/contentStyles";

export const metadata: Metadata = {
  title: "International VFX / CG Services",
  description:
    "High-end VFX and CG for global films and series through NGC’s integrated pipeline.",
};

const capabilities = [
  {
    title: "VFX Supervision & Planning",
    items: [
      "Script breakdown and VFX planning",
      "On-set VFX supervision",
      "Production design consultation",
    ],
  },
  {
    title: "CG Asset & Environment Creation",
    items: [
      "Digital environments and world-building",
      "Photorealistic CG assets and characters",
      "Matte painting and environment extensions",
    ],
  },
  {
    title: "Simulation & Effects",
    items: [
      "Destruction, explosions, and dynamic simulations",
      "Water, smoke, fire, and atmospheric effects",
      "Crowd and creature simulations",
    ],
  },
  {
    title: "Lighting, Rendering & Look Development",
    items: [
      "Physically accurate lighting and rendering pipelines",
      "Cinematic realism and consistency across shots and sequences",
    ],
  },
  {
    title: "Compositing & Final Integration",
    items: [
      "Shot-level compositing and visual integration",
      "Final image finishing to match plates and delivery standards",
    ],
  },
];

const pipelineAdvantage = [
  "Advanced AI-assisted tools integrated into the production workflow",
  "Seamless previsualization to final compositing pipeline",
  "Industry-standard tools including ZBrush, Maya, Mari, Houdini, Unreal, Nuke, and DI pipelines",
  "Efficient remote collaboration with international production teams",
];

const collaboration = [
  "Supervisor-led workflows",
  "Secure production pipelines",
  "Shot tracking and review systems",
  "Integrated asset and version management",
];

export default function ServicesPage() {
  return (
    <div className="w-full">
      <PageIntro
        kicker="International VFX / CG services"
        title={ngcBrandLeadingText(
          "High-end VFX and CG for global films and series",
        )}
        tagline="Delivered through NGC’s integrated production pipeline."
        image={{
          src: "/vfxPoster.jpg",
          alt: "VFX and CG work at Nature Guru Creations",
          priority: true,
          fit: "contain",
        }}
      >
        <p>
          NGC provides high-end visual effects and CG production services for
          international film studios, OTT platforms, advertising agencies, and
          creative production companies. Working through a robust and tightly
          integrated pipeline, NGC collaborates with global studios, producers,
          and production teams to execute complex visual sequences, digital
          environments, and CG-driven storytelling at cinematic scale.
        </p>
      </PageIntro>

      <PageSection className="border-t border-black/5 pt-0">
        <h2 className={`${contentSectionTitleClass} mb-10`}>
          Our international capabilities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {capabilities.map((c) => (
            <div key={c.title} className={contentCardClass}>
              <h3 className="type-subheading">{c.title}</h3>
              <div className="mt-5 space-y-3">
                {c.items.map((i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 size-5 text-[var(--ngc-accent)] shrink-0" />
                    <div className="type-body font-medium text-[var(--ngc-text-primary)]">
                      {i}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection className="border-t border-black/5 bg-black/[0.02]">
        <div className={contentCardClass}>
          <h2 className={`${contentSectionTitleClass} mb-6`}>
            Our pipeline advantage
          </h2>
          <p className="type-body text-justify text-[var(--ngc-text-secondary)] max-w-5xl mb-8">
            NGC operates with a modern, integrated pipeline designed for global
            collaboration. Our pipeline ensures consistent quality, predictable
            timelines, and smooth integration with global post-production
            workflows.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pipelineAdvantage.map((p) => (
              <div
                key={p}
                className="flex items-start gap-3 rounded-xl border border-black/5 bg-white/70 p-4"
              >
                <CheckCircle2 className="mt-0.5 size-5 text-[var(--ngc-accent)] shrink-0" />
                <div className="type-body font-medium text-[var(--ngc-text-primary)]">
                  {p}
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      <PageSection>
        <div className={contentCardClass}>
          <h2 className={`${contentSectionTitleClass} mb-6`}>
            Collaboration approach
          </h2>
          <p className="type-body text-justify text-[var(--ngc-text-secondary)] max-w-5xl mb-8">
            NGC works closely with international production teams through
            supervisor-led workflows and secure production pipelines, ensuring
            transparency, reliability, and high-quality delivery across every
            stage of production.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {collaboration.map((c) => (
              <div
                key={c}
                className="flex items-start gap-3 rounded-xl border border-black/5 bg-white/70 p-4"
              >
                <CheckCircle2 className="mt-0.5 size-5 text-[var(--ngc-accent)] shrink-0" />
                <div className="type-body font-medium text-[var(--ngc-text-primary)]">
                  {c}
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageSection>
    </div>
  );
}

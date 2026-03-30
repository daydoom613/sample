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
  title: "The Science of Storytelling",
  description:
    "NGC’s structured methodology from ideation to delivery — technology, emotion, and story.",
};

const processSteps = [
  "Ideation & Concept Development",
  "Creative Writing & Story Design",
  "Visualisation & Storyboarding",
  "Previsualisation (Previs)",
  "VFX/CG Planning & Supervision",
  "Budgeting & Technical Strategy",
  "Pipeline Integration & Tools Development",
  "VFX Production & Simulation",
  "Quality Control & Final Delivery",
];

const approachPoints = [
  "Simplify production complexities",
  "Balance cost with quality to maximize creative value",
  "Offer transparent processes and clear communication",
  "Empower creators to focus on storytelling while we manage precision and delivery",
];

export default function ScienceOfStorytellingPage() {
  return (
    <div className="w-full">
      <PageIntro
        kicker="Global cinema creation"
        title={ngcBrandLeadingText("NGC — The Science of Storytelling")}
        tagline="Technology • Emotion • Story — precision and creativity together."
        stats={[
          { value: "Method", label: "Structured workflows" },
          { value: "Delivery", label: "End-to-end ownership" },
        ]}
        image={{
          src: "/about.avif",
          alt: "The science of storytelling — NGC methodology",
          priority: true,
        }}
      >
        <p>
          At NGC, storytelling is not just an art — it is a science of
          precision and creativity. We follow technically correct methods and
          proven workflows to minimize risks and avoid failures during
          production.
        </p>
        <p>
          Our approach is scientific, structured, and disciplined, ensuring that
          every creative idea is translated into visuals with clarity,
          efficiency, and quality.
        </p>
      </PageIntro>

      <PageSection className="border-t border-black/5 pt-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {["Technology", "Emotion", "Story"].map((label, i) => (
            <div key={label} className={contentCardClass}>
              <div className="type-body font-semibold uppercase tracking-[0.14em] text-[var(--ngc-accent)]">
                {label}
              </div>
              <p className="mt-2 type-body text-[var(--ngc-text-secondary)]">
                {i === 0 &&
                  "Engineering-driven pipelines to protect story intent."}
                {i === 1 && "Rhythm, depth, and meaning — designed into every frame."}
                {i === 2 && "Clear methodology from concept to delivery."}
              </p>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection className="border-t border-black/5 bg-black/[0.02]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className={`${contentSectionTitleClass} mb-6`}>About NGC</h2>
            <p className="type-body text-justify text-[var(--ngc-text-secondary)]">
              Founded in 2024, Nature Guru Creations (NGC) is a high-end visual
              effects and full-CG filmmaking studio driven by a passionate core
              team with over two decades of global VFX experience — across
              Hollywood productions, Indian cinema, international advertising
              brands, and artistic animated episodic shows.
            </p>
            <p className="mt-4 type-body text-justify text-[var(--ngc-text-secondary)]">
              Our foundation blends art, science, and storytelling. Having studied
              life sciences, natural patterns, and human behavior, we use that
              understanding to craft visuals that carry depth, rhythm, and
              emotion.
            </p>
            <p className="mt-4 type-body text-justify text-[var(--ngc-text-secondary)]">
              NGC was born with a clear purpose — to solve the recurring
              challenges in the VFX ecosystem by offering a seamless creative
              and technical bridge from concept to delivery.
            </p>
          </div>
          <div className={contentCardClass}>
            <h3 className="type-subheading">Our philosophy</h3>
            <p className="mt-4 type-body text-justify text-[var(--ngc-text-secondary)]">
              At NGC, we believe that great storytelling emerges when emotion
              meets precision. By combining creative intuition with scientific
              methodology, we transform complex cinematic ideas into seamless,
              high-quality visual experiences.
            </p>
            <div className="mt-8 rounded-xl bg-[var(--ngc-accent)]/10 border border-[var(--ngc-accent)]/20 p-6">
              <p className="type-subheading text-[var(--ngc-accent)]">
                “Technology • Emotion • Story — The Future of Cinema.”
              </p>
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection>
        <h2 className={`${contentSectionTitleClass} mb-6`}>
          Our end-to-end creative process
        </h2>
        <p className="type-body text-[var(--ngc-text-secondary)] max-w-3xl mb-10">
          We are professionals, artists, and innovators. We manage the complete
          pipeline, including:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {processSteps.map((step) => (
            <div
              key={step}
              className="flex items-start gap-3 rounded-xl border border-black/5 bg-white p-4 shadow-[0_10px_40px_rgba(0,0,0,0.04)]"
            >
              <CheckCircle2 className="mt-0.5 size-5 text-[var(--ngc-accent)] shrink-0" />
              <div className="type-body font-medium text-[var(--ngc-text-primary)]">
                {step}
              </div>
            </div>
          ))}
        </div>
        <div className={`mt-12 ${contentCardClass}`}>
          <p className="type-body text-justify text-[var(--ngc-text-secondary)]">
            Our AI-augmented pipeline integrates advanced tools into every stage —
            from previsualization to compositing and DI — ensuring efficiency,
            realism, and creative control. This scientific workflow allows
            filmmakers to focus on storytelling while we ensure that technology,
            visuals, and execution align perfectly with the creative vision.
          </p>
        </div>
      </PageSection>

      <PageSection className="bg-black/[0.02] border-t border-black/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className={contentCardClass}>
            <h2 className={`${contentSectionTitleClass} mb-6`}>Our vision</h2>
            <p className="type-body text-justify text-[var(--ngc-text-secondary)]">
              To build a global ecosystem where creativity, technology, and
              integrity unite — empowering storytellers to craft unforgettable
              cinematic experiences.
            </p>
            <p className="mt-4 type-body text-justify text-[var(--ngc-text-secondary)]">
              We invite producers, directors, innovators, and investors to join
              us in this movement — a creative force committed to reshaping the
              future of filmmaking.
            </p>
          </div>
          <div className={contentCardClass}>
            <h2 className={`${contentSectionTitleClass} mb-6`}>Our approach</h2>
            <p className="type-body text-justify text-[var(--ngc-text-secondary)]">
              At NGC, we make it accessible, efficient, and inspiring. We welcome
              all filmmakers — from new voices to established creators. Our goal
              is to collaborate, support, and elevate every vision, regardless
              of scale.
            </p>
            <div className="mt-8 space-y-3">
              {approachPoints.map((p) => (
                <div key={p} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 text-[var(--ngc-accent)] shrink-0" />
                  <div className="type-body font-medium text-[var(--ngc-text-primary)]">
                    {p}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-8 type-body text-justify text-[var(--ngc-text-secondary)]">
              Our background — spanning Hollywood to regional Indian industries —
              gives us the ability to judge each project with global standards
              and local wisdom.
            </p>
          </div>
        </div>
      </PageSection>

      <PageSection className="pb-28">
        <div className={contentCardClass}>
          <h2 className={`${contentSectionTitleClass} mb-6`}>Stay connected</h2>
          <p className="type-body text-[var(--ngc-text-secondary)] max-w-3xl">
            Together, we create. Together, we innovate. Together, we inspire.
          </p>
        </div>
      </PageSection>
    </div>
  );
}

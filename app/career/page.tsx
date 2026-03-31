import { CheckCircle2, Mail, MapPin } from "lucide-react";
import type { Metadata } from "next";
import PageIntro from "@/components/page/PageIntro";
import { ngcBrandLeadingText } from "@/lib/ngcBrandHeading";
import PageSection from "@/components/page/PageSection";
import {
  contentCardClass,
  contentSectionTitleClass,
} from "@/components/page/contentStyles";
import CareersInterestForm from "@/components/career/CareersInterestForm";

export const metadata: Metadata = {
  title: "Careers & Talent Hub",
  description:
    "Join NGC’s global artist network across modeling, animation, VFX, pipeline, and more.",
};

const departments = [
  "Concept / Storyboard",
  "Modeling / Sculpting",
  "Grooming / CFX / FX",
  "Animation / Rigging / Muscles",
  "Lighting / Compositing",
  "Unreal / DI / AI Tools",
];

const suggestions = [
  {
    title: "Talent Pool",
    body: "If you’re not seeing the perfect role, join our talent pool. We keep profiles ready for upcoming shows and R&D needs.",
  },
  {
    title: "Internship Program",
    body: "Structured mentorship for emerging artists and technical talent across VFX, CG, and pipeline development.",
  },
  {
    title: "Vendor / Partner Talent",
    body: "Studios and vendors can collaborate with NGC through curated partner rosters and supervised workflows for quality and consistency.",
  },
];

const ADDRESS =
  "G2, Elite Residency, Road no 27, Alkapur Township, Neknampur Village, Hyderabad, Telangana - 500089, India";

export default function CareerPage() {
  return (
    <div className="w-full">
      <PageIntro
        kicker="Careers & talent hub"
        title={ngcBrandLeadingText("Join NGC’s global artist network")}
        tagline="Technology • Emotion • Story — build with us."
        stats={[
          { value: "Global", label: "Remote-friendly roles" },
          { value: "Pipeline", label: "ACES + AI-augmented tools" },
        ]}
        image={{
          src: "/orgImg.png",
          alt: "NGC careers — creative and technical teams",
          priority: true,
        }}
      >
        <p>
          We welcome artists from around the world in departments like Modeling,
          Sculpting, Texturing, Rigging, LookDev, CFX, Lighting, FX, Animation,
          Unreal, Nuke, DI, AI R&amp;D, and pipeline development.
        </p>
      </PageIntro>

      <PageSection className="border-t border-black/5 pt-0">
        <h2 className={`${contentSectionTitleClass} mb-10`}>
          Open roles / departments
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {departments.map((d) => (
            <div
              key={d}
              className="flex items-start gap-3 rounded-xl border border-black/5 bg-white p-4 shadow-[0_10px_40px_rgba(0,0,0,0.04)]"
            >
              <CheckCircle2 className="mt-0.5 size-5 text-[var(--ngc-accent)] shrink-0" />
              <div className="type-body font-semibold text-[var(--ngc-text-primary)]">
                {d}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <CareersInterestForm />
        </div>
      </PageSection>

      <PageSection>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {suggestions.map((s) => (
            <div key={s.title} className={contentCardClass}>
              <h3 className="type-subheading">{s.title}</h3>
              <p className="mt-3 type-body text-[var(--ngc-text-secondary)]">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection className="border-t border-black/5 bg-black/[0.02] pb-28">
        <div className={contentCardClass}>
          <h2 className={`${contentSectionTitleClass} mb-8`}>
            Studio &amp; contact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-black/5 bg-white/70 p-7">
              <div className="flex items-start gap-3">
                <MapPin className="size-5 text-[var(--ngc-accent)] mt-0.5" />
                <div>
                  <div className="type-body font-semibold text-[var(--ngc-text-primary)]">
                    Address
                  </div>
                  <div className="mt-2 type-body text-[var(--ngc-text-secondary)]">
                    {ADDRESS}
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-black/5 bg-white/70 p-7">
              <div className="flex items-start gap-3">
                <Mail className="size-5 text-[var(--ngc-accent)] mt-0.5" />
                <div>
                  <div className="type-body font-semibold text-[var(--ngc-text-primary)]">
                    Email
                  </div>
                  <div className="mt-2 type-body text-[var(--ngc-text-secondary)]">
                    Careers:{" "}
                    <a
                      className="font-semibold text-[var(--ngc-accent)] hover:underline"
                      href="mailto:talent@naturegurucreations.com"
                    >
                      talent@naturegurucreations.com
                    </a>
                    <br />
                    Collaborations:{" "}
                    <a
                      className="font-semibold text-[var(--ngc-accent)] hover:underline"
                      href="mailto:connect@naturegurucreations.com"
                    >
                      connect@naturegurucreations.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>
    </div>
  );
}

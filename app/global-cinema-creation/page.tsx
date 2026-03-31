import Link from "next/link";
import { SquareArrowOutUpRight } from "lucide-react";
import type { Metadata } from "next";
import PageIntro from "@/components/page/PageIntro";
import { ngcBrandInHeading } from "@/lib/ngcBrandHeading";
import PageSection from "@/components/page/PageSection";
import { contentSectionTitleClass } from "@/components/page/contentStyles";

export const metadata: Metadata = {
  title: "Global Cinema Creation",
  description:
    "The heart of NGC filmmaking — originals, co-productions, and partner IPs.",
};

export default function GlobalCinemaCreationPage() {
  return (
    <>
      <PageIntro
        kicker="Global cinema creation"
        title={ngcBrandInHeading("The heart of NGC filmmaking")}
        tagline="Stories that travel — continent to continent."
        image={{
          src: "/hero-global.avif",
          alt: "Global cinema creation at Nature Guru Creations",
          priority: true,
        }}
      >
        <p>
          The creative core of NGC. We craft boundary-pushing stories and
          visionary experiences that resonate with diverse audiences across every
          continent.
        </p>
      </PageIntro>

      <PageSection className="border-t border-black/5 pt-0">
        <div className="mb-16">
          <h2 className={`${contentSectionTitleClass} mb-4`}>
            Production pillars
          </h2>
          <div className="w-20 h-1 bg-[var(--ngc-accent)] rounded-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group relative aspect-3/4 overflow-hidden rounded-xl bg-slate-800 border border-black/5">
            <div
              className="absolute inset-0 transition-transform duration-700 group-hover:scale-110 bg-[url('/ngcOrg.avif')] bg-cover bg-center"
              data-alt="Dramatic cinematic lighting on a futuristic set"
            />
            <div className="absolute inset-0 cinematic-gradient" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <span className="text-white type-body font-bold uppercase tracking-widest mb-2">
                Internal dev
              </span>
              <h3 className="type-subheading font-bold mb-3 ngc-heading-plain text-white">
                {ngcBrandInHeading("NGC Originals")}
              </h3>
              <p className="text-slate-300 type-body leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Stories created in-house that showcase the unique creativity and
                vision of NGC.
              </p>
              <Link
                href="/global-cinema-creation/ngc-originals"
                className="flex items-center gap-2 text-white font-bold type-body hover:text-[var(--ngc-accent)] transition-colors"
              >
                Explore slate
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
          <div className="group relative aspect-3/4 overflow-hidden rounded-xl bg-slate-800 border border-black/5">
            <div
              className="absolute inset-0 transition-transform duration-700 group-hover:scale-110 bg-[url('/ngcOrg.avif')] bg-cover bg-center"
              data-alt="Film crew working on an international location"
            />
            <div className="absolute inset-0 cinematic-gradient" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <span className="text-white type-body font-bold uppercase tracking-widest mb-2">
                Global partnerships
              </span>
              <h3 className="type-subheading font-bold mb-3">
                Co-productions
              </h3>
              <p className="text-slate-300 type-body leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Partnering with international studios to bring great stories to
                life across borders.
              </p>
              <Link
                href="/investors"
                className="flex items-center gap-2 text-white font-bold type-body hover:text-[var(--ngc-accent)] transition-colors"
              >
                Joint ventures
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
          <div className="group relative aspect-3/4 overflow-hidden rounded-xl bg-slate-800 border border-black/5">
            <div
              className="absolute inset-0 transition-transform duration-700 group-hover:scale-110 bg-[url('/imgSpl.avif')] bg-cover bg-center"
              data-alt="Cinematic camera lenses and equipment"
            />
            <div className="absolute inset-0 cinematic-gradient" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <span className="text-white type-body font-bold uppercase tracking-widest mb-2">
                IP management
              </span>
              <h3 className="type-subheading font-bold mb-3">
                Partner IPs
              </h3>
              <p className="text-slate-300 type-body leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Bringing fresh ideas and creativity to well-known global
                franchises.
              </p>
              <Link
                href="/global-cinema-creation/ip-partners"
                className="flex items-center gap-2 text-white font-bold type-body hover:text-[var(--ngc-accent)] transition-colors"
              >
                Portfolio
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection className="bg-black/[0.02] border-y border-black/5">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={`${contentSectionTitleClass} mb-4`}>
            Creative collaboration
          </h2>
          <p className="type-body text-[var(--ngc-text-secondary)]">
            We are constantly seeking visionary talent to push the boundaries of
            modern cinema. Join our ecosystem of elite storytellers.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
          <div className="rounded-2xl overflow-hidden border border-black/5 shadow-[0_20px_60px_rgba(0,0,0,0.06)] min-h-80 bg-slate-800 bg-[url('/poster_1.png')] bg-cover bg-center">
            <div className="backdrop-blur-[2px] h-full p-10 flex flex-col justify-between bg-black/40 min-h-80">
              <h4 className="type-subheading mb-4">Writers</h4>
              <div>
                <p className="text-white type-body leading-relaxed mb-8">
                  Scripting the future. We collaborate with bold voices capable
                  of weaving complex narratives for global audiences.
                </p>
                <Link
                  className="type-body font-bold uppercase tracking-widest text-white inline-flex items-center gap-2 hover:gap-3 transition-all"
                  href="/global-cinema-creation/collaborations#writers"
                >
                  Submit script
                  <SquareArrowOutUpRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-black/5 shadow-[0_20px_60px_rgba(0,0,0,0.06)] min-h-80 bg-slate-800 bg-[url('/c1.png')] bg-cover bg-center">
            <div className="backdrop-blur-[2px] h-full p-10 flex flex-col justify-between bg-black/40 min-h-80">
              <h4 className="type-subheading mb-4">Directors</h4>
              <div>
                <p className="text-gray-200 type-body leading-relaxed mb-8">
                  Visualizing the unseen. We provide the resources and creative
                  freedom for directors to manifest their unique aesthetic.
                </p>
                <Link
                  className="type-body font-bold uppercase tracking-widest text-white inline-flex items-center gap-2 hover:gap-3 transition-all"
                  href="/global-cinema-creation/collaborations#directors"
                >
                  Showcase reel
                  <SquareArrowOutUpRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-black/5 shadow-[0_20px_60px_rgba(0,0,0,0.06)] min-h-80 bg-slate-800 bg-[url('/c2.png')] bg-cover bg-center">
            <div className="backdrop-blur-[2px] p-10 flex flex-col justify-between h-full min-h-80 bg-black/40">
              <h4 className="type-subheading mb-4">
                Music creators
              </h4>
              <div>
                <p className="text-gray-200 type-body leading-relaxed mb-8">
                  Composing the soul of cinema. Our sonic landscapes are as vital
                  as our visual ones.
                </p>
                <Link
                  className="type-body font-bold uppercase tracking-widest text-white inline-flex items-center gap-2 hover:gap-3 transition-all"
                  href="/global-cinema-creation/collaborations#music-sound"
                >
                  Join scoring studio
                  <SquareArrowOutUpRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </PageSection>
    </>
  );
}

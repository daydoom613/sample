import { ArrowLeft, ArrowRight, Box, Play, Sparkles } from "lucide-react";
import type { Metadata } from "next";
import PageIntro from "@/components/page/PageIntro";
import { ngcBrandLeadingText } from "@/lib/ngcBrandHeading";
import { contentSectionTitleClass } from "@/components/page/contentStyles";

export const metadata: Metadata = {
  title: "Creative Collaboration",
  description:
    "Long-term artistic partnerships with writers, directors, and music creators.",
};

export default function CollaborationsPage() {
  return (
    <>
      <PageIntro
        kicker="The creative portal"
        title={ngcBrandLeadingText("Shape the future of storytelling")}
        tagline="Partnership • Vision • Craft — built together."
        image={{
          src: "/c1.png",
          alt: "Creative collaboration at Nature Guru Creations",
          priority: true,
        }}
      >
        <p>
          NGC is built on long-term artistic partnerships. We don&apos;t just
          take submissions; we build worlds together. Join our community of
          visionaries.
        </p>
      </PageIntro>
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-black/5">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="space-y-2">
            <h2 className={contentSectionTitleClass}>
              The Creative Pillars
            </h2>
            <p className="type-body text-[var(--ngc-text-secondary)] max-w-md">
              Discover your path within our ecosystem. We look for collaborators
              who think in trilogies and deep lore.
            </p>
          </div>
          <div className="flex gap-2">
            <ArrowLeft className="text-slate-400 cursor-pointer hover:text-red-600" />
            <ArrowRight className="text-slate-400 cursor-pointer hover:text-red-600" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            id="writers"
            className="group relative aspect-3/4 overflow-hidden rounded-xl bg-slate-800 transition-all duration-500 hover:-translate-y-2 scroll-mt-28"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              data-alt="Close up of an old typewriter with warm lighting"
              style={{
                backgroundImage: `linear-gradient(
                    0deg,
                    rgba(16, 16, 34, 0.9) 0%,
                    rgba(16, 16, 34, 0) 60%
                  ),
                  url('https://lh3.googleusercontent.com/aida-public/AB6AXuDFbEst1fp0XQlorkpXUSN1qexuqVN_moDjNwrYSE5CUS4peJKmns5__sRSDHIBDcDdMilZ30hNnJOMxpQ8vJVbvs7-luW5ZQMR0Q8bAVDp5hRZmEYsGzNuXcYHEUqxSCMAL81SW1wV_hT9gSI7PGQNycP5Fh19cfHQiSjvCjG9SUBRIwAc5BRmsCcjIMrsIL8bCb-yydiBMwPFb30_Ih9T7vTzWqdfGvH6xZtuy8qX9DHbSzOx8A8fR7lQHD7VQtJ89TPA6EiCqyKF')`,
              }}
            ></div>
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 transition-colors rounded-xl"></div>
            <div className="absolute bottom-0 p-8 w-full flex flex-col gap-4">
              <div className="space-y-1">
                <h3 className="text-2xl font-bold">
                  Writers &amp; Story Creators
                </h3>
                <p className="text-slate-300 text-sm line-clamp-2">
                  Architects of narrative and world-builders. We prioritize
                  narrative depth and unique perspectives.
                </p>
              </div>
              <button className="w-full h-12 bg-white text-background-dark font-bold rounded-lg group-hover:text-red-600 transition-colors">
                Pitch Your Universe
              </button>
            </div>
          </div>
          <div
            id="directors"
            className="group relative aspect-3/4 overflow-hidden rounded-xl bg-slate-800 transition-all duration-500 hover:-translate-y-2 scroll-mt-28"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 bg-[url('/c1.png')]"
              data-alt="Cinematographer holding a professional cinema camera"
              style={{
                backgroundImage: ` 
                background-image: linear-gradient(
                  0deg,
                  rgba(16, 16, 34, 0.9) 0%,
                  rgba(16, 16, 34, 0) 60%
                  )
                  `,
              }}
            ></div>
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 transition-colors rounded-xl"></div>
            <div className="absolute bottom-0 p-8 w-full flex flex-col gap-4">
              <div className="space-y-1">
                <h3 className="text-2xl font-bold">
                  Directors &amp; Visual Creators
                </h3>
                <p className="text-slate-300 text-sm line-clamp-2">
                  Mastering the visual language of the screen. Collaborating
                  from treatment to final grade.
                </p>
              </div>
              <button className="w-full h-12 bg-white text-background-dark font-bold rounded-lg  group-hover:text-red-600 transition-colors">
                Co-Direct Your Vision
              </button>
            </div>
          </div>
          <div
            id="music-sound"
            className="group relative aspect-3/4 overflow-hidden rounded-xl bg-slate-800 transition-all duration-500 hover:-translate-y-2 scroll-mt-28"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 bg-[url('/c2.png')]"
              data-alt="Music producer at a mixing console in a studio"
              style={{
                backgroundImage: `
                background-image: linear-gradient(
                  0deg,
                  rgba(16, 16, 34, 0.9) 0%,
                  rgba(16, 16, 34, 0) 60%
                  )`,
              }}
            ></div>
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 transition-colors rounded-xl"></div>
            <div className="absolute bottom-0 p-8 w-full flex flex-col gap-4">
              <div className="space-y-1">
                <h3 className="text-2xl font-bold">
                  Music &amp; Sound Creators
                </h3>
                <p className="text-slate-300 text-sm line-clamp-2">
                  Defining the auditory soul of a project. Score, sound design,
                  and atmospheric textures.
                </p>
              </div>
              <button className="w-full h-12 bg-white text-background-dark font-bold rounded-lg  group-hover:text-red-600 transition-colors">
                Compose the Mood
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold tracking-tight">
                  VFX Services as a Collaborative Resource
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our in-house VFX studio isn&apos;t just a post-production
                  stop; it&apos;s a creative partner. We integrate visual
                  effects from the scripting phase to ensure technical
                  feasibility meets artistic ambition.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <Box className="text-red-600 size-10" />
                  <div>
                    <h4 className="font-bold">
                      Real-time Visualization
                    </h4>
                    <p className="text-sm text-gray-500">
                      Preview complex scenes instantly using our Unreal Engine
                      pipeline.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Sparkles className="text-red-600 size-10" />
                  <div>
                    <h4 className="font-bold">
                      Procedural World Building
                    </h4>
                    <p className="text-sm text-slate-500">
                      Creating vast, detailed environments that breathe life
                      into stories.
                    </p>
                  </div>
                </div>
              </div>
              <button className="flex items-center gap-2 group text-red-600 font-bold">
                Learn about our technical pipeline
                <ArrowRight className="material-symbols-outlined group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-video shadow-2xl">
              <div
                className="absolute inset-0 bg-cover bg-center bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuBvbRId7dOOUlguWhgc-pNndcdXgPNxAHGqJCWZz9HAkpc4bh2ESAnwQ5HxgCcRZV1IFNL3GsnEY6O3P6pJP09phzFXfdHHDnlx0x_oLdRjozR72dL7_m6FmcS6iQ8OUwev8hNzUdGnnTn985eDuvdowC_fcUCRaCXeMxeogo8yXGY0u-fbXSJ2Yu7lqpRBtAr4byhc9g_8bg0YEtWeTLXDhFeCyICQ2LhtF_knGsFV8stcIZpnVTS6YhWVrhhr3Y_gtMpn9lIlHs2l')]"
                data-alt="Technical setup with multiple monitors showing 3D wireframes"
              ></div>
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary shadow-xl cursor-pointer hover:scale-110 transition-transform">
                  <Play className="fill-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <div className="glass-card max-w-4xl mx-auto rounded-3xl p-12 md:p-20 space-y-8 border-primary/20 bg-primary/[0.02]">
          <h3 className="ngc-heading-plain text-3xl font-bold tracking-tight italic text-[var(--ngc-text-primary)]">
            &quot;We value the artist&apos;s voice over the project&apos;s
            budget. Our goal is to foster a safe haven for wild ideas and
            long-term creative stability.&quot;
          </h3>
          <div className="flex flex-col items-center gap-2">
            <div
              className="w-12 h-12 rounded-full bg-cover bg-center bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuC4Ssu2qxii2kBKZDvv1b3eIq9I26jzceO-l82M2LQN_Rvi5gxepqBhorrpFaPmVl-LzHoU3Suh5ybVYEog1VBGinjW7IOLc0pVHhEC6nyivEx6mUC-MFbxfCQwH2SJLXWfO5oRhZoMwhCigwRpXkQm9JNqI-ZISbWsgU-CGfh1ui1CDJrJrztOxTZoGTQIP8Y7od2nBf1xUQS2g3jAqCqb-i8zjD5CtAh9TBTGdAcpsCF9uOo2eKmkgJsmI2K0zcWb66TbVyW9TiL1')]"
              data-alt="Portrait of the creative director"
            ></div>
            <div>
              <p className="font-bold">Julian Vane</p>
              <p className="text-xs text-primary font-medium tracking-widest uppercase">
                Founder &amp; Creative Director
              </p>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 flex flex-wrap justify-center gap-12">
            <div className="text-center">
              <p className="text-2xl font-bold text-red-600">12</p>
              <p className="text-xs text-slate-600 uppercase tracking-widest">
                Active Partnerships
              </p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-red-600">45</p>
              <p className="text-xs text-slate-600 uppercase tracking-widest">
                Awards Won
              </p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-red-600">3</p>
              <p className="text-xs text-slate-600 uppercase tracking-widest">
                Ongoing Universes
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

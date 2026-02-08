import {
  ArrowRight,
  Globe,
  Handshake,
  Lightbulb,
  Play,
  Quote,
  SquarePen,
  Videotape,
} from "lucide-react";

export default function page() {
  return (
    <>
      <section className="px-6 md:px-20 lg:px-40 py-12 md:py-20 lg:py-28 relative overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="max-w-2xl flex flex-col gap-6">
            <span className="text-red-600 font-bold tracking-[0.2em] uppercase text-xs">
              Deep Dive Series
            </span>
            <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tighter">
              What Defines an{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-red-500 to-red-700">
                NGC Original
              </span>
            </h1>
            <p className="text-gray-500 text-lg md:text-xl leading-relaxed font-light">
              Bridging nature and high-end filmmaking through our unique
              production DNA. We create stories that resonate globally, rooted
              in creative authenticity.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="flex items-center gap-2 bg-primary text-white font-bold h-14 px-8 rounded-lg hover:shadow-[0_0_30px_rgba(19,19,236,0.4)] transition-all">
                <span>View Filmography</span>
                <span className="material-symbols-outlined">play_circle</span>
              </button>
              <button className="flex items-center gap-2 border border-slate-300 dark:border-white/20 text-slate-900 dark:text-white font-bold h-14 px-8 rounded-lg hover:bg-white/5 transition-all">
                <span>Studio Profile</span>
              </button>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="aspect-video rounded-xl bg-slate-800 border border-white/10 overflow-hidden shadow-2xl relative group">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 bg-[url('/orgImg.png')]"
                data-alt="Epic nature landscape cinematic shot"
              ></div>
              <div className="absolute inset-0 bg-linear-to-t from-background-dark/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6 flex items-center gap-3">
                <div className="size-12 rounded-full bg-white flex items-center justify-center text-red-600">
                  <Play />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-white">
                    Trailer Preview
                  </div>
                  <div className="text-sm font-bold text-white">
                    The Last Sanctuary (2024)
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 size-32 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 size-48 bg-primary/10 rounded-full blur-[80px]"></div>
          </div>
        </div>
      </section>
      <section className="px-6 md:px-20 lg:px-40 pb-24">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-red-600 text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              The Five Core Pillars
            </h2>
            <p className="text-gray-500">
              Our commitment to excellence in every frame. These pillars form
              the foundation of every NGC Original production.
            </p>
          </div>
          <div className="text-primary font-semibold flex items-center gap-2 cursor-pointer group">
            <span>Learn more about our process</span>
            <ArrowRight />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="group relative flex flex-col gap-6 rounded-xl border border-slate-200 dark:border-white/5 bg-red-500 p-8 transition-all hover:shadow-2xl">
            <div className="flex size-14 items-center justify-center rounded-lg bg-white text-red-600 transition-transform group-hover:scale-110">
              <Lightbulb />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-slate-900 dark:text-white text-xl font-bold group-hover:text-primary transition-colors">
                Idea Originates
              </h3>
              <p className="text-gray-200 leading-relaxed text-sm">
                Every original starts within our walls. We manage the entire
                lifecycle from conceptualization to intellectual property
                registration, ensuring a pure creative vision.
              </p>
            </div>
          </div>
          <div className="group relative flex flex-col gap-6 rounded-xl border border-slate-200 dark:border-white/5 bg-red-500 p-8 transition-all hover:shadow-2xl">
            <div className="flex size-14 items-center justify-center rounded-lg bg-white text-red-600 transition-transform group-hover:scale-110">
              <SquarePen />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-white text-xl font-bold group-hover:text-primary transition-colors">
                Creative Authorship
              </h3>
              <p className="text-gray-200 leading-relaxed text-sm">
                We protect and nurture the unique vision of every director. By
                avoiding over-commercialized compromises, we maintain the soul
                and artistic integrity of the narrative.
              </p>
            </div>
          </div>
          <div className="group relative flex flex-col gap-6 rounded-xl border border-slate-200 bg-red-500 p-8 transition-all hover:shadow-2xl">
            <div className="flex size-14 items-center justify-center rounded-lg bg-white text-red-600 transition-transform group-hover:scale-110">
              <Videotape />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-white text-xl font-bold group-hover:text-primary transition-colors">
                Filmmaking Ownership
              </h3>
              <p className="text-gray-200 leading-relaxed text-sm">
                Full control over production means better results. We own the
                gear, the workflow, and the timeline, allowing us to pivot
                quickly and maintain high-production standards.
              </p>
            </div>
          </div>
          <div className="group relative flex flex-col gap-6 rounded-xl border border-slate-200 bg-red-500 p-8 transition-all hover:shadow-2xl">
            <div className="flex size-14 items-center justify-center rounded-lg bg-white text-red-600 transition-transform group-hover:scale-110">
              <Globe />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-white text-xl font-bold  transition-colors">
                Global Scope
              </h3>
              <p className="text-gray-200 leading-relaxed text-sm">
                While our stories are local, their impact is global. We design
                projects with international resonance, aiming for distribution
                through world-className streaming and cinema platforms.
              </p>
            </div>
          </div>
          <div className="group relative flex flex-col gap-6 rounded-xl border border-slate-200 bg-red-500 p-8 transition-all hover:shadow-2xl md:col-span-2 lg:col-span-1">
            <div className="flex size-14 items-center justify-center rounded-lg bg-white text-red-600 transition-transform group-hover:scale-110">
              <Handshake />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-white text-xl font-bold transition-colors">
                Production Partnerships
              </h3>
              <p className="text-gray-200 leading-relaxed text-sm">
                We collaborate with world-className production entities to scale
                our vision. Our partnerships are built on shared values and a
                commitment to cinematic excellence.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="px-6 md:px-20 lg:px-40 py-24 bg-slate-900 dark:bg-black text-center relative">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none bg-cover bg-fixed grayscale contrast-125 bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuDUiKZvgd_Lzdj7TMnC4gWTzh6hDHqotkJakdHrjknlYebOGgZyB3yk5svXb8CQctJ3L6Fc7H9DmrYSytDvJ631oobYuvzdTX0pHPjESMvcM_FQUn-RYsF-rUadfChY57avpR7N3v-AbQ9jCVBfUtxwGGbWVxZitRC7RCu5Rr3wUm12wRB5sAq6sZ1Mt_w4ohRzKLi6u97nRGPe--dTn_DbePz0yzSlKv0_Tac9DPI-VQGHiFx5VCc9os6cML1l2kP9xa8wdtQtAZPl')]"
          data-alt="Black and white high-contrast forest texture"
        ></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <Quote className="text-white size-20 m-auto" />
          <h3 className="text-white text-3xl md:text-5xl font-bold italic leading-tight tracking-tight mb-8">
            &quot;We don&apos;t just film nature; we capture the spirit of the
            wild and present it with a cinematic grandeur that inspires
            action.&quot;
          </h3>
          <div className="text-white font-bold tracking-widest text-sm uppercase">
            — Marcus Sterling, Lead Visionary
          </div>
        </div>
      </section>
    </>
  );
}

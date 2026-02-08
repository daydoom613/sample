import {
  Clapperboard,
  Disc3,
  NotebookPen,
  SquareArrowOutUpRight,
} from "lucide-react";

export default function page() {
  return (
    <>
      <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 hero-overlay z-10"></div>
          <div
            className="w-full h-full bg-[url('/hero-global.avif')] bg-cover bg-center"
            data-alt="Cinematic background showing a film set with professional lighting"
          ></div>
        </div>
        <div className="relative z-20 container mx-auto px-6 text-center max-w-4xl">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-white/20 text-white border border-white/30 rounded-full">
            The Creative Core
          </span>
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
            Global Cinema <br />
            Creation
          </h1>
          <p className="text-lg lg:text-xl text-slate-300 mb-10 leading-relaxed font-light">
            The heart of NGC filmmaking. We craft boundary-pushing stories and
            visionary experiences that resonate with diverse audiences across
            every continent.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white/90 text-red-600 px-8 py-4 rounded-lg font-bold hover:bg-primary/80 transition-all flex items-center gap-2">
              View Showreel
            </button>
            <button className="bg-white/10 text-white backdrop-blur-md border border-white/20 px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition-all">
              Our Vision
            </button>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-20 max-w-360 mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-red-600 mb-4">
            Production Pillars
          </h2>
          <div className="w-20 h-1 bg-red-500 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group relative aspect-3/4 overflow-hidden rounded-xl bg-surface-dark border border-white/5">
            <div
              className="absolute inset-0 transition-transform duration-700 group-hover:scale-110 bg-[url('/ngcOrg.avif')] bg-cover bg-center"
              data-alt="Dramatic cinematic lighting on a futuristic set"
            ></div>
            <div className="absolute inset-0 cinematic-gradient"></div>
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <span className="text-white font-bold text-xs uppercase tracking-widest mb-2">
                Internal Dev
              </span>
              <h3 className="text-2xl font-bold text-white mb-3">
                NGC Originals
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Proprietary stories born within our walls. Focused on
                auteur-driven projects that define the NGC brand&apos;s artistic
                DNA.
              </p>
              <button className="flex items-center gap-2 text-white font-bold text-sm hover:text-primary transition-colors">
                Explore Slate {"->"}
              </button>
            </div>
          </div>
          <div className="group relative aspect-3/4 overflow-hidden rounded-xl bg-surface-dark border border-white/5">
            <div
              className="absolute inset-0 transition-transform duration-700 group-hover:scale-110 bg-[url('/ngcOrg.avif')] bg-cover bg-center"
              data-alt="Film crew working on an international location"
            ></div>
            <div className="absolute inset-0 cinematic-gradient"></div>
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <span className="text-white font-bold text-xs uppercase tracking-widest mb-2">
                Global Partnerships
              </span>
              <h3 className="text-2xl font-bold text-white mb-3">
                Co-Productions
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Highlighting international collaborations and cross-border
                storytelling excellence with world-className studios.
              </p>
              <button className="flex items-center gap-2 text-white font-bold text-sm hover:text-primary transition-colors">
                Joint Ventures {"->"}
              </button>
            </div>
          </div>
          <div className="group relative aspect-3/4 overflow-hidden rounded-xl bg-surface-dark border border-white/5">
            <div
              className="absolute inset-0 transition-transform duration-700 group-hover:scale-110 bg-[url('/imgSpl.avif')] bg-cover bg-center"
              data-alt="classNameic camera lenses and cinematic equipment"
            ></div>
            <div className="absolute inset-0 cinematic-gradient"></div>
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <span className="text-white font-bold text-xs uppercase tracking-widest mb-2">
                IP Management
              </span>
              <h3 className="text-2xl font-bold text-white mb-3">
                Partner IPs
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Managing and adapting legendary franchises. We bring fresh
                perspectives to established global intellectual properties.
              </p>
              <button className="flex items-center gap-2 text-white font-bold text-sm hover:text-primary transition-colors">
                Portfolio {"->"}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white/5 dark:bg-surface-dark/50 border-y border-white/5">
        <div className="max-w-360 mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-4xl font-bold text-red-600 mb-4">
            Creative Collaboration
          </h2>
          <p className="text-slate-900 max-w-2xl mx-auto mb-16">
            We are constantly seeking visionary talent to push the boundaries of
            modern cinema. Join our ecosystem of elite storytellers.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
            <div className="p-10 rounded-2xl group bg-red-500 transition-all duration-300">
              <div className="size-14 rounded-xl bg-white flex items-center justify-center text-red-600 mb-8 group-hover:scale-110 transition-transform">
                <NotebookPen />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Writers</h4>
              <p className="text-gray-200 text-sm leading-relaxed mb-8">
                Scripting the future. We collaborate with bold voices capable of
                weaving complex narratives for global audiences.
              </p>
              <a
                className="text-xs font-bold uppercase tracking-widest text-white flex items-center gap-2 group-hover:gap-3 transition-all"
                href="#"
              >
                Submit Script
                <SquareArrowOutUpRight />
              </a>
            </div>
            <div className="p-10 rounded-2xl group bg-red-500 transition-all duration-300">
              <div className="size-14 rounded-xl bg-white flex items-center justify-center text-red-600 mb-8 group-hover:scale-110 transition-transform">
                <Clapperboard />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Directors</h4>
              <p className="text-gray-200 text-sm leading-relaxed mb-8">
                Visualizing the unseen. We provide the resources and creative
                freedom for directors to manifest their unique aesthetic.
              </p>
              <a
                className="text-xs font-bold uppercase tracking-widest text-white flex items-center gap-2 group-hover:gap-3 transition-all"
                href="#"
              >
                Showcase Reel
                <SquareArrowOutUpRight />
              </a>
            </div>
            <div className="p-10 rounded-2xl group bg-red-500 transition-all duration-300">
              <div className="size-14 rounded-xl bg-white flex items-center justify-center text-red-600 mb-8 group-hover:scale-110 transition-transform">
                <Disc3 />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">
                Music Creators
              </h4>
              <p className="text-gray-200 text-sm leading-relaxed mb-8">
                Composing the soul of cinema. Our sonic landscapes are as vital
                as our visual ones. Join our scoring studio.
              </p>
              <a
                className="text-xs font-bold uppercase tracking-widest text-white flex items-center gap-2 group-hover:gap-3 transition-all"
                href="#"
              >
                Join Scoring Studio
                <SquareArrowOutUpRight />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

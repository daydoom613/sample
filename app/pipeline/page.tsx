import {
  BadgeCheck,
  Boxes,
  Film,
  Hammer,
  Layers,
  MonitorPlay,
  Sparkles,
} from "lucide-react";

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

export default function Page() {
  return (
    <div className="w-full">
      <section className="px-6 md:px-16 lg:px-24 pt-16 pb-14">
        <div className="mx-auto max-w-6xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-600/20 bg-red-600/5 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.25em] text-red-600">
            International VFX
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-black leading-[1.08] tracking-tight">
            NGC{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-red-500 to-red-700">
              Technology &amp; VFX Pipeline
            </span>
          </h1>
          <p className="mt-6 max-w-4xl text-gray-700 text-lg md:text-xl leading-relaxed">
            NGC operates with a hybrid ACES-driven, Unreal + Houdini + Maya +
            Katana + Nuke + Baselight pipeline tightly integrated by AI tools in
            every stage of production, ensuring film-grade realism at optimized
            cost and time.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-16 lg:px-24 pb-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-red-600">
            Pipeline
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pipeline.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="rounded-2xl border border-black/5 bg-white p-7 shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
                >
                  <div className="flex items-start gap-3">
                    <div className="size-12 rounded-xl bg-red-600/10 text-red-600 flex items-center justify-center shrink-0">
                      <Icon className="size-6" />
                    </div>
                    <div>
                      <div className="font-extrabold text-gray-900">
                        {p.title}
                      </div>
                      <div className="mt-1 text-sm text-gray-600">
                        {p.detail}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 rounded-3xl border border-black/5 bg-white p-10 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
            <div className="text-xs font-extrabold uppercase tracking-[0.25em] text-red-600">
              Subsection
            </div>
            <div className="mt-3 text-xl md:text-2xl font-black tracking-tight text-gray-900">
              “We believe a perfect shot is where art, physics, and faith meet.”
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-16 lg:px-24 pb-24">
        <div className="mx-auto max-w-6xl rounded-3xl border border-black/5 bg-white p-10">
          <div className="flex items-center gap-3">
            <div className="size-12 rounded-xl bg-red-600/10 text-red-600 flex items-center justify-center">
              <Layers className="size-6" />
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Tools &amp; Standards
            </h2>
          </div>
          <p className="mt-4 text-gray-700 leading-relaxed max-w-4xl">
            Our production engineering is built on industry-standard tools and
            a consistent color-managed workflow for predictable results across
            teams and deliverables.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {tools.map((t) => (
              <span
                key={t}
                className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-bold text-gray-800"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


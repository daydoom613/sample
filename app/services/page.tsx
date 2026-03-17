import { CheckCircle2 } from "lucide-react";

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

export default function Page() {
  return (
    <div className="w-full">
      <section className="px-6 md:px-16 lg:px-24 pt-16 pb-14">
        <div className="mx-auto max-w-6xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-600/20 bg-red-600/5 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.25em] text-red-600">
            International VFX / CG Services
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-black leading-[1.08] tracking-tight">
            High-end VFX and CG execution for global films and series
          </h1>
          <p className="mt-4 max-w-4xl text-gray-700 text-lg md:text-xl leading-relaxed">
            Delivered through NGC’s integrated production pipeline.
          </p>
          <p className="mt-8 max-w-5xl text-gray-700 leading-relaxed">
            NGC provides high-end visual effects and CG production services for
            international film studios, OTT platforms, advertising agencies, and
            creative production companies. Working through a robust and tightly
            integrated pipeline, NGC collaborates with global studios, producers,
            and production teams to execute complex visual sequences, digital
            environments, and CG-driven storytelling at cinematic scale.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-16 lg:px-24 pb-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-red-600">
            Our International Capabilities
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-black/5 bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
              >
                <div className="text-lg font-extrabold text-gray-900">
                  {c.title}
                </div>
                <div className="mt-5 space-y-3">
                  {c.items.map((i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 size-5 text-red-600 shrink-0" />
                      <div className="text-gray-700 font-semibold">{i}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-16 lg:px-24 pb-20">
        <div className="mx-auto max-w-6xl rounded-3xl border border-black/5 bg-white p-10">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-red-600">
            Our Pipeline Advantage
          </h2>
          <p className="mt-5 max-w-5xl text-gray-700 leading-relaxed">
            NGC operates with a modern, integrated pipeline designed for global
            collaboration. Our pipeline ensures consistent quality, predictable
            timelines, and smooth integration with global post-production
            workflows.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {pipelineAdvantage.map((p) => (
              <div
                key={p}
                className="flex items-start gap-3 rounded-xl border border-black/5 bg-white/70 p-4"
              >
                <CheckCircle2 className="mt-0.5 size-5 text-red-600 shrink-0" />
                <div className="text-gray-800 font-semibold">{p}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-16 lg:px-24 pb-24">
        <div className="mx-auto max-w-6xl rounded-3xl border border-black/5 bg-white p-10 md:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-red-600">
            Collaboration Approach
          </h2>
          <p className="mt-5 max-w-5xl text-gray-700 leading-relaxed">
            NGC works closely with international production teams through
            supervisor-led workflows and secure production pipelines, ensuring
            transparency, reliability, and high-quality delivery across every
            stage of production.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {collaboration.map((c) => (
              <div
                key={c}
                className="flex items-start gap-3 rounded-xl border border-black/5 bg-white/70 p-4"
              >
                <CheckCircle2 className="mt-0.5 size-5 text-red-500 shrink-0" />
                <div className="font-semibold text-gray-800">{c}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


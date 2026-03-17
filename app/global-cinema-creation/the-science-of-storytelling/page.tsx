import { CheckCircle2 } from "lucide-react";

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

export default function Page() {
  return (
    <div className="w-full">
      <section className="relative overflow-hidden px-6 md:px-16 lg:px-24 pt-16 pb-18">
        <div className="mx-auto max-w-6xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-600/20 bg-red-600/5 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.25em] text-red-600">
            Global Cinema Creation
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-black leading-[1.08] tracking-tight">
            NGC —{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-red-500 to-red-700">
              The Science of Storytelling
            </span>
          </h1>
          <p className="mt-6 max-w-3xl text-gray-700 text-lg md:text-xl leading-relaxed">
            At NGC, storytelling is not just an art — it is a science of
            precision and creativity. We follow technically correct methods and
            proven workflows to minimize risks and avoid failures during
            production.
          </p>
          <p className="mt-4 max-w-3xl text-gray-700 text-base md:text-lg leading-relaxed">
            Our approach is scientific, structured, and disciplined, ensuring
            that every creative idea is translated into visuals with clarity,
            efficiency, and quality. From the very first spark of an idea to
            the final delivery, we guide and execute the entire filmmaking
            journey with a carefully designed methodology.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-black/5 bg-white/70 backdrop-blur p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
              <div className="text-xs font-extrabold uppercase tracking-widest text-red-600">
                Technology
              </div>
              <div className="mt-2 text-sm text-gray-700">
                Engineering-driven pipelines to protect story intent.
              </div>
            </div>
            <div className="rounded-2xl border border-black/5 bg-white/70 backdrop-blur p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
              <div className="text-xs font-extrabold uppercase tracking-widest text-red-600">
                Emotion
              </div>
              <div className="mt-2 text-sm text-gray-700">
                Rhythm, depth, and meaning — designed into every frame.
              </div>
            </div>
            <div className="rounded-2xl border border-black/5 bg-white/70 backdrop-blur p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
              <div className="text-xs font-extrabold uppercase tracking-widest text-red-600">
                Story
              </div>
              <div className="mt-2 text-sm text-gray-700">
                Clear methodology from concept to delivery.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-16 lg:px-24 py-20 border-y border-black/5 bg-white/40">
        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-red-600">
              About NGC
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              Founded in 2024, Nature Guru Creations (NGC) is a high-end visual
              effects and full-CG filmmaking studio driven by a passionate core
              team with over two decades of global VFX experience — across
              Hollywood productions, Indian cinema, international advertising
              brands, and artistic animated episodic shows.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Our foundation blends art, science, and storytelling. Having
              studied life sciences, natural patterns, and human behavior, we
              use that understanding to craft visuals that carry depth, rhythm,
              and emotion.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              NGC was born with a clear purpose — to solve the recurring
              challenges in the VFX ecosystem by offering a seamless creative
              and technical bridge from concept to delivery.
            </p>
          </div>
          <div className="rounded-2xl border border-black/5 bg-white p-8 shadow-[0_30px_90px_rgba(0,0,0,0.08)]">
            <h3 className="text-xl font-extrabold tracking-tight">
              Our Philosophy
            </h3>
            <p className="mt-4 text-gray-700 leading-relaxed">
              At NGC, we believe that great storytelling emerges when emotion
              meets precision. By combining creative intuition with scientific
              methodology, we transform complex cinematic ideas into seamless,
              high-quality visual experiences.
            </p>
            <div className="mt-8 rounded-xl bg-red-600/5 border border-red-600/15 p-6">
              <div className="text-sm font-extrabold tracking-wide text-red-600">
                “Technology • Emotion • Story — The Future of Cinema.”
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-16 lg:px-24 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-red-600">
            Our End-to-End Creative Process
          </h2>
          <p className="mt-6 max-w-3xl text-gray-700 leading-relaxed">
            We are professionals, artists, and innovators. We manage the
            complete pipeline, including:
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
            {processSteps.map((step) => (
              <div
                key={step}
                className="flex items-start gap-3 rounded-xl border border-black/5 bg-white p-4"
              >
                <CheckCircle2 className="mt-0.5 size-5 text-red-600 shrink-0" />
                <div className="font-semibold text-gray-800">{step}</div>
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-2xl border border-black/5 bg-white/70 backdrop-blur p-8">
            <p className="text-gray-700 leading-relaxed">
              Our AI-augmented pipeline integrates advanced tools into every
              stage — from previsualization to compositing and DI — ensuring
              efficiency, realism, and creative control. This scientific
              workflow allows filmmakers to focus on storytelling while we
              ensure that technology, visuals, and execution align perfectly
              with the creative vision.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-16 lg:px-24 py-20 bg-white/40 border-t border-black/5">
        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="rounded-2xl border border-black/5 bg-white p-8">
            <h2 className="text-3xl font-extrabold tracking-tight text-red-600">
              Our Vision
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              To build a global ecosystem where creativity, technology, and
              integrity unite — empowering storytellers to craft unforgettable
              cinematic experiences.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              We invite producers, directors, innovators, and investors to join
              us in this movement — a creative force committed to reshaping the
              future of filmmaking.
            </p>
          </div>
          <div className="rounded-2xl border border-black/5 bg-white p-8">
            <h2 className="text-3xl font-extrabold tracking-tight text-red-600">
              Our Approach
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              At NGC, we make it accessible, efficient, and inspiring. We
              welcome all filmmakers — from new voices to established creators.
              Our goal is to collaborate, support, and elevate every vision,
              regardless of scale.
            </p>
            <div className="mt-8 space-y-3">
              {approachPoints.map((p) => (
                <div key={p} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 text-red-600 shrink-0" />
                  <div className="text-gray-800 font-semibold">{p}</div>
                </div>
              ))}
            </div>
            <p className="mt-8 text-gray-700 leading-relaxed">
              Our background — spanning Hollywood to regional Indian industries
              — gives us the ability to judge each project with global
              standards and local wisdom.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-16 lg:px-24 py-20">
        <div className="mx-auto max-w-6xl rounded-3xl border border-black/5 bg-white p-10 md:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-red-600">
            Stay Connected
          </h2>
          <p className="mt-6 text-gray-700 leading-relaxed max-w-3xl">
            Together, we create. Together, we innovate. Together, we inspire.
          </p>
        </div>
      </section>
    </div>
  );
}


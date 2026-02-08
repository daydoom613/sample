import {
  Check,
  Clapperboard,
  FilePenLine,
  Handshake,
  Puzzle,
} from "lucide-react";

export default function page() {
  return (
    <>
      <section className="relative h-[60vh] min-h-125 w-full flex items-center justify-center overflow-hidden">
        <div className="relative z-20 max-w-4xl px-6 text-center">
          <div className="mb-6 flex justify-center gap-2 text-xs font-bold uppercase tracking-[0.2em]">
            <span className="text-red-600">Partner IPs</span>
            <span className="opacity-50">/</span>
            <span>Collaboration Roles</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tighter mb-6">
            Nurturing <span className="text-red-600 italic">Your</span>{" "}
            Intellectual Property
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto font-light leading-relaxed">
            Scaling cinematic worlds through executive creative excellence and
            state-of-the-art CG execution.
          </p>
        </div>
      </section>

      <section className="relative z-30 mt-24 pb-24 px-6 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-red-600 flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-red-600/40"></span>
              Our Four Pillars of Partnership
              <span className="h-px w-12 bg-red-600/40"></span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-xl p-8 flex flex-col gap-6 transition-all duration-300 bg-red-500">
              <div className="size-16 rounded-lg bg-white flex items-center justify-center text-red-600 border border-primary/20">
                <FilePenLine className="size-10" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Creative Development Support
                </h3>
                <ul className="space-y-3 text-white text-sm leading-relaxed">
                  <li className="flex gap-2">
                    <Check className="text-red-600 bg-white rounded-full size-5 p-0.5" />
                    <span>Concept art &amp; visual development</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="text-red-600 bg-white rounded-full size-5 p-0.5" />
                    <span>Deep world-building frameworks</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="text-red-600 bg-white rounded-full size-5 p-0.5" />
                    <span>Narrative &amp; script refinement</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="rounded-xl p-8 flex flex-col gap-6 transition-all duration-300 bg-red-500">
              <div className="size-16 rounded-lg bg-white flex items-center justify-center text-red-600 border border-primary/20">
                <Clapperboard className="size-10" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Creative Execution
                </h3>
                <ul className="space-y-3 text-white text-sm leading-relaxed">
                  <li className="flex gap-2">
                    <Check className="text-red-600 bg-white rounded-full size-5 p-0.5" />
                    <span>Premium art direction</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="text-red-600 bg-white rounded-full size-5 p-0.5" />
                    <span>High-end asset creation</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="text-red-600 bg-white rounded-full size-5 p-0.5" />
                    <span>Visual style guide authoring</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="rounded-xl p-8 flex flex-col gap-6 transition-all duration-300 bg-red-500">
              <div className="size-16 rounded-lg bg-white flex items-center justify-center text-red-600 border border-primary/20">
                <Puzzle className="size-10" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">
                  End-to-End CG Film
                </h3>
                <ul className="space-y-3 text-white text-sm leading-relaxed">
                  <li className="flex gap-2">
                    <Check className="text-red-600 bg-white rounded-full size-5 p-0.5" />
                    <span>Pre-viz &amp; cinematography</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="text-red-600 bg-white rounded-full size-5 p-0.5" />
                    <span>Full production pipeline</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="text-red-600 bg-white rounded-full size-5 p-0.5" />

                    <span>Final render &amp; post-production</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="rounded-xl p-8 flex flex-col gap-6 transition-all duration-300 bg-red-500">
              <div className="size-16 rounded-lg bg-white flex items-center justify-center text-red-600 border border-primary/20">
                <Handshake className="size-10" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Collaborative Workflow
                </h3>
                <ul className="space-y-3 text-white text-sm leading-relaxed">
                  <li className="flex gap-2">
                    <Check className="text-red-600 bg-white rounded-full size-5 p-0.5" />

                    <span>Transparent milestone tracking</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="text-red-600 bg-white rounded-full size-5 p-0.5" />

                    <span>Shared creative vision tools</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="text-red-600 bg-white rounded-full size-5 p-0.5" />

                    <span>Integrated feedback loops</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 border-t border-red-600 overflow-hidden">
        <div className="mx-auto max-w-5xl relative">
          <div className=" border-none rounded-2xl p-12 text-center relative z-10">
            <h2 className="text-4xl font-extrabold text-red-600 mb-6 tracking-tight">
              Ready to bring your IP to life?
            </h2>
            <p className="mb-10 max-w-2xl mx-auto">
              We don&apos;t just produce films; we build legacies. Partner with
              Nature Guru Creations for a collaboration that prioritizes
              quality, transparency, and innovation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto bg-red-600 hover:bg-red-600/90 text-white px-10 py-4 rounded-xl text-lg font-bold transition-all transform hover:scale-105">
                Start a Collaboration
              </button>
              <button className="w-full sm:w-auto border text-red-600 px-10 py-4 rounded-xl text-lg font-bold transition-all">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

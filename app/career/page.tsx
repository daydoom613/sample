import Link from "next/link";
import { CheckCircle2, Mail, MapPin } from "lucide-react";

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

export default function Page() {
  return (
    <div className="w-full">
      <section className="px-6 md:px-16 lg:px-24 pt-16 pb-14">
        <div className="mx-auto max-w-6xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-600/20 bg-red-600/5 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.25em] text-red-600">
            Careers &amp; Talent Hub
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-black leading-[1.08] tracking-tight">
            Join NGC’s global artist network
          </h1>
          <p className="mt-6 max-w-4xl text-gray-700 text-lg md:text-xl leading-relaxed">
            We welcome artists from around the world in departments like
            Modeling, Sculpting, Texturing, Rigging, LookDev, CFX, Lighting, FX,
            Animation, Unreal, Nuke, DI, AI R&amp;D, and pipeline development.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-16 lg:px-24 pb-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-red-600">
            Open Roles / Departments
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {departments.map((d) => (
              <div
                key={d}
                className="flex items-start gap-3 rounded-xl border border-black/5 bg-white p-4"
              >
                <CheckCircle2 className="mt-0.5 size-5 text-red-600 shrink-0" />
                <div className="font-semibold text-gray-800">{d}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-black/5 bg-white p-10 md:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
            <div className="text-xs font-extrabold uppercase tracking-[0.25em] text-gray-600">
              Apply
            </div>
            <div className="mt-3 text-2xl md:text-3xl font-black tracking-tight text-red-600">
              Ready to work with us?
            </div>
            <div className="mt-7 flex flex-col sm:flex-row gap-4">
              <Link
                href="mailto:talent@naturegurucreations.com"
                className="inline-flex items-center justify-center rounded-xl bg-white text-red-600 font-extrabold px-7 py-4 hover:bg-white/90 transition-colors"
              >
                Apply Now
              </Link>
              <Link
                href="mailto:talent@naturegurucreations.com?subject=Internship%20Program"
                className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white text-gray-900 font-extrabold px-7 py-4 hover:bg-black/5 transition-colors"
              >
                Internship Program
              </Link>
              <Link
                href="mailto:talent@naturegurucreations.com?subject=Talent%20Pool"
                className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white text-gray-900 font-extrabold px-7 py-4 hover:bg-black/5 transition-colors"
              >
                Join Talent Pool
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-16 lg:px-24 pb-20">
        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-6">
          {suggestions.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-black/5 bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
            >
              <div className="text-lg font-extrabold text-gray-900">
                {s.title}
              </div>
              <p className="mt-3 text-gray-700 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-16 lg:px-24 pb-24">
        <div className="mx-auto max-w-6xl rounded-3xl border border-black/5 bg-white p-10">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-red-600">
            Studio &amp; Contact
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-black/5 bg-white/70 p-7">
              <div className="flex items-start gap-3">
                <MapPin className="size-5 text-red-600 mt-0.5" />
                <div>
                  <div className="font-extrabold text-gray-900">Address</div>
                  <div className="mt-2 text-gray-700 leading-relaxed">
                    {ADDRESS}
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-black/5 bg-white/70 p-7">
              <div className="flex items-start gap-3">
                <Mail className="size-5 text-red-600 mt-0.5" />
                <div>
                  <div className="font-extrabold text-gray-900">Email</div>
                  <div className="mt-2 text-gray-700 leading-relaxed">
                    Careers:{" "}
                    <a
                      className="font-bold text-red-600 hover:underline"
                      href="mailto:talent@naturegurucreations.com"
                    >
                      talent@naturegurucreations.com
                    </a>
                    <br />
                    Collaborations:{" "}
                    <a
                      className="font-bold text-red-600 hover:underline"
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
      </section>
    </div>
  );
}


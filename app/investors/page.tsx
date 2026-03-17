"use client";

import { useMemo, useState } from "react";
import { CheckCircle2, Lock, Send } from "lucide-react";

type InterestType = "Producer" | "Investor" | "Artist" | "Studio" | "Other";

type FormState = {
  name: string;
  company: string;
  country: string;
  email: string;
  interestType: InterestType;
  message: string;
  nda: boolean;
};

const initialState: FormState = {
  name: "",
  company: "",
  country: "",
  email: "",
  interestType: "Producer",
  message: "",
  nda: false,
};

export default function Page() {
  const [state, setState] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  const canSubmit = useMemo(() => {
    return (
      state.name.trim().length > 0 &&
      state.country.trim().length > 0 &&
      state.email.trim().length > 0 &&
      state.message.trim().length > 0 &&
      state.nda
    );
  }, [state]);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setState((s) => ({ ...s, [key]: value }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;
    setSubmitted(true);
  }

  return (
    <div className="w-full">
      <section className="px-6 md:px-16 lg:px-24 pt-16 pb-14">
        <div className="mx-auto max-w-6xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-600/20 bg-red-600/5 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.25em] text-red-600">
            Expression of Interest (EOI)
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-black leading-[1.08] tracking-tight">
            Partner. Invest. Create. Collaborate.
          </h1>
          <p className="mt-6 max-w-5xl text-gray-700 text-lg md:text-xl leading-relaxed">
            Nature Guru Creations invites producers, investors, studios, and
            collaborators to express interest in partnering with us. Whether you
            want to co-produce, invest, or develop new IP, this is your gateway
            to joining our global creative network.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-16 lg:px-24 pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="rounded-3xl border border-black/5 bg-white p-10 shadow-[0_30px_90px_rgba(0,0,0,0.08)]">
              {!submitted ? (
                <form onSubmit={onSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Field label="Name" required>
                      <input
                        value={state.name}
                        onChange={(e) => update("name", e.target.value)}
                        className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-red-600/30"
                        placeholder="Your name"
                      />
                    </Field>
                    <Field label="Company / Organization">
                      <input
                        value={state.company}
                        onChange={(e) => update("company", e.target.value)}
                        className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-red-600/30"
                        placeholder="Company"
                      />
                    </Field>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Field label="Country / Region" required>
                      <input
                        value={state.country}
                        onChange={(e) => update("country", e.target.value)}
                        className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-red-600/30"
                        placeholder="Country"
                      />
                    </Field>
                    <Field label="Email" required>
                      <input
                        value={state.email}
                        onChange={(e) => update("email", e.target.value)}
                        className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-red-600/30"
                        placeholder="name@company.com"
                        type="email"
                      />
                    </Field>
                  </div>

                  <Field label="Interest Type" required>
                    <select
                      value={state.interestType}
                      onChange={(e) =>
                        update("interestType", e.target.value as InterestType)
                      }
                      className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-red-600/30"
                    >
                      <option>Producer</option>
                      <option>Investor</option>
                      <option>Artist</option>
                      <option>Studio</option>
                      <option>Other</option>
                    </select>
                  </Field>

                  <Field label="Message / Proposal" required>
                    <textarea
                      value={state.message}
                      onChange={(e) => update("message", e.target.value)}
                      className="min-h-36 w-full rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-red-600/30"
                      placeholder="Tell us what you’re looking to build with NGC..."
                    />
                  </Field>

                  <label className="flex items-start gap-3 rounded-2xl border border-black/5 bg-white/70 p-4">
                    <input
                      checked={state.nda}
                      onChange={(e) => update("nda", e.target.checked)}
                      type="checkbox"
                      className="mt-1 size-4"
                    />
                    <div>
                      <div className="flex items-center gap-2 font-extrabold text-gray-900">
                        <Lock className="size-4 text-red-600" />
                        NDA
                      </div>
                      <div className="mt-1 text-sm text-gray-700">
                        I agree to share my expression of interest for NGC’s
                        review under confidentiality.
                      </div>
                    </div>
                  </label>

                  <button
                    disabled={!canSubmit}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-4 font-extrabold text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-red-600/95 transition-colors"
                    type="submit"
                  >
                    <Send className="size-5" />
                    Submit Expression of Interest
                  </button>
                </form>
              ) : (
                <div className="space-y-5">
                  <div className="inline-flex items-center gap-2 rounded-full border border-green-600/20 bg-green-600/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.25em] text-green-700">
                    Submitted
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black tracking-tight">
                    Thank you — we received your EOI.
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Our partnerships team will contact you within 5–7 business
                    days.
                  </p>
                  <button
                    className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-6 py-3 font-extrabold text-gray-900 hover:bg-black/5 transition-colors"
                    onClick={() => {
                      setState(initialState);
                      setSubmitted(false);
                    }}
                  >
                    Submit another response
                  </button>
                </div>
              )}
            </div>

            <div className="rounded-3xl border border-black/5 bg-white p-10 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
              <h3 className="text-2xl font-black tracking-tight text-red-600">
                Contact Emails
              </h3>
              <div className="mt-6 space-y-4">
                <ContactLine
                  label="Business"
                  value="partnerships@naturegurucreations.com"
                />
                <ContactLine label="Careers" value="talent@naturegurucreations.com" />
                <ContactLine label="Media" value="connect@naturegurucreations.com" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <div className="text-sm font-extrabold text-gray-900">
        {label} {required ? <span className="text-red-600">*</span> : null}
      </div>
      {children}
    </div>
  );
}

function ContactLine({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <CheckCircle2 className="mt-1 size-5 text-red-500 shrink-0" />
      <div>
        <div className="text-xs font-extrabold uppercase tracking-[0.25em] text-gray-500">
          {label}
        </div>
        <a
          className="mt-1 block font-extrabold text-gray-900 hover:underline"
          href={`mailto:${value}`}
        >
          {value}
        </a>
      </div>
    </div>
  );
}


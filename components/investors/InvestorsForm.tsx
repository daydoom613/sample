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

const contentCardShadow = "shadow-[0_20px_60px_rgba(0,0,0,0.06)]";

const initialState: FormState = {
  name: "",
  company: "",
  country: "",
  email: "",
  interestType: "Producer",
  message: "",
  nda: false,
};

export default function InvestorsForm() {
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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      <div
        className={`rounded-2xl border border-black/5 bg-white p-10 ${contentCardShadow}`}
      >
        {!submitted ? (
          <form onSubmit={onSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Name" required>
                <input
                  value={state.name}
                  onChange={(e) => update("name", e.target.value)}
                  className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--ngc-accent)]/30"
                  placeholder="Your name"
                />
              </Field>
              <Field label="Company / Organization">
                <input
                  value={state.company}
                  onChange={(e) => update("company", e.target.value)}
                  className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--ngc-accent)]/30"
                  placeholder="Company"
                />
              </Field>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Country / Region" required>
                <input
                  value={state.country}
                  onChange={(e) => update("country", e.target.value)}
                  className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--ngc-accent)]/30"
                  placeholder="Country"
                />
              </Field>
              <Field label="Email" required>
                <input
                  value={state.email}
                  onChange={(e) => update("email", e.target.value)}
                  className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--ngc-accent)]/30"
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
                className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--ngc-accent)]/30"
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
                className="min-h-36 w-full rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--ngc-accent)]/30"
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
                <div className="flex items-center gap-2 font-semibold text-[var(--ngc-text-primary)]">
                  <Lock className="size-4 text-[var(--ngc-accent)]" />
                  NDA
                </div>
                <div className="mt-1 type-body text-[var(--ngc-text-secondary)]">
                  I agree to share my expression of interest for NGC’s review
                  under confidentiality.
                </div>
              </div>
            </label>

            <button
              disabled={!canSubmit}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--ngc-accent)] px-6 py-4 font-semibold text-white disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-95 transition-opacity"
              type="submit"
            >
              <Send className="size-5" />
              Submit Expression of Interest
            </button>
          </form>
        ) : (
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-green-600/20 bg-green-600/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-green-700">
              Submitted
            </div>
            <h2 className="type-heading">Thank you — we received your EOI.</h2>
            <p className="type-body text-[var(--ngc-text-secondary)]">
              Our partnerships team will contact you within 5–7 business days.
            </p>
            <button
              className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-6 py-3 font-semibold text-[var(--ngc-text-primary)] hover:bg-black/5 transition-colors"
              type="button"
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

      <div className={`rounded-2xl border border-black/5 bg-white p-10 ${contentCardShadow}`}>
        <h3 className="type-subheading">Contact emails</h3>
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
      <div className="type-body font-semibold text-[var(--ngc-text-primary)]">
        {label}{" "}
        {required ? <span className="text-[var(--ngc-accent)]">*</span> : null}
      </div>
      {children}
    </div>
  );
}

function ContactLine({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <CheckCircle2 className="mt-1 size-5 text-[var(--ngc-accent)] shrink-0" />
      <div>
        <div className="type-body text-xs font-semibold uppercase tracking-[0.12em] text-gray-500">
          {label}
        </div>
        <a
          className="mt-1 block font-semibold text-[var(--ngc-text-primary)] hover:underline"
          href={`mailto:${value}`}
        >
          {value}
        </a>
      </div>
    </div>
  );
}

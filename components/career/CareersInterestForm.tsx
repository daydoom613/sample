"use client";

import { useMemo, useState } from "react";

const positions = [
  "3D Animator",
  "2D Animator",
  "Graphic Designer",
  "Production Manager",
  "Storyboard Artist",
  "Concept/Character Designer",
  "Lighting Artist",
  "Texturing Artist",
  "Modelling Artist",
  "Animation Lead",
  "Compositing Artist",
  "Others",
] as const;

type Position = (typeof positions)[number];

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  position: Position;
  otherPosition: string;
  workLink: string;
};

const initialState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  position: "3D Animator",
  otherPosition: "",
  workLink: "",
};

export default function CareersInterestForm() {
  const [state, setState] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  const canSubmit = useMemo(() => {
    const hasOther = state.position === "Others";
    return (
      state.firstName.trim().length > 0 &&
      state.lastName.trim().length > 0 &&
      state.email.trim().length > 0 &&
      state.phone.trim().length > 0 &&
      state.workLink.trim().length > 0 &&
      (!hasOther || state.otherPosition.trim().length > 0)
    );
  }, [state]);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setState((prev) => ({ ...prev, [key]: value }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;
    setSubmitted(true);
  }

  return (
    <div className="rounded-2xl border border-black/5 bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
      <h3 className="type-heading">Career Interest Form</h3>
      <p className="mt-3 type-body text-[var(--ngc-text-secondary)]">
        Share your profile and role preference. Our recruitment team will review
        and get back to you.
      </p>

      {!submitted ? (
        <form onSubmit={onSubmit} className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Field label="First name" required>
            <input
              value={state.firstName}
              onChange={(e) => update("firstName", e.target.value)}
              className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--ngc-accent)]/30"
              placeholder="First name"
            />
          </Field>
          <Field label="Last name" required>
            <input
              value={state.lastName}
              onChange={(e) => update("lastName", e.target.value)}
              className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--ngc-accent)]/30"
              placeholder="Last name"
            />
          </Field>
          <Field label="Email" required>
            <input
              type="email"
              value={state.email}
              onChange={(e) => update("email", e.target.value)}
              className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--ngc-accent)]/30"
              placeholder="name@email.com"
            />
          </Field>
          <Field label="Phone number" required>
            <input
              value={state.phone}
              onChange={(e) => update("phone", e.target.value)}
              className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--ngc-accent)]/30"
              placeholder="+91 98765 43210"
            />
          </Field>
          <Field label="Position" required>
            <select
              value={state.position}
              onChange={(e) => update("position", e.target.value as Position)}
              className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--ngc-accent)]/30"
            >
              {positions.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </Field>
          {state.position === "Others" ? (
            <Field label="Other position" required>
              <input
                value={state.otherPosition}
                onChange={(e) => update("otherPosition", e.target.value)}
                className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--ngc-accent)]/30"
                placeholder="Type your position"
              />
            </Field>
          ) : null}
          <div className="md:col-span-2">
            <Field label="Resume / Work link" required>
              <input
                type="url"
                value={state.workLink}
                onChange={(e) => update("workLink", e.target.value)}
                className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--ngc-accent)]/30"
                placeholder="Portfolio, Drive, LinkedIn, ArtStation, etc."
              />
            </Field>
          </div>
          <div className="md:col-span-2 mt-2">
            <button
              type="submit"
              disabled={!canSubmit}
              className="inline-flex items-center justify-center rounded-xl bg-[var(--ngc-accent)] px-8 py-3.5 font-semibold text-white disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-95 transition-opacity"
            >
              Submit interest
            </button>
          </div>
        </form>
      ) : (
        <div className="mt-6 rounded-xl border border-green-700/20 bg-green-700/10 p-5">
          <p className="type-body text-[var(--ngc-text-primary)]">
            Thank you. We received your details and will contact you soon.
          </p>
        </div>
      )}
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
        {label} {required ? <span className="text-[var(--ngc-accent)]">*</span> : null}
      </div>
      {children}
    </div>
  );
}

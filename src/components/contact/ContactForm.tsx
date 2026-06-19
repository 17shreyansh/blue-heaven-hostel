"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent, ReactNode } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { HOSTELS } from "@/data/hostels";
import { SITE } from "@/data/site";
import { mailLink, cn } from "@/lib/utils";

type FormState = {
  name: string;
  phone: string;
  email: string;
  hostel: string;
  message: string;
};

const baseFieldClasses =
  "w-full rounded-xl border border-line bg-white px-4 text-[15px] text-ink placeholder:text-slate-400 focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-100";
const inputClasses = cn(baseFieldClasses, "h-12");
const textareaClasses = cn(baseFieldClasses, "py-3");

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    hostel: "",
    message: "",
  });

  function handleChange(field: keyof FormState) {
    return (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((prev) => ({ ...prev, [field]: event.target.value }));
    };
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const subject = `Enquiry from ${form.name || "website visitor"}`;
    const body = [
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Hostel of interest: ${form.hostel || "Not specified"}`,
      "",
      form.message,
    ].join("\n");

    window.location.href = mailLink(SITE.email, subject, body);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-line bg-surface p-10 text-center">
        <CheckCircle2 className="h-8 w-8 text-primary-600" strokeWidth={1.75} aria-hidden="true" />
        <h3 className="font-heading text-lg font-bold text-ink">Your email app should now be open</h3>
        <p className="max-w-sm text-sm text-slate-600">
          Finish sending the message from there, or call / WhatsApp us directly for a faster response.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" required>
          <input
            type="text"
            required
            value={form.name}
            onChange={handleChange("name")}
            className={inputClasses}
            placeholder="Your name"
          />
        </Field>
        <Field label="Phone Number" required>
          <input
            type="tel"
            required
            value={form.phone}
            onChange={handleChange("phone")}
            className={inputClasses}
            placeholder="10-digit mobile number"
          />
        </Field>
      </div>

      <Field label="Email">
        <input
          type="email"
          value={form.email}
          onChange={handleChange("email")}
          className={inputClasses}
          placeholder="you@example.com"
        />
      </Field>

      <Field label="Hostel Of Interest">
        <select value={form.hostel} onChange={handleChange("hostel")} className={inputClasses}>
          <option value="">No preference</option>
          {HOSTELS.map((hostel) => (
            <option key={hostel.id} value={hostel.name}>
              {hostel.name}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Message" required>
        <textarea
          required
          rows={4}
          value={form.message}
          onChange={handleChange("message")}
          className={textareaClasses}
          placeholder="Tell us a little about what you're looking for"
        />
      </Field>

      <button
        type="submit"
        className="mt-2 flex h-12 items-center justify-center gap-2 rounded-xl bg-primary-600 font-heading font-bold text-white transition-colors duration-200 hover:bg-primary-700"
      >
        <Send className="h-[18px] w-[18px]" strokeWidth={2} aria-hidden="true" />
        Send Enquiry
      </button>
    </form>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: ReactNode }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-semibold text-ink">
        {label} {required && <span className="text-primary-600">*</span>}
      </span>
      {children}
    </label>
  );
}

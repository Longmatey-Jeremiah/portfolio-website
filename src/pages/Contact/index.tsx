import React, { useState } from "react";
import {
  ArrowUpRight,
  Check,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/typography";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const interests = [
  "Frontend Engineer roles",
  "Frontend Architecture / staff-level work",
  "Fullstack engineering on serious products",
  "Engineering leadership conversations",
  "Consulting on operator-grade interfaces",
];

type FormStatus = "idle" | "submitting" | "submitted" | "error";

export const Contact: React.FC = () => {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    intent: "Frontend Engineer role",
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");

    const subject = encodeURIComponent(
      `[${form.intent}] from ${form.name || "site visitor"}`,
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\nIntent: ${form.intent}\n\n${form.message}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;

    window.setTimeout(() => setStatus("submitted"), 600);
  };

  const update =
    (field: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  return (
    <>
      <section className="container-page pt-16 pb-12 md:pt-24 md:pb-16">
        <Reveal>
          <Eyebrow className="mb-6">Contact</Eyebrow>
          <h1 className="font-serif max-w-4xl text-[2.75rem] leading-[1.02] tracking-[-0.025em] text-foreground md:text-[5.25rem]">
            Let's talk about{" "}
            <em className="italic text-emphasis">what you're building</em>.
          </h1>
          <p className="lead mt-8 max-w-2xl">
            I read every message. The fastest way to get a substantive reply is
            a sentence or two on what you're working on and what you'd like from
            me.
          </p>
        </Reveal>
      </section>

      <section className="section-pad-sm bg-secondary">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="space-y-10">
                <Reveal>
                  <div className="surface-panel p-7">
                    <div className="flex items-center gap-2.5">
                      <span className="relative inline-flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success-moss opacity-50" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-success-moss" />
                      </span>
                      <p className="text-mono-eyebrow text-foreground">
                        {site.availability.label}
                      </p>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      Replies within 1–2 business days. Based in {site.location}{" "}
                      ({site.timezone}); comfortable with most timezones for
                      async work.
                    </p>
                  </div>
                </Reveal>

                <Reveal delay={0.05}>
                  <div>
                    <Eyebrow className="mb-5">Direct</Eyebrow>
                    <ul className="space-y-3">
                      <li>
                        <a
                          href={`mailto:${site.email}`}
                          className="group inline-flex items-center gap-3 text-base text-foreground"
                        >
                          <Mail className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" />
                          <span className="font-mono">{site.email}</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href={site.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-3 text-base text-foreground"
                        >
                          <Linkedin className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" />
                          <span className="font-mono">
                            /in/jeremiah-longmatey
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href={site.social.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-3 text-base text-foreground"
                        >
                          <Github className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" />
                          <span className="font-mono">/Longmatey-Jeremiah</span>
                        </a>
                      </li>
                      <li className="inline-flex items-center gap-3 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span className="font-mono">
                          {site.location} &middot; {site.timezone}
                        </span>
                      </li>
                    </ul>
                  </div>
                </Reveal>

                <Reveal delay={0.1}>
                  <div>
                    <Eyebrow className="mb-5">What I'm interested in</Eyebrow>
                    <ul className="space-y-2.5">
                      {interests.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-sm text-foreground"
                        >
                          <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-foreground" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </div>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                <form onSubmit={onSubmit} className="surface-panel p-7 md:p-9">
                  <Eyebrow className="mb-6">Send a note</Eyebrow>

                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <Field
                      label="Name"
                      htmlFor="name"
                      value={form.name}
                      onChange={update("name")}
                      required
                    />
                    <Field
                      label="Email"
                      htmlFor="email"
                      type="email"
                      value={form.email}
                      onChange={update("email")}
                      required
                    />
                    <Field
                      label="Company / org"
                      htmlFor="company"
                      value={form.company}
                      onChange={update("company")}
                      className="md:col-span-2"
                    />
                    <SelectField
                      label="What's this about?"
                      htmlFor="intent"
                      value={form.intent}
                      onChange={update("intent")}
                      className="md:col-span-2"
                      options={[
                        "Frontend Engineer role",
                        "Architecture / staff-level role",
                        "Fullstack role",
                        "Consulting engagement",
                        "Just to say hi",
                      ]}
                    />
                  </div>

                  <div className="mt-5">
                    <label
                      htmlFor="message"
                      className="text-mono-eyebrow mb-2 block text-muted-foreground"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      value={form.message}
                      onChange={update("message")}
                      rows={6}
                      placeholder="A sentence or two on what you're building and what you'd like from me."
                      className="w-full resize-y rounded-xl border border-border bg-secondary/30 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground/40 focus:bg-background focus:outline-none"
                    />
                  </div>

                  <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
                    <p className="text-xs text-muted-foreground">
                      Submitting opens your mail client with the message
                      prefilled.
                    </p>
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className={cn(
                        "btn-primary-solid",
                        status === "submitting" && "opacity-70",
                      )}
                    >
                      {status === "submitted" ? (
                        <>
                          Sent
                          <Check className="h-4 w-4" />
                        </>
                      ) : (
                        <>
                          Send message
                          <ArrowUpRight className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

interface FieldProps {
  label: string;
  htmlFor: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
  className?: string;
}

const Field: React.FC<FieldProps> = ({
  label,
  htmlFor,
  value,
  onChange,
  type = "text",
  required,
  className,
}) => (
  <div className={className}>
    <label
      htmlFor={htmlFor}
      className="text-mono-eyebrow mb-2 block text-muted-foreground"
    >
      {label}
    </label>
    <input
      id={htmlFor}
      type={type}
      required={required}
      value={value}
      onChange={onChange}
      className="w-full rounded-xl border border-border bg-secondary/30 px-4 py-2.5 text-sm text-foreground focus:border-foreground/40 focus:bg-background focus:outline-none"
    />
  </div>
);

interface SelectFieldProps extends Omit<FieldProps, "type" | "onChange"> {
  options: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectField: React.FC<SelectFieldProps> = ({
  label,
  htmlFor,
  value,
  onChange,
  options,
  className,
}) => (
  <div className={className}>
    <label
      htmlFor={htmlFor}
      className="text-mono-eyebrow mb-2 block text-muted-foreground"
    >
      {label}
    </label>
    <select
      id={htmlFor}
      value={value}
      onChange={onChange}
      className="w-full rounded-xl border border-border bg-secondary/30 px-4 py-2.5 text-sm text-foreground focus:border-foreground/40 focus:bg-background focus:outline-none"
    >
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);

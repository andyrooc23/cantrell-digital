"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  BUSINESS_TYPE_OPTIONS,
  MAIN_GOAL_OPTIONS,
  VISUAL_DIRECTION_OPTIONS,
  WEBSITE_SCOPE_OPTIONS,
  TIMELINE_OPTIONS,
  BUDGET_OPTIONS,
  type ProjectLeadSubmission,
} from "@/lib/projectRecommendation";
import { validateSubmission } from "@/lib/projectValidation";
const labels = ["Business", "Goal", "Direction", "Scope", "Timing", "Contact"];
const questions = [
  "What kind of business is this for?",
  "What should the website do most?",
  "What visual direction feels right?",
  "What should be included?",
  "What timing and budget do you have in mind?",
  "How can the studio reach you?",
];
const descriptions = [
  "Choose the closest fit.",
  "Select the main goal so the website has a clear purpose.",
  "Choose a starting direction. It can be refined together.",
  "Select everything that applies. Ecommerce is evaluated as custom scope.",
  "These are your preferences, not a quoted price or promised schedule.",
  "Name and email are required. The other details are optional.",
];
const initial: ProjectLeadSubmission = {
  businessType: "",
  mainGoal: "",
  visualDirection: "",
  websiteScope: [],
  timeline: "",
  budget: "",
  name: "",
  businessName: "",
  email: "",
  phone: "",
  additionalNotes: "",
};
type Errors = Partial<Record<keyof ProjectLeadSubmission, string>>;
export default function QuestionnaireForm() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [validationAttempt, setValidationAttempt] = useState(0);
  const [failure, setFailure] = useState("");
  const [busy, setBusy] = useState(false);
  const [success, setSuccess] = useState(false);
  const heading = useRef<HTMLHeadingElement>(null);
  const summary = useRef<HTMLDivElement>(null);
  const lock = useRef(false);
  const started = useRef(0);
  const honey = useRef<HTMLInputElement>(null);
  const interacted = useRef(false);
  const priorStep = useRef(step);
  useEffect(() => {
    started.current = Date.now();
  }, []);
  useEffect(() => {
    if (priorStep.current !== step || success) heading.current?.focus();
    priorStep.current = step;
  }, [step, success]);
  useEffect(() => {
    summary.current?.focus();
  }, [validationAttempt, failure]);
  function update<K extends keyof ProjectLeadSubmission>(
    field: K,
    value: ProjectLeadSubmission[K],
  ) {
    setData((d) => ({ ...d, [field]: value }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  }
  function valid() {
    const e: Errors = {};
    const required = [
      ["businessType"],
      ["mainGoal"],
      ["visualDirection"],
      ["websiteScope"],
      ["timeline", "budget"],
      ["name", "email"],
    ][step] as (keyof ProjectLeadSubmission)[];
    for (const k of required) {
      if (
        Array.isArray(data[k]) ? data[k].length === 0 : !String(data[k]).trim()
      )
        e[k] = "Please complete this required field.";
    }
    if (step === 5) {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim()))
        e.email = "Enter a valid email address.";
      if (data.name.length > 120) e.name = "Use 120 characters or fewer.";
    }
    setErrors(e);
    setValidationAttempt((attempt) => attempt + 1);
    return Object.keys(e).length === 0;
  }
  function next() {
    if (valid()) {
      document
        .getElementById("questionnaire")
        ?.setAttribute("data-event", "questionnaire_step_completed");
      setStep((s) => s + 1);
    }
  }
  async function submit(event: React.FormEvent) {
    event.preventDefault();
    if (lock.current) return;
    if (step < 5) {
      next();
      return;
    }
    if (!valid()) return;
    const validated = validateSubmission(data);
    if (!validated.success) {
      setFailure(
        "Please review the brief. One or more fields is missing or too long.",
      );
      return;
    }
    lock.current = true;
    setBusy(true);
    setFailure("");
    try {
      const response = await fetch("/api/project-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          website: honey.current?.value ?? "",
          startedAt: started.current,
        }),
      });
      const payload = await response.json();
      if (!response.ok || !payload.ok) {
        setFailure(
          payload.error ||
            "The brief could not be sent. Your answers are saved here; please try again.",
        );
        return;
      }
      setSuccess(true);
    } catch {
      setFailure(
        "The brief could not be sent. Your answers are saved here; please try again or email the studio.",
      );
    } finally {
      lock.current = false;
      setBusy(false);
    }
  }
  function options(
    field:
      | "businessType"
      | "mainGoal"
      | "visualDirection"
      | "timeline"
      | "budget",
    items: readonly string[],
    label: string,
  ) {
    return (
      <fieldset aria-describedby={errors[field] ? `${field}-error` : undefined}>
        <legend>{label} · Required</legend>
        <div className="choice-grid">
          {items.map((item) => (
            <label className="choice" key={item}>
              <input
                type="radio"
                name={field}
                checked={data[field] === item}
                value={item}
                onChange={() => update(field, item as never)}
              />
              <span>{item}</span>
            </label>
          ))}
        </div>
        {errors[field] && (
          <p id={`${field}-error`} className="error">
            {errors[field]}
          </p>
        )}
      </fieldset>
    );
  }
  if (success)
    return (
      <section
        className="question-card"
        data-event="questionnaire_submission_succeeded"
      >
        <p className="eyebrow">Project brief received</p>
        <h2 ref={heading} tabIndex={-1}>
          Thank you. Your brief is ready for review.
        </h2>
        <p>
          The details have been sent to Cantrell Digital. The studio can use the
          contact information you provided to follow up.
        </p>
        <div className="actions">
          <Link className="button" href="/">
            Return home ↗
          </Link>
          <Link className="button secondary" href="/work">
            View selected work ↗
          </Link>
        </div>
      </section>
    );
  return (
    <form
      id="questionnaire"
      onSubmit={submit}
      noValidate
      data-step-id={labels[step].toLowerCase()}
      data-step-number={step + 1}
      onChange={() => {
        if (!interacted.current) {
          interacted.current = true;
          document
            .getElementById("questionnaire")
            ?.setAttribute("data-event", "questionnaire_started");
        }
      }}
    >
      <p className="small" aria-live="polite">
        {labels[step]} · Step {step + 1} of 6
      </p>
      <ol className="progress-path" aria-label="Project brief progress">
        {labels.map((label, i) => (
          <li
            key={label}
            className={i === step ? "current" : i < step ? "complete" : ""}
            aria-current={i === step ? "step" : undefined}
          >
            {i < step ? "✓ " : ""}
            {label}
          </li>
        ))}
      </ol>
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="website">Leave this empty</label>
        <input
          ref={honey}
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      {(Object.values(errors).some(Boolean) || failure) && (
        <div
          className="error-summary"
          ref={summary}
          tabIndex={-1}
          role="alert"
          data-event={failure ? "questionnaire_submission_failed" : undefined}
          data-error-category={failure ? "delivery" : undefined}
        >
          <strong>
            {failure
              ? "Your brief has not been sent."
              : "Please check this step."}
          </strong>
          {failure ? (
            <p>{failure}</p>
          ) : (
            <ul>
              {Object.entries(errors)
                .filter(([, v]) => v)
                .map(([k, v]) => (
                  <li key={k}>
                    <a href={`#${k}-error`}>
                      {
                        (
                          {
                            businessType: "Business type",
                            mainGoal: "Main goal",
                            visualDirection: "Visual direction",
                            websiteScope: "Website scope",
                            timeline: "Preferred timing",
                            budget: "Investment range",
                            name: "Name",
                            email: "Email",
                          } as Record<string, string>
                        )[k]
                      }
                      : {v}
                    </a>
                  </li>
                ))}
            </ul>
          )}
        </div>
      )}
      <section className="question-card" aria-labelledby="question-heading">
        <h2 id="question-heading" tabIndex={-1} ref={heading}>
          {questions[step]}
        </h2>
        <p>{descriptions[step]}</p>
        {step === 0 &&
          options("businessType", BUSINESS_TYPE_OPTIONS, "Business type")}
        {step === 1 && options("mainGoal", MAIN_GOAL_OPTIONS, "Main goal")}
        {step === 2 &&
          options(
            "visualDirection",
            VISUAL_DIRECTION_OPTIONS,
            "Visual direction",
          )}
        {step === 3 && (
          <fieldset
            aria-describedby={
              errors.websiteScope ? "websiteScope-error" : undefined
            }
          >
            <legend>Website scope · Required</legend>
            <div className="choice-grid">
              {WEBSITE_SCOPE_OPTIONS.map((item) => (
                <label className="choice" key={item}>
                  <input
                    type="checkbox"
                    checked={data.websiteScope.includes(item)}
                    aria-invalid={!!errors.websiteScope}
                    onChange={() =>
                      update(
                        "websiteScope",
                        data.websiteScope.includes(item)
                          ? data.websiteScope.filter((v) => v !== item)
                          : [...data.websiteScope, item],
                      )
                    }
                  />
                  {item}
                </label>
              ))}
            </div>
            {errors.websiteScope && (
              <p className="error" id="websiteScope-error">
                {errors.websiteScope}
              </p>
            )}
          </fieldset>
        )}
        {step === 4 && (
          <div className="timing-fields">
            {options("timeline", TIMELINE_OPTIONS, "Preferred timing")}
            {options("budget", BUDGET_OPTIONS, "Investment range")}
          </div>
        )}
        {step === 5 && (
          <>
            <div className="field-grid">
              {(
                [
                  "name",
                  "businessName",
                  "email",
                  "phone",
                  "additionalNotes",
                ] as const
              ).map((field) => (
                <div
                  className={`field ${field === "additionalNotes" ? "wide" : ""}`}
                  key={field}
                >
                  <label htmlFor={field}>
                    {
                      {
                        name: "Name · Required",
                        businessName: "Business name · Optional",
                        email: "Email · Required",
                        phone: "Phone · Optional",
                        additionalNotes: "Additional notes · Optional",
                      }[field]
                    }
                  </label>
                  {field === "additionalNotes" ? (
                    <textarea
                      id={field}
                      maxLength={4000}
                      value={data[field]}
                      onChange={(e) => update(field, e.target.value)}
                    />
                  ) : (
                    <input
                      id={field}
                      type={
                        field === "email"
                          ? "email"
                          : field === "phone"
                            ? "tel"
                            : "text"
                      }
                      autoComplete={
                        {
                          name: "name",
                          businessName: "organization",
                          email: "email",
                          phone: "tel",
                        }[field]
                      }
                      maxLength={
                        { name: 120, businessName: 200, email: 254, phone: 40 }[
                          field
                        ]
                      }
                      required={field === "name" || field === "email"}
                      value={data[field]}
                      onChange={(e) => update(field, e.target.value)}
                      aria-invalid={!!errors[field]}
                      aria-describedby={
                        errors[field] ? `${field}-error` : undefined
                      }
                    />
                  )}
                  {errors[field] && (
                    <p id={`${field}-error`} className="error">
                      {errors[field]}
                    </p>
                  )}
                </div>
              ))}
            </div>
            <p className="form-note">
              Your answers are sent to the studio by email to review and respond
              to this inquiry. Please avoid including sensitive information.
            </p>
          </>
        )}
      </section>
      <div className="form-actions">
        <button
          className="button secondary"
          type="button"
          disabled={step === 0 || busy}
          onClick={() => {
            setErrors({});
            setFailure("");
            setStep((s) => s - 1);
          }}
        >
          Back
        </button>
        <button className="button" type="submit" disabled={busy}>
          {step < 5
            ? "Continue →"
            : busy
              ? "Sending project brief…"
              : "Send project brief ↗"}
        </button>
      </div>
      <p className="form-note" role="status" aria-live="polite">
        {busy ? "Sending your brief. Please wait." : "Prefer a conversation? "}{" "}
        {!busy && (
          <a
            className="text-link"
            href="mailto:andrew@cantrelldigital.dev"
            data-event="email_link_clicked"
            data-placement="questionnaire"
          >
            Email the studio
          </a>
        )}
      </p>
    </form>
  );
}

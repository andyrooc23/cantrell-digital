'use client';

import { useState } from 'react';

import QuestionStep from '@/components/start-project/QuestionStep';
import {
  BUDGET_OPTIONS,
  BUSINESS_TYPE_OPTIONS,
  MAIN_GOAL_OPTIONS,
  TIMELINE_OPTIONS,
  VISUAL_DIRECTION_OPTIONS,
  WEBSITE_SCOPE_OPTIONS,
  type ProjectLeadSubmission,
} from '@/lib/projectRecommendation';

type StepErrorMap = Partial<Record<keyof ProjectLeadSubmission, string>>;

const totalSteps = 6;

const initialFormData: ProjectLeadSubmission = {
  businessType: '',
  mainGoal: '',
  visualDirection: '',
  websiteScope: [],
  timeline: '',
  budget: '',
  name: '',
  businessName: '',
  email: '',
  phone: '',
  additionalNotes: '',
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function QuestionnaireForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<ProjectLeadSubmission>(initialFormData);
  const [errors, setErrors] = useState<StepErrorMap>({});
  const [submitError, setSubmitError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  function updateField<K extends keyof ProjectLeadSubmission>(
    field: K,
    value: ProjectLeadSubmission[K],
  ) {
    setFormData((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  function toggleScopeOption(option: (typeof WEBSITE_SCOPE_OPTIONS)[number]) {
    setFormData((current) => {
      const exists = current.websiteScope.includes(option);

      return {
        ...current,
        websiteScope: exists
          ? current.websiteScope.filter((item) => item !== option)
          : [...current.websiteScope, option],
      };
    });
    setErrors((current) => ({ ...current, websiteScope: undefined }));
  }

  function validateStep(step: number) {
    const nextErrors: StepErrorMap = {};

    if (step === 0 && !formData.businessType) {
      nextErrors.businessType = 'Choose the option that best matches the business.';
    }

    if (step === 1 && !formData.mainGoal) {
      nextErrors.mainGoal = 'Select the main goal for the new website.';
    }

    if (step === 2 && !formData.visualDirection) {
      nextErrors.visualDirection = 'Pick the visual direction that feels closest.';
    }

    if (step === 3 && formData.websiteScope.length === 0) {
      nextErrors.websiteScope = 'Select at least one feature or scope item.';
    }

    if (step === 4) {
      if (!formData.timeline) {
        nextErrors.timeline = 'Choose a timeline.';
      }

      if (!formData.budget) {
        nextErrors.budget = 'Choose a budget range.';
      }
    }

    if (step === 5) {
      if (!formData.name.trim()) {
        nextErrors.name = 'Name is required.';
      }

      if (!formData.email.trim()) {
        nextErrors.email = 'Email is required.';
      } else if (!isEmail(formData.email.trim())) {
        nextErrors.email = 'Enter a valid email address.';
      }
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function goNext() {
    if (!validateStep(currentStep)) {
      return;
    }

    setCurrentStep((step) => Math.min(step + 1, totalSteps - 1));
  }

  function goBack() {
    setCurrentStep((step) => Math.max(step - 1, 0));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitError('');

    if (!validateStep(currentStep)) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/project-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const payload = (await response.json()) as {
        ok?: boolean;
        error?: string;
        details?: string[];
      };

      if (!response.ok) {
        setSubmitError(
          payload.error ??
            'Something went wrong while sending the project brief. Please try again.',
        );
        return;
      }

      setIsSuccess(true);
    } catch {
      setSubmitError(
        'The form could not be submitted right now. Please try again in a moment.',
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  function renderOptionCards(
    name: string,
    options: readonly string[],
    value: string,
    onChange: (nextValue: string) => void,
  ) {
    return (
      <fieldset>
        <legend className="sr-only">{name}</legend>
        <div className="grid gap-3 sm:grid-cols-2">
          {options.map((option) => {
            const isSelected = value === option;

            return (
              <label
                key={option}
                className={`group flex cursor-pointer rounded-2xl border p-4 transition ${
                  isSelected
                    ? 'border-blue-400 bg-blue-500/10 text-white shadow-[0_20px_50px_-30px_rgba(96,165,250,0.9)]'
                    : 'border-white/10 bg-black/20 text-gray-200 hover:border-white/25 hover:bg-white/5'
                }`}
              >
                <input
                  className="sr-only"
                  type="radio"
                  name={name}
                  value={option}
                  checked={isSelected}
                  onChange={() => onChange(option)}
                />
                <span className="flex w-full items-center justify-between gap-4">
                  <span className="text-base font-medium">{option}</span>
                  <span
                    aria-hidden="true"
                    className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                      isSelected
                        ? 'border-blue-300 bg-blue-300 text-black'
                        : 'border-white/25 text-transparent'
                    }`}
                  >
                    •
                  </span>
                </span>
              </label>
            );
          })}
        </div>
      </fieldset>
    );
  }

  if (isSuccess) {
    return (
      <div className="rounded-[2rem] border border-emerald-400/20 bg-white/5 p-8 text-white shadow-[0_30px_80px_-40px_rgba(16,185,129,0.65)] backdrop-blur sm:p-10">
        <div className="inline-flex rounded-full border border-emerald-300/20 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-200">
          Project brief received
        </div>
        <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
          Thanks. Your project inquiry is on its way.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg">
          Your questionnaire has been submitted and the details were sent to
          Cantrell Digital for review.
        </p>
        <p className="mt-6 text-sm leading-7 text-gray-400">
          A follow-up will be sent to <span className="text-white">{formData.email}</span>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5 backdrop-blur sm:p-6">
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm font-medium text-white">
            Step {currentStep + 1} of {totalSteps}
          </p>
          <p className="text-sm text-gray-400">
            {Math.round(((currentStep + 1) / totalSteps) * 100)}%
          </p>
        </div>

        <div className="mt-4 h-2 rounded-full bg-white/10">
          <div
            className="h-2 rounded-full bg-gradient-to-r from-blue-400 via-cyan-300 to-white transition-all duration-300"
            style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      {currentStep === 0 && (
        <QuestionStep
          step={1}
          totalSteps={totalSteps}
          title="What kind of business is this for?"
          description="This helps frame the kind of conversion path, content, and credibility cues the site should lead with."
        >
          {renderOptionCards(
            'businessType',
            BUSINESS_TYPE_OPTIONS,
            formData.businessType,
            (nextValue) =>
              updateField(
                'businessType',
                nextValue as ProjectLeadSubmission['businessType'],
              ),
          )}
          {errors.businessType && (
            <p className="mt-3 text-sm text-rose-300">{errors.businessType}</p>
          )}
        </QuestionStep>
      )}

      {currentStep === 1 && (
        <QuestionStep
          step={2}
          totalSteps={totalSteps}
          title="What should the website do most?"
          description="Choose the primary outcome so the project can be scoped around the business result that matters most."
        >
          {renderOptionCards(
            'mainGoal',
            MAIN_GOAL_OPTIONS,
            formData.mainGoal,
            (nextValue) =>
              updateField('mainGoal', nextValue as ProjectLeadSubmission['mainGoal']),
          )}
          {errors.mainGoal && (
            <p className="mt-3 text-sm text-rose-300">{errors.mainGoal}</p>
          )}
        </QuestionStep>
      )}

      {currentStep === 2 && (
        <QuestionStep
          step={3}
          totalSteps={totalSteps}
          title="What visual direction feels right?"
          description="This gives a strong first read on the kind of brand atmosphere the website should create."
        >
          {renderOptionCards(
            'visualDirection',
            VISUAL_DIRECTION_OPTIONS,
            formData.visualDirection,
            (nextValue) =>
              updateField(
                'visualDirection',
                nextValue as ProjectLeadSubmission['visualDirection'],
              ),
          )}
          {errors.visualDirection && (
            <p className="mt-3 text-sm text-rose-300">{errors.visualDirection}</p>
          )}
        </QuestionStep>
      )}

      {currentStep === 3 && (
        <QuestionStep
          step={4}
          totalSteps={totalSteps}
          title="What should be included in the site?"
          description="Select everything that applies. This is where the recommendation engine starts to separate a focused brochure site from a deeper build."
        >
          <fieldset>
            <legend className="sr-only">Website scope and features</legend>
            <div className="grid gap-3 sm:grid-cols-2">
              {WEBSITE_SCOPE_OPTIONS.map((option) => {
                const isSelected = formData.websiteScope.includes(option);

                return (
                  <label
                    key={option}
                    className={`flex cursor-pointer rounded-2xl border p-4 transition ${
                      isSelected
                        ? 'border-blue-400 bg-blue-500/10 text-white'
                        : 'border-white/10 bg-black/20 text-gray-200 hover:border-white/25 hover:bg-white/5'
                    }`}
                  >
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={isSelected}
                      onChange={() => toggleScopeOption(option)}
                    />
                    <span className="flex w-full items-center justify-between gap-4">
                      <span className="text-base font-medium">{option}</span>
                      <span
                        aria-hidden="true"
                        className={`flex h-5 w-5 items-center justify-center rounded-md border text-xs ${
                          isSelected
                            ? 'border-blue-300 bg-blue-300 text-black'
                            : 'border-white/25 text-transparent'
                        }`}
                      >
                        ✓
                      </span>
                    </span>
                  </label>
                );
              })}
            </div>
          </fieldset>
          {errors.websiteScope && (
            <p className="mt-3 text-sm text-rose-300">{errors.websiteScope}</p>
          )}
        </QuestionStep>
      )}

      {currentStep === 4 && (
        <QuestionStep
          step={5}
          totalSteps={totalSteps}
          title="What timeline and budget are you working with?"
          description="These answers help narrow down the most realistic starting package and shape the next conversation."
        >
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-blue-100/70">
                Timeline
              </p>
              {renderOptionCards(
                'timeline',
                TIMELINE_OPTIONS,
                formData.timeline,
                (nextValue) =>
                  updateField('timeline', nextValue as ProjectLeadSubmission['timeline']),
              )}
              {errors.timeline && (
                <p className="mt-3 text-sm text-rose-300">{errors.timeline}</p>
              )}
            </div>

            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-blue-100/70">
                Budget
              </p>
              {renderOptionCards(
                'budget',
                BUDGET_OPTIONS,
                formData.budget,
                (nextValue) =>
                  updateField('budget', nextValue as ProjectLeadSubmission['budget']),
              )}
              {errors.budget && (
                <p className="mt-3 text-sm text-rose-300">{errors.budget}</p>
              )}
            </div>
          </div>
        </QuestionStep>
      )}

      {currentStep === 5 && (
        <QuestionStep
          step={6}
          totalSteps={totalSteps}
          title="Where should the project brief go?"
          description="Add contact details and any extra context. This is the information that gets delivered with the recommendation."
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-white" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(event) => updateField('name', event.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-blue-400"
                placeholder="Your name"
                autoComplete="name"
              />
              {errors.name && (
                <p className="mt-2 text-sm text-rose-300">{errors.name}</p>
              )}
            </div>

            <div>
              <label
                className="mb-2 block text-sm font-medium text-white"
                htmlFor="businessName"
              >
                Business name
              </label>
              <input
                id="businessName"
                type="text"
                value={formData.businessName}
                onChange={(event) => updateField('businessName', event.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-blue-400"
                placeholder="Business or brand"
                autoComplete="organization"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-white" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(event) => updateField('email', event.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-blue-400"
                placeholder="you@business.com"
                autoComplete="email"
              />
              {errors.email && (
                <p className="mt-2 text-sm text-rose-300">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-white" htmlFor="phone">
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(event) => updateField('phone', event.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-blue-400"
                placeholder="Optional"
                autoComplete="tel"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                className="mb-2 block text-sm font-medium text-white"
                htmlFor="additionalNotes"
              >
                Additional notes
              </label>
              <textarea
                id="additionalNotes"
                value={formData.additionalNotes}
                onChange={(event) => updateField('additionalNotes', event.target.value)}
                className="min-h-36 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-blue-400"
                placeholder="Anything helpful about the project, audience, existing website, or launch goals."
              />
            </div>
          </div>

          {submitError && (
            <p className="mt-6 rounded-2xl border border-rose-400/20 bg-rose-500/10 px-4 py-3 text-sm text-rose-200">
              {submitError}
            </p>
          )}
        </QuestionStep>
      )}

      <div className="flex flex-col gap-3 rounded-[2rem] border border-white/10 bg-white/5 p-5 backdrop-blur sm:flex-row sm:items-center sm:justify-between">
        <button
          type="button"
          onClick={goBack}
          disabled={currentStep === 0 || isSubmitting}
          className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-white/15 px-5 py-3 font-medium text-white transition hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Back
        </button>

        {currentStep < totalSteps - 1 ? (
          <button
            type="button"
            onClick={goNext}
            className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-white px-6 py-3 font-semibold text-black transition hover:-translate-y-0.5 hover:bg-gray-100"
          >
            Next step
          </button>
        ) : (
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-white px-6 py-3 font-semibold text-black transition hover:-translate-y-0.5 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? 'Sending project brief...' : 'Submit project brief'}
          </button>
        )}
      </div>
    </form>
  );
}

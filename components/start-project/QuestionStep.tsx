import type { ReactNode } from 'react';

type QuestionStepProps = {
  step: number;
  totalSteps: number;
  title: string;
  description: string;
  children: ReactNode;
};

export default function QuestionStep({
  step,
  totalSteps,
  title,
  description,
  children,
}: QuestionStepProps) {
  return (
    <section
      aria-labelledby={`question-step-${step}`}
      className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_30px_80px_-40px_rgba(59,130,246,0.55)] backdrop-blur sm:p-8"
    >
      <div className="mb-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-blue-200/80">
          Step {step} of {totalSteps}
        </p>
        <h2
          id={`question-step-${step}`}
          className="text-2xl font-semibold tracking-tight text-white sm:text-3xl"
        >
          {title}
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-7 text-gray-300">
          {description}
        </p>
      </div>

      {children}
    </section>
  );
}

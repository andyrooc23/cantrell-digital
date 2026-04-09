import type { Metadata } from "next";
import {
  DemoButton,
  DemoFooter,
  DemoHeading,
  DemoImageCard,
  DemoSection,
} from "../components/DemoPrimitives";

export const metadata: Metadata = {
  title: "Monarch Build Co. | Construction Demo",
  description:
    "A premium construction company concept page for Cantrell Digital demos.",
};

const services = [
  {
    title: "Custom Homes",
    copy: "Ground-up residences engineered around site, light, and a demanding level of finish.",
  },
  {
    title: "Luxury Renovations",
    copy: "Whole-home transformations that preserve character while upgrading structure, flow, and performance.",
  },
  {
    title: "Commercial Spaces",
    copy: "Clean, modern build-outs for firms that want their physical space to reflect their brand standards.",
  },
];

const projects = [
  {
    title: "Ridge House",
    subtitle: "Concrete, cedar, and panoramic glazing above the valley line",
    className: "min-h-[380px] bg-gradient-to-br from-[#5f6670] via-[#31363d] to-[#0c0d0f]",
  },
  {
    title: "Atelier Renovation",
    subtitle: "A historic shell opened into a gallery-like family home",
    className: "min-h-[300px] bg-gradient-to-br from-[#bdb8b0] via-[#706b65] to-[#151515]",
  },
  {
    title: "Mercer Office",
    subtitle: "A restrained, hospitality-inspired workspace for a private advisory firm",
    className: "min-h-[300px] bg-gradient-to-br from-[#8c8f95] via-[#4b4f55] to-[#111214]",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Consult",
    copy: "We define scope, align budgets, and establish a clear decision-making framework before design begins.",
  },
  {
    step: "02",
    title: "Design",
    copy: "Selections, plans, and build strategy are refined into a precise roadmap that protects quality and timing.",
  },
  {
    step: "03",
    title: "Build",
    copy: "Execution is disciplined, communication stays proactive, and every finish is reviewed against a high standard.",
  },
];

const testimonials = [
  {
    quote:
      "Monarch brought the calmest process we’ve ever experienced on a high-stakes build. Every detail felt deliberate.",
    name: "Claire M.",
    role: "Private Residence Client",
  },
  {
    quote:
      "Minimal, rigorous, and deeply organized. They built our renovation exactly the way they presented it.",
    name: "Nathan R.",
    role: "Whole-Home Remodel",
  },
];

export default function ConstructionDemoPage() {
  return (
    <main className="min-h-screen bg-[#0b0b0c] text-[#f3f3ef]">
      <DemoSection className="relative overflow-hidden pt-6 sm:pt-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.06),transparent_30%)]" />
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-4 py-3 text-xs uppercase tracking-[0.24em] text-white/65 backdrop-blur sm:px-6">
          <span>Monarch Build Co.</span>
          <span>private construction</span>
        </div>

        <div className="grid gap-12 pb-20 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-16 lg:pb-28">
          <div>
            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-white/45">
              Construction company concept
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold uppercase tracking-[-0.04em] sm:text-6xl lg:text-8xl">
              Built Without Compromise.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
              A high-end construction brand concept designed to signal rigor,
              trust, and restraint. The tone is quiet and confident, with a
              portfolio-first structure built to appeal to private clients.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <DemoButton
                href="#cta"
                className="bg-[#f3f3ef] text-[#0b0b0c] hover:bg-white"
              >
                Start Your Project
              </DemoButton>
              <DemoButton
                href="#projects"
                variant="outline"
                className="border-white/15 text-white"
              >
                View Projects
              </DemoButton>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-5">
              <p className="text-xs uppercase tracking-[0.28em] text-white/40">
                Active regions
              </p>
              <p className="mt-4 text-4xl font-semibold tracking-tight">West Coast</p>
              <p className="mt-3 text-sm leading-7 text-white/60">
                Serving private homes, substantial remodels, and select commercial spaces.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 sm:translate-y-10">
              <p className="text-xs uppercase tracking-[0.28em] text-white/40">
                Typical project window
              </p>
              <p className="mt-4 text-4xl font-semibold tracking-tight">8-18 mo</p>
              <p className="mt-3 text-sm leading-7 text-white/60">
                Structured timelines with communication touchpoints built into every phase.
              </p>
            </div>
          </div>
        </div>
      </DemoSection>

      <DemoSection id="services" className="pb-20 lg:pb-24">
        <DemoHeading
          eyebrow="Services"
          title="Precision across ground-up builds, renovation, and commercial scope."
          description="The services section uses clear hierarchy and disciplined spacing to make the company feel established, premium, and operationally sharp."
        />
        <div className="mt-10 grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="bg-[#101113] p-8 transition duration-300 hover:bg-[#15171a]"
            >
              <p className="text-sm uppercase tracking-[0.28em] text-white/35">
                Service
              </p>
              <h3 className="mt-8 text-3xl font-medium tracking-tight">
                {service.title}
              </h3>
              <p className="mt-4 max-w-sm text-sm leading-7 text-white/62">
                {service.copy}
              </p>
            </article>
          ))}
        </div>
      </DemoSection>

      <DemoSection id="projects" className="pb-20 lg:pb-24">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <DemoHeading
            eyebrow="Portfolio"
            title="Projects presented with restraint and scale."
            description="Large, image-led cards are ideal for industries where proof of taste matters as much as proof of capability."
          />
          <a href="#" className="text-sm uppercase tracking-[0.26em] text-white/55 transition hover:text-white">
            Full portfolio
          </a>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <DemoImageCard
            title={projects[0].title}
            subtitle={projects[0].subtitle}
            className={projects[0].className}
            overlayClassName="from-white/10 via-transparent to-black/55"
          />
          <div className="grid gap-4">
            <DemoImageCard
              title={projects[1].title}
              subtitle={projects[1].subtitle}
              className={projects[1].className}
              overlayClassName="from-white/10 via-transparent to-black/60"
            />
            <DemoImageCard
              title={projects[2].title}
              subtitle={projects[2].subtitle}
              className={projects[2].className}
              overlayClassName="from-white/10 via-transparent to-black/60"
            />
          </div>
        </div>
      </DemoSection>

      <DemoSection className="border-y border-white/10 bg-white/[0.03] py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <DemoHeading
            eyebrow="Process"
            title="A measured process that reduces friction and keeps quality visible."
            description="For service brands, process is part of the product. This layout makes the workflow feel tangible and easy to trust."
          />
          <div className="space-y-4">
            {processSteps.map((step) => (
              <article
                key={step.step}
                className="rounded-[1.75rem] border border-white/10 bg-[#111214] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/18"
              >
                <div className="flex items-start gap-5">
                  <p className="text-sm font-medium tracking-[0.32em] text-white/35">
                    {step.step}
                  </p>
                  <div>
                    <h3 className="text-2xl font-medium tracking-tight">{step.title}</h3>
                    <p className="mt-3 max-w-xl text-sm leading-7 text-white/62">
                      {step.copy}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </DemoSection>

      <DemoSection className="py-20 lg:py-24">
        <DemoHeading
          eyebrow="Client Notes"
          title="Social proof with a private-client tone."
          description="The testimonials stay polished and understated so they support the brand instead of making it feel salesy."
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8"
            >
              <p className="text-lg leading-8 text-white/80">“{testimonial.quote}”</p>
              <p className="mt-8 text-sm font-medium uppercase tracking-[0.24em] text-white/45">
                {testimonial.name}
              </p>
              <p className="mt-2 text-sm text-white/55">{testimonial.role}</p>
            </article>
          ))}
        </div>
      </DemoSection>

      <DemoSection id="cta" className="pb-14 lg:pb-18">
        <div className="rounded-[2.25rem] border border-white/10 bg-[#f1f1eb] px-8 py-10 text-[#0b0b0c] lg:px-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.28em] text-black/45">
                Start Your Project
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Bring a private residence or renovation to a team that values discipline.
              </h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <DemoButton
                href="#"
                className="bg-[#0b0b0c] text-[#f1f1eb] hover:bg-black"
              >
                Request Consultation
              </DemoButton>
              <DemoButton
                href="#projects"
                variant="outline"
                className="border-black/15 text-[#0b0b0c]"
              >
                Review Work
              </DemoButton>
            </div>
          </div>
        </div>
      </DemoSection>

      <DemoFooter
        brand="Monarch Build Co."
        className="text-white"
        links={[
          { label: "Services", href: "#services" },
          { label: "Projects", href: "#projects" },
          { label: "Process", href: "#cta" },
        ]}
      />
    </main>
  );
}

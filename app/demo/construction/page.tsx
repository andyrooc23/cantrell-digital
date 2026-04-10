import type { Metadata } from "next";
import Image from "next/image";
import constructionBlueprintImage from "@/public/images/demo/construction/construction-blueprint.jpg";
import constructionWorkImage from "@/public/images/demo/construction/construction-work.jpeg";
import constructionExteriorImage from "@/public/images/demo/construction/exterior.jpeg";
import constructionHeroImage from "@/public/images/demo/construction/hero.jpeg";
import constructionInteriorImage from "@/public/images/demo/construction/interior.jpeg";
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
    "A premium construction company focused on custom homes, major renovations, and detail-driven project delivery.",
};

const services = [
  {
    title: "Custom Homes",
    copy: "Ground-up homes planned around site, lifestyle, and a finish standard that holds up under scrutiny.",
  },
  {
    title: "Luxury Renovations",
    copy: "Whole-home remodels that improve flow, function, and livability without losing what made the home worth keeping.",
  },
  {
    title: "Commercial Spaces",
    copy: "Build-outs for firms that want a space that feels as considered, professional, and durable as the brand behind it.",
  },
];

const projects = [
  {
    title: "Ridge House",
    subtitle: "Concrete, cedar, and panoramic glazing above the valley line",
    className: "min-h-[380px]",
    src: constructionExteriorImage,
    alt: "Luxury hillside home with sharp architecture and expansive glazing",
    imageClassName: "object-cover object-center",
  },
  {
    title: "Atelier Renovation",
    subtitle: "A historic shell opened into a gallery-like family home",
    className: "min-h-[300px]",
    src: constructionInteriorImage,
    alt: "Minimal interior renovation with warm finishes and clean lines",
    imageClassName: "object-cover object-center",
  },
  {
    title: "Site Detail",
    subtitle: "Build-phase craftsmanship documented with the same precision as the finished work",
    className: "min-h-[300px]",
    src: constructionWorkImage,
    alt: "Construction detail showing premium residential build work in progress",
    imageClassName: "object-cover object-center",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Consult",
    copy: "We clarify scope, priorities, budget parameters, and decision-making early so the project starts on solid footing.",
  },
  {
    step: "02",
    title: "Design",
    copy: "Plans, selections, and build strategy are refined into a practical roadmap that protects quality, timing, and expectations.",
  },
  {
    step: "03",
    title: "Build",
    copy: "Execution stays disciplined, communication stays active, and every major finish is reviewed against the standard promised at the start.",
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
              Private construction firm
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold uppercase tracking-[-0.04em] sm:text-6xl lg:text-8xl">
              Built With Precision.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
              Monarch Build Co. delivers custom homes, major renovations, and carefully managed construction for clients who expect craftsmanship, clarity, and a process they can trust.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <DemoButton
                href="#cta"
                className="bg-[#f3f3ef] text-[#0b0b0c] hover:bg-white"
              >
                Request a Consultation
              </DemoButton>
              <DemoButton
                href="#projects"
                variant="outline"
                className="border-white/15 text-white"
              >
                View Recent Work
              </DemoButton>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 sm:col-span-2">
              <div className="relative min-h-[23rem] overflow-hidden rounded-[1.6rem]">
                <Image
                  src={constructionHeroImage}
                  alt="Modern luxury residence with dramatic architecture at dusk"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 p-6 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-white/55">
                      Featured residence
                    </p>
                    <p className="mt-2 max-w-md text-3xl font-semibold tracking-tight">
                      Custom residences built with architectural discipline and lasting material quality.
                    </p>
                  </div>
                  <p className="max-w-xs text-sm leading-7 text-white/70">
                    Every project is led with planning, executed with care, and finished to feel considered from first walkthrough to final detail.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-5">
              <p className="text-xs uppercase tracking-[0.28em] text-white/40">
                Active regions
              </p>
              <p className="mt-4 text-4xl font-semibold tracking-tight">West Coast</p>
              <p className="mt-3 text-sm leading-7 text-white/60">
                Serving custom homes, substantial renovations, and select commercial interiors across the West Coast.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 sm:translate-y-10">
              <p className="text-xs uppercase tracking-[0.28em] text-white/40">
                Typical project window
              </p>
              <p className="mt-4 text-4xl font-semibold tracking-tight">8-18 mo</p>
              <p className="mt-3 text-sm leading-7 text-white/60">
                Clear timelines, proactive updates, and structured milestones built into every phase.
              </p>
            </div>
          </div>
        </div>
      </DemoSection>

      <DemoSection id="services" className="pb-20 lg:pb-24">
        <DemoHeading
          eyebrow="Services"
          title="Construction services for clients who care about workmanship, communication, and finish quality."
          description="Each offering is built around trust: clear scope, disciplined execution, and a final product that feels worthy of the investment."
        />
        <div className="mt-10 grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="bg-[#101113] p-8 transition duration-300 hover:bg-[#15171a]"
            >
              <p className="text-sm uppercase tracking-[0.28em] text-white/35">
                Offering
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
            title="Selected work that shows range, restraint, and build quality."
            description="For a premium construction firm, the portfolio has to do more than look good. It needs to communicate standards, taste, and confidence in execution."
          />
          <a href="#" className="text-sm uppercase tracking-[0.26em] text-white/55 transition hover:text-white">
            See all projects
          </a>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <DemoImageCard
            title={projects[0].title}
            subtitle={projects[0].subtitle}
            className={projects[0].className}
            src={projects[0].src}
            alt={projects[0].alt}
            imageClassName={projects[0].imageClassName}
            sizes="(max-width: 1024px) 100vw, 58vw"
            overlayClassName="from-white/10 via-transparent to-black/55"
          />
          <div className="grid gap-4">
            <DemoImageCard
              title={projects[1].title}
              subtitle={projects[1].subtitle}
              className={projects[1].className}
              src={projects[1].src}
              alt={projects[1].alt}
              imageClassName={projects[1].imageClassName}
              sizes="(max-width: 1024px) 100vw, 30vw"
              overlayClassName="from-white/10 via-transparent to-black/60"
            />
            <DemoImageCard
              title={projects[2].title}
              subtitle={projects[2].subtitle}
              className={projects[2].className}
              src={projects[2].src}
              alt={projects[2].alt}
              imageClassName={projects[2].imageClassName}
              sizes="(max-width: 1024px) 100vw, 30vw"
              overlayClassName="from-white/10 via-transparent to-black/60"
            />
          </div>
        </div>
      </DemoSection>

      <DemoSection className="border-y border-white/10 bg-white/[0.03] py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="space-y-6">
            <DemoHeading
              eyebrow="Process"
              title="A process built to keep decisions clear and quality visible from day one."
              description="Clients should know what happens next, what decisions matter, and how the project is being managed. The workflow is structured to create calm, not confusion."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="relative min-h-[250px] overflow-hidden rounded-[2rem] border border-white/10">
                <Image
                  src={constructionBlueprintImage}
                  alt="Architectural blueprint spread across a construction planning table"
                  fill
                  sizes="(max-width: 1024px) 100vw, 20vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-xs uppercase tracking-[0.28em] text-white/55">
                    Planning
                  </p>
                  <p className="mt-2 text-xl font-medium">Decisions documented before work begins on site.</p>
                </div>
              </div>
              <div className="relative min-h-[250px] overflow-hidden rounded-[2rem] border border-white/10">
                <Image
                  src={constructionWorkImage}
                  alt="Craftsmanship detail captured during a residential construction phase"
                  fill
                  sizes="(max-width: 1024px) 100vw, 20vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-xs uppercase tracking-[0.28em] text-white/55">
                    Execution
                  </p>
                  <p className="mt-2 text-xl font-medium">Site execution reviewed against the same standard as the final reveal.</p>
                </div>
              </div>
            </div>
          </div>
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
          title="What clients remember most: calm communication and high standards."
          description="The right testimonial language reinforces trust, professionalism, and the feeling that the project was handled with real care."
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
                Start a Conversation
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Bring your home or renovation to a team that takes the details seriously.
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
                Review Projects
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

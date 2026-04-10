import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";

type DemoSectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

type DemoHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

type DemoButtonProps = {
  href?: string;
  variant?: "solid" | "outline" | "ghost";
  className?: string;
  children: ReactNode;
};

type DemoImageCardProps = {
  title: string;
  subtitle?: string;
  className?: string;
  overlayClassName?: string;
  src?: string | StaticImageData;
  alt?: string;
  sizes?: string;
  imageClassName?: string;
  priority?: boolean;
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function DemoSection({ id, className, children }: DemoSectionProps) {
  return (
    <section id={id} className={cn("px-4 sm:px-6 lg:px-8", className)}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

export function DemoHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: DemoHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-current/60">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-sm leading-7 text-current/70 sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function DemoButton({
  href = "#",
  variant = "solid",
  className,
  children,
}: DemoButtonProps) {
  const styles = {
    solid:
      "bg-current text-black shadow-[0_18px_60px_-24px_rgba(0,0,0,0.55)] hover:-translate-y-1 hover:opacity-90",
    outline:
      "border border-current/20 bg-transparent text-current hover:-translate-y-1 hover:bg-current/5",
    ghost: "bg-white/10 text-current hover:-translate-y-1 hover:bg-white/15",
  } as const;

  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition duration-300",
        styles[variant],
        className,
      )}
    >
      {children}
    </a>
  );
}

export function DemoStat({
  label,
  value,
  className,
}: {
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-current/10 bg-white/60 p-5 backdrop-blur-sm",
        className,
      )}
    >
      <p className="text-2xl font-semibold tracking-tight sm:text-3xl">{value}</p>
      <p className="mt-2 text-xs uppercase tracking-[0.24em] text-current/55">
        {label}
      </p>
    </div>
  );
}

export function DemoImageCard({
  title,
  subtitle,
  className,
  overlayClassName,
  src,
  alt = "",
  sizes = "100vw",
  imageClassName,
  priority = false,
}: DemoImageCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-[2rem] border border-white/10",
        className,
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={cn(
            "object-cover transition duration-700 group-hover:scale-105",
            imageClassName,
          )}
        />
      ) : null}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/30 transition duration-500 group-hover:scale-105",
          overlayClassName,
        )}
      />
      <div className="absolute inset-x-0 bottom-0 p-6 text-white">
        <p className="text-lg font-medium tracking-tight">{title}</p>
        {subtitle ? (
          <p className="mt-1 text-sm text-white/75">{subtitle}</p>
        ) : null}
      </div>
    </div>
  );
}

export function DemoFooter({
  brand,
  links,
  className,
}: {
  brand: string;
  links: Array<{ label: string; href: string }>;
  className?: string;
}) {
  return (
    <footer className={cn("px-4 pb-10 pt-6 sm:px-6 lg:px-8", className)}>
      <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-current/10 pt-6 text-sm text-current/60 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-medium text-current">{brand}</p>
        <div className="flex flex-wrap gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition hover:text-current"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

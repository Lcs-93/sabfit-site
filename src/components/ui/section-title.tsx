import { cn } from "@/lib/utils";

interface SectionTitleProps {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionTitleProps) {
  return (
    <div className={cn("max-w-3xl space-y-4", align === "center" && "mx-auto text-center")}>
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-green-soft)]">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-[var(--color-deep-green)] sm:text-4xl">
        {title}
      </h2>
      <p className="text-base leading-8 text-[var(--color-muted)]">{description}</p>
    </div>
  );
}

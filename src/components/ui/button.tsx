import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-[var(--color-deep-green)] text-white shadow-[var(--shadow-strong)] hover:bg-[var(--color-deep-green-strong)] active:bg-[var(--color-deep-green-strong)]",
  secondary:
    "border border-[var(--color-line)] bg-white/70 text-[var(--color-deep-green)] hover:border-[var(--color-green-soft)] hover:bg-white active:bg-white active:text-[var(--color-deep-green)]",
  ghost: "text-[var(--color-deep-green)] hover:bg-[rgba(22,56,43,0.06)]",
};

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: Variant;
  target?: string;
  rel?: string;
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

function getButtonClasses(variant: Variant, className?: string) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-[color,background-color,transform,box-shadow,border-color] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(22,56,43,0.2)] active:scale-[0.985]",
    variantClasses[variant],
    className,
  );
}

export function ButtonLink({
  href,
  children,
  className,
  variant = "primary",
  target,
  rel,
}: ButtonLinkProps) {
  const classes = getButtonClasses(variant, className);
  const isExternal =
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:");

  if (isExternal) {
    return (
      <a href={href} target={target} rel={rel} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  return <button className={getButtonClasses(variant, className)} {...props} />;
}

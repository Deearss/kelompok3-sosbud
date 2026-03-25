import { cn } from "@/lib/utils";
import React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "yellow" | "green" | "red" | "muted" | "blue" | "link";
  asLink?: boolean;
}

export function Badge({
  className,
  variant = "muted",
  asLink,
  ...props
}: BadgeProps) {
  const Component = asLink ? "a" : "span";

  return (
    <Component
      className={cn(
        "inline-flex items-center gap-1.25 text-[0.733rem] font-inter px-2.25 py-0.75 rounded-full border mr-1.5 mb-1",
        {
          "text-accent border-accent/30 bg-accent/5": variant === "yellow",
          "text-accent2 border-accent2/30 bg-accent2/5": variant === "green",
          "text-danger border-danger/30 bg-danger/5": variant === "red",
          "text-muted border-border bg-transparent": variant === "muted",
          "text-blue-400 border-blue-400/30 bg-blue-400/5": variant === "blue",
          "no-underline cursor-pointer transition-all duration-150 hover:opacity-80 hover:-translate-y-px":
            asLink || variant === "link",
        },
        className
      )}
      {...props}
    />
  );
}

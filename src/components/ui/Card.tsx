import { cn } from "@/lib/utils";
import React from "react";

export function Card({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "bg-surface border border-border rounded-3.5 px-6 py-5.5 mb-3.5 transition-colors duration-200 hover:border-[#2e344d]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardTitle({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("font-montserrat text-[1.067rem] font-bold text-textColor mb-1", className)}
      {...props}
    >
      {children}
    </h3>
  );
}

export function CardSub({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-[0.8rem] text-muted font-inter mb-3", className)}
      {...props}
    >
      {children}
    </p>
  );
}

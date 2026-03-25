import React from "react";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  tag: string;
  title: string;
  desc: string;
}

export function PageHeader({ tag, title, desc }: PageHeaderProps) {
  return (
    <div className="mb-9 animate-fade-up">
      <div className="font-inter text-[0.667rem] tracking-[0.15em] uppercase text-accent mb-2">
        {tag}
      </div>
      <h1 className="font-montserrat text-[1.6rem] md:text-[2.133rem] font-extrabold leading-[1.15] text-textColor">
        {title}
      </h1>
      <p className="text-textDim mt-2 text-[0.933rem]">{desc}</p>
    </div>
  );
}

export function Section({ children, className }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mb-8", className)}>{children}</div>;
}

export function SectionTitle({ children, className }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "font-montserrat text-[0.867rem] font-bold tracking-widest uppercase text-muted mb-3.5 flex items-center gap-2.5 after:content-[''] after:flex-1 after:h-px auto after:bg-border",
        className
      )}
    >
      {children}
    </div>
  );
}

export function Alert({ children, className, icon = "💡" }: React.HTMLAttributes<HTMLDivElement> & { icon?: React.ReactNode }) {
  return (
    <div className={cn("flex gap-3.5 px-4 py-4 rounded-xl border border-blue-400/25 bg-blue-400/5 text-[0.867rem] text-blue-200 leading-[1.6]", className)}>
      <div className="text-[1.2rem] shrink-0 leading-[1.2]">{icon}</div>
      <div>{children}</div>
    </div>
  );
}

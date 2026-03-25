"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface TooltipProps {
  content: string;
  position?: "top" | "bottom" | "right";
  children: React.ReactNode;
  className?: string;
}

export function Tooltip({ content, position = "top", children, className }: TooltipProps) {
  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  const arrowClasses = {
    top: "top-full left-1/2 -translate-x-1/2 border-t-[#1e2235] border-x-transparent border-b-transparent border-x-4 border-t-4 border-b-0",
    bottom: "bottom-full left-1/2 -translate-x-1/2 border-b-[#1e2235] border-x-transparent border-t-transparent border-x-4 border-b-4 border-t-0",
    right: "right-full top-1/2 -translate-y-1/2 border-r-[#1e2235] border-y-transparent border-l-transparent border-y-4 border-r-4 border-l-0",
  };

  return (
    <div className={cn("relative group/tooltip inline-flex", className)}>
      {children}
      <div
        className={cn(
          "pointer-events-none absolute z-50 whitespace-nowrap",
          "px-2.5 py-1.5 rounded-lg text-[0.7rem] font-medium",
          "bg-[#1e2235] text-textColor border border-border/60",
          "shadow-lg shadow-black/30 backdrop-blur-sm",
          "opacity-0 scale-95 translate-y-0.5",
          "group-hover/tooltip:opacity-100 group-hover/tooltip:scale-100 group-hover/tooltip:translate-y-0",
          "transition-all duration-150 ease-out",
          positionClasses[position]
        )}
        role="tooltip"
      >
        {content}
        <span
          className={cn("absolute border", arrowClasses[position])}
        />
      </div>
    </div>
  );
}

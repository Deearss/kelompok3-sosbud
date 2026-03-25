"use client";

import React, { useState, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";

interface TooltipProps {
  content: string;
  position?: "top" | "bottom" | "right";
  children: React.ReactNode;
  className?: string;
}

interface TooltipCoords {
  top: number;
  left: number;
}

export function Tooltip({ content, position = "top", children, className }: TooltipProps) {
  const [visible, setVisible] = useState(false);
  const [coords, setCoords] = useState<TooltipCoords>({ top: 0, left: 0 });
  const wrapperRef = useRef<HTMLDivElement>(null);

  const calculateCoords = useCallback(() => {
    if (!wrapperRef.current) return;
    const rect = wrapperRef.current.getBoundingClientRect();
    const offset = 8;

    if (position === "top") {
      setCoords({ top: rect.top - offset, left: rect.left + rect.width / 2 });
    } else if (position === "bottom") {
      setCoords({ top: rect.bottom + offset, left: rect.left + rect.width / 2 });
    } else if (position === "right") {
      setCoords({ top: rect.top + rect.height / 2, left: rect.right + offset });
    }
  }, [position]);

  const handleMouseEnter = () => {
    calculateCoords();
    setVisible(true);
  };

  const handleMouseLeave = () => {
    setVisible(false);
  };

  const transformMap = {
    top: "translate(-50%, -100%)",
    bottom: "translate(-50%, 0%)",
    right: "translate(0%, -50%)",
  };

  const tooltipEl = typeof document !== "undefined" && visible ? createPortal(
    <div
      role="tooltip"
      style={{
        position: "fixed",
        top: coords.top,
        left: coords.left,
        transform: transformMap[position],
        zIndex: 9999,
        pointerEvents: "none",
      }}
      className={cn(
        "whitespace-nowrap px-2.5 py-1.5 rounded-lg text-[0.7rem] font-medium",
        "bg-[#1e2235] text-textColor border border-border/60",
        "shadow-lg shadow-black/30 backdrop-blur-sm",
        "animate-in fade-in zoom-in-95 duration-100"
      )}
    >
      {content}
    </div>,
    document.body
  ) : null;

  return (
    <div
      ref={wrapperRef}
      className={cn("block w-full", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {tooltipEl}
    </div>
  );
}

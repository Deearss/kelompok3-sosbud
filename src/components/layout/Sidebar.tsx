"use client";

import React from "react";
import {
  ClipboardList,
  Ruler,
  FolderTree,
  ExternalLink,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Tooltip } from "@/components/ui/Tooltip";

export type TabId = "tugas" | "panduan" | "kerangka";

interface SidebarProps {
  activeTab: TabId;
  setActiveTab: (tab: TabId) => void;
  // mobile drawer controls
  isOpen?: boolean;
  onClose?: () => void;
}

export function Sidebar({
  activeTab,
  setActiveTab,
  isOpen = false,
  onClose,
}: SidebarProps) {
  const navItems = [
    { id: "tugas", label: "Pembagian Tugas", num: 5, icon: ClipboardList },
    { id: "panduan", label: "Panduan Penulisan", num: 7, icon: Ruler },
    { id: "kerangka", label: "Kerangka Makalah", num: 3, icon: FolderTree },
  ] as const;

  return (
    <aside
      className={cn(
        // Base styles
        "shrink-0 bg-surface border-r border-border flex flex-col py-8 px-6 gap-0",
        // Desktop — sticky sidebar
        "md:sticky md:top-0 md:h-screen md:w-87.5 md:translate-x-0",
        // Mobile — fixed drawer that slides in from left
        "fixed inset-y-0 left-0 z-40 w-64 transition-transform duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
      )}
    >
      {/* Branding */}
      <div className="mb-7 md:mb-9">
        <div className="font-inter text-[0.6rem] md:text-[0.667rem] tracking-[0.15em] text-muted uppercase mb-1.5">
          Mata Kuliah · Sosbud
        </div>
        <div className="font-montserrat text-[1.1rem] md:text-[1.333rem] font-extrabold leading-[1.2] text-textColor">
          Kelompok <span className="text-accent">3</span>
          <br />
          Project Hub
        </div>

        {/* Close button — mobile only */}
        <button
          onClick={onClose}
          className="md:hidden absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg text-textDim hover:bg-border hover:text-textColor transition-colors"
          aria-label="Tutup menu"
        >
          <X size={18} />
        </button>
      </div>

      {/* Navigation tabs */}
      <nav className="flex flex-col gap-1.5 flex-1">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          const IconComponent = item.icon;
          return (
            <div
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                "flex items-center gap-2 md:gap-3 px-2.5 md:px-3.5 py-2 md:py-2.5 rounded-[10px] cursor-pointer",
                "transition-colors duration-150 border border-transparent",
                "text-[0.65rem] md:text-[0.933rem] font-medium text-textDim select-none",
                "relative group hover:bg-white/5 hover:text-textColor",
                isActive &&
                  "bg-accent/10 border-accent/20 text-accent hover:bg-accent/10 hover:text-accent",
              )}
            >
              <div
                className={cn(
                  "w-6 h-6 md:w-8 md:h-8 rounded-lg flex items-center justify-center bg-border shrink-0 transition-colors",
                  isActive
                    ? "bg-accent/15 text-accent"
                    : "group-hover:text-textColor",
                )}
              >
                <IconComponent size={15} strokeWidth={2.5} />
              </div>
              {item.label}
              <span
                className={cn(
                  "relative font-inter text-[0.6rem] size-5 rounded-full flex justify-center items-center ml-auto",
                  isActive
                    ? "bg-accent/20 text-accent"
                    : "bg-border text-muted",
                )}
              >
                <span className="absolute top-[53%] left-1/2 -translate-x-1/2 -translate-y-1/2">
                  {item.num}
                </span>
              </span>
            </div>
          );
        })}
      </nav>

      {/* Tool links */}
      <div className="mt-5 pt-4 pb-2.5 border-t border-border">
        <div className="text-[0.6rem] font-bold tracking-widest uppercase text-muted mb-2">
          Tools
        </div>

        {(
          [
            {
              href: "/go/makalah",
              label: "Microsoft Word",
              sub: "Pembuatan Makalah",
              tooltip: "Buka dokumen makalah di Microsoft Word Online",
              accentColor: "hover:border-[#185ABD]/40",
              icon: (
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 md:w-8 md:h-8 shrink-0"
                >
                  <defs>
                    <clipPath id="word-clip1">
                      <rect x="16" y="6" width="28" height="36" rx="4" />
                    </clipPath>
                    <filter
                      id="word-shadow1"
                      x="-10%"
                      y="-10%"
                      width="130%"
                      height="130%"
                    >
                      <feDropShadow
                        dx="0"
                        dy="1"
                        stdDeviation="1.5"
                        floodOpacity="0.25"
                      />
                    </filter>
                  </defs>
                  <g clipPath="url(#word-clip1)">
                    <rect x="16" y="6" width="28" height="36" fill="#103F91" />
                    <rect x="16" y="6" width="28" height="9" fill="#41A5EE" />
                    <rect x="16" y="15" width="28" height="9" fill="#2B7CD3" />
                    <rect x="16" y="24" width="28" height="9" fill="#185ABD" />
                  </g>
                  <rect
                    x="4"
                    y="14"
                    width="26"
                    height="20"
                    rx="3"
                    fill="#185ABD"
                    filter="url(#word-shadow1)"
                  />
                  <path
                    d="M 8 18 L 12 30 L 14.5 30 L 17 21 L 19.5 30 L 22 30 L 26 18 L 23 18 L 20.5 27 L 18 18 L 16 18 L 13.5 27 L 11 18 Z"
                    fill="white"
                  />
                </svg>
              ),
            },
            {
              href: "/go/ppt",
              label: "Canva",
              sub: "Slides Presentasi",
              tooltip: "Buka slides presentasi di Canva",
              accentColor: "hover:border-[#00C4CC]/40",
              icon: (
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 md:w-8 md:h-8 shrink-0 rounded-full"
                >
                  <defs>
                    <linearGradient
                      id="canvaGrad1"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#00E5FF" />
                      <stop offset="60%" stopColor="#306EE8" />
                      <stop offset="100%" stopColor="#8A2BE2" />
                    </linearGradient>
                  </defs>
                  <circle cx="24" cy="24" r="24" fill="url(#canvaGrad1)" />
                  <path
                    d="M31.21 16.63C28.69 13.11 23.95 12 18.91 14.53C13.25 17.39 9.87 24.11 11.23 30.12C12.59 36.13 18.23 39.81 24.51 39.42C29.08 39.13 32.06 36.03 33.72 32.32C34.55 30.46 31.81 29.41 30.65 31.05C29.13 33.2 26.86 34.61 24.08 34.68C18.66 34.82 16.03 30.01 16.14 24.63C16.22 20.35 19.34 16.67 24.02 16.01C26.33 15.68 28.84 16.29 30.45 17.8C31.54 18.82 32.58 17.51 31.21 16.63Z"
                    fill="white"
                  />
                </svg>
              ),
            },
            {
              href: "https://drive.google.com/drive/u/1/folders/1bw-PLHiOR_fS-qzUczeqxmtR_4-vMiC9",
              label: "Google Drive",
              sub: "Penyimpanan Berkas",
              tooltip:
                "Buka folder penyimpanan berkas kelompok di Google Drive",
              accentColor: "hover:border-[#00AC47]/40",
              icon: (
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 md:w-8 md:h-8 shrink-0"
                >
                  <rect width="48" height="48" rx="8" fill="white" />
                  <path d="M19 11 L9 28.3 L14 37 L24 19.7 Z" fill="#34A853" />
                  <path d="M29 11 L19 11 L29 28.3 L39 28.3 Z" fill="#FFC107" />
                  <path d="M14 37 L19 28.3 L39 28.3 L34 37 Z" fill="#4285F4" />
                </svg>
              ),
            },
          ] as const
        ).map(({ href, label, sub, icon, accentColor, tooltip }) => (
          <Tooltip key={label} content={tooltip} position="right">
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className={cn(
                "flex items-center gap-2.5 px-3 py-2.5 rounded-[10px] no-underline mb-1.5",
                "border border-border bg-surface/50 w-full",
                "transition-all duration-200 group hover:bg-border/70 hover:-translate-y-px",
                accentColor,
              )}
            >
              {icon}
              <div className="flex flex-col gap-px flex-1 min-w-0">
                <span className="text-[0.65rem] md:text-[0.75rem] font-medium text-textDim leading-tight group-hover:text-textColor transition-colors truncate">
                  {label}
                </span>
                <span className="text-[0.5rem] md:text-[0.6rem] text-muted leading-tight truncate">
                  {sub}
                </span>
              </div>
              <ExternalLink
                size={15}
                className="shrink-0 text-muted group-hover:text-textDim transition-colors"
              />
            </a>
          </Tooltip>
        ))}
      </div>

      {/* Judul makalah */}
      <div className="font-inter text-[0.667rem] text-muted border-t border-border pt-5 leading-[1.8]">
        <strong className="text-accent2">Judul Makalah</strong>
        <br />
        Peran Etika &amp; Norma dalam
        <br />
        Meredam Pertentangan Sosial
        <br />
        sebagai Upaya Integrasi
        <br />
        Masyarakat
      </div>
    </aside>
  );
}

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
              href: "https://1drv.ms/w/c/23d53d2ba9c333ff/IQDbmR8lRCKaTaGiNEWfjXwMAZ_8kzGE0AhTazhxS8VlT2I?e=X91e5p",
              label: "Microsoft Word",
              sub: "Pembuatan Makalah",
              tooltip: "Buka dokumen makalah di Microsoft Word Online",
              accentColor: "hover:border-[#185ABD]/40",
              icon: (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 shrink-0 rounded-md"
                >
                  <rect width="24" height="24" rx="5" fill="#185ABD" />
                  <path
                    d="M14 3H7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7L14 3Z"
                    fill="#2B7CD3"
                  />
                  <path d="M14 3v4h4L14 3Z" fill="#82B4E8" />
                  <path
                    d="M8 11h8M8 13.5h8M8 16h5"
                    stroke="white"
                    strokeWidth="1"
                    strokeLinecap="round"
                  />
                </svg>
              ),
            },
            {
              href: "https://docs.google.com/presentation/d/1jCadIssP0vsUnT3XPwmgVdO8mV8sYSpIQYCUo5nQQ4g/edit?usp=sharing",
              label: "Google Slides",
              sub: "Slides Presentasi",
              tooltip: "Buka slides presentasi di Google Slides",
              accentColor: "hover:border-[#F4A825]/40",
              icon: (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 shrink-0 rounded-md"
                >
                  <rect width="24" height="24" rx="5" fill="#F4A825" />
                  <rect
                    x="4"
                    y="6"
                    width="16"
                    height="11"
                    rx="1.5"
                    fill="white"
                    fillOpacity="0.2"
                    stroke="white"
                    strokeWidth="1"
                  />
                  <rect
                    x="6"
                    y="8"
                    width="12"
                    height="7"
                    rx="1"
                    fill="white"
                    fillOpacity="0.35"
                  />
                  <line
                    x1="12"
                    y1="17"
                    x2="12"
                    y2="19"
                    stroke="white"
                    strokeWidth="1.2"
                  />
                  <line
                    x1="9"
                    y1="19"
                    x2="15"
                    y2="19"
                    stroke="white"
                    strokeWidth="1.2"
                    strokeLinecap="round"
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
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 shrink-0 rounded-md"
                >
                  <rect width="24" height="24" rx="5" fill="#1a1e2d" />
                  <path d="M8 17 L5 17 L9 10 L12 17 Z" fill="#0066DA" />
                  <path d="M12 4 L15.5 10 L12 17 L8.5 10 Z" fill="#00AC47" />
                  <path d="M15.5 10 L19 17 L12 17 L8.5 10 Z" fill="#FFBA00" />
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
                <span className="text-[0.65rem] font-medium text-textDim leading-tight group-hover:text-textColor transition-colors truncate">
                  {label}
                </span>
                <span className="text-[0.5rem] text-muted leading-tight truncate">
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

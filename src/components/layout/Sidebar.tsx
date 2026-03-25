"use client";

import React from "react";
import { ClipboardList, Ruler, FolderTree } from "lucide-react";
import { cn } from "@/lib/utils";

export type TabId = "tugas" | "panduan" | "kerangka";

interface SidebarProps {
  activeTab: TabId;
  setActiveTab: (tab: TabId) => void;
}

export function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const navItems = [
    { id: "tugas", label: "Pembagian Tugas", num: 5, icon: ClipboardList },
    { id: "panduan", label: "Panduan Penulisan", num: 7, icon: Ruler },
    { id: "kerangka", label: "Kerangka Makalah", num: 3, icon: FolderTree },
  ] as const;

  return (
    <aside className="w-87.5 shrink-0 bg-surface border-r border-border flex flex-col sticky top-0 h-screen py-8 px-6 gap-0">
      <div className="mb-9">
        <div className="font-inter text-[0.667rem] tracking-[0.15em] text-muted uppercase mb-1.5">
          Mata Kuliah · Sosbud
        </div>
        <div className="font-montserrat text-[1.333rem] font-extrabold leading-[1.2] text-textColor">
          Kelompok <span className="text-accent">3</span>
          <br />
          Project Hub
        </div>
      </div>

      <nav className="flex flex-col gap-1.5 flex-1">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          const IconComponent = item.icon;
          return (
            <div
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                "flex items-center gap-3 px-3.5 py-2.5 rounded-2.5 cursor-pointer transition-colors duration-150 border border-transparent text-3.75 font-medium text-textDim select-none relative group hover:bg-white/5 hover:text-textColor",
                {
                  "bg-accent/10 border-accent/20 text-accent hover:bg-accent/10 hover:text-accent": isActive,
                }
              )}
            >
              <div
                className={cn(
                  "w-8 h-8 rounded-lg flex items-center justify-center bg-border shrink-0 transition-colors",
                  {
                    "bg-accent/15 text-accent": isActive,
                    "group-hover:text-textColor": !isActive,
                  }
                )}
              >
                <IconComponent size={18} strokeWidth={2.5} />
              </div>
              {item.label}
              <span
                className={cn(
                  "font-inter text-[0.6rem] px-1.5 py-0.5 rounded-full ml-auto",
                  {
                    "bg-accent/20 text-accent": isActive,
                    "bg-border text-muted": !isActive,
                  }
                )}
              >
                {item.num}
              </span>
            </div>
          );
        })}
      </nav>

      <div className="mt-5 pt-4 pb-2.5 border-t border-border">
        <div className="text-[0.6rem] font-bold tracking-widest uppercase text-muted mb-2">
          Tools
        </div>
        
        <a href="https://1drv.ms/w/c/23d53d2ba9c333ff/IQDbmR8lRCKaTaGiNEWfjXwMAZ_8kzGE0AhTazhxS8VlT2I?e=X91e5p" target="_blank" rel="noreferrer" className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg no-underline text-textDim text-[0.72rem] transition-colors duration-150 mb-0.5 hover:bg-border hover:text-textColor group">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5.5 h-5.5 shrink-0 rounded">
            <rect width="24" height="24" rx="4" fill="#185ABD"/>
            <path d="M14 3H7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7L14 3Z" fill="#2B7CD3"/>
            <path d="M14 3v4h4L14 3Z" fill="#82B4E8"/>
            <path d="M8 11h8M8 13.5h8M8 16h5" stroke="white" strokeWidth="1" strokeLinecap="round"/>
          </svg>
          <div className="flex flex-col gap-px">
            <span className="text-[0.72rem] text-textDim leading-[1.2] group-hover:text-textColor">Microsoft Word</span>
            <span className="text-[0.6rem] text-muted leading-[1.2]">Pembuatan Makalah</span>
          </div>
        </a>
        
        <a href="https://docs.google.com/presentation/d/1jCadIssP0vsUnT3XPwmgVdO8mV8sYSpIQYCUo5nQQ4g/edit?usp=sharing" target="_blank" rel="noreferrer" className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg no-underline text-textDim text-[0.72rem] transition-colors duration-150 mb-0.5 hover:bg-border hover:text-textColor group">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5.5 h-5.5 shrink-0 rounded">
            <rect width="24" height="24" rx="4" fill="#F4A825"/>
            <rect x="4" y="6" width="16" height="11" rx="1.5" fill="white" fillOpacity="0.2" stroke="white" strokeWidth="1"/>
            <rect x="6" y="8" width="12" height="7" rx="1" fill="white" fillOpacity="0.35"/>
            <line x1="12" y1="17" x2="12" y2="19" stroke="white" strokeWidth="1.2"/>
            <line x1="9" y1="19" x2="15" y2="19" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
          <div className="flex flex-col gap-px">
            <span className="text-[0.72rem] text-textDim leading-[1.2] group-hover:text-textColor">Google Slides</span>
            <span className="text-[0.6rem] text-muted leading-[1.2]">Slides Presentasi</span>
          </div>
        </a>
        
        <a href="https://drive.google.com/drive/u/1/folders/1bw-PLHiOR_fS-qzUczeqxmtR_4-vMiC9" target="_blank" rel="noreferrer" className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg no-underline text-textDim text-[0.72rem] transition-colors duration-150 mb-0.5 hover:bg-border hover:text-textColor group">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5.5 h-5.5 shrink-0 rounded">
            <rect width="24" height="24" rx="4" fill="#1a1e2d"/>
            <path d="M12 4 L19 17 H5 Z" fill="none"/>
            <path d="M8 17 L5 17 L9 10 L12 17 Z" fill="#0066DA"/>
            <path d="M12 4 L15.5 10 L12 17 L8.5 10 Z" fill="#00AC47"/>
            <path d="M15.5 10 L19 17 L12 17 L8.5 10 Z" fill="#FFBA00"/>
          </svg>
          <div className="flex flex-col gap-px">
            <span className="text-[0.72rem] text-textDim leading-[1.2] group-hover:text-textColor">Google Drive</span>
            <span className="text-[0.6rem] text-muted leading-[1.2]">Penyimpanan Berkas</span>
          </div>
        </a>
      </div>

      <div className="font-inter text-[0.667rem] text-muted border-t border-border pt-5 leading-[1.8]">
        <strong className="text-accent2">Judul Makalah</strong><br />
        Peran Etika & Norma dalam<br />
        Meredam Pertentangan Sosial<br />
        sebagai Upaya Integrasi<br />
        Masyarakat
      </div>
    </aside>
  );
}

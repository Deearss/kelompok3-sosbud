"use client";

import React, { useState } from "react";
import { PageHeader, Section, SectionTitle } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import { Tooltip } from "@/components/ui/Tooltip";

const FORMAT_RULES = [
  { label: "Kertas", value: "HVS Kuarto (A4)" },
  { label: "Font", value: "Times New Roman" },
  { label: "Ukuran Font", value: "12" },
  { label: "Spasi", value: "2 (double spacing) di seluruh dokumen" },
  { label: "Daftar Pustaka", value: "APA Style" },
];


const CHECKLIST_ITEMS = [
  "Font Times New Roman ukuran 12",
  "Spasi 2 di seluruh dokumen",
  "Kertas Kuarto (A4)",
  "Semua klaim ada referensi akademiknya",
  "Ada minimal 1 contoh kasus nyata",
  "Daftar pustaka format APA",
  "Sumber utama dari jurnal/buku akademik (bukan blog/Wikipedia)",
  "Struktur lengkap (Cover → Daftar Pustaka)",
  "Semua anggota sudah review keseluruhan isi",
];

export default function PanduanPenulisanPanel() {
  const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set());

  const toggleCheck = (index: number) => {
    const newSet = new Set(checkedItems);
    if (newSet.has(index)) {
      newSet.delete(index);
    } else {
      newSet.add(index);
    }
    setCheckedItems(newSet);
  };

  const isAllDone = checkedItems.size === CHECKLIST_ITEMS.length;

  return (
    <div className="animate-fade-up">
      <PageHeader
        tag="// panel 02 · panduan penulisan"
        title="Aturan mainnya apa?"
        desc="Format, ketentuan referensi, tools, dan checklist final sebelum dikumpulkan."
      />

      <Section>
        <SectionTitle>Format Dasar</SectionTitle>
        <div className="bg-surface border border-border rounded-[14px] overflow-hidden overflow-x-auto mb-3.5">
          <table className="w-full border-collapse text-[0.9rem] text-left">
            <thead>
              <tr>
                <th className="font-montserrat text-[0.733rem] font-bold tracking-[0.08em] uppercase text-muted py-2.5 px-3.5 border-b border-border">
                  Elemen
                </th>
                <th className="font-montserrat text-[0.733rem] font-bold tracking-[0.08em] uppercase text-muted py-2.5 px-3.5 border-b border-border">
                  Ketentuan
                </th>
              </tr>
            </thead>
            <tbody>
              {FORMAT_RULES.map((rule, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-white/5 transition-colors group"
                >
                  <td className="py-3 px-3.5 border-b border-white/5 text-textColor font-medium group-last-of-type:border-b-0 align-top">
                    {rule.label}
                  </td>
                  <td className="py-3 px-3.5 border-b border-white/5 text-textDim group-last-of-type:border-b-0 align-top">
                    {rule.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section>
        <SectionTitle>Struktur Dokumen</SectionTitle>
        <Card className="flex flex-wrap items-center gap-2">
          <Badge variant="muted" className="mb-0! mr-0!">
            1. Cover
          </Badge>
          <span className="text-muted text-sm">→</span>
          <Badge variant="muted" className="mb-0! mr-0!">
            2. Kata Pengantar
          </Badge>
          <span className="text-muted text-sm">→</span>
          <Badge variant="muted" className="mb-0! mr-0!">
            3. Daftar Isi
          </Badge>
          <span className="text-muted text-sm">→</span>
          <Badge variant="yellow" className="mb-0! mr-0!">
            4. BAB I
          </Badge>
          <span className="text-muted text-sm">→</span>
          <Badge variant="yellow" className="mb-0! mr-0!">
            5. BAB II
          </Badge>
          <span className="text-muted text-sm">→</span>
          <Badge variant="yellow" className="mb-0! mr-0!">
            6. BAB III
          </Badge>
          <span className="text-muted text-sm">→</span>
          <Badge variant="green" className="mb-0! mr-0!">
            7. Daftar Pustaka
          </Badge>
        </Card>
      </Section>



      <Section>
        <SectionTitle>Tools Kolaborasi</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Tooltip content="Buka dokumen makalah Word Online" position="top">
            <a
              href="https://1drv.ms/w/c/23d53d2ba9c333ff/IQDbmR8lRCKaTaGiNEWfjXwMAZ_8kzGE0AhTazhxS8VlT2I?e=X91e5p"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3.5 p-4 rounded-xl border border-border bg-surface no-underline text-textColor transition-all duration-200 hover:-translate-y-1 hover:bg-[#1a1e2d] hover:border-blue-400/50 group"
            >
            <div className="w-11 h-11 shrink-0">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <rect width="48" height="48" rx="8" fill="#185ABD" />
                <path
                  d="M28 12H14a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V20L28 12Z"
                  fill="#2B7CD3"
                />
                <path d="M28 12v8h8L28 12Z" fill="#82B4E8" />
                <path
                  d="M16 22h16M16 27h16M16 32h10"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[0.9rem] font-semibold text-textColor">
                Microsoft Word
              </div>
              <div className="text-[0.75rem] text-textDim mt-0.5">
                Menulis makalah bersama
              </div>
            </div>
            <ExternalLink size={16} className="shrink-0 text-muted group-hover:text-textDim transition-colors" />
          </a>
          </Tooltip>

          <Tooltip content="Buka presentasi di Canva" position="top">
            <a
              href="https://canva.link/o135ylm9i2pjr80"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3.5 p-4 rounded-xl border border-border bg-surface no-underline text-textColor transition-all duration-200 hover:-translate-y-1 hover:bg-[#1a1e2d] hover:border-[#00C4CC]/50 group"
            >
            <div className="w-11 h-11 shrink-0">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <rect width="48" height="48" rx="8" fill="#00C4CC" />
                <rect
                  x="10"
                  y="14"
                  width="28"
                  height="20"
                  rx="2"
                  fill="white"
                  fillOpacity="0.2"
                  stroke="white"
                  strokeWidth="1.5"
                />
                <rect
                  x="14"
                  y="18"
                  width="20"
                  height="12"
                  rx="1"
                  fill="white"
                  fillOpacity="0.35"
                />
                <circle cx="24" cy="36" r="1.5" fill="white" />
                <line
                  x1="24"
                  y1="34"
                  x2="24"
                  y2="37"
                  stroke="white"
                  strokeWidth="1.5"
                />
                <line
                  x1="20"
                  y1="38"
                  x2="28"
                  y2="38"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[0.9rem] font-semibold text-textColor">
                Canva
              </div>
              <div className="text-[0.75rem] text-textDim mt-0.5">
                Presentasi
              </div>
            </div>
            <ExternalLink size={16} className="shrink-0 text-muted group-hover:text-textDim transition-colors" />
          </a>
          </Tooltip>

          <Tooltip content="Buka folder berkas kelompok di Google Drive" position="top">
            <a
              href="https://drive.google.com/drive/u/1/folders/1bw-PLHiOR_fS-qzUczeqxmtR_4-vMiC9"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3.5 p-4 rounded-xl border border-border bg-surface no-underline text-textColor transition-all duration-200 hover:-translate-y-1 hover:bg-[#1a1e2d] hover:border-[#00ac47]/50 group"
            >
            <div className="w-11 h-11 shrink-0">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <rect width="48" height="48" rx="8" fill="#1E1E2E" />
                <path d="M24 10 L38 34 H10 Z" fill="none" />
                <path d="M17 34 L10 34 L18 20 L25 34 Z" fill="#0066DA" />
                <path d="M24 10 L31 22 L24 34 L17 22 Z" fill="#00AC47" />
                <path d="M31 22 L38 34 L25 34 L18 22 Z" fill="#FFBA00" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[0.9rem] font-semibold text-textColor">
                Google Drive
              </div>
              <div className="text-[0.75rem] text-textDim mt-0.5">
                Menyimpan semua file
              </div>
            </div>
            <ExternalLink size={16} className="shrink-0 text-muted group-hover:text-textDim transition-colors" />
          </a>
          </Tooltip>
        </div>
      </Section>

      <Section>
        <SectionTitle>Checklist Final — Klik untuk centang</SectionTitle>
        <Card>
          <ul className="list-none m-0 p-0">
            {CHECKLIST_ITEMS.map((item, idx) => {
              const checked = checkedItems.has(idx);
              return (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 py-2.5 border-b border-white/5 last:border-0 text-[0.933rem] text-textDim"
                  onClick={() => toggleCheck(idx)}
                >
                  <div
                    className={cn(
                      "w-4.5 h-4.5 border-[1.5px] border-border rounded ml-0.5 shrink-0 mt-0.5 cursor-pointer transition-colors duration-150 flex items-center justify-center select-none",
                      {
                        "bg-accent2 border-accent2 text-bg font-bold text-[0.733rem]":
                          checked,
                      },
                    )}
                  >
                    {checked && "✓"}
                  </div>
                  <span
                    className={cn(
                      "select-none cursor-pointer transition-colors",
                      { "line-through text-muted": checked },
                    )}
                  >
                    {item}
                  </span>
                </li>
              );
            })}
          </ul>
          <div
            className={cn(
              "mt-3.5 font-mono text-[11px] transition-colors",
              isAllDone ? "text-accent2" : "text-muted",
            )}
          >
            {isAllDone
              ? "✓ Semua checklist selesai — siap dikumpulkan!"
              : `${checkedItems.size} / ${CHECKLIST_ITEMS.length} selesai`}
          </div>
        </Card>
      </Section>
    </div>
  );
}

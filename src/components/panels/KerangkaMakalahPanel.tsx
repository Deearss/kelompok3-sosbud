"use client";

import React, { useState } from "react";
import { PageHeader, Section, SectionTitle, Alert } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

function OutlineNode({ title, children, defaultOpen = false }: { title: React.ReactNode; children?: React.ReactNode; defaultOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <li className="mb-1.5 list-none">
      <div
        className="font-montserrat text-3.75 font-bold text-textColor px-4 py-3 bg-border rounded-2.25 cursor-pointer flex items-center justify-between transition-colors duration-200 hover:bg-[#2a2f42] select-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        {children && (
          <ChevronRight
            size={18}
            className={cn("text-accent transition-transform duration-200", { "rotate-90": isOpen })}
          />
        )}
      </div>
      {children && (
        <div
          className={cn("py-2 pl-4 max-h-0 overflow-hidden transition-all duration-300 ease-in-out opacity-0", {
            "max-h-250 opacity-100": isOpen,
          })}
        >
          <ul className="list-none mb-1 pl-0">{children}</ul>
        </div>
      )}
    </li>
  );
}

function OutlineSub({ children }: { children: React.ReactNode }) {
  return (
    <li className="px-3 py-1.5 border-l-2 border-border ml-1.5 text-[0.867rem] text-textDim transition-colors duration-150 hover:border-accent hover:text-textColor">
      {children}
    </li>
  );
}

function OutlineSub2({ children }: { children: React.ReactNode }) {
  return <ul className="list-none pl-4 mt-1">{children}</ul>;
}

function OutlineSub2Item({ children }: { children: React.ReactNode }) {
  return (
    <li className="text-[0.833rem] text-muted py-1 pl-3 border-l-2 border-border mb-0.5 transition-colors duration-150 hover:text-accent2">
      {children}
    </li>
  );
}

export default function KerangkaMakalahPanel() {
  return (
    <div className="animate-fade-up">
      <PageHeader
        tag="// panel 03 · kerangka makalah"
        title="Struktur isinya?"
        desc="Outline lengkap makalah — klik tiap BAB untuk expand/collapse."
      />

      <Alert className="mb-5" icon="📌">
        <strong>Judul:</strong> Peran Etika dan Norma dalam Meredam Pertentangan Sosial sebagai Upaya Integrasi Masyarakat
      </Alert>

      <Section>
        <SectionTitle>Bagian Pembuka</SectionTitle>
        <Card className="text-3.375 text-textDim !p-5">
          <div className="mb-2">
            <Badge variant="muted" className="!mr-2">1</Badge>
            <strong className="text-textColor">Cover</strong>
          </div>
          <div className="mb-2">
            <Badge variant="muted" className="!mr-2">2</Badge>
            <strong className="text-textColor">Kata Pengantar</strong> — syukur, latar, terima kasih, harapan manfaat
          </div>
          <div>
            <Badge variant="muted" className="!mr-2">3</Badge>
            <strong className="text-textColor">Daftar Isi</strong>
          </div>
        </Card>
      </Section>

      <Section>
        <SectionTitle>Isi Utama — Klik untuk expand</SectionTitle>
        <ul className="list-none p-0 m-0">
          <OutlineNode title="BAB I — Pendahuluan" defaultOpen>
            <OutlineSub>
              <strong>1.1 Latar Belakang</strong>
              <OutlineSub2>
                <OutlineSub2Item>Fenomena pertentangan sosial di Indonesia (data/fakta nyata)</OutlineSub2Item>
                <OutlineSub2Item>Relevansi norma & etika sebagai solusi</OutlineSub2Item>
                <OutlineSub2Item>Urgensi pembahasan topik</OutlineSub2Item>
              </OutlineSub2>
            </OutlineSub>
            <OutlineSub>
              <strong>1.2 Rumusan Masalah</strong>
              <OutlineSub2>
                <OutlineSub2Item>Apa itu etika, moral, akhlak, dan norma?</OutlineSub2Item>
                <OutlineSub2Item>Bentuk dan faktor penyebab pertentangan sosial?</OutlineSub2Item>
                <OutlineSub2Item>Bagaimana peran etika & norma dalam integrasi masyarakat?</OutlineSub2Item>
              </OutlineSub2>
            </OutlineSub>
            <OutlineSub>
              <strong>1.3 Tujuan Penulisan</strong>
            </OutlineSub>
            <OutlineSub>
              <strong>1.4 Manfaat Penulisan</strong> — teoritis & praktis
            </OutlineSub>
          </OutlineNode>

          <OutlineNode title="BAB II — Pembahasan">
            <OutlineSub>
              <strong>2.1 Konsep Etika, Moral, Akhlak, dan Norma</strong>
              <OutlineSub2>
                <OutlineSub2Item>2.1.1 Etika — definisi, nilai internal, sumber norma</OutlineSub2Item>
                <OutlineSub2Item>2.1.2 Moral & Akhlak sebagai Dimensi Etika</OutlineSub2Item>
                <OutlineSub2Item>2.1.3 Norma — jenis-jenis, fungsi kontrol sosial</OutlineSub2Item>
              </OutlineSub2>
            </OutlineSub>
            <OutlineSub>
              <strong>2.2 Pertentangan Sosial</strong>
              <OutlineSub2>
                <OutlineSub2Item>2.2.1 Definisi — bedakan konflik, disintegrasi, diskriminasi</OutlineSub2Item>
                <OutlineSub2Item>2.2.2 Faktor Penyebab — kepentingan, SARA, kesenjangan, lemahnya etika</OutlineSub2Item>
                <OutlineSub2Item>2.2.3 Dampak — kohesi sosial, stabilitas, pembangunan</OutlineSub2Item>
              </OutlineSub2>
            </OutlineSub>
            <OutlineSub>
              <strong>2.3 Peran Etika & Norma dalam Meredam Pertentangan</strong>
              <OutlineSub2>
                <OutlineSub2Item>2.3.1 Mekanisme kerja — rem sosial sebelum konflik eskalasi</OutlineSub2Item>
                <OutlineSub2Item>2.3.2 Kontribusi terhadap Integrasi Masyarakat</OutlineSub2Item>
                <OutlineSub2Item>2.3.3 Contoh Kasus Nyata di Indonesia ⚠️ butuh sumber kuat</OutlineSub2Item>
              </OutlineSub2>
            </OutlineSub>
          </OutlineNode>

          <OutlineNode title="BAB III — Penutup">
            <OutlineSub>
              <strong>3.1 Kesimpulan</strong>
              <OutlineSub2>
                <OutlineSub2Item>Jawab langsung 3 rumusan masalah dari BAB I</OutlineSub2Item>
                <OutlineSub2Item>Tegaskan rantai kausal: etika → norma → meredam pertentangan → integrasi</OutlineSub2Item>
                <OutlineSub2Item>Singkat, padat, tidak bertele-tele</OutlineSub2Item>
              </OutlineSub2>
            </OutlineSub>
            <OutlineSub>
              <strong>3.2 Saran</strong>
              <OutlineSub2>
                <OutlineSub2Item>Realistis dan konkret (hindari yang terlalu utopis)</OutlineSub2Item>
                <OutlineSub2Item>Contoh: pendidikan karakter, penguatan nilai etika di institusi sosial</OutlineSub2Item>
              </OutlineSub2>
            </OutlineSub>
          </OutlineNode>
        </ul>
      </Section>
    </div>
  );
}

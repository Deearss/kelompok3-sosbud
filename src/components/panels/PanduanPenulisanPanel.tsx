"use client";

import React from "react";
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
  { label: "Daftar Pustaka", value: "APA 6 Style" },
];

const CHECKLIST_ITEMS = [
  "Font Times New Roman ukuran 12",
  "Spasi 2 di seluruh dokumen",
  "Kertas Kuarto (A4)",
  "Semua referensi harus ada link-nya biar bisa di verifikasi kebenarannya",
  "Ada minimal 1 contoh kasus nyata",
  "Daftar pustaka format APA 6",
  "Struktur lengkap (Cover → Daftar Pustaka)",
  "Semua anggota sudah review keseluruhan isi",
];

const REFERENCES = [
  {
    citation: "Aditya, N. R. (2026, Februari 26). Bareskrim Tegaskan Proses Pidana Kasus Pandji Pragiwaksono Tetap Berjalan meski Sudah Sidang Adat. Dipetik April 2026, dari Kompas.com: ",
    url: "https://nasional.kompas.com/read/2026/02/26/11214791/bareskrim-tegaskan-proses-pidana-kasus-pandji-pragiwaksono-tetap-berjalan",
  },
  {
    citation: "Ambo Dalle, T. (2025). Dimensi-Dimensi dalam Beragama: Spiritual, Intelektual, Emosi, Etika, dan Sosial. Ikhlas : Jurnal Ilmiah Pendidikan Islam, 2(1), 151-165. doi:",
    url: "https://doi.org/10.61132/ikhlas.v2i1.302",
  },
  {
    citation: "Anwar, S. (2016, Juni). Teori Pertingkatan Norma dalam Usul Fikih. Asy Syir'ah Jurnal Ilmu Syari'ah dan Hukum, 50(1), 141-167. Dipetik Maret 2026, dari ",
    url: "https://digilib.uin-suka.ac.id/id/eprint/24338",
  },
  {
    citation: "Bahasa, P. (2025, Oktober). Kamus Besar Bahasa Indonesia. Dipetik Maret 2026, dari Kamus Besar Bahasa Indonesia (KBBI) daring: ",
    url: "https://kbbi.web.id/norma",
  },
  {
    citation: "Bandaso, R. A. (2026, Februari 8). Pandji Pragiwaksono Akan Diadili Secara Adat Buntut Candaan Budaya Toraja. Dipetik April 2026, dari detiknews: ",
    url: "https://news.detik.com/berita/d-8346422/pandji-pragiwaksono-akan-diadili-secara-adat-buntut-candaan-budaya-toraja",
  },
  {
    citation: "Darmanto. (2026). INTEGRASI ETIKA ISLAM DAN PENDIDIKAN KARAKTER HUMANIS DI SEKOLAH ISLAM DALAM MERESPON KRISIS SOSIAL (Studi Kasus Pada SDIT Alam Nurul Islam Dua Ngawi). Al-Muaddib Jurnal Kajian Ilmu Kependidikan, 62-80. doi:",
    url: "https://doi.org/10.46773/cwws4p73",
  },
  {
    citation: "Detikcom, T. (2025, November 4). Kecaman ke Pandji Pragiwaksono imbas candaan singgung adat Toraja. Dipetik April 2026, dari detiknews: ",
    url: "https://news.detik.com/berita/d-8192755/kecaman-ke-pandji-pragiwaksono-imbas-candaan-singgung-adat-toraja",
  },
  {
    citation: "detikSulsel, T. (2025, November 4). Buntut Candaan Adat Toraja, Pandji Pragiwaksono Minta Maaf. Dipetik April 2026, dari detiksumut: ",
    url: "https://www.detik.com/sumut/berita/d-8193038/buntut-candaan-adat-toraja-pandji-pragiwaksono-minta-maaf",
  },
  {
    citation: "Nurmaya, E. R. (2026, Februari 11). Akhir Perjalanan Panjang Kontroversi Pandji Pragiwaksono di Toraja: dari Materi Viral hingga Sidang Adat 2026. Dipetik April 2026, dari Suara Merdeka: ",
    url: "https://www.suaramerdeka.com/nasional/0416707976/akhir-perjalanan-panjang-kontroversi-pandji-pragiwaksono-di-toraja",
  },
  {
    citation: "Rahmani, N. P. (2026, Februari 2). Pandji Pragiwaksono diperiksa terkait dugaan penghinaan suku Toraja. Dipetik April 2026, dari Antara News: ",
    url: "https://www.antaranews.com/berita/5391510/pandji-pragiwaksono-diperiksa-terkait-dugaan-penghinaan-suku-toraja",
  },
  {
    citation: "Rahmawati, D. (2025, November 3). Anggota DPR Desak Pandji Pragiwaksono Minta Maaf Buntut Candaan Adat Toraja. Dipetik April 2026, dari detikNews: ",
    url: "https://news.detik.com/berita/d-8191373/anggota-dpr-desak-pandji-pragiwaksono-minta-maaf-buntut-candaan-adat-toraja",
  },
  {
    citation: "Revalina, A., & Aslan, A. (2025). PERUBAHAN NORMA ETIKA DALAM HUBUNGAN SOSIAL DI PLATFORM MEDIA SOSIAL. Jurnal Komunikasi, 223-231. Dipetik April 2026, dari ",
    url: "https://jkm.my.id/index.php/komunikasi/article/view/144",
  },
  {
    citation: "Rokhmah, U. N., & Siregar, T. E. (2024). Integrasi Nilai, Moral, dan Norma dalam Pendidikan Dasar. Jurnal An-Nashr. doi:",
    url: "https://doi.org/10.65317/an-nashr.v3i2.58",
  },
  {
    citation: "Sudarminta, J. (2013). Etika Umum: Kajian tentang beberapa masalah pokok dan teori etika normatif. Daerah Istimewa Yogyakarta: PT. Kanisius. Dipetik Maret 2026, dari ",
    url: "https://www.google.co.id/books/edition/Etika_Umum/yrziEAAAQBAJ",
  },
  {
    citation: "Widodo, S. (2011, Januari). IMPLEMENTASI BELA NEGARA UNTUK MEWUJUDKAN NASIONALISME. Jurnal Ilmiah CIVIS, 1(1), 18-31. Dipetik April 2026, dari ",
    url: "https://journal.upgris.ac.id/index.php/civis/article/view/572",
  },
  {
    citation: "Wijoko Lestariono, A. S. (Desember 2022). KONFLIK DAN PERUBAHAN SOSIAL. Wacana: Jurnal Ilmu Sosial dan Ilmu Politik Interdisiplin, 465-477. doi:",
    url: "https://doi.org/10.37304/wacana.v9i2.7476",
  },
];

import { useAppStore } from "@/store/useAppStore";

export default function PanduanPenulisanPanel() {
  const checkedItems = useAppStore((state) => state.checkedItems);
  const toggleCheck = useAppStore((state) => state.toggleCheck);

  const isAllDone = checkedItems.length === CHECKLIST_ITEMS.length;

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
        <SectionTitle>Kerangka Makalah</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          <Card className="flex flex-col gap-2 p-4 h-fit">
            <Badge variant="yellow" className="self-start mb-0! mr-0!">BAB I · PENDAHULUAN</Badge>
            <div className="text-[0.8rem] text-textDim mt-1 leading-relaxed">
              1.1 Latar Belakang<br/>
              1.2 Rumusan Masalah<br/>
              1.3 Tujuan Penulisan<br/>
              1.4 Manfaat Penulisan
            </div>
          </Card>
          
          <Card className="flex flex-col gap-2 p-4 h-fit">
            <Badge variant="yellow" className="self-start mb-0! mr-0!">BAB II · PEMBAHASAN</Badge>
            <div className="text-[0.8rem] text-textDim mt-1 leading-relaxed">
              <span className="font-semibold text-textColor">2.1 Konsep Etika, Moral, Akhlak, dan Norma</span><br/>
              &nbsp;&nbsp;2.1.1 Etika<br/>
              &nbsp;&nbsp;2.1.2 Moral dan Akhlak sebagai Dimensi Etika<br/>
              &nbsp;&nbsp;2.1.3 Norma Sebagai Kontrol Sosial<br/>
              <span className="font-semibold text-textColor mt-2 block">2.2 Pertentangan Sosial</span>
              &nbsp;&nbsp;2.2.1 Definisi Pertentangan Sosial<br/>
              &nbsp;&nbsp;2.2.2 Faktor Penyebab Pertentangan Sosial<br/>
              &nbsp;&nbsp;2.2.3 Dampak Pertentangan Sosial<br/>
              <span className="font-semibold text-textColor mt-2 block">2.3 Solusi dan Kasus Nyata</span>
              &nbsp;&nbsp;2.3.1 Mekanisme Kerja Etika dan Norma<br/>
              &nbsp;&nbsp;2.3.2 Kontribusi Terhadap Upaya Integrasi Masyarakat<br/>
              &nbsp;&nbsp;2.3.3 Contoh Kasus Nyata
            </div>
          </Card>

          <Card className="flex flex-col gap-2 p-4 h-fit">
            <Badge variant="yellow" className="self-start mb-0! mr-0!">BAB III · PENUTUP</Badge>
            <div className="text-[0.8rem] text-textDim mt-1 leading-relaxed">
              3.1 Kesimpulan<br/>
              3.2 Saran
            </div>
          </Card>
        </div>
        
        <Card className="mt-3.5 p-5 flex flex-col gap-3">
          <span className="text-accent2 font-bold tracking-widest text-[0.9rem] border-b border-border pb-3 mb-1">DAFTAR PUSTAKA</span>
          <ul className="text-[0.75rem] md:text-[0.8rem] text-textDim flex flex-col gap-3 list-none pl-0 m-0">
            {REFERENCES.map((ref, idx) => (
              <li key={idx} className="pl-5 -indent-5 leading-relaxed">
                {ref.citation}
                <a
                  href={ref.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent2 hover:underline break-words"
                >
                  {ref.url}
                </a>
              </li>
            ))}
          </ul>
        </Card>
      </Section>

      <Section>
        <SectionTitle>Tools Kolaborasi</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Tooltip content="Buka dokumen makalah Word Online" position="top">
            <a
              href="/go/makalah"
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
                  <defs>
                    <clipPath id="word-clip2">
                      <rect x="16" y="6" width="28" height="36" rx="4" />
                    </clipPath>
                    <filter
                      id="word-shadow2"
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
                  <g clipPath="url(#word-clip2)">
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
                    filter="url(#word-shadow2)"
                  />
                  <path
                    d="M 8 18 L 12 30 L 14.5 30 L 17 21 L 19.5 30 L 22 30 L 26 18 L 23 18 L 20.5 27 L 18 18 L 16 18 L 13.5 27 L 11 18 Z"
                    fill="white"
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
              <ExternalLink
                size={16}
                className="shrink-0 text-muted group-hover:text-textDim transition-colors"
              />
            </a>
          </Tooltip>

          <Tooltip content="Buka presentasi di Canva" position="top">
            <a
              href="/go/ppt"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3.5 p-4 rounded-xl border border-border bg-surface no-underline text-textColor transition-all duration-200 hover:-translate-y-1 hover:bg-[#1a1e2d] hover:border-[#00C4CC]/50 group"
            >
              <div className="w-11 h-11 shrink-0">
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full rounded-full"
                >
                  <defs>
                    <linearGradient
                      id="canvaGrad2"
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
                  <circle cx="24" cy="24" r="24" fill="url(#canvaGrad2)" />
                  <path
                    d="M31.21 16.63C28.69 13.11 23.95 12 18.91 14.53C13.25 17.39 9.87 24.11 11.23 30.12C12.59 36.13 18.23 39.81 24.51 39.42C29.08 39.13 32.06 36.03 33.72 32.32C34.55 30.46 31.81 29.41 30.65 31.05C29.13 33.2 26.86 34.61 24.08 34.68C18.66 34.82 16.03 30.01 16.14 24.63C16.22 20.35 19.34 16.67 24.02 16.01C26.33 15.68 28.84 16.29 30.45 17.8C31.54 18.82 32.58 17.51 31.21 16.63Z"
                    fill="white"
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
              <ExternalLink
                size={16}
                className="shrink-0 text-muted group-hover:text-textDim transition-colors"
              />
            </a>
          </Tooltip>

          <Tooltip
            content="Buka folder berkas kelompok di Google Drive"
            position="top"
          >
            <a
              href="/go/drive"
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
                  <rect width="48" height="48" rx="8" fill="white" />
                  <path d="M19 11 L9 28.3 L14 37 L24 19.7 Z" fill="#34A853" />
                  <path d="M29 11 L19 11 L29 28.3 L39 28.3 Z" fill="#FFC107" />
                  <path d="M14 37 L19 28.3 L39 28.3 L34 37 Z" fill="#4285F4" />
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
              <ExternalLink
                size={16}
                className="shrink-0 text-muted group-hover:text-textDim transition-colors"
              />
            </a>
          </Tooltip>
        </div>
      </Section>

      <Section>
        <SectionTitle>Checklist Final — Klik untuk centang</SectionTitle>
        <Card>
          <ul className="list-none m-0 p-0">
            {CHECKLIST_ITEMS.map((item, idx) => {
              const checked = checkedItems.includes(idx);
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
              : `${checkedItems.length} / ${CHECKLIST_ITEMS.length} selesai`}
          </div>
        </Card>
      </Section>
    </div>
  );
}

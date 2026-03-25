import React from "react";
import { PageHeader, Section, SectionTitle, Alert } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

function TaskCard({
  role,
  name,
  badgeText,
  badgeVariant,
  items,
  note,
  noteColor = "red",
  className,
  isSpecial,
  isLeader,
}: {
  role: React.ReactNode;
  name: string;
  badgeText: string;
  badgeVariant: "muted" | "red" | "green" | "yellow";
  items: string[];
  note?: string;
  noteColor?: "red" | "green";
  className?: string;
  isSpecial?: boolean;
  isLeader?: boolean;
}) {
  return (
    <div
      className={cn(
        "bg-surface border border-border rounded-[14px] p-5 transition-colors duration-200 relative overflow-hidden group hover:border-[#2e344d] hover:-translate-y-0.5",
        className
      )}
    >
      <div
        className={cn(
          "absolute top-0 left-0 w-0.75 h-full opacity-0 transition-opacity duration-200 group-hover:opacity-100",
          {
            "bg-accent": !isSpecial && !isLeader,
            "bg-danger opacity-100": isSpecial,
            "bg-accent2 opacity-100": isLeader,
          }
        )}
      />
      <div className="flex items-start justify-between mb-2.5">
        <div>
          <div className="font-inter text-[0.667rem] text-muted uppercase tracking-[0.08em]">
            {role}
          </div>
          <div className="font-montserrat text-[1rem] font-bold text-textColor my-1">
            {name}
          </div>
        </div>
        <Badge variant={badgeVariant}>{badgeText}</Badge>
      </div>

      <ul className="list-none m-0 p-0">
        {items.map((item, idx) => (
          <li
            key={idx}
            className="text-[0.867rem] text-textDim py-1 pl-4 relative border-b border-white/5 last:border-0 before:content-['›'] before:absolute before:left-0 before:text-accent before:font-bold"
          >
            {item}
          </li>
        ))}
      </ul>

      {note && (
        <div
          className={cn(
            "mt-3 px-3 py-2.5 rounded-lg text-[0.8rem] leading-normal",
            {
              "bg-danger/5 border border-danger/15 text-[#ff9f9f]": noteColor === "red",
              "bg-accent2/5 border border-accent2/15 text-[#7de8c8]": noteColor === "green",
            }
          )}
        >
          {note}
        </div>
      )}
    </div>
  );
}

function CoordCard({
  step,
  name,
  role,
  desc,
  isCritical,
  isFinal,
}: {
  step: string;
  name: string;
  role: string;
  desc: string;
  isCritical?: boolean;
  isFinal?: boolean;
}) {
  return (
    <div
      className={cn(
        "bg-surface border border-border rounded-[14px] px-4 py-4.5 transition-colors duration-200 hover:border-[#2e344d]",
        {
          "border-danger/25 bg-danger/5": isCritical,
          "border-accent2/25 bg-accent2/5": isFinal,
        }
      )}
    >
      <div
        className={cn(
          "font-montserrat text-[0.667rem] font-extrabold tracking-[0.12em] uppercase mb-2.5",
          {
            "text-accent": !isCritical && !isFinal,
            "text-danger": isCritical,
            "text-accent2": isFinal,
          }
        )}
      >
        {step}
      </div>
      <div className="font-montserrat text-[1rem] font-bold text-textColor mb-1">
        {name}
      </div>
      <div className="text-[0.733rem] text-muted uppercase tracking-[0.07em] mb-2.5">
        {role}
      </div>
      <div className="text-[0.833rem] text-textDim leading-[1.65]">{desc}</div>
    </div>
  );
}

export default function PembagianTugasPanel() {
  return (
    <div className="animate-fade-up">
      <PageHeader
        tag="// panel 01 · pembagian tugas"
        title="Siapa ngerjain apa?"
        desc="Distribusi tanggung jawab dan alur koordinasi antar anggota kelompok."
      />

      <Section>
        <SectionTitle>Koordinator</SectionTitle>
        <TaskCard
          isLeader
          role="Ketua Kelompok"
          name="🏛️ Haidir — BAB I & Review Final"
          badgeText="Leads"
          badgeVariant="green"
          items={[
            "1.1 Latar Belakang (buka dengan data/fakta nyata pertentangan sosial di Indonesia)",
            "1.2 Rumusan Masalah (kontrak seluruh makalah — selesaikan lebih awal)",
            "1.3 Tujuan Penulisan",
            "1.4 Manfaat Penulisan",
            "Rapiin Daftar Isi",
            "Review & quality check semua bagian, pastikan konsistensi argumen",
          ]}
        />
      </Section>

      <Section>
        <SectionTitle>Anggota</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <TaskCard
            role="Imam"
            name="✍️ Kata Pengantar"
            badgeText="Pembuka"
            badgeVariant="muted"
            items={[
              "Ucapan syukur",
              "Latar belakang singkat kenapa topik ini dipilih",
              "Ucapan terima kasih ke dosen & anggota kelompok",
              "Harapan atas manfaat makalah",
            ]}
          />
          <TaskCard
            role="Azkaa"
            name="📚 Definisi & Konsep"
            badgeText="BAB II · 2.1"
            badgeVariant="muted"
            items={[
              "2.1.1 Etika",
              "2.1.2 Moral & Akhlak sebagai Dimensi Etika",
              "2.1.3 Norma",
            ]}
            note="Fondasi seluruh makalah. Semua definisi wajib pakai referensi akademik. Koordinasi dengan Reno dan Azkiya."
            noteColor="green"
          />
          <TaskCard
            role="Reno"
            name="⚡ Pertentangan Sosial"
            badgeText="BAB II · 2.2"
            badgeVariant="muted"
            items={[
              "2.2.1 Definisi Pertentangan Sosial",
              "2.2.2 Faktor Penyebab",
              "2.2.3 Dampak Pertentangan Sosial",
            ]}
            note="Bedakan dengan jelas: konflik, disintegrasi, dan diskriminasi. Koordinasi dengan Azkiya."
            noteColor="green"
          />
          <TaskCard
            isSpecial
            role="Azkiya — ⚠️ Kritis"
            name="🔗 Solusi & Kasus Nyata"
            badgeText="BAB II · 2.3"
            badgeVariant="red"
            items={[
              "2.3.1 Mekanisme Kerja Etika & Norma",
              "2.3.2 Kontribusi terhadap Integrasi",
              "2.3.3 Contoh Kasus Nyata",
            ]}
            note="Wajib baca & paham output Azkaa (2.1) dan Reno (2.2) dulu. Pilih kasus nyata di Indonesia dengan sumber yang bisa dipertanggungjawabkan secara akademik."
            noteColor="red"
          />
          <TaskCard
            className="sm:col-span-2"
            role="Rezaa"
            name="🏁 Penutup"
            badgeText="BAB III"
            badgeVariant="muted"
            items={[
              "3.1 Kesimpulan — jawab langsung 3 rumusan masalah dari BAB I",
              "3.2 Saran — realistis & konkret, hindari yang terlalu utopis",
            ]}
            note="Baca semua bagian sebelum nulis kesimpulan. Tegaskan rantai kausal: etika → norma → meredam pertentangan → integrasi."
            noteColor="green"
          />
        </div>
      </Section>

      <Section>
        <SectionTitle>Kolaborasi</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <TaskCard
            role="Azkaa · Reno · Azkiya"
            name="📖 Daftar Pustaka"
            badgeText="Kolaborasi"
            badgeVariant="yellow"
            items={[
              "Kumpulkan semua referensi yang dipakai masing-masing",
              "Format APA — minimal dari jurnal akademik & buku teks",
              "Hindari blog, Wikipedia, atau sumber tidak terverifikasi",
              "Pastikan setiap referensi muncul di isi makalah & sebaliknya",
            ]}
          />
          <TaskCard
            role="Imam · Rezaa"
            name="🎤 Presenter Utama"
            badgeText="Presentasi"
            badgeVariant="green"
            items={[
              "Wajib baca & pelajari keseluruhan makalah sebelum hari H",
              "Pahami flow argumentasi, bukan sekadar hafal isi",
              "Seluruh anggota wajib siap mem-backup jika ada pertanyaan sulit",
            ]}
          />
        </div>
      </Section>

      <Section>
        <SectionTitle>Alur Koordinasi</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 gap-y-3.5">
          <CoordCard
            step="01 · Mulai"
            name="Haidir"
            role="BAB I"
            desc="Tulis Rumusan Masalah lebih awal — ini kontrak seluruh makalah. Anggota lain tidak bisa mulai tanpa fondasi ini."
          />
          <CoordCard
            step="02 · Paralel"
            name="Azkaa"
            role="BAB II · 2.1"
            desc="Bangun fondasi konsep: etika, moral, akhlak, dan norma. Semua definisi wajib bersumber dari jurnal atau buku akademik."
          />
          <CoordCard
            step="02 · Paralel"
            name="Reno"
            role="BAB II · 2.2"
            desc="Bedah pertentangan sosial: definisi, faktor penyebab, dan dampaknya. Ini 'problem' yang akan dijawab oleh Azkiya."
          />
          <CoordCard
            isCritical
            step="03 · Kritis"
            name="Azkiya"
            role="BAB II · 2.3"
            desc="Sintesis output Azkaa & Reno menjadi solusi konkret. Wajib baca 2.1 dan 2.2 dulu. Sertakan kasus nyata Indonesia yang bisa dipertahankan."
          />
          <CoordCard
            step="04 · Paralel"
            name="Rezaa"
            role="BAB III · Penutup"
            desc="Baca semua bagian terlebih dahulu. Kesimpulan harus menjawab langsung 3 rumusan masalah dari BAB I — tidak boleh melenceng."
          />
          <CoordCard
            step="04 · Paralel"
            name="Imam"
            role="Kata Pengantar"
            desc="Tulis setelah isi makalah selesai agar konteks yang disampaikan akurat. Sertakan ucapan syukur, latar belakang singkat, dan harapan manfaat."
          />
          <CoordCard
            isFinal
            step="05 · Final"
            name="Haidir"
            role="Review & Rapiin"
            desc="Cek konsistensi argumen antar bagian, rapikan Daftar Isi, dan pastikan seluruh makalah siap dikumpulkan."
          />
        </div>
      </Section>

      <Alert>
        <strong>Reminder:</strong> Semua anggota wajib memahami keseluruhan isi makalah, bukan hanya bagian masing-masing. Persiapan tanya jawab kritis = wajib.
      </Alert>
    </div>
  );
}

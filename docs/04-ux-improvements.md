# 04 — UX Improvements & Tooltip Component

> Dokumen ini mencatat perubahan yang dilakukan pada sesi pengembangan kedua (2026-03-25).

## Perubahan yang Dilakukan

### 1. Sidebar Tool Links — Redesign Clickable UI

**Masalah**: Tool links (Word, Slides, Drive) terlalu flat, tidak terasa seperti tombol yang bisa diklik.

**Solusi** (`Sidebar.tsx`):
- Tombol diberi `border border-border` yang selalu terlihat
- Icon diperbesar (`w-8 h-8`)
- Brand-color hover border per tool (biru/kuning/hijau)
- `ExternalLink` icon dari `lucide-react` selalu visible di kanan
- Hover lift animation (`-translate-y-px`)

---

### 2. Sidebar Sticky Fix

**Masalah**: Sidebar ikut scroll bersama konten.

**Root cause** (`page.tsx`): `overflow-hidden` pada wrapper flex memotong scroll context, sehingga `position: sticky` tidak bekerja.

**Solusi**:
```diff
- <div className="flex min-h-screen ... overflow-hidden">
+ <div className="flex h-screen ...">
-   <main className="flex-1 ...">
+   <main className="flex-1 ... overflow-y-auto">
```

Scroll sekarang terjadi di `<main>`, bukan di window. Sidebar sticky bekerja sempurna.

---

### 3. ExternalLink Icon — Tools Kolaborasi

Icon `↗` unicode di `PanduanPenulisanPanel.tsx` diganti ke komponen `ExternalLink` dari `lucide-react` (size 16) agar konsisten dengan sidebar.

---

### 4. Tooltip Component — `src/components/ui/Tooltip.tsx`

**Komponen reusable** untuk menampilkan tooltip informatif saat hover.

**Arsitektur**: React Portal + `position: fixed`

> Kenapa Portal? Tooltip yang di-render dengan `position: absolute` di dalam `<aside>` akan terjebak di stacking context sidebar (`sticky` element). Dengan Portal, tooltip di-render langsung di `document.body` sehingga tidak bisa di-clip oleh parent apapun.

**Props**:
| Prop | Type | Default | Keterangan |
|------|------|---------|------------|
| `content` | `string` | — | Teks tooltip |
| `position` | `"top" \| "bottom" \| "right"` | `"top"` | Arah munculnya tooltip |
| `children` | `ReactNode` | — | Element yang di-wrap |
| `className` | `string` | — | Class tambahan pada wrapper |

**Penggunaan**:
```tsx
import { Tooltip } from "@/components/ui/Tooltip";

<Tooltip content="Teks yang muncul saat hover" position="right">
  <button>Hover me</button>
</Tooltip>
```

**Penting**: Wrapper Tooltip menggunakan `block w-full` — pastikan children juga `w-full` jika ingin tombol stretch penuh.

**Di mana dipakai**:
- `Sidebar.tsx` — 3 tool links (position: `right`)
- `PanduanPenulisanPanel.tsx` — 3 tool links di "Tools Kolaborasi" (position: `top`)

---

## Catatan untuk Pengembangan Berikutnya

> [!WARNING]
> **Responsivitas mobile belum diimplementasikan.** Halaman ini didesain untuk desktop. Saat dibuka di viewport mobile, layout sidebar + main akan berhamburan karena tidak ada breakpoint responsive yang ditentukan.

**Yang perlu ditangani**:
- Sidebar sebaiknya disembunyikan di mobile dan diganti dengan hamburger menu atau bottom navigation
- Grid layout di `PembagianTugasPanel` dan `PanduanPenulisanPanel` perlu diatur ulang untuk layar kecil
- Font size dan spacing harus disesuaikan untuk mobile

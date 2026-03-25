# Dokumentasi Styling (Tailwind v4 & Utilitas)

## Tailwind CSS v4 Baru
Berbeda dengan Tailwind lama, aplikasi ini menggunakan fungsionalitas deklarasi murni via CSS (Tailwind v4) tanpa file `tailwind.config.ts` panjang yang menjemukan.

### `globals.css`
Aplikasi mendaftarkan variable kustom di dalam block spesifik `@theme`:
```css
@theme {
  --color-bg: #0d0f14;
  --color-surface: #141720;
  --color-border: #222636;
  --color-accent: #f0c040;
  --color-accent2: #4fd1a5;
  --color-muted: #5a607a;
  --color-textColor: #e4e8f5;
...
```
Fungsi ini otomatis men-generate kelas standar (`bg-surface`, `text-accent`, `border-border`). Animasi keyframe (`fadeUp`) juga dideklarasikan secara global untuk efek memantul di interaksi tabulasi. 
Di sisi bawah, sebuah filter noise tekstur (SVG Base64) dibubuhkan secara absolut menimpa `<body />` agar memberikan estetika premium khas dashboard glassmorphism.

## Manajemen Kondisi Properti (clsx & twMerge)
Aplikasi sangat banyak merender properti Class name secara dinamis berdasarkan state. Karenanya, fungsi utilitas global `cn` pada `src/lib/utils.ts`:
```ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```
Ini berfungsi agar Tailwind-merge tidak bentrok pada override (misal deklarasi text merah tapi ada interupsi conditional class text hijau). Ini esensial dan diaplikasikan pada nyaris seluruh komponen buatan proyek ini.

## Catatan Kelas Kanonikal
Semua peringatan "arbitrary canonical logic" bawaan lint Visual Studio Code Tailwind (seperti `gap-[4px]` menjadi `gap-1`) sudah dinormalisasikan agar codebase sepenuhnya sinkron dengan unit *rem* Tailwind.

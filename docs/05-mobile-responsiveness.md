# 05 — Mobile Responsiveness

> Sesi pengembangan ketiga (2026-03-25). Breakpoint utama: `md` (768px).

## Perubahan

### `page.tsx` — Mobile Layout Orchestrator

Ditambahkan state `sidebarOpen` untuk mengontrol mobile drawer. Dibuat komponen `<header>` mobile-only (`md:hidden`) yang berisi:
- **Hamburger button** (3 bar) untuk membuka sidebar
- **Brand name** ringkas

Ditambahkan **backdrop overlay** (`fixed inset-0 bg-black/60`) yang menutup sidebar saat diklik.

Main content mendapat padding top ekstra (`pt-22`) untuk mengkompensasi fixed header di mobile, di-reset ke normal di desktop (`md:pt-10`).

---

### `Sidebar.tsx` — Mobile Drawer

Props baru: `isOpen?: boolean`, `onClose?: () => void`

Strategi dual-mode dengan `cn()`:
```
// Desktop — sticky sidebar
"md:sticky md:top-0 md:h-screen md:w-87.5 md:translate-x-0"

// Mobile — fixed drawer slide-in dari kiri
"fixed inset-y-0 left-0 z-40 w-70 transition-transform"
// hidden:  -translate-x-full
// visible: translate-x-0
```

Ditambahkan tombol **X (close)** di pojok kanan sidebar, hanya terlihat di mobile (`md:hidden`). Sidebar otomatis menutup saat user berpindah tab.

---

### `PageHeader.tsx` — Responsive Title

`h1` font size: `text-[1.6rem]` di mobile → `md:text-[2.133rem]` di desktop.

---

### `PanduanPenulisanPanel.tsx` — Scrollable Tables

Kedua container tabel (`Format Dasar` & `Ketentuan Referensi`) ditambahkan `overflow-x-auto` sehingga scroll horizontal di mobile, tidak overflow keluar container.

---

## Catatan

Grids di `PembagianTugasPanel` sudah responsif sejak awal (`grid-cols-1 sm:grid-cols-2`). Grid `Alur Koordinasi` menggunakan `md:grid-cols-2 lg:grid-cols-3` — sudah aman di mobile.
